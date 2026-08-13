import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Network, FileDown, Headphones, Sparkles } from 'lucide-react';
import { getNavigation } from '../lib/content-loader';
import { NotebookLMPlayer } from './NotebookLMPlayer';

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
    role2: 'Quantitative Analyst',
    bio: 'I build quantitative models and fair value assessment of financial instruments. On the side I research the intersection of computational physics, financial mathematics, and modern AI.',
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
      { label: 'AI & Machine Learning', items: ['PyTorch', 'MLX', 'LangChain', 'Claude', 'GPT-4o', 'Llama 3', 'Phi-4'] },
      { label: 'Languages', items: ['Python', 'C++', 'TypeScript', 'SQL', 'Bash', 'R'] },
      { label: 'Quantitative Finance', items: ['QuantLib', 'MOEX API', 'CBR API', 'Bloomberg', 'IFRS 9/13'] },
      { label: 'Data Science & Math', items: ['Pandas', 'NumPy', 'SciPy', 'Scikit-Learn', 'Statsmodels'] },
      { label: 'Frontend & UI', items: ['React', 'Vue 3', 'Tailwind', 'ECharts', 'Three.js', 'Tauri'] },
      { label: 'Backend & Cloud', items: ['FastAPI', 'Node.js', 'Docker', 'AWS', 'Yandex Cloud', 'GitHub Actions'] },
      { label: 'HPC & Low-Level', items: ['OpenMP', 'pybind11', 'Cython'] },
    ],
    researchTitle: 'Main Research',
    audioOverviewsTitle: 'Research Audio Overviews (NotebookLM)',
    additionalResearchTitle: 'Technical Papers & Additional Research',
    mainResearch: [
      {
        title: 'Correlation Is a Hyperbolic Distance',
        desc: 'Rigorous mathematical proof establishing that correlation in stochastic volatility models behaves as a hyperbolic distance metric rather than a Euclidean one. By applying concepts from Poincaré disk models and hyperbolic geometry, the paper provides a novel geometric interpretation of correlation skew and smile dynamics in derivative pricing. This framework allows for more robust calibration of local-stochastic volatility (LSV) models under extreme market stress.',
        repo: 'https://github.com/russiankendricklamar/hyperbolic-vol-geometry',
        pdf: 'https://github.com/russiankendricklamar/hyperbolic-vol-geometry/blob/main/Correlation%20is%20a%20Hyperbolic%20Distance.pdf'
      },
      {
        title: 'Lévy Processes and Stochastic-Volatility Models',
        desc: 'Comprehensive analysis of Lévy processes (Variance Gamma, Normal Inverse Gaussian, CGMY) and their comparative efficiency against traditional stochastic volatility models (Heston, Bates) for pricing complex structured products. The research benchmarks computational performance using characteristic functions and Fast Fourier Transform (FFT) methods, demonstrating how jump-diffusion frameworks better capture heavy tails and market jumps observed in empirical financial data.',
        repo: 'https://github.com/russiankendricklamar/levy-sp',
        pdf: 'https://github.com/russiankendricklamar/levy-sp/blob/main/thesis.pdf'
      },
      {
        title: 'Student-t HMM for Bank Bond Portfolio Regimes',
        desc: 'A novel approach to modelling market risk regimes in institutional bond portfolios using Hidden Markov Models (HMM) with Student-t emissions. Unlike standard Gaussian HMMs, the Student-t distribution naturally accommodates leptokurtic behavior and extreme outliers typical in fixed-income markets. The model successfully identifies distinct volatility regimes, improving Value-at-Risk (VaR) estimations and dynamic portfolio allocation strategies during macroeconomic shocks.',
        repo: 'https://github.com/russiankendricklamar/thmm',
        pdf: 'https://github.com/russiankendricklamar/thmm/blob/main/Hidden%20Markov%20Model%20with%20Student\'s-t%20Emissions%20for%20Regimes%20of%20a%20Bank%20Bond%20Portfolio%20Return.pdf'
      },
      {
        title: 'Mathematical modelling of central-bank inflation targeting',
        desc: 'Detailed macroeconomic modelling of monetary-policy reaction functions under severe inflation-expectation shocks in small open economies. The research evaluates augmented Taylor rules and dynamic stochastic general equilibrium (DSGE) models, testing for regime robustness and structural breaks. Findings highlight optimal central bank intervention strategies when managing exchange rate volatility alongside inflation targeting mandates.'
      }
    ],
    additionalResearch: [
      {
        title: 'Domain-Specific SLM for Quantitative Finance',
        desc: 'Fine-tuned Microsoft Phi-4-mini (3.8B params) on Apple Silicon via MLX into a structured risk intelligence engine — not a chatbot, but a machine-readable stress scenario generator that calls tools, cites regulations, and never hallucinates numbers.',
        badge: 'Nyquist',
        stats: [
          { value: '93.3%', label: 'Tool-Use Accuracy' },
          { value: '98 yrs', label: 'Market Data' },
          { value: '134', label: 'Financial Crises' },
          { value: '+25.6pp', label: 'vs V1 Overall' },
        ],
        techniques: ['Tool-Use SFT', 'RAFT', 'CoT Distillation', 'KTO', 'Anti-Forgetting Mix', 'LoRA Routing', 'C++ via pybind11'],
        infra: 'Apple M5 Pro 48 GB · MLX · 3 LoRA adapters (regulatory / pricing / analysis)',
      },
      { title: 'Why LLMs fail in Quantitative Finance', file: 'why-llms-fail-quantitative-finance.pdf', desc: 'An analysis of how standard LLMs struggle with numerical reasoning, hallucinate math, and fail to adhere to rigid regulatory protocols without extensive domain-specific fine-tuning.' },
      { title: 'Bloomberg was not built in a weekend', file: 'bloomberg-not-built-in-weekend.pdf', desc: 'Exploring the immense engineering complexity behind financial data infrastructure and why replacing legacy terminals requires more than just modern UI.' },
      { title: 'Finance Data Layer Ontology', file: 'finance-data-layer-ontology.pdf', desc: 'A proposed semantic structure for standardising disparate financial data feeds, pricing models, and risk metrics into a unified, machine-readable format.' },
      { title: 'CeDeFi: Institutional DeFi', file: 'cedefi-institutional-defi.pdf', desc: 'Bridging the gap between decentralised protocols and traditional finance by introducing KYC/AML compliance layers and institutional-grade custody solutions.' },
      { title: 'R-Quant: New Profession in AI Finance', file: 'r-quant-new-profession-ai-finance.pdf', desc: 'Defining the "Research Quant" — a hybrid role blending traditional stochastic calculus with modern deep learning and agentic AI system design.' },
      { title: 'Market Digital Twin', file: 'market-digital-twin.pdf', desc: 'Simulating market microstructures and order book dynamics using agent-based modelling to stress-test trading algorithms in synthetic environments.' },
      { title: 'Dirty Market Data & Backtest', file: 'dirty-market-data-backtest.pdf', desc: 'A deep dive into survivorship bias, corporate actions, and the silent perils of using unscrubbed market data in algorithmic trading backtests.' },
      { title: 'Hybrid Quant Architecture', file: 'hybrid-quant-architecture.pdf', desc: 'Designing robust systems that combine fast, deterministic C++ pricing engines with flexible Python-based machine learning overlays.' },
      { title: 'AI Agents: Trading Boundary', file: 'ai-agents-trading-boundary.pdf', desc: 'Establishing the safe operational limits for autonomous trading agents, including kill-switches and regulatory compliance boundaries.' },
      { title: 'Running 36 AI Agents Infrastructure', file: 'running-36-ai-agents-infrastructure.pdf', desc: 'Technical breakdown of the scalable microservice architecture required to orchestrate, monitor, and synchronise a swarm of 36 concurrent AI agents.' },
      { title: 'Quantum Finance 2026', file: 'quantum-finance-2026.pdf', desc: 'A forward-looking perspective on how near-term quantum computers might disrupt portfolio optimisation and Monte Carlo pricing techniques.' },
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
    role2: 'Количественный аналитик',
    bio: 'Занимаюсь количественным моделированием и оценкой справедливой стоимости финансовых инструментов. Параллельно исследую пересечение вычислительной физики, финансовой математики и современного ИИ.',
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
      { label: 'AI & Машинное обучение', items: ['PyTorch', 'MLX', 'LangChain', 'Claude', 'GPT-4o', 'Llama 3', 'Phi-4'] },
      { label: 'Языки программирования', items: ['Python', 'C++', 'TypeScript', 'SQL', 'Bash', 'R'] },
      { label: 'Квант-финансы', items: ['QuantLib', 'MOEX API', 'ЦБ РФ', 'Bloomberg', 'МСФО 9/13'] },
      { label: 'Data Science & Математика', items: ['Pandas', 'NumPy', 'SciPy', 'Scikit-Learn', 'Statsmodels'] },
      { label: 'Фронтенд & UI', items: ['React', 'Vue 3', 'Tailwind', 'ECharts', 'Three.js', 'Tauri'] },
      { label: 'Бэкенд & Cloud', items: ['FastAPI', 'Node.js', 'Docker', 'AWS', 'Yandex Cloud', 'GitHub Actions'] },
      { label: 'HPC & Низкий уровень', items: ['OpenMP', 'pybind11', 'Cython'] },
    ],
    researchTitle: 'Основные исследования',
    audioOverviewsTitle: 'Аудио-обзоры исследований (NotebookLM)',
    additionalResearchTitle: 'Технические статьи & Дополнительные исследования',
    mainResearch: [
      {
        title: 'Correlation Is a Hyperbolic Distance',
        desc: 'Строгое математическое доказательство того, что корреляция в моделях стохастической волатильности ведёт себя как гиперболическая метрика расстояния, а не евклидова. Применяя концепции из моделей диска Пуанкаре и гиперболической геометрии, статья даёт новую геометрическую интерпретацию динамики корреляционной «улыбки» (smile) и перекоса (skew) при ценообразовании деривативов. Этот фреймворк позволяет более надёжно калибровать модели локально-стохастической волатильности (LSV) в условиях экстремального рыночного стресса.',
        repo: 'https://github.com/russiankendricklamar/hyperbolic-vol-geometry',
        pdf: 'https://github.com/russiankendricklamar/hyperbolic-vol-geometry/blob/main/Correlation%20is%20a%20Hyperbolic%20Distance.pdf'
      },
      {
        title: 'Lévy Processes and Stochastic-Volatility Models',
        desc: 'Комплексный анализ процессов Леви (Variance Gamma, Normal Inverse Gaussian, CGMY) и их сравнительная эффективность по отношению к традиционным моделям стохастической волатильности (Heston, Bates) при оценке сложных структурных продуктов. В исследовании проводится бенчмаркинг вычислительной производительности с использованием характеристических функций и быстрого преобразования Фурье (FFT), демонстрируя, как модели с прыжками (jump-diffusion) лучше улавливают «тяжёлые хвосты» и рыночные разрывы, наблюдаемые в эмпирических финансовых данных.',
        repo: 'https://github.com/russiankendricklamar/levy-sp',
        pdf: 'https://github.com/russiankendricklamar/levy-sp/blob/main/thesis.pdf'
      },
      {
        title: 'Student-t HMM for Bank Bond Portfolio Regimes',
        desc: 'Новый подход к моделированию режимов рыночного риска в портфелях институциональных облигаций с использованием скрытых марковских моделей (HMM) с распределением Стьюдента. В отличие от стандартных гауссовских HMM, t-распределение естественно учитывает лептокуртоз и экстремальные выбросы, характерные для рынков фиксированной доходности. Модель успешно идентифицирует различные режимы волатильности, улучшая оценки Value-at-Risk (VaR) и стратегии динамического распределения портфеля во время макроэкономических шоков.',
        repo: 'https://github.com/russiankendricklamar/thmm',
        pdf: 'https://github.com/russiankendricklamar/thmm/blob/main/Hidden%20Markov%20Model%20with%20Student\'s-t%20Emissions%20for%20Regimes%20of%20a%20Bank%20Bond%20Portfolio%20Return.pdf'
      },
      {
        title: 'Математическое моделирование таргетирования инфляции ЦБ',
        desc: 'Детальное макроэкономическое моделирование функций реакции денежно-кредитной политики на сильные шоки инфляционных ожиданий в малых открытых экономиках. В исследовании оцениваются расширенные правила Тейлора и динамические стохастические модели общего равновесия (DSGE), проверяется устойчивость режимов и структурные разрывы. Результаты подчеркивают оптимальные стратегии интервенций центрального банка при управлении волатильностью обменного курса наряду с мандатами по таргетированию инфляции.'
      }
    ],
    additionalResearch: [
      {
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
      { title: 'Почему LLM ошибаются в квант-финансах', file: 'why-llms-fail-quantitative-finance.pdf', desc: 'Анализ того, как стандартные LLM проваливают численные рассуждения, галлюцинируют в математике и не соблюдают жёсткие протоколы без доменного дообучения.' },
      { title: 'Bloomberg не строился за выходные', file: 'bloomberg-not-built-in-weekend.pdf', desc: 'Исследование колоссальной инженерной сложности инфраструктуры финансовых данных и почему для замены терминалов нужно больше, чем просто современный UI.' },
      { title: 'Онтология уровней финансовых данных', file: 'finance-data-layer-ontology.pdf', desc: 'Предлагаемая семантическая структура для стандартизации разрозненных потоков данных, моделей ценообразования и метрик риска в единый машиночитаемый формат.' },
      { title: 'CeDeFi: Институциональный DeFi', file: 'cedefi-institutional-defi.pdf', desc: 'Преодоление разрыва между децентрализованными протоколами и традиционными финансами путём внедрения KYC/AML и решений для институционального кастоди.' },
      { title: 'R-Quant: Новая профессия в AI-финансах', file: 'r-quant-new-profession-ai-finance.pdf', desc: 'Определение роли "Research Quant" — гибрида, объединяющего традиционное стохастическое исчисление с современным глубоким обучением и агентными системами.' },
      { title: 'Цифровой двойник рынка', file: 'market-digital-twin.pdf', desc: 'Симуляция микроструктуры рынка и динамики ордербука с использованием агентного моделирования для стресс-тестирования торговых алгоритмов.' },
      { title: 'Грязные данные и бэктесты', file: 'dirty-market-data-backtest.pdf', desc: 'Глубокое погружение в ошибку выжившего, корпоративные действия и скрытые опасности использования неочищенных данных в бэктестах алготрейдинга.' },
      { title: 'Гибридная квант-архитектура', file: 'hybrid-quant-architecture.pdf', desc: 'Проектирование надёжных систем, объединяющих быстрые детерминированные движки прайсинга на C++ с гибкими ML-надстройками на Python.' },
      { title: 'AI-агенты: границы трейдинга', file: 'ai-agents-trading-boundary.pdf', desc: 'Определение безопасных операционных пределов для автономных торговых агентов, включая kill-switches и границы регуляторного комплаенса.' },
      { title: 'Инфраструктура для 36 AI-агентов', file: 'running-36-ai-agents-infrastructure.pdf', desc: 'Технический разбор масштабируемой микросервисной архитектуры для оркестрации, мониторинга и синхронизации роя из 36 параллельных AI-агентов.' },
      { title: 'Квантовые финансы 2026', file: 'quantum-finance-2026.pdf', desc: 'Взгляд в будущее на то, как квантовые компьютеры ближайшего времени (NISQ) могут революционизировать оптимизацию портфеля и методы Монте-Карло.' },
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

          <div className="flex items-center gap-4 flex-wrap">
            <a href={d.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github className="h-4 w-4" /><span>GitHub</span>
            </a>
            <a href={d.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin className="h-4 w-4" /><span>LinkedIn</span>
            </a>
            <a href={d.socials.email} className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Mail className="h-4 w-4" /><span>Email</span>
            </a>
            <a href={d.cvFile} download className="group inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors">
              <FileDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              <span>{d.cvDownload}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Timeline + Tech Stack ── */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto]">
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
                {i < d.timeline.length - 1 && (
                  <div className="absolute left-[5px] top-5 h-full w-px bg-zinc-200 dark:bg-zinc-800" />
                )}
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

      {/* ── Main Research ── */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {d.researchTitle}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {d.mainResearch.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="flex flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5"
            >
              <div>
                <p className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{item.title}</p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.repo && (
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Repo
                  </a>
                )}
                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    PDF
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Audio Overviews Highlight ── */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-2">
            <Headphones className="w-4 h-4 text-indigo-500" />
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              {d.audioOverviewsTitle}
            </h3>
          </div>
          <NotebookLMPlayer
            audioUrl="/research/audio-overview-hyperbolic-geometry.mp3"
            notebookUrl="https://notebooklm.google.com"
            lang={lang}
            title="Correlation Is a Hyperbolic Distance — Deep Dive"
          />
        </div>
      </section>

      {/* ── Additional Research ── */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {d.additionalResearchTitle}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {d.additionalResearch.map((item: any, i: number) => {
            if (item.file) {
              // Standard PDF paper rendering inside grid
              return (
                <motion.a
                  key={i}
                  href={`/research/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex flex-col gap-2 justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4 hover:border-emerald-500/50 hover:bg-emerald-500/[0.02] transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 leading-snug">
                      {item.title}
                    </span>
                    <FileDown className="h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500 transition-colors mt-0.5" />
                  </div>
                  {item.desc && (
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </motion.a>
              );
            }

            // Rich research item rendering
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className={`rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4 ${item.stats ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">{item.title}</p>
                    {item.desc && <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>}
                  </div>
                  {item.badge && (
                    <span className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                {item.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    {item.stats.map((stat: any) => (
                      <div key={stat.label} className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 text-center">
                        <p className="text-lg font-black text-zinc-900 dark:text-zinc-100">{stat.value}</p>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.techniques && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.techniques.map((tech: string) => (
                      <span key={tech} className="rounded-md bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {item.infra && (
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono mt-3">{item.infra}</p>
                )}
              </motion.div>
            );
          })}
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
              <div key={cat.label} className="inline-flex items-baseline gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2.5 py-1">
                <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-300">{cat.label}</span>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects CTA ── */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {d.projectsTitle}
        </h2>
        <Link to="/projects" className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400">
          {d.viewAll}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </motion.div>
  );
};
