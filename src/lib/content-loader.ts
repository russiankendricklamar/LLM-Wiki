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
      },
      content
    };
  });
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

const GRAPH_EXCLUDED_CATEGORIES = new Set(['Projects', 'Проекты', 'Home', 'Главная']);

export const getGraphData = (lang: 'en' | 'ru') => {
  const pages = getAllPages()
    .filter(p => p.metadata.lang === lang)
    .filter(p => !GRAPH_EXCLUDED_CATEGORIES.has(p.metadata.category));

  const nodes = pages.map(page => ({
    id: page.metadata.slug.replace(/^\//, ''),
    name: page.metadata.title,
    val: page.metadata.category === 'Home' || page.metadata.category === 'Главная' ? 2 : 1
  }));

  const links: { source: string, target: string }[] = [];
  
  pages.forEach(page => {
    const sourceId = page.metadata.slug.replace(/^\//, '');
    // Regex to find [[wikilinks]]
    const matches = page.content.matchAll(/\[\[(.*?)\]\]/g);
    for (const match of matches) {
      const targetFileName = match[1].trim();
      
      // Find a node whose ID contains the targetFileName
      // e.g. targetFileName "black-scholes" matches node ID "finance/black-scholes"
      const targetNode = nodes.find(n => n.id.endsWith(targetFileName) || n.id === targetFileName);
      
      if (targetNode) {
        links.push({ source: sourceId, target: targetNode.id });
      }
    }
  });

  return { nodes, links };
};
