import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageLayout } from './components/PageLayout';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { HomeHero } from './components/HomeHero';
import { Breadcrumbs } from './components/Breadcrumbs';
import { ArticleNav } from './components/ArticleNav';
import { Backlinks } from './components/Backlinks';
import { RelatedArticles } from './components/RelatedArticles';
import { CourseBadge } from './components/CourseBadge';
import { getAllPages } from './lib/content-loader';
import { cn } from './lib/utils';

// Heavy / non-landing routes are split off the main bundle. KnowledgeGraph
// alone pulls in three.js + react-force-graph (~1.2 MB before particles).
const KnowledgeGraph = React.lazy(() =>
  import('./components/KnowledgeGraph').then(m => ({ default: m.KnowledgeGraph }))
);
const ProjectsPage = React.lazy(() =>
  import('./components/ProjectsPage').then(m => ({ default: m.ProjectsPage }))
);
const AboutPage = React.lazy(() =>
  import('./components/AboutPage').then(m => ({ default: m.AboutPage }))
);
const CoursesPage = React.lazy(() =>
  import('./components/CoursesPage').then(m => ({ default: m.CoursesPage }))
);

// Tiny placeholder while a route chunk streams in (≈100 ms on cold load).
const RouteFallback = () => (
  <div className="flex h-full min-h-[60vh] w-full items-center justify-center">
    <div className="text-sm text-zinc-400 dark:text-zinc-500 animate-pulse">Loading…</div>
  </div>
);

// Growth state metadata — surfaced as a small badge on article pages
const GROWTH_LABEL = {
  seedling: { en: 'Seedling', ru: 'Росток', tone: 'text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
  budding: { en: 'Budding', ru: 'Бутон', tone: 'text-lime-600 dark:text-lime-300 bg-lime-500/10 border-lime-500/20' },
  evergreen: { en: 'Evergreen', ru: 'Вечнозелёный', tone: 'text-teal-600 dark:text-teal-300 bg-teal-500/10 border-teal-500/20' },
} as const;

interface PageContentProps {
  category: string;
  title: string;
  content: string;
  lang: 'en' | 'ru';
  slug: string;
  growth?: 'seedling' | 'budding' | 'evergreen';
}

const PageContent = ({ category, title, content, lang, slug, growth }: PageContentProps) => {
  const isGraphPage = slug === '/knowledge-graph';
  const growthInfo = growth ? GROWTH_LABEL[growth] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      {!isGraphPage && (
        <div className="mb-8 flex items-center justify-between gap-4">
          <Breadcrumbs category={category} title={title} lang={lang} />
          {growthInfo && (
            <span className={cn(
              "shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
              growthInfo.tone
            )}>
              <span>{growthInfo[lang]}</span>
            </span>
          )}
        </div>
      )}

      {isGraphPage ? (
        <div className="flex flex-col h-full space-y-6">
          <div className="prose dark:prose-invert max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">{content}</p>
          </div>
          <div className="flex-1 min-h-0 w-full mb-8">
            <KnowledgeGraph lang={lang} />
          </div>
        </div>
      ) : (
        <>
          <CourseBadge slug={slug} lang={lang} />
          <MarkdownRenderer content={content} category={category} />
          <Backlinks slug={slug} lang={lang} />
          <RelatedArticles slug={slug} lang={lang} />
          <ArticleNav slug={slug} category={category} lang={lang} />
        </>
      )}
    </motion.div>
  );
};

const AnimatedRoutes = ({ lang }: { lang: 'en' | 'ru' }) => {
  const location = useLocation();
  const currentPages = getAllPages().filter(p => p.metadata.lang === lang);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location} key={location.pathname + lang}>
        {/* Index route — cinematic hero landing */}
        <Route path="/" element={<HomeHero lang={lang} />} />

        {/* About page — rich personal profile layout */}
        <Route path="/about" element={<AboutPage lang={lang} />} />

        {/* Projects index — grid of all projects */}
        <Route path="/projects" element={<ProjectsPage lang={lang} />} />

        {/* Courses index — list of structured learning paths */}
        <Route path="/courses" element={<CoursesPage lang={lang} />} />

        {/* Dynamic routes */}
        {currentPages.map(page => (
          <Route
            key={page.metadata.slug}
            path={page.metadata.slug}
            element={
              <PageContent
                category={page.metadata.category}
                title={page.metadata.title}
                content={page.content}
                lang={lang}
                slug={page.metadata.slug}
                growth={page.metadata.growth}
              />
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const RouterShell = ({ lang, setLang }: { lang: 'en' | 'ru'; setLang: (lang: 'en' | 'ru') => void }) => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';
  const isAbout = location.pathname === '/about';
  // Anything under /projects (the index and individual project pages) has its
  // own dedicated layout — no Knowledge Base sidebar.
  const isProjectsArea = location.pathname.startsWith('/projects');
  const isCoursesIndex = location.pathname === '/courses';
  const showSidebar = !isHome && !isAbout && !isProjectsArea && !isCoursesIndex;

  return (
    <PageLayout lang={lang} setLang={setLang} fullBleed={isHome} showSidebar={showSidebar}>
      <AnimatedRoutes lang={lang} />
    </PageLayout>
  );
};

export default function App() {
  const [lang, setLang] = React.useState<'en' | 'ru'>('ru');

  return (
    <BrowserRouter>
      <RouterShell lang={lang} setLang={setLang} />
    </BrowserRouter>
  );
}
