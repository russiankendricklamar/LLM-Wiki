export type ContentType = 'article' | 'project';
export type GrowthState = 'seedling' | 'budding' | 'evergreen';
export type ProjectStatus = 'active' | 'shipped' | 'wip' | 'archived';

export interface PageMetadata {
  title: string;
  category: string;
  lang: 'en' | 'ru';
  order?: number;
  slug: string;
  fullPath: string;
  featured?: boolean;
  image?: string;
  description?: string;
  // Content type — 'project' for /projects pages, 'article' for everything else
  type: ContentType;
  // Article-only: maturity in the digital garden
  growth?: GrowthState;
  // Project-only fields
  status?: ProjectStatus;
  tech?: string;
  github?: string;
  demo?: string;
  year?: string;
  hideOpen?: boolean;
  // Top-level directory segment (e.g. 'math', 'finance', 'ai-theory')
  section?: string;
  // Course-specific fields
  courseType?: 'course';
  difficulty?: string;
  duration?: string;
}

export interface PageContent {
  metadata: PageMetadata;
  content: string;
}

const rawFiles = import.meta.glob('../../obsidian-vault/**/*.md', { eager: true, query: '?raw', import: 'default' });

// Simple frontmatter parser to avoid Node.js dependencies like 'gray-matter' or 'Buffer'
const parseFrontmatter = (fileContent: string) => {
  const match = fileContent.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {} as any, content: fileContent };
  
  const yaml = match[1];
  const content = match[2];
  const data: any = {};
  
  yaml.split('\n').forEach(line => {
    const firstColon = line.indexOf(':');
    if (firstColon !== -1) {
      const key = line.slice(0, firstColon).trim();
      let value = line.slice(firstColon + 1).trim();
      
      // Remove quotes
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      
      // Parse booleans, numbers, or keep as string
      if (value === 'true') {
        data[key] = true;
      } else if (value === 'false') {
        data[key] = false;
      } else if (!isNaN(value as any) && value !== '') {
        data[key] = Number(value);
      } else {
        data[key] = value;
      }
    }
  });
  
  return { data, content };
};

let _cachedPages: PageContent[] | null = null;

export const getAllPages = (): PageContent[] => {
  if (_cachedPages) return _cachedPages;
  _cachedPages = Object.entries(rawFiles).map(([filePath, rawContent]) => {
    const { data, content } = parseFrontmatter(rawContent as string);
    
    // Detect language from path (en or ru)
    const isEnglish = filePath.includes('/obsidian-vault/en/');
    const pathLang = isEnglish ? 'en' : 'ru';

    // Derive top-level section from path (first dir after en/ru)
    const sectionMatch = filePath.match(/obsidian-vault\/(?:en|ru)\/([^/]+)\//);
    const section = sectionMatch ? sectionMatch[1] : undefined;

    // Generate a clean slug from filename:
    // ../../obsidian-vault/en/finance/black-scholes.md -> /finance/black-scholes
    let slug = filePath
      .replace(/^.*obsidian-vault\/(en|ru)/, '') // Remove everything before and including obsidian-vault/en or /ru
      .replace('.md', '');

    // Ensure slug starts with /
    if (!slug.startsWith('/')) {
      slug = '/' + slug;
    }

    // Allow overriding slug in frontmatter
    if (data.slug) {
      slug = data.slug.startsWith('/') ? data.slug : `/${data.slug}`;
    }

    // Detect content type: explicit `type: project` in frontmatter, or path-based fallback
    const isProjectPath = filePath.includes('/projects/') || slug.startsWith('/projects');
    const type: ContentType = data.type === 'project' || isProjectPath ? 'project' : 'article';

    return {
      metadata: {
        title: data.title || 'Untitled',
        category: data.category || 'General',
        lang: (data.lang as 'en' | 'ru') || pathLang,
        order: data.order || 99,
        slug: slug,
        fullPath: filePath,
        featured: data.featured === true,
        image: data.image || undefined,
        description: data.description || undefined,
        type,
        growth: (data.growth as GrowthState) || undefined,
        status: (data.status as ProjectStatus) || undefined,
        tech: data.tech || undefined,
        github: data.github || undefined,
        demo: data.demo || undefined,
        year: data.year !== undefined ? String(data.year) : undefined,
        hideOpen: data.hideOpen === true,
        section,
      },
      content
    };
  });
  return _cachedPages;
};

/**
 * Resolve a wikilink target name to a page.
 * Priority: exact slug → exact title → exact filename → last-segment slug/filename → partial slug → partial title.
 * Path-prefixed targets like `[[physics/classical/partial-differential-equations]]` are stripped to last segment.
 */
export const resolveWikilink = (
  target: string,
  pages: PageContent[],
  _sourceCategory?: string
): PageContent | undefined => {
  const t = target.toLowerCase();
  // Strip leading slash and treat path-prefixed targets like `physics/classical/X` by also trying last segment.
  const tNoSlash = t.replace(/^\//, '');
  const lastSeg = tNoSlash.includes('/') ? tNoSlash.split('/').pop()! : tNoSlash;

  // 1. Exact slug match (with or without leading slash)
  const bySlug = pages.find(p => {
    const slugLower = p.metadata.slug.toLowerCase();
    return slugLower === t || slugLower.replace(/^\//, '') === tNoSlash;
  });
  if (bySlug) return bySlug;

  // 2. Exact title match
  const byTitle = pages.find(p => p.metadata.title.toLowerCase() === t);
  if (byTitle) return byTitle;

  // 3. Filename match (handles full path: `physics/classical/lagrangian-mechanics` → filename `lagrangian-mechanics`)
  const byFilename = pages.find(p => {
    const fileName = p.metadata.fullPath.split('/').pop()?.replace('.md', '').toLowerCase();
    return fileName === lastSeg;
  });
  if (byFilename) return byFilename;

  // 4. Slug ending in last segment (e.g. last segment `mle` matches /asymptotic-stats/mle)
  if (lastSeg !== tNoSlash) {
    const bySlugEnd = pages.find(p => p.metadata.slug.toLowerCase().endsWith('/' + lastSeg));
    if (bySlugEnd) return bySlugEnd;
  }

  // 5. Partial slug match — only if exactly one candidate to avoid silent ambiguity
  const partialSlug = pages.filter(p => p.metadata.slug.toLowerCase().includes(t));
  if (partialSlug.length === 1) return partialSlug[0];

  // 6. Partial title match — only if unambiguous
  const partialTitle = pages.filter(p => p.metadata.title.toLowerCase().includes(t));
  if (partialTitle.length === 1) return partialTitle[0];

  return undefined;
};

/**
 * Strip fenced code blocks (```...```) and inline code (`...`) from markdown body
 * so wikilink scanning does not match incidental [[...]] inside code (e.g. `arr[[1,2]]`).
 */
export const stripCode = (body: string): string =>
  body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]*`/g, '');

/**
 * Extract every [[wikilink]] target from a body, ignoring code blocks.
 * Returns the inner text (before the optional `|alias`).
 */
export const extractWikilinkTargets = (body: string): string[] => {
  const stripped = stripCode(body);
  const out: string[] = [];
  for (const m of stripped.matchAll(/\[\[([^\]\n]+?)\]\]/g)) {
    const target = m[1].split('|')[0].trim();
    if (target) out.push(target);
  }
  return out;
};

export const getPagePreview = (slug: string): string => {
  const page = getAllPages().find(p => p.metadata.slug === slug);
  if (!page) return '';
  
  return page.content
    .replace(/^---[\s\S]*?---\n?/, '')
    .replace(/^#{1,6}\s+.*/gm, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, s, a) => a || s)
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^$]+\$/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .slice(0, 200) + '...';
};

export const getFeaturedPages = (lang: 'en' | 'ru'): PageContent[] => {
  return getAllPages()
    .filter(p => p.metadata.lang === lang && p.metadata.featured)
    .sort((a, b) => (a.metadata.order || 99) - (b.metadata.order || 99));
};

export const getProjects = (lang: 'en' | 'ru'): PageContent[] => {
  return getAllPages()
    .filter(p => p.metadata.lang === lang && p.metadata.type === 'project')
    .sort((a, b) => (a.metadata.order || 99) - (b.metadata.order || 99));
};

// Mixed featured items — articles + projects together, used in the home hero carousel
export const getFeaturedItems = (lang: 'en' | 'ru'): PageContent[] => {
  return getFeaturedPages(lang);
};

export const getNavigation = (lang: 'en' | 'ru') => {
  const pages = getAllPages().filter(p => p.metadata.lang === lang);
  const categories = [...new Set(pages.map(p => p.metadata.category))].sort();

  return categories.map(category => ({
    title: category,
    items: pages
      .filter(p => p.metadata.category === category)
      .sort((a, b) => (a.metadata.order || 99) - (b.metadata.order || 99))
      .map(p => ({
        title: p.metadata.title,
        href: p.metadata.slug
      }))
  }));
};

// ── Hierarchical navigation tree ──────────────────────────────────────────

export interface NavItem { title: string; href: string }
export interface NavCategory { title: string; items: NavItem[] }
export interface NavSection { title: string; sectionKey: string; categories: NavCategory[] }

const SECTION_LABELS: Record<string, Record<'en' | 'ru', string>> = {
  'language-models': { en: 'Language Models', ru: 'Языковые модели' },
  'llm-infra':       { en: 'LLM Infrastructure', ru: 'Инфраструктура LLM' },
  'ai-theory':       { en: 'AI Theory', ru: 'Теория ИИ' },
  'ai-finance':      { en: 'AI Finance', ru: 'ИИ в финансах' },
  'ai-physics':      { en: 'AI Physics', ru: 'ИИ в физике' },
  'math':            { en: 'Mathematics', ru: 'Математика' },
  'finance':         { en: 'Finance', ru: 'Финансы' },
  'physics':         { en: 'Physics', ru: 'Физика' },
  'projects':        { en: 'Projects', ru: 'Проекты' },
  'about':           { en: 'About', ru: 'О проекте' },
  'defi':            { en: 'DeFi', ru: 'Децентрализованные финансы' },
  'courses':         { en: 'Learning Paths', ru: 'Учебные курсы' },
  '_other':          { en: 'Other', ru: 'Разное' },
};

const SECTION_ORDER = [
  'courses',
  'language-models', 
  'llm-infra', 
  'ai-theory', 
  'ai-finance', 
  'ai-physics',
  'math',
  'finance', 
  'physics', 
  'projects',
  'about'
];

// Canonical category → { en: display, ru: display } map.
// Multiple source keys (EN variants, RU variants, synonyms) map to the SAME
// pair so they collapse into one sidebar group after translation.
const CATEGORY_LABELS: Record<string, Record<'en' | 'ru', string>> = {
  // ── AI / ML / LLMs ─────────────────────────────────────────────
  'Language Models':      { en: 'Language Models', ru: 'Языковые модели' },
  'Языковые модели':      { en: 'Language Models', ru: 'Языковые модели' },
  'LLM Infrastructure':   { en: 'LLM Infrastructure', ru: 'Инфраструктура LLM' },
  'Инфраструктура LLM':   { en: 'LLM Infrastructure', ru: 'Инфраструктура LLM' },
  'AI Theory':            { en: 'AI Theory', ru: 'Теория ИИ' },
  'Теория ИИ':            { en: 'AI Theory', ru: 'Теория ИИ' },
  'Scientific ML':        { en: 'Scientific ML', ru: 'Научный ML' },
  'Научный ML':           { en: 'Scientific ML', ru: 'Научный ML' },
  'AI Finance':           { en: 'AI Finance', ru: 'ИИ в финансах' },
  'ИИ в финансах':        { en: 'AI Finance', ru: 'ИИ в финансах' },
  'AI Physics':           { en: 'AI Physics', ru: 'ИИ в физике' },
  'ИИ в физике':          { en: 'AI Physics', ru: 'ИИ в физике' },
  'AI & Math':            { en: 'AI & Math', ru: 'ИИ и математика' },
  'ИИ и Математика':      { en: 'AI & Math', ru: 'ИИ и математика' },

  // ── Mathematics: probability / statistics ──────────────────────
  'Applied Probability':  { en: 'Applied Probability', ru: 'Прикладная вероятность' },
  'Прикладная вероятность': { en: 'Applied Probability', ru: 'Прикладная вероятность' },
  'Stochastic Calculus':  { en: 'Stochastic Calculus', ru: 'Стохастическое исчисление' },
  'Стохастическое исчисление': { en: 'Stochastic Calculus', ru: 'Стохастическое исчисление' },
  'Stochastic Processes': { en: 'Stochastic Processes', ru: 'Случайные процессы' },
  'Стохастические процессы': { en: 'Stochastic Processes', ru: 'Случайные процессы' },
  'Случайные процессы':   { en: 'Stochastic Processes', ru: 'Случайные процессы' },
  'Asymptotic Statistics': { en: 'Asymptotic Statistics', ru: 'Асимптотическая статистика' },
  'Асимптотическая статистика': { en: 'Asymptotic Statistics', ru: 'Асимптотическая статистика' },
  'Statistical Learning': { en: 'Statistical Learning', ru: 'Статистическое обучение' },
  'Статистическое обучение': { en: 'Statistical Learning', ru: 'Статистическое обучение' },
  'Measure Theory':       { en: 'Measure Theory', ru: 'Теория меры' },
  'Теория меры':          { en: 'Measure Theory', ru: 'Теория меры' },
  'Large Deviations':     { en: 'Large Deviations', ru: 'Большие уклонения' },
  'Большие уклонения':    { en: 'Large Deviations', ru: 'Большие уклонения' },
  'Martingales':          { en: 'Martingale Theory', ru: 'Мартингалы' },
  'Martingale Theory':    { en: 'Martingale Theory', ru: 'Мартингалы' },
  'Теория мартингалов':   { en: 'Martingale Theory', ru: 'Мартингалы' },
  'Limit Theorems':       { en: 'Limit Theorems', ru: 'Предельные теоремы' },
  'Предельные теоремы':   { en: 'Limit Theorems', ru: 'Предельные теоремы' },
  'Ergodic Theory':       { en: 'Ergodic and Spectral Theory', ru: 'Эргодическая и спектральная теория' },
  'Ergodic and Spectral Theory': { en: 'Ergodic and Spectral Theory', ru: 'Эргодическая и спектральная теория' },
  'Эргодическая и спектральная теория': { en: 'Ergodic and Spectral Theory', ru: 'Эргодическая и спектральная теория' },
  'Filtering Theory':     { en: 'Filtering Theory', ru: 'Теория фильтрации' },
  'Теория фильтрации':    { en: 'Filtering Theory', ru: 'Теория фильтрации' },

  // ── Mathematics: core / geometry / analysis ────────────────────
  'Foundations':                  { en: 'Foundations', ru: 'Основания' },
  'Основания':                    { en: 'Foundations', ru: 'Основания' },
  'Mathematical Foundations':     { en: 'Foundations', ru: 'Основания' },
  'Foundations of Mathematics':   { en: 'Foundations', ru: 'Основания' },
  'Fundamentals':                 { en: 'Fundamentals', ru: 'Базовые понятия' },
  'Базовые понятия':              { en: 'Fundamentals', ru: 'Базовые понятия' },
  'Math':                         { en: 'Mathematics', ru: 'Математика' },
  'Mathematics':                  { en: 'Mathematics', ru: 'Математика' },
  'Математика':                   { en: 'Mathematics', ru: 'Математика' },
  'Analysis & Geometry':          { en: 'Analysis & Geometry', ru: 'Анализ и геометрия' },
  'Анализ и Геометрия':           { en: 'Analysis & Geometry', ru: 'Анализ и геометрия' },
  'Анализ и геометрия':           { en: 'Analysis & Geometry', ru: 'Анализ и геометрия' },
  'Topology':                     { en: 'Topology', ru: 'Топология' },
  'Топология':                    { en: 'Topology', ru: 'Топология' },
  'Advanced Analysis':            { en: 'Advanced Analysis', ru: 'Продвинутый анализ' },
  'Продвинутый анализ':           { en: 'Advanced Analysis', ru: 'Продвинутый анализ' },
  'Functional Analysis':          { en: 'Functional Analysis', ru: 'Функциональный анализ' },
  'Функциональный анализ':        { en: 'Functional Analysis', ru: 'Функциональный анализ' },
  'Learning Theory':              { en: 'Learning Theory', ru: 'Теория обучения' },
  'Теория обучения':              { en: 'Learning Theory', ru: 'Теория обучения' },
  'Algorithms and ML':            { en: 'Algorithms and ML', ru: 'Алгоритмы и ML' },
  'Алгоритмы и ML':               { en: 'Algorithms and ML', ru: 'Алгоритмы и ML' },
  'Signal Analysis':              { en: 'Signal Analysis', ru: 'Анализ сигналов' },
  'Анализ сигналов':              { en: 'Signal Analysis', ru: 'Анализ сигналов' },
  'Quantitative Theory':          { en: 'Quantitative Theory', ru: 'Количественная теория' },
  'Количественная теория':        { en: 'Quantitative Theory', ru: 'Количественная теория' },

  // ── Finance ────────────────────────────────────────────────────
  'Finance':                      { en: 'Finance', ru: 'Финансы' },
  'Финансы':                      { en: 'Finance', ru: 'Финансы' },
  'Pricing':                      { en: 'Pricing', ru: 'Ценообразование' },
  'Pricing Models':               { en: 'Pricing', ru: 'Ценообразование' },
  'Ценообразование':              { en: 'Pricing', ru: 'Ценообразование' },
  'Модели ценообразования':       { en: 'Pricing', ru: 'Ценообразование' },
  'Risk':                         { en: 'Risk Management', ru: 'Управление рисками' },
  'Risk Management':              { en: 'Risk Management', ru: 'Управление рисками' },
  'Управление рисками':           { en: 'Risk Management', ru: 'Управление рисками' },
  'Portfolio':                    { en: 'Portfolio Management', ru: 'Управление портфелем' },
  'Portfolio Management':         { en: 'Portfolio Management', ru: 'Управление портфелем' },
  'Управление портфелем':         { en: 'Portfolio Management', ru: 'Управление портфелем' },
  'Stochastic':                   { en: 'Stochastic Finance', ru: 'Стохастические финансы' },
  'Stochastic Finance':           { en: 'Stochastic Finance', ru: 'Стохастические финансы' },
  'Стохастические финансы':       { en: 'Stochastic Finance', ru: 'Стохастические финансы' },
  'Microstructure':               { en: 'Market Microstructure', ru: 'Микроструктура рынка' },
  'Market Microstructure':        { en: 'Market Microstructure', ru: 'Микроструктура рынка' },
  'Микроструктура рынка':         { en: 'Market Microstructure', ru: 'Микроструктура рынка' },
  'Time Series':                  { en: 'Time Series', ru: 'Временные ряды' },
  'Временные ряды':               { en: 'Time Series', ru: 'Временные ряды' },
  'Derivatives':                  { en: 'Derivatives', ru: 'Деривативы' },
  'Деривативы':                   { en: 'Derivatives', ru: 'Деривативы' },
  'Machine Learning in Finance':  { en: 'Machine Learning in Finance', ru: 'Машинное обучение в финансах' },
  'Машинное обучение в финансах': { en: 'Machine Learning in Finance', ru: 'Машинное обучение в финансах' },
  'DeFi':                         { en: 'DeFi', ru: 'DeFi' },
  'Децентрализованные финансы':   { en: 'DeFi', ru: 'DeFi' },
  'DeFi & Engineering':           { en: 'DeFi & Engineering', ru: 'DeFi и инженерия' },
  'DeFi и Инженерия':             { en: 'DeFi & Engineering', ru: 'DeFi и инженерия' },

  // ── Physics ────────────────────────────────────────────────────
  'Physics':                      { en: 'Physics', ru: 'Физика' },
  'Физика':                       { en: 'Physics', ru: 'Физика' },
  'Quantum Physics':              { en: 'Quantum Physics', ru: 'Квантовая физика' },
  'Квантовая физика':             { en: 'Quantum Physics', ru: 'Квантовая физика' },
  'Classical Physics':            { en: 'Classical Physics', ru: 'Классическая физика' },
  'Классическая физика':          { en: 'Classical Physics', ru: 'Классическая физика' },
  'Gravity':                      { en: 'Gravity', ru: 'Гравитация' },
  'Гравитация':                   { en: 'Gravity', ru: 'Гравитация' },
  'Holography':                   { en: 'Holography', ru: 'Голография' },
  'Голография':                   { en: 'Holography', ru: 'Голография' },
};

const SKIP_SECTIONS = new Set(['courses', 'about', 'projects']);
const SKIP_CATS = new Set(['Home', 'Главная', 'Projects', 'Проекты']);

/**
 * Translate a raw category name from any frontmatter to the canonical display
 * label for the given language. Falls back to the raw value when no mapping
 * exists, so unknown categories degrade gracefully instead of disappearing.
 */
export const translateCategory = (rawCategory: string, lang: 'en' | 'ru'): string => {
  const labels = CATEGORY_LABELS[rawCategory];
  return labels?.[lang] ?? rawCategory;
};

const _navTreeCache = new Map<'en' | 'ru', NavSection[]>();

export const getNavigationTree = (lang: 'en' | 'ru'): NavSection[] => {
  const cached = _navTreeCache.get(lang);
  if (cached) return cached;

  const pages = getAllPages().filter(p =>
    p.metadata.lang === lang &&
    !SKIP_CATS.has(p.metadata.category) &&
    !SKIP_SECTIONS.has(p.metadata.section ?? '')
  );

  // Map<sectionKey, Map<translatedCategoryTitle, PageContent[]>>
  const sectionMap = new Map<string, Map<string, PageContent[]>>();
  
  for (const page of pages) {
    const sectionKey = page.metadata.section ?? '_other';
    if (!sectionMap.has(sectionKey)) sectionMap.set(sectionKey, new Map());
    
    const catMap = sectionMap.get(sectionKey)!;
    const rawCat = page.metadata.category;
    
    // Translate the category title BEFORE grouping to unify EN and RU categories
    const catLabels = CATEGORY_LABELS[rawCat];
    const translatedCat = (catLabels && catLabels[lang]) ? catLabels[lang] : rawCat;
    
    if (!catMap.has(translatedCat)) catMap.set(translatedCat, []);
    catMap.get(translatedCat)!.push(page);
  }

  const sections: NavSection[] = [];
  for (const [sectionKey, catMap] of sectionMap) {
    const labels = SECTION_LABELS[sectionKey];
    const sectionTitle = (labels && labels[lang]) ? labels[lang] : sectionKey;
    
    const categories: NavCategory[] = [];
    for (const [translatedTitle, catPages] of catMap) {
      categories.push({
        title: translatedTitle,
        items: catPages
          .sort((a, b) => (a.metadata.order ?? 99) - (b.metadata.order ?? 99))
          .map(p => ({ title: p.metadata.title, href: p.metadata.slug })),
      });
    }
    categories.sort((a, b) => a.title.localeCompare(b.title));
    sections.push({ title: sectionTitle, sectionKey, categories });
  }

  sections.sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.sectionKey);
    const ib = SECTION_ORDER.indexOf(b.sectionKey);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.title.localeCompare(b.title);
  });

  _navTreeCache.set(lang, sections);
  return sections;
};

// ---------------------------------------------------------------------------
// Per-language link index (outLinks + inLinks). Built lazily once per language;
// every backlinks / related / graph query reuses the same Map<slug, Set<slug>>.
// Without this index, getRelatedArticles is O(N²) because it re-resolves every
// wikilink in every page on every render.
// ---------------------------------------------------------------------------
interface LangIndex {
  pages: PageContent[];
  byCategory: Map<string, PageContent[]>;
  outLinks: Map<string, Set<string>>;
  inLinks: Map<string, Set<string>>;
}

const _indexCache = new Map<'en' | 'ru', LangIndex>();

const getLangIndex = (lang: 'en' | 'ru'): LangIndex => {
  const cached = _indexCache.get(lang);
  if (cached) return cached;

  const pages = getAllPages().filter(p => p.metadata.lang === lang);
  const byCategory = new Map<string, PageContent[]>();
  const outLinks = new Map<string, Set<string>>();
  const inLinks = new Map<string, Set<string>>();

  for (const p of pages) {
    if (!byCategory.has(p.metadata.category)) byCategory.set(p.metadata.category, []);
    byCategory.get(p.metadata.category)!.push(p);
    outLinks.set(p.metadata.slug, new Set());
    inLinks.set(p.metadata.slug, new Set());
  }

  for (const p of pages) {
    const out = outLinks.get(p.metadata.slug)!;
    for (const target of extractWikilinkTargets(p.content)) {
      const resolved = resolveWikilink(target, pages, p.metadata.category);
      if (!resolved || resolved.metadata.slug === p.metadata.slug) continue;
      out.add(resolved.metadata.slug);
      inLinks.get(resolved.metadata.slug)?.add(p.metadata.slug);
    }
  }

  const idx: LangIndex = { pages, byCategory, outLinks, inLinks };
  _indexCache.set(lang, idx);
  return idx;
};

/** Returns pages that link TO the given slug via wikilinks. */
export const getBacklinks = (slug: string, lang: 'en' | 'ru'): PageMetadata[] => {
  const idx = getLangIndex(lang);
  const incoming = idx.inLinks.get(slug);
  if (!incoming || incoming.size === 0) return [];
  const result: PageMetadata[] = [];
  for (const sourceSlug of incoming) {
    const page = idx.pages.find(p => p.metadata.slug === sourceSlug);
    if (page) result.push(page.metadata);
  }
  return result;
};

/** Returns related articles by shared wikilink overlap (Jaccard-like), falling back to same category. */
export const getRelatedArticles = (slug: string, lang: 'en' | 'ru', limit = 5): PageMetadata[] => {
  const idx = getLangIndex(lang);
  const currentPage = idx.pages.find(p => p.metadata.slug === slug);
  if (!currentPage) return [];

  const currentLinks = idx.outLinks.get(slug);
  if (!currentLinks || currentLinks.size === 0) {
    const cat = idx.byCategory.get(currentPage.metadata.category) ?? [];
    return cat
      .filter(p => p.metadata.slug !== slug)
      .sort((a, b) => (a.metadata.order || 99) - (b.metadata.order || 99))
      .slice(0, limit)
      .map(p => p.metadata);
  }

  const scored: { metadata: PageMetadata; score: number }[] = [];
  for (const p of idx.pages) {
    if (p.metadata.slug === slug) continue;
    const pLinks = idx.outLinks.get(p.metadata.slug);
    if (!pLinks || pLinks.size === 0) continue;
    let intersection = 0;
    for (const link of currentLinks) if (pLinks.has(link)) intersection++;
    if (intersection === 0) continue;
    const union = currentLinks.size + pLinks.size - intersection;
    scored.push({ metadata: p.metadata, score: intersection / union });
  }
  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, limit);

  if (top.length < limit) {
    const existing = new Set(top.map(s => s.metadata.slug));
    existing.add(slug);
    const cat = idx.byCategory.get(currentPage.metadata.category) ?? [];
    const fillers = cat
      .filter(p => !existing.has(p.metadata.slug))
      .slice(0, limit - top.length);
    return [...top.map(s => s.metadata), ...fillers.map(p => p.metadata)];
  }

  return top.map(s => s.metadata);
};

const GRAPH_EXCLUDED_CATEGORIES = new Set(['Projects', 'Проекты', 'Home', 'Главная']);
const _graphCache = new Map<'en' | 'ru', { nodes: any[]; links: { source: string; target: string }[] }>();

export const getGraphData = (lang: 'en' | 'ru') => {
  const cached = _graphCache.get(lang);
  if (cached) return cached;

  const idx = getLangIndex(lang);
  const visible = idx.pages.filter(p => !GRAPH_EXCLUDED_CATEGORIES.has(p.metadata.category));
  const visibleSlugs = new Set(visible.map(p => p.metadata.slug));

  const nodes = visible.map(page => ({
    id: page.metadata.slug.replace(/^\//, ''),
    name: page.metadata.title,
    category: page.metadata.category,
    val: page.metadata.category === 'Home' || page.metadata.category === 'Главная' ? 2 : 1,
  }));

  const links: { source: string; target: string }[] = [];
  for (const p of visible) {
    const sourceSlug = p.metadata.slug;
    const sourceId = sourceSlug.replace(/^\//, '');
    const out = idx.outLinks.get(sourceSlug);
    if (!out) continue;
    for (const targetSlug of out) {
      if (!visibleSlugs.has(targetSlug)) continue;
      const targetId = targetSlug.replace(/^\//, '');
      if (targetId !== sourceId) links.push({ source: sourceId, target: targetId });
    }
  }

  const result = { nodes, links };
  _graphCache.set(lang, result);
  return result;
};

/**
 * Returns courses that reference the given page via wikilinks.
 * Courses sit in the `courses/` section. We filter the pre-built inLinks index
 * for the given slug, then keep only sources that are themselves courses.
 */
export const getCoursesForPage = (slug: string, lang: 'en' | 'ru'): PageMetadata[] => {
  const idx = getLangIndex(lang);
  const incoming = idx.inLinks.get(slug);
  if (!incoming || incoming.size === 0) return [];
  const result: PageMetadata[] = [];
  for (const sourceSlug of incoming) {
    const page = idx.pages.find(p => p.metadata.slug === sourceSlug);
    if (page && page.metadata.section === 'courses') result.push(page.metadata);
  }
  return result;
};
