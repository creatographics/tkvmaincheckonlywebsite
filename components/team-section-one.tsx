'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const members = [
    { src: '', name: 'Vikramraja', role: 'CEO & Creative Director', initials: 'VR' },
    { src: '', name: 'Suman', role: 'Project Manager', initials: 'SM' },
    { src: '', name: 'Deepshikha', role: 'Marketing Lead', initials: 'DS' },
    { src: '', name: 'Bala', role: 'Senior Developer', initials: 'BL' },
    { src: '', name: 'Khooshbu', role: 'Senior Developer', initials: 'KB' },
    { src: '', name: 'Vinoth', role: 'Photographer', initials: 'VN' },
    { src: '', name: 'Rabel', role: 'Video Editor', initials: 'RB' },
    { src: '', name: 'Priya', role: 'UI/UX Designer', initials: 'PR' },
]

export default function TeamSection() {
    return (
        <section className="pb-16 md:pb-20 bg-white dark:bg-transparent">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>Our Team</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Meet Our{" "}
                        <span className="text-gradient-primary">
                            Creative
                        </span>{" "}
                        Team
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A remote-first team of designers, developers, and digital strategists collaborating to create meaningful brand experiences.
                    </p>
                </div>

                {/* Team Members Scroll */}
                <div className="relative overflow-hidden -mx-6 lg:-mx-12">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-background via-white/80 dark:via-background/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-background via-white/80 dark:via-background/80 to-transparent z-10 pointer-events-none"></div>
                    
                    <div className="flex gap-4 animate-scroll px-6 lg:px-12 py-3">
                        {[...members, ...members].map((member, index) => (
                            <div
                                key={index}
                                className="group relative flex-shrink-0 w-52">
                                <div className="relative p-5 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="relative flex flex-col items-center text-center space-y-3">
                                        {/* Avatar with glow effect */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <Avatar className="relative w-16 h-16 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                                                <AvatarImage src={member.src} alt={member.name} />
                                                <AvatarFallback className="text-base font-bold bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
                                                    {member.initials}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                        
                                        {/* Name and Role */}
                                        <div className="space-y-1.5">
                                            <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-300">
                                                {member.name}
                                            </h3>
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10">
                                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                                <p className="text-[11px] font-medium text-muted-foreground">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                    
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                
                {/* SEO Keywords */}
                <p className="sr-only">
                  creative team Chennai, remote design team India, graphic designers Pondicherry, web developers Tamil Nadu, digital marketing team Chennai, branding specialists India, photography services Chennai Pondicherry, video production team India, UI UX designers Chennai, project management team India, creative director Chennai, marketing strategists Pondicherry
                </p>
            </div>
        </section>
    )
}
