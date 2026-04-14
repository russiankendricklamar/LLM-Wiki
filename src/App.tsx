import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageLayout } from './components/PageLayout';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { KnowledgeGraph } from './components/KnowledgeGraph';
import { HomeHero } from './components/HomeHero';
import { ProjectsPage } from './components/ProjectsPage';
import { getAllPages } from './lib/content-loader';
import { cn } from './lib/utils';

// Growth state metadata — surfaced as a small badge on article pages
const GROWTH_LABEL = {
  seedling: { en: 'Seedling', ru: 'Росток', emoji: '🌱', tone: 'text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
  budding: { en: 'Budding', ru: 'Бутон', emoji: '🌿', tone: 'text-lime-600 dark:text-lime-300 bg-lime-500/10 border-lime-500/20' },
  evergreen: { en: 'Evergreen', ru: 'Вечнозелёный', emoji: '🌳', tone: 'text-teal-600 dark:text-teal-300 bg-teal-500/10 border-teal-500/20' },
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
      className={cn("mx-auto w-full", isGraphPage ? "max-w-none h-[calc(100vh-8rem)]" : "max-w-3xl")}
    >
      {!isGraphPage && (
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{category}</span>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">{title}</span>
          </div>
          {growthInfo && (
            <span className={cn(
              "shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
              growthInfo.tone
            )}>
              <span>{growthInfo.emoji}</span>
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
        <MarkdownRenderer content={content} />
      )}
    </motion.div>
  );
};

const AnimatedRoutes = ({ lang }: { lang: 'en' | 'ru' }) => {
  const location = useLocation();
  const currentPages = getAllPages().filter(p => p.metadata.lang === lang);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname + lang}>
        {/* Index route — cinematic hero landing */}
        <Route path="/" element={<HomeHero lang={lang} />} />

        {/* Projects index — grid of all projects */}
        <Route path="/projects" element={<ProjectsPage lang={lang} />} />

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
    </AnimatePresence>
  );
};

const RouterShell = ({ lang, setLang }: { lang: 'en' | 'ru'; setLang: (lang: 'en' | 'ru') => void }) => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  return (
    <PageLayout lang={lang} setLang={setLang} fullBleed={isHome}>
      <AnimatedRoutes lang={lang} />
    </PageLayout>
  );
};

export default function App() {
  const [lang, setLang] = React.useState<'en' | 'ru'>('ru');

  return (
    <HashRouter>
      <RouterShell lang={lang} setLang={setLang} />
    </HashRouter>
  );
}
