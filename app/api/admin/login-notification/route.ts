import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, ipAddress, userAgent, location } = body

    // Get client IP address if not provided
    const forwarded = request.headers.get('x-forwarded-for')
    const clientIp = ipAddress || (forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown')
    
    // Get user agent if not provided
    const clientUserAgent = userAgent || request.headers.get('user-agent') || 'unknown'

    // Log the admin login
    await prisma.adminLog.create({
      data: {
        action: 'LOGIN',
        resource: 'ADMIN_DASHBOARD',
        userId: email,
        details: JSON.stringify({
          ipAddress: clientIp,
          userAgent: clientUserAgent,
          location: location || 'Unknown',
          timestamp: new Date().toISOString()
        })
      }
    })

    // TODO: Send email notification
    // This would use the email service we created
    try {
      // Import email service (commented out due to nodemailer dependency)
      // const { sendEmail, createAdminLoginNotificationEmail } = await import('@/lib/email')
      
      // const emailData = createAdminLoginNotificationEmail({
      //   email,
      //   ipAddress: clientIp,
      //   userAgent: clientUserAgent,
      //   location: location || 'Unknown',
      //   timestamp: new Date().toLocaleString()
      // })

      // await sendEmail({
      //   to: process.env.ADMIN_EMAIL || 'admin@tkvcreato.com',
      //   subject: '🔐 Admin Login Alert - TKV Creatographics',
      //   html: emailData.html,
      //   text: emailData.text
      // })

      console.log('Admin login notification would be sent:', {
        email,
        ipAddress: clientIp,
        userAgent: clientUserAgent,
        location: location || 'Unknown',
        timestamp: new Date().toISOString()
      })
    } catch (emailError) {
      console.error('Failed to send admin login notification:', emailError)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Login logged successfully',
      data: {
        ipAddress: clientIp,
        userAgent: clientUserAgent,
        location: location || 'Unknown'
      }
    })
  } catch (error) {
    console.error('Error logging admin login:', error)
    return NextResponse.json({ error: 'Failed to log login' }, { status: 500 })
  }
}
