import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Network, FileDown } from 'lucide-react';
import { getNavigation } from '../lib/content-loader';

const WIKI_EXCLUDED_CATEGORIES = new Set([
  'Home', 'Главная',
  'Projects', 'Проекты',
  'About', 'About Me', 'Обо мне', 'О себе',
]);

interface AboutPageProps {
  lang: 'en' | 'ru';
}

const ABOUT = {
  en: {
    name: 'EGOR GALKIN',
    role1: 'Principal Economist · Bank of Russia',
    role2: 'Quant Analyst · AI Engineer',
    bio: 'I build quantitative models and LLM agents. At the Bank of Russia I focus on macroeconomic modelling and fair value assessment of financial instruments. On the side I research the intersection of computational physics, financial mathematics, and modern AI.',
    timelineTitle: 'Career',
    timeline: [
      { period: '2025 — present', role: 'Principal Economist / Risk Analyst', org: 'Bank of Russia', desc: 'Fair value of securities and derivatives (IFRS 9/13), process automation for valuation.' },
      { period: '2024 — 2025', role: 'Risk Manager', org: 'Bank of Russia', desc: 'IRB model validation, econometric modelling, capital requirements supervision.' },
      { period: '2023 — 2024', role: 'Risk Analyst', org: 'Bank of Russia', desc: 'Risk assessment of financial instruments, analytical reporting.' },
      { period: '2022 — 2023', role: 'Expert', org: 'Bank of Russia', desc: 'Financial statement analysis (IFRS/RAS), bank business model assessment.' },
      { period: '2019 — 2022', role: 'Event Manager', org: 'BMSTU', desc: 'Financial literacy workshops (ESG, Personal Finance), budget management.' },
    ],
    techTitle: 'Tech Stack',
    techSections: [
      { label: 'Models', items: ['Claude', 'Gemini', 'Phi-4', 'GPT-4o', 'Llama 3'] },
      { label: 'Languages', items: ['Python', 'TypeScript', 'C++', 'SQL'] },
      { label: 'Libraries', items: ['Pandas', 'NumPy', 'SciPy', 'PyTorch', 'QuantLib', 'FastAPI', 'pybind11'] },
      { label: 'Frontend', items: ['Vue 3', 'React', 'Tailwind', 'ECharts', 'Tauri'] },
      { label: 'Infrastructure', items: ['Docker', 'Vite', 'GitHub Actions', 'OpenMP'] },
      { label: 'Finance', items: ['MOEX API', 'CBR', 'Bloomberg', 'IFRS 9/13', 'QuantLib'] },
    ],
    researchTitle: 'Research',
    researchProject: {
      title: 'Domain-Specific SLM for Quantitative Finance',
      badge: 'Nyquist',
      desc: 'Fine-tuned Microsoft Phi-4-mini (3.8B params) on Apple Silicon via MLX into a structured risk intelligence engine — not a chatbot, but a machine-readable stress scenario generator that calls tools, cites regulations, and never hallucinates numbers.',
      stats: [
        { value: '93.3%', label: 'Tool-Use Accuracy' },
        { value: '98 yrs', label: 'Market Data' },
        { value: '134', label: 'Financial Crises' },
        { value: '+25.6pp', label: 'vs V1 Overall' },
      ],
      techniques: ['Tool-Use SFT', 'RAFT', 'CoT Distillation', 'KTO', 'Anti-Forgetting Mix', 'LoRA Routing', 'C++ via pybind11'],
      infra: 'Apple M5 Pro 48 GB · MLX · 3 LoRA adapters (regulatory / pricing / analysis)',
    },
    additionalResearch: [
      {
        title: 'Mathematical modelling of central-bank inflation targeting',
        desc: 'Monetary-policy reaction functions under inflation-expectation shocks in small open economies — Taylor rules, DSGE estimation, and regime robustness under structural breaks.',
      },
      {
        title: 'Non-Gaussian models for structured-product fair value',
        desc: 'Benchmarking heavy-tailed and jump-augmented models (stochastic volatility, Lévy processes, jump-diffusion) against the log-normal baseline for path-dependent and barrier payoffs under IFRS 13.',
      },
    ],
    interestsTitle: 'Interests',
    interests: [
      { title: 'LLM Agents in Finance', desc: 'Building multi-agent systems that interpret macroeconomic protocols, automate IFRS 9 valuation workflows, and generate structured risk reports.' },
      { title: 'Celestial Holography', desc: 'Studying the BMS group, soft theorems, and Pasterski\'s triangle — the deep connection between asymptotic symmetries of flat spacetime and scattering amplitudes.' },
      { title: 'Stochastic Calculus', desc: 'Itô calculus, SDEs, and diffusion processes as the mathematical backbone of both derivatives pricing and quantum mechanics via Wick rotation.' },
      { title: 'Quantitative Risk', desc: 'VaR, stress testing, derivatives pricing under IFRS 9/13, systemic risk via DebtRank, and contagion modelling with network theory.' },
      { title: 'Signal Processing', desc: 'Applying Kalman filters, Hilbert-Huang transforms, wavelet decomposition, and singular spectral analysis to market microstructure data.' },
      { title: 'High-Performance Computing', desc: 'Accelerating GARCH, HMM, and Monte Carlo engines 200x+ with C++ extensions via pybind11 and parallel computation with OpenMP.' },
      { title: 'Quantum Gravity & Information', desc: 'Hawking radiation, the black hole information paradox, Page curves, and the island formula — how unitarity is restored where quantum fields meet event horizons.' },
      { title: 'Digital Gardening', desc: 'Running this site as an Obsidian vault rendered into a living knowledge graph — markdown-first, bilingual, wikilinks resolved client-side, 3D force-graph visualisation.' },
    ],
    projectsTitle: 'Projects',
    viewAll: 'View all projects',
    wikiStatsTitle: 'Knowledge Base',
    wikiStatsTotal: 'articles across',
    wikiStatsCategories: 'categories',
    wikiStatsViewGraph: 'Open knowledge graph',
    cvDownload: 'Download CV',
    cvFile: '/cv/galkin-egor-cv-en.pdf',
    socials: {
      github: 'https://github.com/russiankendricklamar',
      linkedin: 'https://www.linkedin.com/in/russiankendricklamar/?locale=ru',
      email: 'mailto:egor@example.com',
    },
  },
  ru: {
    name: 'ГАЛКИН ЕГОР',
    role1: 'Главный экономист · Банк России',
    role2: 'Квант-аналитик · AI-инженер',
    bio: 'Строю количественные модели и LLM-агентов. В Банке России занимаюсь макроэкономическим моделированием и оценкой справедливой стоимости финансовых инструментов. Параллельно исследую пересечение вычислительной физики, финансовой математики и современного ИИ.',
    timelineTitle: 'Карьера',
    timeline: [
      { period: '2025 — сейчас', role: 'Главный экономист / Риск-аналитик', org: 'Банк России', desc: 'Оценка справедливой стоимости ЦБ и ПФИ (МСФО 9/13), автоматизация процессов оценки.' },
      { period: '2024 — 2025', role: 'Риск-менеджер', org: 'Банк России', desc: 'Валидация ПВР-моделей (IRB), эконометрическое моделирование, надзор за нормативами капитала.' },
      { period: '2023 — 2024', role: 'Риск-аналитик', org: 'Банк России', desc: 'Оценка рисков вложений в ценные бумаги, подготовка аналитических заключений.' },
      { period: '2022 — 2023', role: 'Эксперт', org: 'Банк России', desc: 'Анализ отчётности (РСБУ/МСФО), оценка бизнес-моделей банков.' },
      { period: '2019 — 2022', role: 'Менеджер по мероприятиям', org: 'МГТУ им. Баумана', desc: 'Мастер-классы по финансовой грамотности и ESG, управление бюджетом.' },
    ],
    techTitle: 'Стек технологий',
    techSections: [
      { label: 'Модели', items: ['Claude', 'Gemini', 'Phi-4', 'GPT-4o', 'Llama 3'] },
      { label: 'Языки', items: ['Python', 'TypeScript', 'C++', 'SQL'] },
      { label: 'Библиотеки', items: ['Pandas', 'NumPy', 'SciPy', 'PyTorch', 'QuantLib', 'FastAPI', 'pybind11'] },
      { label: 'Фронтенд', items: ['Vue 3', 'React', 'Tailwind', 'ECharts', 'Tauri'] },
      { label: 'Инфраструктура', items: ['Docker', 'Vite', 'GitHub Actions', 'OpenMP'] },
      { label: 'Финансы', items: ['MOEX API', 'ЦБ РФ', 'Bloomberg', 'МСФО 9/13', 'QuantLib'] },
    ],
    researchTitle: 'Исследования',
    researchProject: {
      title: 'Domain-specific SLM для количественных финансов',
      badge: 'Nyquist',
      desc: 'Дообучил Microsoft Phi-4-mini (3.8B параметров) на Apple Silicon через MLX в структурированный движок риск-аналитики — не чат-бот, а машиночитаемый генератор стресс-сценариев: вызывает инструменты, цитирует НПА, не галлюцинирует в числах.',
      stats: [
        { value: '93.3%', label: 'точность Tool-Use' },
        { value: '98 лет', label: 'рыночных данных' },
        { value: '134', label: 'финансовых кризиса' },
        { value: '+25.6пп', label: 'vs V1 общий счёт' },
      ],
      techniques: ['Tool-Use SFT', 'RAFT', 'CoT Distillation', 'KTO', 'Anti-Forgetting Mix', 'LoRA Routing', 'C++ через pybind11'],
      infra: 'Apple M5 Pro 48 ГБ · MLX · 3 LoRA-адаптера (regulatory / pricing / analysis)',
    },
    additionalResearch: [
      {
        title: 'Математическое моделирование таргетирования инфляции ЦБ',
        desc: 'Функции реакции денежно-кредитной политики на шоки инфляционных ожиданий в малых открытых экономиках — правила Тейлора, оценка DSGE-моделей, устойчивость режима таргетирования при структурных разрывах.',
      },
      {
        title: 'Не-Гауссовские модели для оценки справедливой стоимости структурных продуктов',
        desc: 'Сравнение моделей с тяжёлыми хвостами и скачками (стохастическая волатильность, процессы Леви, jump-diffusion) с лог-нормальным бенчмарком для путевых и барьерных выплат в рамках МСФО 13.',
      },
    ],
    interestsTitle: 'Интересы',
    interests: [
      { title: 'LLM-агенты в финансах', desc: 'Строю мульти-агентные системы, которые интерпретируют макроэкономические протоколы, автоматизируют оценку по МСФО 9 и генерируют структурированные риск-отчёты.' },
      { title: 'Небесная голография', desc: 'Изучаю группу BMS, мягкие теоремы и «треугольник» Пастерски — глубокую связь между асимптотическими симметриями плоского пространства-времени и амплитудами рассеяния.' },
      { title: 'Стохастическое исчисление', desc: 'Исчисление Ито, СДУ и диффузионные процессы как математическая основа оценки деривативов и квантовой механики через поворот Вика.' },
      { title: 'Количественный риск', desc: 'VaR, стресс-тесты, оценка деривативов по МСФО 9/13, системный риск через DebtRank и моделирование контагиона в сетях.' },
      { title: 'Обработка сигналов', desc: 'Фильтры Калмана, преобразование Гильберта-Хуанга, вейвлеты и сингулярный спектральный анализ применительно к микроструктуре рынка.' },
      { title: 'Высокопроизводительные вычисления', desc: 'Ускорение движков GARCH, HMM и Монте-Карло в 200+ раз с помощью расширений C++ через pybind11 и параллельных вычислений на OpenMP.' },
      { title: 'Квантовая гравитация и информация', desc: 'Излучение Хокинга, парадокс информации чёрных дыр, кривая Пейджа и формула островов — как восстанавливается унитарность там, где квантовые поля встречаются с горизонтами событий.' },
      { title: 'Цифровое садоводство', desc: 'Веду эту вики как Obsidian-вольт, рендерящийся в живой граф знаний — markdown-first, билингв, с wikilinks на клиенте и 3D force-graph визуализацией.' },
    ],
    projectsTitle: 'Проекты',
    viewAll: 'Все проекты',
    wikiStatsTitle: 'База знаний',
    wikiStatsTotal: 'статей в',
    wikiStatsCategories: 'категориях',
    wikiStatsViewGraph: 'Открыть граф знаний',
    cvDownload: 'Скачать резюме',
    cvFile: '/cv/galkin-egor-cv.pdf',
    socials: {
      github: 'https://github.com/russiankendricklamar',
      linkedin: 'https://www.linkedin.com/in/russiankendricklamar/?locale=ru',
      email: 'mailto:egor@example.com',
    },
  },
};

export const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const d = ABOUT[lang];

  const wikiStats = React.useMemo(() => {
    const nav = getNavigation(lang);
    const categories = nav
      .filter(cat => !WIKI_EXCLUDED_CATEGORIES.has(cat.title))
      .map(cat => ({ label: cat.title, count: cat.items.length }))
      .filter(c => c.count > 0)
      .sort((a, b) => b.count - a.count);
    const total = categories.reduce((sum, c) => sum + c.count, 0);
    return { categories, total };
  }, [lang]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full space-y-12"
    >
      {/* ── Hero card ── */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        {/* Avatar placeholder */}
        <div className="shrink-0">
          <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-900/30 sm:h-28 sm:w-28">
            <span className="text-4xl font-black text-white leading-none select-none">Е</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <h1
              className="font-black tracking-tight text-zinc-900 dark:text-white"
              style={{ fontSize: 'clamp(2rem, 9vw, 5rem)' }}
            >
              {d.name}
            </h1>
            <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">{d.role1}</p>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{d.role2}</p>
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {d.bio}
          </p>

          {/* Social links + CV download */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={d.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href={d.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={d.socials.email}
              className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
            <a
              href={d.cvFile}
              download
              className="group inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors"
            >
              <FileDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              <span>{d.cvDownload}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Timeline + Tech Stack ── */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto]">
        {/* Timeline */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            {d.timelineTitle}
          </h2>
          <ol className="space-y-5">
            {d.timeline.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="relative flex gap-4"
              >
                {/* Timeline line */}
                {i < d.timeline.length - 1 && (
                  <div className="absolute left-[5px] top-5 h-full w-px bg-zinc-200 dark:bg-zinc-800" />
                )}
                {/* Dot */}
                <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-emerald-500 bg-white dark:bg-zinc-950" />
                <div className="min-w-0 pb-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {item.period}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                    <span className="ml-1.5 font-normal text-zinc-500 dark:text-zinc-400">· {item.org}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Tech Stack */}
        <section className="lg:w-52 xl:w-60">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            {d.techTitle}
          </h2>
          <div className="space-y-4">
            {d.techSections.map((section) => (
              <div key={section.label}>
                <p className="mb-1.5 text-[11px] font-semibold text-zinc-500 dark:text-zinc-500">
                  {section.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/60 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Research ── */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {d.researchTitle}
        </h2>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5 space-y-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">{d.researchProject.title}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">{d.researchProject.desc}</p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              {d.researchProject.badge}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {d.researchProject.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 text-center">
                <p className="text-lg font-black text-zinc-900 dark:text-zinc-100">{stat.value}</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {d.researchProject.techniques.map((tech) => (
              <span key={tech} className="rounded-md bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">{d.researchProject.infra}</p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {d.additionalResearch.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4"
            >
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">{item.title}</p>
              <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Interests ── */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {d.interestsTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {d.interests.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4"
            >
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Wiki stats ── */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {d.wikiStatsTitle}
        </h2>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100 align-middle">{wikiStats.total}</span>
            <span className="ml-2">{d.wikiStatsTotal}</span>
            <span className="ml-1 font-bold text-zinc-900 dark:text-zinc-100">{wikiStats.categories.length}</span>
            <span className="ml-1">{d.wikiStatsCategories}</span>
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {wikiStats.categories.map(cat => (
              <div
                key={cat.label}
                className="inline-flex items-baseline gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2.5 py-1"
              >
                <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-300">{cat.label}</span>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{cat.count}</span>
              </div>
            ))}
          </div>

          <Link
            to="/knowledge-graph"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
          >
            <Network className="h-3.5 w-3.5" />
            {d.wikiStatsViewGraph}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* ── Projects CTA ── */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {d.projectsTitle}
        </h2>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          {d.viewAll}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </motion.div>
  );
};
