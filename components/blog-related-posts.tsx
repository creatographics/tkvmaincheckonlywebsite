import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from '@/components/ui/icons';

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogRelatedPostsProps {
  currentCategory: string;
  currentSlug: string;
}

async function getRelatedPosts(category: string, currentSlug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs?category=${category}&limit=10`, {
      cache: 'no-store'
    });
    
    if (!response.ok) return [];
    
    const data = await response.json();
    
    // Handle both old format (array) and new format (object with blogs array)
    const blogs = Array.isArray(data) ? data : (data.blogs || []);
    
    return blogs
      .filter((blog: any) => blog.slug !== currentSlug)
      .slice(0, 3);
  } catch (error) {
    return [];
  }
}

export async function BlogRelatedPosts({ currentCategory, currentSlug }: BlogRelatedPostsProps) {
  const relatedPosts = await getRelatedPosts(currentCategory, currentSlug);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t">
      <h2 className="text-2xl font-semibold text-foreground mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post: RelatedPost) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-3">
              <span className="text-xs font-medium text-primary">{post.category}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
