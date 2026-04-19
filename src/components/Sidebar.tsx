import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FileText, ChevronDown, ChevronRight, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { getNavigation } from '@/lib/content-loader';

interface SidebarProps {
  className?: string;
  lang?: 'en' | 'ru';
}

const SKIP_CATEGORIES = ['Home', 'Главная', 'Projects', 'Проекты'];

export const Sidebar: React.FC<SidebarProps> = ({ className, lang = 'ru' }) => {
  const location = useLocation();
  const navigation = getNavigation(lang).filter(s => !SKIP_CATEGORIES.includes(s.title));

  // Find which category contains the current page so we can auto-expand it
  const activeCategory = navigation.find(section =>
    section.items.some(item => item.href === location.pathname)
  )?.title ?? null;

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    navigation.reduce((acc, section) => ({
      ...acc,
      [section.title]: section.title === activeCategory,
    }), {})
  );

  // Re-open the active section when the route changes
  useEffect(() => {
    if (activeCategory) {
      setOpenSections(prev => ({ ...prev, [activeCategory]: true }));
    }
  }, [activeCategory]);

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className={cn("w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 h-full overflow-y-auto", className)}>
      <div className="p-4">
        {/* Mobile-only quick links — desktop topbar already exposes these */}
        <div className="mb-4 flex flex-col gap-0.5 lg:hidden">
          <NavLink
            to="/knowledge-graph"
            className={({ isActive }) => cn(
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors border",
              isActive
                ? "bg-gradient-to-br from-emerald-500/15 to-teal-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-medium"
                : "border-transparent text-zinc-600 dark:text-zinc-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-700 dark:hover:text-emerald-300"
            )}
          >
            <Network className="w-4 h-4 opacity-80 shrink-0" />
            {lang === 'en' ? 'Open Knowledge Graph' : 'Открыть граф знаний'}
          </NavLink>
        </div>

        {/* Sticky section header for the categories tree */}
        <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          {lang === 'en' ? 'Knowledge Base' : 'База знаний'}
        </div>

        <nav className="space-y-1">
          {navigation.map((section, idx) => {
            const isOpen = openSections[section.title];

            return (
              <div key={idx} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between gap-2 px-2 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
                >
                  <span className="flex-1 text-left leading-snug">{section.title}</span>
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-0.5 space-y-0.5 border-l border-zinc-200 dark:border-zinc-800 ml-[14px] pl-1">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <NavLink
                              to={item.href}
                              className={({ isActive }) => cn(
                                "flex items-center gap-2 rounded-md px-2 py-1 text-[13px] leading-snug transition-colors",
                                isActive
                                  ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 font-medium"
                                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-100"
                              )}
                            >
                              <FileText className="w-3.5 h-3.5 opacity-60 shrink-0" />
                              <span className="truncate">{item.title}</span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
