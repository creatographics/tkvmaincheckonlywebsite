import { HeroHeader } from '@/components/header'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import Link from 'next/link'
import { Calendar, User, Clock, BookOpen, Tag, ArrowLeft } from '@/components/ui/icons'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { notFound } from 'next/navigation'
import { BlogTableOfContents } from '@/components/blog-table-of-contents'
import { BlogRelatedPosts } from '@/components/blog-related-posts'
import { BlogShareButton } from '@/components/blog-share-button'
import '../blog.css'

async function getBlog(slug: string) {
  try {
    // Try to fetch single blog by slug first
    const slugResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs/${slug}`, {
      cache: 'no-store'
    })
    
    if (slugResponse.ok) {
      return await slugResponse.json()
    }
    
    // Fallback: fetch all blogs and find by slug
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs?limit=50`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      return null
    }
    
    const data = await response.json()
    
    // Handle both old format (array) and new format (object with blogs array)
    const blogs = Array.isArray(data) ? data : (data.blogs || [])
    
    return blogs.find((blog: any) => blog.slug === slug)
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const post = await getBlog(params.slug)
  
  if (!post) {
    return notFound()
  }

  return (
    <main className="min-h-screen">
      <HeroHeader showReadingProgress={true} />
      
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />

            {/* Back to Blog Button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            {/* Unified Blog Container - Two Column Layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Sidebar - TOC */}
              <aside className="w-full lg:w-80 flex-shrink-0 lg:order-1">
                <BlogTableOfContents />
              </aside>

              {/* Main Content - Article */}
              <article className="flex-1 min-w-0 lg:order-2">
              <header className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
                  {post.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <BlogShareButton title={post.title} />
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Article Featured Image</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-12 prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 prose-blockquote:border-primary prose-blockquote:text-foreground/80 prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-hr:border-border prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4 prose-h4:mt-6 prose-h4:mb-3 prose-ul:my-4 prose-li:my-2"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b">
                  {(typeof post.tags === 'string' ? JSON.parse(post.tags) : post.tags).map((tag: string, i: number) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Bio */}
              <div className="relative border bg-card p-8 mb-12">
                <CornerBorders />
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">About {post.author}</h3>
                    <p className="text-sm text-muted-foreground">
                      {post.author} is a creative professional at TKV Creatographics, specializing in {post.category.toLowerCase()}. With years of experience in the industry, they share insights and best practices to help businesses succeed.
                    </p>
                  </div>
                </div>
              </div>
              </article>
            </div>

            {/* Related Posts - Full Width Below */}
            <BlogRelatedPosts currentCategory={post.category} currentSlug={post.slug} />
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
