import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, FolderGit2, BookOpen, UserCircle2, GithubIcon, Network, Link2, Clock, Sparkles } from 'lucide-react';
import { getFeaturedItems } from '../lib/content-loader';

// Extract the first meaningful paragraph from markdown content, stripping formatting
const extractDescription = (content: string): string => {
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('#')) continue;
    if (trimmed.startsWith('$$')) continue;
    if (trimmed.startsWith('```')) continue;
    return trimmed
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, slug, alias) => alias || slug)
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\$([^$]+)\$/g, '$1')
      .trim();
  }
  return '';
};

const countWikilinks = (content: string): number =>
  (content.match(/\[\[/g) || []).length;

const readingTime = (content: string): number => {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

const GROWTH_LABEL: Record<string, { en: string; ru: string }> = {
  seedling:  { en: 'SEEDLING',  ru: 'РОСТОК' },
  budding:   { en: 'BUDDING',   ru: 'РАЗВИТАЯ' },
  evergreen: { en: 'EVERGREEN', ru: 'ЗРЕЛАЯ' },
};

interface HomeHeroProps {
  lang: 'en' | 'ru';
}

const COPY = {
  en: {
    eyebrow: 'QUANT ANALYST · AI ENGINEER',
    titleLines: ['EXPLORE', 'BUILD', 'RELEASE'],
    subtitle: 'I build quantitative models and LLM agents. Principal Economist at the Bank of Russia — bridging computational physics, financial mathematics and modern AI.',
    ctaAbout: 'About me',
    ctaProjects: 'Projects',
    ctaKnowledge: 'Knowledge base',
    ctaGraph: 'Graph',
    featuredEyebrow: 'PICK A TOPIC TO',
    featuredEyebrow2: 'DIVE INTO',
    readArticle: 'Read more',
    typeArticle: 'ARTICLE',
    typeProject: 'PROJECT',
    counter: (i: number, n: number) => `${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`,
  },
  ru: {
    eyebrow: 'КОЛИЧЕСТВЕННЫЙ АНАЛИТИК · AI-ИНЖЕНЕР',
    titleLines: ['EXPLORE', 'BUILD', 'RELEASE'],
    subtitle: 'Строю количественные модели и LLM-агентов. Главный экономист в Банке России — на стыке квантовой физики, финансовой математики и современного ИИ.',
    ctaAbout: 'Обо мне',
    ctaProjects: 'Проекты',
    ctaKnowledge: 'База знаний',
    ctaGraph: 'Граф',
    featuredEyebrow: 'ВЫБЕРИ ТЕМУ,',
    featuredEyebrow2: 'ЧТОБЫ ПОГРУЗИТЬСЯ',
    readArticle: 'Подробнее',
    typeArticle: 'СТАТЬЯ',
    typeProject: 'ПРОЕКТ',
    counter: (i: number, n: number) => `${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`,
  },
};

const AUTO_ADVANCE_MS = 4500;

// Category → gradient + accent colour for imageless cards
const CATEGORY_STYLES: Record<string, { bg: string; accent: string }> = {
  finance:               { bg: 'linear-gradient(135deg,#1e4080 0%,#0d1a3a 100%)', accent: '#93c5fd' },
  финансы:               { bg: 'linear-gradient(135deg,#1e4080 0%,#0d1a3a 100%)', accent: '#93c5fd' },
  physics:               { bg: 'linear-gradient(135deg,#4a1a9e 0%,#1a0a3a 100%)', accent: '#c4b5fd' },
  физика:                { bg: 'linear-gradient(135deg,#4a1a9e 0%,#1a0a3a 100%)', accent: '#c4b5fd' },
  'stochastic processes':{ bg: 'linear-gradient(135deg,#0a6648 0%,#061a12 100%)', accent: '#6ee7b7' },
  'стохастические процессы':{ bg: 'linear-gradient(135deg,#0a6648 0%,#061a12 100%)', accent: '#6ee7b7' },
  'machine learning':    { bg: 'linear-gradient(135deg,#b04010 0%,#1c0a04 100%)', accent: '#fcd34d' },
  'машинное обучение':   { bg: 'linear-gradient(135deg,#b04010 0%,#1c0a04 100%)', accent: '#fcd34d' },
  'risk management':     { bg: 'linear-gradient(135deg,#7f1d1d 0%,#1c0505 100%)', accent: '#fca5a5' },
  'управление рисками':  { bg: 'linear-gradient(135deg,#7f1d1d 0%,#1c0505 100%)', accent: '#fca5a5' },
  'llm':                 { bg: 'linear-gradient(135deg,#1a3d2e 0%,#0a1a12 100%)', accent: '#86efac' },
  'large language models':{ bg: 'linear-gradient(135deg,#1a3d2e 0%,#0a1a12 100%)', accent: '#86efac' },
  'большие языковые модели':{ bg: 'linear-gradient(135deg,#1a3d2e 0%,#0a1a12 100%)', accent: '#86efac' },
  'algorithms':            { bg: 'linear-gradient(135deg,#0e3460 0%,#070d1a 100%)', accent: '#7dd3fc' },
  'алгоритмы и мл':        { bg: 'linear-gradient(135deg,#0e3460 0%,#070d1a 100%)', accent: '#7dd3fc' },
  'algorithms & ml':       { bg: 'linear-gradient(135deg,#0e3460 0%,#070d1a 100%)', accent: '#7dd3fc' },
  'quantum physics':       { bg: 'linear-gradient(135deg,#1a0a5e 0%,#08041a 100%)', accent: '#a5b4fc' },
  'квантовая физика':      { bg: 'linear-gradient(135deg,#1a0a5e 0%,#08041a 100%)', accent: '#a5b4fc' },
};

const getCategoryStyle = (category: string) =>
  CATEGORY_STYLES[category.toLowerCase()] ??
  { bg: 'linear-gradient(135deg,#1e3a8a 0%,#0f172a 55%,#064e3b 100%)', accent: '#a5f3fc' };

// Cinematic crossfade + zoom — no horizontal slide
const imageVariants = {
  enter: { opacity: 0, scale: 1.07 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
};

// Text reveals from below on advance, from above on back
const textVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 18 : -18,
    opacity: 0,
  }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({
    y: direction > 0 ? -18 : 18,
    opacity: 0,
  }),
};

export const HomeHero: React.FC<HomeHeroProps> = ({ lang }) => {
  const copy = COPY[lang];
  const featured = getFeaturedItems(lang);
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);

  const n = featured.length;
  const hasFeatured = n > 0;
  const safeIndex = hasFeatured ? ((index % n) + n) % n : 0;
  const current = hasFeatured ? featured[safeIndex] : null;

  const paginate = useCallback((dir: number) => {
    setState(([prev]) => [prev + dir, dir]);
  }, []);

  const resumeTimerRef = React.useRef<number | null>(null);

  const handleDragStart = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setIsPaused(true);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number; y: number } }) => {
    const THRESHOLD = 50;
    if (Math.abs(info.offset.x) > THRESHOLD && Math.abs(info.offset.y) < 40) {
      paginate(info.offset.x < 0 ? 1 : -1);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
      resumeTimerRef.current = null;
    }, 3000);
  };

  React.useEffect(() => {
    return () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Auto-advance — resets whenever slide changes or pause state changes
  useEffect(() => {
    if (isPaused || !hasFeatured) return;
    const id = setInterval(() => paginate(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isPaused, hasFeatured, safeIndex, paginate]);

  return (
    <div className="relative min-h-full w-full overflow-y-auto lg:h-full lg:overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(10,12,16,0.92) 0%, rgba(10,12,16,0.55) 45%, rgba(10,12,16,0.25) 70%, rgba(10,12,16,0.85) 100%), url('/hero-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,rgba(30,58,138,0.35),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(16,185,129,0.12),transparent_55%),linear-gradient(180deg,#050608_0%,#0a0c10_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 grid h-full grid-cols-1 gap-8 px-6 pb-10 pt-8 sm:px-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-10 lg:px-14 lg:pt-12 xl:gap-14 xl:px-20">

        {/* LEFT — personal intro */}
        <div className="flex min-w-0 min-h-0 flex-col justify-between">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-400">
            <UserCircle2 className="h-3.5 w-3.5 shrink-0" />
            <span>{copy.eyebrow}</span>
          </div>

          <div className="flex flex-1 flex-col justify-center py-4 lg:py-6">
            <h1
              className="font-black leading-[0.85] tracking-[-0.05em] text-white"
              style={{ fontSize: 'clamp(2.25rem, 12vw, 9.5rem)' }}
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

            <motion.a
              href="https://github.com/russiankendricklamar"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors lg:hidden"
            >
              <GithubIcon className="h-4 w-4" />
              <span className="underline underline-offset-4">github.com/russiankendricklamar</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:flex items-stretch gap-3"
          >
            {/* About — 2×2 tall primary button */}
            <Link
              to="/about"
              className="group relative inline-flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-7 font-semibold text-zinc-900 shadow-xl shadow-black/30 transition hover:bg-zinc-100"
              style={{ minWidth: '6rem' }}
            >
              <UserCircle2 className="h-5 w-5" />
              <span className="text-sm">{copy.ctaAbout}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Stack 1: Projects + Knowledge */}
            <div className="flex w-36 flex-col gap-3">
              <Link
                to="/projects"
                className="group flex flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
              >
                <FolderGit2 className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-white" />
                <span className="font-medium">{copy.ctaProjects}</span>
              </Link>
              <Link
                to="/knowledge-graph"
                className="group flex flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
              >
                <BookOpen className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-white" />
                <span className="font-medium">{copy.ctaKnowledge}</span>
              </Link>
            </div>

            {/* Stack 2: GitHub + Graph */}
            <div className="flex w-36 flex-col gap-3">
              <a
                href="https://github.com/russiankendricklamar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
              >
                <GithubIcon className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-white" />
                <span className="font-medium">GitHub</span>
              </a>
              <Link
                to="/knowledge-graph"
                className="group flex flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
              >
                <Network className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-white" />
                <span className="font-medium">{copy.ctaGraph}</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 gap-3 lg:hidden"
          >
            <Link
              to="/about"
              className="group relative flex flex-col items-start gap-2 overflow-hidden rounded-2xl bg-white px-4 py-4 font-semibold text-zinc-900 shadow-xl shadow-black/30 transition hover:bg-zinc-100"
            >
              <UserCircle2 className="h-5 w-5" />
              <span className="text-sm">{copy.ctaAbout}</span>
              <ArrowRight className="h-4 w-4 self-end transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
            >
              <FolderGit2 className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
              <span className="font-medium">{copy.ctaProjects}</span>
            </Link>
            <Link
              to="/knowledge-graph"
              className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
            >
              <BookOpen className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
              <span className="font-medium">{copy.ctaKnowledge}</span>
            </Link>
            <Link
              to="/knowledge-graph"
              className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
            >
              <Network className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
              <span className="font-medium">{copy.ctaGraph}</span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — featured carousel */}
        {hasFeatured && current && (
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex min-h-0 min-w-0 flex-col self-center rounded-[32px] border border-white/10 bg-black/55 p-5 backdrop-blur-xl lg:p-6"
          >
            {/* Header: eyebrow + progress + arrows */}
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

            {/* Progress bar — key resets the animation on every slide change */}
            <div className="mt-3 h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                key={`progress-${safeIndex}-${isPaused}`}
                className="h-full origin-left bg-white/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? 0 : 1 }}
                transition={
                  isPaused
                    ? { duration: 0 }
                    : { duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }
                }
              />
            </div>

            {/* Image area — square frame, matches square cover images perfectly */}
            <div className="relative mt-4 w-full aspect-square overflow-hidden rounded-[24px]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={current.metadata.slug}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    opacity: { duration: 0.5, ease: 'easeInOut' },
                    scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  dragDirectionLock
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <Link to={current.metadata.slug} className="relative block h-full w-full">
                    {current.metadata.type === 'project' && current.metadata.image ? (
                      <img
                        src={current.metadata.image}
                        alt={current.metadata.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (() => {
                        const style = getCategoryStyle(current.metadata.category);
                        const desc = extractDescription(current.content);
                        const links = countWikilinks(current.content);
                        const mins = readingTime(current.content);
                        const growth = current.metadata.growth;
                        const growthText = growth ? GROWTH_LABEL[growth]?.[lang] : null;
                        return (
                          <div
                            className="relative h-full w-full overflow-hidden flex flex-col p-6 lg:p-7"
                            style={{ background: style.bg }}
                          >
                            {/* Subtle pattern overlay */}
                            <div
                              className="absolute inset-0 pointer-events-none opacity-[0.06]"
                              style={{
                                backgroundImage:
                                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                                backgroundSize: '24px 24px',
                              }}
                            />

                            {/* Top row — category + growth badge (offset below the floating type badge) */}
                            <div className="relative mt-9 flex items-start justify-between gap-3">
                              <span
                                className="text-[10px] font-bold uppercase tracking-[0.22em]"
                                style={{ color: style.accent, opacity: 0.95 }}
                              >
                                {current.metadata.category}
                              </span>
                              {growthText && (
                                <span
                                  className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                                  style={{
                                    color: style.accent,
                                    borderColor: style.accent + '55',
                                    background: 'rgba(0,0,0,0.25)',
                                  }}
                                >
                                  <Sparkles className="h-2.5 w-2.5" />
                                  {growthText}
                                </span>
                              )}
                            </div>

                            {/* Title + accent bar */}
                            <div className="relative mt-5">
                              <h3
                                className="font-black leading-[0.95] tracking-tight text-white break-words"
                                style={{ fontSize: 'clamp(1.35rem, 2.8vw, 2.1rem)' }}
                              >
                                {current.metadata.title}
                              </h3>
                              <div
                                className="mt-3 h-0.5 w-10 rounded-full"
                                style={{ background: style.accent }}
                              />
                            </div>

                            {/* Description */}
                            {desc && (
                              <p className="relative mt-4 line-clamp-5 text-[12px] leading-relaxed text-white/75">
                                {desc}
                              </p>
                            )}

                            {/* Spacer */}
                            <div className="flex-1" />

                            {/* Meta bar — links count + reading time */}
                            <div className="relative mt-4 flex items-center gap-4 border-t border-white/10 pt-3 text-[10px] font-medium tracking-wide text-white/60">
                              <span className="inline-flex items-center gap-1.5">
                                <Link2 className="h-3 w-3" style={{ color: style.accent }} />
                                {links} {lang === 'ru' ? 'связей' : 'links'}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-3 w-3" style={{ color: style.accent }} />
                                {mins} {lang === 'ru' ? 'мин' : 'min'}
                              </span>
                            </div>

                          </div>
                        );
                      })()}

                    {/* Type badge */}
                    <motion.div
                      className="absolute left-4 top-4"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.35 }}
                    >
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-md ${
                          current.metadata.type === 'project'
                            ? 'border-amber-300/30 bg-amber-500/15 text-amber-200'
                            : 'border-sky-300/30 bg-sky-500/15 text-sky-200'
                        }`}
                      >
                        {current.metadata.type === 'project' ? copy.typeProject : copy.typeArticle}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Title + counter */}
            <div className="mt-4 flex items-end justify-between gap-3">
              <div className="min-w-0 flex-1 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={current.metadata.slug + ':text'}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

              {/* Dot indicators */}
              <div className="flex shrink-0 items-center gap-1.5 self-start pt-1">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setState([i, i > safeIndex ? 1 : -1])}
                    aria-label={`Slide ${i + 1}`}
                    className="group relative h-1.5 rounded-full transition-all duration-300 focus:outline-none"
                    style={{ width: i === safeIndex ? 20 : 6 }}
                  >
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        i === safeIndex ? 'bg-white/80' : 'bg-white/25 group-hover:bg-white/40'
                      }`}
                    />
                  </button>
                ))}
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
