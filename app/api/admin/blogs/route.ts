import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/auth'

export async function GET() {
  try {
    const user = await getAdminUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const blogs = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(blogs)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const user = await getAdminUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, slug, excerpt, content, category, tags, featuredImage, author, readTime, featured, status } = body

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check if slug already exists
    const existingBlog = await prisma.blogPost.findUnique({
      where: { slug }
    })

    if (existingBlog) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 })
    }

    const blog = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        category,
        tags: JSON.stringify(tags || []),
        featuredImage: featuredImage || null,
        author: author || null,
        readTime: readTime || null,
        featured: featured || false,
        status,
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      }
    })

    return NextResponse.json(blog, { status: 201 })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}
