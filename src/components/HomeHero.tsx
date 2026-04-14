import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, Compass, FolderGit2 } from 'lucide-react';
import { getFeaturedItems } from '../lib/content-loader';

interface HomeHeroProps {
  lang: 'en' | 'ru';
}

const COPY = {
  en: {
    eyebrow: 'KNOWLEDGE GARDEN',
    titleLines: ['EXPLORE', 'KNOWLEDGE', 'FRONTIERS'],
    subtitle: 'A garden of notes on quant finance, physics, large language models — and the projects I build along the way.',
    ctaEnter: 'Enter the garden',
    ctaGraph: 'Knowledge graph',
    ctaProjects: 'Projects',
    featuredEyebrow: 'PICK A TOPIC TO',
    featuredEyebrow2: 'DIVE INTO',
    readArticle: 'Read more',
    typeArticle: 'ARTICLE',
    typeProject: 'PROJECT',
    counter: (i: number, n: number) => `${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`,
  },
  ru: {
    eyebrow: 'САД ЗНАНИЙ',
    titleLines: ['ИССЛЕДУЙ', 'ГРАНИЦЫ', 'ЗНАНИЯ'],
    subtitle: 'Сад заметок о квант-финансах, физике, больших языковых моделях — и проекты, которые рождаются по пути.',
    ctaEnter: 'Войти в сад',
    ctaGraph: 'Граф знаний',
    ctaProjects: 'Проекты',
    featuredEyebrow: 'ВЫБЕРИ ТЕМУ,',
    featuredEyebrow2: 'ЧТОБЫ ПОГРУЗИТЬСЯ',
    readArticle: 'Подробнее',
    typeArticle: 'СТАТЬЯ',
    typeProject: 'ПРОЕКТ',
    counter: (i: number, n: number) => `${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`,
  },
};

// Direction-aware slide animation for the featured carousel
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
  }),
};

export const HomeHero: React.FC<HomeHeroProps> = ({ lang }) => {
  const copy = COPY[lang];
  const featured = getFeaturedItems(lang);
  // [index, direction] — direction tracks last navigation for slide animation
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);

  const hasFeatured = featured.length > 0;
  const n = featured.length;
  const safeIndex = hasFeatured ? ((index % n) + n) % n : 0;
  const current = hasFeatured ? featured[safeIndex] : null;

  const paginate = (dir: number) => setState([index + dir, dir]);

  return (
    <div className="relative h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Background image — drop /hero-bg.jpg in public/ to swap */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(10,12,16,0.92) 0%, rgba(10,12,16,0.55) 45%, rgba(10,12,16,0.25) 70%, rgba(10,12,16,0.85) 100%), url('/hero-bg.jpg')",
        }}
      />
      {/* Fallback gradient layer (shows through if image missing) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,rgba(30,58,138,0.35),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(16,185,129,0.12),transparent_55%),linear-gradient(180deg,#050608_0%,#0a0c10_100%)]" />
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 grid h-full grid-cols-1 gap-8 px-6 pb-10 pt-8 sm:px-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-10 lg:px-14 lg:pt-12 xl:gap-14 xl:px-20">
        {/* LEFT — headline column. min-w-0 + min-h-0 prevents grid item from overflowing. */}
        <div className="flex min-w-0 min-h-0 flex-col justify-between">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-400">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span>{copy.eyebrow}</span>
          </div>

          <div className="flex flex-1 flex-col justify-center py-6">
            <h1
              className="font-black leading-[0.85] tracking-[-0.05em] text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 7.25rem)' }}
            >
              {copy.titleLines.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.div>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex max-w-md items-start gap-3"
            >
              <div className="mt-1 h-px w-8 shrink-0 bg-zinc-400/60" />
              <p className="text-sm text-zinc-300/90 leading-relaxed">{copy.subtitle}</p>
            </motion.div>
          </div>

          {/* Search-widget-style CTA row (mirrors reference layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              to="/knowledge-graph"
              className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
            >
              <Compass className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
              <span className="font-medium">{copy.ctaGraph}</span>
            </Link>

            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
            >
              <FolderGit2 className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
              <span className="font-medium">{copy.ctaProjects}</span>
            </Link>

            <Link
              to={current?.metadata.slug ?? '/knowledge-graph'}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-zinc-900 shadow-xl shadow-black/30 transition hover:bg-zinc-100"
            >
              <span className="relative z-10">{copy.ctaEnter}</span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — featured card */}
        {hasFeatured && current && (
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full min-h-0 min-w-0 flex-col rounded-[32px] border border-white/10 bg-black/55 p-5 backdrop-blur-xl lg:p-6"
          >
            {/* Header: eyebrow + arrows */}
            <div className="flex items-start justify-between gap-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 leading-snug">
                <div>{copy.featuredEyebrow}</div>
                <div>{copy.featuredEyebrow2}</div>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-zinc-300 transition hover:scale-105 hover:bg-white/10 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  aria-label="Next"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-zinc-300 transition hover:scale-105 hover:bg-white/10 hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Image area — fills available vertical space */}
            <div className="relative mt-4 flex-1 min-h-0 overflow-hidden rounded-[24px]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={current.metadata.slug}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 260, damping: 30 },
                    opacity: { duration: 0.35 },
                    scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="absolute inset-0"
                >
                  <Link to={current.metadata.slug} className="relative block h-full w-full">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        // Stacked background: image on top, gradient underneath.
                        // If the image file is missing the gradient still renders as placeholder.
                        backgroundImage: current.metadata.image
                          ? `url('${current.metadata.image}'), linear-gradient(135deg,#1e3a8a 0%,#0f172a 50%,#064e3b 100%)`
                          : 'linear-gradient(135deg,#1e3a8a 0%,#0f172a 50%,#064e3b 100%)',
                      }}
                    >
                      <div className="h-full w-full bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    </div>
                    {/* Type badge — distinguishes articles from projects in the mixed carousel */}
                    <div className="absolute left-4 top-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-md ${
                          current.metadata.type === 'project'
                            ? 'border-amber-300/30 bg-amber-500/15 text-amber-200'
                            : 'border-sky-300/30 bg-sky-500/15 text-sky-200'
                        }`}
                      >
                        {current.metadata.type === 'project' ? copy.typeProject : copy.typeArticle}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Title + counter — animates in unison with the image */}
            <div className="mt-4 flex items-end justify-between gap-3">
              <div className="min-w-0 flex-1 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={current.metadata.slug + ':text'}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 260, damping: 30 },
                      opacity: { duration: 0.3 },
                    }}
                    className="min-w-0"
                  >
                    <div className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {current.metadata.category}
                    </div>
                    <Link
                      to={current.metadata.slug}
                      className="mt-1 line-clamp-2 block text-xl font-bold leading-[1.1] tracking-tight text-white hover:text-zinc-200 lg:text-2xl"
                    >
                      {current.metadata.title}
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="shrink-0 self-end pb-1 text-right text-[11px] font-semibold tracking-[0.15em] text-zinc-500">
                {copy.counter(safeIndex, n)}
              </div>
            </div>

            <Link
              to={current.metadata.slug}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/15"
            >
              {copy.readArticle}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.aside>
        )}
      </div>
    </div>
  );
};
