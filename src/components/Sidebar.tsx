import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, ChevronDown, ChevronRight, UserCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { getNavigation } from '@/lib/content-loader';

interface SidebarProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const Sidebar: React.FC<SidebarProps> = ({ className, lang = 'ru' }) => {
  const navigation = getNavigation(lang);
  
  // Initialize state with all sections open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    navigation.reduce((acc, section) => ({ ...acc, [section.title]: true }), {})
  );

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <aside className={cn("w-80 flex-shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 h-full overflow-y-auto", className)}>
      <div className="p-4">
        <NavLink to="/" className="flex items-center gap-2 mb-6 px-2 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-inner shadow-emerald-300/20">
            <span className="text-white font-bold text-base leading-none">🌿</span>
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Knowledge Garden' : 'Сад Знаний'}
          </span>
        </NavLink>

        {/* Personal shortcuts — always visible above category nav */}
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
            to="/projects"
            className={({ isActive }) => cn(
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
              isActive
                ? "bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 font-medium"
                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/30 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
          >
            <FileText className="w-4 h-4 opacity-70" />
            {lang === 'en' ? 'Projects' : 'Проекты'}
          </NavLink>
        </div>

        <div className="mb-3 border-t border-zinc-200 dark:border-zinc-800" />

        <nav className="space-y-1">
          {navigation.map((section, idx) => {
            const isOpen = openSections[section.title];
            
            return (
              <div key={idx} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-2 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
                >
                  <span>{section.title}</span>
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="space-y-0.5 overflow-hidden"
                    >
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <NavLink
                            to={item.href}
                            className={({ isActive }) => cn(
                              "flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ml-1",
                              isActive
                                ? "bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 font-medium"
                                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/30 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100"
                            )}
                          >
                            <FileText className="w-4 h-4 opacity-70" />
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
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
