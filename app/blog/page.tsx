import { HeroHeader } from '@/components/header'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, BookOpen } from '@/components/ui/icons'

export const metadata = {
  title: 'Blog - Design & Marketing Insights | TKV Creatographics',
  description: 'Explore our latest articles on graphic design, branding, web development, and digital marketing. Expert tips and insights from TKV Creatographics.',
}

// Static blog posts data
const blogPosts = [
  {
    id: '1',
    slug: 'essential-design-principles-modern-websites',
    title: '10 Essential Design Principles for Modern Websites',
    excerpt: 'Discover the fundamental design principles that make websites stand out in 2024. From typography to color theory, learn what makes great web design.',
    image: '/images/blog/design-principles.jpg',
    category: 'Web Design',
    date: 'December 5, 2024',
    readTime: '8 min read',
    featured: true
  },
  {
    id: '2',
    slug: 'power-of-branding-small-businesses',
    title: 'The Power of Branding for Small Businesses',
    excerpt: 'Learn how effective branding can transform your small business and help you stand out in a competitive market. Real-world examples included.',
    image: '/images/blog/branding-power.jpg',
    category: 'Branding',
    date: 'November 28, 2024',
    readTime: '6 min read',
    featured: false
  },
  {
    id: '3',
    slug: 'seo-strategies-2024',
    title: 'SEO Strategies That Actually Work in 2024',
    excerpt: 'Stay ahead of the curve with these proven SEO strategies. Learn what Google is prioritizing and how to optimize your website for better rankings.',
    image: '/images/blog/seo-strategies.jpg',
    category: 'Digital Marketing',
    date: 'November 22, 2024',
    readTime: '10 min read',
    featured: false
  },
  {
    id: '4',
    slug: 'color-psychology-in-design',
    title: 'Color Psychology in Design: A Complete Guide',
    excerpt: 'Understand how colors influence emotions and behavior. Learn to choose the perfect color palette for your brand and design projects.',
    image: '/images/blog/color-psychology.jpg',
    category: 'Design Theory',
    date: 'November 15, 2024',
    readTime: '7 min read',
    featured: false
  },
  {
    id: '5',
    slug: 'social-media-marketing-tips',
    title: '15 Social Media Marketing Tips for 2024',
    excerpt: 'Boost your social media presence with these actionable tips. From content strategy to engagement tactics, we cover it all.',
    image: '/images/blog/social-media.jpg',
    category: 'Digital Marketing',
    date: 'November 8, 2024',
    readTime: '9 min read',
    featured: false
  },
  {
    id: '6',
    slug: 'typography-trends-2024',
    title: 'Typography Trends Shaping Design in 2024',
    excerpt: 'Explore the latest typography trends that are defining modern design. From variable fonts to experimental layouts.',
    image: '/images/blog/typography-trends.jpg',
    category: 'Design Trends',
    date: 'November 1, 2024',
    readTime: '5 min read',
    featured: false
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen">
      <HeroHeader />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            
            {/* Hero Section */}
            <section className="mb-16 md:mb-24 relative z-10 bg-white dark:bg-transparent">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Insights & Resources</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                  Design & Marketing
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Insights
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Expert tips, industry trends, and actionable advice to help your business grow.
                </p>
              </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
              <section className="mb-16 bg-white dark:bg-transparent">
                <div className="border border-border/40 bg-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-full bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Blog Grid */}
            <section className="bg-white dark:bg-transparent">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Latest Articles</h2>
                <p className="text-muted-foreground mt-2">Explore our collection of design and marketing insights</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative border border-border/40 bg-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-primary font-medium hover:gap-2 transition-all"
                        >
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-16 pt-12 border-t bg-white dark:bg-transparent">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Brand?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Let's work together to create something amazing for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/quotation"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:border-primary/50 transition-colors"
                  >
                    Contact Us
                  </Link>
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
