import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageLayout } from './components/PageLayout';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { KnowledgeGraph } from './components/KnowledgeGraph';
import { getAllPages } from './lib/content-loader';

const PageContent = ({ category, title, content, isHome, lang }: { category: string, title: string, content: string, isHome?: boolean, lang: 'en' | 'ru' }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="max-w-3xl mx-auto"
  >
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span>{category}</span>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-medium">{title}</span>
      </div>
    </div>
    <MarkdownRenderer content={content} />
    
    {isHome && (
      <div className="mt-16 pt-16 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">
          {lang === 'en' ? 'Knowledge Map' : 'Карта знаний'}
        </h2>
        <KnowledgeGraph lang={lang} />
      </div>
    )}
  </motion.div>
);

const AnimatedRoutes = ({ lang }: { lang: 'en' | 'ru' }) => {
  const location = useLocation();
  const allPages = getAllPages();
  const currentPages = allPages.filter(p => p.metadata.lang === lang);

  // Find the "Home" page for the current language
  const homePage = currentPages.find(p => p.metadata.order === 1 && (p.metadata.category === 'Home' || p.metadata.category === 'Главная'));

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname + lang}>
        {/* Index route */}
        <Route 
          path="/" 
          element={
            homePage ? (
              <PageContent 
                category={homePage.metadata.category} 
                title={homePage.metadata.title} 
                content={homePage.content}
                isHome={true}
                lang={lang}
              />
            ) : (
              <div className="text-center py-20 text-zinc-500">No home page found for {lang}</div>
            )
          } 
        />

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
              />
            } 
          />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [lang, setLang] = React.useState<'en' | 'ru'>('ru');

  return (
    <HashRouter>
      <PageLayout lang={lang} setLang={setLang}>
        <AnimatedRoutes lang={lang} />
      </PageLayout>
    </HashRouter>
  );
}
