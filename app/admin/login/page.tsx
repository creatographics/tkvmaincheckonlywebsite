'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CornerBorders } from '@/components/ui/corner-borders'
import { Lock } from '@/components/ui/icons'
import Image from 'next/image'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        return
      }

      router.push('/admin')
      router.refresh()
    } catch (error) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
      
      <div className="relative w-full max-w-md">
        <Card className="border border-border bg-white dark:bg-card/50 shadow-xl rounded-3xl overflow-hidden">
          <CornerBorders />
          
          <CardHeader className="space-y-1 text-center pt-10 pb-6">
            {/* Logo */}
            <div className="mx-auto mb-6">
              <Image
                src="/images/logotkv.webp"
                alt="TKV Creatographics"
                width={60}
                height={60}
                className="rounded-xl"
              />
            </div>
            
            <CardTitle 
              className="text-2xl sm:text-3xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
              }}
            >
              <span className="dark:hidden">Admin Login</span>
              <span 
                className="hidden dark:inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
                }}
              >
                Admin Login
              </span>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Enter your credentials to access the dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-6 sm:px-8 pb-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-11 border border-border bg-background rounded-lg focus:border-primary focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-11 border border-border bg-background rounded-lg focus:border-primary focus:ring-primary transition-colors"
                />
              </div>
              
              {error && (
                <Alert variant="destructive" className="border border-destructive/50 rounded-lg">
                  <AlertDescription className="text-sm">{error}</AlertDescription>
                </Alert>
              )}
              
              <Button 
                type="submit" 
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold shadow-md transition-all duration-200 flex items-center justify-center gap-2" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Sign in
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* Footer text */}
        <p className="text-center text-muted-foreground text-xs mt-6">
          © {new Date().getFullYear()} TKV Creatographics. All rights reserved.
        </p>
      </div>
    </div>
  )
}
