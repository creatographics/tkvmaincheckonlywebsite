"use client";

import { motion } from "motion/react";
import WorldMap from '@/components/ui/world-map';

export function WorldMapSection() {
  const dots = [
    {
      start: { lat: 20.5937, lng: 78.9629 }, // Center of India
      end: { lat: 37.0902, lng: -95.7129 }, // USA
    },
    {
      start: { lat: 20.5937, lng: 78.9629 }, // Center of India
      end: { lat: 55.3781, lng: -3.436 }, // UK
    },
    {
      start: { lat: 20.5937, lng: 78.9629 }, // Center of India
      end: { lat: 25.2048, lng: 55.2708 }, // UAE
    },
    {
      start: { lat: 20.5937, lng: 78.9629 }, // Center of India
      end: { lat: 1.3521, lng: 103.8198 }, // Singapore
    },
  ];

  return (
    <section className="pb-16 md:pb-20 px-6 lg:px-12 bg-white dark:bg-transparent">
      <div className="relative mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>Global Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-gradient-primary">
                Global
              </span>
              {" "}Reach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We collaborate with clients across India and around the world, delivering creative design and digital solutions without boundaries.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {["USA", "UK", "Singapore", "UAE", "Australia", "India"].map((country) => (
                <span key={country} className="px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground border border-border/50">
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-7xl mx-auto">
            <WorldMap dots={dots} lineColor="#f97316" />
          </div>
        </div>
        
        {/* SEO Keywords - Visually Hidden */}
        <p className="sr-only">
          global creative agency, branding services USA UK Singapore UAE Australia, graphic design services worldwide, website development international clients, UI UX design global reach, digital marketing services USA UK Singapore UAE Australia India, creative design agency Chennai Pondicherry serving international markets, global branding solutions, international web development services
        </p>
      </div>
    </section>
  );
}
