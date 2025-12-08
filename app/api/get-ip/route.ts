import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    // Get client IP address from headers
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    return NextResponse.json({ ip })
  } catch (error) {
    console.error('Error getting IP address:', error)
    return NextResponse.json({ ip: 'unknown' }, { status: 500 })
  }
}
