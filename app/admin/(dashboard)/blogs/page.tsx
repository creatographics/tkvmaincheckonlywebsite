import { prisma } from '@/lib/db'
import { BlogList } from '@/components/admin/blog-list'

async function getBlogPosts() {
  try {
    return await prisma.blogPost.findMany({
      orderBy: { updatedAt: 'desc' }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogsPage() {
  const posts = await getBlogPosts()

  return <BlogList initialPosts={posts} />
}
