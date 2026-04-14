import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FileText, ChevronDown, ChevronRight, UserCircle2, Network, Leaf } from 'lucide-react';
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
        <NavLink to="/" className="flex items-center gap-2 mb-6 px-2 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-inner shadow-emerald-300/20">
            <Leaf className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Knowledge Garden' : 'Сад Знаний'}
          </span>
        </NavLink>

        {/* Personal shortcuts */}
        <div className="mb-4 flex flex-col gap-1">
          <NavLink
            to="/about"
            className={({ isActive }) => cn(
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
              isActive
                ? "bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 font-medium"
                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/30 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
          >
            <UserCircle2 className="w-4 h-4 opacity-70" />
            {lang === 'en' ? 'About Me' : 'Обо мне'}
          </NavLink>
          <NavLink
            to="/knowledge-graph"
            className={({ isActive }) => cn(
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
              isActive
                ? "bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 font-medium"
                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/30 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
          >
            <Network className="w-4 h-4 opacity-70" />
            {lang === 'en' ? 'Knowledge Graph' : 'Граф знаний'}
          </NavLink>
        </div>

        <div className="mb-3 border-t border-zinc-200 dark:border-zinc-800" />

        <nav className="space-y-0.5">
          {navigation.map((section, idx) => {
            const isOpen = openSections[section.title];

            return (
              <div key={idx}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 transition-colors group"
                >
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 shrink-0 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
                  )}
                  <span className="flex-1 text-[13px] font-medium leading-snug">{section.title}</span>
                  <span className="shrink-0 rounded bg-zinc-200/60 dark:bg-zinc-800/60 px-1.5 py-px text-[10px] font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
                    {section.items.length}
                  </span>
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
