import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getNavigation } from '@/lib/content-loader';

interface SidebarProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const Sidebar: React.FC<SidebarProps> = ({ className, lang = 'ru' }) => {
  const navigation = getNavigation(lang);

  return (
    <aside className={cn("w-64 flex-shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 h-full overflow-y-auto", className)}>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-8 h-8 rounded-md bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
            <span className="text-zinc-50 dark:text-zinc-900 font-bold text-lg">W</span>
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">LLM Wiki</span>
        </div>

        <nav className="space-y-6">
          {navigation.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="px-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-0.5">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => cn(
                        "flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors",
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
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
