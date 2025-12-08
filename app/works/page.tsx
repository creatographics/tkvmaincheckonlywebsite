'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HeroHeader } from '@/components/header'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { ArrowLeft, MessageCircle } from '@/components/ui/icons'

export default function WorksRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen">
      <HeroHeader />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-4xl border rounded-3xl py-12 md:py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Looking for Our Work?
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We've updated how we showcase our work! Instead of a static portfolio, 
                  we now provide personalized samples based on your specific needs.
                </p>
              </div>

              <div className="bg-muted/50 border rounded-lg p-8 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Get Relevant Samples Instantly
                </h2>
                <p className="text-muted-foreground">
                  Click "Works" in the navigation to tell us what type of project you need. 
                  We'll send you relevant samples and connect you directly with our team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton 
                  className="h-12 px-8"
                  onClick={() => router.push('/')}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go to Homepage
                </ShimmerButton>
                
                <ShimmerButton 
                  className="h-12 px-8" 
                  background="hsl(var(--secondary))" 
                  shimmerColor="#ffffff" 
                  textColor="hsl(var(--secondary-foreground))"
                  onClick={() => window.open('https://wa.me/+919629683501?text=Hi! I\'d like to see your portfolio and discuss my project requirements.', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </ShimmerButton>
              </div>

              <p className="text-sm text-muted-foreground">
                Redirecting to homepage in 5 seconds...
              </p>
            </div>
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
