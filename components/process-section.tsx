"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageSquare, Lightbulb, Rocket, Users } from "@/components/ui/icons"

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "We understand your goals, brand, and requirements. Every project starts with a deep-dive conversation.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "We map the best creative direction and project roadmap. Clear milestones keep everyone aligned.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "We craft and refine the solution with your feedback. Iterative collaboration ensures quality results.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deliver, launch, and support your growth. Ongoing assistance helps you succeed long-term.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
]

export default function ProcessSection() {
  return (
    <section className="pb-16 md:pb-24 bg-white dark:bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4"
          >
            Our Creative Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
          >
            A proven 4-step workflow for design, branding, websites, and digital marketing projects.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative h-full border rounded-2xl p-6 bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Number Badge */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-md">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative space-y-3">
                      <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center rotate-90">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 mb-6 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ready to get started with your project?
          </p>
          <a
            href="#quotation"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        
        {/* Hidden SEO Content */}
        <p className="sr-only">
          Professional creative process for graphic design services, brand identity design, logo design, corporate branding, website design and development, custom website design, e-commerce development, WordPress development, responsive web design, UI UX design, digital marketing services, SEO services, search engine optimization, social media marketing, content marketing, mobile app development, photography services, videography services, 2D 3D design services. Expert creative agency workflow in Chennai, Pondicherry, Tamil Nadu, and across India. Proven methodology for design projects, branding projects, web development projects, and digital marketing campaigns.
        </p>
      </div>
    </section>
  )
}
