'use client';

import { useState, useEffect, useRef } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ChevronDown, ChevronUp } from "@/components/ui/icons";
import { ImprovedFAQ } from "@/components/ui/improved-faq";
import { HeroHeader } from '@/components/header';
import ModernFooter from '@/components/modern-footer';
import { CornerBorders } from '@/components/ui/corner-borders';
import {
  Palette,
  Code,
  Camera,
  TrendingUp,
  Smartphone,
  Box,
  Video,
  Briefcase,
  ArrowRight,
  Layout,
  Layers,
  Mail,
  Sparkles,
  Tag,
  FileText,
  BookOpen,
  Share2,
  ShoppingCart,
  Globe,
  Wrench,
  Server,
  Shield,
  MousePointer,
  Search,
  MessageSquare,
  Users,
  BarChart,
  Target,
  Megaphone,
  Star,
  Monitor,
  Tablet,
  CheckCircle,
  Zap,
  Package,
  Cpu,
  Eye,
  Film,
  Image as ImageIcon,
  Home,
  Shirt,
  Coffee,
  Building,
  Scissors,
  Palette as PaletteIcon,
  Play,
  Music,
  Plane,
  UserCheck,
  Award,
  BookMarked,
  Newspaper,
  PenTool,
  BadgeCheck,
  Briefcase as BriefcaseIcon,
  Sparkles as SparklesIcon,
  Calendar,
  Gamepad2,
  Leaf,
  Heart
} from "@/components/ui/icons";
import Link from "next/link";
import { HomeLogoCloud } from '@/components/home-logo-cloud';

const servicesData = [
  {
    id: "graphic-design-services",
    category: "Graphic Design Services",
    icon: Palette,
    title: "Graphic Design Services",
    description: "Professional graphic design services for logos, branding, social media, and print materials. Our expert designers create stunning visuals that elevate your brand identity and engage your target audience across all platforms.",
    highlight: "800+ Successful Design Deliveries",
    navTagline: "Brand Visuals",
    ctaTitle: "Request Graphic Design Samples",
    ctaDescription: "Schedule a design strategy session tailored to your campaign or rebrand.",
    services: [
      { name: "Website sketching and wireframing", icon: Layout, description: "Create detailed wireframes and sketches to plan your website's structure and user flow effectively." },
      { name: "UX/UI design (frontend)", icon: Layers, description: "Design intuitive and engaging user interfaces that provide seamless experiences across all devices." },
      { name: "Custom Email Templates", icon: Mail, description: "Professional email templates that are responsive, branded, and optimized for maximum engagement." },
      { name: "Graphics, Icons, Characters", icon: Sparkles, description: "Custom graphics, icons, and character designs that bring your brand's personality to life." },
      { name: "Logo Designing", icon: Tag, description: "Memorable logo designs that capture your brand essence and make a lasting impression." },
      { name: "Brand Identity Design", icon: Award, description: "Complete brand identity systems including colors, typography, and visual guidelines for consistency." },
      { name: "Book Layouts", icon: BookOpen, description: "Professional book layout and typesetting services for print and digital publications." },
      { name: "Social Media Graphics", icon: Share2, description: "Eye-catching social media graphics optimized for each platform to boost engagement." },
      { name: "Label Design", icon: Tag, description: "Product label designs that stand out on shelves and communicate your brand values." },
      { name: "Brochures & Flyers", icon: FileText, description: "Compelling brochure and flyer designs that effectively communicate your message and drive action." }
    ]
  },
  {
    id: "website-design-development",
    category: "Website Design & Development",
    icon: Code,
    title: "Website Design & Development",
    description: "Custom website design and development services including e-commerce, WordPress, and responsive web solutions. We build fast, secure, SEO-optimized websites that convert visitors into customers and grow your business online.",
    highlight: "120+ High-Converting Websites Launched",
    navTagline: "Web Experience",
    ctaTitle: "Request Website Design Samples",
    ctaDescription: "Request a UX walkthrough and see how we optimize journeys for conversions.",
    services: [
      { name: "eCommerce solutions", icon: ShoppingCart, description: "Full-featured online stores with secure payment gateways, inventory management, and seamless checkout." },
      { name: "WordPress Website", icon: Globe, description: "Custom WordPress websites with powerful CMS capabilities and easy content management." },
      { name: "Shopify, Squarespace, Wix", icon: Monitor, description: "Professional websites built on popular platforms with custom themes and integrations." },
      { name: "Design (PSD, Sketch, Figma) - HTML", icon: Code, description: "Convert your design files into pixel-perfect, responsive HTML/CSS code with clean markup." },
      { name: "Complete Website Revamp", icon: Wrench, description: "Transform your outdated website with modern design, improved UX, and enhanced performance." },
      { name: "Website Optimization", icon: Zap, description: "Speed optimization, SEO improvements, and performance enhancements for better user experience." },
      { name: "Website Maintenance & Support", icon: Wrench, description: "Ongoing maintenance, updates, bug fixes, and technical support to keep your site running smoothly." },
      { name: "Web Hosting and Data Backups", icon: Server, description: "Reliable hosting solutions with automated backups, security monitoring, and 99.9% uptime." },
      { name: "Domain & SSL", icon: Shield, description: "Domain registration, DNS management, and SSL certificates for secure, trusted websites." },
      { name: "Landing Page", icon: MousePointer, description: "High-converting landing pages designed to capture leads and drive specific marketing goals." }
    ]
  },
  {
    id: "digital-marketing-services",
    category: "Digital Marketing Services",
    icon: TrendingUp,
    title: "Digital Marketing Services",
    description: "Complete digital marketing services including SEO, social media marketing, PPC advertising, and content marketing. Our data-driven strategies help businesses increase online visibility, generate qualified leads, and maximize ROI across all digital channels.",
    highlight: "3.5x Average Campaign ROI",
    navTagline: "Growth Engine",
    ctaTitle: "Get Digital Marketing Consultation",
    ctaDescription: "Get a marketing growth plan with channel mix and projected ROI.",
    services: [
      { name: "Search Engine Optimization Services", icon: Search, description: "Improve your search rankings with on-page optimization, technical SEO, and strategic link building." },
      { name: "Search Engine Marketing Services", icon: Target, description: "Targeted paid search campaigns that drive qualified traffic and maximize your advertising ROI." },
      { name: "Social Media Marketing Services", icon: Share2, description: "Build your brand presence with strategic social media campaigns across all major platforms." },
      { name: "Email Marketing Services", icon: Mail, description: "Engaging email campaigns with automation, segmentation, and A/B testing for optimal results." },
      { name: "Influencer marketing", icon: Users, description: "Connect with relevant influencers to amplify your brand message and reach new audiences." },
      { name: "Content writing", icon: FileText, description: "SEO-optimized content that engages readers, builds authority, and drives organic traffic." },
      { name: "Pay-Per-Click (PPC) Advertising", icon: Megaphone, description: "Strategic PPC campaigns on Google, Facebook, and other platforms for immediate results." },
      { name: "Video Marketing", icon: Video, description: "Engaging video content and distribution strategies that boost engagement and conversions." },
      { name: "Online Reputation Management", icon: Star, description: "Monitor and manage your online reputation with review management and brand protection." },
      { name: "Analytics & Conversion Tracking", icon: BarChart, description: "Comprehensive analytics setup and reporting to track performance and optimize campaigns." }
    ]
  },
  {
    id: "app-development",
    category: "App Development",
    icon: Smartphone,
    title: "App Development",
    description: "Professional mobile app development for iOS, Android, and cross-platform solutions. We create custom apps with intuitive UI/UX design, robust functionality, and seamless performance that engage users and drive business growth.",
    highlight: "150+ Apps Live on App Stores",
    navTagline: "Launch Apps",
    ctaTitle: "Discuss Your App Project",
    ctaDescription: "Share your product vision and we'll map the sprints to ship it fast.",
    services: [
      { name: "iOS App Development", icon: Smartphone, description: "Native iOS apps built with Swift for optimal performance and seamless Apple ecosystem integration." },
      { name: "Android App Development", icon: Tablet, description: "Native Android apps using Kotlin that leverage the full power of the Android platform." },
      { name: "Cross-platform Solutions", icon: Monitor, description: "Build once, deploy everywhere with React Native or Flutter for cost-effective app development." },
      { name: "UI/UX Design services", icon: Layers, description: "User-centered mobile app designs that prioritize usability and create delightful experiences." },
      { name: "App Development", icon: Code, description: "Full-cycle mobile app development from concept to launch with scalable architecture." },
      { name: "Automated QA and testing", icon: CheckCircle, description: "Comprehensive testing including unit, integration, and UI tests to ensure app quality." },
      { name: "Progressive Web Apps", icon: Globe, description: "Web apps that work like native apps with offline capabilities and push notifications." },
      { name: "Deployment and Maintenance", icon: Wrench, description: "App store submission, ongoing updates, bug fixes, and performance monitoring." },
      { name: "Custom API Integration", icon: Cpu, description: "Seamless integration with third-party services, payment gateways, and backend systems." },
      { name: "App Store Optimization", icon: TrendingUp, description: "Optimize your app listing with keywords, screenshots, and descriptions for better visibility." }
    ]
  },
  {
    id: "2d-3d-design",
    category: "2D & 3D Design",
    icon: Box,
    title: "2D & 3D Design",
    description: "Professional 2D and 3D design services including animation, character design, product visualization, and architectural rendering. We create photorealistic 3D models, immersive environments, and engaging animations for games, marketing, and visualization projects.",
    highlight: "500+ Immersive Visual Assets Created",
    navTagline: "Immersive Renders",
    ctaTitle: "Request 3D Design Samples",
    ctaDescription: "Send us your brief to receive moodboards, renders, and motion ideas.",
    services: [
      { name: "2D & 3D Animation", icon: Film, description: "Bring your ideas to life with stunning 2D and 3D animations for marketing and entertainment." },
      { name: "2D & 3D Character Design", icon: Users, description: "Create memorable characters with detailed designs for games, films, and brand mascots." },
      { name: "2D & 3D Environment Design", icon: Home, description: "Immersive environment designs for games, virtual tours, and architectural visualization." },
      { name: "3D Rendering", icon: Eye, description: "Photorealistic 3D renders that showcase products and spaces with stunning detail." },
      { name: "3D Motion Capture", icon: Video, description: "Capture realistic movements and expressions for characters in games and animations." },
      { name: "Product Visualization", icon: Package, description: "3D product renders that showcase features and details before physical production." },
      { name: "Architectural Walkthroughs", icon: Building, description: "Interactive 3D walkthroughs that bring architectural designs to life for clients." },
      { name: "3D Modeling for Games/AR/VR", icon: Box, description: "Optimized 3D models for gaming, augmented reality, and virtual reality experiences." },
      { name: "Visual Effects (VFX)", icon: Sparkles, description: "Professional VFX for videos, films, and commercials that enhance visual storytelling." },
      { name: "3D Printing Design", icon: Cpu, description: "Design and prepare 3D models optimized for various 3D printing technologies." }
    ]
  },
  {
    id: "photography-services",
    category: "Photography Services",
    icon: Camera,
    title: "Photography Services",
    description: "Professional photography services for products, events, portraits, real estate, and commercial projects. Our expert photographers deliver high-quality images that enhance your brand, showcase your products, and capture memorable moments with artistic precision.",
    highlight: "1,000+ Brand Shoots Captured",
    navTagline: "Signature Shoots",
    ctaTitle: "Book Photography Session",
    ctaDescription: "Tell us the story you need captured and we'll handle crew, gear, and mood.",
    services: [
      { name: "Portrait Photography", icon: Users, description: "Professional portrait photography for individuals, families, and corporate headshots." },
      { name: "Event Photography", icon: Camera, description: "Capture special moments at weddings, conferences, and corporate events with style." },
      { name: "Product Photography", icon: Package, description: "High-quality product photos that showcase details and drive e-commerce sales." },
      { name: "Real Estate Photography", icon: Home, description: "Professional property photography that highlights features and attracts potential buyers." },
      { name: "Fashion Photography", icon: Shirt, description: "Editorial and commercial fashion photography for brands, designers, and magazines." },
      { name: "Food Photography", icon: Coffee, description: "Mouth-watering food photography for restaurants, menus, and culinary brands." },
      { name: "Architectural Photography", icon: Building, description: "Stunning architectural photography that captures the beauty of buildings and spaces." },
      { name: "Photo Editing and Retouching", icon: Scissors, description: "Professional photo editing, color correction, and retouching for flawless results." },
      { name: "Commercial & Advertising", icon: Megaphone, description: "Commercial photography for advertising campaigns, catalogs, and marketing materials." },
      { name: "Travel & Lifestyle Photography", icon: Plane, description: "Capture authentic moments and destinations for travel brands and lifestyle publications." }
    ]
  },
  {
    id: "videography-services",
    category: "Videography Services",
    icon: Video,
    title: "Videography Services",
    description: "Professional videography services for corporate films, promotional videos, events, and social media content. We create engaging video content with expert cinematography, editing, and post-production that tells your story and drives results.",
    highlight: "300+ Story-Driven Films Produced",
    navTagline: "Cinematic Stories",
    ctaTitle: "Request Video Production Quote",
    ctaDescription: "Let's storyboard your next film, from script to post-production.",
    services: [
      { name: "Event Videography", icon: Video, description: "Professional event coverage that captures the energy and emotion of your special occasions." },
      { name: "Promotional Videos", icon: Megaphone, description: "Engaging promotional videos that showcase your brand and drive customer action." },
      { name: "Fashion Videos", icon: Shirt, description: "Dynamic fashion videos for runway shows, lookbooks, and brand campaigns." },
      { name: "Color Correction", icon: PaletteIcon, description: "Professional color grading and correction to achieve the perfect cinematic look." },
      { name: "Motion Graphics", icon: Film, description: "Animated graphics and text that add visual interest and explain complex concepts." },
      { name: "Visual Effects (VFX)", icon: Sparkles, description: "Cutting-edge visual effects that enhance storytelling and create impossible scenes." },
      { name: "Corporate Films", icon: Briefcase, description: "Professional corporate videos for internal communications, training, and brand messaging." },
      { name: "Music & Short Films", icon: Music, description: "Creative music videos and short films that tell compelling stories through cinema." },
      { name: "Drone Videography", icon: Plane, description: "Stunning aerial footage that provides unique perspectives for any project." },
      { name: "Editing & Post-Production", icon: Scissors, description: "Expert video editing, sound design, and post-production for polished final results." }
    ]
  },
  {
    id: "branding-identity",
    category: "Branding & Identity Design",
    icon: Briefcase,
    title: "Branding & Identity Design",
    description: "Complete branding and identity design services including logo design, brand strategy, visual guidelines, and brand collateral. We create cohesive brand identities that differentiate your business and resonate with your target audience across all touchpoints.",
    highlight: "500+ Brand Identities Created",
    navTagline: "Brand Strategy",
    ctaTitle: "Request Branding Samples",
    ctaDescription: "Get a comprehensive brand strategy consultation and visual identity proposal.",
    services: [
      { name: "Logo Design & Brand Marks", icon: Tag, description: "Custom logo design and brand marks that capture your brand essence and create lasting impressions." },
      { name: "Brand Strategy & Positioning", icon: Target, description: "Strategic brand positioning, messaging, and market differentiation to stand out from competitors." },
      { name: "Visual Identity Systems", icon: PaletteIcon, description: "Complete visual identity including color palettes, typography, and design guidelines for consistency." },
      { name: "Brand Guidelines & Standards", icon: BookMarked, description: "Comprehensive brand guidelines documenting logo usage, colors, fonts, and visual standards." },
      { name: "Business Card & Stationery Design", icon: FileText, description: "Professional business cards, letterheads, and stationery that reinforce your brand identity." },
      { name: "Brand Collateral Design", icon: Briefcase, description: "Marketing collateral including brochures, presentations, and sales materials with consistent branding." },
      { name: "Packaging & Label Design", icon: Package, description: "Eye-catching packaging and label designs that communicate brand values and attract customers." },
      { name: "Brand Refresh & Rebranding", icon: Sparkles, description: "Modernize and revitalize existing brands with strategic updates to stay relevant and competitive." },
      { name: "Brand Naming & Taglines", icon: PenTool, description: "Creative brand naming, tagline development, and messaging that resonates with your audience." },
      { name: "Brand Experience Design", icon: Award, description: "Holistic brand experiences across touchpoints including digital, print, and environmental design." }
    ]
  }
];

const heroHighlights = [
  {
    title: "Instant hardening",
    description: "Deploy enterprise-grade protection with advanced WAF, rate limiting, and bot defenses in a single engagement.",
    icon: Shield
  },
  {
    title: "Planet-scale defense",
    description: "Our autonomous response mitigates threats in under a minute, drawing from 70+ specialized service tracks.",
    icon: Globe
  },
  {
    title: "Single control plane",
    description: "One strategy team overseeing analytics, roadmaps, and CI/CD-ready creative workflows across every channel.",
    icon: Server
  }
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("graphic-design-services");
  const [navOpen, setNavOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const servicesSectionRef = useRef<HTMLElement>(null);

  // Track services section visibility for floating nav
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 150;
        setShowFloatingNav(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    servicesData.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setActiveSection(id);
    const yOffset = 120;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  // JSON-LD Schema for Services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TKVCREATO - Creative Design & Digital Services",
    "description": "Professional graphic design, branding, website development, digital marketing, and creative services in Chennai, Pondicherry, and across India.",
    "url": "https://tkvcreato.com/services",
    "areaServed": [
      {"@type": "City", "name": "Chennai"},
      {"@type": "City", "name": "Pondicherry"},
      {"@type": "Country", "name": "India"}
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": servicesData.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does TKVCREATO offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive creative and digital services including graphic design, branding, website design and development, digital marketing (SEO, social media, PPC), mobile app development, photography, videography, 2D/3D design, and brand identity solutions. Our services are tailored for businesses in Chennai, Pondicherry, and across India."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on scope and complexity. Logo design typically takes 5-7 days, website development 2-6 weeks, and comprehensive branding projects 4-8 weeks. We offer fast turnaround options for urgent projects while maintaining our quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with clients outside Chennai and Pondicherry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We're a remote-first team serving clients across India and internationally. We use modern collaboration tools to ensure seamless communication and project delivery regardless of location."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is project-based and depends on scope, complexity, and deliverables. We offer transparent quotes with no hidden costs. Contact us for a free consultation and customized proposal based on your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support after project completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer post-launch support, maintenance packages, and ongoing optimization services. For websites, we provide hosting, updates, and technical support. For branding projects, we assist with implementation and brand consistency."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with both design and development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we're a full-service creative agency. Our team handles everything from initial concept and design to development, deployment, and marketing. This integrated approach ensures consistency and quality across all project phases."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work across diverse industries including e-commerce, technology, healthcare, real estate, food & hospitality, fashion, education, finance, travel, and professional services. Our versatile team adapts to each industry's unique requirements and standards."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your needs, goals, and budget. After understanding your requirements, we'll provide a detailed proposal and timeline to get started."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      {/* JSON-LD Schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroHeader />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            
            {/* Hero Section */}
            <section className="relative mb-16 md:mb-20 px-6 lg:px-12 overflow-hidden bg-white dark:bg-transparent">
              <div className="max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>8+ Service Categories</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] md:leading-tight mb-6">
                  <span className="block text-foreground">
                    Creative Design &
                  </span>
                  <span className="block text-gradient-primary">
                    Digital Services
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Graphic design, branding, websites, and digital marketing — delivered with strategy and creativity for growing brands.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <ShimmerButton className="h-12 px-8 text-sm font-semibold w-full sm:w-auto">
                    <Link href="#services" className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Explore Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </ShimmerButton>
                  <ShimmerButton 
                    className="h-12 px-8 text-sm font-semibold w-full sm:w-auto" 
                    background="hsl(var(--secondary))" 
                    shimmerColor="#ffffff" 
                    textColor="hsl(var(--secondary-foreground))"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Free Consultation
                    </Link>
                  </ShimmerButton>
                </div>
                
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted/50 border border-border/50" data-component-name="ServicesPage">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left" data-component-name="ServicesPage">
                    <span className="hidden sm:inline">Serving Chennai, Pondicherry & clients across India</span>
                    <span className="sm:hidden">Chennai, Pondicherry & India</span>
                  </span>
                </div>
              </div>

              {/* Remove Stats Grid - Keep Right Side Empty */}
              <div className="hidden">
                  {[
                    { number: "150+", label: "Happy Clients", icon: Users },
                    { number: "500+", label: "Projects Done", icon: CheckCircle },
                    { number: "8+", label: "Services", icon: Sparkles },
                    { number: "5+", label: "Years Experience", icon: Star }
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="relative group p-6 rounded-2xl bg-gradient-to-br from-card to-muted/30 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <Icon className="w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                        <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                        <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    );
                  })}
              </div>
            </section>

            <div className="border-t border-border/50" />

            {/* Process Section */}
            <section className="py-16 md:py-20 px-6 lg:px-12 bg-white dark:bg-transparent">
              <div className="text-center mb-12 max-w-3xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Our Process</span>
                </div>
                
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  How We Deliver{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Creative Success
                  </span>
                </h2>
                
                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  A simple, proven process for branding, design, web, and digital growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    description: "We dive deep into your brand, goals, and target audience to understand your unique needs.",
                    icon: Search
                  },
                  {
                    step: "02",
                    title: "Plan",
                    description: "Our team crafts a tailored strategy that aligns with your objectives and market positioning.",
                    icon: Target
                  },
                  {
                    step: "03",
                    title: "Design",
                    description: "We bring ideas to life with stunning designs, powerful code, and compelling content.",
                    icon: Sparkles
                  },
                  {
                    step: "04",
                    title: "Deliver",
                    description: "We deploy your project and continuously optimize for maximum impact and growth.",
                    icon: TrendingUp
                  }
                ].map((process, index) => {
                  const ProcessIcon = process.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className="relative rounded-xl border-2 border-border/50 bg-card p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                        {/* Step Number & Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-4xl font-bold text-primary/20">
                            {process.step}
                          </span>
                          <ProcessIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {process.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                      
                      {/* Connector (except last item) */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent z-10"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="sr-only">
                Professional branding services, creative graphic design, custom website development, UI UX design, digital marketing solutions, SEO optimization, brand identity design, web development services, creative agency Chennai, graphic design studio Pondicherry, branding agency India, website design Chennai, digital marketing Pondicherry, creative services Tamil Nadu, design agency India
              </p>
            </section>

            {/* Services Section */}
            <section id="services-section" className="py-16 md:py-24 relative px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent" data-component-name="ServicesPage">
            
            {/* Floating Bottom Navigation Bar */}
            <div 
              className={`fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ease-out ${
                showFloatingNav 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="relative bg-[#0a0a0a]/95 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_-4px_32px_-4px_rgba(0,0,0,0.3),0_8px_32px_-8px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />
                
                <div className="relative">
                  {/* Menu Items */}
                  <div 
                    className="flex items-center justify-center gap-2 overflow-x-auto px-3 py-2"
                    id="services-menu-scroll"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {servicesData.map((section) => {
                      const Icon = section.icon;
                      const isActive = activeSection === section.id;
                      // Get short name for display
                      const shortName = section.category.split(' ')[0];
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          title={section.category}
                          aria-label={section.category}
                          className={`flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-out ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "text-zinc-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} strokeWidth={2} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <style>{`
              #services-menu-scroll::-webkit-scrollbar {
                display: none;
              }
            `}</style>

              {/* Service Content Area */}
              <div className="space-y-12">
              {servicesData.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} id={section.id} className="scroll-mt-32">
                    {/* Services Grid - Modern Container */}
                    <div className="rounded-xl border-2 border-border/50 bg-card overflow-hidden shadow-sm">
                        {/* Section Header */}
                        <div className="p-4 sm:p-6 bg-muted/30 border-b-2 border-border/50">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3" data-component-name="ServicesPage">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={1.5} />
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground" data-component-name="ServicesPage">{section.title}</h2>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">{section.description}</p>
                          {section.highlight && (
                            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-xs font-semibold border border-primary/20">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>{section.highlight}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                          {section.services.map((service, index) => {
                            const ServiceIcon = service.icon;
                            return (
                              <Link
                                key={index}
                                href="/contact"
                                className="group relative block p-5 border-r border-b border-border/50 last:border-b-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(5n)]:border-r-0 hover:bg-primary/5 transition-all duration-200"
                              >
                                {/* Icon */}
                                <div className="mb-3">
                                  <ServiceIcon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-semibold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
                                  {service.name}
                                </h3>

                                {/* Description */}
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {service.description}
                                </p>
                              </Link>
                            );
                          })}
                          
                        </div>
                        
                        {/* CTA Section - Outside Grid */}
                        <div className="p-4 sm:p-6 border-t border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
                          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6" data-component-name="ServicesPage">
                            <div className="flex-1 text-center md:text-left">
                              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                                {section.ctaTitle ?? "Ready to get started?"}
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed" data-component-name="ServicesPage">
                                {section.ctaDescription ?? "Let's bring your vision to life with a dedicated creative squad that understands your brand ambitions."}
                              </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
                              <ShimmerButton className="px-6 h-11">
                                <Link href="/contact" className="flex items-center justify-center gap-2">
                                  Get Started
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </ShimmerButton>
                              <ShimmerButton
                                className="px-6 h-11"
                                background="hsl(var(--secondary))"
                                shimmerColor="#ffffff"
                                textColor="hsl(var(--secondary-foreground))"
                              >
                                <Link href="/works" className="flex items-center justify-center gap-2">
                                  View Portfolio
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </ShimmerButton>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Hidden SEO Content */}
              <p className="sr-only">
                Professional creative services in Chennai, Pondicherry, and across India. Graphic design services, logo design, branding and identity design, brand strategy, visual identity, corporate branding. Website design and development, custom website design, e-commerce website development, WordPress development, responsive web design, UI UX design, web development services Chennai. Digital marketing services, SEO services, search engine optimization, social media marketing, PPC advertising, content marketing, email marketing, digital marketing agency Chennai Pondicherry. Mobile app development, iOS app development, Android app development, cross-platform app development, app design services. Professional photography services, product photography, event photography, commercial photography, portrait photography Chennai. Videography services, corporate video production, promotional videos, event videography, video editing services. 2D 3D design, 3D modeling, 3D rendering, animation services, architectural visualization, product visualization. Creative agency Chennai, design studio Pondicherry, branding agency India, web development company Tamil Nadu, digital marketing agency South India.
              </p>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-20 border-t border-border/50 px-6 lg:px-12 bg-white dark:bg-transparent">
              <div className="text-center mb-12 max-w-3xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Why Choose Us</span>
                </div>
                
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Your Trusted{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Creative Partner
                  </span>
                </h2>
                
                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Delivering exceptional creative and digital solutions with proven expertise and dedication
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Users,
                    metric: "150+",
                    label: "Happy Clients",
                    description: "Trusted by businesses across India and globally"
                  },
                  {
                    icon: Award,
                    metric: "10+",
                    label: "Years Experience",
                    description: "Decade of creative excellence and innovation"
                  },
                  {
                    icon: Star,
                    metric: "4.9",
                    label: "Client Rating",
                    description: "Consistently high satisfaction scores"
                  },
                  {
                    icon: Zap,
                    metric: "Fast",
                    label: "Turnaround",
                    description: "Quick delivery without compromising quality"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className="relative rounded-lg border bg-card p-6 text-center h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                        <CornerBorders />
                        
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                          <Icon className="w-7 h-7 text-foreground" strokeWidth={1} />
                        </div>
                        
                        <div className="text-3xl font-bold text-foreground mb-2">
                          {item.metric}
                        </div>
                        
                        <h3 className="text-base font-semibold text-foreground mb-2">
                          {item.label}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span>Remote-first team serving clients worldwide</span>
                </div>
              </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-16 md:py-20 border-t border-border/50 bg-white dark:bg-transparent">
              <div className="text-center mb-12 max-w-3xl mx-auto px-6 sm:px-8" data-component-name="ServicesPage">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Industries</span>
                </div>
                
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Industries{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    We Serve
                  </span>
                </h2>
                
                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Delivering tailored creative solutions across diverse sectors and business verticals
                </p>
              </div>

              <div className="space-y-4" data-component-name="ServicesPage">
                {/* First Row - Scrolling Left */}
                <div className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none" />
                  
                  <div className="flex gap-4 animate-scroll-left">
                    {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-4 flex-shrink-0">
                        {[
                          { name: "E-commerce & Retail", icon: ShoppingCart },
                          { name: "Technology & SaaS", icon: Cpu },
                          { name: "Healthcare & Medical", icon: Shield },
                          { name: "Real Estate & Property", icon: Building },
                          { name: "Food & Hospitality", icon: Coffee },
                          { name: "Fashion & Apparel", icon: Shirt },
                          { name: "Education & E-learning", icon: BookOpen },
                          { name: "Finance & Banking", icon: BarChart },
                          { name: "Travel & Tourism", icon: Plane },
                          { name: "Entertainment & Media", icon: Film },
                          { name: "Automotive & Logistics", icon: Package },
                          { name: "Consulting & Services", icon: Briefcase }
                        ].map((industry, index) => {
                          const Icon = industry.icon;
                          return (
                            <div key={`${setIndex}-${index}`} className="flex-shrink-0 w-44 sm:w-48">
                              <div className="relative rounded-lg border bg-card p-3 sm:p-4 text-center transition-all duration-300 hover:border-primary/50 hover:bg-muted/50 group">
                                <Icon 
                                  className="w-8 h-8 sm:w-10 sm:h-10 text-foreground mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110 mx-auto"
                                  strokeWidth={1}
                                />
                                <p className="text-xs sm:text-sm font-medium text-foreground">
                                  {industry.name}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second Row - Scrolling Right */}
                <div className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none" />
                  
                  <div className="flex gap-4 animate-scroll-right">
                    {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-4 flex-shrink-0">
                        {[
                          { name: "Manufacturing & Industrial", icon: Cpu },
                          { name: "Startups & Innovation", icon: Sparkles },
                          { name: "Non-Profit & NGO", icon: Users },
                          { name: "Sports & Fitness", icon: Target },
                          { name: "Beauty & Cosmetics", icon: Star },
                          { name: "Legal & Law Firms", icon: Shield },
                          { name: "Architecture & Design", icon: Home },
                          { name: "Photography Studios", icon: Camera },
                          { name: "Event Management", icon: Calendar },
                          { name: "Gaming & Esports", icon: Gamepad2 },
                          { name: "Agriculture & Farming", icon: Leaf },
                          { name: "Wellness & Spa", icon: Heart }
                        ].map((industry, index) => {
                          const Icon = industry.icon;
                          return (
                            <div key={`${setIndex}-${index}`} className="flex-shrink-0 w-44 sm:w-48">
                              <div className="relative rounded-lg border bg-card p-3 sm:p-4 text-center transition-all duration-300 hover:border-primary/50 hover:bg-muted/50 group">
                                <Icon 
                                  className="w-8 h-8 sm:w-10 sm:h-10 text-foreground mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110 mx-auto"
                                  strokeWidth={1}
                                />
                                <p className="text-xs sm:text-sm font-medium text-foreground">
                                  {industry.name}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <style>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                @keyframes scroll-right {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
                .animate-scroll-left {
                  animation: scroll-left 40s linear infinite;
                }
                .animate-scroll-left:hover {
                  animation-play-state: paused;
                }
                .animate-scroll-right {
                  animation: scroll-right 40s linear infinite;
                }
                .animate-scroll-right:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-20 border-t border-border/50 bg-white dark:bg-transparent">
              <div className="text-center mb-12 max-w-3xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>FAQ</span>
                </div>
                
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                
                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Common questions about our creative services, process, and pricing
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <ImprovedFAQ 
                  faqs={[
                    {
                      id: 1,
                      question: "What services does TKVCREATO offer?",
                      answer: "We offer comprehensive creative and digital services including graphic design, branding, website design and development, digital marketing (SEO, social media, PPC), mobile app development, photography, videography, 2D/3D design, and brand identity solutions. Our services are tailored for businesses in Chennai, Pondicherry, and across India."
                    },
                    {
                      id: 2,
                      question: "How long does a typical project take?",
                      answer: "Project timelines vary based on scope and complexity. Logo design typically takes 5-7 days, website development 2-6 weeks, and comprehensive branding projects 4-8 weeks. We offer fast turnaround options for urgent projects while maintaining our quality standards."
                    },
                    {
                      id: 3,
                      question: "Do you work with clients outside Chennai and Pondicherry?",
                      answer: "Yes! We're a remote-first team serving clients across India and internationally. We use modern collaboration tools to ensure seamless communication and project delivery regardless of location."
                    },
                    {
                      id: 4,
                      question: "What is your pricing structure?",
                      answer: "Our pricing is project-based and depends on scope, complexity, and deliverables. We offer transparent quotes with no hidden costs. Contact us for a free consultation and customized proposal based on your specific requirements."
                    },
                    {
                      id: 5,
                      question: "Do you provide ongoing support after project completion?",
                      answer: "Absolutely! We offer post-launch support, maintenance packages, and ongoing optimization services. For websites, we provide hosting, updates, and technical support. For branding projects, we assist with implementation and brand consistency."
                    },
                    {
                      id: 6,
                      question: "Can you help with both design and development?",
                      answer: "Yes, we're a full-service creative agency. Our team handles everything from initial concept and design to development, deployment, and marketing. This integrated approach ensures consistency and quality across all project phases."
                    },
                    {
                      id: 7,
                      question: "What industries do you specialize in?",
                      answer: "We work across diverse industries including e-commerce, technology, healthcare, real estate, food & hospitality, fashion, education, finance, travel, and professional services. Our versatile team adapts to each industry's unique requirements and standards."
                    },
                    {
                      id: 8,
                      question: "How do I get started with a project?",
                      answer: "Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your needs, goals, and budget. After understanding your requirements, we'll provide a detailed proposal and timeline to get started."
                    }
                  ]} 
                  allowMultiple={true} 
                />
              </div>

              <div className="mt-12 flex flex-col items-center gap-4">
                <p className="text-muted-foreground">
                  Still have questions? We're here to help!
                </p>
                <ShimmerButton className="h-12 px-8">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </ShimmerButton>
              </div>
            </section>

            {/* Trusted by Section */}
            <section className="border-t">
              <HomeLogoCloud />
            </section>
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  );
}
