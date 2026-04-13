import React from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  title: string;
  href: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ className, lang = 'ru' }) => {
  const [headings, setHeadings] = React.useState<{ title: string; id: string; level: number }[]>([]);

  React.useEffect(() => {
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2, h3'))
        .map((el) => ({
          title: (el as HTMLElement).innerText,
          id: el.id,
          level: parseInt(el.tagName.replace('H', '')),
        }))
        .filter((h) => h.id); // Only headings with IDs
      
      setHeadings(elements);
    };

    updateHeadings();

    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []); // Re-run when content changes is handled by observer

  if (headings.length === 0) return null;

  return (
    <aside className={cn("w-64 flex-shrink-0 hidden xl:block", className)}>
      <div className="sticky top-20 pt-8 pb-8 pr-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
          {lang === 'en' ? 'On this page' : 'На этой странице'}
        </h4>
        <nav>
          <ul className="space-y-2.5 text-sm">
            {headings.map((item, idx) => (
              <li key={idx} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}>
                <a
                  href={`#${item.id}`}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors line-clamp-2"
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
