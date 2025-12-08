"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "@/components/ui/icons"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { SafeImg } from "@/components/ui/safe-image"

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-transparent pt-8 md:pt-0">
      <div className="container mx-auto px-0 pb-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center border-b">
          {/* Left Side - Text Content */}
          <div className="space-y-3 md:space-y-4 px-6 sm:px-8 lg:pl-12 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-primary">
                Creative Design & Digital Solutions
              </p>
            </div>

            <h1 
              className="text-4xl md:text-5xl font-bold font-heading"
              style={{
                letterSpacing: '-2px',
                lineHeight: '1.1'
              }}
            >
              <span className="block">
                <span className="text-gradient-primary">Creative Designs</span>{' '}
                That{' '}
                <span className="text-gradient-primary">Elevate</span>{' '}
                Your Brand
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Professional graphic design, branding, website design, and digital solutions for businesses in India.
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground/80 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2 text-center md:text-left" data-component-name="HomeHero">
              <span className="flex items-center gap-1 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap sm:whitespace-normal">Serving clients across</span>
              </span>
              <span className="font-medium">Chennai, Pondicherry, and nationwide</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start" data-component-name="HomeHero">
              <Link href="/quotation" className="w-full sm:w-auto">
                <ShimmerButton className="shadow-2xl w-full sm:w-auto">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                    Get Free Quote
                  </span>
                </ShimmerButton>
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-background border border-input rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto"
              >
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Section - Compact */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-3 border-t border-border/40">
              <div className="flex -space-x-2" data-component-name="HomeHero">
                {[
                  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', alt: 'Indian business professional' },
                  { src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face', alt: 'Indian entrepreneur' },
                  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', alt: 'Indian startup founder' },
                  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', alt: 'Indian business owner' }
                ].map((person, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40"
                  >
                    <img
                      src={person.src}
                      alt={person.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-foreground">
                Trusted by <span className="text-primary font-semibold">200+</span> businesses worldwide
              </p>
            </div>
          </div>

          {/* Right Side - Hero Image Carousel */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            
            {/* Animated Carousel */}
            <div className="relative h-full w-full overflow-hidden">
              <div className="grid grid-cols-2 gap-3 p-3 h-full">
                {/* Column 1 - Moves Up */}
                <div className="animate-scroll-up space-y-3">
                  {[
                    { src: '/images/heroslide/Website-Design-Finance-Web.webp', alt: 'Website Design' },
                    { src: '/images/heroslide/Flyer-Design-Kinesis.webp', alt: 'Flyer Design' },
                    { src: '/images/heroslide/Book-Cover-Design-Alpha-Arts-and-Science-College.webp', alt: 'Book Cover Design' },
                    { src: '/images/heroslide/Flyer-Design-Gurukul-International-School.webp', alt: 'School Flyer Design' },
                  ].map((item, i) => (
                    <div key={i} className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-border/50 dark:border-white/20 p-[5px]">
                      <SafeImg
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover rounded-xl"
                        fallbackSrc="/images/placeholder-logo.svg"
                        showFallbackText={true}
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[
                    { src: '/images/heroslide/Website-Design-Finance-Web.webp', alt: 'Website Design' },
                    { src: '/images/heroslide/Flyer-Design-Kinesis.webp', alt: 'Flyer Design' },
                  ].map((item, i) => (
                    <div key={`dup1-${i}`} className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-border/50 dark:border-white/20 p-[5px]">
                      <SafeImg
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover rounded-xl"
                        fallbackSrc="/images/placeholder-logo.svg"
                        showFallbackText={true}
                      />
                    </div>
                  ))}
                </div>

                {/* Column 2 - Moves Down */}
                <div className="animate-scroll-down space-y-3">
                  {[
                    { src: '/images/heroslide/Mobile-App-Finance-Cal.webp', alt: 'Mobile App Design' },
                    { src: '/images/heroslide/Business-Card-Design-Aravind-Heart-Care.webp', alt: 'Business Card Design' },
                    { src: '/images/heroslide/Trifold-Design-Kinesis-Pain-Speciality.webp', alt: 'Trifold Brochure Design' },
                    { src: '/images/heroslide/homeslider1.webp', alt: 'Creative Design Work' },
                  ].map((item, i) => (
                    <div key={i} className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-border/50 dark:border-white/20 p-[5px]">
                      <SafeImg
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover rounded-xl"
                        fallbackSrc="/images/placeholder-logo.svg"
                        showFallbackText={true}
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[
                    { src: '/images/heroslide/Mobile-App-Finance-Cal.webp', alt: 'Mobile App Design' },
                    { src: '/images/heroslide/Business-Card-Design-Aravind-Heart-Care.webp', alt: 'Business Card Design' },
                  ].map((item, i) => (
                    <div key={`dup2-${i}`} className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-border/50 dark:border-white/20 p-[5px]">
                      <SafeImg
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover rounded-xl"
                        fallbackSrc="/images/placeholder-logo.svg"
                        showFallbackText={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
