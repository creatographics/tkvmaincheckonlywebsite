// Dynamic import to prevent build errors if nodemailer is not installed
let nodemailer: any = null
let transporter: any = null

try {
  nodemailer = require('nodemailer')
  // SMTP Configuration
  transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
} catch (error) {
  console.warn('Nodemailer not installed. Email functionality will be disabled.')
}

export interface EmailOptions {
  to: string
  subject: string
  html?: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    if (!transporter || !nodemailer) {
      console.log('Nodemailer not available. Email would be sent:', { to, subject })
      return { success: false, error: 'Nodemailer not installed' }
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('SMTP credentials not configured. Email would be sent:', { to, subject })
      return { success: false, error: 'SMTP not configured' }
    }

    const info = await transporter.sendMail({
      from: `"TKV Creatographics" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    })

    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Admin login notification email template
export function createAdminLoginNotificationEmail(data: {
  email: string
  ipAddress: string
  userAgent: string
  location?: string
  timestamp: string
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Admin Login Alert</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .alert { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .details { background: #f8f9fa; padding: 15px; border-radius: 5px; }
        .detail-row { margin-bottom: 10px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🔐 Admin Login Alert</h2>
          <p>Someone has logged into your TKV Creatographics admin dashboard.</p>
        </div>
        
        <div class="alert">
          <strong>⚠️ Security Notice:</strong> If this wasn't you, please change your password immediately and review your account security.
        </div>
        
        <div class="details">
          <h3>Login Details:</h3>
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          <div class="detail-row">
            <span class="label">IP Address:</span>
            <span class="value">${data.ipAddress}</span>
          </div>
          <div class="detail-row">
            <span class="label">Location:</span>
            <span class="value">${data.location || 'Unknown'}</span>
          </div>
          <div class="detail-row">
            <span class="label">Browser/Device:</span>
            <span class="value">${data.userAgent}</span>
          </div>
          <div class="detail-row">
            <span class="label">Time:</span>
            <span class="value">${data.timestamp}</span>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated security notification from TKV Creatographics Admin System.</p>
          <p>If you have any concerns, please contact your system administrator.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
    Admin Login Alert - TKV Creatographics
    
    Someone has logged into your admin dashboard.
    
    Login Details:
    - Email: ${data.email}
    - IP Address: ${data.ipAddress}
    - Location: ${data.location || 'Unknown'}
    - Browser/Device: ${data.userAgent}
    - Time: ${data.timestamp}
    
    If this wasn't you, please change your password immediately.
  `

  return { html, text }
}

// Work request notification email template
export function createWorkRequestNotificationEmail(data: {
  name: string
  email: string
  phone: string
  services: string
  projectSummary?: string
  ipAddress: string
  requestId: string
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Work Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .details { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .detail-row { margin-bottom: 10px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; }
        .summary { background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin-top: 10px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🎯 New Work Request Received</h2>
          <p>A new work sample request has been submitted through your website.</p>
        </div>
        
        <div class="details">
          <h3>Client Details:</h3>
          <div class="detail-row">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          <div class="detail-row">
            <span class="label">Phone:</span>
            <span class="value">${data.phone}</span>
          </div>
          <div class="detail-row">
            <span class="label">Services:</span>
            <span class="value">${data.services}</span>
          </div>
          <div class="detail-row">
            <span class="label">IP Address:</span>
            <span class="value">${data.ipAddress}</span>
          </div>
          <div class="detail-row">
            <span class="label">Request ID:</span>
            <span class="value">${data.requestId}</span>
          </div>
        </div>
        
        ${data.projectSummary ? `
        <div class="details">
          <h3>Project Summary:</h3>
          <div class="summary">${data.projectSummary.replace(/\n/g, '<br>')}</div>
        </div>
        ` : ''}
        
        <div class="footer">
          <p>Please follow up with the client as soon as possible.</p>
          <p>You can manage this request in your admin dashboard.</p>
        </div>
      </div>
    </body>
    </html>
  `

  return { html, text: `New Work Request from ${data.name} (${data.email}) for ${data.services}` }
}

// Contact form notification email template
export function createContactFormNotificationEmail(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  ipAddress: string
  submissionId: string
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #FE5B16; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .details { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .detail-row { margin-bottom: 10px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; }
        .message { background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin-top: 10px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>📧 New Contact Form Submission</h2>
          <p>Someone has contacted you through your website.</p>
        </div>
        
        <div class="details">
          <h3>Contact Details:</h3>
          <div class="detail-row">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          ${data.phone ? `
          <div class="detail-row">
            <span class="label">Phone:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
          ` : ''}
          <div class="detail-row">
            <span class="label">Subject:</span>
            <span class="value">${data.subject}</span>
          </div>
          <div class="detail-row">
            <span class="label">Submission ID:</span>
            <span class="value">${data.submissionId}</span>
          </div>
        </div>
        
        <div class="details">
          <h3>Message:</h3>
          <div class="message">${data.message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="footer">
          <p>Please respond to this inquiry as soon as possible.</p>
          <p>IP Address: ${data.ipAddress}</p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
    New Contact Form Submission
    
    Name: ${data.name}
    Email: ${data.email}
    ${data.phone ? `Phone: ${data.phone}` : ''}
    Subject: ${data.subject}
    
    Message:
    ${data.message}
    
    Submission ID: ${data.submissionId}
    IP Address: ${data.ipAddress}
  `

  return { html, text }
}

// Quotation request notification email template
export function createQuotationRequestNotificationEmail(data: {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  budget?: string
  timeline?: string
  message?: string
  ipAddress: string
  requestId: string
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quotation Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #FE5B16; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .details { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .detail-row { margin-bottom: 10px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; }
        .highlight { background: #fff3cd; padding: 10px; border-radius: 5px; margin: 10px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>💰 New Quotation Request</h2>
          <p>A potential client has requested a quotation.</p>
        </div>
        
        <div class="details">
          <h3>Client Information:</h3>
          <div class="detail-row">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          <div class="detail-row">
            <span class="label">Phone:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
          ${data.company ? `
          <div class="detail-row">
            <span class="label">Company:</span>
            <span class="value">${data.company}</span>
          </div>
          ` : ''}
        </div>
        
        <div class="details">
          <h3>Project Details:</h3>
          <div class="detail-row">
            <span class="label">Service:</span>
            <span class="value">${data.service}</span>
          </div>
          ${data.budget ? `
          <div class="detail-row">
            <span class="label">Budget:</span>
            <span class="value">${data.budget}</span>
          </div>
          ` : ''}
          ${data.timeline ? `
          <div class="detail-row">
            <span class="label">Timeline:</span>
            <span class="value">${data.timeline}</span>
          </div>
          ` : ''}
          ${data.message ? `
          <div class="detail-row">
            <span class="label">Additional Details:</span>
            <div class="value" style="margin-top: 5px;">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          ` : ''}
        </div>
        
        <div class="highlight">
          <strong>⏰ Action Required:</strong> Please prepare and send a detailed quotation within 24 hours.
        </div>
        
        <div class="footer">
          <p>Request ID: ${data.requestId}</p>
          <p>IP Address: ${data.ipAddress}</p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
    New Quotation Request
    
    Client: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    ${data.company ? `Company: ${data.company}` : ''}
    
    Service: ${data.service}
    ${data.budget ? `Budget: ${data.budget}` : ''}
    ${data.timeline ? `Timeline: ${data.timeline}` : ''}
    ${data.message ? `\nDetails:\n${data.message}` : ''}
    
    Request ID: ${data.requestId}
  `

  return { html, text }
}
