import { PlusIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { GoogleRating } from '@/components/ui/google-rating';

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const clientLogos: Logo[] = [
  { src: "/images/clientlogos/Datanimbus.png", alt: "Client logo – Datanimbus" },
  { src: "/images/clientlogos/Naturals.png", alt: "Client logo – Naturals" },
  { src: "/images/clientlogos/Genesis.png", alt: "Client logo – Genesis" },
  { src: "/images/clientlogos/Paloalto.png", alt: "Client logo – Paloalto" },
  { src: "/images/clientlogos/Kinesis.png", alt: "Client logo – Kinesis" },
  { src: "/images/clientlogos/Avana.png", alt: "Client logo – Avana" },
  { src: "/images/clientlogos/Medicub.png", alt: "Client logo – Medicub" },
  { src: "/images/clientlogos/Emmbi.png", alt: "Client logo – Emmbi" },
];

export function HomeLogoCloud() {
  return (
    <section className="pt-20 md:pt-24 pb-0 relative overflow-hidden bg-white dark:bg-transparent">

      <div className="text-center mb-16 max-w-4xl mx-auto px-6 sm:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <span>Client Success</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
          Trusted by{' '}
          <span className="text-gradient-primary">
            Leading Brands
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
          Brands worldwide trust our design, branding, web, and digital marketing expertise.
        </p>

        {/* Rating Section */}
        <div className="flex flex-col items-center gap-3" data-component-name="HomeLogoCloud">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm" data-component-name="HomeLogoCloud">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-background border shadow-sm" data-component-name="HomeLogoCloud">
              <span className="text-xl sm:text-2xl font-bold text-foreground">4.9</span>
              <div className="h-5 sm:h-6 w-px bg-border"></div>
              <span className="text-xs sm:text-sm text-muted-foreground">Google rating</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-background border shadow-sm">
              <span className="text-xl sm:text-2xl font-bold text-foreground">200+</span>
              <div className="h-5 sm:h-6 w-px bg-border"></div>
              <span className="text-xs sm:text-sm text-muted-foreground">Clients</span>
            </div>
          </div>
          <GoogleRating className="justify-center" />
        </div>
      </div>
        
        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden py-12 border-t border-border/40">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-16 animate-scroll">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center px-4 h-10">
                <img
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 dark:brightness-0 dark:invert pointer-events-none select-none"
                  src={logo.src}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* SEO Keywords - Visually Hidden */}
        <p className="sr-only">
          Trusted by leading brands across India for professional graphic design services, branding and identity design, website design and development, digital marketing services, SEO optimization, social media marketing, creative agency Chennai, design studio Pondicherry, web development company India, UI/UX design services, brand strategy, logo design, e-commerce development, app development, photography services, videography services, content marketing, PPC advertising, trusted creative partner for businesses in Chennai, Pondicherry, Tamil Nadu, and across India.
        </p>
    </section>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8 group",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-8 select-none md:h-10 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
        height={logo.height || 40}
        src={logo.src}
        width={logo.width || 120}
        draggable={false}
      />
      {children}
    </div>
  );
}
