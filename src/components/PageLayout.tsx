import React, { useState } from 'react';
import { Menu, Search, Moon, Sun } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { TableOfContents } from './TableOfContents';
import { SearchDialog } from './SearchDialog';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  lang?: 'en' | 'ru';
  setLang?: (lang: 'en' | 'ru') => void;
  fullBleed?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, lang = 'ru', setLang, fullBleed = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode for that Vercel/Linear feel

  // Simple dark mode toggle for demo purposes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Set initial dark mode class
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="flex h-screen w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden font-sans selection:bg-blue-200 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-50">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-zinc-950/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar (hidden in full-bleed mode, e.g. on the home hero) */}
      {!fullBleed && (
        <div className={cn(
          "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <Sidebar lang={lang} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
                <span className="text-white text-[11px] leading-none">🌿</span>
              </div>
              <span className="font-semibold text-sm">{lang === 'en' ? 'Knowledge Garden' : 'Сад Знаний'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {setLang && (
              <div className="flex gap-1 bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg text-[10px] font-bold">
                <button 
                  onClick={() => setLang('en')}
                  className={cn(
                    "px-1.5 py-0.5 rounded-md transition-all",
                    lang === 'en' 
                      ? "bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100" 
                      : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                  )}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('ru')}
                  className={cn(
                    "px-1.5 py-0.5 rounded-md transition-all",
                    lang === 'ru' 
                      ? "bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100" 
                      : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                  )}
                >
                  RU
                </button>
              </div>
            )}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-3 py-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline-block">{lang === 'en' ? 'Search documentation...' : 'Поиск...'}</span>
              <kbd className="hidden sm:inline-block ml-2 rounded bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className={cn("flex-1", fullBleed ? "overflow-hidden" : "overflow-y-auto")}>
          {fullBleed ? (
            children
          ) : (
            <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex-1 min-w-0 py-8 lg:py-12">
                {children}
              </div>
              <TableOfContents lang={lang} />
            </div>
          )}
        </main>
      </div>

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} lang={lang} />
    </div>
  );
};
