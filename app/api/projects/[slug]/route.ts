import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const project = await prisma.project.findFirst({
      where: {
        slug: params.slug,
        status: 'PUBLISHED'
      },
      include: {
        images: {
          orderBy: { order: 'asc' }
        }
      }
    })

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    // Transform the data to match the frontend format
    const transformedProject = {
      id: project.id,
      slug: project.slug,
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.images[0]?.url || '/images/works/placeholder.jpg',
      images: project.images.map((img: any) => ({
        url: img.url,
        alt: img.alt
      })),
      tags: project.technologies || [],
      year: new Date(project.createdAt).getFullYear().toString(),
      client: project.client || 'Client Name',
      duration: project.duration || '3 months',
      challenge: project.challenge || project.description,
      solution: project.solution || 'Our comprehensive solution addressed all the client\'s needs.',
      results: project.results || [
        'Successful project completion',
        'Client satisfaction achieved',
        'Goals exceeded'
      ],
      services: project.services || ['Design', 'Development'],
      testimonial: project.testimonial ? JSON.parse(project.testimonial) : null
    }

    return NextResponse.json(transformedProject)
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}
