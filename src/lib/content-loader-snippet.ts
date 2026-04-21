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
