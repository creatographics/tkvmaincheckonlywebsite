"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
// import ServicesBentoGrid from "@/components/services-bento-grid";
import Link from "next/link";

export function ServicesOverview() {
  return (
    <section className="pb-16 overflow-hidden bg-white dark:bg-transparent">
      <div className="relative z-10 w-full mx-auto">
        <div className="space-y-4 text-center mb-8 md:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-400">
            Full-Service Agency
          </p>
          <h2 className="text-[2.1rem] md:text-[2.4rem] lg:text-[2.7rem] font-semibold text-foreground mb-4" style={{
            fontWeight: '500'
          }}>
            Everything you need to <span className="text-primary">grow online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            From stunning web design to powerful marketing strategies, we offer comprehensive creative and digital solutions to help your business stand out and succeed.
          </p>
        </div>

        {/* <ServicesBentoGrid /> */}

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <ShimmerButton className="h-10 px-6" background="linear-gradient(to right, #f97316, #ea580c)" shimmerColor="#ffffff">
            <Link href="/quotation" className="flex items-center font-semibold">
              Get a Custom Quote
            </Link>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
