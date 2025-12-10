import { Star } from '@/components/ui/icons'

interface GoogleRatingProps {
  rating?: number
  totalRating?: number
  reviewCount?: number
  className?: string
  showText?: boolean
}

export function GoogleRating({ 
  rating = 4.9, 
  totalRating = 5.0,
  reviewCount = 150,
  className = '',
  showText = true
}: GoogleRatingProps) {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-muted-foreground/30" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          </div>
        </div>
      )
    }

    const remainingStars = totalRating - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/30" />
      )
    }

    return stars
  }

  return (
    <div className="space-y-1">
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex items-center gap-1">
          {renderStars()}
        </div>
        {showText && (
          <div className="flex items-center gap-1 text-sm">
            <span className="font-semibold text-foreground">{rating}</span>
            <span className="text-muted-foreground">/ {totalRating}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{reviewCount}+ reviews</span>
            <div className="flex items-center gap-1 ml-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs text-muted-foreground">Google</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Hidden SEO Content */}
      {showText && (
        <p className="sr-only">
          Top-rated creative agency on Google with {rating} out of 5 stars from {reviewCount}+ verified client reviews. Trusted for professional graphic design services, brand identity design, logo design, website design and development, digital marketing services, SEO optimization, social media marketing, mobile app development, photography and videography services. Excellent Google reviews for creative solutions, transparent pricing, and exceptional customer service in Chennai, Pondicherry, and across India.
        </p>
      )}
    </div>
  )
}
