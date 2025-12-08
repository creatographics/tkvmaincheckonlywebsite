'use client'

import { MessageCircle } from '@/components/ui/icons'
import { ShimmerButton } from './shimmer-button'
import { useState, useEffect } from 'react'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'floating'
}

export function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello! I'm interested in your services.", 
  className = '',
  size = 'md',
  variant = 'default'
}: WhatsAppButtonProps) {
  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/[^\d]/g, '')
  }

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${formatPhoneNumber(phoneNumber)}?text=${encodedMessage}`

  const sizeClasses = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base'
  }

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (variant === 'floating') {
      const handleScroll = () => {
        // Show FAB after scrolling past 500px (hero section)
        setIsVisible(window.scrollY > 500)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [variant])

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-20 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    )
  }

  return (
    <ShimmerButton 
      className={`${sizeClasses[size]} bg-green-500 hover:bg-green-600 ${className}`}
      background="rgb(34, 197, 94)"
      shimmerColor="#ffffff"
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-white"
      >
        <MessageCircle className={iconSizes[size]} />
        <span>WhatsApp</span>
      </a>
    </ShimmerButton>
  )
}
