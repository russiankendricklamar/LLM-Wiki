import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { getProjects } from '../lib/content-loader';
import type { ProjectStatus } from '../lib/content-loader';

interface ProjectsPageProps {
  lang: 'en' | 'ru';
}

const COPY = {
  en: {
    eyebrow: 'PROJECTS',
    title: 'Things I have built',
    subtitle: 'A growing collection of experiments, tools, and side projects. Some are shipped, some are in flight.',
    open: 'Open project',
    code: 'Code',
    demo: 'Live',
    empty: 'No projects yet. Add one in obsidian-vault/en/projects/.',
  },
  ru: {
    eyebrow: 'ПРОЕКТЫ',
    title: 'Что я построил',
    subtitle: 'Растущая коллекция экспериментов, инструментов и пет-проектов. Что-то выпущено, что-то в работе.',
    open: 'Открыть проект',
    code: 'Код',
    demo: 'Демо',
    empty: 'Проектов пока нет. Добавь файл в obsidian-vault/ru/projects/.',
  },
};

const STATUS_LABEL: Record<ProjectStatus, { en: string; ru: string; tone: string }> = {
  active: { en: 'Active', ru: 'Активный', tone: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20' },
  shipped: { en: 'Shipped', ru: 'Выпущен', tone: 'text-sky-300 bg-sky-500/10 border-sky-400/20' },
  wip: { en: 'WIP', ru: 'В работе', tone: 'text-amber-300 bg-amber-500/10 border-amber-400/20' },
  archived: { en: 'Archived', ru: 'Архив', tone: 'text-zinc-400 bg-zinc-500/10 border-zinc-400/20' },
};

// Container stagger — children inherit delay via variants
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ lang }) => {
  const copy = COPY[lang];
  const projects = getProjects(lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mx-auto w-full max-w-6xl"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {copy.eyebrow}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400">{copy.subtitle}</p>
      </motion.header>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 p-12 text-center text-sm text-zinc-500">
          {copy.empty}
        </div>
      ) : (
        /* Grid fires stagger once the container scrolls into view */
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => {
            const m = project.metadata;
            const techList = m.tech ? m.tech.split(',').map(t => t.trim()).filter(Boolean) : [];
            const statusInfo = m.status ? STATUS_LABEL[m.status] : null;

            return (
              <motion.article
                key={m.slug}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60"
                style={{ willChange: 'transform' }}
              >
                {/* Animated glow border on hover — pseudo-element via box-shadow */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 0 1px rgba(99,102,241,0.35), 0 8px 32px rgba(99,102,241,0.12)',
                  }}
                />

                {/* Cover image with zoom */}
                <Link to={m.slug} className="block aspect-[16/10] overflow-hidden">
                  <motion.div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: m.image
                        ? `url('${m.image}'), linear-gradient(135deg,#1e3a8a 0%,#0f172a 50%,#064e3b 100%)`
                        : 'linear-gradient(135deg,#1e3a8a 0%,#0f172a 50%,#064e3b 100%)',
                    }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    {statusInfo && (
                      <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusInfo.tone}`}>
                        {statusInfo[lang]}
                      </span>
                    )}
                    {m.year && (
                      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">{m.year}</span>
                    )}
                  </div>

                  <Link to={m.slug} className="block">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
                      {m.title}
                    </h2>
                  </Link>

                  {m.description && (
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {m.description}
                    </p>
                  )}

                  {/* Tech tags — stagger within each card on card's whileInView */}
                  {techList.length > 0 && (
                    <motion.div
                      className="mt-4 flex flex-wrap gap-1.5"
                      variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
                    >
                      {techList.map(tech => (
                        <motion.span
                          key={tech}
                          variants={tagVariants}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <Link
                      to={m.slug}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-white"
                    >
                      {copy.open}
                      <motion.span
                        className="inline-flex"
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                    <div className="flex items-center gap-2">
                      {m.github && (
                        <motion.a
                          href={m.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={copy.code}
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.95 }}
                          className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                      )}
                      {m.demo && (
                        <motion.a
                          href={m.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={copy.demo}
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.95 }}
                          className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
};
