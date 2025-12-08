'use client'

import { 
  ShoppingCart, Cpu, Shield, Building, Coffee, Shirt, BookOpen, BarChart,
  Plane, Film, Package, Briefcase, Sparkles, Users, Target, Star, Home,
  Camera, Calendar, Gamepad2, Leaf, Heart
} from '@/components/ui/icons'

export function IndustriesSection() {
  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-20 border-t border-border/50 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 max-w-3xl mx-auto" data-component-name="IndustriesSection">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>Industries</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Industries{" "}
            <span className="text-gradient-primary">
              We Serve
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Delivering tailored creative solutions across diverse sectors and business verticals
          </p>
        </div>

        <div className="space-y-4">
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
                          <p className="text-xs sm:text-sm font-medium text-foreground" data-component-name="IndustriesSection">
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
                    { name: "Manufacturing", icon: Cpu },
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
        
        <style jsx>{`
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
      </div>
    </section>
  )
}
