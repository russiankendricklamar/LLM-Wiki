import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft } from 'lucide-react';
import { getBacklinks } from '@/lib/content-loader';

interface BacklinksProps {
  slug: string;
  lang: 'en' | 'ru';
}

export const Backlinks: React.FC<BacklinksProps> = ({ slug, lang }) => {
  const backlinks = useMemo(() => getBacklinks(slug, lang), [slug, lang]);

  if (backlinks.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        <ArrowUpLeft className="w-4 h-4" />
        {lang === 'en' ? 'Links to this page' : 'Ссылки на эту страницу'}
        <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">({backlinks.length})</span>
      </h3>
      <ul className="flex flex-wrap gap-2">
        {backlinks.map(bl => (
          <li key={bl.slug}>
            <Link
              to={bl.slug}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {bl.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
