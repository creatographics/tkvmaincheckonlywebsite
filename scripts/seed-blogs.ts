import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const blogPosts = [
  {
    title: 'The Future of Web Design: Trends to Watch in 2024',
    slug: 'future-of-web-design-2024',
    excerpt: 'Explore the cutting-edge web design trends that are shaping the digital landscape in 2024, from AI-powered interfaces to immersive 3D experiences.',
    content: `<h2>Introduction</h2><p>The world of web design is constantly evolving, and 2024 brings exciting new trends that are reshaping how we create digital experiences. From AI-powered design tools to immersive 3D interfaces, the future of web design is here.</p><h2>Key Trends</h2><p>1. AI-Powered Design Tools<br>2. Immersive 3D Experiences<br>3. Dark Mode by Default<br>4. Micro-interactions<br>5. Voice User Interfaces</p><h2>Conclusion</h2><p>Staying ahead of these trends will help your business create modern, engaging websites that captivate users and drive results.</p>`,
    category: 'Web Design',
    author: 'Priya Sharma',
    readTime: '8 min read',
    featured: true,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-20'),
    tags: '["web design", "trends", "2024", "UI/UX"]',
  },
  {
    title: 'How to Build a Strong Brand Identity for Your Business',
    slug: 'build-strong-brand-identity',
    excerpt: 'Learn the essential steps to create a memorable brand identity that resonates with your target audience and sets you apart from competitors.',
    content: `<h2>What is Brand Identity?</h2><p>Brand identity is the collection of all elements that a company creates to portray the right image to its consumer. It's more than just a logo – it's the complete visual and emotional representation of your business.</p><h2>Key Components</h2><p>1. Logo Design<br>2. Color Palette<br>3. Typography<br>4. Brand Voice<br>5. Visual Style</p><h2>Building Your Brand</h2><p>Start by understanding your target audience, defining your brand values, and creating consistent visual elements across all touchpoints.</p>`,
    category: 'Branding',
    author: 'Rajesh Kumar',
    readTime: '6 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-18'),
    tags: '["branding", "brand identity", "logo design", "marketing"]',
  },
  {
    title: 'Digital Marketing Strategies That Actually Work in 2024',
    slug: 'digital-marketing-strategies-2024',
    excerpt: 'Discover proven digital marketing strategies that deliver real results, from SEO optimization to social media engagement.',
    content: `<h2>The Digital Marketing Landscape</h2><p>Digital marketing continues to evolve rapidly. In 2024, success requires a multi-channel approach that combines SEO, content marketing, social media, and paid advertising.</p><h2>Effective Strategies</h2><p>1. Content Marketing Excellence<br>2. SEO Optimization<br>3. Social Media Engagement<br>4. Email Marketing Automation<br>5. Video Marketing</p><h2>Measuring Success</h2><p>Track your ROI, engagement metrics, and conversion rates to continuously optimize your campaigns.</p>`,
    category: 'Digital Marketing',
    author: 'Amit Patel',
    readTime: '7 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-15'),
    tags: '["digital marketing", "SEO", "social media", "content marketing"]',
  },
  {
    title: 'The Complete Guide to UI/UX Design Best Practices',
    slug: 'ui-ux-design-best-practices',
    excerpt: 'Master the fundamentals of UI/UX design with this comprehensive guide covering user research, wireframing, prototyping, and testing.',
    content: `<h2>Understanding UI/UX</h2><p>UI (User Interface) and UX (User Experience) design are crucial for creating digital products that users love. Great design is invisible – it just works.</p><h2>Best Practices</h2><p>1. User-Centered Design<br>2. Consistency Across Platforms<br>3. Clear Navigation<br>4. Responsive Design<br>5. Accessibility First</p><h2>Design Process</h2><p>Follow a structured process: Research → Wireframe → Prototype → Test → Iterate.</p>`,
    category: 'UI/UX Design',
    author: 'Sneha Reddy',
    readTime: '10 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-12'),
    tags: '["UI/UX", "user experience", "design", "prototyping"]',
  },
  {
    title: 'SEO in 2024: What You Need to Know',
    slug: 'seo-guide-2024',
    excerpt: 'Stay ahead of the curve with the latest SEO strategies and algorithm updates that will boost your search rankings in 2024.',
    content: `<h2>The Evolution of SEO</h2><p>Search engine optimization has evolved from keyword stuffing to creating valuable, user-focused content that answers real questions.</p><h2>2024 SEO Priorities</h2><p>1. Core Web Vitals<br>2. E-A-T (Expertise, Authority, Trust)<br>3. Mobile-First Indexing<br>4. Voice Search Optimization<br>5. Quality Content</p><h2>Technical SEO</h2><p>Don't forget the technical aspects: site speed, structured data, XML sitemaps, and proper URL structure.</p>`,
    category: 'SEO',
    author: 'Vikram Singh',
    readTime: '9 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-10'),
    tags: '["SEO", "search engine optimization", "Google", "rankings"]',
  },
  {
    title: 'Social Media Marketing: A Complete Strategy Guide',
    slug: 'social-media-marketing-strategy',
    excerpt: 'Build a winning social media strategy that engages your audience, builds brand awareness, and drives conversions across all platforms.',
    content: `<h2>Why Social Media Matters</h2><p>Social media is no longer optional for businesses. It's where your customers are, and it's where conversations about your brand happen.</p><h2>Platform Strategy</h2><p>1. Instagram: Visual storytelling<br>2. LinkedIn: B2B networking<br>3. Facebook: Community building<br>4. Twitter: Real-time engagement<br>5. TikTok: Short-form video</p><h2>Content Planning</h2><p>Create a content calendar, maintain consistency, and engage authentically with your audience.</p>`,
    category: 'Social Media',
    author: 'Kavya Menon',
    readTime: '8 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-08'),
    tags: '["social media", "Instagram", "Facebook", "marketing"]',
  },
  {
    title: 'Logo Design 101: Creating Memorable Brand Marks',
    slug: 'logo-design-guide',
    excerpt: 'Learn the principles of effective logo design and how to create a memorable brand mark that stands the test of time.',
    content: `<h2>The Power of a Great Logo</h2><p>A logo is often the first thing people notice about your brand. It needs to be memorable, scalable, and timeless.</p><h2>Design Principles</h2><p>1. Simplicity<br>2. Memorability<br>3. Timelessness<br>4. Versatility<br>5. Appropriateness</p><h2>The Design Process</h2><p>Start with research, sketch multiple concepts, refine your favorites, and test in various contexts before finalizing.</p>`,
    category: 'Graphic Design',
    author: 'Arjun Nair',
    readTime: '6 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-05'),
    tags: '["logo design", "graphic design", "branding", "visual identity"]',
  },
  {
    title: 'Content Marketing: Creating Content That Converts',
    slug: 'content-marketing-guide',
    excerpt: 'Discover how to create compelling content that attracts, engages, and converts your target audience into loyal customers.',
    content: `<h2>Content is King</h2><p>Quality content is the foundation of digital marketing. It attracts visitors, builds trust, and drives conversions.</p><h2>Content Types</h2><p>1. Blog Posts<br>2. Videos<br>3. Infographics<br>4. Podcasts<br>5. Case Studies</p><h2>Content Strategy</h2><p>Understand your audience, create valuable content, optimize for search, and promote across channels.</p>`,
    category: 'Content Marketing',
    author: 'Meera Krishnan',
    readTime: '7 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-03'),
    tags: '["content marketing", "blogging", "content strategy", "SEO"]',
  },
  {
    title: 'Mobile App Design: Best Practices for 2024',
    slug: 'mobile-app-design-best-practices',
    excerpt: 'Create intuitive and engaging mobile app experiences with these essential design principles and best practices.',
    content: `<h2>Mobile-First Design</h2><p>With mobile usage surpassing desktop, designing great mobile experiences is more important than ever.</p><h2>Key Principles</h2><p>1. Touch-Friendly Interface<br>2. Intuitive Navigation<br>3. Fast Loading Times<br>4. Offline Functionality<br>5. Personalization</p><h2>Design Considerations</h2><p>Consider screen sizes, gestures, performance, and platform-specific guidelines (iOS vs Android).</p>`,
    category: 'App Development',
    author: 'Karthik Iyer',
    readTime: '9 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-11-01'),
    tags: '["app development", "mobile design", "UI/UX", "iOS", "Android"]',
  },
  {
    title: 'Video Marketing: Engaging Your Audience Through Visual Storytelling',
    slug: 'video-marketing-guide',
    excerpt: 'Harness the power of video marketing to tell your brand story, engage viewers, and drive meaningful business results.',
    content: `<h2>The Rise of Video</h2><p>Video content is dominating digital marketing. It's more engaging, memorable, and shareable than any other content format.</p><h2>Video Types</h2><p>1. Explainer Videos<br>2. Product Demos<br>3. Customer Testimonials<br>4. Behind-the-Scenes<br>5. Live Streams</p><h2>Production Tips</h2><p>Focus on storytelling, keep it concise, optimize for mobile viewing, and include clear calls-to-action.</p>`,
    category: 'Video Marketing',
    author: 'Deepak Sharma',
    readTime: '8 min read',
    featured: false,
    status: 'PUBLISHED',
    publishedAt: new Date('2024-10-28'),
    tags: '["video marketing", "video production", "storytelling", "content"]',
  },
]

async function main() {
  console.log('🌱 Seeding blog posts...')

  for (const post of blogPosts) {
    const created = await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    })
    console.log(`✅ Created/Updated: ${created.title}`)
  }

  console.log('✨ Blog seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding blogs:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
