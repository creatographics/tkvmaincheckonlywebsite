import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin, logAdminAction } from '@/lib/auth'
import { projectSchema } from '@/lib/validations'

export async function GET(request: NextRequest) {
  try {
    await requireAdmin()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search')
    const status = searchParams.get('status')
    const category = searchParams.get('category')

    const where: any = {}
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } }
      ]
    }
    
    if (status && (status === 'DRAFT' || status === 'PUBLISHED')) {
      where.status = status
    }
    
    if (category) {
      where.category = { contains: category, mode: 'insensitive' }
    }

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        include: {
          images: {
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { updatedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.project.count({ where })
    ])

    return NextResponse.json({
      projects,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAdmin()
    const body = await request.json()
    
    const validatedData = projectSchema.parse(body)

    // Check if slug already exists
    const existingProject = await prisma.project.findUnique({
      where: { slug: validatedData.slug }
    })

    if (existingProject) {
      return NextResponse.json(
        { error: 'A project with this slug already exists' },
        { status: 400 }
      )
    }

    const project = await prisma.project.create({
      data: {
        ...validatedData,
        technologies: JSON.stringify(validatedData.technologies)
      }
    })

    await logAdminAction('CREATE', 'project', project.id, { title: project.title })

    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid project data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}
