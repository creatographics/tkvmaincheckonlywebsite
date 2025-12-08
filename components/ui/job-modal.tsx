'use client'

import { useState } from 'react'
import { X, ArrowLeft, CheckCircle } from '@/components/ui/icons'
import { ShimmerButton } from '@/components/ui/shimmer-button'

interface JobModalProps {
  isOpen: boolean
  onClose: () => void
  job: {
    title: string
    location: string
    category: string
    description: string
    requirements: string[]
    responsibilities: string[]
  }
}

export function JobModal({ isOpen, onClose, job }: JobModalProps) {
  const [currentStep, setCurrentStep] = useState<'details' | 'form' | 'success'>('details')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Application submitted:', formData)
    setCurrentStep('success')
  }

  const handleApplyClick = () => {
    setCurrentStep('form')
  }

  const handleBackClick = () => {
    if (currentStep === 'form') {
      setCurrentStep('details')
    } else if (currentStep === 'success') {
      setCurrentStep('form')
    }
  }

  const resetModal = () => {
    setCurrentStep('details')
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    })
    onClose()
  }

  const getProgressPercentage = () => {
    switch (currentStep) {
      case 'details': return 33
      case 'form': return 66
      case 'success': return 100
      default: return 33
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-background border rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-background border-b z-20 flex-shrink-0">
          <div className="px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {currentStep !== 'details' && (
                <ShimmerButton
                  onClick={handleBackClick}
                  className="h-8 w-8 px-0"
                  background="hsl(var(--secondary))"
                  shimmerColor="#ffffff"
                  textColor="hsl(var(--secondary-foreground))"
                >
                  <ArrowLeft className="h-4 w-4" />
                </ShimmerButton>
              )}
              <div>
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-sm text-muted-foreground">{job.location} • {job.category}</p>
              </div>
            </div>
            <ShimmerButton
              onClick={resetModal}
              className="h-8 w-8 px-0"
              background="hsl(var(--secondary))"
              shimmerColor="#ffffff"
              textColor="hsl(var(--secondary-foreground))"
            >
              <X className="h-4 w-4" />
            </ShimmerButton>
          </div>
          
          {/* Progress Bar */}
          <div className="px-8 pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">Application Progress</span>
              <span className="text-xs font-bold">{getProgressPercentage()}%</span>
            </div>
            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-700 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>

        {currentStep === 'details' && (
          <>
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <div className="space-y-6">
                {/* Job Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">About This Role</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                </div>

                {/* Requirements */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Static Apply Button */}
            <div className="flex-shrink-0 px-8 py-6 border-t bg-background">
              <ShimmerButton onClick={handleApplyClick} className="h-12 px-6 w-full">
                Apply for This Position
              </ShimmerButton>
            </div>
          </>
        )}

        {currentStep !== 'details' && (
          <div className="flex-1 overflow-y-auto px-8 py-6">

          {currentStep === 'form' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Apply for This Position</h3>
                <p className="text-sm text-muted-foreground mt-1">Fill out the form below to submit your application</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-foreground">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-foreground">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-medium text-foreground">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="resume" className="text-xs font-medium text-foreground">Resume/CV *</label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="coverLetter" className="text-xs font-medium text-foreground">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    rows={3}
                    className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none bg-background"
                    placeholder="Tell us why you're interested in this position..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  />
                </div>

              <div className="flex gap-4 pt-4">
                <ShimmerButton type="submit" className="flex-1 h-12">
                  Submit Application
                </ShimmerButton>
                <ShimmerButton type="button" onClick={handleBackClick} className="h-12 px-6" background="hsl(var(--secondary))" shimmerColor="#ffffff" textColor="hsl(var(--secondary-foreground))">
                  Back
                </ShimmerButton>
              </div>
              </form>
            </div>
          )}

          {currentStep === 'success' && (
            <div className="space-y-8 py-8">
              <div className="w-24 h-24 bg-green-50 rounded-2xl flex items-center justify-center border-2 border-green-200">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-green-600">Application Sent Successfully!</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Thank you for your interest in the <span className="font-semibold text-foreground">{job.title}</span> position. We've received your application and will review it carefully.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl border-2">
                  <h4 className="font-bold text-lg mb-4 text-foreground">What's Next?</h4>
                  <div className="grid gap-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Our HR team will review your application within 2-3 business days</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">If selected, we'll contact you for an initial interview</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Check your email regularly for updates and next steps</span>
                    </div>
                  </div>
                </div>

                <ShimmerButton onClick={resetModal} className="h-12 px-12 text-lg">
                  Close Application
                </ShimmerButton>
              </div>
            </div>
          )}
          </div>
        )}
      </div>
    </div>
  )
}
