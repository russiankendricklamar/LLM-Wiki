import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Moon, Sun, Leaf } from 'lucide-react';
import { SearchDialog } from './SearchDialog';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  lang?: 'en' | 'ru';
  setLang?: (lang: 'en' | 'ru') => void;
  fullBleed?: boolean;
  showSidebar?: boolean;
}

const NAV_LINKS = {
  en: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/knowledge-graph', label: 'Graph' },
  ],
  ru: [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'Обо мне' },
    { to: '/projects', label: 'Проекты' },
    { to: '/knowledge-graph', label: 'Граф' },
  ],
};

export const PageLayout: React.FC<PageLayoutProps> = ({ children, lang = 'ru', setLang, fullBleed = false, showSidebar = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden font-sans selection:bg-blue-200 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-50">
      {/* Top Navigation Bar */}
      {!fullBleed && (
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 px-4 backdrop-blur-md sm:px-6 lg:px-10">
          {/* Left: logo + nav links */}
          <div className="flex items-center gap-6">
            <NavLink to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
                <Leaf className="h-3 w-3 text-white" />
              </div>
              <span className="font-semibold text-sm hidden sm:block">
                {lang === 'en' ? 'Knowledge Garden' : 'Сад Знаний'}
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS[lang].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => cn(
                    "px-3 py-1.5 rounded-md text-sm transition-colors",
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60"
                  )}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right: search + lang + dark mode */}
          <div className="flex items-center gap-3">
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
              <span className="hidden sm:inline-block">{lang === 'en' ? 'Search...' : 'Поиск...'}</span>
              <kbd className="hidden sm:inline-block ml-1 rounded bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
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
      )}

      {/* Scrollable Content */}
      {showSidebar && !fullBleed ? (
        <main className="flex flex-1 overflow-hidden">
          <Sidebar lang={lang} />
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">
              {children}
            </div>
            <Footer lang={lang} />
          </div>
        </main>
      ) : (
        <main className={cn("flex flex-1 flex-col", fullBleed ? "overflow-hidden" : "overflow-y-auto")}>
          {fullBleed ? (
            children
          ) : (
            <>
              <div className="flex-1 w-full px-4 sm:px-6 lg:px-10 xl:px-16">
                <div className="py-8 lg:py-12">
                  {children}
                </div>
              </div>
              <Footer lang={lang} />
            </>
          )}
        </main>
      )}

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} lang={lang} />
    </div>
  );
};
