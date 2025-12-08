// Blog category to Unsplash image mapping
export const getBlogImageUrl = (category: string, title: string): string => {
  const categoryImages: Record<string, string> = {
    'Branding': 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
    'Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    'Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'Web Development': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
    'SEO': 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
    'Social Media': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    'Content Marketing': 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=600&fit=crop',
    'Business': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop',
    'Technology': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    'Tips': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
  }

  return categoryImages[category] || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop'
}
