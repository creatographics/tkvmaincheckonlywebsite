'use client';

import { useEffect, useState } from 'react';
import { List, ArrowRight } from '@/components/ui/icons';
import Link from 'next/link';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function BlogTableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3');
    const items: TOCItem[] = Array.from(elements).map((elem) => ({
      id: elem.id || elem.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: elem.textContent || '',
      level: parseInt(elem.tagName[1]),
    }));

    // Add IDs to headings if they don't have them
    elements.forEach((elem, index) => {
      if (!elem.id) {
        elem.id = items[index].id;
      }
    });

    setHeadings(items);

    // Track active heading on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      let currentId = '';
      elements.forEach((elem) => {
        const element = elem as HTMLElement;
        if (element.offsetTop <= scrollPosition) {
          currentId = element.id;
        }
      });
      
      if (currentId) {
        setActiveId(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <>
    <div className="space-y-4">
      {/* TOC Container */}
      <div className="border rounded-xl bg-card/50 backdrop-blur-sm shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
              <List className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Table of Contents</h3>
          </div>
        </div>
        
        {/* Navigation - Scrollable without visible scrollbar */}
        <nav className="space-y-0.5 px-3 py-3 max-h-[calc(100vh-300px)] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`relative group flex items-start gap-2.5 py-2.5 px-3 rounded-lg text-sm transition-all duration-200 ${
                  heading.level === 3 ? 'pl-8 text-xs' : ''
                } ${
                  activeId === heading.id
                    ? 'bg-primary/10 text-primary font-semibold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {/* Active indicator dot */}
                {activeId === heading.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-r-full"></span>
                )}
                
                {/* Bullet for H3 */}
                {heading.level === 3 && (
                  <span className="w-1 h-1 rounded-full bg-current opacity-50 mt-1.5 flex-shrink-0"></span>
                )}
                
                <span className="line-clamp-2 leading-snug">{heading.text}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Hiring CTA */}
        <div className="relative border rounded-lg overflow-hidden bg-card shadow-sm">
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60"></div>
          
          <div className="p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">Need Expert Help?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Transform your brand with professional design & marketing.
                </p>
              </div>
            </div>
            
            <Link 
              href="/quotation"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-200 text-sm font-medium group shadow-sm hover:shadow-md"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
    </div>
    </>
  );
}
