import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FileText, ChevronDown, ChevronRight, Network, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { 
  getNavigationTree, 
  type NavSection, 
  getCourseStructure, 
  getCoursesForPage, 
  getAllPages,
  type CourseStructure 
} from '@/lib/content-loader';

interface SidebarProps {
  className?: string;
  lang?: 'en' | 'ru';
}

const CourseSidebar: React.FC<{ structure: CourseStructure; currentSlug: string; lang: 'en' | 'ru' }> = ({ structure, currentSlug, lang }) => {
  const [openModules, setOpenSections] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    structure.modules.forEach(m => {
      init[m.title] = m.lessons.some(l => l.slug === currentSlug);
    });
    // If none are open (e.g. on course root), open the first one
    if (!Object.values(init).some(Boolean) && structure.modules.length > 0) {
      init[structure.modules[0].title] = true;
    }
    return init;
  });

  const toggleModule = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="space-y-4">
      <div className="px-2">
        <NavLink 
          to="/courses"
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-500 hover:text-blue-600 transition-colors mb-4"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'All Courses' : 'Все курсы'}</span>
        </NavLink>
        
        <NavLink 
          to={structure.slug}
          className={({ isActive }) => cn(
            "block text-sm font-bold leading-tight mb-6 hover:text-blue-500 transition-colors",
            isActive ? "text-blue-600 dark:text-blue-400" : "text-zinc-900 dark:text-zinc-100"
          )}
        >
          {structure.title}
        </NavLink>
      </div>

      <nav className="space-y-1">
        {structure.modules.map((module, idx) => {
          const isOpen = openModules[module.title];
          const hasActive = module.lessons.some(l => l.slug === currentSlug);

          return (
            <div key={module.title} className="space-y-0.5">
              <button
                onClick={() => toggleModule(module.title)}
                className={cn(
                  "w-full flex items-center justify-between gap-2 px-2 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors group",
                  hasActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                )}
              >
                <span className="flex-1 text-left leading-snug">
                  {lang === 'en' ? `Module ${idx + 1}: ` : `Модуль ${idx + 1}: `}
                  {module.title}
                </span>
                {isOpen
                  ? <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100" />
                  : <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100" />
                }
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-0.5 border-l border-blue-500/20 dark:border-blue-500/10 ml-[14px] pl-1">
                      {module.lessons.map((lesson, i) => (
                        <li key={i}>
                          <NavLink
                            to={lesson.slug}
                            className={({ isActive }) => cn(
                              "flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] leading-snug transition-colors",
                              isActive
                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium"
                                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-100"
                            )}
                          >
                            <FileText className="w-3 h-3 opacity-60 shrink-0" />
                            <span>{lesson.title}</span>
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
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ className, lang = 'ru' }) => {
  const location = useLocation();
  const currentSlug = location.pathname;
  const navTree = getNavigationTree(lang);

  // Course logic
  const pages = getAllPages();
  const currentPage = pages.find(p => p.metadata.slug === currentSlug);
  
  let activeCourseSlug: string | undefined;
  if (currentPage?.metadata.courseType === 'course') {
    activeCourseSlug = currentSlug;
  } else {
    const courses = getCoursesForPage(currentSlug, lang);
    if (courses.length > 0) {
      activeCourseSlug = courses[0].slug;
    }
  }

  const courseStructure = activeCourseSlug ? getCourseStructure(activeCourseSlug, lang) : undefined;

  // Find which section+category(+subgroup) contains the current page
  const findActive = (tree: NavSection[]) => {
    for (const section of tree) {
      for (const cat of section.categories) {
        if (cat.groups) {
          for (const g of cat.groups) {
            if (g.items.some(item => item.href === location.pathname)) {
              return { sectionKey: section.sectionKey, catTitle: cat.title, groupTitle: g.title };
            }
          }
        }
        if (cat.items.some(item => item.href === location.pathname)) {
          return { sectionKey: section.sectionKey, catTitle: cat.title, groupTitle: undefined as string | undefined };
        }
      }
    }
    return null;
  };

  const active = findActive(navTree);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    navTree.reduce((acc, s) => ({ ...acc, [s.sectionKey]: s.sectionKey === active?.sectionKey }), {})
  );

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    navTree.forEach(section =>
      section.categories.forEach(cat => {
        const key = `${section.sectionKey}__${cat.title}`;
        init[key] = section.sectionKey === active?.sectionKey && cat.title === active?.catTitle;
      })
    );
    return init;
  });

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    navTree.forEach(section =>
      section.categories.forEach(cat =>
        cat.groups?.forEach(g => {
          const key = `${section.sectionKey}__${cat.title}__${g.title}`;
          init[key] = section.sectionKey === active?.sectionKey
            && cat.title === active?.catTitle
            && g.title === active?.groupTitle;
        })
      )
    );
    return init;
  });

  useEffect(() => {
    if (active) {
      setOpenSections(prev => ({ ...prev, [active.sectionKey]: true }));
      setOpenCategories(prev => ({ ...prev, [`${active.sectionKey}__${active.catTitle}`]: true }));
      if (active.groupTitle) {
        setOpenGroups(prev => ({
          ...prev,
          [`${active.sectionKey}__${active.catTitle}__${active.groupTitle}`]: true,
        }));
      }
    }
  }, [active?.sectionKey, active?.catTitle, active?.groupTitle]);

  const toggleSection = (key: string) =>
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));

  const toggleCategory = (key: string) =>
    setOpenCategories(prev => ({ ...prev, [key]: !prev[key] }));

  const toggleGroup = (key: string) =>
    setOpenGroups(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className={cn("w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 h-full overflow-y-auto", className)}>
      <div className="p-4">
        {courseStructure ? (
          <CourseSidebar structure={courseStructure} currentSlug={currentSlug} lang={lang} />
        ) : (
          <>
            {/* Mobile-only quick links */}
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

            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {lang === 'en' ? 'Knowledge Base' : 'База знаний'}
            </div>

            <nav className="space-y-1">
              {navTree.map(section => {
                const isSectionOpen = openSections[section.sectionKey];
                const multiCat = section.categories.length > 1;

                return (
                  <div key={section.sectionKey} className="space-y-0.5">
                    {/* Section header */}
                    <button
                      onClick={() => toggleSection(section.sectionKey)}
                      className="w-full flex items-center justify-between gap-2 px-2 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
                    >
                      <span className="flex-1 text-left leading-snug">{section.title}</span>
                      {isSectionOpen
                        ? <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100" />
                        : <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100" />
                      }
                    </button>

                    <AnimatePresence initial={false}>
                      {isSectionOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-0.5 border-l border-zinc-200 dark:border-zinc-800 ml-[14px] pl-1">
                            {section.categories.map(cat => {
                              const catKey = `${section.sectionKey}__${cat.title}`;
                              const isCatOpen = openCategories[catKey];

                              if (!multiCat) {
                                // Single category: show items directly, no extra level
                                return (
                                  <ul key={cat.title} className="space-y-0.5">
                                    {cat.items.map((item, i) => (
                                      <li key={i}>
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
                                );
                              }

                              // Multiple categories: nested accordion
                              return (
                                <div key={cat.title} className="space-y-0.5">
                                  <button
                                    onClick={() => toggleCategory(catKey)}
                                    className="w-full flex items-center justify-between gap-2 px-2 py-1 text-[12px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors group"
                                  >
                                    <span className="flex-1 text-left leading-snug">{cat.title}</span>
                                    {isCatOpen
                                      ? <ChevronDown className="w-3 h-3 shrink-0 opacity-40 group-hover:opacity-80" />
                                      : <ChevronRight className="w-3 h-3 shrink-0 opacity-40 group-hover:opacity-80" />
                                    }
                                  </button>

                                  <AnimatePresence initial={false}>
                                    {isCatOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                      >
                                        {cat.groups ? (
                                          <div className="space-y-0.5 border-l border-zinc-200 dark:border-zinc-800 ml-[10px] pl-1">
                                            {cat.groups.map(g => {
                                              const gKey = `${catKey}__${g.title}`;
                                              const isGOpen = openGroups[gKey];
                                              return (
                                                <div key={g.title} className="space-y-0.5">
                                                  <button
                                                    onClick={() => toggleGroup(gKey)}
                                                    className="w-full flex items-center justify-between gap-2 px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors group/g"
                                                  >
                                                    <span className="flex-1 text-left leading-snug">
                                                      {g.title}
                                                      <span className="ml-1.5 opacity-40">{g.items.length}</span>
                                                    </span>
                                                    {isGOpen
                                                      ? <ChevronDown className="w-3 h-3 shrink-0 opacity-40 group-hover/g:opacity-80" />
                                                      : <ChevronRight className="w-3 h-3 shrink-0 opacity-40 group-hover/g:opacity-80" />
                                                    }
                                                  </button>
                                                  <AnimatePresence initial={false}>
                                                    {isGOpen && (
                                                      <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.12, ease: 'easeInOut' }}
                                                        className="overflow-hidden"
                                                      >
                                                        <ul className="space-y-0.5 border-l border-zinc-200 dark:border-zinc-800 ml-[10px] pl-1">
                                                          {g.items.map((item, i) => (
                                                            <li key={i}>
                                                              <NavLink
                                                                to={item.href}
                                                                className={({ isActive }) => cn(
                                                                  "flex items-center gap-2 rounded-md px-2 py-1 text-[12px] leading-snug transition-colors",
                                                                  isActive
                                                                    ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 font-medium"
                                                                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-100"
                                                                )}
                                                              >
                                                                <FileText className="w-3 h-3 opacity-60 shrink-0" />
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
                                          </div>
                                        ) : (
                                          <ul className="space-y-0.5 border-l border-zinc-200 dark:border-zinc-800 ml-[10px] pl-1">
                                            {cat.items.map((item, i) => (
                                              <li key={i}>
                                                <NavLink
                                                  to={item.href}
                                                  className={({ isActive }) => cn(
                                                    "flex items-center gap-2 rounded-md px-2 py-1 text-[12px] leading-snug transition-colors",
                                                    isActive
                                                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 font-medium"
                                                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-100"
                                                  )}
                                                >
                                                  <FileText className="w-3 h-3 opacity-60 shrink-0" />
                                                  <span className="truncate">{item.title}</span>
                                                </NavLink>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </>
        )}
      </div>
    </aside>
  );
};
