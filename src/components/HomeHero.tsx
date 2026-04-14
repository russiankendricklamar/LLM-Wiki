import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, FolderGit2, BookOpen, UserCircle2 } from 'lucide-react';
import { getFeaturedItems } from '../lib/content-loader';

interface HomeHeroProps {
  lang: 'en' | 'ru';
}

const COPY = {
  en: {
    eyebrow: 'QUANT ANALYST · AI ENGINEER',
    titleLines: ['EGOR', 'GALKIN'],
    subtitle: 'I build quantitative models and LLM agents. Principal Economist at the Bank of Russia — bridging computational physics, financial mathematics and modern AI.',
    ctaAbout: 'About me',
    ctaProjects: 'Projects',
    ctaKnowledge: 'Knowledge base',
    featuredEyebrow: 'PICK A TOPIC TO',
    featuredEyebrow2: 'DIVE INTO',
    readArticle: 'Read more',
    typeArticle: 'ARTICLE',
    typeProject: 'PROJECT',
    counter: (i: number, n: number) => `${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`,
  },
  ru: {
    eyebrow: 'КВАНТ-АНАЛИТИК · AI-ИНЖЕНЕР',
    titleLines: ['ГАЛКИН', 'ЕГОР'],
    subtitle: 'Строю количественные модели и LLM-агентов. Главный экономист в Банке России — на стыке вычислительной физики, финансовой математики и современного ИИ.',
    ctaAbout: 'Обо мне',
    ctaProjects: 'Проекты',
    ctaKnowledge: 'База знаний',
    featuredEyebrow: 'ВЫБЕРИ ТЕМУ,',
    featuredEyebrow2: 'ЧТОБЫ ПОГРУЗИТЬСЯ',
    readArticle: 'Подробнее',
    typeArticle: 'СТАТЬЯ',
    typeProject: 'ПРОЕКТ',
    counter: (i: number, n: number) => `${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`,
  },
};

const AUTO_ADVANCE_MS = 4500;

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

  // Auto-advance — resets whenever slide changes or pause state changes
  useEffect(() => {
    if (isPaused || !hasFeatured) return;
    const id = setInterval(() => paginate(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isPaused, hasFeatured, safeIndex, paginate]);

  return (
    <div className="relative h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-zinc-950 text-zinc-50">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              to="/about"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-zinc-900 shadow-xl shadow-black/30 transition hover:bg-zinc-100"
            >
              <UserCircle2 className="h-4 w-4" />
              <span>{copy.ctaAbout}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
            >
              <FolderGit2 className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
              <span className="font-medium">{copy.ctaProjects}</span>
            </Link>

            <Link
              to="/knowledge-graph"
              className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
            >
              <BookOpen className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
              <span className="font-medium">{copy.ctaKnowledge}</span>
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
            className="flex h-full min-h-0 min-w-0 flex-col rounded-[32px] border border-white/10 bg-black/55 p-5 backdrop-blur-xl lg:p-6"
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

            {/* Image area */}
            <div className="relative mt-4 flex-1 min-h-0 overflow-hidden rounded-[24px]">
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
                  className="absolute inset-0"
                >
                  <Link to={current.metadata.slug} className="relative block h-full w-full">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: current.metadata.image
                          ? `url('${current.metadata.image}'), linear-gradient(135deg,#1e3a8a 0%,#0f172a 50%,#064e3b 100%)`
                          : 'linear-gradient(135deg,#1e3a8a 0%,#0f172a 50%,#064e3b 100%)',
                      }}
                    >
                      <div className="h-full w-full bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    </div>

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
