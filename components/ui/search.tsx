'use client'

import { useState, useEffect, useRef } from 'react'
import { Search as SearchIcon, X } from '@/components/ui/icons'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

interface SearchResult {
  title: string
  description: string
  url: string
  type: 'page' | 'service' | 'blog'
}

const searchData: SearchResult[] = [
  { title: 'Home', description: 'TKV Creatographics homepage', url: '/', type: 'page' },
  { title: 'About Us', description: 'Learn about our creative agency', url: '/about', type: 'page' },
  { title: 'Services', description: 'Our creative and digital services', url: '/services', type: 'page' },
  { title: 'Works', description: 'Portfolio of our projects', url: '/works', type: 'page' },
  { title: 'Blog', description: 'Latest insights and articles', url: '/blog', type: 'page' },
  { title: 'Contact', description: 'Get in touch with us', url: '/contact', type: 'page' },
  { title: 'Quotation', description: 'Request a free quote', url: '/quotation', type: 'page' },
  { title: 'Graphic Design', description: 'Logo design, branding, and visual identity', url: '/services#graphic-designing', type: 'service' },
  { title: 'Web Design', description: 'Website development and design', url: '/services#website-designing', type: 'service' },
  { title: 'Digital Marketing', description: 'SEO, social media, and online marketing', url: '/services#digital-marketing', type: 'service' },
  { title: 'App Development', description: 'Mobile and web application development', url: '/services#app-development', type: 'service' },
  { title: '2D & 3D Design', description: 'Animation and 3D modeling services', url: '/services#2d-3d-designing', type: 'service' },
  { title: 'Photography', description: 'Professional photography services', url: '/services#photography', type: 'service' },
  { title: 'Videography', description: 'Video production and editing', url: '/services#videography', type: 'service' },
]

interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

export function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
      setResults(filtered)
      setSelectedIndex(-1)
    } else {
      setResults([])
      setSelectedIndex(-1)
    }
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault()
      window.location.href = results[selectedIndex].url
      onClose()
    }
  }

  const handleResultClick = (url: string) => {
    window.location.href = url
    onClose()
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'service': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'blog': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md"
          onClick={onClose}
        >
          <div className="fixed inset-x-4 top-[12%] mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border-2 bg-card shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] overflow-hidden backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 border-b px-5 py-4 bg-muted/30">
                <SearchIcon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search pages, services, and more..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 text-base border-0"
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search Results */}
              {results.length > 0 && (
                <div ref={resultsRef} className="max-h-[400px] overflow-y-auto py-2">
                  <div className="space-y-0.5 px-2">
                    {results.map((result, index) => (
                      <button
                        key={result.url}
                        onClick={() => handleResultClick(result.url)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-150 group flex items-center justify-between gap-3 ${
                          index === selectedIndex
                            ? 'bg-primary/10'
                            : 'hover:bg-muted/60'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
                              {result.title}
                            </h3>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                            {result.description}
                          </p>
                        </div>
                        <span className={`px-2 py-0.5 text-[9px] font-semibold rounded uppercase flex-shrink-0 ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {query.trim() && results.length === 0 && (
                <div className="p-12 text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                    <SearchIcon className="w-8 h-8 opacity-40" />
                  </div>
                  <p className="font-medium text-foreground mb-1">No results found</p>
                  <p className="text-sm">Try searching for pages, services, or topics</p>
                </div>
              )}

              {/* Search Tips */}
              {!query.trim() && (
                <div className="p-5 border-t bg-muted/20">
                  <p className="text-xs font-semibold text-foreground mb-3">Quick Tips</p>
                  <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Try "graphic design" or "web development"</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Use <kbd className="px-1.5 py-0.5 rounded bg-muted border text-[10px] font-mono">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-muted border text-[10px] font-mono">↓</kbd> to navigate</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SearchTrigger({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onOpen()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onOpen])

  return (
    <button
      onClick={onOpen}
      className="flex items-center justify-center h-9 w-9 text-sm text-muted-foreground bg-muted/50 rounded-full hover:bg-muted transition-all duration-200 border border-border/50 hover:border-border"
      data-component-name="SearchTrigger"
      aria-label="Search"
    >
      <SearchIcon className="w-4 h-4" />
    </button>
  )
}
