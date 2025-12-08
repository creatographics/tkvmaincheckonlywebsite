import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { EditBlogForm } from './edit-form'

async function getBlogPost(id: string) {
  try {
    const blog = await prisma.blogPost.findUnique({
      where: { id }
    })
    return blog
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlogPost(params.id)
  
  if (!blog) {
    return notFound()
  }

  // Parse tags if they're a string
  const tags = blog.tags ? (typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags) : []

  return <EditBlogForm blog={blog} tags={tags} />
}
