"use client"

import { HelpCircle } from '@/components/ui/icons'
import { ImprovedFAQ } from '@/components/ui/improved-faq'

const faqData = [
  {
    id: 1,
    question: "What services does TKV Creatographics offer?",
    answer: "We provide graphic design, branding, website development, digital marketing, UI/UX design, 2D/3D design, photography, and videography services."
  },
  {
    id: 2,
    question: "Do you offer branding and logo design?",
    answer: "Yes, we specialize in complete brand identity design, including logos, brand guidelines, and visual communication assets."
  },
  {
    id: 3,
    question: "Can you design and develop websites?",
    answer: "Absolutely. We build modern, responsive websites optimized for performance, user experience, and SEO."
  },
  {
    id: 4,
    question: "Do you offer digital marketing services?",
    answer: "Yes, we offer SEO, social media marketing, content creation, ad creatives, and digital growth strategies."
  },
  {
    id: 5,
    question: "How can I request a quote?",
    answer: "You can request a quote through our Quotation page or contact us directly via phone, email, or WhatsApp."
  },
  {
    id: 6,
    question: "Do you provide custom solutions for businesses?",
    answer: "Yes. All our services are tailored to your brand's goals, audience, and industry needs."
  },
  {
    id: 7,
    question: "Where is TKV Creatographics located?",
    answer: "We operate from Chennai and Pondicherry, serving clients across India and globally."
  },
  {
    id: 8,
    question: "How fast is your delivery time?",
    answer: "Delivery timelines depend on the project scope, but we ensure fast turnarounds without compromising quality."
  },
  {
    id: 9,
    question: "Do you work with startups and small businesses?",
    answer: "Yes. We work with businesses of all sizes—from startups to enterprises."
  },
  {
    id: 10,
    question: "How do I get started?",
    answer: "Simply contact us through our form or WhatsApp, and our team will guide you through the next steps."
  }
]

export default function HomeFAQSection() {

  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-20 bg-white dark:bg-transparent">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Got{" "}
            <span className="text-gradient-primary">
              Questions?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        {/* FAQ Items */}
        <ImprovedFAQ faqs={faqData} allowMultiple={true} />

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/quotation"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+919629683501"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted/50 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
      
      {/* SEO Keywords - Visually Hidden */}
      <p className="sr-only">
        FAQ graphic design services, branding questions Chennai, website development FAQ, digital marketing help, creative agency questions India, TKV Creatographics frequently asked questions
      </p>
      
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
}
