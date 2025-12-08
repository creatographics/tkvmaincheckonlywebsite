import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import QuotationForm from '@/components/quotation-form'
import ProcessSection from '@/components/process-section'
import FAQSection from '@/components/faq-section'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { GoogleRating } from '@/components/ui/google-rating'
import { CheckCircle, FileText, Phone, PlusIcon } from '@/components/ui/icons'

export const metadata = {
  title: 'Free Design & Digital Quote - Get Pricing in 24 Hours | TKV Creatographics',
  description: 'Request a free quote for design, branding, websites, or digital marketing services. Transparent pricing, custom solutions. Serving Chennai, Pondicherry & India. Get your detailed quote within 24 hours.',
}

export default function QuotationPage() {
  // AggregateRating Schema for SEO
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TKV Creatographics",
    "url": "https://tkvcreato.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150",
      "reviewCount": "150"
    },
    "description": "Top-rated creative agency for graphic design, branding, website design, and digital marketing services in Chennai, Pondicherry, and India."
  };

  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to complete a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary depending on scope and complexity. A typical website takes 4-6 weeks, graphic design projects 1-2 weeks, and app development 8-12 weeks. We'll provide a detailed timeline in your project proposal."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible pricing based on project requirements. After understanding your needs, we provide a detailed quote with transparent pricing. We offer both fixed-price projects and hourly rates depending on what works best for you."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer revisions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our packages include a set number of revisions. Typically, we offer 2-3 rounds of revisions for design work and unlimited bug fixes for development projects. Additional revisions can be requested if needed."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with my existing brand guidelines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We're experienced in working within established brand guidelines. We'll ensure all deliverables align with your brand identity, colors, typography, and style requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support after project completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer various maintenance and support packages. This includes website updates, bug fixes, content updates, hosting management, and technical support. We're here to help your project succeed long-term."
        }
      },
      {
        "@type": "Question",
        "name": "What information do you need to get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To begin, we need details about your project goals, target audience, preferred timeline, budget range, and any specific requirements or preferences. The more information you provide, the better we can tailor our proposal to your needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign NDAs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we're happy to sign Non-Disclosure Agreements (NDAs) to protect your confidential information. We take client privacy and intellectual property very seriously."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept various payment methods including bank transfers, credit cards, PayPal, and other digital payment platforms. Payment terms are typically 50% upfront and 50% upon completion, but we can discuss flexible arrangements for larger projects."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD Schema for Aggregate Rating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroHeader />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-3xl bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            <QuotationForm />
            
            {/* Merged Trust Section: Google Rating + Brand Logos */}
            <section className="py-12 border-t border-b border-border/50 bg-white dark:bg-transparent">
              {/* Google Rating */}
              <div className="text-center mb-10">
                <GoogleRating className="justify-center" />
              </div>
              
              {/* Divider Text */}
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-muted-foreground">
                  Trusted by leading brands across India
                </p>
              </div>
              
              {/* Brand Logos Grid */}
              <div className="relative grid grid-cols-2 border-x md:grid-cols-4 max-w-5xl mx-auto">
                <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
                
                <div className="relative border-r border-b bg-secondary dark:bg-secondary/30 flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Datanimbus"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Datanimbus.png"
                    draggable={false}
                  />
                  <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" strokeWidth={1} />
                </div>
                
                <div className="border-b md:border-r flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Naturals"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Naturals.png"
                    draggable={false}
                  />
                </div>
                
                <div className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30 flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Genesis"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Genesis.png"
                    draggable={false}
                  />
                  <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" strokeWidth={1} />
                  <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
                </div>
                
                <div className="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Paloalto"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Paloalto.png"
                    draggable={false}
                  />
                </div>
                
                <div className="relative border-r bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Kinesis"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Kinesis.png"
                    draggable={false}
                  />
                  <PlusIcon className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6" strokeWidth={1} />
                </div>
                
                <div className="bg-background md:border-r md:bg-secondary dark:md:bg-secondary/30 flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Avana"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Avana.png"
                    draggable={false}
                  />
                </div>
                
                <div className="border-r flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Medicub"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Medicub.png"
                    draggable={false}
                  />
                </div>
                
                <div className="bg-secondary dark:bg-secondary/30 flex items-center justify-center px-4 py-8 md:p-8 group">
                  <Image
                    alt="Client logo – Emmbi"
                    width={120}
                    height={40}
                    className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
                    src="/images/clientlogos/Emmbi.png"
                    draggable={false}
                  />
                </div>
                
                <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
              </div>
              
              {/* Stats Section */}
              <div className="pt-12 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
                  <div>
                    <div className="text-5xl font-bold text-foreground mb-3">150+</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">brands served</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-foreground mb-3">10+</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">years experience</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-foreground mb-3">&lt;24h</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">response time</div>
                  </div>
                </div>
              </div>
            </section>
            
            <ProcessSection />
            <FAQSection />
            
            {/* What Happens Next - Above Footer */}
            <div className="py-10 border-t bg-muted/30 -mx-6 lg:-mx-12 px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-semibold text-foreground mb-6">What happens next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-3 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-foreground font-semibold mb-1">We review your request</div>
                    <div className="text-muted-foreground text-xs">(within 2–4 hours)</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-3 shadow-lg">
                      <FileText className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-foreground font-semibold mb-1">We share quote + timeline</div>
                    <div className="text-muted-foreground text-xs">(within 24h)</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-3 shadow-lg">
                      <Phone className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-foreground font-semibold mb-1">Kickoff call if needed</div>
                    <div className="text-muted-foreground text-xs">(at your convenience)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhatsAppButton 
          phoneNumber="+91 96296 83501"
          message="Hi! I'd like to get a quote for my project."
          variant="floating"
        />
        <ModernFooter />
      </div>
    </main>
  )
}
