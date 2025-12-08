'use client'

import { HeroHeader } from '@/components/header'
import { Careers4 } from '@/components/careers4'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            <Careers4 />
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
