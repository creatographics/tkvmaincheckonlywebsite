import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { ipAddress } = body

    if (!ipAddress || ipAddress === 'unknown') {
      return NextResponse.json({ 
        location: 'Unknown',
        latitude: null,
        longitude: null 
      })
    }

    // Use a free IP geolocation service
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`)
      const data = await response.json()

      if (data.status === 'success') {
        return NextResponse.json({
          location: `${data.city}, ${data.regionName}, ${data.country}`,
          latitude: data.lat,
          longitude: data.lon,
          timezone: data.timezone,
          isp: data.isp
        })
      } else {
        return NextResponse.json({ 
          location: 'Unknown',
          latitude: null,
          longitude: null 
        })
      }
    } catch (geoError) {
      console.error('Geolocation API error:', geoError)
      return NextResponse.json({ 
        location: 'Unknown',
        latitude: null,
        longitude: null 
      })
    }
  } catch (error) {
    console.error('Error getting location:', error)
    return NextResponse.json({ error: 'Failed to get location' }, { status: 500 })
  }
}
