import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      where: {
        status: 'PUBLISHED'
      },
      include: {
        images: {
          orderBy: { order: 'asc' }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform the data to match the frontend format
    const transformedProjects = projects.map((project: any) => ({
      id: project.id,
      slug: project.slug,
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.images[0]?.url || '/images/works/placeholder.jpg',
      tags: project.technologies || [],
      year: new Date(project.createdAt).getFullYear().toString(),
      // Additional fields for single project page
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
    }))

    return NextResponse.json(transformedProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}
