'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CornerBorders } from '@/components/ui/corner-borders'
import { SafeImg } from '@/components/ui/safe-image'
import { Palette, Code, TrendingUp, Smartphone, Box, Camera, Video, Briefcase } from '@/components/ui/icons'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const services = [
  { icon: Palette, name: 'Graphic Design', color: 'text-pink-500' },
  { icon: Code, name: 'Web Development', color: 'text-blue-500' },
  { icon: TrendingUp, name: 'Digital Marketing', color: 'text-green-500' },
  { icon: Smartphone, name: 'App Development', color: 'text-purple-500' },
  { icon: Box, name: '3D Design', color: 'text-orange-500' },
  { icon: Camera, name: 'Photography', color: 'text-cyan-500' },
  { icon: Video, name: 'Videography', color: 'text-red-500' },
  { icon: Briefcase, name: 'Consulting', color: 'text-yellow-500' },
]

const sliderImages = [
  '/images/homeslider.png',
  '/images/homeslider1.png',
  '/images/homeslider2.png',
]

export function Features() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Service carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true)
            setCurrentIndex((prev) => {
                const next = prev + 1
                // When we reach the end of first set, prepare for seamless loop
                if (next >= services.length) {
                    setTimeout(() => {
                        setIsTransitioning(false)
                        setCurrentIndex(0)
                    }, 500)
                    return next
                }
                return next
            })
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    // Image slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="pb-16 md:pb-24 bg-white dark:bg-transparent">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-4">
                        <span>Our Services</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                        Complete Digital Solutions
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        From creative design to powerful development, we offer comprehensive services to transform your vision into reality
                    </p>
                </div>

                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group relative sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CornerBorders />
                        <div className="relative h-full flex flex-col">
                            {/* Header Section */}
                            <CardHeader className="p-6 md:p-8 space-y-3">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary w-fit">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    <span>Featured Service</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-medium text-foreground">
                                    Full-Service Creative Agency
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                                    From branding to digital marketing, we provide end-to-end solutions that elevate your business and engage your audience.
                                </p>
                            </CardHeader>

                            {/* Image Section */}
                            <CardContent className="relative flex-1 px-6 pb-6 md:px-8 md:pb-8">
                                <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
                                    <SafeImg
                                        src="/images/Service-8.webp"
                                        alt="Full-Service Creative Agency"
                                        className="object-contain transition-transform duration-500 group-hover:scale-105 max-w-full max-h-full"
                                        style={{ maxWidth: '400px', maxHeight: '300px' }}
                                        fallbackSrc="/images/placeholder-logo.svg"
                                        showFallbackText={true}
                                    />
                                </div>
                            </CardContent>
                        </div>
                    </Card>

                    <Card className="group relative sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
                        <CornerBorders />
                        <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">Strategic Planning & Execution</p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                                        className="hidden dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                                        className="shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="group relative sm:col-span-2 sm:rounded-none sm:rounded-bl-xl flex items-center justify-center">
                        <CornerBorders />
                        <CardContent className="p-6 md:p-8 w-full flex items-center justify-center min-h-[300px]">
                            <div className="relative w-full max-w-md aspect-[4/3] mx-auto">
                                {sliderImages.map((image, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                                            idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Slider image ${idx + 1}`}
                                            width={400}
                                            height={300}
                                            className="object-contain max-w-full max-h-full"
                                            priority={idx === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="group relative sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
                        <CornerBorders />
                        <CardHeader className="p-6 md:p-12 space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span>Live Preview</span>
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-medium text-foreground mb-2">
                                    Comprehensive Service Portfolio
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                    Explore our wide range of creative and digital services designed to grow your business.
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="relative overflow-hidden">
                                {/* Fade overlays */}
                                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
                                
                                {/* Carousel container */}
                                <div className="relative flex justify-center items-center py-10 min-h-[160px]">
                                    {/* Fixed center highlight box with liquid glass effect */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] pointer-events-none z-0">
                                        {/* Liquid glass background */}
                                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                                            {/* Glass layer */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl" />
                                            
                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                                            
                                            {/* Glossy highlight */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
                                            
                                            {/* Border */}
                                            <div className="absolute inset-0 rounded-xl border border-white/20 dark:border-white/10" />
                                        </div>
                                        
                                        {/* Corner borders */}
                                        <span className="border-primary absolute -left-px -top-px block size-4 border-l-[3px] border-t-[3px] rounded-tl-lg"></span>
                                        <span className="border-primary absolute -right-px -top-px block size-4 border-r-[3px] border-t-[3px] rounded-tr-lg"></span>
                                        <span className="border-primary absolute -bottom-px -left-px block size-4 border-b-[3px] border-l-[3px] rounded-bl-lg"></span>
                                        <span className="border-primary absolute -bottom-px -right-px block size-4 border-b-[3px] border-r-[3px] rounded-br-lg"></span>
                                    </div>
                                    
                                    {/* Scrolling icons - in front */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-full z-10">
                                        <div 
                                            className="flex"
                                            style={{
                                                transform: `translateX(calc(50% - ${(currentIndex * 100) + 50}px))`,
                                                transition: isTransitioning ? 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                            }}
                                        >
                                            {/* Triple the services for seamless continuous loop */}
                                            {[...services, ...services, ...services].map((service, idx) => {
                                                const Icon = service.icon
                                                const actualIndex = idx % services.length
                                                const isCentered = actualIndex === (currentIndex % services.length)
                                                
                                                return (
                                                    <div 
                                                        key={idx}
                                                        className={`flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center transition-all duration-300 ${
                                                            !isCentered ? 'rounded-lg border border-border/30' : ''
                                                        }`}
                                                    >
                                                        <Icon 
                                                            className={`transition-all duration-300 stroke-[1.5] ${
                                                                isCentered 
                                                                    ? `size-12 ${service.color}` 
                                                                    : 'size-8 text-muted-foreground/40'
                                                            }`}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Service name with animation */}
                            <div className="text-center mt-6 min-h-[40px] flex items-center justify-center">
                                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50">
                                    {/* Animated dot indicator */}
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    
                                    {/* Service name */}
                                    <p className="text-sm font-semibold text-foreground transition-all duration-300">
                                        {services[currentIndex % services.length].name}
                                    </p>
                                    
                                    {/* Subtle glow effect */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-50" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
