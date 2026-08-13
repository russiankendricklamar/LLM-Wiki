import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Signal, GraduationCap } from 'lucide-react';
import { MarkdownRenderer } from './MarkdownRenderer';
import { NotebookLMPlayer } from './NotebookLMPlayer';
import { cn } from '../lib/utils';
import type { PageMetadata } from '../lib/content-loader';

interface CourseLayoutProps {
  metadata: PageMetadata;
  content: string;
  lang: 'en' | 'ru';
}

const DIFFICULTY_LABELS = {
  beginner: { en: 'Beginner', ru: 'Начальный' },
  intermediate: { en: 'Intermediate', ru: 'Средний' },
  advanced: { en: 'Advanced', ru: 'Продвинутый' },
};

const DIFFICULTY_COLORS = {
  beginner: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
  intermediate: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
  advanced: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
};

export const CourseLayout: React.FC<CourseLayoutProps> = ({ metadata, content, lang }) => {
  const difficulty = metadata.difficulty || 'intermediate';
  const duration = metadata.duration || (lang === 'en' ? 'Self-paced' : 'В своем темпе');

  const [headings, setHeadings] = useState<{ title: string; id: string }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const updateHeadings = () => {
      // Find all H2s that have an ID (which MarkdownRenderer automatically adds via rehype-slug)
      const elements = Array.from(document.querySelectorAll('.prose h2[id]')).map((el) => ({
        title: (el as HTMLElement).innerText,
        id: el.id,
      }));
      setHeadings(elements);
    };

    updateHeadings();
    
    // We observe DOM mutations in case MarkdownRenderer renders asynchronously
    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [content]);

  useEffect(() => {
    const mainEl = document.querySelector('main');

    const handleScroll = () => {
      const elements = Array.from(document.querySelectorAll('.prose h2[id]')) as HTMLElement[];
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
  }, [headings]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mx-auto py-12 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-24">
      {/* Dynamic Sizing Navigation — Shows Course Modules */}
      {headings.length > 0 && (
        <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 hidden lg:block">
          <div className="pl-2">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors mb-8 uppercase tracking-wider"
            >
              <GraduationCap className="w-4 h-4" />
              {lang === 'en' ? 'All Courses' : 'Все курсы'}
            </Link>

            <nav className="flex flex-col gap-6">
              {headings.map(heading => {
                const isModuleActive = activeId === heading.id;

                return (
                  <a 
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => handleNavClick(e, heading.id)}
                    className={cn(
                      "block transition-all duration-500 ease-out origin-left",
                      isModuleActive 
                        ? "text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 scale-100" 
                        : "text-sm sm:text-base font-medium text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400 scale-95"
                    )}
                  >
                    {heading.title}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1 min-w-0 w-full"
      >
        {/* Course Hero */}
        <div className="mb-12">
          {/* Mobile Back Link */}
          <Link 
            to="/courses" 
            className="lg:hidden inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors mb-6 uppercase tracking-wider"
          >
            <GraduationCap className="w-4 h-4" />
            {lang === 'en' ? 'All Courses' : 'Все курсы'}
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
            {metadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border",
              DIFFICULTY_COLORS[difficulty as keyof typeof DIFFICULTY_COLORS] || 'text-zinc-600 bg-zinc-100 border-zinc-200 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700'
            )}>
              <Signal className="w-3.5 h-3.5" />
              {DIFFICULTY_LABELS[difficulty as keyof typeof DIFFICULTY_LABELS]?.[lang] || difficulty}
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              {duration}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              {headings.length} {lang === 'en' ? 'Modules' : 'Модулей'}
            </div>
          </div>

          {metadata.sourceUrl && (
            <div className="mb-8">
              <a 
                href={metadata.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/40"
              >
                <BookOpen className="w-5 h-5" />
                {lang === 'en' ? 'Open Source Textbook (PDF)' : 'Открыть учебник-источник (PDF)'}
              </a>
            </div>
          )}

          {metadata.audioUrl && (
            <div className="mb-8">
              <NotebookLMPlayer 
                audioUrl={metadata.audioUrl} 
                notebookUrl={metadata.notebookUrl} 
                lang={lang} 
                title={metadata.title} 
              />
            </div>
          )}
        </div>

        {/* Raw Markdown Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none prose-h2:scroll-mt-24 prose-h3:scroll-mt-24">
          <MarkdownRenderer content={content} category={metadata.category} />
        </div>
      </motion.div>
    </div>
  );
};
