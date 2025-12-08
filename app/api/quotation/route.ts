import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { quotationFormSchema } from '@/lib/validations'
import { rateLimit, rateLimitPresets } from '@/lib/rate-limit'
import { sendEmail, createQuotationRequestNotificationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - 5 requests per 15 minutes
    const rateLimitResult = await rateLimit(rateLimitPresets.strict)(request)
    if (rateLimitResult) return rateLimitResult

    const body = await request.json()
    
    // Check honeypot (anti-spam)
    if (body.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 })
    }
    
    // Validate with Zod
    const validatedData = quotationFormSchema.parse(body)

    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    // Create form submission in database
    const formSubmission = await prisma.formSubmission.create({
      data: {
        type: 'QUOTATION',
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        message: [
          validatedData.company ? `Company: ${validatedData.company}` : '',
          validatedData.budget ? `Budget: ${validatedData.budget}` : '',
          validatedData.timeline ? `Timeline: ${validatedData.timeline}` : '',
          validatedData.message || ''
        ].filter(Boolean).join('\n'),
        ipAddress: ip,
        userAgent,
        status: 'PENDING'
      }
    })

    // Send email notification to agency
    try {
      const emailData = createQuotationRequestNotificationEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        service: validatedData.service,
        budget: validatedData.budget,
        timeline: validatedData.timeline,
        message: validatedData.message,
        ipAddress: ip,
        requestId: formSubmission.id
      })

      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'agency@tkvcreato.com',
        subject: `💰 Quotation Request: ${validatedData.service}`,
        html: emailData.html,
        text: emailData.text
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ 
      success: true,
      message: 'Quotation request submitted successfully. We\'ll send you a detailed quote within 24 hours!',
      id: formSubmission.id
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error processing quotation request:', error)
    
    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json({ 
        error: 'Validation failed', 
        details: error.errors 
      }, { status: 400 })
    }
    
    return NextResponse.json({ 
      error: 'Failed to submit quotation request. Please try again.' 
    }, { status: 500 })
  }
}
