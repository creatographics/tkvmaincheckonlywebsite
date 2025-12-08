'use client';

import { HeroHeader } from '@/components/header';
import ModernFooter from '@/components/modern-footer';
import { CornerBorders } from '@/components/ui/corner-borders';

export default function CancellationRefundPage() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      <div className="pt-20 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-3xl py-12 md:py-20 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />

      {/* Hero Section */}
      <section className="relative pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-[800px]">
          <div className="text-center">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
              style={{
                backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
              }}
            >
              <span className="dark:hidden">Cancellation & Refund Policy</span>
              <span 
                className="hidden dark:inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
                }}
              >
                Cancellation & Refund Policy
              </span>
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Last Updated: October 10, 2023
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 sm:px-6 max-w-[800px] pb-12 sm:pb-16">
        {/* Introduction */}
        <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border">
          <p className="text-muted-foreground text-sm leading-relaxed">
            This Cancellation & Refund Policy outlines the terms under which cancellations, refunds, service terminations, and handovers are handled by TKV Creatographics. By using our services, you acknowledge and agree to the terms described below.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. Cancellation Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-4">1. Cancellation Policy</h2>
            
            <div className="space-y-5">
              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">1.1 Domain Name Registration Services</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Once a domain name is purchased, it is registered in your name and cannot be canceled until the end of its active term.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Domain registrations are regulated globally by ICANN (Internet Corporation for Assigned Names and Numbers); therefore, TKV Creatographics has no authority to cancel a domain once it is registered.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">1.2 Service Renewals</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  Requests to cancel ongoing services—such as website hosting, domain registration, or website promotion—must be made at least 7 business days prior to the renewal date.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Cancellation requests made within 7 business days of the renewal date will apply to the next billing cycle.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Renewals that have already processed cannot be refunded.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">1.3 Promotional Offers</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  Promotional services, discounted packages, festival offers, introductory pricing, or limited-time deals cannot be canceled or refunded under any circumstances.
                </p>
                <p className="text-muted-foreground text-[14px] leading-[170%]">
                  TKV Creatographics reserves the right to cancel an account at any time, with or without notice, and without providing a refund if terms of service are violated.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Refund Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-4">2. Refund Policy</h2>
            
            <div className="space-y-5">
              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">2.1 General Guidelines</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-2">
                  We aim to deliver services that meet your expectations. If you are not satisfied, a refund may be provided based on the conditions outlined in this policy.
                </p>
                <p className="text-muted-foreground text-[14px] leading-[170%]">
                  Refunds are provided only when eligible and determined by TKV Creatographics after reviewing the case.
                </p>
              </div>

              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">2.2 Refund Processing Time</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  All approved refunds will be processed within 7 working days through:
                </p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Account Credits,</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Bank transfer, or</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Refund to the original payment method (credit/debit card or payment gateway).</p>
                  </li>
                </ul>
                <p className="text-muted-foreground text-[14px] leading-[170%]">
                  Payment gateways may take additional processing time beyond our control.
                </p>
              </div>

              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">2.3 Non-Refundable Items</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  The following items/services are strictly non-refundable:
                </p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Domain Name Registration, Transfer, or related domain services</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Website Hosting fees</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Administrative fees and software installation fees</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Taxes paid to the government</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Completed projects that have already been handed over or uploaded to the server</p>
                  </li>
                </ul>
                <p className="text-muted-foreground text-[14px] leading-[170%]">
                  Refunds are not provided for any delay or dissatisfaction caused by third-party service providers (hosting, domain registrars, payment gateways, etc.).
                </p>
              </div>

              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">2.4 Eligibility for Refunds</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  Refund eligibility is limited to first-time accounts only.
                </p>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  You are NOT eligible for a refund if:
                </p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">You previously had an account with us, canceled it, and signed up again.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">You created multiple accounts.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">A project has reached completion or handover stage.</p>
                  </li>
                </ul>
                <p className="text-muted-foreground text-[14px] leading-[170%]">
                  Refunds for shared or reseller hosting services after the initial 30-day money-back period will be issued on a prorated basis for the unused period only.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Project Handover & Exit Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-4">3. Project Handover & Exit Policy</h2>
            
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-4">
              If a client decides to discontinue services and requests final project files, backups, or migration assistance, the following conditions apply:
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">3.1 Handover Fee</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  A one-time handover fee will be charged. This covers:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Preparation of all website files and databases</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Structuring and packaging deliverables</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Basic guidance for third-party migration</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">3.2 Termination of Support After Handover</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
                  After final backup delivery or hosting deactivation:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">TKV Creatographics is not responsible for any website issues, downtime, data loss, compatibility problems, or technical support.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Any further assistance will be treated as a paid service.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">3.3 Conditions for Handover</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">All pending payments must be cleared before handover work begins.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Domain or hosting transfers must be initiated by the client.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-muted-foreground text-[13px] leading-[160%]">Assistance with domain/hosting migration is not included in the handover fee unless specified in writing.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Important Note */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">4. Important Note</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              TKV Creatographics reserves the right to modify, update, or amend this Cancellation & Refund Policy at any time without prior notice. Clients are encouraged to review the policy periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-border">
            <h2 className="text-foreground text-base sm:text-lg font-semibold mb-3">Questions? Contact Us</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              If you have queries or suggestions regarding our refund policies, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:contact@creatographics.com" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Email Us
              </a>
              <a 
                href="tel:+919629683501" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-muted text-foreground text-sm font-semibold rounded-lg hover:bg-muted/80 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  );
}
