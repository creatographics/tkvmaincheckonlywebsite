import ContentSection from '@/components/content-5'
import TeamSection from '@/components/team-section-one'
import MissionCultureSection from '@/components/mission-culture-section'
import { Careers4 } from '@/components/careers4'
import ModernFooter from '@/components/modern-footer'
import { HeroHeader } from '@/components/header'
import { WorldMapSection } from '@/components/world-map-section'
import FounderSection from '@/components/founder-section'
import { CornerBorders } from '@/components/ui/corner-borders'
import RemoteTeamSection from '@/components/remote-team-section'

export const metadata = {
  title: 'About Us - TKV Creatographics',
  description: 'We believe every brand has a story worth telling. Our team combines creativity and strategy to craft designs, websites, and marketing campaigns that help businesses grow.',
}

export default function AboutPage() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TKV Creatographics",
    "url": "https://tkvcreatographics.com",
    "employee": [
      {
        "@type": "Person",
        "name": "Vikramraja",
        "jobTitle": "CEO & Creative Director",
        "worksFor": {
          "@type": "Organization",
          "name": "TKV Creatographics"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Person",
        "name": "Suman",
        "jobTitle": "Project Manager",
        "worksFor": {
          "@type": "Organization",
          "name": "TKV Creatographics"
        }
      },
      {
        "@type": "Person",
        "name": "Deepshikha",
        "jobTitle": "Marketing Lead",
        "worksFor": {
          "@type": "Organization",
          "name": "TKV Creatographics"
        }
      },
      {
        "@type": "Person",
        "name": "Bala",
        "jobTitle": "Senior Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "TKV Creatographics"
        }
      },
      {
        "@type": "Person",
        "name": "Khooshbu",
        "jobTitle": "Senior Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "TKV Creatographics"
        }
      },
      {
        "@type": "Person",
        "name": "Vinoth",
        "jobTitle": "Photographer",
        "worksFor": {
          "@type": "Organization",
          "name": "TKV Creatographics"
        }
      },
      {
        "@type": "Person",
        "name": "Rabel",
        "jobTitle": "Video Editor",
        "worksFor": {
          "@type": "Organization",
          "name": "TKV Creatographics"
        }
      }
    ]
  }

  const areaServedSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TKV Creatographics",
    "url": "https://tkvcreatographics.com",
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Singapore"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "serviceType": [
      "Graphic Design",
      "Branding & Identity",
      "Website Development",
      "Digital Marketing",
      "UI/UX Design",
      "Photography",
      "Video Production"
    ]
  }

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Creative Team Positions",
    "description": "Join our creative team of designers, developers, and marketing professionals. We're always looking for passionate talent to build meaningful digital experiences.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "TKV Creatographics",
      "sameAs": "https://tkvcreatographics.com",
      "logo": "https://tkvcreatographics.com/images/logotkv.webp"
    },
    "jobLocation": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pondicherry",
          "addressRegion": "Pondicherry",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Remote",
          "addressCountry": "IN"
        }
      }
    ],
    "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
    "workHours": "Flexible",
    "datePosted": "2025-01-01",
    "validThrough": "2025-12-31",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    },
    "jobBenefits": [
      "Work with global brands",
      "Creative, collaborative culture",
      "Remote-friendly roles",
      "Opportunities to grow"
    ],
    "industry": "Creative Services",
    "occupationalCategory": ["Design", "Development", "Marketing"]
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServedSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <HeroHeader />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            <ContentSection />
            <FounderSection />
            <div id="team">
              <TeamSection />
            </div>
            <WorldMapSection />
            <Careers4 showModal={false} />
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
