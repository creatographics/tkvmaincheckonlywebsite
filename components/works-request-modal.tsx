'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import { X, MessageCircle, Send, Loader2, ChevronRight, Eye, User, Mail, Phone, Palette, Globe, TrendingUp, Smartphone, Box, Camera, Video, Briefcase, Pen, Layers } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// Enhanced toast notification system
const toast = {
  success: (message: string) => {
    const toastEl = document.createElement('div')
    toastEl.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 border shadow-2xl z-[100] flex items-center gap-2 animate-in slide-in-from-top-2 duration-300'
    toastEl.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="font-medium">${message}</span>
    `
    document.body.appendChild(toastEl)
    setTimeout(() => {
      toastEl.style.animation = 'slide-out-to-top-2 300ms ease-in-out'
      setTimeout(() => document.body.removeChild(toastEl), 300)
    }, 4000)
  },
  error: (message: string) => {
    const toastEl = document.createElement('div')
    toastEl.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 border shadow-2xl z-[100] flex items-center gap-2 animate-in slide-in-from-top-2 duration-300'
    toastEl.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <span class="font-medium">${message}</span>
    `
    document.body.appendChild(toastEl)
    setTimeout(() => {
      toastEl.style.animation = 'slide-out-to-top-2 300ms ease-in-out'
      setTimeout(() => document.body.removeChild(toastEl), 300)
    }, 4000)
  },
  info: (message: string) => {
    const toastEl = document.createElement('div')
    toastEl.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 border shadow-2xl z-[100] flex items-center gap-2 animate-in slide-in-from-top-2 duration-300'
    toastEl.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="font-medium">${message}</span>
    `
    document.body.appendChild(toastEl)
    setTimeout(() => {
      toastEl.style.animation = 'slide-out-to-top-2 300ms ease-in-out'
      setTimeout(() => document.body.removeChild(toastEl), 300)
    }, 4000)
  }
}

interface WorksRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  { name: 'Graphic Designing', icon: Palette },
  { name: 'Logo Designing', icon: Pen },
  { name: 'Website Designing', icon: Globe },
  { name: 'Branding', icon: Layers },
  { name: 'Digital Marketing', icon: TrendingUp },
  { name: 'App Development', icon: Smartphone },
  { name: '2D/3D Designing', icon: Box },
  { name: 'Photography', icon: Camera },
  { name: 'Videography', icon: Video },
  { name: 'Other', icon: Briefcase }
]

const serviceWhatsAppMessages = {
  'Graphic Designing': 'Hi! I\'m interested in your graphic design services. Can you share some samples and pricing?',
  'Logo Designing': 'Hello! I need a logo design for my business. Can you show me your portfolio and discuss pricing?',
  'Website Designing': 'Hi! I\'m looking for website design services. Can you share examples of your work and packages?',
  'Branding': 'Hello! I need complete branding services for my business. Can you share your branding portfolio?',
  'Digital Marketing': 'Hi! I\'m interested in digital marketing services. Can you share your strategies and case studies?',
  'App Development': 'Hello! I need mobile app development. Can you share your app portfolio and development process?',
  '2D/3D Designing': 'Hi! I\'m looking for 2D/3D design services. Can you share samples of your design work?',
  'Photography': 'Hello! I need photography services. Can you share your photography portfolio and packages?',
  'Videography': 'Hi! I\'m interested in videography services. Can you show me your video portfolio and pricing?',
  'Other': 'Hello! I\'m interested in your creative services. Can you share your portfolio and discuss my requirements?'
}

const defaultProjectSummaries = {
  'Graphic Designing': 'I need graphic design services for my business including:\n• Social media graphics and posts\n• Marketing materials (brochures, flyers)\n• Digital advertisements\n\nProject Timeline: 2-3 weeks\nBudget: [Please specify your budget]\n\nPlease share relevant samples and pricing details.',
  'Logo Designing': 'I need a professional logo design for my business:\n• Modern and memorable design\n• Multiple format deliverables (PNG, SVG, AI)\n• Brand color palette suggestions\n\nProject Timeline: 1-2 weeks\nBudget: [Please specify your budget]\n\nPlease share your logo portfolio and packages.',
  'Website Designing': 'I need a professional website for my business:\n• Responsive design for all devices\n• Modern UI/UX with clean layout\n• SEO-friendly structure\n\nProject Timeline: 3-6 weeks\nBudget: [Please specify your budget]\n\nPlease share website examples and development process.',
  'Branding': 'I need complete branding services including:\n• Logo design and brand identity\n• Color palette and typography\n• Brand guidelines and applications\n\nProject Timeline: 4-6 weeks\nBudget: [Please specify your budget]\n\nPlease share branding case studies and packages.',
  'Digital Marketing': 'I need digital marketing services for:\n• Social media management and strategy\n• Content creation and campaigns\n• Performance tracking and optimization\n\nProject Timeline: Ongoing monthly\nBudget: [Please specify monthly budget]\n\nPlease share case studies and marketing strategies.',
  'App Development': 'I need mobile app development for:\n• iOS and Android platforms\n• User-friendly interface design\n• Backend integration and features\n\nProject Timeline: 8-16 weeks\nBudget: [Please specify your budget]\n\nPlease share app portfolio and development approach.',
  '2D/3D Designing': 'I need 2D/3D design services for:\n• Product visualization and rendering\n• Architectural or interior designs\n• Animation and motion graphics\n\nProject Timeline: 2-4 weeks\nBudget: [Please specify your budget]\n\nPlease share design portfolio and capabilities.',
  'Photography': 'I need professional photography for:\n• Product photography for e-commerce\n• Corporate headshots and events\n• Marketing and promotional content\n\nProject Timeline: 1-2 weeks\nBudget: [Please specify your budget]\n\nPlease share photography portfolio and packages.',
  'Videography': 'I need videography services for:\n• Corporate videos and testimonials\n• Product demonstrations\n• Marketing and promotional videos\n\nProject Timeline: 2-4 weeks\nBudget: [Please specify your budget]\n\nPlease share video portfolio and production process.',
  'Other': 'I need creative services for my project:\n• Please specify your requirements\n• Custom solutions and consultation\n• Professional creative work\n\nProject Timeline: To be discussed\nBudget: [Please specify your budget]\n\nPlease share relevant portfolio and discuss my needs.'
}

export function WorksRequestModal({ isOpen, onClose }: WorksRequestModalProps) {
  const [mounted, setMounted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    projectSummary: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showValidation, setShowValidation] = useState(false)
  const [showHelpMessage, setShowHelpMessage] = useState(false)
  const [templateApplied, setTemplateApplied] = useState(false)
  const [customService, setCustomService] = useState('')
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [validationMessage, setValidationMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const steps = [
    { number: 1, title: 'Select Service', icon: Eye },
    { number: 2, title: 'Your Details', icon: User },
    { number: 3, title: 'Get Samples', icon: Send }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (serviceName: string) => {
    // Handle "Other" service specially
    if (serviceName === 'Other') {
      const hasCustomService = formData.services.some(s => s.startsWith('Other: '))
      
      if (hasCustomService || showCustomInput) {
        // Remove existing custom service and hide input (whether custom service exists or input is showing)
        setFormData(prev => ({
          ...prev,
          services: prev.services.filter(s => !s.startsWith('Other: '))
        }))
        setShowCustomInput(false)
        setCustomService('')
      } else {
        // Show custom input for Other only when neither custom service exists nor input is showing
        setShowCustomInput(true)
      }
      return
    }

    setFormData(prev => {
      const isSelected = prev.services.includes(serviceName)
      const newServices = isSelected 
        ? prev.services.filter(s => s !== serviceName)
        : [...prev.services, serviceName]
      
      // Clear validation when services are selected
      if (newServices.length > 0) {
        setShowValidation(false)
        setValidationMessage('')
      }
      
      // Update template if it was previously applied and services changed
      if (templateApplied && newServices.length > 0) {
        const combinedTemplate = generateCombinedTemplate(newServices)
        return { ...prev, services: newServices, projectSummary: combinedTemplate }
      }
      
      return { ...prev, services: newServices }
    })
  }

  const handleCustomServiceAdd = () => {
    if (customService.trim()) {
      const customServiceName = `Other: ${customService.trim()}`
      setFormData(prev => ({
        ...prev,
        services: [...prev.services.filter(s => s !== 'Other' && !s.startsWith('Other: ')), customServiceName]
      }))
      setShowCustomInput(false)
      setCustomService('')
      setShowValidation(false)
      setValidationMessage('')
    }
  }

  const generateCombinedTemplate = (selectedServices: string[]) => {
    if (selectedServices.length === 1) {
      return defaultProjectSummaries[selectedServices[0] as keyof typeof defaultProjectSummaries] || ''
    }
    
    // For multiple services, create a combined template
    const serviceList = selectedServices.map(service => `• ${service}`).join('\n')
    return `I need multiple services for my business:\n${serviceList}\n\nProject Timeline: To be discussed based on services\nBudget: [Please specify your budget]\n\nPlease share relevant samples and pricing for the selected services.`
  }

  const handleHelpMeWrite = () => {
    if (formData.services.length === 0) {
      toast.error('Please select at least one service first')
      return
    }

    const template = generateCombinedTemplate(formData.services)
    setFormData(prev => ({ ...prev, projectSummary: template }))
    setShowHelpMessage(true)
    setTemplateApplied(true)
    
    // Hide the message after 5 seconds
    setTimeout(() => {
      setShowHelpMessage(false)
    }, 5000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone || formData.services.length === 0) {
      setValidationMessage('Please fill in all required fields')
      setTimeout(() => setValidationMessage(''), 5000)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/work-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSuccessMessage('🎉 Request sent! We\'ll email you samples within 24 hours.')
        setTimeout(() => {
          setSuccessMessage('💬 Check your WhatsApp for instant samples!')
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              services: [],
              projectSummary: ''
            })
            onClose()
          }, 3000)
        }, 2000)
      } else {
        setValidationMessage('❌ Oops! Something went wrong. Please try again.')
        setTimeout(() => setValidationMessage(''), 5000)
      }
    } catch (error) {
      console.error('Error submitting request:', error)
      setValidationMessage('Something went wrong. Please try again.')
      setTimeout(() => setValidationMessage(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppConnect = () => {
    if (formData.services.length === 0) {
      setValidationMessage('Please select at least one service first')
      setTimeout(() => setValidationMessage(''), 5000)
      return
    }

    setSuccessMessage('📱 Opening WhatsApp with your service request...')
    
    // Use first service for WhatsApp message, or create combined message
    const primaryService = formData.services[0]
    let message = serviceWhatsAppMessages[primaryService as keyof typeof serviceWhatsAppMessages]
    
    if (formData.services.length > 1) {
      message = `Hi! I'm interested in multiple services: ${formData.services.join(', ')}. Can you share relevant samples and pricing for these services?`
    }
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/+917021234567?text=${encodedMessage}` // Replace with actual agency WhatsApp number
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setSuccessMessage('💚 WhatsApp opened! We\'re ready to chat and share samples.')
      setTimeout(() => setSuccessMessage(''), 3000)
    }, 500)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      services: [],
      projectSummary: ''
    })
    setCurrentStep(1)
    setShowValidation(false)
    setShowHelpMessage(false)
    setTemplateApplied(false)
    setCustomService('')
    setShowCustomInput(false)
    setValidationMessage('')
    setSuccessMessage('')
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const nextStep = () => {
    if (currentStep === 1 && formData.services.length === 0) {
      // Show validation inside popup
      setShowValidation(true)
      const serviceGrid = document.querySelector('.service-grid')
      if (serviceGrid) {
        serviceGrid.classList.add('animate-pulse')
        setTimeout(() => serviceGrid.classList.remove('animate-pulse'), 1000)
      }
      return
    }
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!mounted) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="relative w-full max-w-lg min-h-[500px] max-h-[90vh] bg-card border shadow-2xl rounded-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
            
            {/* Header */}
            <div className="border-b border-border/50">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="h-8 w-8 p-0 hover:bg-muted rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Internal Messages */}
                {validationMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 p-2 bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    {validationMessage}
                  </motion.div>
                )}
                
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 p-2 bg-green-50 border border-green-200 text-green-600 text-xs flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {successMessage}
                  </motion.div>
                )}

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Step {currentStep} of {steps.length}</span>
                    <span>{Math.round((currentStep / steps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-muted h-1">
                    <div 
                      className="bg-primary h-1 transition-all duration-300"
                      style={{ width: `${(currentStep / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
                
                {/* Step Indicator */}
                <div className="flex items-center justify-between text-xs">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`flex items-center justify-center w-5 h-5 border text-xs font-medium ${
                        currentStep >= step.number 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'bg-muted text-muted-foreground border-border'
                      }`}>
                        {step.number}
                      </div>
                      <span className={`ml-1 ${
                        currentStep === step.number 
                          ? 'text-primary font-semibold' 
                          : currentStep > step.number 
                            ? 'text-foreground' 
                            : 'text-muted-foreground'
                      }`}>
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <ChevronRight className="w-3 h-3 mx-1 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-[300px]">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-4">
                    <Eye className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="text-lg font-medium text-foreground">What samples do you want to see?</h3>
                    <p className="text-xs text-muted-foreground">Select the service you're interested in</p>
                    
                    {/* Validation Message */}
                    {showValidation && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 p-2 bg-red-50 border border-red-200 text-red-600 text-xs flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Please select a service to continue
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 service-grid">
                    {services.map((service) => {
                      const Icon = service.icon
                      const isSelected = service.name === 'Other' 
                        ? (formData.services.some(s => s.startsWith('Other: ')) || showCustomInput)
                        : formData.services.includes(service.name)
                      return (
                        <button
                          key={service.name}
                          type="button"
                          onClick={() => handleServiceToggle(service.name)}
                          className={`p-3 text-xs border transition-all duration-200 text-left flex items-center gap-2 ${
                            isSelected
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 hover:bg-muted'
                          }`}
                        >
                          <div className="flex-shrink-0">
                            <Icon 
                              className={`w-4 h-4 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}
                              strokeWidth={1.5}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs leading-tight">{service.name}</span>
                          </div>
                          {isSelected && (
                            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary flex items-center justify-center">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                                <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z"/>
                              </svg>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                  
                  {/* Custom Service Input for Other */}
                  {showCustomInput && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 p-3 border border-primary/20 bg-primary/5"
                    >
                      <Label className="text-xs text-muted-foreground mb-2 block">
                        What specific service do you need?
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          value={customService}
                          onChange={(e) => setCustomService(e.target.value)}
                          placeholder="e.g., Logo Animation, Package Design, etc."
                          className="text-xs rounded-none border-border"
                          onKeyPress={(e) => e.key === 'Enter' && handleCustomServiceAdd()}
                        />
                        <Button
                          type="button"
                          size="sm"
                          onClick={handleCustomServiceAdd}
                          disabled={!customService.trim()}
                          className="text-xs rounded-none"
                        >
                          Add
                        </Button>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Selected Services Summary */}
                  {formData.services.length > 0 && (
                    <div className="mt-3 p-2 bg-primary/5 border border-primary/20 text-xs">
                      <div className="font-medium text-primary mb-1">Selected Services ({formData.services.length}):</div>
                      <div className="text-muted-foreground">
                        {formData.services.join(', ')}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 2: Contact Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-4">
                    <User className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-foreground">Your Contact Details</h3>
                    <p className="text-xs text-muted-foreground">We'll use this information to send you work samples</p>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name (for personalized samples)"
                        className="border-border focus:border-primary/50 pl-8 rounded-none"
                      />
                      <User className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>

                    <div className="relative">
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Email (we'll send samples here)"
                        className="border-border focus:border-primary/50 pl-8 rounded-none"
                      />
                      <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>

                    <div className="relative">
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="WhatsApp number (for instant samples)"
                        className="border-border focus:border-primary/50 pl-8 rounded-none"
                      />
                      <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-xs text-muted-foreground">Project Summary (Optional)</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleHelpMeWrite}
                          className="text-xs h-6 px-2 rounded-none"
                          disabled={formData.services.length === 0}
                        >
                          ✨ Help me write
                        </Button>
                      </div>
                      
                      {/* Help Message */}
                      {showHelpMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-2 p-2 bg-green-50 border border-green-200 text-green-700 text-xs flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Template added! Please review and edit according to your needs.
                        </motion.div>
                      )}
                      
                      <Textarea
                        value={formData.projectSummary}
                        onChange={(e) => handleInputChange('projectSummary', e.target.value)}
                        placeholder="Describe your project requirements, timeline, and budget..."
                        rows={4}
                        className="border-border focus:border-primary/50 rounded-none text-xs"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Get Samples */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-4">
                    <Send className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-foreground">Get Your Samples</h3>
                    <p className="text-xs text-muted-foreground">Choose how you'd like to receive samples</p>
                  </div>

                  <div className="space-y-3">
                    <div className="border bg-muted/30 p-3">
                      <div className="text-xs">
                        <p className="font-medium text-foreground">Selected Services:</p>
                        <p className="text-primary">{formData.services.join(', ')}</p>
                      </div>
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full h-10 rounded-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Email Me Samples
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleWhatsAppConnect}
                      className="w-full h-10 rounded-none border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Samples
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation */}
            <div className="border-t border-border">
              <div className="flex justify-between p-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="text-xs rounded-none"
                >
                  Previous
                </Button>
                
                <div className="text-xs text-muted-foreground self-center">
                  {steps[currentStep - 1]?.title}
                </div>
                
                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="text-xs rounded-none"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleClose}
                    className="text-xs rounded-none"
                  >
                    Close
                  </Button>
                )}
              </div>
            </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
