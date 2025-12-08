"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "@/components/ui/icons";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomeAboutSection() {
  return (
    <section className="relative w-full mx-auto overflow-hidden pt-16 md:pt-20 pb-20 md:pb-28 bg-white dark:bg-transparent">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content Side */}
        <div className="z-10 space-y-8 px-6 sm:px-8 lg:pl-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>About Us</span>
          </div>
          
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
              A Creative Agency
              <br />
              <span className="text-gradient-primary">
                Built for Modern Brands
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in graphic design, branding, websites, and digital marketing — helping businesses across India build stronger, more memorable brands.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="flex items-center gap-3 py-4">
            {/* Stat Card 1 */}
            <div className="relative">
              <div className="relative rounded-xl border border-border min-w-[100px] overflow-hidden">
                {/* Top half - Number */}
                <div className="flex items-center justify-center px-5 py-3">
                  <div className="text-4xl font-bold text-foreground leading-none">
                    <AnimatedCounter end={200} suffix="+" />
                  </div>
                </div>
                
                {/* Split line */}
                <div className="h-[1px] bg-border"></div>
                
                {/* Bottom half - Label */}
                <div className="flex items-center justify-center px-5 py-2">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    Clients
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="relative">
              <div className="relative rounded-xl border border-border min-w-[100px] overflow-hidden">
                {/* Top half - Number */}
                <div className="flex items-center justify-center px-5 py-3">
                  <div className="text-4xl font-bold text-foreground leading-none">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                </div>
                
                {/* Split line */}
                <div className="h-[1px] bg-border"></div>
                
                {/* Bottom half - Label */}
                <div className="flex items-center justify-center px-5 py-2">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    Projects
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="relative">
              <div className="relative rounded-xl border border-border min-w-[100px] overflow-hidden">
                {/* Top half - Number */}
                <div className="flex items-center justify-center px-5 py-3">
                  <div className="text-4xl font-bold text-foreground leading-none">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                </div>
                
                {/* Split line */}
                <div className="h-[1px] bg-border"></div>
                
                {/* Bottom half - Label */}
                <div className="flex items-center justify-center px-5 py-2">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    Years
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location & CTA */}
          <div className="space-y-4">
            <ShimmerButton
              className="h-11 px-6 text-sm"
              background="hsl(var(--secondary))"
              shimmerColor="#ffffff"
              textColor="hsl(var(--secondary-foreground))"
            >
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ShimmerButton>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">
                Serving clients <span className="font-semibold text-foreground">worldwide</span> from Chennai & Pondicherry
              </span>
            </div>
          </div>
        </div>
        
        {/* Globe Side */}
        <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
          <Globe className="scale-90 lg:scale-100" />
        </div>
      </div>
        
      {/* SEO Keywords - Visually Hidden */}
      <p className="sr-only">
        graphic design agency Chennai, branding services Pondicherry, website design company India, digital marketing agency Tamil Nadu, creative agency Chennai, UI UX design services, brand identity design India, web development Chennai Pondicherry
      </p>
    </section>
  );
}

export function Globe({
  className,
}: {
  className?: string
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: isDark ? 6 : 1.2,
      baseColor: isDark ? [0.3, 0.3, 0.3] : [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: isDark ? [0.5, 0.5, 0.5] : [1, 1, 1],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [isDark, onRender])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
