import { HeroHeader } from '@/components/header'
import ModernFooter from '@/components/modern-footer'
import { CornerBorders } from '@/components/ui/corner-borders'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2 } from '@/components/ui/icons'
import { notFound } from 'next/navigation'

// Static blog posts data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: '1',
    slug: 'essential-design-principles-modern-websites',
    title: '10 Essential Design Principles for Modern Websites',
    excerpt: 'Discover the fundamental design principles that make websites stand out in 2024. From typography to color theory, learn what makes great web design.',
    content: `
      <p>In the ever-evolving world of web design, certain principles remain timeless while others adapt to new technologies and user expectations. Here are 10 essential design principles that every modern website should follow in 2024.</p>

      <h2>1. Mobile-First Design</h2>
      <p>With over 60% of web traffic coming from mobile devices, designing for mobile first is no longer optional. Start with the smallest screen size and progressively enhance the experience for larger screens.</p>

      <h2>2. Clear Visual Hierarchy</h2>
      <p>Guide users through your content with a clear visual hierarchy. Use size, color, contrast, and spacing to indicate the importance of different elements on your page.</p>

      <h2>3. Consistent Typography</h2>
      <p>Limit your font choices to 2-3 typefaces maximum. Use a clear typographic scale with consistent sizing for headings, body text, and captions. Good typography improves readability and creates a professional appearance.</p>

      <h2>4. Strategic Use of White Space</h2>
      <p>White space (or negative space) is not wasted space. It gives your content room to breathe, improves readability, and draws attention to important elements.</p>

      <h2>5. Accessible Color Contrast</h2>
      <p>Ensure sufficient contrast between text and background colors. Follow WCAG guidelines with a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.</p>

      <h2>6. Fast Loading Times</h2>
      <p>Optimize images, minimize code, and leverage caching to ensure your site loads quickly. Users expect pages to load in under 3 seconds, and search engines reward fast sites.</p>

      <h2>7. Intuitive Navigation</h2>
      <p>Make it easy for users to find what they're looking for. Use clear labels, logical organization, and consistent navigation patterns throughout your site.</p>

      <h2>8. Responsive Images</h2>
      <p>Serve appropriately sized images for different devices. Use modern image formats like WebP and implement lazy loading to improve performance.</p>

      <h2>9. Clear Call-to-Actions</h2>
      <p>Make your CTAs stand out with contrasting colors, clear copy, and prominent placement. Users should immediately understand what action you want them to take.</p>

      <h2>10. Consistent Brand Identity</h2>
      <p>Maintain consistency in colors, fonts, imagery, and tone across all pages. A cohesive brand identity builds trust and recognition.</p>

      <h2>Conclusion</h2>
      <p>These principles form the foundation of effective web design. By following them, you'll create websites that are not only beautiful but also functional, accessible, and user-friendly. Remember, great design is invisible – it just works.</p>
    `,
    image: '/images/blog/design-principles.jpg',
    category: 'Web Design',
    date: 'December 5, 2024',
    readTime: '8 min read',
    author: 'TKV Creatographics Team',
    featured: true
  },
  {
    id: '2',
    slug: 'power-of-branding-small-businesses',
    title: 'The Power of Branding for Small Businesses',
    excerpt: 'Learn how effective branding can transform your small business and help you stand out in a competitive market. Real-world examples included.',
    content: `
      <p>Branding is often seen as something only large corporations need to worry about. However, for small businesses, a strong brand can be the difference between thriving and merely surviving.</p>

      <h2>What is Branding?</h2>
      <p>Branding goes beyond just a logo or color scheme. It's the complete experience your customers have with your business – from your visual identity to your customer service, messaging, and values.</p>

      <h2>Why Branding Matters for Small Businesses</h2>
      <p>In a crowded marketplace, branding helps you stand out. It creates recognition, builds trust, and gives customers a reason to choose you over competitors.</p>

      <h3>1. Creates Recognition</h3>
      <p>A consistent brand makes your business memorable. When customers see your logo, colors, or messaging, they should immediately recognize your business.</p>

      <h3>2. Builds Trust and Credibility</h3>
      <p>Professional branding signals that you're serious about your business. It shows attention to detail and commitment to quality.</p>

      <h3>3. Differentiates You from Competitors</h3>
      <p>Your brand tells your unique story. It communicates what makes you different and why customers should care.</p>

      <h2>Key Elements of Effective Branding</h2>
      
      <h3>Visual Identity</h3>
      <p>This includes your logo, color palette, typography, and imagery style. These elements should work together to create a cohesive look.</p>

      <h3>Brand Voice</h3>
      <p>How you communicate with your audience matters. Are you professional and formal, or casual and friendly? Your brand voice should reflect your values and resonate with your target audience.</p>

      <h3>Brand Values</h3>
      <p>What does your business stand for? Your values should guide your decisions and be evident in everything you do.</p>

      <h2>Real-World Success Stories</h2>
      <p>Consider companies like Warby Parker or Dollar Shave Club. They disrupted established industries not just with products, but with strong, distinctive brands that resonated with their target audiences.</p>

      <h2>Getting Started with Branding</h2>
      <p>You don't need a huge budget to create a strong brand. Start by:</p>
      <ul>
        <li>Defining your target audience</li>
        <li>Identifying your unique value proposition</li>
        <li>Creating consistent visual elements</li>
        <li>Developing a clear brand voice</li>
        <li>Being consistent across all touchpoints</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Investing in branding isn't just for big businesses. For small businesses, it's essential for building recognition, trust, and long-term success. Start small, be consistent, and watch your brand grow.</p>
    `,
    image: '/images/blog/branding-power.jpg',
    category: 'Branding',
    date: 'November 28, 2024',
    readTime: '6 min read',
    author: 'TKV Creatographics Team',
    featured: false
  },
  {
    id: '3',
    slug: 'seo-strategies-2024',
    title: 'SEO Strategies That Actually Work in 2024',
    excerpt: 'Stay ahead of the curve with these proven SEO strategies. Learn what Google is prioritizing and how to optimize your website for better rankings.',
    content: `
      <p>Search Engine Optimization (SEO) continues to evolve, and what worked last year might not work today. Here are the SEO strategies that are delivering results in 2024.</p>

      <h2>1. Focus on User Experience (UX)</h2>
      <p>Google's Core Web Vitals are now crucial ranking factors. Ensure your site loads quickly, is mobile-friendly, and provides a smooth user experience.</p>

      <h3>Key Metrics to Monitor:</h3>
      <ul>
        <li>Largest Contentful Paint (LCP) - under 2.5 seconds</li>
        <li>First Input Delay (FID) - under 100 milliseconds</li>
        <li>Cumulative Layout Shift (CLS) - under 0.1</li>
      </ul>

      <h2>2. Create High-Quality, E-E-A-T Content</h2>
      <p>Google now evaluates content based on Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Create content that demonstrates your knowledge and provides real value.</p>

      <h2>3. Optimize for Voice Search</h2>
      <p>With the rise of smart speakers and voice assistants, optimize for conversational queries. Focus on long-tail keywords and question-based content.</p>

      <h2>4. Leverage Video Content</h2>
      <p>Video content is increasingly important for SEO. Create video content and optimize it with transcripts, captions, and descriptive titles.</p>

      <h2>5. Build Quality Backlinks</h2>
      <p>Quality over quantity remains key. Focus on earning backlinks from authoritative, relevant websites in your industry.</p>

      <h2>6. Optimize for Local SEO</h2>
      <p>If you have a physical location, local SEO is crucial. Claim your Google Business Profile, gather reviews, and ensure your NAP (Name, Address, Phone) is consistent across the web.</p>

      <h2>7. Use Structured Data</h2>
      <p>Implement schema markup to help search engines understand your content better. This can lead to rich snippets and improved visibility.</p>

      <h2>8. Mobile-First Indexing</h2>
      <p>Google now primarily uses the mobile version of your site for indexing and ranking. Ensure your mobile site is fully optimized.</p>

      <h2>9. Focus on Topic Clusters</h2>
      <p>Instead of targeting individual keywords, create comprehensive topic clusters with pillar pages and supporting content.</p>

      <h2>10. Monitor and Adapt</h2>
      <p>SEO is not set-and-forget. Regularly monitor your rankings, traffic, and user behavior. Use tools like Google Analytics and Search Console to identify opportunities.</p>

      <h2>Conclusion</h2>
      <p>SEO in 2024 is about providing genuine value to users while following technical best practices. Focus on creating quality content, optimizing user experience, and building authority in your niche.</p>
    `,
    image: '/images/blog/seo-strategies.jpg',
    category: 'Digital Marketing',
    date: 'November 22, 2024',
    readTime: '10 min read',
    author: 'TKV Creatographics Team',
    featured: false
  },
  {
    id: '4',
    slug: 'color-psychology-in-design',
    title: 'Color Psychology in Design: A Complete Guide',
    excerpt: 'Understand how colors influence emotions and behavior. Learn to choose the perfect color palette for your brand and design projects.',
    content: `
      <p>Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, influence decisions, and communicate messages without words. Understanding color psychology is essential for creating effective designs.</p>

      <h2>The Basics of Color Psychology</h2>
      <p>Different colors trigger different emotional and psychological responses. While these associations can vary by culture, some patterns are universal.</p>

      <h2>Red</h2>
      <p><strong>Emotions:</strong> Passion, energy, urgency, danger</p>
      <p><strong>Use Cases:</strong> Call-to-action buttons, sales, food industry, sports brands</p>
      <p>Red increases heart rate and creates a sense of urgency. It's attention-grabbing and stimulating.</p>

      <h2>Blue</h2>
      <p><strong>Emotions:</strong> Trust, calm, professionalism, security</p>
      <p><strong>Use Cases:</strong> Corporate brands, healthcare, technology, finance</p>
      <p>Blue is the most universally liked color. It conveys reliability and professionalism.</p>

      <h2>Yellow</h2>
      <p><strong>Emotions:</strong> Optimism, happiness, warmth, caution</p>
      <p><strong>Use Cases:</strong> Children's products, food brands, warning signs</p>
      <p>Yellow grabs attention and stimulates mental activity. Use it sparingly as it can be overwhelming.</p>

      <h2>Green</h2>
      <p><strong>Emotions:</strong> Growth, health, nature, wealth</p>
      <p><strong>Use Cases:</strong> Environmental brands, health products, financial services</p>
      <p>Green is associated with nature and renewal. It's calming and represents balance.</p>

      <h2>Orange</h2>
      <p><strong>Emotions:</strong> Enthusiasm, creativity, adventure, affordability</p>
      <p><strong>Use Cases:</strong> Creative industries, children's products, call-to-actions</p>
      <p>Orange combines the energy of red with the happiness of yellow. It's friendly and inviting.</p>

      <h2>Purple</h2>
      <p><strong>Emotions:</strong> Luxury, creativity, wisdom, spirituality</p>
      <p><strong>Use Cases:</strong> Beauty products, luxury brands, creative services</p>
      <p>Purple is associated with royalty and sophistication. It's often used for premium products.</p>

      <h2>Black</h2>
      <p><strong>Emotions:</strong> Sophistication, power, elegance, mystery</p>
      <p><strong>Use Cases:</strong> Luxury brands, fashion, technology</p>
      <p>Black conveys elegance and authority. It's timeless and versatile.</p>

      <h2>White</h2>
      <p><strong>Emotions:</strong> Purity, simplicity, cleanliness, minimalism</p>
      <p><strong>Use Cases:</strong> Healthcare, technology, minimalist brands</p>
      <p>White creates a sense of space and cleanliness. It's essential for modern, minimalist designs.</p>

      <h2>Choosing Your Brand Colors</h2>
      <p>When selecting colors for your brand:</p>
      <ul>
        <li>Consider your target audience and their cultural associations</li>
        <li>Think about the emotions you want to evoke</li>
        <li>Look at your competitors and differentiate yourself</li>
        <li>Ensure sufficient contrast for accessibility</li>
        <li>Test your colors across different mediums</li>
      </ul>

      <h2>Color Combinations</h2>
      <p>Use color theory to create harmonious palettes:</p>
      <ul>
        <li><strong>Complementary:</strong> Colors opposite on the color wheel (high contrast)</li>
        <li><strong>Analogous:</strong> Colors next to each other (harmonious)</li>
        <li><strong>Triadic:</strong> Three colors evenly spaced on the wheel (balanced)</li>
        <li><strong>Monochromatic:</strong> Different shades of one color (cohesive)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Color psychology is a powerful tool for designers and marketers. By understanding how colors affect emotions and behavior, you can create more effective designs that resonate with your audience and achieve your goals.</p>
    `,
    image: '/images/blog/color-psychology.jpg',
    category: 'Design Theory',
    date: 'November 15, 2024',
    readTime: '7 min read',
    author: 'TKV Creatographics Team',
    featured: false
  },
  {
    id: '5',
    slug: 'social-media-marketing-tips',
    title: '15 Social Media Marketing Tips for 2024',
    excerpt: 'Boost your social media presence with these actionable tips. From content strategy to engagement tactics, we cover it all.',
    content: `
      <p>Social media marketing continues to be essential for businesses of all sizes. Here are 15 actionable tips to improve your social media strategy in 2024.</p>

      <h2>1. Know Your Audience</h2>
      <p>Understand who you're talking to. Create detailed buyer personas and tailor your content to their interests, pain points, and preferences.</p>

      <h2>2. Choose the Right Platforms</h2>
      <p>You don't need to be on every platform. Focus on where your audience spends their time. B2B? LinkedIn. Visual products? Instagram and Pinterest.</p>

      <h2>3. Create a Content Calendar</h2>
      <p>Plan your content in advance. A content calendar helps maintain consistency and ensures you're posting at optimal times.</p>

      <h2>4. Use Video Content</h2>
      <p>Video content gets higher engagement than any other format. Use short-form videos (Reels, TikTok, Shorts) for maximum reach.</p>

      <h2>5. Engage Authentically</h2>
      <p>Social media is about being social. Respond to comments, ask questions, and create conversations with your audience.</p>

      <h2>6. Leverage User-Generated Content</h2>
      <p>Encourage customers to share their experiences. UGC builds trust and provides authentic content for your channels.</p>

      <h2>7. Use Hashtags Strategically</h2>
      <p>Research relevant hashtags in your niche. Mix popular and niche-specific hashtags to increase discoverability.</p>

      <h2>8. Post Consistently</h2>
      <p>Consistency is key. Develop a posting schedule and stick to it. Quality over quantity, but maintain regular presence.</p>

      <h2>9. Analyze Your Performance</h2>
      <p>Use analytics to understand what works. Track engagement, reach, and conversions to refine your strategy.</p>

      <h2>10. Collaborate with Influencers</h2>
      <p>Partner with micro-influencers in your niche. They often have higher engagement rates than mega-influencers.</p>

      <h2>11. Run Contests and Giveaways</h2>
      <p>Contests boost engagement and grow your following. Make entry requirements simple and prizes relevant to your audience.</p>

      <h2>12. Use Stories and Ephemeral Content</h2>
      <p>Stories create urgency and feel more authentic. Use them for behind-the-scenes content, polls, and quick updates.</p>

      <h2>13. Invest in Paid Advertising</h2>
      <p>Organic reach is declining. Strategic paid advertising can help you reach new audiences and achieve specific goals.</p>

      <h2>14. Stay Current with Trends</h2>
      <p>Jump on relevant trends quickly. But ensure they align with your brand voice and values.</p>

      <h2>15. Provide Value</h2>
      <p>Don't just promote. Educate, entertain, and inspire your audience. Follow the 80/20 rule: 80% value, 20% promotion.</p>

      <h2>Conclusion</h2>
      <p>Social media marketing success doesn't happen overnight. It requires strategy, consistency, and genuine engagement. Implement these tips gradually and measure your results to find what works best for your brand.</p>
    `,
    image: '/images/blog/social-media.jpg',
    category: 'Digital Marketing',
    date: 'November 8, 2024',
    readTime: '9 min read',
    author: 'TKV Creatographics Team',
    featured: false
  },
  {
    id: '6',
    slug: 'typography-trends-2024',
    title: 'Typography Trends Shaping Design in 2024',
    excerpt: 'Explore the latest typography trends that are defining modern design. From variable fonts to experimental layouts.',
    content: `
      <p>Typography is experiencing a renaissance in 2024. Here are the trends shaping how we use type in design.</p>

      <h2>1. Variable Fonts</h2>
      <p>Variable fonts allow for infinite variations within a single font file. They offer flexibility in weight, width, and other attributes while keeping file sizes small.</p>

      <h2>2. Oversized Typography</h2>
      <p>Bold, large type is dominating web design. Oversized typography creates impact and improves readability on all devices.</p>

      <h2>3. Kinetic Typography</h2>
      <p>Animated text is becoming more prevalent. Subtle animations add personality and guide user attention.</p>

      <h2>4. Experimental Layouts</h2>
      <p>Designers are breaking the grid with asymmetrical layouts and overlapping text. This creates visual interest and unique brand identities.</p>

      <h2>5. Serif Renaissance</h2>
      <p>Serif fonts are making a comeback, especially in digital design. Modern serifs feel both classic and contemporary.</p>

      <h2>6. Monospace Fonts</h2>
      <p>Monospace typography is popular in tech and creative industries. It conveys precision and modernity.</p>

      <h2>7. Gradient Text</h2>
      <p>Text with gradient fills adds depth and visual interest. It's particularly effective for headlines and call-to-actions.</p>

      <h2>8. Mixing Typefaces</h2>
      <p>Combining different typefaces creates contrast and hierarchy. The key is finding complementary pairs that work together.</p>

      <h2>9. Outlined Text</h2>
      <p>Outlined or hollow text creates a modern, minimalist look. It works well for headlines and decorative elements.</p>

      <h2>10. Responsive Typography</h2>
      <p>Typography that adapts to screen size is essential. Use fluid typography with CSS clamp() for optimal readability across devices.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Maintain readability above all else</li>
        <li>Ensure sufficient contrast for accessibility</li>
        <li>Limit font families to 2-3 maximum</li>
        <li>Use a clear typographic scale</li>
        <li>Test on different devices and screen sizes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Typography trends come and go, but the fundamentals remain constant. Experiment with these trends while maintaining readability and accessibility. The best typography serves the content and enhances the user experience.</p>
    `,
    image: '/images/blog/typography-trends.jpg',
    category: 'Design Trends',
    date: 'November 1, 2024',
    readTime: '5 min read',
    author: 'TKV Creatographics Team',
    featured: false
  }
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} | TKV Creatographics Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <HeroHeader showReadingProgress={true} />
      <div className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] opacity-10"></div>
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-12 border rounded-3xl py-12 md:py-16 bg-card overflow-hidden">
            <CornerBorders />
            
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <article className="prose prose-invert max-w-none">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between py-4 border-y border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">TKV</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">Creative Team</p>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: post.title,
                            text: post.excerpt,
                            url: window.location.href,
                          })
                        }
                      }}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Featured Image Placeholder */}
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm">Featured Image</p>
                  <p className="text-xs text-muted-foreground mt-1">{post.category}</p>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">TKV</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">About {post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our creative team at TKV Creatographics brings together expertise in design, development, and digital marketing. We're passionate about sharing knowledge and helping businesses grow through effective design and marketing strategies.
                    </p>
                    <Link 
                      href="/about"
                      className="text-sm text-primary hover:underline"
                    >
                      Learn more about our team →
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Ready to Transform Your Brand?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's work together to create something amazing for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/quotation"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:border-primary/50 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug && p.category === post.category)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                      >
                        <div className="mb-3">
                          <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </article>
          </div>
        </div>
        <ModernFooter />
      </div>
    </main>
  )
}
