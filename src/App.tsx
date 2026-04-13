import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageLayout } from './components/PageLayout';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { aboutMeEn, aboutMeRu, blackScholesMarkdown } from './data/mockData';

const PageContent = ({ category, title, content, children }: { category: string, title: string, content: string, children?: React.ReactNode }) => (
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
      {children}
    </div>
    <MarkdownRenderer content={content} />
  </motion.div>
);

const AboutPage = () => {
  const [lang, setLang] = React.useState<'en' | 'ru'>('ru');
  return (
    <PageContent 
      category="Home" 
      title={lang === 'en' ? 'About Me' : 'Обо мне'} 
      content={lang === 'en' ? aboutMeEn : aboutMeRu}
    >
      <div className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-md text-xs font-medium">
        <button 
          onClick={() => setLang('en')}
          className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang('ru')}
          className={`px-2 py-1 rounded ${lang === 'ru' ? 'bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
        >
          RU
        </button>
      </div>
    </PageContent>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/finance/black-scholes" element={<PageContent category="Quantitative Finance" title="Black-Scholes Model" content={blackScholesMarkdown} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <HashRouter>
      <PageLayout>
        <AnimatedRoutes />
      </PageLayout>
    </HashRouter>
  );
}
