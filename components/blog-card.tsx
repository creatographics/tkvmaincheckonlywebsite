"use client"

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, User, Clock, BookOpen } from '@/components/ui/icons'
import { CornerBorders } from '@/components/ui/corner-borders'

interface BlogCardProps {
  post: {
    id: string
    slug: string
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image?: string
  }
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden bg-muted">
        {post.image ? (
          <>
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
              priority={false}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">Article Image</p>
            </div>
          </div>
        )}
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
  )
}
