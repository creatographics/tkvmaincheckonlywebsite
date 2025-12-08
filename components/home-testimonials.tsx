"use client";
import React, { useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import { CornerBorders } from "@/components/ui/corner-borders";
import Image from "next/image";

// Helper function to highlight service names and key words
const highlightText = (text: string) => {
  const keywords = [
    'graphic design', 'web designing', 'web development', 'branding',
    'healthcare branding', 'educational branding', 'restaurant branding', 'tech branding',
    'salon branding', 'corporate branding', 'retail branding', 'media branding',
    'travel branding', 'event branding', 'fintech branding', 'wellness branding',
    'beauty branding', 'luxury branding', 'hospitality branding',
    '40% increase', '35%', '50% boost', '45%'
  ];
  
  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<span class="text-foreground/90 font-medium">$1</span>');
  });
  
  return highlightedText;
};

const testimonials = [
  {
    text: "We were looking for a reliable team to handle our healthcare branding and cardiac care website, and the experience was excellent. The designs felt truly medical and patient-friendly, and we saw a 40% increase in patient engagement after launch.",
    company: "Aravind Heart Care",
    logo: "/images/clientlogos/ioneheart.png",
  },
  {
    text: "The branding and graphic design work for our school was handled beautifully. From prospectuses to admission marketing creatives, everything looked premium and helped us increase admissions by 35%.",
    company: "Gurukul International School",
    logo: "/images/clientlogos/Gurukul.png",
  },
  {
    text: "The team understood our tech vision quickly and delivered strong graphic design and web development support. The visuals and user experience upgrades made our platform feel more modern and polished.",
    company: "Datanimbus",
    logo: "/images/clientlogos/Datanimbus.png",
  },
  {
    text: "We needed a professional pain management brand and website, and the results were spot on. The new healthcare designs and marketing materials significantly improved patient trust and engagement.",
    company: "Kinesis Pain Speciality",
    logo: "/images/clientlogos/Kinesis.png",
  },
  {
    text: "Their education branding and digital marketing support brought a fresh identity to our institution. We saw nearly a 50% boost in brand recognition and student inquiries.",
    company: "Alpha Arts & Science College",
    logo: "/images/clientlogos/alphaschool.png",
  },
  {
    text: "Everything from corporate branding to website design was executed with great clarity and professionalism. The overall digital presence now feels credible and market-ready.",
    company: "Genesis",
    logo: "/images/clientlogos/Genesis.png",
  },
  {
    text: "Our restaurant branding got a complete transformation — menus, signage, and creatives now feel elegant and authentic. The identity perfectly matches our Indian cuisine experience.",
    company: "Bombay Curry",
    logo: "/images/clientlogos/Bombay-Curry.png",
  },
  {
    text: "The hospital website and healthcare branding were modernized brilliantly. Patients find the site easier to navigate, and the design upgrade improved overall satisfaction.",
    company: "David Memorial Hospital",
    logo: "/images/clientlogos/David-Memorial.png",
  },
  {
    text: "It was a great collaboration for our industrial branding and website. The graphic design quality and technical execution gave us a stronger online presence.",
    company: "Emmbi Industries",
    logo: "/images/clientlogos/Emmbi.png",
  },
  {
    text: "The branding and website design turned out sharp, clean, and modern. It aligned well with our tech identity and improved our credibility online.",
    company: "Kore.ai",
    logo: "/images/clientlogos/Kore.png",
  },
  {
    text: "The wellness branding and website design were handled with real attention to detail. The visuals feel calm, premium, and perfectly aligned with our holistic brand.",
    company: "Inaura",
    logo: "/images/clientlogos/Inaura.png",
  },
  {
    text: "Launching a medical platform needed strong healthcare visuals, and they delivered exactly that. The branding and graphic design work made the launch smooth and professional.",
    company: "Medicub",
    logo: "/images/clientlogos/Medicub.png",
  },
  {
    text: "For an AI startup, we wanted a futuristic but clean identity — and they nailed it. The tech branding and modern web design clearly reflect our innovation.",
    company: "Metamind",
    logo: "/images/clientlogos/Metamind.png",
  },
  {
    text: "Our fragrance brand now feels truly premium thanks to their elegant branding and packaging design. The website also looks sophisticated and luxury-ready.",
    company: "Mother's Fragrances",
    logo: "/images/clientlogos/Mothers-Fragrances.png",
  },
  {
    text: "The salon branding and creative designs felt fresh, modern, and suited for our outlets. Their work connected well with our target audience across locations.",
    company: "Naturals",
    logo: "/images/clientlogos/Naturals.png",
  },
  {
    text: "We were impressed by their ability to deliver modern tech visuals with strong credibility. The website and graphic creatives strengthened our cybersecurity brand presence.",
    company: "Palo Alto Networks",
    logo: "/images/clientlogos/Paloalto.png",
  },
  {
    text: "The coworking identity was designed thoughtfully and looks inspiring across touchpoints. Their corporate branding and graphics really understand modern workspace culture.",
    company: "Push Collaborative",
    logo: "/images/clientlogos/Push-Collabrative.png",
  },
  {
    text: "We needed a strong educational identity, and the brochures and marketing materials were engaging and professional. Enrollment momentum improved noticeably after the rebrand.",
    company: "Sarthak Education",
    logo: "/images/clientlogos/Sarthak.png",
  },
  {
    text: "The branding for our interior design services now feels clean, modern, and premium. The new identity and marketing creatives helped increase sales by 45%.",
    company: "Sukkran",
    logo: "/images/clientlogos/Sukkran.png",
  },
  {
    text: "The media branding brought clarity and uniqueness to our publication. Their graphic designs improved our digital reach and audience recall.",
    company: "The Daily Showcase",
    logo: "/images/clientlogos/The-Daily-Showcase.png",
  },
  {
    text: "The travel platform became much easier and more appealing after their web design and branding work. The UX improvements definitely enhanced customer experience.",
    company: "Travhunt",
    logo: "/images/clientlogos/Travhunt.png",
  },
  {
    text: "Our wellness brand looks far more refined now. The branding and website design work feels warm, professional, and aligned with our audience.",
    company: "Veira",
    logo: "/images/clientlogos/Veira.png",
  },
  {
    text: "The event branding was handled creatively and delivered on time. Their banners, stage visuals, and promotional designs helped our conclave stand out.",
    company: "Business Conclave",
    logo: "/images/clientlogos/business conclave.png",
  },
  {
    text: "For a fintech brand, clarity and trust matter — and their branding and website design brought both. The platform feels more professional and user-friendly now.",
    company: "TradeGully",
    logo: "/images/clientlogos/tradegully.png",
  },
  {
    text: "The mental-health platform required empathetic design, and that's exactly what we got. The wellness branding and calming visuals are perfect for our mission.",
    company: "Unpause",
    logo: "/images/clientlogos/unpause.png",
  },
  {
    text: "The design work for our art studio branding and packaging was elegant and consistent. Their marketing creatives helped us build a strong presence in the market.",
    company: "Amoli",
    logo: "/images/clientlogos/Amoli.png",
  },
  {
    text: "Launching a luxury fashion brand needed premium visuals, and the identity they created was spot on. The branding feels sophisticated and high-end.",
    company: "Aureli",
    logo: "/images/clientlogos/Aureli.png",
  },
  {
    text: "The resort branding and hospitality creatives look beautiful and truly reflect our luxury experience. Their work helped elevate our positioning instantly.",
    company: "Avana",
    logo: "/images/clientlogos/Avana.png",
  },
];

const firstColumn = testimonials.slice(0, 10);
const secondColumn = testimonials.slice(10, 19);
const thirdColumn = testimonials.slice(19, 28);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, company, logo }, i) => (
                <React.Fragment key={i}>
                  <div 
                    className="relative p-6 border border-border bg-card max-w-xs w-full hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Corner Borders */}
                    <span className="border-primary absolute -left-px -top-px block size-3 border-l-2 border-t-2"></span>
                    <span className="border-primary absolute -right-px -top-px block size-3 border-r-2 border-t-2"></span>
                    <span className="border-primary absolute -bottom-px -left-px block size-3 border-b-2 border-l-2"></span>
                    <span className="border-primary absolute -bottom-px -right-px block size-3 border-b-2 border-r-2"></span>
                    
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                        </svg>
                      </div>
                      <div 
                        className="text-muted-foreground leading-relaxed mb-6 text-sm font-[family-name:var(--font-geomanist-regular)]"
                        dangerouslySetInnerHTML={{ __html: highlightText(text) }}
                      />
                      <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-primary/50 to-primary flex-shrink-0"></div>
                        <div className="font-semibold text-sm text-foreground/80">{company}</div>
                      </div>
                    </div>
                  </div>
                  {i < props.testimonials.length - 1 && (
                    <div className="flex justify-center">
                      <div className="w-px h-6 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function HomeTestimonials() {
  return (
    <section className="pt-16 md:pt-20 pb-16 overflow-hidden bg-white dark:bg-transparent">
      <div className="text-center mb-16 max-w-4xl mx-auto px-6 sm:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span>Client Stories</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Trusted by{" "}
            <span className="text-gradient-primary">
              Leading Brands
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From healthcare to hospitality, education to technology — partnering with diverse industries to deliver exceptional design solutions.
          </p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={30} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={35}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={32}
          />
        </div>
        
        {/* SEO Keywords - Visually Hidden */}
        <p className="sr-only">
          graphic design company reviews, branding agency reviews, website design testimonials, digital marketing feedback, Chennai, Pondicherry
        </p>
    </section>
  );
}
