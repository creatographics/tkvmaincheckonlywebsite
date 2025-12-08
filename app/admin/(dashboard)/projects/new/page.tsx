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

export default function NewProjectPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [technologies, setTechnologies] = useState<string[]>([])
  const [newTech, setNewTech] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    description: '',
    challenge: '',
    solution: '',
    status: 'DRAFT' as const
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'title' && !prev.slug ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') } : {})
    }))
  }

  const addTechnology = () => {
    if (newTech.trim() && !technologies.includes(newTech.trim())) {
      setTechnologies([...technologies, newTech.trim()])
      setNewTech('')
    }
  }

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          technologies
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to create project')
        return
      }

      router.push('/admin/projects')
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
              <span className="dark:hidden">Create New Project</span>
              <span 
                className="hidden dark:inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
                }}
              >
                Create New Project
              </span>
            </h1>
            <p className="text-muted-foreground">
              Add a new project to your portfolio
            </p>
          </div>
          <Link href="/admin/projects">
            <Button variant="outline" size="sm" className="border border-border hover:border-primary/50 rounded-lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl shadow-sm overflow-hidden">
        <CornerBorders />
        <CardHeader className="pt-6 pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">Project Details</CardTitle>
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
                  placeholder="Project title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="project-slug"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                placeholder="e.g., Web Design, Branding, UI/UX"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description * (HTML Supported)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Project description... HTML tags are supported.

Example:
<p>This project involved <strong>comprehensive branding</strong> and <em>web development</em>.</p>
<ul>
  <li>Brand identity design</li>
  <li>Website development</li>
  <li>Marketing materials</li>
</ul>"
                rows={6}
                required
                className="border border-border focus:border-primary/50 font-mono text-sm"
              />
              <div className="text-xs text-muted-foreground">
                <p><strong>HTML supported:</strong> &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;br&gt;, &lt;a&gt;, etc.</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Technologies</Label>
              <div className="flex gap-2">
                <Input
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  placeholder="Add technology"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
                />
                <Button type="button" onClick={addTechnology} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm border border-primary/20"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechnology(tech)}
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
              <Label htmlFor="challenge">Project Challenge (HTML Supported)</Label>
              <Textarea
                id="challenge"
                value={formData.challenge || ''}
                onChange={(e) => handleInputChange('challenge', e.target.value)}
                placeholder="Describe the main challenge or problem this project addressed...

Example:
<p>The client needed to <strong>modernize their brand</strong> to appeal to a younger demographic.</p>
<ul>
  <li>Outdated visual identity</li>
  <li>Poor user experience</li>
  <li>Low conversion rates</li>
</ul>"
                rows={4}
                className="border border-border focus:border-primary/50 font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Our Solution (HTML Supported)</Label>
              <Textarea
                id="solution"
                value={formData.solution || ''}
                onChange={(e) => handleInputChange('solution', e.target.value)}
                placeholder="Describe how you solved the challenge...

Example:
<p>We developed a <strong>comprehensive solution</strong> that included:</p>
<ul>
  <li>Modern brand identity design</li>
  <li>User-centered website redesign</li>
  <li>Conversion optimization strategy</li>
</ul>"
                rows={4}
                className="border border-border focus:border-primary/50 font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
              </select>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <LoadingSpinner className="mr-2 h-4 w-4" />
                    Creating...
                  </>
                ) : (
                  'Create Project'
                )}
              </Button>
              <Link href="/admin/projects">
                <Button variant="outline" type="button">
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
