"use client"

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SafeImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackSrc?: string
  showFallbackText?: boolean
  priority?: boolean
  loading?: 'lazy' | 'eager'
  draggable?: boolean
  [key: string]: any
}

export function SafeImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = '/images/placeholder-logo.svg',
  showFallbackText = true,
  priority = false,
  loading = 'lazy',
  draggable = false,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [fallbackError, setFallbackError] = useState(false)

  const handleError = () => {
    if (!hasError && imgSrc === src) {
      setHasError(true)
      if (fallbackSrc && fallbackSrc !== src) {
        setImgSrc(fallbackSrc)
      } else {
        setFallbackError(true)
      }
    } else if (imgSrc === fallbackSrc) {
      setFallbackError(true)
    }
  }

  // Only show placeholder if both original and fallback failed
  if (fallbackError || (hasError && !fallbackSrc)) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted/50 border border-border/30 rounded-lg",
          className
        )}
        style={{ width, height }}
        {...props}
      >
        {showFallbackText && (
          <div className="text-center p-2">
            <div className="w-8 h-8 mx-auto mb-2 bg-muted-foreground/20 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground">Image unavailable</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      loading={loading}
      draggable={draggable}
      {...props}
    />
  )
}

// For regular img tags (non-Next.js Image)
export function SafeImg({
  src,
  alt,
  className,
  fallbackSrc = '/images/placeholder-logo.svg',
  showFallbackText = true,
  ...props
}: Omit<SafeImageProps, 'priority' | 'loading'>) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [fallbackError, setFallbackError] = useState(false)

  const handleError = () => {
    if (!hasError && imgSrc === src) {
      setHasError(true)
      if (fallbackSrc && fallbackSrc !== src) {
        setImgSrc(fallbackSrc)
      } else {
        setFallbackError(true)
      }
    } else if (imgSrc === fallbackSrc) {
      setFallbackError(true)
    }
  }

  // Only show placeholder if both original and fallback failed
  if (fallbackError || (hasError && !fallbackSrc)) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted/50 border border-border/30 rounded-lg",
          className
        )}
        {...props}
      >
        {showFallbackText && (
          <div className="text-center p-2">
            <div className="w-8 h-8 mx-auto mb-2 bg-muted-foreground/20 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground">Image unavailable</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}
