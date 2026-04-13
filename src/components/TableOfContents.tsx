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
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ className }) => {
  return (
    <aside className={cn("w-64 flex-shrink-0 hidden xl:block", className)}>
      <div className="sticky top-0 pt-8 pb-8 pr-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">On this page</h4>
        <nav>
          <ul className="space-y-2.5 text-sm">
            {tocData.map((item, idx) => (
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
