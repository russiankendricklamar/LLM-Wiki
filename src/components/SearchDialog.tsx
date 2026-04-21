import React, { useEffect, useState, useMemo } from 'react';
import { Command } from 'cmdk';
import { Search, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllPages } from '@/lib/content-loader';

const extractExcerpt = (content: string, maxLen = 120): string => {
  const clean = content
    .replace(/^---[\s\S]*?---\n?/, '')
    .replace(/^#{1,6}\s+.*/gm, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, s, a) => a || s)
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^$]+\$/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  return clean.length > maxLen ? clean.slice(0, maxLen) + '...' : clean;
};

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang?: 'en' | 'ru';
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange, lang = 'ru' }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const allPages = useMemo(() => getAllPages().filter(p => p.metadata.lang === lang), [lang]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const filteredPages = useMemo(() => {
    if (!search) return [];
    
    const query = search.toLowerCase();
    return allPages
      .map(page => {
        let score = 0;
        const title = page.metadata.title.toLowerCase();
        const content = page.content.toLowerCase();
        
        if (title === query) score += 100;
        else if (title.startsWith(query)) score += 50;
        else if (title.includes(query)) score += 30;
        
        const contentMatches = (content.match(new RegExp(query, 'g')) || []).length;
        score += Math.min(contentMatches, 20); // Cap content score
        
        return { ...page, score };
      })
      .filter(page => page.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }, [search, allPages]);

  const onSelect = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setSearch('');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center sm:items-start sm:pt-[10vh]">
      <div
        className="fixed inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-50 flex w-full max-w-none flex-col bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all sm:max-w-lg sm:rounded-xl sm:overflow-hidden">
        <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent" shouldFilter={false}>
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
            <Command.Input
              autoFocus
              value={search}
              onValueChange={setSearch}
              placeholder={lang === 'en' ? "Search documentation..." : "Поиск по базе знаний..."}
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 dark:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12"
            />
          </div>
          <Command.List className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overflow-x-hidden p-2 sm:max-h-[400px]">
            {search && filteredPages.length === 0 && (
              <Command.Empty className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                {lang === 'en' ? "No results found." : "Ничего не найдено."}
              </Command.Empty>
            )}

            {filteredPages.map(page => {
              const excerpt = extractExcerpt(page.content);
              return (
                <Command.Item
                  key={page.metadata.slug}
                  value={page.metadata.slug}
                  onSelect={() => onSelect(page.metadata.slug)}
                  className="relative flex cursor-pointer select-none items-start gap-3 rounded-lg px-3 py-3 text-sm outline-none aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <div className="mt-1 p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-aria-selected:border-zinc-300 dark:group-aria-selected:border-zinc-600">
                    <FileText className="h-4 w-4 opacity-70" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                        {page.metadata.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase font-medium">
                        {page.metadata.category}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1 italic">
                      {excerpt}
                    </div>
                  </div>
                </Command.Item>
              );
            })}
          </Command.List>
          <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 px-4 py-2 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium">
                <kbd className="px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans shadow-sm">↵</kbd>
                <span>to select</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium">
                <kbd className="px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans shadow-sm">↑↓</kbd>
                <span>to navigate</span>
              </div>
            </div>
            <div className="text-[10px] text-zinc-400">
              {search ? `${filteredPages.length} matches` : `Enter a search term`}
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
};
