import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useActiveHeading } from '@/hooks/use-active-heading';
import { HeadingNavLink } from './HeadingNavLink';

interface TableOfContentsProps {
  className?: string;
  lang?: 'en' | 'ru';
}

const HEADING_SELECTOR = 'h2[id], h3[id]';

export const TableOfContents: React.FC<TableOfContentsProps> = ({ className, lang = 'ru' }) => {
  const { headings, activeId } = useActiveHeading(HEADING_SELECTOR);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${id}`);
  };

  if (headings.length === 0) return null;

  return (
    <aside className={cn('hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-24 self-start z-10', className)}>
      <div className="pt-4 pb-8 pr-6">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors mb-8 uppercase tracking-wider"
        >
          <BookOpen className="w-4 h-4" />
          {lang === 'en' ? 'All Articles' : 'Все статьи'}
        </Link>

        <nav className="flex flex-col gap-6">
          {headings.map(heading => (
            <HeadingNavLink
              key={heading.id}
              heading={heading}
              isActive={activeId === heading.id}
              onNavigate={handleNavigate}
              indentSubheadings
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};
