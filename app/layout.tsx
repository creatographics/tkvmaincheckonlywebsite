import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import localFont from "next/font/local"
import "./globals.css"
import ClientWrapper from "@/components/ui/client-wrapper"
import { ImageProtection } from "@/components/image-protection"

const geomanist = localFont({
  src: [
    {
      path: "../public/font/Geomanist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geomanist",
  display: "swap",
})

const ppNikkeiMaru = localFont({
  src: [
    {
      path: "../public/font/PPNikkeiMaru-Regular-BF660e1da27faa9.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pp-nikkei-maru",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TKV Creatographics - Ideas Refined. Designs Redefined",
  description: "Leading creative design agency specializing in graphic design, web development, digital marketing, and brand identity. We deliver innovative solutions that drive business growth.",
  keywords: "graphic design, web design, digital marketing, brand identity, creative agency, logo design, website development, app development, photography, videography",
  authors: [{ name: "TKV Creatographics" }],
  creator: "TKV Creatographics",
  publisher: "TKV Creatographics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tkvcreatographics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TKV Creatographics - Ideas Refined. Designs Redefined",
    description: "Leading creative design agency specializing in graphic design, web development, digital marketing, and brand identity. We deliver innovative solutions that drive business growth.",
    url: 'https://tkvcreatographics.com',
    siteName: 'TKV Creatographics',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TKV Creatographics - Creative Design Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TKV Creatographics - Ideas Refined. Designs Redefined",
    description: "Leading creative design agency specializing in graphic design, web development, digital marketing, and brand identity.",
    images: ['/images/og-image.jpg'],
    creator: '@tkvcreatographics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TKV Creatographics",
    "description": "Leading creative design agency specializing in graphic design, web development, digital marketing, and brand identity.",
    "url": "https://tkvcreatographics.com",
    "logo": "https://tkvcreatographics.com/images/logotkv.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-96296-83501",
      "contactType": "customer service",
      "email": "contact@tkvcreatographics.com"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "9, Sardar Vallabhai Patel Road",
        "addressLocality": "Pondicherry",
        "addressRegion": "Pondicherry",
        "postalCode": "605001",
        "addressCountry": "IN",
        "name": "Registered Office"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Meenakshi Nagar, Porur",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600116",
        "addressCountry": "IN",
        "name": "Our Office"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/Creatographics/",
      "https://www.instagram.com/tkvcreatographics/",
      "https://in.linkedin.com/company/tkvcreatographics",
      "https://dribbble.com/creatographics"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "services": [
      "Graphic Design",
      "Web Design",
      "Digital Marketing",
      "Brand Identity",
      "App Development",
      "Photography",
      "Videography"
    ]
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TKV Creatographics",
    "url": "https://tkvcreatographics.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "TKV Creato delivered an exceptional website redesign that perfectly captured our brand essence. Their team's creativity and technical expertise resulted in a 40% increase in user engagement."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Dr. Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Working with TKV Creato on our school's branding was a game-changer. They created stunning marketing materials that helped us increase admissions by 35%. Highly professional team!"
      }
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TKV Creatographics",
    "description": "Creative agency offering graphic design, branding, website development, and digital marketing services across India",
    "url": "https://tkvcreatographics.com",
    "telephone": "+91-96296-83501",
    "email": "contact@tkvcreatographics.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "9, Sardar Vallabhai Patel Road",
        "addressLocality": "Pondicherry",
        "addressRegion": "Pondicherry",
        "postalCode": "605001",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Meenakshi Nagar, Porur",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600116",
        "addressCountry": "IN"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/Creatographics/",
      "https://www.instagram.com/tkvcreatographics/",
      "https://in.linkedin.com/company/tkvcreatographics",
      "https://dribbble.com/creatographics"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "INR"
  }

  return (
    <html lang="en" className={`${geomanist.variable} ${ppNikkeiMaru.variable} ${GeistSans.variable}`}>
      <body className={geomanist.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          suppressHydrationWarning
        />
        <ImageProtection />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
