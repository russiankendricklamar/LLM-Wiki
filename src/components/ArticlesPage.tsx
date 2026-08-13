import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, BookText, Compass, ChevronDown, ChevronRight, Layers } from 'lucide-react';
import { getNavigationTree } from '../lib/content-loader';
import { cn } from '../lib/utils';

interface ArticlesPageProps {
  lang: 'en' | 'ru';
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ lang }) => {
  const tree = getNavigationTree(lang);
  const [activeId, setActiveId] = useState<string>('');
  const [activeSectionKey, setActiveSectionKey] = useState<string>(tree[0]?.sectionKey || '');

  useEffect(() => {
    const mainEl = document.querySelector('main');

    const handleScroll = () => {
      const elements = Array.from(document.querySelectorAll('h2[id], h3[id]')) as HTMLElement[];
      if (!elements.length) return;

      const topOffset = 150;
      let currentActiveId = elements[0].id;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= topOffset) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }
      if (currentActiveId) {
        setActiveId(currentActiveId);
      }
    };

    handleScroll();

    const scrollTarget = mainEl || window;
    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [tree]);

  // Determine active section from activeId
  useEffect(() => {
    if (!activeId) return;

    for (const section of tree) {
      const isSectionMatch = section.sectionKey === activeId;
      const isCatMatch = section.categories.some(cat => `cat-${cat.title.replace(/\s+/g, '-').toLowerCase()}` === activeId);

      if (isSectionMatch || isCatMatch) {
        setActiveSectionKey(section.sectionKey);
        break;
      }
    }
  }, [activeId, tree]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mx-auto py-12 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-24">
      {/* Dynamic Sizing Navigation — Shows only themes */}
      <aside className="w-full lg:w-56 shrink-0 lg:sticky lg:top-24 hidden lg:block">
        <div className="pl-2">
          <nav className="flex flex-col gap-6">
            {tree.map(section => {
              const isSectionActive = activeSectionKey === section.sectionKey;

              return (
                <a 
                  key={section.sectionKey}
                  href={`#${section.sectionKey}`}
                  onClick={(e) => handleNavClick(e, section.sectionKey)}
                  className={cn(
                    "block transition-all duration-500 ease-out origin-left",
                    isSectionActive 
                      ? "text-2xl font-bold text-emerald-600 dark:text-emerald-400 scale-100" 
                      : "text-base font-medium text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400 scale-95"
                  )}
                >
                  {section.title}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 w-full">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-4 uppercase tracking-widest">
            <BookText className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Knowledge Base' : 'База знаний'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {lang === 'en' ? 'All Articles' : 'Все статьи'}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'A complete index of all notes, essays, and technical deep-dives.' 
              : 'Полный список всех заметок, эссе и технических разборов.'}
          </p>
        </div>

        <div className="space-y-16">
          {tree.map((section, idx) => (
            <motion.section
              key={section.sectionKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 
                id={section.sectionKey}
                className="text-2xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24"
              >
                {section.title}
              </h2>
              
              <div className="flex flex-col gap-6">
                {section.categories.map((category) => (
                  <div key={category.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 lg:p-8 hover:border-emerald-500/50 hover:bg-emerald-500/[0.02] transition-all duration-300 group">
                    <h3 
                      id={`cat-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
                      className="text-xl font-semibold mb-6 flex items-center gap-3 text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors scroll-mt-24"
                    >
                      <BookOpen className="w-5 h-5 text-emerald-500/70 group-hover:text-emerald-500 transition-colors" />
                      {category.title}
                    </h3>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                      {category.items.map((item) => (
                        <li key={item.href}>
                          <Link 
                            to={item.href}
                            className="group/link flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/link:bg-emerald-500 group-hover/link:scale-125 transition-all" />
                            <span className="leading-relaxed">{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {category.groups?.map(group => (
                      <div key={group.title} className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
                        <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5 flex items-center gap-3">
                          {group.title}
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link 
                                to={item.href}
                                className="group/link flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/link:bg-emerald-500 group-hover/link:scale-125 transition-all" />
                                <span className="leading-relaxed">{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};
