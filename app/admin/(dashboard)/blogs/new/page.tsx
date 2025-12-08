'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { ArrowLeft, Plus, X } from '@/components/ui/icons'
import { CornerBorders } from '@/components/ui/corner-borders'
import Link from 'next/link'

export default function NewBlogPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    author: '',
    readTime: '',
    featured: false,
    status: 'DRAFT' as const
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'title' && !prev.slug ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') } : {})
    }))
  }

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag('')
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to create blog post')
        return
      }

      router.push('/admin/blogs')
    } catch (error) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 
              className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
              }}
            >
              <span className="dark:hidden">Create New Blog Post</span>
              <span 
                className="hidden dark:inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
                }}
              >
                Create New Blog Post
              </span>
            </h1>
            <p className="text-muted-foreground">
              Write a new blog article
            </p>
          </div>
          <Link href="/admin/blogs">
            <Button variant="outline" size="sm" className="border border-border hover:border-primary/50 rounded-lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog Posts
            </Button>
          </Link>
        </div>
      </div>

      <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl shadow-sm overflow-hidden">
        <CornerBorders />
        <CardHeader className="pt-6 pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">Blog Post Details</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Blog post title"
                  required
                  className="border border-border focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="blog-post-slug"
                  required
                  className="border border-border focus:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                placeholder="e.g., Design, Development, Marketing"
                required
                className="border border-border focus:border-primary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                placeholder="Brief description of the blog post..."
                rows={3}
                required
                className="border border-border focus:border-primary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content * (HTML Supported)</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Write your blog post content here... HTML tags are supported.

Example:
<h2>Section Title</h2>
<p>Your paragraph content with <strong>bold text</strong> and <em>italic text</em>.</p>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
<blockquote>Quote text here</blockquote>
<a href='https://example.com'>Link text</a>"
                rows={15}
                required
                className="border border-border focus:border-primary/50 font-mono text-sm"
              />
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong>HTML Tags Supported:</strong></p>
                <p>• Headers: &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;</p>
                <p>• Text: &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;u&gt;, &lt;s&gt;</p>
                <p>• Lists: &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</p>
                <p>• Links: &lt;a href="url"&gt;, Images: &lt;img src="url" alt="text"&gt;</p>
                <p>• Quotes: &lt;blockquote&gt;, Code: &lt;code&gt;, &lt;pre&gt;</p>
                <p>• Line breaks: &lt;br&gt;, Horizontal rule: &lt;hr&gt;</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  placeholder="Author name"
                  className="border border-border focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="readTime">Read Time</Label>
                <Input
                  id="readTime"
                  value={formData.readTime}
                  onChange={(e) => handleInputChange('readTime', e.target.value)}
                  placeholder="e.g., 5 min read"
                  className="border border-border focus:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                value={formData.featuredImage}
                onChange={(e) => handleInputChange('featuredImage', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="border border-border focus:border-primary/50"
              />
              <p className="text-xs text-muted-foreground">
                Enter the URL of the featured image for this blog post
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 text-primary bg-card border-border rounded focus:ring-primary focus:ring-2"
              />
              <Label htmlFor="featured" className="text-sm font-medium">
                Mark as Featured Post
              </Label>
              <p className="text-xs text-muted-foreground">
                Featured posts will be highlighted on the blog page
              </p>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add tag"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="border border-border focus:border-primary/50"
                />
                <Button type="button" onClick={addTag} variant="outline" className="border border-border hover:border-primary/50">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm border border-primary/20"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-primary hover:text-primary/80"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:border-primary/50 focus:outline-none"
              >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
              </select>
            </div>

            {error && (
              <Alert variant="destructive" className="border-2 border-red-200 dark:border-red-800 rounded-lg">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={isLoading} className="border border-primary/20 hover:border-primary/50">
                {isLoading ? (
                  <>
                    <LoadingSpinner className="mr-2 h-4 w-4" />
                    Creating...
                  </>
                ) : (
                  'Create Blog Post'
                )}
              </Button>
              <Link href="/admin/blogs">
                <Button variant="outline" type="button" className="border border-border hover:border-primary/50">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
