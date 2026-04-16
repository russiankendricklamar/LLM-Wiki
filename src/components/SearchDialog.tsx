import React, { useEffect } from 'react';
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
  const allPages = getAllPages().filter(p => p.metadata.lang === lang);

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

  const onSelect = (path: string) => {
    navigate(path);
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center sm:items-start sm:pt-[10vh]">
      <div
        className="fixed inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-50 flex w-full max-w-none flex-col bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all sm:max-w-lg sm:rounded-xl sm:overflow-hidden">
        <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent">
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
            <Command.Input
              autoFocus
              placeholder={lang === 'en' ? "Search documentation..." : "Поиск по базе знаний..."}
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 dark:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12"
            />
          </div>
          <Command.List className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overflow-x-hidden p-2 sm:max-h-[300px]">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              {lang === 'en' ? "No results found." : "Ничего не найдено."}
            </Command.Empty>

            {Array.from(new Set(allPages.map(p => p.metadata.category))).map(category => (
              <Command.Group
                key={category}
                heading={category}
                className="px-2 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400"
              >
                {allPages
                  .filter(p => p.metadata.category === category)
                  .map(page => {
                    const excerpt = extractExcerpt(page.content);
                    return (
                      <Command.Item
                        key={page.metadata.slug}
                        value={`${page.metadata.title} ${excerpt}`}
                        onSelect={() => onSelect(page.metadata.slug)}
                        className="relative flex cursor-pointer select-none items-start gap-2 rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-zinc-700 dark:text-zinc-300 transition-colors"
                      >
                        <FileText className="mt-0.5 h-4 w-4 opacity-70 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium">{page.metadata.title}</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                            {excerpt}
                          </div>
                        </div>
                      </Command.Item>
                    );
                  })}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
};
