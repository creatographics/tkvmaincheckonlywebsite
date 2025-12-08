'use client';

import { HeroHeader } from '@/components/header';
import ModernFooter from '@/components/modern-footer';
import { CornerBorders } from '@/components/ui/corner-borders';
import Link from 'next/link';

export default function TermsConditionsPage() {
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
              <span className="dark:hidden">Terms & Conditions</span>
              <span 
                className="hidden dark:inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
                }}
              >
                Terms & Conditions
              </span>
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Last Updated: November 25, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 sm:px-6 max-w-[800px] pb-12 sm:pb-16">
        {/* Introduction */}
        <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Welcome to TKV Creatographics. These Terms & Conditions ("Terms") govern your access to and use of our web design, development, hosting, and related digital services. By using our services, signing a quotation, making an advance payment, or approving work via email, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. Contract & Acceptance */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">1. Contract & Acceptance</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">1.1.</span> Approval to commence any project—whether through email confirmation, signed quotation, or advance payment—constitutes a binding contractual agreement between the Client ("you") and TKV Creatographics ("we", "us", "our").
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">1.2.</span> Payment of the initial advance fee signifies your acceptance of these Terms and authorizes TKV Creatographics to begin work.
            </p>
          </div>

          {/* 2. Use of Services */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">2. Use of Services</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">2.1.</span> You agree not to use any service, solution, or product provided by TKV Creatographics for illegal, harmful, abusive, defamatory, or unethical purposes.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">2.2.</span> You are solely responsible for all content submitted, published, or distributed via your website or digital assets.
            </p>
          </div>

          {/* 3. Technical Support */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">3. Technical Support – 2 Months Free</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">3.1.</span> We provide 2 months of complimentary technical support after project delivery, covering:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Server-side scripting/programming errors</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Logical and calculation-related bugs</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Connection/API integration errors</p>
              </li>
            </ul>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">3.2.</span> Free support does not cover errors arising from:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Third-party plugin/theme updates</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Server upgrades or hosting provider changes</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Edits made by external developers</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Browser or OS version updates</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">New feature requests or design changes</p>
              </li>
            </ul>
          </div>

          {/* 4. Photography, Graphics & Licensing */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">4. Photography, Graphics & Licensing</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">4.1.</span> Stock images, premium icons, illustrations, and licensed assets are not included unless explicitly stated. You are responsible for purchasing appropriate licenses from third-party providers.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">4.2.</span> Images bundled with demo templates or software are strictly for demonstration and must not be used commercially without licensing.
            </p>
          </div>

          {/* 5. Browser Compatibility */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">5. Browser Compatibility</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">5.1.</span> All websites are optimized for the latest versions of Chrome, Firefox, and Safari.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">5.2.</span> Support for outdated browsers (e.g., IE11) is available at an additional charge.
            </p>
          </div>

          {/* 6. Search Engine-Related Services */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">6. Search Engine-Related Services</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              Unless explicitly agreed in writing, the following are not included in standard projects:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Search engine submission</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">SEO work (On-page or Off-page)</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]">Search ranking guarantees</p>
              </li>
            </ul>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              These services may be offered separately.
            </p>
          </div>

          {/* 7. Site Maintenance */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">7. Site Maintenance</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">7.1.</span> Once a website is launched, ongoing updates—including content changes, design tweaks, additional pages, or functional modifications—are billed separately unless covered under a maintenance contract.
            </p>
          </div>

          {/* 8. Payment Terms */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">8. Payment Terms</h2>
            <div className="space-y-3">
              <p className="text-muted-foreground text-[14px] leading-[170%]">
                <span className="text-foreground font-medium">8.1. Payment Due:</span> All invoices must be settled within 14 days of issuance unless otherwise specified.
              </p>
              <p className="text-muted-foreground text-[14px] leading-[170%]">
                <span className="text-foreground font-medium">8.2. Late Payment:</span> Overdue invoices will incur a penalty of USD 100 or 5% of the invoice amount per week (whichever is higher).
              </p>
              <p className="text-muted-foreground text-[14px] leading-[170%]">
                <span className="text-foreground font-medium">8.3. Accepted Payment Methods:</span>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-muted-foreground text-[13px]">International Clients: Wire Transfer, Credit Card, PayPal</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-muted-foreground text-[13px]">Indian Clients: UPI, NEFT, RTGS, Cheque</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 9. Cancellation Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">9. Cancellation Policy</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">9.1.</span> Both parties may cancel a project at any stage.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">9.2. If the Client cancels:</span> Refunds will be issued after deducting the advance fee and charges for all completed milestones and work hours.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">9.3. If TKV Creatographics cancels:</span> Refunds will be issued after deducting USD 15 per hour for completed work.
            </p>
          </div>

          {/* 10. Project Delivery, Client Responsibilities & Inactivity */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">10. Project Delivery, Client Responsibilities & Inactivity</h2>
            <div className="space-y-3">
              <p className="text-muted-foreground text-[14px] leading-[170%]">
                <span className="text-foreground font-medium">10.1.</span> You agree to provide all required content, materials, approvals, credentials, and timely feedback necessary for project progress.
              </p>
              <p className="text-muted-foreground text-[14px] leading-[170%]">
                <span className="text-foreground font-medium">10.2. Project Inactivity:</span>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-muted-foreground text-[13px]">If no response or progress occurs for 30 days, the project will be considered completed and invoiced.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-muted-foreground text-[13px]">If inactivity continues for 60 days, the project may be terminated, with no refunds applicable.</p>
                </li>
              </ul>
              <p className="text-muted-foreground text-[14px] leading-[170%]">
                <span className="text-foreground font-medium">10.3.</span> Any work beyond the agreed scope will be treated as a new assignment and charged separately.
              </p>
            </div>
          </div>

          {/* 11. Third-Party Integrations & Limitations */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">11. Third-Party Integrations & Limitations</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">11.1.</span> We are not responsible for issues caused by third-party:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Plugins, themes, or scripts</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">APIs or integrations</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Hosting downtimes</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Domain/DNS services</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">E-commerce payment gateways</p>
              </li>
            </ul>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">11.2.</span> Any troubleshooting related to third-party components will be billed separately.
            </p>
          </div>

          {/* 12. Backups & Data Security */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">12. Backups & Data Security</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">12.1.</span> Unless included in your hosting or maintenance plan, TKV Creatographics is not responsible for taking regular backups.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">12.2.</span> Clients are strongly advised to maintain their own backups of all website and content data.
            </p>
          </div>

          {/* 13. Confidentiality */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">13. Confidentiality</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">13.1.</span> Both parties agree to maintain confidentiality of all sensitive information, credentials, business data, and proprietary materials shared during the project.
            </p>
          </div>

          {/* 14. Copyright & Ownership */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">14. Copyright & Ownership</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">14.1.</span> TKV Creatographics retains full copyright for:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Design layouts</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Artwork</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Source code</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Frameworks</p>
              </li>
            </ul>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              Unless exclusive rights are purchased separately.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">14.2.</span> You retain ownership of:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Logos, images, and content supplied by you</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Website interface (if exclusive rights are purchased)</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Source code (if exclusive rights are purchased)</p>
              </li>
            </ul>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">14.3.</span> Unauthorized resale, duplication, or redistribution of our work is prohibited.
            </p>
          </div>

          {/* 15. Domain Names */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">15. Domain Names</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">15.1.</span> Domains purchased by TKV Creatographics on your behalf remain our property until full payment is received.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">15.2.</span> Domain transfer is processed only after all dues are cleared.
            </p>
          </div>

          {/* 16. Refund Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">16. Refund Policy</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              All payments made are non-refundable, except when cancellation is initiated by TKV Creatographics as per Clause 9.
            </p>
          </div>

          {/* 17. Communication Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">17. Communication Policy</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">17.1.</span> All official communication must take place via email or the designated project channel.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">17.2.</span> Additional meetings or extended calls may be billed if they exceed reasonable limits.
            </p>
          </div>

          {/* 18. Disclaimer & Limitation of Liability */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">18. Disclaimer & Limitation of Liability</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              <span className="text-foreground font-medium">18.1.</span> TKV Creatographics is not responsible for:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Loss of revenue, profits, data, or business</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Downtime caused by hosting providers or external services</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Delays caused by Client-side inactivity</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px]">Damages resulting from improper usage or third-party involvement</p>
              </li>
            </ul>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              <span className="text-foreground font-medium">18.2.</span> In no event shall TKV Creatographics be liable for any direct, indirect, special, incidental, or consequential damages arising from the use or inability to use the website or services provided.
            </p>
          </div>

          {/* 19. Modification of Terms */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">19. Modification of Terms</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              TKV Creatographics reserves the right to update or modify these Terms at any time. Agreements signed prior to updates remain valid under the previous terms.
            </p>
          </div>

          {/* 20. Governing Law & Jurisdiction */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">20. Governing Law & Jurisdiction</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">
              These Terms are governed by the laws of Puducherry, India.
            </p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">
              All disputes shall fall under the exclusive jurisdiction of the courts in Puducherry.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-border" data-component-name="TermsConditionsPage">
            <h2 className="text-foreground text-base sm:text-lg font-semibold mb-3">Questions? Contact Us</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-component-name="TermsConditionsPage">
              If you have any questions regarding these terms and conditions, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3" data-component-name="TermsConditionsPage">
              <a 
                href="mailto:contact@creatographics.com" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors" data-component-name="TermsConditionsPage"
              >
                Email Us
              </a>
              <a 
                href="tel:+919629683501" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-muted text-foreground text-sm font-semibold rounded-lg hover:bg-muted/80 transition-colors" data-component-name="TermsConditionsPage"
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
