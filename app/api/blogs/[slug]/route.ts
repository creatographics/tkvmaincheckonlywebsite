import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const blog = await prisma.blogPost.findFirst({
      where: {
        slug: params.slug,
        status: 'PUBLISHED'
      }
    })

    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    // Transform the data to match the frontend format
    const transformedBlog = {
      id: blog.id,
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author || 'TKV Team',
      date: new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      readTime: blog.readTime || '5 min read',
      category: blog.category,
      image: blog.featuredImage || '/images/blog/placeholder.jpg',
      tags: blog.tags || []
    }

    return NextResponse.json(transformedBlog)
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}
