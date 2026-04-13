export interface PageMetadata {
  title: string;
  category: string;
  lang: 'en' | 'ru';
  order?: number;
  slug: string;
  fullPath: string;
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
      
      // Try to parse number
      if (!isNaN(value as any) && value !== '') {
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

    return {
      metadata: {
        title: data.title || 'Untitled',
        category: data.category || 'General',
        lang: (data.lang as 'en' | 'ru') || pathLang,
        order: data.order || 99,
        slug: slug,
        fullPath: filePath
      },
      content
    };
  });
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
