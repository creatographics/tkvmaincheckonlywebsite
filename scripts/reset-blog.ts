import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🗑️  Deleting all existing blog posts...')
  
  await prisma.blogPost.deleteMany({})
  
  console.log('✅ All posts deleted')
  
  console.log('📝 Creating new blog post...')
  
  const newPost = await prisma.blogPost.create({
    data: {
      title: 'The Complete Guide to Branding for Small Businesses in India (2025)',
      slug: 'branding-guide-small-business-india-2025',
      category: 'Branding',
      excerpt: 'A step-by-step branding guide for Indian startups and small businesses—covering identity, positioning, visuals, and digital presence.',
      author: 'TKV Creatographics',
      readTime: '8 min',
      featured: true,
      status: 'PUBLISHED',
      publishedAt: new Date(),
      tags: JSON.stringify(['Branding', 'Logo Design', 'Startup Branding', 'Brand Strategy', 'India Business']),
      content: `
<div class="blog-content">
  <p class="lead">Branding is the fastest way for a small business to look credible, charge better prices, and build loyal customers — especially in India where buying decisions are heavily influenced by trust, reputation, and social proof. Many small companies believe branding is only about getting a logo. But in reality, logo is just one visible part of a much bigger system.</p>

  <p>Branding is the complete experience people have with your business: how you look, how you speak, how consistent you feel, and what emotion you trigger when someone encounters you.</p>

  <blockquote>
    <p>Think of branding like a person. A logo is your face. But your brand is your personality, voice, clothing style, reputation, and the way you make people feel.</p>
  </blockquote>

  <p>If you only invest in a logo, the rest of the business "looks random." That inconsistency is what makes customers hesitate.</p>

  <p>Below is a complete, practical branding roadmap built specifically for small businesses and startups in India — whether you run a clinic, school, restaurant, salon, e-commerce store, tech startup, or service brand.</p>

  <hr>

  <h2>1. Start With Brand Clarity: Your Foundation</h2>

  <p>Before design begins, your brand must have clarity. Without clarity, every visual decision becomes guesswork.</p>

  <h3>Ask these four questions:</h3>

  <h4>1) What is your mission?</h4>
  <p>Why do you exist beyond making money? For a clinic, it may be "to provide ethical care that improves quality of life." For a café, it could be "to make authentic comfort food accessible."</p>

  <h4>2) What is your vision?</h4>
  <p>Where are you headed in 3–5 years? Example: "to become the most trusted cardiac care center in Pondicherry" or "to be India's most reliable travel planning platform."</p>

  <h4>3) What values guide your business?</h4>
  <p>These are non-negotiables like transparency, speed, empathy, innovation, or craftsmanship.</p>

  <h4>4) Who are your customers?</h4>
  <p>Be specific. "Everyone" is not a target. Define:</p>
  <ul>
    <li>age group</li>
    <li>location</li>
    <li>income level</li>
    <li>lifestyle</li>
    <li>biggest pain point</li>
    <li>buying motivator</li>
  </ul>

  <p><strong>The clearer this is, the sharper your branding becomes.</strong></p>

  <hr>

  <h2>2. Build Positioning: Your Shortcut to Relevance</h2>

  <p>India has crowded markets. Positioning is how you become the obvious choice.</p>

  <p>A strong positioning statement answers:</p>
  <ul>
    <li>What do you do?</li>
    <li>Who do you do it for?</li>
    <li>Why should they choose you over others?</li>
  </ul>

  <h3>Example:</h3>
  <p><strong>Instead of:</strong> "We provide digital marketing."<br>
  <strong>Say:</strong> "We help Chennai-based clinics grow patient appointments through SEO and social media."</p>

  <p><strong>Instead of:</strong> "We sell cosmetics."<br>
  <strong>Say:</strong> "We make dermatologist-safe skincare for sensitive Indian skin."</p>

  <blockquote>
    <p>The more specific your positioning, the less competition you face.</p>
  </blockquote>

  <hr>

  <h2>3. Create a Visual Identity That's Consistent Everywhere</h2>

  <p>A professional visual identity makes your business look bigger and more trustworthy.</p>

  <h3>Your identity system should include:</h3>

  <h4>Logo system:</h4>
  <ul>
    <li>primary logo</li>
    <li>secondary logo</li>
    <li>icon mark</li>
    <li>black/white versions</li>
    <li>horizontal + vertical versions</li>
  </ul>
  <p>This ensures your brand works on packaging, Instagram, banners, websites, and print.</p>

  <h4>Color palette:</h4>
  <p>Pick colors based on emotion + context:</p>
  <ul>
    <li><strong>blue</strong> → trust, healthcare, corporate</li>
    <li><strong>orange</strong> → energy, creativity, youth</li>
    <li><strong>green</strong> → wellness, growth, eco</li>
    <li><strong>black/gold</strong> → premium/luxury</li>
  </ul>
  <p>For Indian audiences, cultural meaning matters too (gold = premium/trust, saffron = heritage/confidence).</p>

  <h4>Typography system:</h4>
  <ul>
    <li>headline font (brand personality)</li>
    <li>paragraph font (clarity & readability)</li>
  </ul>
  <p>Fonts must stay consistent across website and social media. Random fonts look unprofessional.</p>

  <h4>Graphic language:</h4>
  <p>This is your "design style" — shapes, borders, patterns, icon style, illustration tone. It helps customers recognize your content without reading the name.</p>

  <h4>Photography direction:</h4>
  <p>Even if you use stock images, define the style:</p>
  <ul>
    <li>bright & warm</li>
    <li>minimal & premium</li>
    <li>candid & human</li>
    <li>clinical & clean</li>
  </ul>

  <hr>

  <h2>4. Apply Branding to Your Real Business Touchpoints</h2>

  <p>Branding works only when customers see it consistently.</p>

  <h3>Priority touchpoints for small businesses:</h3>
  <ul>
    <li>Website (home + services + contact)</li>
    <li>Instagram/Facebook templates</li>
    <li>Google Business Profile</li>
    <li>Business cards & brochures</li>
    <li>Packaging</li>
    <li>Store signage</li>
    <li>WhatsApp catalog / PDFs / proposals</li>
  </ul>

  <blockquote>
    <p>If visitors see your brand in 5 places and it looks consistent, trust becomes automatic.</p>
  </blockquote>

  <hr>

  <h2>5. Fix the #1 Small Business Branding Mistake: Inconsistency</h2>

  <p>Most small businesses in India suffer from this pattern:</p>
  <ul>
    <li>logo is okay</li>
    <li>Instagram uses random styles</li>
    <li>brochures use old fonts</li>
    <li>website looks unrelated</li>
    <li>tone of voice changes</li>
  </ul>

  <p><strong>This makes people feel you are "not established,"</strong> even if your work is excellent. Consistency is what makes customers say, "This business feels reliable."</p>

  <hr>

  <h2>6. Build Digital Trust (Critical in 2025)</h2>

  <p>Indian buyers research before they buy. Your branding must show trust proof.</p>

  <h3>Add:</h3>
  <ul>
    <li>real testimonials</li>
    <li>Google rating strip</li>
    <li>client logos</li>
    <li>case-study outcomes (even if not full portfolio)</li>
    <li>clear process</li>
    <li>professional email + domain</li>
    <li>WhatsApp quick connect</li>
  </ul>

  <p>Trust reduces the time between interest and purchase.</p>

  <hr>

  <h2>7. Refresh Your Brand Over Time</h2>

  <p>Branding isn't one-time. Small businesses evolve.</p>

  <p>You should consider a refresh if:</p>
  <ul>
    <li>your brand looks outdated vs competitors</li>
    <li>your audience changed</li>
    <li>your services expanded</li>
    <li>your visuals don't match your quality</li>
    <li>your business moved from local to premium</li>
  </ul>

  <p>Even small upgrades (new typography, cleaner templates, better website) can change perception instantly.</p>

  <hr>

  <h2>Final Thought</h2>

  <p><strong>Branding is not decoration — it's business strategy made visible.</strong></p>

  <p>A strong brand helps you:</p>
  <ul>
    <li>attract better customers</li>
    <li>charge premium pricing</li>
    <li>reduce marketing effort</li>
    <li>build loyalty</li>
    <li>grow faster</li>
  </ul>

  <blockquote>
    <p>If you want branding that feels premium, consistent, and built for Indian markets, a structured branding agency can save you years of trial-and-error.</p>
  </blockquote>
</div>
      `
    }
  })

  console.log('✅ New blog post created:', newPost.title)
  console.log('🎉 Blog reset complete!')
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
