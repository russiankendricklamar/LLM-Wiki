import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageLayout } from './components/PageLayout';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { aboutMeMarkdown, blackScholesMarkdown } from './data/mockData';

const PageContent = ({ category, title, content }: { category: string, title: string, content: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="max-w-3xl mx-auto"
  >
    <div className="mb-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
      <span>{category}</span>
      <span>/</span>
      <span className="text-zinc-900 dark:text-zinc-100 font-medium">{title}</span>
    </div>
    <MarkdownRenderer content={content} />
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageContent category="Главная" title="Обо мне" content={aboutMeMarkdown} />} />
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
