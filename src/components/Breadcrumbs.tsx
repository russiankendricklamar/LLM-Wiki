import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  category: string;
  title: string;
  lang: 'en' | 'ru';
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, title, lang, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400", className)}>
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{lang === 'en' ? 'Home' : 'Главная'}</span>
      </Link>
      <ChevronRight className="w-3 h-3 opacity-50" />
      <span className="text-zinc-600 dark:text-zinc-300">{category}</span>
      <ChevronRight className="w-3 h-3 opacity-50" />
      <span className="text-zinc-900 dark:text-zinc-100 font-medium truncate max-w-[200px]">{title}</span>
    </nav>
  );
};
