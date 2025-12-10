import { HeroHeader } from '@/components/header'
import HomeHero from '@/components/home-hero'
import { HomeLogoCloud } from '@/components/home-logo-cloud'
import { Features } from '@/components/features-11'
import HomeAboutSection from '@/components/home-about-section'
import HomeTestimonials from '@/components/home-testimonials'
import HomeFAQSection from '@/components/home-faq-section'
import { ServicesOverview } from '@/components/services-overview'
import { ServicesFeatureSection } from '@/components/services-feature-section'
import { IndustriesSection } from '@/components/industries-section'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import { GoogleRating } from '@/components/ui/google-rating'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      
      {/* Boxed Content Sections */}
      <div id="main-content" className="pt-28 sm:pt-32 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl border rounded-3xl bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            
            {/* Hero Section */}
            <HomeHero />
            
            {/* Logo Cloud Section */}
            <HomeLogoCloud />
            
            <div className="border-t" />
            
            {/* Services Feature Section */}
            <ServicesFeatureSection />
            
            {/* Industries Section */}
            <IndustriesSection />
            
            <div className="border-t" />
            
            {/* About Section */}
            <HomeAboutSection />
            
            <div className="border-t" />
            
            {/* Testimonials Section */}
            <HomeTestimonials />
            
            <div className="border-t" />
            
            {/* FAQ Section */}
            <HomeFAQSection />
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
