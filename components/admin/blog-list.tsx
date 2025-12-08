'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2, FileText, Eye, Clock } from '@/components/ui/icons'
import { CornerBorders } from '@/components/ui/corner-borders'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  category: string | null
  status: string
  updatedAt: Date
  readTime: string | null
}

interface BlogListProps {
  initialPosts: BlogPost[]
}

export function BlogList({ initialPosts }: BlogListProps) {
  const [posts, setPosts] = useState(initialPosts)
  const router = useRouter()
  const publishedCount = posts.filter((p) => p.status === 'PUBLISHED').length
  const draftCount = posts.filter((p) => p.status === 'DRAFT').length

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date))
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete blog post')
      }

      setPosts(posts.filter(post => post.id !== id))
      router.refresh()
    } catch (error) {
      console.error('Error deleting blog post:', error)
      alert('Failed to delete blog post')
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 
              className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
              }}
            >
              <span className="dark:hidden">Blog Posts</span>
              <span 
                className="hidden dark:inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
                }}
              >
                Blog Posts
              </span>
            </h1>
            <p className="text-muted-foreground">
              Manage your blog content
            </p>
          </div>
          <button 
            className="inline-flex items-center justify-center rounded-lg border-0 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-9 px-4 py-2 text-sm font-medium"
            style={{
              background: 'linear-gradient(135deg, #f97316, #fb923c, #fdba74)',
            }}
            onClick={() => router.push('/admin/blogs/new')}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden">
          <CornerBorders />
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{posts.length}</p>
                <p className="text-xs text-muted-foreground">Total Posts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden">
          <CornerBorders />
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <Eye className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{publishedCount}</p>
                <p className="text-xs text-muted-foreground">Published</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden">
          <CornerBorders />
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <Clock className="h-4 w-4 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{draftCount}</p>
                <p className="text-xs text-muted-foreground">Drafts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden">
          <CornerBorders />
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 border border-primary/20">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-1">No blog posts yet</h3>
            <p className="text-muted-foreground text-xs mb-4 text-center">
              Create your first blog post to get started
            </p>
            <button 
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 rounded-lg h-8 text-xs px-3 font-medium text-primary-foreground transition-colors"
              onClick={() => router.push('/admin/blogs/new')}
            >
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              Create Post
            </button>
          </CardContent>
        </Card>
      ) : (
        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden">
          <CornerBorders />
          <CardContent className="p-0">
            {/* Table Header */}
            <div className="px-4 py-2.5 bg-muted/30 border-b border-border">
              <div className="grid grid-cols-[1fr_80px_100px_100px_70px] items-center text-xs font-medium text-muted-foreground gap-3">
                <div>Title</div>
                <div className="text-center hidden sm:block">Status</div>
                <div className="text-center hidden md:block">Category</div>
                <div className="text-center hidden lg:block">Date</div>
                <div className="text-center">Actions</div>
              </div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-border">
              {posts.map((post) => (
                <div 
                  key={post.id} 
                  className="px-4 py-3 hover:bg-muted/20 transition-colors"
                >
                  <div className="grid grid-cols-[1fr_80px_100px_100px_70px] items-center gap-3">
                    {/* Title */}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {post.title}
                      </p>
                      {post.excerpt && (
                        <p className="text-xs text-muted-foreground truncate mt-0.5">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                    
                    {/* Status */}
                    <div className="text-center hidden sm:flex justify-center">
                      <Badge 
                        className={`text-[10px] px-1.5 py-0 border ${
                          post.status === 'PUBLISHED' 
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' 
                            : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20'
                        }`}
                      >
                        {post.status}
                      </Badge>
                    </div>
                    
                    {/* Category */}
                    <div className="text-center hidden md:block">
                      {post.category ? (
                        <span className="text-xs text-primary">{post.category}</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </div>
                    
                    {/* Date */}
                    <div className="text-center hidden lg:block">
                      <span className="text-xs text-muted-foreground">{formatDate(post.updatedAt)}</span>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-center gap-1">
                      <button 
                        className="inline-flex items-center justify-center h-7 w-7 p-0 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                        onClick={() => router.push(`/admin/blogs/${post.id}`)}
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(post.id)}
                        className="inline-flex items-center justify-center h-7 w-7 p-0 hover:bg-red-500/10 text-muted-foreground hover:text-red-500 rounded-md transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
