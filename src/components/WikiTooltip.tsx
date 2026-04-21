import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getPagePreview } from '@/lib/content-loader';

interface WikiTooltipProps {
  slug: string;
  title: string;
  children: React.ReactNode;
}

export const WikiTooltip: React.FC<WikiTooltipProps> = ({ slug, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const preview = isVisible ? getPagePreview(slug) : '';

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && preview && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 rounded-xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800 pointer-events-none"
          >
            <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
              {title}
            </div>
            <div className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {preview}
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-zinc-900 border-r border-b border-zinc-200 dark:border-zinc-800 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
