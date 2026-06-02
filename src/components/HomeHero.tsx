import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, FolderGit2, BookOpen, UserCircle2, GithubIcon, Network } from 'lucide-react';

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
  },
  ru: {
    eyebrow: 'КОЛИЧЕСТВЕННЫЙ АНАЛИТИК · AI-ИНЖЕНЕР',
    titleLines: ['EXPLORE', 'BUILD', 'RELEASE'],
    subtitle: 'Строю количественные модели и LLM-агентов. Главный экономист в Банке России — на стыке квантовой физики, финансовой математики и современного ИИ.',
    ctaAbout: 'Обо мне',
    ctaProjects: 'Проекты',
    ctaKnowledge: 'База знаний',
    ctaGraph: 'Граф',
  },
};

export const HomeHero: React.FC<HomeHeroProps> = ({ lang }) => {
  const copy = COPY[lang];

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

      <div className="relative z-10 grid h-full grid-cols-1 gap-8 px-6 pb-10 pt-8 sm:px-10 lg:grid-cols-1 lg:gap-10 lg:px-14 lg:pt-12 xl:gap-14 xl:px-20">

        {/* LEFT — personal intro (Now full width but maintaining its style) */}
        <div className="flex min-w-0 min-h-0 flex-col justify-between h-full">
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
              to="/about"
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
      </div>
    </div>
  );
};
