'use client'

import { HeroHeader } from '@/components/header'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import { Globe } from '@/components/ui/globe'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Building,
  Instagram,
  Linkedin,
  Facebook
} from '@/components/ui/icons'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroHeader />
      
      <div className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            
            {/* Background Ripple Effect - Behind content */}
            <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
              <BackgroundRippleEffect rows={10} cols={30} cellSize={50} />
            </div>
            
            {/* Hero Section */}
            <section className="mb-16 md:mb-24 relative z-10 bg-white dark:bg-transparent">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Get in Touch</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6" data-component-name="ContactPage">
                  Let&apos;s Connect &
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent" data-component-name="ContactPage">
                    Create Together
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Have a question or want to work with us? We&apos;d love to hear from you.
                </p>

                {/* Interactive 3D Globe - Cut at bottom (only top half visible) */}
                <div className="hidden sm:flex justify-center mb-8">
                  <div className="relative w-full max-w-md h-48 sm:h-64 overflow-hidden">
                    <div className="absolute inset-0 -bottom-48 sm:-bottom-64">
                      <Globe className="w-full h-full" />
                    </div>
                    {/* Gradient fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white dark:from-background via-white/80 dark:via-background/80 to-transparent pointer-events-none"></div>
                    {/* Divider line at cut-off point */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="-mt-8 sm:-mt-16 bg-white dark:bg-transparent">
              <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
                
                {/* Left Column - Contact Form (3/5 width) */}
                <div className="lg:col-span-3 relative border border-border/40 bg-card p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm" data-component-name="ContactPage">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2" data-component-name="ContactPage">Send Us a Message</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6" data-component-name="ContactPage">Fill out the form and we&apos;ll get back to you within 2 hours</p>
                  
                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Right Column - Contact Info (2/5 width) */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Quick Contact Methods */}
                  <div className="relative border border-border/40 bg-card p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-4">Quick Contact</h3>
                    
                    <div className="space-y-4">
                      <a href="tel:+919629683501" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground">+91 96296 83501</p>
                          <p className="text-xs text-muted-foreground">Mon-Sat: 9 AM - 6 PM</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>

                      <a href="mailto:contact@tkvcreatographics.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">contact@tkvcreatographics.com</p>
                          <p className="text-xs text-muted-foreground">Response within 2 hours</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>

                      <a 
                        href="https://wa.me/919629683501?text=Hello!" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                          <p className="text-xs text-muted-foreground">Chat instantly</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-green-600 dark:text-green-500 group-hover:translate-x-1 transition-all" />
                      </a>
                    </div>
                  </div>

                  {/* Office Locations */}
                  <div className="relative border border-border/40 bg-card p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-4">Our Offices</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Pondicherry</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            9, Sardar Vallabhai Patel Road<br />
                            Pondicherry - 605001
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Chennai</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Meenakshi Nagar, Porur<br />
                            Chennai - 600 116
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Working Hours</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Mon-Sat: 9:00 AM - 6:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
