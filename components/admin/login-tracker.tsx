'use client'

import { useEffect, useState } from 'react'
import { Globe, Monitor, MapPin, Clock } from '@/components/ui/icons'

interface LoginInfo {
  ipAddress: string
  userAgent: string
  location: string
  timestamp: string
}

interface LoginTrackerProps {
  userEmail: string
}

export function LoginTracker({ userEmail }: LoginTrackerProps) {
  const [loginInfo, setLoginInfo] = useState<LoginInfo | null>(null)

  useEffect(() => {
    const trackLogin = async () => {
      try {
        // Get IP address
        const ipResponse = await fetch('/api/get-ip')
        const ipData = await ipResponse.json()
        const ipAddress = ipData.ip

        // Get location from IP
        const locationResponse = await fetch('/api/get-location', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ipAddress })
        })
        const locationData = await locationResponse.json()

        // Get user agent
        const userAgent = navigator.userAgent

        const loginData = {
          ipAddress,
          userAgent,
          location: locationData.location,
          timestamp: new Date().toISOString()
        }

        setLoginInfo(loginData)

        // Send login notification
        await fetch('/api/admin/login-notification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: userEmail,
            ...loginData
          })
        })
      } catch (error) {
        console.error('Failed to track login:', error)
      }
    }

    trackLogin()
  }, [userEmail])

  if (!loginInfo) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
      <div className="flex items-center gap-1.5">
        <Globe className="w-3 h-3" />
        <span className="font-mono">{loginInfo.ipAddress}</span>
      </div>
      
      <div className="flex items-center gap-1.5">
        <MapPin className="w-3 h-3" />
        <span>{loginInfo.location}</span>
      </div>
      
      <div className="flex items-center gap-1.5">
        <Clock className="w-3 h-3" />
        <span>{new Date(loginInfo.timestamp).toLocaleTimeString()}</span>
      </div>
      
      <div className="flex items-center gap-1.5">
        <Monitor className="w-3 h-3" />
        <span className="max-w-[200px] truncate">{loginInfo.userAgent.split(' ')[0]}</span>
      </div>
    </div>
  )
}
