import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Clock, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllPages } from '@/lib/content-loader';
import { cn } from '@/lib/utils';

interface CoursesPageProps {
  lang: 'en' | 'ru';
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ lang }) => {
  const allPages = getAllPages();
  const courses = allPages
    .filter(p => p.metadata.lang === lang && p.metadata.section === 'courses')
    .sort((a, b) => (a.metadata.order ?? 99) - (b.metadata.order ?? 99));

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Learning Paths' : 'Учебные программы'}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {lang === 'en' ? 'Master Advanced Disciplines' : 'Путь к мастерству'}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          {lang === 'en' 
            ? 'Structured curricula designed to take you from foundational concepts to PhD-level research.' 
            : 'Структурированные учебные планы, созданные для перехода от базовых понятий к исследованиям уровня PhD.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <motion.div
            key={course.metadata.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link 
              to={course.metadata.slug}
              className="group block h-full p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                   <div className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                     {course.metadata.difficulty || 'Advanced'}
                   </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                {course.metadata.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 line-clamp-2">
                {course.content.split('\n').find(line => line.length > 20 && !line.startsWith('#'))?.replace(/[#*`[\]]/g, '') || ''}
              </p>

              <div className="flex items-center gap-6 text-xs text-zinc-400 font-medium pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{course.metadata.duration || '12 Weeks'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart className="w-3.5 h-3.5" />
                  <span>{course.metadata.category}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
