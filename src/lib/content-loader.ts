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
 * Priority: exact slug match → exact title match → exact filename match → same-category suffix → any suffix.
 */
export const resolveWikilink = (
  target: string,
  pages: PageContent[],
  sourceCategory?: string
): PageContent | undefined => {
  const t = target.toLowerCase();

  // 1. Exact slug match
  const bySlug = pages.find(p => p.metadata.slug.replace(/^\//, '').toLowerCase() === t);
  if (bySlug) return bySlug;

  // 2. Exact title match
  const byTitle = pages.find(p => p.metadata.title.toLowerCase() === t);
  if (byTitle) return byTitle;

  // 3. Filename match (handle folder structures)
  const byFilename = pages.find(p => {
    const fileName = p.metadata.fullPath.split('/').pop()?.replace('.md', '').toLowerCase();
    return fileName === t;
  });
  if (byFilename) return byFilename;

  // 4. Partial slug match (e.g. [[kelly]] matches /finance/portfolio/kelly-criterion)
  const byPartialSlug = pages.find(p => p.metadata.slug.toLowerCase().includes(t));
  if (byPartialSlug) return byPartialSlug;

  // 5. Fallback: Search in titles
  return pages.find(p => p.metadata.title.toLowerCase().includes(t));
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
  '_other':          { en: 'Other', ru: 'Разное' },
};

const SECTION_ORDER = [
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

const CATEGORY_LABELS: Record<string, Record<'en' | 'ru', string>> = {
  'Language Models':      { en: 'Language Models', ru: 'Языковые модели' },
  'LLM Infrastructure':   { en: 'LLM Infrastructure', ru: 'Инфраструктура LLM' },
  'AI Theory':            { en: 'AI Theory', ru: 'Теория ИИ' },
  'Scientific ML':        { en: 'Scientific ML', ru: 'Научное ML' },
  'AI Finance':           { en: 'AI Finance', ru: 'ИИ в финансах' },
  'AI Physics':           { en: 'AI Physics', ru: 'ИИ в физике' },
  'Stochastic Calculus':  { en: 'Stochastic Calculus', ru: 'Стохастическое исчисление' },
  'Applied Probability':  { en: 'Applied Probability', ru: 'Прикладная вероятность' },
  'Asymptotic Statistics': { en: 'Asymptotic Statistics', ru: 'Асимптотическая статистика' },
  'Foundations':          { en: 'Foundations', ru: 'Основания' },
  'Fundamentals':         { en: 'Fundamentals', ru: 'Базовые понятия' },
  'Math':                 { en: 'Math', ru: 'Математика' },
  'Finance':              { en: 'Finance', ru: 'Финансы' },
  'Physics':              { en: 'Physics', ru: 'Физика' },
  'Quantum Physics':      { en: 'Quantum Physics', ru: 'Квантовая физика' },
  'Classical Physics':    { en: 'Classical Physics', ru: 'Классическая физика' },
  'Gravity':              { en: 'Gravity', ru: 'Гравитация' },
  'Holography':           { en: 'Holography', ru: 'Голография' },
  'Stochastic':           { en: 'Stochastic Finance', ru: 'Стохастические финансы' },
  'Portfolio':            { en: 'Portfolio Management', ru: 'Управление портфелем' },
  'Pricing':              { en: 'Pricing', ru: 'Ценообразование' },
  'Pricing Models':       { en: 'Pricing', ru: 'Ценообразование' },
  'Risk':                 { en: 'Risk Management', ru: 'Управление рисками' },
  'Risk Management':      { en: 'Risk Management', ru: 'Управление рисками' },
  'Stochastic Processes': { en: 'Stochastic Processes', ru: 'Случайные процессы' },
  'Стохастические процессы': { en: 'Stochastic Processes', ru: 'Случайные процессы' },
  'Microstructure':       { en: 'Market Microstructure', ru: 'Микроструктура рынка' },
  'Микроструктура рынка': { en: 'Market Microstructure', ru: 'Микроструктура рынка' },
  'Time Series':          { en: 'Time Series', ru: 'Временные ряды' },
  'Derivatives':          { en: 'Derivatives', ru: 'Деривативы' },
  'Analysis & Geometry':  { en: 'Analysis & Geometry', ru: 'Анализ и Геометрия' },
  'Statistical Learning': { en: 'Statistical Learning', ru: 'Статистическое обучение' },
  'Topology':             { en: 'Topology', ru: 'Топология' },
  'Learning Theory':      { en: 'Learning Theory', ru: 'Теория обучения' },
  'Advanced Analysis':    { en: 'Advanced Analysis', ru: 'Продвинутый анализ' },
  'Functional Analysis':  { en: 'Functional Analysis', ru: 'Функциональный анализ' },
  'Algorithms and ML':    { en: 'Algorithms and ML', ru: 'Алгоритмы и ML' },
  'Portfolio Management': { en: 'Portfolio Management', ru: 'Управление портфелем' },
  'Machine Learning in Finance': { en: 'Machine Learning in Finance', ru: 'Машинное обучение в финансах' },
  'Stochastic Finance':   { en: 'Stochastic Finance', ru: 'Стохастические финансы' },
  'DeFi':                 { en: 'DeFi', ru: 'Децентрализованные финансы' },
  'Quantitative Theory':  { en: 'Quantitative Theory', ru: 'Количественная теория' },
  'Measure Theory':       { en: 'Measure Theory', ru: 'Теория меры' },
  'Large Deviations':     { en: 'Large Deviations', ru: 'Большие уклонения' },
  'Martingales':          { en: 'Martingales', ru: 'Мартингалы' },
  'Limit Theorems':       { en: 'Limit Theorems', ru: 'Предельные теоремы' },
  'Ergodic Theory':       { en: 'Ergodic Theory', ru: 'Эргодическая теория' },
  'Алгоритмы и ML':       { en: 'Algorithms and ML', ru: 'Алгоритмы и ML' },
  'Теория меры':          { en: 'Measure Theory', ru: 'Теория меры' },
  'Большие уклонения':    { en: 'Large Deviations', ru: 'Большие уклонения' },
  'Предельные теоремы':    { en: 'Limit Theorems', ru: 'Предельные теоремы' },
  'Теория мартингалов':    { en: 'Martingales', ru: 'Мартингалы' },
  'Теория ИИ':            { en: 'AI Theory', ru: 'Теория ИИ' },
  'Асимптотическая статистика': { en: 'Asymptotic Statistics', ru: 'Асимптотическая статистика' },
};

const SKIP_CATS = new Set(['Home', 'Главная', 'Projects', 'Проекты']);

export const getNavigationTree = (lang: 'en' | 'ru'): NavSection[] => {
  const pages = getAllPages().filter(p => p.metadata.lang === lang && !SKIP_CATS.has(p.metadata.category));

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

  return sections;
};

/** Returns pages that link TO the given slug via wikilinks. */
export const getBacklinks = (slug: string, lang: 'en' | 'ru'): PageMetadata[] => {
  const pages = getAllPages().filter(p => p.metadata.lang === lang);
  const backlinks: PageMetadata[] = [];

  for (const page of pages) {
    if (page.metadata.slug === slug) continue;
    const matches = page.content.matchAll(/\[\[(.*?)\]\]/g);
    for (const match of matches) {
      const linkTarget = match[1].split('|')[0].trim();
      const resolved = resolveWikilink(linkTarget, pages, page.metadata.category);
      if (resolved && resolved.metadata.slug === slug) {
        backlinks.push(page.metadata);
        break; // one backlink per page is enough
      }
    }
  }

  return backlinks;
};

/** Returns related articles by shared wikilink overlap (Jaccard-like), falling back to same category. */
export const getRelatedArticles = (slug: string, lang: 'en' | 'ru', limit = 5): PageMetadata[] => {
  const pages = getAllPages().filter(p => p.metadata.lang === lang);
  const currentPage = pages.find(p => p.metadata.slug === slug);
  if (!currentPage) return [];

  const getOutLinks = (page: PageContent): Set<string> => {
    const links = new Set<string>();
    const matches = page.content.matchAll(/\[\[(.*?)\]\]/g);
    for (const m of matches) {
      const target = m[1].split('|')[0].trim();
      const resolved = resolveWikilink(target, pages, page.metadata.category);
      if (resolved) links.add(resolved.metadata.slug);
    }
    return links;
  };

  const currentLinks = getOutLinks(currentPage);
  if (currentLinks.size === 0) {
    return pages
      .filter(p => p.metadata.category === currentPage.metadata.category && p.metadata.slug !== slug)
      .sort((a, b) => (a.metadata.order || 99) - (b.metadata.order || 99))
      .slice(0, limit)
      .map(p => p.metadata);
  }

  const scored = pages
    .filter(p => p.metadata.slug !== slug)
    .map(p => {
      const pLinks = getOutLinks(p);
      const intersection = [...currentLinks].filter(l => pLinks.has(l)).length;
      const union = new Set([...currentLinks, ...pLinks]).size;
      return { metadata: p.metadata, score: union > 0 ? intersection / union : 0 };
    })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  if (scored.length < limit) {
    const existing = new Set(scored.map(s => s.metadata.slug));
    existing.add(slug);
    const fillers = pages
      .filter(p => p.metadata.category === currentPage.metadata.category && !existing.has(p.metadata.slug))
      .slice(0, limit - scored.length);
    return [...scored.map(s => s.metadata), ...fillers.map(p => p.metadata)];
  }

  return scored.map(s => s.metadata);
};

const GRAPH_EXCLUDED_CATEGORIES = new Set(['Projects', 'Проекты', 'Home', 'Главная']);

export const getGraphData = (lang: 'en' | 'ru') => {
  const pages = getAllPages()
    .filter(p => p.metadata.lang === lang)
    .filter(p => !GRAPH_EXCLUDED_CATEGORIES.has(p.metadata.category));

  const nodes = pages.map(page => ({
    id: page.metadata.slug.replace(/^\//, ''),
    name: page.metadata.title,
    category: page.metadata.category,
    val: page.metadata.category === 'Home' || page.metadata.category === 'Главная' ? 2 : 1
  }));

  const links: { source: string, target: string }[] = [];
  
  pages.forEach(page => {
    const sourceId = page.metadata.slug.replace(/^\//, '');
    const matches = page.content.matchAll(/\[\[(.*?)\]\]/g);
    for (const match of matches) {
      const targetFileName = match[1].split('|')[0].trim();
      const resolved = resolveWikilink(targetFileName, pages, page.metadata.category);
      if (resolved) {
        const targetId = resolved.metadata.slug.replace(/^\//, '');
        if (targetId !== sourceId) {
          links.push({ source: sourceId, target: targetId });
        }
      }
    }
  });

  return { nodes, links };
};
