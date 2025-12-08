import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin, logAdminAction } from '@/lib/auth'
import { seoSettingsSchema } from '@/lib/validations'

export async function GET() {
  try {
    await requireAdmin()

    const settings = await prisma.seoSettings.findMany({
      orderBy: { pageType: 'asc' }
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error fetching SEO settings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch SEO settings' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAdmin()
    const body = await request.json()
    
    const validatedData = seoSettingsSchema.parse(body)

    // Upsert SEO settings
    const settings = await prisma.seoSettings.upsert({
      where: {
        pageType_pageId: {
          pageType: validatedData.pageType,
          pageId: validatedData.pageId || ''
        }
      },
      update: {
        title: validatedData.title,
        description: validatedData.description,
        canonicalUrl: validatedData.canonicalUrl,
        ogTitle: validatedData.ogTitle,
        ogDescription: validatedData.ogDescription,
        ogImage: validatedData.ogImage,
        twitterCard: validatedData.twitterCard
      },
      create: validatedData
    })

    await logAdminAction('UPDATE', 'seo_settings', settings.id, { 
      pageType: settings.pageType 
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error saving SEO settings:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid SEO settings data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to save SEO settings' },
      { status: 500 }
    )
  }
}
