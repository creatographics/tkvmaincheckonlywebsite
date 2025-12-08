"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CornerBorders } from "@/components/ui/corner-borders"
import { Send, CheckCircle, Palette, Code, TrendingUp, Smartphone, Box, Camera, Video, Briefcase } from "@/components/ui/icons"

const services = [
  { id: "graphic-design", name: "Graphic Designing", icon: Palette },
  { id: "web-design", name: "Website Designing", icon: Code },
  { id: "digital-marketing", name: "Digital Marketing", icon: TrendingUp },
  { id: "app-development", name: "App Development", icon: Smartphone },
  { id: "2d-3d-design", name: "2D & 3D Designing", icon: Box },
  { id: "photography", name: "Photography", icon: Camera },
  { id: "videography", name: "Videography", icon: Video },
  { id: "other", name: "Other Services", icon: Briefcase },
]

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="quotation" className="relative overflow-hidden pb-16 md:pb-24 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] opacity-10"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-4">
                <Send className="w-4 h-4" />
                <span>Get Started</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                Get a Free Design &
                <span className="block text-gradient-primary">
                  Digital Quote
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tell us about your project and receive a detailed quote for design, branding, websites, or marketing — within 24 hours.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "Free consultation & project analysis",
                "Transparent pricing breakdown",
                "Custom solutions tailored to your goals",
                "No obligation, no hidden fees"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
              
              {/* Micro-line after bullets */}
              <p className="text-sm text-muted-foreground pt-2">
                You'll receive a tailored proposal, timeline, and pricing within 24 hours.
              </p>
              
              {/* What You'll Get Section - Compact */}
              <div className="pt-4 mt-4 border-t border-border/50">
                <p className="text-xs font-semibold text-foreground mb-2">What you'll get:</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[10px] font-medium text-foreground leading-tight">Detailed Quote</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[10px] font-medium text-foreground leading-tight">Project Timeline</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[10px] font-medium text-foreground leading-tight">Free Consultation</span>
                  </div>
                </div>
              </div>
              
              {/* Location Micro-line */}
              <p className="text-xs text-muted-foreground pt-2">
                Serving clients across Chennai, Pondicherry & India.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-4">Trusted by 200+ businesses worldwide</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                        alt={`Client ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground text-base">Join 200+ happy clients</div>
                  <div className="text-muted-foreground font-medium">Average 4.9/5 rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative border bg-card p-8">
            <CornerBorders />
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="h-11"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company Name
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      className="h-11"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Services Interested In *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {services.map((service) => {
                      const Icon = service.icon
                      const isSelected = formData.services.includes(service.id)
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceToggle(service.id)}
                          className={`relative p-3 border rounded-lg transition-all duration-200 ${
                            isSelected
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50 hover:bg-muted/50'
                          }`}
                        >
                          <Icon className={`w-5 h-5 mx-auto mb-1 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} strokeWidth={1.5} />
                          <div className={`text-xs font-medium ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                            {service.name.split(' ')[0]}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Details *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="w-full h-12 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Free Quote
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </ShimmerButton>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto border-2 border-green-200">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground">Thank You!</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  We've received your request. Our team will get back to you within 24 hours with a detailed quote.
                </p>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* SEO Content - Hidden */}
        <p className="sr-only">
          Free quotation and pricing for creative design services in Chennai, Pondicherry, and across India. Get instant quotes for graphic design services, logo design, brand identity design, corporate branding, visual identity, website design and development, custom website design, e-commerce website development, WordPress development, responsive web design, UI UX design services, digital marketing services, SEO services, search engine optimization, social media marketing, PPC advertising, content marketing, email marketing, mobile app development, iOS app development, Android app development, photography services, product photography, commercial photography, videography services, corporate video production, 2D 3D design services, animation services. Request free quotation Chennai Pondicherry, design pricing India, creative agency quotes, web development pricing, digital marketing packages, branding cost estimate, affordable design services Tamil Nadu, professional quotation service, transparent pricing creative agency, no obligation quote design studio.
        </p>
      </div>
    </section>
  )
}
