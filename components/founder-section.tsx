export default function FounderSection() {
    return (
        <section className="pb-16 md:pb-20 relative overflow-hidden bg-white dark:bg-transparent">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
            
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center">
                    {/* Left - Modern Author Card */}
                    <div className="relative">
                        <div className="sticky top-24">
                            <div className="relative group">
                                {/* Decorative Background */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative space-y-6">
                                    {/* Avatar with Quote */}
                                    <div className="relative inline-block">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                                            <span className="text-4xl font-bold text-primary">V</span>
                                        </div>
                                        {/* Floating Quote Mark */}
                                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <span className="text-xl font-serif text-primary">"</span>
                                        </div>
                                    </div>
                                    
                                    {/* Author Info */}
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-foreground mb-1">Vikramraja</h3>
                                            <p className="text-sm text-primary font-medium">CEO & Founder</p>
                                        </div>
                                        
                                        {/* Divider Line */}
                                        <div className="flex items-center gap-2">
                                            <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                                            <div className="h-[2px] w-4 bg-primary/30 rounded-full"></div>
                                        </div>
                                        
                                        {/* Company Badge */}
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                            <span className="text-xs font-medium text-muted-foreground">TKV Creatographics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right - Enhanced Quote Content */}
                    <div className="space-y-8">
                        {/* Main Quote */}
                        <blockquote className="space-y-6 relative">
                            {/* Decorative Quote Background */}
                            <div className="absolute -left-4 top-0 text-[120px] font-serif text-primary/5 leading-none select-none">"</div>
                            
                            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-foreground relative">
                                We believe in long-term partnerships built on{" "}
                                <span className="relative inline-block font-semibold text-primary group/word">
                                    creativity
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30"></span>
                                </span>
                                ,{" "}
                                <span className="relative inline-block font-semibold text-primary group/word">
                                    trust
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30"></span>
                                </span>
                                , and{" "}
                                <span className="relative inline-block font-semibold text-primary group/word">
                                    measurable results
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30"></span>
                                </span>
                                .
                            </p>
                            
                            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground/80">
                                At TKV Creatographics, our goal is to help brands grow through thoughtful design and digital innovation.
                            </p>
                        </blockquote>
                        
                        {/* Philosophy Badge */}
                        <div className="flex items-center gap-4 pt-6">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-xs uppercase tracking-wider text-primary font-semibold">Our Philosophy</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
