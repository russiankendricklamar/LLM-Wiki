import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { translateCategory, getBreadcrumbTrail } from '@/lib/content-loader';

interface BreadcrumbsProps {
  category: string;
  title: string;
  lang: 'en' | 'ru';
  slug?: string;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, title, lang, slug, className }) => {
  // Prefer the nav-tree resolution (subsection + optional 3rd-level group) —
  // falls back to the raw frontmatter category for pages outside the tree.
  const trail = slug ? getBreadcrumbTrail(slug, lang) : {};
  const mid: string[] = [];
  if (trail.subsection) mid.push(trail.subsection);
  if (trail.group && trail.group !== trail.subsection) mid.push(trail.group);
  if (mid.length === 0) mid.push(translateCategory(category, lang));

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400", className)}>
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{lang === 'en' ? 'Home' : 'Главная'}</span>
      </Link>
      {mid.map((crumb, i) => (
        <React.Fragment key={i}>
          <ChevronRight className="w-3 h-3 opacity-50" />
          <span className="text-zinc-600 dark:text-zinc-300 truncate max-w-[180px]">{crumb}</span>
        </React.Fragment>
      ))}
      <ChevronRight className="w-3 h-3 opacity-50" />
      <span className="text-zinc-900 dark:text-zinc-100 font-medium truncate max-w-[200px]">{title}</span>
    </nav>
  );
};
