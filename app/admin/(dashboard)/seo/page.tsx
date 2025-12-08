'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Save, Globe, Home, Info, Briefcase, FileText, Phone, Calculator } from '@/components/ui/icons'

interface SeoSettings {
  id?: string
  pageType: string
  title?: string
  description?: string
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: string
}

const pageTypes = [
  { id: 'global', name: 'Global Settings', icon: Globe },
  { id: 'homepage', name: 'Homepage', icon: Home },
  { id: 'about', name: 'About', icon: Info },
  { id: 'services', name: 'Services', icon: Briefcase },
  { id: 'works', name: 'Works', icon: FileText },
  { id: 'blog', name: 'Blog', icon: FileText },
  { id: 'contact', name: 'Contact', icon: Phone },
  { id: 'quotation', name: 'Quotation', icon: Calculator }
]

export default function SeoSettingsPage() {
  const [settings, setSettings] = useState<Record<string, SeoSettings>>({})
  const [activeTab, setActiveTab] = useState('global')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/admin/seo')
      const data = await response.json()
      
      if (response.ok) {
        const settingsMap: Record<string, SeoSettings> = {}
        data.forEach((setting: SeoSettings) => {
          settingsMap[setting.pageType] = setting
        })
        setSettings(settingsMap)
      }
    } catch (error) {
      setError('Failed to load SEO settings')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (pageType: string, field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [pageType]: {
        ...prev[pageType],
        pageType,
        [field]: value
      }
    }))
  }

  const handleSave = async (pageType: string) => {
    setIsSaving(true)
    setError('')
    setSuccess('')

    try {
      const settingData = settings[pageType] || { pageType }
      
      const response = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settingData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to save settings')
        return
      }

      setSettings(prev => ({
        ...prev,
        [pageType]: data
      }))
      
      setSuccess('Settings saved successfully')
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      setError('An unexpected error occurred')
    } finally {
      setIsSaving(false)
    }
  }

  const currentSettings = settings[activeTab] || { pageType: activeTab }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner className="h-8 w-8" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6">
        <h1 
          className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
          }}
        >
          <span className="dark:hidden">SEO Settings</span>
          <span 
            className="hidden dark:inline bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
            }}
          >
            SEO Settings
          </span>
        </h1>
        <p className="text-muted-foreground">
          Manage SEO metadata for all pages
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          {pageTypes.map((page) => (
            <TabsTrigger key={page.id} value={page.id} className="flex items-center gap-2">
              <page.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{page.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {pageTypes.map((page) => (
          <TabsContent key={page.id} value={page.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <page.icon className="h-5 w-5" />
                  {page.name} SEO Settings
                </CardTitle>
                <CardDescription>
                  Configure SEO metadata for the {page.name.toLowerCase()} page
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`${page.id}-title`}>Meta Title</Label>
                    <Input
                      id={`${page.id}-title`}
                      value={currentSettings.title || ''}
                      onChange={(e) => handleInputChange(page.id, 'title', e.target.value)}
                      placeholder="Page title for search engines"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${page.id}-canonical`}>Canonical URL</Label>
                    <Input
                      id={`${page.id}-canonical`}
                      value={currentSettings.canonicalUrl || ''}
                      onChange={(e) => handleInputChange(page.id, 'canonicalUrl', e.target.value)}
                      placeholder="https://example.com/page"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${page.id}-description`}>Meta Description</Label>
                  <Textarea
                    id={`${page.id}-description`}
                    value={currentSettings.description || ''}
                    onChange={(e) => handleInputChange(page.id, 'description', e.target.value)}
                    placeholder="Brief description for search engines (150-160 characters)"
                    rows={3}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`${page.id}-og-title`}>Open Graph Title</Label>
                    <Input
                      id={`${page.id}-og-title`}
                      value={currentSettings.ogTitle || ''}
                      onChange={(e) => handleInputChange(page.id, 'ogTitle', e.target.value)}
                      placeholder="Title for social media sharing"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${page.id}-og-image`}>Open Graph Image</Label>
                    <Input
                      id={`${page.id}-og-image`}
                      value={currentSettings.ogImage || ''}
                      onChange={(e) => handleInputChange(page.id, 'ogImage', e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${page.id}-og-description`}>Open Graph Description</Label>
                  <Textarea
                    id={`${page.id}-og-description`}
                    value={currentSettings.ogDescription || ''}
                    onChange={(e) => handleInputChange(page.id, 'ogDescription', e.target.value)}
                    placeholder="Description for social media sharing"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${page.id}-twitter-card`}>Twitter Card Type</Label>
                  <select
                    id={`${page.id}-twitter-card`}
                    value={currentSettings.twitterCard || 'summary_large_image'}
                    onChange={(e) => handleInputChange(page.id, 'twitterCard', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                  >
                    <option value="summary">Summary</option>
                    <option value="summary_large_image">Summary Large Image</option>
                    <option value="app">App</option>
                    <option value="player">Player</option>
                  </select>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert>
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  onClick={() => handleSave(page.id)} 
                  disabled={isSaving}
                  className="w-full sm:w-auto"
                >
                  {isSaving ? (
                    <>
                      <LoadingSpinner className="mr-2 h-4 w-4" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Settings
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
