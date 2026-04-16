import React, { useState, useEffect, useRef } from 'react';
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

  if (headings.length === 0) return null;

  return (
    <aside className={cn("w-64 flex-shrink-0 hidden xl:block", className)}>
      <div className="sticky top-20 pt-8 pb-8 pr-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
          {lang === 'en' ? 'On this page' : 'На этой странице'}
        </h4>
        <nav>
          <ul className="space-y-2.5 text-sm">
            {headings.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block transition-colors line-clamp-2",
                    activeId === item.id
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
