# TKV Creato - Next.js Website

A modern Next.js website built with shadcn/ui components and Tailwind CSS.

## Pages

### Homepage (`/`)
- **Hero Section** - Eye-catching hero with animated text effects
- **Features Sections** - Multiple feature showcase sections
- **Integrations** - Display of integrated services and tools
- **FAQ Section** - Interactive accordion-based FAQ
- **Testimonials** - Customer testimonials in a beautiful grid layout
- **Footer** - Comprehensive footer with newsletter signup

### About Page (`/about`)
- **Secondary Hero** - Engaging hero section with stats
- **Content Section** - Company overview with key features
- **Team Section** - Meet the team with leadership, engineering, and marketing divisions
- **Footer** - Comprehensive footer with newsletter signup

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide Icons

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

## Components Used

### Homepage
- `@tailark/hero-section-3` - Hero section with header
- `@tailark/features-10` - Feature cards with images
- `@tailark/features-9` - Feature section with map and charts
- `@tailark/integrations-1` - Integration cards
- `@tailark/features-12` - FAQ accordion section
- `@tailark/testimonials-1` - Testimonial cards
- `@tailark/footer-3` - Footer with newsletter

### About Page
- `@tailark/content-5` - Content section with features
- `@tailark/team-1` - Team showcase section
- Custom Secondary Hero - Hero section with statistics

## Build

To create a production build:
```bash
pnpm build
```

To start the production server:
```bash
pnpm start
```
