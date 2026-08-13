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
    <nav className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prev ? (
        <Link
          to={prev.href}
          className="group relative flex flex-col justify-center gap-2 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 p-5 hover:bg-white dark:hover:bg-zinc-800/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm no-underline"
        >
          <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            {lang === 'en' ? 'Previous Article' : 'Предыдущая статья'}
          </span>
          <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.href}
          className="group relative flex flex-col justify-center items-end gap-2 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 p-5 hover:bg-white dark:hover:bg-zinc-800/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm text-right no-underline"
        >
          <span className="flex items-center justify-end gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500 transition-colors">
            {lang === 'en' ? 'Next Article' : 'Следующая статья'}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};
