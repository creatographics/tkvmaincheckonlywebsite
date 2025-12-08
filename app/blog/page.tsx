import { HeroHeader } from '@/components/header'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import Link from 'next/link'
import { ArrowRight, Calendar, User, Clock, BookOpen } from '@/components/ui/icons'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { BlogCard } from '@/components/blog-card'

async function getBlogPosts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs?limit=50`, {
      cache: 'no-store' // Always fetch fresh data
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    
    const data = await response.json()
    
    // Handle both old format (array) and new format (object with blogs array)
    if (Array.isArray(data)) {
      return data
    } else if (data.blogs && Array.isArray(data.blogs)) {
      return data.blogs
    }
    
    return []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  const featuredPost = blogPosts.find((post: any) => post.featured)
  const regularPosts = blogPosts.filter((post: any) => !post.featured)

  return (
    <main className="min-h-screen">
      <HeroHeader />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            
            {/* Hero Section */}
            <section className="mb-16 md:mb-24">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Knowledge Hub</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  <span className="text-foreground">Design.</span>{' '}
                  <span className="text-foreground">Develop.</span>{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Grow.
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Practical insights on branding, web design, and digital marketing for Indian businesses — 
                  <span className="text-foreground font-medium"> written by experts who build real brands.</span>
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>{blogPosts.length} Articles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Updated Weekly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Free Resources</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
              <section className="mb-16 bg-white dark:bg-transparent">
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className="group relative border bg-card overflow-hidden">
                    <CornerBorders />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                              <BookOpen className="w-10 h-10 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground">Featured Article</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/10">Featured</span>
                          <span>{featuredPost.category}</span>
                        </div>
                        <h2 className="text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            )}

            {/* Blog Grid */}
            <section className="mb-16 bg-white dark:bg-transparent">
              <h2 className="text-2xl font-semibold text-foreground mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post: any, index: number) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-12 border-t bg-white dark:bg-transparent">
              <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-primary/3 to-transparent p-8 md:p-12">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Stay Updated with Latest Insights
                  </h2>
                  <p className="text-muted-foreground mb-6 text-sm md:text-base">
                    Join our newsletter for expert tips, industry trends, and exclusive content delivered to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 border rounded-lg bg-white dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                    <ShimmerButton className="h-12 px-8 whitespace-nowrap">
                      Subscribe Now
                    </ShimmerButton>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
