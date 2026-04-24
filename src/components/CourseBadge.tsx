import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCoursesForPage } from '@/lib/content-loader';

interface CourseBadgeProps {
  slug: string;
  lang: 'en' | 'ru';
}

// Visual palette per course slug — keeps the badge instantly recognisable
// even when an article is part of two different learning paths.
const COURSE_TONE: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  '/course-cedefi': {
    bg: 'bg-amber-500/10 hover:bg-amber-500/15',
    border: 'border-amber-500/25',
    text: 'text-amber-700 dark:text-amber-300',
    iconBg: 'bg-amber-500/15',
  },
  '/course-math-for-ai': {
    bg: 'bg-indigo-500/10 hover:bg-indigo-500/15',
    border: 'border-indigo-500/25',
    text: 'text-indigo-700 dark:text-indigo-300',
    iconBg: 'bg-indigo-500/15',
  },
};

const DEFAULT_TONE = {
  bg: 'bg-blue-500/10 hover:bg-blue-500/15',
  border: 'border-blue-500/25',
  text: 'text-blue-700 dark:text-blue-300',
  iconBg: 'bg-blue-500/15',
};

const LABEL = {
  en: 'Part of course',
  ru: 'Часть курса',
};

export const CourseBadge: React.FC<CourseBadgeProps> = ({ slug, lang }) => {
  const courses = getCoursesForPage(slug, lang);
  if (courses.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {courses.map((course) => {
        const tone = COURSE_TONE[course.slug] ?? DEFAULT_TONE;
        return (
          <Link
            key={course.slug}
            to={course.slug}
            className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${tone.bg} ${tone.border} ${tone.text}`}
          >
            <span className={`flex h-5 w-5 items-center justify-center rounded-full ${tone.iconBg}`}>
              <GraduationCap className="h-3 w-3" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
              {LABEL[lang]}
            </span>
            <span className="font-semibold">{course.title}</span>
          </Link>
        );
      })}
    </div>
  );
};
