'use client';

import { HeroHeader } from '@/components/header';
import ModernFooter from '@/components/modern-footer';
import { CornerBorders } from '@/components/ui/corner-borders';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
              <span className="dark:hidden">Privacy Policy</span>
              <span 
                className="hidden dark:inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
                }}
              >
                Privacy Policy
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
            This Privacy Policy describes how TKV Creatographics ("we", "our", "us") collects, uses, stores, and protects your personal information when you access our website or use our services. By using our website, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-4">1. Information We Collect</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">1.1 Personal Information</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">We may collect personally identifiable information that you voluntarily provide when filling out a form, logging into our website, requesting services, or contacting us. This may include: name, email address, phone number, mailing address, business information, and any additional details you provide voluntarily.</p>
              </div>
              <div>
                <h3 className="text-foreground text-[15px] font-medium mb-2">1.2 Non-Personal Information</h3>
                <p className="text-muted-foreground text-[14px] leading-[170%]">We may automatically collect non-personal information including browser type, device type, IP address, operating system, pages visited, time spent on website, and referring website. This information helps us analyze website performance and improve user experience.</p>
              </div>
            </div>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-4">We use the collected information for the following purposes:</p>
            <div className="space-y-3">
              <div>
                <span className="text-foreground text-[14px] font-medium">2.1 Personalize User Experience:</span>
                <span className="text-muted-foreground text-[14px] leading-[170%]"> To better understand your requirements and respond more accurately.</span>
              </div>
              <div>
                <span className="text-foreground text-[14px] font-medium">2.2 Improve Website:</span>
                <span className="text-muted-foreground text-[14px] leading-[170%]"> To enhance website performance, usability, and content based on user behavior and feedback.</span>
              </div>
              <div>
                <span className="text-foreground text-[14px] font-medium">2.3 Customer Support:</span>
                <span className="text-muted-foreground text-[14px] leading-[170%]"> To respond to your inquiries, resolve issues, and provide assistance.</span>
              </div>
              <div>
                <span className="text-foreground text-[14px] font-medium">2.4 Email Communication:</span>
                <span className="text-muted-foreground text-[14px] leading-[170%]"> To send updates, service information, promotional messages, and respond to inquiries. You may opt out of promotional emails at any time.</span>
              </div>
              <div>
                <span className="text-foreground text-[14px] font-medium">2.5 Service Delivery:</span>
                <span className="text-muted-foreground text-[14px] leading-[170%]"> To complete projects, deliver files, verify accounts, and process transactions.</span>
              </div>
            </div>
          </div>

          {/* 3. How We Protect Your Information */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">3. How We Protect Your Information</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">We implement industry-standard security measures to safeguard your data, including password-protected databases, secure servers, limited access to authorized personnel, and regular malware and security scans.</p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">However, no method of transmission or storage over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
          </div>

          {/* 4. Cookies & Tracking Technologies */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">4. Cookies & Tracking Technologies</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">Cookies are small files stored on your device that allow us to recognize your browser and enhance your experience. We use cookies to save user preferences, understand usage patterns, improve website performance, analyze traffic, and enable remarketing campaigns.</p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">You can disable cookies through your browser settings, but doing so may affect website functionality.</p>
          </div>

          {/* 5. Remarketing & Advertising */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">5. Remarketing & Advertising</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">We use cookies and third-party services such as Google Ads to display targeted advertisements based on your previous interactions with our website. These ads may appear across the Google Display Network. Users may opt out anytime via Google Ads Preferences Manager.</p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">We do not share personal information with advertisers.</p>
          </div>

          {/* 6. Information Disclosure */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">6. Information Disclosure</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">We do not sell, trade, or transfer your personal information to outside parties. Information may be shared only with trusted third-party vendors assisting in operations (e.g., hosting providers, email service providers), legal authorities when required by law, and partners involved in fulfilling your service request.</p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">All third parties are required to maintain confidentiality.</p>
          </div>

          {/* 7. Third-Party Links */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">7. Third-Party Links</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">Our website may contain links to external websites. These sites have independent privacy policies, and we are not responsible for their content or practices. We encourage you to review the privacy policies of any third-party websites you visit.</p>
          </div>

          {/* 8. Data Retention Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">8. Data Retention Policy</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">We retain your personal information only as long as necessary to provide services, maintain business records, and comply with legal requirements. Once data is no longer needed, it is securely deleted or anonymized.</p>
          </div>

          {/* 9. Your Rights */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">9. Your Rights</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">Depending on your region, you may have the right to: access the personal information we hold, request corrections or updates, request deletion of your information, opt out of marketing emails, and withdraw consent for data collection.</p>
            <p className="text-muted-foreground text-[14px] leading-[170%]">To exercise your rights, contact us using the details in Section 12.</p>
          </div>

          {/* 10. Children's Privacy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">10. Children's Privacy</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">We do not knowingly collect personal information from children under the age of 13. If such information is unintentionally collected, we will delete it immediately.</p>
          </div>

          {/* 11. Consent */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">11. Consent</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">By using our website, you consent to the terms of this Privacy Policy.</p>
          </div>

          {/* 12. Contact Information */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">12. Contact Information</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%] mb-3">For questions related to this Privacy Policy or data handling, you may contact us at:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]"><span className="text-foreground font-medium">Email:</span> contact@tkvcreatographics.com</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]"><span className="text-foreground font-medium">Phone:</span> +91 96296 83501</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-muted-foreground text-[13px] leading-[160%]"><span className="text-foreground font-medium">Address:</span> 9, Sardar Vallabhai Patel Road, Pondicherry 605001</p>
              </li>
            </ul>
          </div>

          {/* 13. Changes to This Privacy Policy */}
          <div>
            <h2 className="text-foreground text-[18px] font-semibold mb-3">13. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground text-[14px] leading-[170%]">We may update or modify this policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website indicates acceptance of the revised policy.</p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-border">
            <h2 className="text-foreground text-base sm:text-lg font-semibold mb-3">Questions? Contact Us</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              If you have any questions regarding this privacy policy, please don't hesitate to reach out.
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
