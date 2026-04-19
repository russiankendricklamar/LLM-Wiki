import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { getRelatedArticles } from '@/lib/content-loader';

interface RelatedArticlesProps {
  slug: string;
  lang: 'en' | 'ru';
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ slug, lang }) => {
  const related = useMemo(() => getRelatedArticles(slug, lang, 5), [slug, lang]);

  if (related.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        <Sparkles className="w-4 h-4" />
        {lang === 'en' ? 'Related articles' : 'Похожие статьи'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {related.map(article => (
          <Link
            key={article.slug}
            to={article.slug}
            className="group rounded-lg border border-zinc-200 dark:border-zinc-800 p-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{article.category}</div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {article.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
