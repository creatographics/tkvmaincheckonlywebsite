"use client"

import { useState } from "react"
import { HelpCircle } from "@/components/ui/icons"
import { ImprovedFAQ } from "@/components/ui/improved-faq"

const faqs = [
  {
    id: 1,
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on scope and complexity. A typical website takes 4-6 weeks, graphic design projects 1-2 weeks, and app development 8-12 weeks. We'll provide a detailed timeline in your project proposal."
  },
  {
    id: 2,
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing based on project requirements. After understanding your needs, we provide a detailed quote with transparent pricing. We offer both fixed-price projects and hourly rates depending on what works best for you."
  },
  {
    id: 3,
    question: "Do you offer revisions?",
    answer: "Yes! All our packages include a set number of revisions. Typically, we offer 2-3 rounds of revisions for design work and unlimited bug fixes for development projects. Additional revisions can be requested if needed."
  },
  {
    id: 4,
    question: "Can you work with my existing brand guidelines?",
    answer: "Absolutely! We're experienced in working within established brand guidelines. We'll ensure all deliverables align with your brand identity, colors, typography, and style requirements."
  },
  {
    id: 5,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer various maintenance and support packages. This includes website updates, bug fixes, content updates, hosting management, and technical support. We're here to help your project succeed long-term."
  },
  {
    id: 6,
    question: "What information do you need to get started?",
    answer: "To begin, we need details about your project goals, target audience, preferred timeline, budget range, and any specific requirements or preferences. The more information you provide, the better we can tailor our proposal to your needs."
  },
  {
    id: 7,
    question: "Do you sign NDAs?",
    answer: "Yes, we're happy to sign Non-Disclosure Agreements (NDAs) to protect your confidential information. We take client privacy and intellectual property very seriously."
  },
  {
    id: 8,
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, credit cards, PayPal, and other digital payment platforms. Payment terms are typically 50% upfront and 50% upon completion, but we can discuss flexible arrangements for larger projects."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)
  
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5)

  return (
    <section className="pb-16 md:pb-24 bg-white dark:bg-transparent">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/20 rounded-3xl p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base">
            Quick answers about pricing, timelines, and how our quotation process works.
          </p>
        </div>

        {/* FAQ Accordion */}
        <ImprovedFAQ faqs={displayedFaqs} allowMultiple={false} />
        
        {/* View More Button */}
        {!showAll && faqs.length > 5 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-semibold text-sm transition-all hover:gap-3 border border-primary/20"
            >
              View more FAQs ({faqs.length - 5} more)
              <span>→</span>
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:contact@tkvcreatographics.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-all hover:gap-3"
          >
            Contact our team
            <span>→</span>
          </a>
        </div>
        
        </div>
        {/* Hidden SEO Content */}
        <p className="sr-only">
          Quotation and pricing FAQ for creative services. Get instant quotes for graphic design services, logo design, brand identity design, corporate branding, website design and development, custom website development, e-commerce website development, WordPress development, responsive web design, UI UX design services, digital marketing services, SEO services, search engine optimization, social media marketing, PPC advertising, mobile app development, iOS app development, Android app development, photography services, product photography, commercial photography, videography services, corporate video production, 2D 3D design services, animation services. Project cost estimates, pricing structure, payment terms, revision policy, NDA confidentiality agreement, project timelines, delivery schedule, ongoing support, maintenance packages. Free quotation Chennai, design pricing Pondicherry, creative agency quotes India, transparent pricing Tamil Nadu, affordable design services, professional quotation process.
        </p>
      </div>
    </section>
  )
}
