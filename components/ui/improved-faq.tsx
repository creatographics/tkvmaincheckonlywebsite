"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQItemProps {
  faq: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

function ImprovedFAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "group relative border-2 rounded-xl overflow-hidden transition-all duration-300",
        isOpen 
          ? "border-primary bg-primary/5" 
          : "border-border bg-white dark:bg-card hover:border-primary/30 hover:shadow-md"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 text-left flex items-center gap-4"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        {/* Number Badge */}
        <div className={cn(
          "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300",
          isOpen 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
        )}>
          {String(index + 1).padStart(2, '0')}
        </div>

        <h3 className={cn(
          "flex-1 font-medium text-base transition-colors duration-300 my-0 py-0",
          isOpen ? "text-primary" : "text-foreground"
        )}>
          {faq.question}
        </h3>
        
        <div className={cn(
          "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen 
            ? "bg-primary text-primary-foreground rotate-180" 
            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
        )}>
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="pl-11">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface ImprovedFAQProps {
  faqs: FAQItem[]
  allowMultiple?: boolean
}

export function ImprovedFAQ({ faqs, allowMultiple = true }: ImprovedFAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (id: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <ImprovedFAQItem
          key={faq.id}
          faq={faq}
          isOpen={openItems.has(faq.id)}
          onToggle={() => toggleItem(faq.id)}
          index={index}
        />
      ))}
    </div>
  )
}
