import { Target, Heart, Lightbulb, Users } from '@/components/ui/icons'

export default function MissionCultureSection() {
  return (
    <section className="pb-16 md:pb-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Mission & Culture
          </h2>
          <p className="text-muted-foreground">
            Creating meaningful designs that inspire, connect, and elevate brands.
          </p>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "Help businesses grow through thoughtful design, strategic creativity, and digital innovation that delivers real results.",
              iconColor: "text-blue-500",
              bgColor: "bg-blue-50 dark:bg-blue-500/10"
            },
            {
              icon: Heart,
              title: "Our Passion",
              description: "Every project is crafted with passion, intention, and purpose — delivering work we're proud of.",
              iconColor: "text-red-500",
              bgColor: "bg-red-50 dark:bg-red-500/10"
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "We embrace experimentation and continuous learning to stay ahead in the creative industry.",
              iconColor: "text-yellow-500",
              bgColor: "bg-yellow-50 dark:bg-yellow-500/10"
            },
            {
              icon: Users,
              title: "Collaboration",
              description: "Teamwork and trust power every project, ensuring holistic, high-quality solutions.",
              iconColor: "text-green-500",
              bgColor: "bg-green-50 dark:bg-green-500/10"
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="break-inside-avoid mb-4 group"
              >
                <div className="rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-lg ${value.bgColor} mb-4`}>
                    <Icon className={`w-6 h-6 ${value.iconColor}`} strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* SEO Keywords */}
        <p className="sr-only">
          creative agency mission Chennai, design culture Pondicherry, branding philosophy India, creative values Tamil Nadu, design thinking Chennai Pondicherry, strategic creativity India, digital innovation mission, collaborative design culture, meaningful brand design, thoughtful design approach Chennai, creative agency values Pondicherry India
        </p>
      </div>
    </section>
  )
}
