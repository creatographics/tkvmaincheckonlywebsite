"use client"

import { motion } from "motion/react"
import { ArrowRight, Calendar, Clock } from "@/components/ui/icons"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Design Principles for Modern Websites",
    excerpt: "Discover the key principles that make websites both beautiful and functional in today's digital landscape.",
    image: "/images/homeslider.png",
    category: "Design",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    slug: "design-principles-modern-websites"
  },
  {
    id: 2,
    title: "The Future of Digital Marketing in 2025",
    excerpt: "Explore upcoming trends and strategies that will shape digital marketing in the coming year.",
    image: "/images/homeslider1.png",
    category: "Marketing",
    date: "Nov 10, 2024",
    readTime: "7 min read",
    slug: "future-digital-marketing-2025"
  },
  {
    id: 3,
    title: "Building Brand Identity: A Complete Guide",
    excerpt: "Learn how to create a strong, memorable brand identity that resonates with your target audience.",
    image: "/images/homeslider2.png",
    category: "Branding",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    slug: "building-brand-identity-guide"
  },
]

export default function BlogSection() {
  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-24 bg-white dark:bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>Blog</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Latest{" "}
            <span className="text-gradient-primary">
              Insights & Ideas
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Stay updated with the latest trends in design, branding, web development, and digital marketing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2 transition-all"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Read All Creative Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      {/* SEO Keywords - Visually Hidden */}
      <p className="sr-only">
        graphic design blog, branding insights, website design trends, digital marketing tips, UI/UX best practices, creative industry articles
      </p>
      
      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "TKV Creatographics Blog",
            "description": "Insights on graphic design, branding, website design, and digital marketing",
            "url": "https://tkvcreatographics.com/blog",
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": new Date(post.date).toISOString(),
              "author": {
                "@type": "Organization",
                "name": "TKV Creatographics"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TKV Creatographics",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://tkvcreatographics.com/images/logotkv.webp"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://tkvcreatographics.com/blog/${post.slug}`
              },
              "image": {
                "@type": "ImageObject",
                "url": `https://tkvcreatographics.com${post.image}`
              },
              "articleSection": post.category,
              "wordCount": post.readTime === "5 min read" ? "800" : post.readTime === "6 min read" ? "950" : "1100"
            }))
          })
        }}
      />
    </section>
  )
}
