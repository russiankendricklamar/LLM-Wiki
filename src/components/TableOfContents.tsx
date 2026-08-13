import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ className, lang = 'ru' }) => {
  const [headings, setHeadings] = useState<{ title: string; id: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'))
        .map((el) => ({
          title: (el as HTMLElement).innerText,
          id: el.id,
          level: parseInt(el.tagName.replace('H', '')),
        }))
        .filter((h) => h.id);
      setHeadings(elements);
    };

    updateHeadings();
    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current?.disconnect();

    const callback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const sorted = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        setActiveId(sorted[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -75% 0px',
      threshold: 0.1,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (headings.length === 0) return null;

  return (
    <aside className={cn("hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-24 self-start z-10", className)}>
      <div className="pt-4 pb-8 pr-6">
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors mb-8 uppercase tracking-wider"
        >
          <BookOpen className="w-4 h-4" />
          {lang === 'en' ? 'All Articles' : 'Все статьи'}
        </Link>

        <nav className="flex flex-col gap-6">
          {headings.map(heading => {
            const isModuleActive = activeId === heading.id;
            
            // Indent h3 headers slightly
            const paddingLeft = heading.level === 3 ? 'pl-4' : '';

            return (
              <a 
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => handleNavClick(e, heading.id)}
                className={cn(
                  "block transition-all duration-500 ease-out origin-left",
                  paddingLeft,
                  isModuleActive 
                    ? "text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 scale-100" 
                    : "text-sm sm:text-base font-medium text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400 scale-95"
                )}
              >
                {heading.title}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
