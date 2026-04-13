import React from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  title: string;
  href: string;
  level: number;
}

const tocData: TocItem[] = [
  { title: "The Black-Scholes Equation", href: "#the-black-scholes-equation", level: 2 },
  { title: "The Black-Scholes Formula", href: "#the-black-scholes-formula", level: 2 },
  { title: "Python Implementation", href: "#python-implementation", level: 2 },
  { title: "Tables Support", href: "#tables-support", level: 2 },
];

interface TableOfContentsProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ className, lang = 'ru' }) => {
  const tocDataEn: TocItem[] = [
    { title: "Timeline", href: "#timeline", level: 2 },
    { title: "Projects", href: "#projects", level: 2 },
    { title: "Interests", href: "#interests", level: 2 },
    { title: "Technical Stack", href: "#technical-stack", level: 2 },
  ];

  const tocDataRu: TocItem[] = [
    { title: "Таймлайн", href: "#таймлайн", level: 2 },
    { title: "Проекты", href: "#проекты", level: 2 },
    { title: "Интересы", href: "#интересы", level: 2 },
    { title: "Стек технологий", href: "#стек-технологий", level: 2 },
  ];

  const currentToc = lang === 'en' ? tocDataEn : tocDataRu;

  return (
    <aside className={cn("w-64 flex-shrink-0 hidden xl:block", className)}>
      <div className="sticky top-0 pt-8 pb-8 pr-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
          {lang === 'en' ? 'On this page' : 'На этой странице'}
        </h4>
        <nav>
          <ul className="space-y-2.5 text-sm">
            {currentToc.map((item, idx) => (
              <li key={idx} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}>
                <a
                  href={item.href}
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
