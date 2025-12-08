'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ChevronDown, Palette, Code, TrendingUp, Smartphone, Box, Camera, Video, Briefcase, Users, Building2, User, Send } from '@/components/ui/icons'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { SearchTrigger } from '@/components/ui/search'
import { useSearch } from '@/components/ui/search-context'
import { WorksRequestModal } from '@/components/works-request-modal'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { CornerBorders } from '@/components/ui/corner-borders'

const servicesMenu = [
    { name: 'Graphic Designing', href: '/services#graphic-designing', icon: Palette, desc: 'Logos, branding & visual identity' },
    { name: 'Website Designing', href: '/services#website-designing', icon: Code, desc: 'Modern, responsive websites' },
    { name: 'Digital Marketing', href: '/services#digital-marketing', icon: TrendingUp, desc: 'SEO, social media & ads' },
    { name: 'App Development', href: '/services#app-development', icon: Smartphone, desc: 'Mobile & web applications' },
    { name: '2D & 3D Designing', href: '/services#2d-3d-designing', icon: Box, desc: 'Animation & 3D modeling' },
    { name: 'Photography', href: '/services#photography', icon: Camera, desc: 'Professional photo shoots' },
    { name: 'Videography', href: '/services#videography', icon: Video, desc: 'Video production & editing' },
    { name: 'Other Services', href: '/services#other-services', icon: Briefcase, desc: 'Custom creative solutions' },
]

const aboutMenu = [
    { name: 'About Us', href: '/about', icon: Building2, desc: 'Learn about our story & mission' },
    { name: 'Careers', href: '/careers', icon: Users, desc: 'Join our creative team' },
]

const menuItems = [
    { name: 'Services', href: '/services', hasMenu: true, menu: servicesMenu },
    { name: 'Works', isModal: true },
    { name: 'About', href: '/about', hasMenu: true, menu: aboutMenu },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

export const HeroHeader = ({ showReadingProgress = false }: { showReadingProgress?: boolean }) => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
    const [worksModalOpen, setWorksModalOpen] = React.useState(false)
    const [scrollProgress, setScrollProgress] = React.useState(0)
    const { scrollYProgress } = useScroll()
    const { openSearch } = useSearch()
    const megamenuRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    // Track reading progress
    React.useEffect(() => {
        if (!showReadingProgress) return

        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (window.scrollY / scrollHeight) * 100
            setScrollProgress(scrolled)
        }

        window.addEventListener('scroll', updateScrollProgress)
        updateScrollProgress()

        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [showReadingProgress])

    // Close megamenu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (megamenuRef.current && !megamenuRef.current.contains(event.target as Node)) {
                setActiveMenu(null)
            }
        }

        if (activeMenu) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [activeMenu])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pt-6 sm:pt-8 lg:pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav
                    data-state={menuState ? 'active' : undefined}
                    className={cn('relative transition-all duration-300 border rounded-full border-border/50 dark:border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12),0_4px_16px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_4px_16px_-4px_rgba(0,0,0,0.3)]', 
                        'after:absolute after:inset-0 after:bg-white/80 dark:after:bg-[#0A0A0A]/80 after:backdrop-blur-xl after:rounded-full after:-z-10',
                        'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/60 before:to-transparent dark:before:from-white/5 dark:before:to-transparent before:pointer-events-none before:rounded-full before:z-0',
                        scrolled && 'after:bg-white/90 dark:after:bg-[#0A0A0A]/90 after:backdrop-blur-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15),0_6px_20px_-6px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5),0_6px_20px_-6px_rgba(0,0,0,0.4)]')}>

                    <motion.div
                        key={1}
                        className={cn('relative z-10 flex items-center justify-between gap-6 px-6 lg:px-8 py-2 duration-200 lg:py-3', scrolled && 'lg:py-2')}>
                        {/* Logo - Left Side */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>
                        </div>

                        {/* Mobile Controls - Right Side */}
                        <div className="flex items-center gap-1.5 lg:hidden" data-component-name="HeroHeader">
                            <SearchTrigger onOpen={openSearch} />
                            <ThemeToggle />
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 flex items-center justify-center h-9 w-9 rounded-full bg-muted/50 border border-border/50 hover:bg-muted hover:border-border transition-all duration-200 text-foreground">
                                <Menu className={cn("size-4 duration-200 transition-all", menuState ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
                                <X className={cn("absolute size-4 duration-200 transition-all", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                            </button>
                        </div>

                        {/* Navigation - Center (Desktop only) */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-1">
                                    {menuItems.map((item, index) => (
                                        <li 
                                            key={index}
                                            className="relative"
                                            onMouseEnter={() => item.hasMenu && setActiveMenu(item.name)}
                                        >
                                            {item.isModal ? (
                                                <button
                                                    onClick={() => setWorksModalOpen(true)}
                                                    className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200 flex items-center gap-1.5">
                                                    <span>{item.name}</span>
                                                </button>
                                            ) : (
                                                <Link
                                                    href={item.href || '#'}
                                                    className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200 flex items-center gap-1.5">
                                                    <span>{item.name}</span>
                                                    {item.hasMenu && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                                                </Link>
                                            )}
                                            
                                            {/* Megamenu */}
                                            {item.hasMenu && activeMenu === item.name && (
                                                <>
                                                    <motion.div 
                                                        initial={{ opacity: 0, y: -8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -8 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute top-full left-0 mt-2 z-[100]"
                                                        ref={megamenuRef}
                                                        onMouseEnter={() => setActiveMenu(item.name)}
                                                        onMouseLeave={() => setActiveMenu(null)}
                                                    >
                                                    <div className={cn(
                                                        "relative rounded-xl border-2 bg-card shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] overflow-hidden",
                                                        item.name === 'Services' ? 'w-[560px]' : 'w-[260px]'
                                                    )}>
                                                        
                                                        {/* Subtle Gradient Background */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-transparent pointer-events-none" />
                                                        
                                                        {/* Menu Items */}
                                                        <div className={cn(
                                                            "relative p-2.5",
                                                            item.name === 'Services' ? 'grid grid-cols-2 gap-1.5' : 'space-y-1'
                                                        )}>
                                                            {item.menu?.map((subItem, subIndex) => {
                                                                const Icon = subItem.icon
                                                                return (
                                                                    <Link
                                                                        key={subIndex}
                                                                        href={subItem.href}
                                                                        onClick={() => setActiveMenu(null)}
                                                                        className="relative flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300 group"
                                                                    >
                                                                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
                                                                        
                                                                        <div className="flex-1 min-w-0">
                                                                            <div className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                                                                                {subItem.name}
                                                                            </div>
                                                                            {subItem.desc && (
                                                                                <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                                                                    {subItem.desc}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                        
                                                        {/* Footer CTA */}
                                                        {item.name === 'Services' && (
                                                            <div className="relative px-3 py-2.5 border-t border-border/50 bg-muted/20">
                                                                <div className="flex items-center justify-between gap-3">
                                                                    <Link 
                                                                        href="/services" 
                                                                        className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1.5 group"
                                                                    >
                                                                        View All
                                                                        <motion.span
                                                                            animate={{ x: [0, 3, 0] }}
                                                                            transition={{ duration: 1.5, repeat: Infinity }}
                                                                        >
                                                                            →
                                                                        </motion.span>
                                                                    </Link>
                                                                    <div className="h-3 w-px bg-border" />
                                                                    <Link 
                                                                        href="/quotation" 
                                                                        className="text-xs font-medium text-foreground hover:text-primary flex items-center gap-1.5 group transition-colors"
                                                                    >
                                                                        <Send className="w-3 h-3" />
                                                                        Get Quote
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                        </div>
                        
                        {/* Desktop Controls - Right Side */}
                        <div className="hidden lg:flex items-center gap-3">
                            <SearchTrigger onOpen={openSearch} />
                            <ThemeToggle />
                            <Link href="/quotation">
                                <ShimmerButton
                                    className="h-9 px-6"
                                    background="hsl(220 18% 20%)"
                                    shimmerColor="#ffffff"
                                    textColor="#ffffff"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Send className="h-4 w-4" />
                                        <span>Free Quotation</span>
                                    </div>
                                </ShimmerButton>
                            </Link>
                        </div>

                        {/* Mobile Menu Dropdown */}
                        {menuState && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="lg:hidden fixed top-[5.5rem] sm:top-24 left-4 right-4 rounded-2xl border border-white/10 shadow-2xl max-h-[70vh] z-40 bg-[#0a0a0a] flex flex-col overflow-hidden"
                            >
                                {/* Scrollable Menu Content */}
                                <div className="flex-1 overflow-y-auto p-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    <style>{`
                                        .mobile-menu-scroll::-webkit-scrollbar { display: none; }
                                    `}</style>
                                    <div className="mobile-menu-scroll">
                                        {menuItems.map((item, index) => (
                                            <div key={index} className="mb-1">
                                                {item.isModal ? (
                                                    <button
                                                        onClick={() => {
                                                            setWorksModalOpen(true)
                                                            setMenuState(false)
                                                        }}
                                                        className="w-full text-left text-white hover:text-primary hover:bg-white/5 flex items-center gap-2 font-medium text-sm py-2 px-3 rounded-lg transition-all duration-150">
                                                        <span>{item.name}</span>
                                                    </button>
                                                ) : (
                                                    <Link
                                                        href={item.href || '#'}
                                                        onClick={() => !item.hasMenu && setMenuState(false)}
                                                        className="text-white hover:text-primary hover:bg-white/5 flex items-center justify-between gap-2 font-medium text-sm py-2 px-3 rounded-lg transition-all duration-150">
                                                        <span>{item.name}</span>
                                                        {item.hasMenu && <ChevronDown className="w-3 h-3 text-zinc-500" />}
                                                    </Link>
                                                )}
                                                {/* Services in 2-column grid */}
                                                {item.hasMenu && item.menu && item.name === 'Services' && (
                                                    <div className="grid grid-cols-2 gap-1 mt-1 mb-2 px-1">
                                                        {item.menu.map((subItem, subIndex) => {
                                                            const Icon = subItem.icon
                                                            return (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    onClick={() => setMenuState(false)}
                                                                    className="text-zinc-400 hover:text-primary hover:bg-white/5 flex items-center gap-1.5 text-xs py-2 px-2 rounded-lg transition-all duration-150"
                                                                >
                                                                    <Icon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
                                                                    <span className="truncate">{subItem.name}</span>
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                )}
                                                {/* About submenu - regular list */}
                                                {item.hasMenu && item.menu && item.name === 'About' && (
                                                    <div className="flex gap-2 mt-1 mb-2 px-1">
                                                        {item.menu.map((subItem, subIndex) => {
                                                            const Icon = subItem.icon
                                                            return (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    onClick={() => setMenuState(false)}
                                                                    className="text-zinc-400 hover:text-primary hover:bg-white/5 flex items-center gap-1.5 text-xs py-2 px-3 rounded-lg transition-all duration-150 flex-1"
                                                                >
                                                                    <Icon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
                                                                    <span>{subItem.name}</span>
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Fixed CTA Button at Bottom */}
                                <div className="p-4 pt-3 border-t border-zinc-800/80 bg-[#0a0a0a] rounded-b-2xl">
                                    <Link href="/quotation" onClick={() => setMenuState(false)} className="w-full block">
                                        <ShimmerButton
                                            className="h-10 px-5 w-full text-[13px] rounded-xl"
                                            background="hsl(var(--primary))"
                                            shimmerColor="#ffffff"
                                            textColor="hsl(var(--primary-foreground))"
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <Send className="h-3.5 w-3.5" />
                                                <span className="font-medium">Free Quotation</span>
                                            </div>
                                        </ShimmerButton>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                    
                    {/* Reading Progress Bar - Only visible when scrolling */}
                    {showReadingProgress && scrollProgress > 0 && (
                        <div className="absolute -bottom-[1px] left-0 right-0 h-[2px]">
                            <div 
                                className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-150 ease-out"
                                style={{ width: `${scrollProgress}%` }}
                            />
                        </div>
                    )}
                </nav>
            </div>
            
            {/* Works Request Modal */}
            <WorksRequestModal 
                isOpen={worksModalOpen} 
                onClose={() => setWorksModalOpen(false)} 
            />
        </header>
    )
}
