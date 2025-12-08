import { Logo } from '@/components/logo'
import { Mail, Phone, MapPin } from '@/components/ui/icons'
import Link from 'next/link'
import { CornerBorders } from '@/components/ui/corner-borders'

const services = [
  { title: 'Graphic Design', href: '/services#graphic-design' },
  { title: 'Branding & Identity', href: '/services#branding' },
  { title: 'Website Development', href: '/services#web-design' },
  { title: 'Digital Marketing', href: '/services#digital-marketing' },
  { title: 'SEO Services', href: '/services#seo' },
]

const company = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Team', href: '/about#team' },
  { title: 'Works', href: '/works' },
  { title: 'Blog', href: '/blog' },
  { title: 'Careers', href: '/careers', badge: "We're Hiring" },
]

const resources = [
  { title: 'Free Quotation', href: '/quotation' },
  { title: 'Blog Articles', href: '/blog' },
  { title: 'FAQ', href: '/quotation#faq' },
]

const legal = [
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Terms & Conditions', href: '/terms-conditions' },
  { title: 'Cancellation & Refund', href: '/cancellation-refund' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Creatographics/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tkvcreatographics/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/company/tkvcreatographics',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
      </svg>
    )
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/creatographics',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z" />
      </svg>
    )
  }
]

export default function ModernFooter() {
  return (
    <footer className="pt-2 relative overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-3xl bg-white dark:bg-card/50 dark:backdrop-blur-sm overflow-hidden">

        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-block">
                <Logo />
              </Link>
              
              <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm max-w-md">
                A creative agency offering graphic design, branding, website development, and digital marketing services across India.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <div className="text-foreground/60 group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Services */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Services</h4>
                <ul className="space-y-2">
                  {services.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 dark:text-foreground/70 hover:text-primary hover:translate-x-0.5 transition-all duration-200 inline-block"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Company</h4>
                <ul className="space-y-2">
                  {company.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 dark:text-foreground/70 hover:text-primary hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-2"
                      >
                        {link.title}
                        {link.badge && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Resources */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Resources</h4>
                <ul className="space-y-2">
                  {resources.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 dark:text-foreground/70 hover:text-primary hover:translate-x-0.5 transition-all duration-200 inline-block"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Legal */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Legal</h4>
                <ul className="space-y-2">
                  {legal.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 dark:text-foreground/70 hover:text-primary hover:translate-x-0.5 transition-all duration-200 inline-block"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Office Locations & Contact - Compact Mobile Design */}
        <div className="py-4 sm:py-6 border-t border-border/50" data-component-name="ModernFooter">
          {/* Mobile: Horizontal scroll pills */}
          <div className="sm:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2" style={{ scrollbarWidth: 'none' }}>
              <a href="tel:+919629683501" className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 hover:bg-primary/20 transition-colors">
                <Phone className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-foreground whitespace-nowrap">+91 96296 83501</span>
              </a>
              <a href="mailto:contact@tkvcreatographics.com" className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-muted/50 border border-border/50 flex-shrink-0 hover:bg-muted transition-colors">
                <Mail className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-foreground whitespace-nowrap">Email Us</span>
              </a>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-muted/50 border border-border/50 flex-shrink-0">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">Chennai • Pondicherry</span>
              </div>
            </div>
          </div>
          
          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" data-component-name="ModernFooter">
            {/* Chennai Office */}
            <div className="group" data-component-name="ModernFooter">
              <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1.5" data-component-name="ModernFooter">
                <div className="p-1 rounded bg-primary/10">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>Chennai</span>
              </div>
              <p className="text-xs text-muted-foreground/70 leading-relaxed pl-6" data-component-name="ModernFooter">
                Meenakshi Nagar, Porur, Chennai 600116
              </p>
            </div>
            
            {/* Pondicherry Office */}
            <div className="group" data-component-name="ModernFooter">
              <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1.5" data-component-name="ModernFooter">
                <div className="p-1 rounded bg-primary/10">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>Pondicherry</span>
              </div>
              <p className="text-xs text-muted-foreground/70 leading-relaxed pl-6" data-component-name="ModernFooter">
                9, S.V.Patel Salai, Pondicherry 605001
              </p>
            </div>
            
            {/* Phone */}
            <div className="group" data-component-name="ModernFooter">
              <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1.5" data-component-name="ModernFooter">
                <div className="p-1 rounded bg-primary/10">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>Phone</span>
              </div>
              <a href="tel:+919629683501" className="text-xs text-muted-foreground/70 hover:text-primary transition-colors block pl-6">
                +91 96296 83501
              </a>
            </div>
            
            {/* Email */}
            <div className="group" data-component-name="ModernFooter">
              <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1.5" data-component-name="ModernFooter">
                <div className="p-1 rounded bg-primary/10">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>Email</span>
              </div>
              <a href="mailto:contact@tkvcreatographics.com" className="text-xs text-muted-foreground/70 hover:text-primary transition-colors block pl-6 truncate">
                contact@tkvcreatographics.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-5 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground/60">
            <div className="text-center md:text-left">
              © 2025 TKV Creatographics (OPC) Pvt Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-muted/50 text-[10px] font-mono">
                CIN: U74103PY2023OPC009128
              </span>
            </div>
          </div>
        </div>
        
        {/* SEO Keywords - Visually Hidden */}
        <p className="sr-only">
          graphic design services Chennai, branding agency Pondicherry, website development India, UI UX design services, digital marketing agency Tamil Nadu, creative design company Chennai Pondicherry, logo design services India
        </p>
      </div>
    </footer>
  )
}
