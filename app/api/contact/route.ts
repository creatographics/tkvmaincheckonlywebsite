import { NextRequest, NextResponse } from 'next/server'
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
    
    // Generate a simple submission ID
    const submissionId = `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Send email notification to agency
    const emailData = createContactFormNotificationEmail({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      subject: validatedData.subject,
      message: validatedData.message,
      ipAddress: ip,
      submissionId
    })

    await sendEmail({
      to: 'contact@tkvcreatographics.com',
      subject: `📧 Contact Form: ${validatedData.subject}`,
      html: emailData.html,
      text: emailData.text
    })

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully. We\'ll get back to you soon!',
      id: submissionId
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
