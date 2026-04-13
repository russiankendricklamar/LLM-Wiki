import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageLayout } from './components/PageLayout';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { aboutMeEn, aboutMeRu, blackScholesMarkdown, blackScholesMarkdownRu, levyProcessMarkdownEn, levyProcessMarkdownRu } from './data/mockData';

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
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageContent 
              category={lang === 'en' ? 'Home' : 'Главная'} 
              title={lang === 'en' ? 'About Me' : 'Обо мне'} 
              content={lang === 'en' ? aboutMeEn : aboutMeRu} 
            />
          } 
        />
        <Route 
          path="/finance/black-scholes" 
          element={
            <PageContent 
              category={lang === 'en' ? 'Quantitative Finance' : 'Количественные финансы'} 
              title={lang === 'en' ? 'Black-Scholes Model' : 'Модель Блэка-Шоулза'} 
              content={lang === 'en' ? blackScholesMarkdown : blackScholesMarkdownRu} 
            />
          } 
        />
        <Route 
          path="/finance/levy-processes" 
          element={
            <PageContent 
              category={lang === 'en' ? 'Quantitative Finance' : 'Количественные финансы'} 
              title={lang === 'en' ? 'Lévy Processes' : 'Процессы Леви'} 
              content={lang === 'en' ? levyProcessMarkdownEn : levyProcessMarkdownRu} 
            />
          } 
        />
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
