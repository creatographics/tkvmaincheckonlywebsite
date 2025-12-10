import { NextRequest, NextResponse } from 'next/server'
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
    
    // Generate a simple request ID
    const requestId = `quote-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Send email notification to agency
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
      requestId
    })

    await sendEmail({
      to: 'contact@tkvcreatographics.com',
      subject: `💰 Quotation Request: ${validatedData.service}`,
      html: emailData.html,
      text: emailData.text
    })

    return NextResponse.json({ 
      success: true,
      message: 'Quotation request submitted successfully. We\'ll send you a detailed quote within 24 hours!',
      id: requestId
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
