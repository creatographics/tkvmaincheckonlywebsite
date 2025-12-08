import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Temporarily disabled to debug login issues
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/((?!login).*)', // Match all admin routes except login
  ]
}
