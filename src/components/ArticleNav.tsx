import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getNavigation } from '@/lib/content-loader';

interface ArticleNavProps {
  slug: string;
  category: string;
  lang: 'en' | 'ru';
}

export const ArticleNav: React.FC<ArticleNavProps> = ({ slug, category, lang }) => {
  const navigation = getNavigation(lang);
  const categorySection = navigation.find(s => s.title === category);
  if (!categorySection) return null;

  const items = categorySection.items;
  const currentIndex = items.findIndex(item => item.href === slug);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? items[currentIndex - 1] : null;
  const next = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 gap-4">
      {prev ? (
        <Link
          to={prev.href}
          className="group flex flex-col gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <ArrowLeft className="w-3 h-3" />
            {lang === 'en' ? 'Previous' : 'Предыдущая'}
          </span>
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.href}
          className="group flex flex-col items-end gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-right"
        >
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            {lang === 'en' ? 'Next' : 'Следующая'}
            <ArrowRight className="w-3 h-3" />
          </span>
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};
