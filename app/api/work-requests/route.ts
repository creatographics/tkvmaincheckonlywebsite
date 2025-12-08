import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { workRequestSchema } from '@/lib/validations'
import { rateLimit, rateLimitPresets } from '@/lib/rate-limit'
import { sendEmail, createWorkRequestNotificationEmail } from '@/lib/email'
import { verifyAdminToken } from '@/lib/auth'

// Protect GET endpoint - Admin only
export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const token = request.cookies.get('admin-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const isValid = await verifyAdminToken(token)
    if (!isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const requests = await prisma.formSubmission.findMany({
      where: {
        type: 'WORK_REQUEST'
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(requests)
  } catch (error) {
    console.error('Error fetching work requests:', error)
    return NextResponse.json({ error: 'Failed to fetch work requests' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - 5 requests per 15 minutes
    const rateLimitResult = await rateLimit(rateLimitPresets.strict)(request)
    if (rateLimitResult) return rateLimitResult

    const body = await request.json()
    
    // Validate with Zod
    const validatedData = workRequestSchema.parse(body)

    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    // Create form submission in database
    const formSubmission = await prisma.formSubmission.create({
      data: {
        type: 'WORK_REQUEST',
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.services.join(', '),
        message: validatedData.projectSummary || null,
        ipAddress: ip,
        userAgent,
        status: 'PENDING'
      }
    })

    // Send email notification to agency
    try {
      const emailData = createWorkRequestNotificationEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        services: validatedData.services.join(', '),
        projectSummary: validatedData.projectSummary,
        ipAddress: ip,
        requestId: formSubmission.id
      })

      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'agency@tkvcreato.com',
        subject: `🎯 New Work Request: ${validatedData.services.join(', ')}`,
        html: emailData.html,
        text: emailData.text
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ 
      success: true,
      message: 'Work request submitted successfully',
      id: formSubmission.id
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating work request:', error)
    
    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json({ 
        error: 'Validation failed', 
        details: error.errors 
      }, { status: 400 })
    }
    
    return NextResponse.json({ 
      error: 'Failed to create work request' 
    }, { status: 500 })
  }
}
