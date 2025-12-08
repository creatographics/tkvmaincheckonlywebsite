import { Heart, Lightbulb, Target } from '@/components/ui/icons'

export default function ContentSection() {
    return (
        <section className="pb-16 md:pb-20 px-6 lg:px-12 bg-white dark:bg-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-12">
                {/* Header & Content */}
                <div className="max-w-4xl space-y-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>About Us</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Our{" "}
                        <span className="text-gradient-primary">
                            Story
                        </span>
                        {" "}& Mission
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        TKV Creatographics is a full-service creative agency specializing in branding, graphic design, website development, and digital marketing. Based in Chennai and Pondicherry, we help businesses build meaningful brands through thoughtful design and strategy.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Our mission is to transform ideas into powerful visual experiences. We combine creativity, strategy, and technology to deliver designs that elevate brands, strengthen customer engagement, and support long-term growth.
                    </p>
                </div>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Heart,
                            title: "Purpose",
                            highlight: "We Create with",
                            description: "Craft branding, design, and digital experiences that help businesses communicate clearly and stand out."
                        },
                        {
                            icon: Lightbulb,
                            title: "Approach",
                            highlight: "Strategic Creative",
                            description: "Every project begins with research, ideas, and collaboration — ensuring alignment with your goals."
                        },
                        {
                            icon: Target,
                            title: "Results",
                            highlight: "Driven by",
                            description: "Deliver meaningful, measurable outcomes through creative design, technology, and digital solutions."
                        }
                    ].map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                <div className="space-y-4">
                                    <div className="inline-flex p-3 rounded-xl bg-primary/10">
                                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-foreground">
                                            {pillar.highlight} <span className="text-primary">{pillar.title}</span>
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                </div>
                
                {/* SEO Keywords - Visually Hidden */}
                <p className="sr-only">
                  creative agency Chennai, branding services Pondicherry, graphic design company India, website development agency Tamil Nadu, digital marketing services Chennai Pondicherry, brand identity design India, UI UX design services, logo design agency Chennai, web design company Pondicherry, creative design studio India, creative strategy Chennai, branding strategy Pondicherry, digital solutions India, marketing design services
                </p>
            </div>
        </section>
    )
}
