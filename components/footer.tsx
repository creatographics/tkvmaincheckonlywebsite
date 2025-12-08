import { Logo } from '@/components/logo'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ChevronsUpDown } from '@/components/ui/icons'
import Link from 'next/link'
import { CornerBorders } from '@/components/ui/corner-borders'

const links = [
    {
        group: 'Services',
        items: [
            {
                title: 'Graphic Design Services',
                href: '/services#graphic-design',
            },
            {
                title: 'Branding & Identity',
                href: '/services#branding',
            },
            {
                title: 'Website Design & Development',
                href: '/services#web-design',
            },
            {
                title: 'Digital Marketing Services',
                href: '/services#digital-marketing',
            },
            {
                title: 'SEO Services',
                href: '/services#seo',
            },
            {
                title: 'All Services',
                href: '/services',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'About Us',
                href: '/about',
            },
            {
                title: 'Our Team',
                href: '/about#team',
            },
            {
                title: 'Careers',
                href: '/careers',
            },
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Works',
                href: '/works',
            },
        ],
    },
    {
        group: 'Resources',
        items: [
            {
                title: 'Free Quotation',
                href: '/quotation',
            },
            {
                title: 'Case Studies',
                href: '/works',
            },
            {
                title: 'Blog Articles',
                href: '/blog',
            },
            {
                title: 'FAQ',
                href: '/quotation#faq',
            },
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'Privacy Policy',
                href: '/privacy-policy',
            },
            {
                title: 'Terms & Conditions',
                href: '/terms-conditions',
            },
            {
                title: 'Cancellation & Refund',
                href: '/cancellation-refund',
            },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer className="pt-2">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border bg-white dark:bg-transparent">
                <CornerBorders />
                <div className="mb-8 border-b md:mb-12 pt-12">
                    <div className="flex flex-wrap items-end justify-between gap-6 pb-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                aria-label="go home"
                                className="block size-fit">
                                <Logo />
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-md">
                            TKV Creatographics is a creative agency offering graphic design, branding, website development, and digital marketing services across India.
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p><strong>Contact:</strong> <a href="tel:+919629683501" className="hover:text-primary">+91 96296 83501</a> | <a href="mailto:contact@tkvcreatographics.com" className="hover:text-primary">contact@tkvcreatographics.com</a></p>
                            <p><strong>Chennai:</strong> Meenakshi Nagar, Porur, Chennai 600116</p>
                            <p><strong>Pondicherry:</strong> 9, Sardar Vallabhai Patel Road, Pondicherry 605001</p>
                            <p className="text-xs">Trusted by 150+ brands with a 4.9/5 Google rating.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link
                            href="https://www.facebook.com/Creatographics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.instagram.com/tkvcreatographics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://dribbble.com/creatographics"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Dribbble"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://in.linkedin.com/company/tkvcreatographics"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
                <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <form className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
                        <div className="space-y-4">
                            <Label
                                htmlFor="mail"
                                className="block font-medium">
                                Newsletter
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    id="mail"
                                    name="mail"
                                    placeholder="Your email"
                                    className="h-8 text-sm"
                                />
                                <ShimmerButton className="h-8 px-3 text-sm">Submit</ShimmerButton>
                            </div>
                            <span className="text-muted-foreground block text-sm">Don't miss any update!</span>
                        </div>
                    </form>
                </div>
                
                {/* Copyright Section */}
                <div className="border-t pt-6 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <small className="text-muted-foreground text-sm">
                            © 2025 TKV Creatographics (OPC) Pvt Ltd
                        </small>
                        <div className="text-sm text-muted-foreground">
                            CIN: U74103PY2023OPC009128
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
