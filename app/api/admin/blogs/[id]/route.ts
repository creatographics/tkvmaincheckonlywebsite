import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAdminUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const blog = await prisma.blogPost.findUnique({
      where: { id: params.id }
    })

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAdminUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, slug, category, excerpt, content, featuredImage, author, readTime, featured, status, tags } = body

    // Check if slug is already taken by another post
    const existingBlog = await prisma.blogPost.findFirst({
      where: {
        slug,
        NOT: { id: params.id }
      }
    })

    if (existingBlog) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 })
    }

    const updatedBlog = await prisma.blogPost.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        category,
        excerpt,
        content,
        featuredImage,
        author,
        readTime,
        featured,
        status,
        tags: JSON.stringify(tags),
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      }
    })

    return NextResponse.json(updatedBlog)
  } catch (error) {
    console.error('Error updating blog:', error)
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAdminUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.blogPost.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}
