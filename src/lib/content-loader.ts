import matter from 'gray-matter';

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

export const getAllPages = (): PageContent[] => {
  return Object.entries(rawFiles).map(([filePath, rawContent]) => {
    const { data, content } = matter(rawContent as string);
    
    // Generate a clean slug from filename:
    // ../../obsidian-vault/finance/black-scholes-en.md -> /finance/black-scholes
    let slug = filePath
      .replace('../../obsidian-vault/', '/')
      .replace('.md', '')
      .replace(/-en$/, '')
      .replace(/-ru$/, '');

    // Allow overriding slug in frontmatter
    if (data.slug) {
      slug = data.slug.startsWith('/') ? data.slug : `/${data.slug}`;
    }

    return {
      metadata: {
        title: data.title || 'Untitled',
        category: data.category || 'General',
        lang: (data.lang as 'en' | 'ru') || 'ru',
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
