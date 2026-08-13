import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getRelatedArticles } from '@/lib/content-loader';
import { cn } from '@/lib/utils';

interface RelatedArticlesProps {
  slug: string;
  lang: 'en' | 'ru';
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ slug, lang }) => {
  const related = useMemo(() => getRelatedArticles(slug, lang, 5), [slug, lang]);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800/50 pt-12">
      <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        <Sparkles className="w-5 h-5 text-emerald-500" />
        {lang === 'en' ? 'Related Exploration' : 'Родственные темы'}
      </h3>
      
      {/* Bento grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
        {related.map((article, idx) => {
          // Bento logic: 1st item is big, others adapt.
          let spanClasses = "";
          if (idx === 0) {
            spanClasses = "md:col-span-2 md:row-span-2"; // Large square
          } else if (idx === 1 || idx === 2) {
            spanClasses = "md:col-span-2 md:row-span-1"; // Wide rectangles
          } else {
            spanClasses = "md:col-span-2 lg:col-span-2 md:row-span-1"; 
          }

          return (
            <Link
              key={article.slug}
              to={article.slug}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-5 transition-all duration-500",
                "bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60",
                "hover:bg-white dark:hover:bg-zinc-800/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:border-emerald-500/30",
                "backdrop-blur-sm no-underline",
                spanClasses
              )}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/5 transition-all duration-500 opacity-50" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-zinc-200/50 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {article.category}
                  </div>
                </div>
                
                <h4 className={cn(
                  "font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-auto",
                  idx === 0 ? "text-xl sm:text-2xl leading-tight" : "text-base sm:text-lg leading-snug"
                )}>
                  {article.title}
                </h4>
              </div>

              <div className="relative z-10 flex items-center mt-4 text-xs font-bold text-zinc-500 dark:text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                <span>{lang === 'en' ? 'Read article' : 'Читать статью'}</span>
                <ArrowRight className="w-3 h-3 ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
