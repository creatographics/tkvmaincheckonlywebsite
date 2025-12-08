import { z } from 'zod'

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

// Project schemas
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required'),
  technologies: z.array(z.string()).min(1, 'At least one technology is required'),
  status: z.enum(['DRAFT', 'PUBLISHED']).default('DRAFT')
})

export const projectImageSchema = z.object({
  url: z.string().url('Invalid image URL'),
  alt: z.string().optional(),
  order: z.number().int().min(0).default(0)
})

// Blog schemas
export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  thumbnail: z.string().url().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  status: z.enum(['DRAFT', 'PUBLISHED']).default('DRAFT'),
  publishedAt: z.string().datetime().optional()
})

// SEO schemas
export const seoSettingsSchema = z.object({
  pageType: z.string().min(1, 'Page type is required'),
  pageId: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().url().optional(),
  twitterCard: z.string().optional()
})

// Form submission schemas
export const formSubmissionUpdateSchema = z.object({
  status: z.enum(['PENDING', 'RESOLVED'])
})

export const workRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  services: z.array(z.string()).min(1, 'Select at least one service').max(10, 'Too many services'),
  projectSummary: z.string().max(1000, 'Summary too long').optional()
})

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number').optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
  honeypot: z.string().max(0, 'Invalid submission').optional() // Anti-spam
})

export const quotationFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  company: z.string().max(100, 'Company name too long').optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().max(2000, 'Message too long').optional(),
  honeypot: z.string().max(0, 'Invalid submission').optional() // Anti-spam
})

// Query schemas
export const paginationSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
  category: z.string().optional()
})

export const formSubmissionQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  type: z.enum(['CONTACT', 'QUOTATION']).optional(),
  status: z.enum(['PENDING', 'RESOLVED']).optional(),
  search: z.string().optional()
})

// Types
export type LoginInput = z.infer<typeof loginSchema>
export type ProjectInput = z.infer<typeof projectSchema>
export type ProjectImageInput = z.infer<typeof projectImageSchema>
export type BlogPostInput = z.infer<typeof blogPostSchema>
export type SeoSettingsInput = z.infer<typeof seoSettingsSchema>
export type FormSubmissionUpdateInput = z.infer<typeof formSubmissionUpdateSchema>
export type WorkRequestInput = z.infer<typeof workRequestSchema>
export type ContactFormInput = z.infer<typeof contactFormSchema>
export type QuotationFormInput = z.infer<typeof quotationFormSchema>
export type PaginationQuery = z.infer<typeof paginationSchema>
export type FormSubmissionQuery = z.infer<typeof formSubmissionQuerySchema>
