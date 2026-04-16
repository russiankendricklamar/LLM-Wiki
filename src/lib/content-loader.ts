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

export const getAllPages = (): PageContent[] => {
  return Object.entries(rawFiles).map(([filePath, rawContent]) => {
    const { data, content } = parseFrontmatter(rawContent as string);
    
    // Detect language from path (en or ru)
    const isEnglish = filePath.includes('/obsidian-vault/en/');
    const pathLang = isEnglish ? 'en' : 'ru';

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
      },
      content
    };
  });
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
  const bySlug = pages.find(p => p.metadata.slug.replace(/^\//, '') === t);
  if (bySlug) return bySlug;

  // 2. Exact title match
  const byTitle = pages.find(p => p.metadata.title.toLowerCase() === t);
  if (byTitle) return byTitle;

  // 3. Exact filename match
  const byFilename = pages.find(p =>
    p.metadata.fullPath.toLowerCase().endsWith(`/${t}.md`)
  );
  if (byFilename) return byFilename;

  // 4. Same-category suffix match
  if (sourceCategory) {
    const sameCategory = pages.find(p =>
      p.metadata.category === sourceCategory &&
      p.metadata.slug.replace(/^\//, '').endsWith(t)
    );
    if (sameCategory) return sameCategory;
  }

  // 5. Any suffix match (fallback)
  return pages.find(p => p.metadata.slug.replace(/^\//, '').endsWith(t));
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
