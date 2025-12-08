'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from '@/components/ui/icons'
import { motion, AnimatePresence } from 'motion/react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 p-3 sm:p-3.5 rounded-full shadow-lg focus:outline-none group"
          aria-label="Back to top"
          style={{
            background: 'linear-gradient(135deg, #f97316, #fb923c, #fdba74)',
          }}
        >
          {/* Animated border line */}
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <span 
              className="absolute inset-[-2px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #f97316, #fb923c, #fdba74, #fff, transparent)',
                animation: 'spin 2s linear infinite',
              }}
            />
            <span 
              className="absolute inset-[2px] rounded-full"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c, #fdba74)',
              }}
            />
          </span>
          
          {/* Icon */}
          <ArrowUp className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
