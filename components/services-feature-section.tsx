'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Palette, 
  Code, 
  TrendingUp, 
  Smartphone, 
  Box, 
  Video,
  Megaphone,
  Camera,
  ArrowRight
} from '@/components/ui/icons'
import Link from 'next/link'
import { ShimmerButton } from '@/components/ui/shimmer-button'

const servicesData = [
  {
    id: "graphic-design-services",
    icon: Palette,
    title: "Graphic Design Services",
    description: "Professional graphic design services for logos, branding, social media, and print materials. Our expert designers create stunning visuals that elevate your brand identity and engage your target audience across all platforms.",
    highlight: "800+ Successful Design Deliveries",
  },
  {
    id: "website-design-development",
    icon: Code,
    title: "Website Design & Development",
    description: "Custom website design and development services including e-commerce, WordPress, and responsive web solutions. We build fast, secure, SEO-optimized websites that convert visitors into customers and grow your business online.",
    highlight: "120+ High-Converting Websites Launched",
  },
  {
    id: "digital-marketing-services",
    icon: TrendingUp,
    title: "Digital Marketing Services",
    description: "Complete digital marketing services including SEO, social media marketing, PPC advertising, and content marketing. Our data-driven strategies help businesses increase online visibility, generate qualified leads, and maximize ROI across all digital channels.",
    highlight: "3.5x Average Campaign ROI",
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    description: "Professional mobile app development for iOS, Android, and cross-platform solutions. We create custom apps with intuitive UI/UX design, robust functionality, and seamless performance that engage users and drive business growth.",
    highlight: "150+ Apps Live on App Stores",
  },
  {
    id: "2d-3d-design",
    icon: Box,
    title: "2D & 3D Design",
    description: "Professional 2D and 3D design services including animation, character design, product visualization, and architectural rendering. We create photorealistic 3D models, immersive environments, and engaging animations for games, marketing, and visualization projects.",
    highlight: "500+ Immersive Visual Assets Created",
  },
  {
    id: "videography-services",
    icon: Video,
    title: "Videography Services",
    description: "Professional videography services for corporate films, promotional videos, events, and social media content. We create engaging video content with expert cinematography, editing, and post-production that tells your story and drives results.",
    highlight: "300+ Story-Driven Films Produced",
  },
  {
    id: "advertising-services",
    icon: Megaphone,
    title: "Advertising Services",
    description: "Strategic advertising campaigns across digital and traditional channels. From creative concepts to media buying and campaign optimization, we deliver advertising solutions that capture attention, build brand awareness, and drive measurable business results.",
    highlight: "250+ Successful Ad Campaigns",
  },
  {
    id: "photography-services",
    icon: Camera,
    title: "Photography Services",
    description: "Professional photography services for products, corporate events, portraits, and commercial projects. Our experienced photographers capture stunning images that showcase your brand, tell your story, and create lasting visual impact across all marketing channels.",
    highlight: "10,000+ Professional Shots Delivered",
  },
]

export function ServicesFeatureSection() {
  const [activeService, setActiveService] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clean animation system - runs independently
  useEffect(() => {
    // Clear any existing intervals
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }

    // Don't run if paused
    if (isPaused) {
      return
    }

    const DURATION = 4000 // 4 seconds per service
    const UPDATE_INTERVAL = 50 // Update every 50ms for smooth animation
    const INCREMENT = (100 / DURATION) * UPDATE_INTERVAL
    
    let currentProgress = progress

    progressIntervalRef.current = setInterval(() => {
      currentProgress += INCREMENT

      if (currentProgress >= 100) {
        // Progress complete - move to next service
        currentProgress = 0
        setProgress(0)
        setActiveService(prev => {
          const next = (prev + 1) % servicesData.length
          console.log(`Moving from service ${prev + 1} to service ${next + 1}`)
          return next
        })
      } else {
        setProgress(currentProgress)
      }
    }, UPDATE_INTERVAL)

    // Cleanup
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [isPaused, activeService]) // Re-run when service changes or pause state changes

  // Handle manual service selection
  const handleServiceClick = (index: number) => {
    // Clear any existing timeouts
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }

    // Set the service and reset progress
    setActiveService(index)
    setProgress(0)
    
    // Pause briefly then resume
    setIsPaused(true)
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 500)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-24 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>Our Services</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Comprehensive{" "}
            <span className="text-gradient-primary">
              Creative Solutions
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            From design to development, we deliver end-to-end digital solutions to elevate your brand
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Step Navigation */}
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative rounded-2xl border-2 border-border/50 bg-card overflow-hidden shadow-lg flex flex-col"
          >
            {/* Header with Progress */}
            <div className="px-5 py-4 border-b border-border/50 bg-muted/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">Our Services</h3>
                <div className="text-xs text-muted-foreground">
                  {activeService + 1} / {servicesData.length}
                </div>
              </div>
              {/* Progress Bar */}
              <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary rounded-full transition-all duration-100 ease-linear"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: '0 0 10px rgba(var(--primary), 0.5)'
                  }}
                />
              </div>
            </div>
            
            {/* Services List */}
            <div className="p-4 flex-1 overflow-auto">
              <div className="space-y-2">
                {servicesData.map((service, index) => {
                  const Icon = service.icon
                  const isActive = activeService === index
                  const isPast = index < activeService
                  
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(index)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 group relative flex items-center gap-3.5 ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary/15 to-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/10' 
                          : isPast
                          ? 'bg-muted/30 border-2 border-transparent opacity-60'
                          : 'hover:bg-muted/50 border-2 border-transparent'
                      }`}
                    >
                      {/* Step Number */}
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : isPast
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-muted/50 text-muted-foreground group-hover:bg-muted'
                      }`}>
                        {index + 1}
                      </span>
                      
                      {/* Icon */}
                      <Icon className={`flex-shrink-0 w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? 'text-primary scale-110'
                          : isPast
                          ? 'text-muted-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`} strokeWidth={1.5} />
                      
                      {/* Title */}
                      <span className={`flex-1 min-w-0 font-semibold text-sm transition-colors truncate ${
                        isActive 
                          ? 'text-foreground' 
                          : isPast
                          ? 'text-muted-foreground'
                          : 'text-foreground/70 group-hover:text-foreground'
                      }`}>
                        {service.title}
                      </span>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Service Details */}
          <div className="flex flex-col">
            <div className="border-2 border-border/40 rounded-2xl p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-card to-card/50 shadow-xl relative overflow-hidden flex-1 flex flex-col">
              {/* Animated background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              {(() => {
                const service = servicesData[activeService]
                const Icon = service.icon
                return (
                  <div key={activeService} className="animate-fade-in flex flex-col h-full">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6" data-component-name="ServicesFeatureSection">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary flex-shrink-0 mx-auto sm:mx-0" strokeWidth={1.5} />
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                          {service.title}
                        </h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="text-xs font-semibold text-primary">
                            {service.highlight}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                    
                    {/* Additional details section */}
                    <div className="space-y-4 pt-6 border-t border-border/40 mb-8 flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Professional team with years of industry experience
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Custom solutions tailored to your brand needs
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Fast turnaround with exceptional quality standards
                        </p>
                      </div>
                    </div>

                    <ShimmerButton
                      className="h-11 px-6 text-sm mt-auto"
                      background="hsl(var(--secondary))"
                      shimmerColor="#ffffff"
                      textColor="hsl(var(--secondary-foreground))"
                    >
                      <Link href={`/services#${service.id}`} className="flex items-center gap-2">
                        View Service Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </ShimmerButton>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
