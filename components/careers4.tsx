'use client'

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CornerBorders } from "@/components/ui/corner-borders";
import { JobModal } from "@/components/ui/job-modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, Users, Home, TrendingUp } from "@/components/ui/icons";

interface JobOpening {
  title: string;
  location: string;
  url: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  status?: 'new' | 'hot' | 'closed' | 'urgent' | null;
}

interface JobCategory {
  category: string;
  openings: JobOpening[];
}

interface Careers4Props {
  heading?: string;
  jobs?: JobCategory[];
  showModal?: boolean; // If false, clicking jobs will navigate to /careers
}

const Careers4 = ({
  heading = "Join Our Creative Team",
  showModal = true,
  jobs = [
    {
      category: "Creative & Design",
      openings: [
        {
          title: "Senior Graphic Designer",
          location: "Remote",
          url: "#",
          status: "new",
          description: "We're looking for a talented Senior Graphic Designer to join our creative team. You'll be responsible for creating compelling visual designs that communicate our clients' brand messages effectively across various media platforms.",
          requirements: [
            "5+ years of experience in graphic design",
            "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
            "Strong portfolio showcasing diverse design projects",
            "Excellent understanding of typography and color theory",
            "Experience with brand identity design",
            "Bachelor's degree in Graphic Design or related field"
          ],
          responsibilities: [
            "Create visual concepts and designs for various marketing materials",
            "Collaborate with clients to understand their design needs",
            "Develop brand identity systems and guidelines",
            "Ensure consistency across all design deliverables",
            "Mentor junior designers and provide creative direction",
            "Stay updated with design trends and industry best practices"
          ]
        },
        {
          title: "UI/UX Designer",
          location: "Hybrid",
          url: "#",
          status: "hot",
          description: "Join our team as a UI/UX Designer and help create intuitive, user-centered digital experiences. You'll work on web and mobile applications, conducting user research and creating wireframes, prototypes, and high-fidelity designs.",
          requirements: [
            "3+ years of UI/UX design experience",
            "Proficiency in Figma, Sketch, or Adobe XD",
            "Strong understanding of user-centered design principles",
            "Experience with user research and usability testing",
            "Knowledge of responsive design and mobile-first approach",
            "Portfolio demonstrating successful digital products"
          ],
          responsibilities: [
            "Conduct user research and analyze user behavior",
            "Create wireframes, prototypes, and user flows",
            "Design intuitive user interfaces for web and mobile",
            "Collaborate with developers to ensure design implementation",
            "Perform usability testing and iterate based on feedback",
            "Maintain design systems and component libraries"
          ]
        },
        {
          title: "Brand Identity Specialist",
          location: "On-site",
          url: "#",
          status: "closed",
          description: "We're seeking a creative Brand Identity Specialist to help our clients develop and maintain strong, cohesive brand identities. You'll work closely with our strategy team to translate brand positioning into compelling visual identities.",
          requirements: [
            "4+ years of brand identity design experience",
            "Strong conceptual thinking and creative problem-solving skills",
            "Expertise in logo design and brand system development",
            "Knowledge of brand strategy and positioning",
            "Excellent presentation and communication skills",
            "Experience working with diverse industries and client types"
          ],
          responsibilities: [
            "Develop comprehensive brand identity systems",
            "Create logos, typography, and visual brand elements",
            "Design brand guidelines and style guides",
            "Present brand concepts to clients and stakeholders",
            "Ensure brand consistency across all touchpoints",
            "Collaborate with marketing teams on brand implementation"
          ]
        },
        {
          title: "Motion Graphics Artist",
          location: "Remote",
          url: "#",
          status: "urgent",
          description: "Bring stories to life as our Motion Graphics Artist! You'll create engaging animated content for digital campaigns, social media, and video productions, combining creativity with technical expertise.",
          requirements: [
            "3+ years of motion graphics experience",
            "Proficiency in After Effects, Cinema 4D, or similar tools",
            "Strong understanding of animation principles",
            "Experience with video editing software",
            "Knowledge of 3D animation and rendering",
            "Portfolio showcasing diverse motion graphics work"
          ],
          responsibilities: [
            "Create animated graphics for video content and digital campaigns",
            "Develop motion graphics templates and assets",
            "Collaborate with video production team",
            "Ensure animations align with brand guidelines",
            "Optimize animations for various platforms and formats",
            "Stay current with motion design trends and techniques"
          ]
        },
      ],
    },
    {
      category: "Development & Marketing",
      openings: [
        {
          title: "Frontend Developer",
          location: "Remote",
          url: "#",
          description: "Join our development team as a Frontend Developer and help build amazing web experiences. You'll work with modern technologies to create responsive, performant, and accessible websites and applications.",
          requirements: [
            "3+ years of frontend development experience",
            "Proficiency in HTML, CSS, JavaScript, and TypeScript",
            "Experience with React, Next.js, or similar frameworks",
            "Knowledge of responsive design and CSS frameworks",
            "Understanding of version control (Git) and CI/CD",
            "Familiarity with design systems and component libraries"
          ],
          responsibilities: [
            "Develop responsive web applications using modern frameworks",
            "Collaborate with designers to implement pixel-perfect UIs",
            "Optimize applications for performance and accessibility",
            "Write clean, maintainable, and well-documented code",
            "Participate in code reviews and technical discussions",
            "Stay updated with latest frontend technologies and best practices"
          ]
        },
        {
          title: "Digital Marketing Specialist",
          location: "Hybrid",
          url: "#",
          description: "Drive digital growth as our Digital Marketing Specialist! You'll develop and execute comprehensive digital marketing strategies across multiple channels to help our clients achieve their business objectives.",
          requirements: [
            "3+ years of digital marketing experience",
            "Proficiency in Google Analytics, Google Ads, and social media platforms",
            "Experience with SEO/SEM and content marketing",
            "Knowledge of marketing automation tools",
            "Strong analytical skills and data-driven mindset",
            "Excellent written and verbal communication skills"
          ],
          responsibilities: [
            "Develop and execute digital marketing campaigns",
            "Manage social media accounts and content calendars",
            "Analyze campaign performance and optimize for better results",
            "Conduct keyword research and SEO optimization",
            "Create engaging content for various digital channels",
            "Collaborate with design team on marketing materials"
          ]
        },
        {
          title: "Content Strategist",
          location: "Remote",
          url: "#",
          description: "Shape brand narratives as our Content Strategist! You'll develop comprehensive content strategies that engage audiences, build brand awareness, and drive meaningful connections between our clients and their customers.",
          requirements: [
            "4+ years of content strategy experience",
            "Excellent writing and editing skills",
            "Experience with content management systems",
            "Knowledge of SEO and content optimization",
            "Understanding of brand voice and tone development",
            "Portfolio showcasing diverse content projects"
          ],
          responsibilities: [
            "Develop comprehensive content strategies for clients",
            "Create editorial calendars and content plans",
            "Write and edit various types of content",
            "Collaborate with design and marketing teams",
            "Analyze content performance and optimize strategies",
            "Ensure brand consistency across all content touchpoints"
          ]
        },
      ],
    },
  ],
}: Careers4Props) => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<JobOpening & { category: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJobClick = (job: JobOpening, category: string) => {
    if (showModal) {
      setSelectedJob({ ...job, category });
      setIsModalOpen(true);
    } else {
      router.push('/careers');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto space-y-3 px-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>Join Us</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-gradient-primary">
                Careers
              </span>
              {" "}at TKV Creatographics
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Join our creative team of designers, developers, and marketing professionals. We're always looking for passionate talent to build meaningful digital experiences.
            </p>
          </div>
          
          {/* Benefits - Compact */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { icon: Globe, label: "Global Brands" },
              { icon: Users, label: "Creative Culture" },
              { icon: Home, label: "Remote Friendly" },
              { icon: TrendingUp, label: "Growth" }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                  <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                  <span className="text-xs font-medium text-foreground">{benefit.label}</span>
                </div>
              );
            })}
          </div>
          {/* Job Listings */}
          <div className="max-w-5xl mx-auto space-y-12">
            {jobs.map((jobCategory, categoryIndex) => (
              <div key={jobCategory.category}>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-1">{jobCategory.category}</h2>
                  <p className="text-xs text-muted-foreground">Explore opportunities in {jobCategory.category.toLowerCase()}</p>
                </div>
                <div className="border border-border/60 rounded-xl overflow-hidden bg-card">
                  {jobCategory.openings.map((job, index) => (
                    <div
                      key={job.title}
                      onClick={() => handleJobClick(job, jobCategory.category)}
                      className="group relative flex items-start gap-3.5 p-4 hover:bg-muted/40 border-b border-border/50 last:border-b-0 transition-all duration-200 cursor-pointer"
                    >
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors mb-1.5">
                              {job.title}
                            </h3>
                            <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-1 mb-2">
                              {job.description}
                            </p>
                          </div>
                          
                          {/* Status Badge - Top Right */}
                          {job.status && (
                            <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
                              job.status === 'new' ? 'bg-green-500/10 text-green-600 border border-green-500/20' :
                              job.status === 'hot' ? 'bg-orange-500/10 text-orange-600 border border-orange-500/20' :
                              job.status === 'urgent' ? 'bg-red-500/10 text-red-600 border border-red-500/20' :
                              job.status === 'closed' ? 'bg-gray-500/10 text-gray-500 border border-gray-500/20' :
                              ''
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                job.status === 'new' ? 'bg-green-500' :
                                job.status === 'hot' ? 'bg-orange-500 animate-pulse' :
                                job.status === 'urgent' ? 'bg-red-500' :
                                job.status === 'closed' ? 'bg-gray-500' :
                                ''
                              }`}></div>
                              {job.status}
                            </span>
                          )}
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex items-center flex-wrap gap-2.5 text-xs">
                          {/* Location */}
                          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-medium text-foreground">{job.location}</span>
                          </span>
                          
                          <span className="w-1 h-1 rounded-full bg-border"></span>
                          
                          {/* Category Badge */}
                          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium ${
                            jobCategory.category === 'Creative & Design' ? 'bg-primary/10 text-primary' : 'bg-purple-500/10 text-purple-600'
                          }`}>
                            {jobCategory.category === 'Creative & Design' ? 'Design' : 'Development'}
                          </span>
                          
                          <span className="w-1 h-1 rounded-full bg-border"></span>
                          
                          {/* Requirements */}
                          <span className="text-muted-foreground">
                            {job.requirements.length} requirements
                          </span>
                          
                          <span className="w-1 h-1 rounded-full bg-border"></span>
                          
                          {/* Responsibilities */}
                          <span className="text-muted-foreground">
                            {job.responsibilities.length} responsibilities
                          </span>
                        </div>
                      </div>
                      
                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <svg className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="max-w-5xl mx-auto mt-10 sm:mt-16 px-2">
            <div className="relative border rounded-xl p-4 sm:p-6 md:p-8 bg-gradient-to-br from-card to-muted/30 text-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-xl" data-component-name="Careers4"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Don't see a role that fits?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <div className="flex items-center justify-center">
                  <ShimmerButton 
                    onClick={() => window.location.href = 'mailto:careers@tkvcreatographics.com?subject=Resume Submission'}
                    className="h-10 px-6 text-sm w-full sm:w-auto"
                  >
                    Send Resume
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEO Keywords - Visually Hidden */}
      <p className="sr-only">
        creative careers Chennai, design jobs Pondicherry, developer jobs India, digital marketing careers Tamil Nadu, UI UX designer jobs Chennai, graphic designer jobs India, frontend developer careers Chennai Pondicherry, content strategist jobs India, motion graphics jobs Chennai, brand designer careers Pondicherry, remote creative jobs India
      </p>
      
      {showModal && selectedJob && (
        <JobModal
          isOpen={isModalOpen}
          onClose={closeModal}
          job={selectedJob}
        />
      )}
    </section>
  );
};

export { Careers4 };
