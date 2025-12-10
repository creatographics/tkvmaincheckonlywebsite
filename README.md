# TKV Creato - Next.js Website

A modern Next.js website built with shadcn/ui components and Tailwind CSS.

## Pages

### Homepage (`/`)
- **Hero Section** - Eye-catching hero with animated text effects
- **Features Sections** - Multiple feature showcase sections
- **Industries Section** - Industries we serve
- **FAQ Section** - Interactive accordion-based FAQ
- **Testimonials** - Customer testimonials in a beautiful grid layout
- **Footer** - Comprehensive footer

### About Page (`/about`)
- **Secondary Hero** - Engaging hero section with stats
- **Content Section** - Company overview with key features
- **Team Section** - Meet the team with leadership, engineering, and marketing divisions
- **Footer** - Comprehensive footer

### Contact Page (`/contact`)
- **Contact Form** - Sends emails directly to contact@tkvcreatographics.com
- **Contact Information** - Phone, email, and office locations

### Quotation Page (`/quotation`)
- **Quotation Form** - Sends quote requests directly to contact@tkvcreatographics.com
- **Process Section** - How we work
- **FAQ Section** - Common questions

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide Icons
- Email notifications (SMTP)

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Configuration

Forms send emails directly to **contact@tkvcreatographics.com**. To enable email functionality, configure SMTP settings in your `.env.local` file:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Features

- **No Database Required** - All form submissions are sent via email
- **Rate Limiting** - Built-in rate limiting for form submissions
- **Form Validation** - Zod schema validation for all forms
- **Responsive Design** - Mobile-first responsive design
- **Dark Mode** - Full dark mode support
- **SEO Optimized** - Meta tags, sitemaps, and structured data

## Build

To create a production build:
```bash
pnpm build
```

To start the production server:
```bash
pnpm start
```
