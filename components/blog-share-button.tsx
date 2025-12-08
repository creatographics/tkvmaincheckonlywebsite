'use client';

import { Share2 } from '@/components/ui/icons';
import { useState } from 'react';

export function BlogShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.log('Error copying:', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
    >
      <Share2 className="w-4 h-4" />
      <span>{copied ? 'Copied!' : 'Share'}</span>
    </button>
  );
}
