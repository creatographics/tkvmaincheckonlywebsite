import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { contactFormSchema } from '@/lib/validations'
import { rateLimit, rateLimitPresets } from '@/lib/rate-limit'
import { sendEmail, createContactFormNotificationEmail } from '@/lib/email'

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
    const validatedData = contactFormSchema.parse(body)

    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    // Create form submission in database
    const formSubmission = await prisma.formSubmission.create({
      data: {
        type: 'CONTACT',
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        service: validatedData.subject,
        message: validatedData.message,
        ipAddress: ip,
        userAgent,
        status: 'PENDING'
      }
    })

    // Send email notification to agency
    try {
      const emailData = createContactFormNotificationEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
        ipAddress: ip,
        submissionId: formSubmission.id
      })

      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'agency@tkvcreato.com',
        subject: `📧 Contact Form: ${validatedData.subject}`,
        html: emailData.html,
        text: emailData.text
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully. We\'ll get back to you soon!',
      id: formSubmission.id
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error processing contact form:', error)
    
    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json({ 
        error: 'Validation failed', 
        details: error.errors 
      }, { status: 400 })
    }
    
    return NextResponse.json({ 
      error: 'Failed to send message. Please try again.' 
    }, { status: 500 })
  }
}
