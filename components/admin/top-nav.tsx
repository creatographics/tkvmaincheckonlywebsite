'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  MessageSquare,
  Search,
  Shield,
  Menu,
  X
} from '@/components/ui/icons'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { CornerBorders } from '@/components/ui/corner-borders'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User } from '@/components/ui/icons'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Blog Posts', href: '/admin/blogs', icon: FileText },
  { name: 'Forms', href: '/admin/forms', icon: MessageSquare },
  { name: 'SEO', href: '/admin/seo', icon: Search },
  { name: 'Security', href: '/admin/security', icon: Shield },
]

interface AdminTopNavProps {
  user?: {
    id: string
    email: string
    name: string | null
    role: string
  }
}

export function AdminTopNav({ user }: AdminTopNavProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' })
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  const currentUser = user || {
    id: 'admin',
    email: 'admin@tkvcreato.com',
    name: 'Admin User',
    role: 'ADMIN'
  }

  const initials = currentUser.name
    ? currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase()
    : currentUser.email[0].toUpperCase()

  return (
    <nav className="fixed z-20 w-full pt-4 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative border border-border bg-white dark:bg-card/50 backdrop-blur-xl rounded-full shadow-lg">
          <CornerBorders />
          <div className="flex items-center justify-between py-3 px-6">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <Logo />
              <span className="text-sm font-medium text-muted-foreground">Admin</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'relative inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right side - Theme toggle, Profile, Mobile menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <div className="h-6 w-px bg-border" aria-hidden="true" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-primary/5 transition-all duration-200">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 border border-border rounded-lg shadow-lg" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {currentUser.name || 'Admin User'}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {currentUser.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{isLoggingOut ? 'Signing out...' : 'Sign out'}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4 px-6">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
                
                {/* Mobile Theme Toggle and Profile */}
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm font-medium text-muted-foreground">Settings</span>
                    <div className="flex items-center gap-3">
                      <ThemeToggle />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-primary/5 transition-all duration-200">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
                                {initials}
                              </AvatarFallback>
                            </Avatar>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 border border-border rounded-lg shadow-lg" align="end" forceMount>
                          <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {currentUser.name || 'Admin User'}
                              </p>
                              <p className="text-xs leading-none text-muted-foreground">
                                {currentUser.email}
                              </p>
                            </div>
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem disabled>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>{isLoggingOut ? 'Signing out...' : 'Sign out'}</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
