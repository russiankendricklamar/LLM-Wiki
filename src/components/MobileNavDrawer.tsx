import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { Sidebar } from './Sidebar';

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
  lang: 'en' | 'ru';
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({ open, onClose, lang }) => {
  const location = useLocation();

  // Auto-close when the route changes (user tapped a NavLink inside)
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={lang === 'en' ? 'Navigation' : 'Навигация'}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragDirectionLock
            onDragEnd={(_, info) => {
              if (info.offset.x < -80 && Math.abs(info.offset.y) < 40) {
                onClose();
              }
            }}
            className="fixed left-0 top-0 bottom-0 z-50 flex w-[85vw] max-w-xs flex-col bg-white dark:bg-zinc-950 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-3 h-14 shrink-0">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {lang === 'en' ? 'Navigation' : 'Навигация'}
              </span>
              <button
                onClick={onClose}
                aria-label={lang === 'en' ? 'Close navigation' : 'Закрыть навигацию'}
                className="p-2 -mr-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <Sidebar lang={lang} className="w-full border-r-0 bg-transparent" />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
