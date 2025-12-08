import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('📝 Updating blog posts with full content...')

  // Get all blog IDs and slugs
  const blogs = await prisma.blogPost.findMany({
    select: { id: true, slug: true }
  })

  const updates = blogs.map(blog => {
    let content = ''
    
    switch(blog.slug) {
      case 'business-needs-website-2025':
        content = `<div class="blog-content">
  <p class="lead">Instagram is powerful for attention, but attention doesn't equal trust. In 2025, customers want proof — and the fastest proof is a professional website. Even businesses that get most leads from WhatsApp or social media lose customers when they don't have a clean digital home.</p>

  <p>Let's break down why a website is essential today and how it directly affects revenue, credibility, and growth.</p>

  <hr>

  <h2>1. Customers Google You (Even If They Find You on Instagram)</h2>

  <p>Indian customers compare before buying. If they see a reel and like your work, within minutes they type your name into Google.</p>

  <h3>What happens if there's no website?</h3>
  <ul>
    <li>they find only social pages</li>
    <li>they see inconsistent information</li>
    <li>they hesitate</li>
    <li>they move to a competitor with a website</li>
  </ul>

  <blockquote>
    <p>A website is your validation stamp.</p>
  </blockquote>

  <hr>

  <h2>2. Websites Convert Better Than Social Platforms</h2>

  <p>Social media is designed for scrolling, not decision-making. A website allows you to guide users through a conversion journey:</p>

  <ul>
    <li>Clear headline</li>
    <li>Proof (clients, testimonials, outcomes)</li>
    <li>Detailed services</li>
    <li>FAQ to remove objections</li>
    <li>Strong CTA buttons</li>
    <li>Lead forms</li>
  </ul>

  <blockquote>
    <p>A good website is a 24/7 sales rep.</p>
  </blockquote>

  <hr>

  <h2>3. You Own Your Website — You Don't Own Social Media</h2>

  <p>Instagram reach fluctuates with algorithms. A platform update can cut your visibility overnight.</p>

  <p>Your website is:</p>
  <ul>
    <li>yours</li>
    <li>stable</li>
    <li>customizable</li>
    <li>always accessible</li>
  </ul>

  <p>It's the only digital asset you control completely.</p>

  <hr>

  <h2>4. SEO Brings Free Long-Term Leads</h2>

  <p>A website optimized for SEO can bring consistent leads without ads.</p>

  <h3>Example searches people do daily:</h3>
  <ul>
    <li>"graphic design company in Chennai"</li>
    <li>"branding agency Pondicherry"</li>
    <li>"clinic website designers"</li>
    <li>"logo design services India"</li>
  </ul>

  <p>Ranking for these keywords can bring clients for years.</p>

  <p><strong>SEO is almost impossible using only social media.</strong></p>

  <hr>

  <h2>5. A Website Makes You Look Established</h2>

  <p>In India, perceived scale matters. A small business with a great website feels corporate. A bigger business without one feels unstable.</p>

  <blockquote>
    <p>A website creates premium perception quickly.</p>
  </blockquote>

  <hr>

  <h2>6. Websites Build Trust With Structure</h2>

  <p>Trust is built through clarity. A good site provides:</p>
  <ul>
    <li>Who you are</li>
    <li>What you offer</li>
    <li>Why you're different</li>
    <li>What results you've achieved</li>
    <li>How to contact you</li>
  </ul>

  <p>Social media is fragmented; websites are structured.</p>

  <hr>

  <h2>7. It Applies to Every Industry</h2>

  <ul>
    <li><strong>Clinics/hospitals:</strong> patients want doctor info, services, booking</li>
    <li><strong>Schools/colleges:</strong> parents want credibility + admissions clarity</li>
    <li><strong>Restaurants:</strong> menu + location + reviews</li>
    <li><strong>Salons:</strong> service list + booking + gallery</li>
    <li><strong>Startups:</strong> proof of innovation + credibility for investors</li>
  </ul>

  <hr>

  <h2>8. What a 2025 Website Must Include</h2>

  <p>If you're building a site now, it must be:</p>

  <h4>Mobile-first</h4>
  <p>Most India traffic is mobile.</p>

  <h4>Fast loading (under 3 seconds)</h4>
  <p>Speed affects trust and ranking.</p>

  <h4>WhatsApp quick connect</h4>
  <p>The shortest path to conversion.</p>

  <h4>Clear service blocks</h4>
  <p>Not vague "we do everything."</p>

  <h4>Trust indicators</h4>
  <p>Ratings, reviews, clients, outcomes.</p>

  <h4>SEO structure</h4>
  <p>H1/H2 headings, service keywords, local SEO.</p>

  <hr>

  <h2>9. Website + Social Media = Growth Loop</h2>

  <p>This is the best combo:</p>
  <ul>
    <li>Instagram attracts attention</li>
    <li>Website builds trust</li>
    <li>WhatsApp converts</li>
    <li>Website SEO brings repeat inbound leads</li>
  </ul>

  <p>A business using all three grows faster than one using only one channel.</p>

  <hr>

  <h2>Final Thought</h2>

  <p><strong>A professional website is not "extra marketing." It's your main credibility and conversion system.</strong></p>

  <p>If your business quality is strong, your website should communicate it clearly. The right website pays for itself through leads, better customers, and premium positioning.</p>
</div>`
        break

      case 'website-design-cost-india-breakdown':
        content = `<div class="blog-content">
  <p class="lead">If you've searched "website design cost in India," you've probably seen everything from ₹5,000 websites to ₹5,00,000 websites. That huge range isn't a scam by default — it reflects how different businesses need very different levels of strategy, design, features, and performance.</p>

  <p>The problem is: most pricing discussions online are vague. This guide breaks down website costs in India in a way that helps you make a smart decision.</p>

  <hr>

  <h2>Why website pricing varies so much</h2>

  <p>A website isn't one product. It's a bundle of services: planning, UI/UX, development, content, SEO structure, performance optimization, integrations, and ongoing support.</p>

  <p>The more of these you need, the higher the cost — but also the higher the return.</p>

  <hr>

  <h2>1. Website type (biggest price factor)</h2>

  <h4>Basic Business Website (5–7 pages):</h4>
  <p>Best for clinics, schools, interiors, startups, consultants, restaurants.</p>
  <p>Includes homepage, about, services, works, contact, and maybe a small blog.</p>
  <p><strong>Cost range: ₹15,000 – ₹45,000</strong> depending on design level.</p>

  <h4>Custom Business Website (conversion-focused):</h4>
  <p>Built for leads and strong branding. Includes custom UI/UX, strong SEO structure, and performance tuning.</p>
  <p><strong>Cost range: ₹50,000 – ₹1,50,000.</strong></p>

  <h4>E-commerce Website:</h4>
  <p>Product catalog, checkout, payment gateways, shipping rules, tax, discount systems, order tracking.</p>
  <p><strong>Cost range: ₹1,20,000 – ₹5,00,000+.</strong></p>
  <p>(High variance because inventory size + custom features change scope.)</p>

  <h4>Web Apps / Portals:</h4>
  <p>Dashboards, booking portals, CRM-style systems, role-based access, analytics.</p>
  <p><strong>Cost range: ₹3,00,000+.</strong></p>
  <p>These are software builds rather than simple websites.</p>

  <hr>

  <h2>2. Design level: template vs custom UI/UX</h2>

  <p>Template websites are cheaper because design decisions already exist. You're paying for setup, basic customization, and deployment.</p>

  <p>Custom UI/UX websites cost more because your brand, user flow, content hierarchy, and conversion logic are designed from scratch.</p>

  <blockquote>
    <p>Custom doesn't mean "fancy." It means your site is built to fit your market, audience, and goal — leading to higher engagement and more leads.</p>
  </blockquote>

  <hr>

  <h2>3. Features and integrations</h2>

  <p>Each extra feature adds effort:</p>
  <ul>
    <li>Appointment booking</li>
    <li>WhatsApp or chat automation</li>
    <li>Payment gateway</li>
    <li>Admin dashboard</li>
    <li>Multi-language</li>
    <li>Blog CMS with categories/search</li>
    <li>File uploads</li>
    <li>CRM integration</li>
    <li>Marketing tools (Meta Pixel, GA4, etc.)</li>
  </ul>

  <p>A good agency will list these as line items so you know what you're paying for.</p>

  <hr>

  <h2>4. Content + SEO setup</h2>

  <p>A website without SEO structure is like a shop without a signboard.</p>

  <p>SEO setup includes:</p>
  <ul>
    <li>keyword planning</li>
    <li>H1/H2 hierarchy</li>
    <li>metadata</li>
    <li>internal linking</li>
    <li>schema markup</li>
    <li>sitemap/robots</li>
    <li>speed + accessibility best practices</li>
  </ul>

  <p>If you want your site to bring leads from Google, this part is worth paying for.</p>

  <hr>

  <h2>5. Performance and security</h2>

  <p>Fast sites convert better and rank higher.</p>

  <h3>Performance work includes:</h3>
  <ul>
    <li>image optimization</li>
    <li>clean code</li>
    <li>lazy loading</li>
    <li>caching</li>
    <li>CDN setup</li>
    <li>Core Web Vitals tuning</li>
  </ul>

  <h3>Security work includes:</h3>
  <p>secure forms, validation, rate limiting, and basic hardening.</p>

  <hr>

  <h2>Typical 2025 price bands (India)</h2>

  <ul>
    <li><strong>Starter website:</strong> ₹15k–₹45k</li>
    <li><strong>Professional business site:</strong> ₹50k–₹1.5L</li>
    <li><strong>E-commerce:</strong> ₹1.2L–₹5L</li>
    <li><strong>Custom portals/apps:</strong> ₹3L+</li>
  </ul>

  <hr>

  <h2>How to choose the right package</h2>

  <p>Pick based on business goal:</p>
  <ul>
    <li><strong>Credibility goal:</strong> starter/professional site is enough.</li>
    <li><strong>Lead generation goal:</strong> you need conversion UI/UX + SEO.</li>
    <li><strong>Sales goal:</strong> e-commerce with proper UX and performance.</li>
  </ul>

  <hr>

  <h2>Red flags to avoid</h2>

  <ul>
    <li>price too low with no scope clarity</li>
    <li>no mobile-first plan</li>
    <li>no SEO structure</li>
    <li>no performance guarantees</li>
    <li>"unlimited revisions" without timeline control</li>
  </ul>

  <p><strong>Cheap websites often become expensive later when you rebuild.</strong></p>

  <hr>

  <h2>Smart way to budget</h2>

  <p>If your business earns from leads/sales, treat your website as an investment.</p>

  <blockquote>
    <p>A ₹1L website that brings 10 solid leads a month pays back quickly; a ₹20k website that brings none is a loss.</p>
  </blockquote>

  <p><strong>A great website doesn't just look good — it works 24/7 to generate trust and growth.</strong></p>
</div>`
        break
        
      default:
        return null
    }
    
    if (content) {
      return prisma.blogPost.update({
        where: { id: blog.id },
        data: { content }
      })
    }
    return null
  })

  const results = await Promise.all(updates.filter(u => u !== null))
  console.log(`✅ Updated ${results.length} blog posts with full content`)
  console.log('🎉 Done!')
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
