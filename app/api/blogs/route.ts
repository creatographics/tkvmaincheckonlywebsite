import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getBlogImageUrl } from '@/lib/blog-images'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50) // Max 50
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    
    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {
      status: 'PUBLISHED'
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { tags: { hasSome: [search] } }
      ]
    }

    if (category) {
      where.category = category
    }

    // Get total count for pagination
    const total = await prisma.blogPost.count({ where })

    // Fetch blogs with pagination
    const blogs = await prisma.blogPost.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      },
      skip,
      take: limit,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        // Don't include full content in list view
        author: true,
        createdAt: true,
        readTime: true,
        category: true,
        featuredImage: true,
        featured: true,
        tags: true
      }
    })

    // Transform the data to match the frontend format
    const transformedBlogs = blogs.map((blog: any) => ({
      id: blog.id,
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt,
      author: blog.author || 'TKV Creatographics',
      date: new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      readTime: blog.readTime || '5 min read',
      category: blog.category || 'Uncategorized',
      image: blog.featuredImage || getBlogImageUrl(blog.category || 'Uncategorized', blog.title),
      featured: blog.featured || false,
      tags: blog.tags || []
    }))

    return NextResponse.json({
      blogs: transformedBlogs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasMore: skip + limit < total
      }
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}
