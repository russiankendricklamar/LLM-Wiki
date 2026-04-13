import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageLayout } from './components/PageLayout';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { getAllPages } from './lib/content-loader';

const PageContent = ({ category, title, content }: { category: string, title: string, content: string }) => (
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
  </motion.div>
);

const AnimatedRoutes = ({ lang }: { lang: 'en' | 'ru' }) => {
  const location = useLocation();
  const allPages = getAllPages();
  const currentPages = allPages.filter(p => p.metadata.lang === lang);

  // Find the "Home" page for the current language
  // We'll assume the page with category "Home" or "Главная" and order 1 is the index
  const homePage = currentPages.find(p => p.metadata.order === 1 && (p.metadata.category === 'Home' || p.metadata.category === 'Главная'));

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname + lang}>
        {/* Index route redirects to the home page slug or renders it directly */}
        <Route 
          path="/" 
          element={
            homePage ? (
              <PageContent 
                category={homePage.metadata.category} 
                title={homePage.metadata.title} 
                content={homePage.content} 
              />
            ) : (
              <div className="text-center py-20 text-zinc-500">No home page found for {lang}</div>
            )
          } 
        />

        {/* Dynamic routes for all other pages */}
        {currentPages.map(page => (
          <Route 
            key={page.metadata.slug}
            path={page.metadata.slug} 
            element={
              <PageContent 
                category={page.metadata.category} 
                title={page.metadata.title} 
                content={page.content} 
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
