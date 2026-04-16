import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollToTopProps {
  scrollContainer?: React.RefObject<HTMLElement | null>;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollContainer }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = scrollContainer?.current || window;
    const handleScroll = () => {
      const scrollY = scrollContainer?.current
        ? scrollContainer.current.scrollTop
        : window.scrollY;
      setVisible(scrollY > 400);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [scrollContainer]);

  const scrollToTop = () => {
    const el = scrollContainer?.current;
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-20 p-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg transition-all duration-300",
        "hover:bg-zinc-700 dark:hover:bg-zinc-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
