import { NextRequest, NextResponse } from 'next/server'

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

export interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Max requests per window
}

export function rateLimit(config: RateLimitConfig) {
  const { windowMs, maxRequests } = config

  return async (request: NextRequest) => {
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    const now = Date.now()
    const key = `${ip}:${request.nextUrl.pathname}`

    // Clean up old entries
    Object.keys(store).forEach(k => {
      if (store[k].resetTime < now) {
        delete store[k]
      }
    })

    // Check rate limit
    if (!store[key]) {
      store[key] = {
        count: 1,
        resetTime: now + windowMs
      }
    } else {
      if (store[key].resetTime < now) {
        // Reset window
        store[key] = {
          count: 1,
          resetTime: now + windowMs
        }
      } else {
        store[key].count++
        
        if (store[key].count > maxRequests) {
          const retryAfter = Math.ceil((store[key].resetTime - now) / 1000)
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { 
              status: 429,
              headers: {
                'Retry-After': retryAfter.toString(),
                'X-RateLimit-Limit': maxRequests.toString(),
                'X-RateLimit-Remaining': '0',
                'X-RateLimit-Reset': new Date(store[key].resetTime).toISOString()
              }
            }
          )
        }
      }
    }

    return null // Allow request
  }
}

// Preset configurations
export const rateLimitPresets = {
  strict: { windowMs: 15 * 60 * 1000, maxRequests: 5 }, // 5 requests per 15 minutes
  moderate: { windowMs: 15 * 60 * 1000, maxRequests: 20 }, // 20 requests per 15 minutes
  lenient: { windowMs: 15 * 60 * 1000, maxRequests: 100 }, // 100 requests per 15 minutes
  api: { windowMs: 60 * 1000, maxRequests: 60 } // 60 requests per minute
}
