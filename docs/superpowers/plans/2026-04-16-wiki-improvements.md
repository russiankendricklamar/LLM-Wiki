# Wiki Improvements — 14 Features Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 14 improvements to LLM-Wiki: BrowserRouter, KaTeX cleanup, code splitting, lazy content, prev/next nav, breadcrumbs, active TOC, back-to-top, backlinks, full-text search, related articles, wikilink fix, graph filtering, graph hover highlighting.

**Architecture:** Infrastructure changes first (router, fonts, wikilink fix), then content-loader enhancements (backlinks/related data layer), then UI components, then graph features. No test runner exists — verification is manual via dev server.

**Tech Stack:** React 19, react-router-dom 7, Vite 6, Tailwind 4, react-force-graph-3d/2d, three.js, cmdk, KaTeX, Recharts

---

## Phase 1: Infrastructure

### Task 1: HashRouter → BrowserRouter

**Files:**
- Modify: `src/App.tsx`
- Modify: `vercel.json`
- Modify: `package.json`

- [ ] **Step 1: Update vercel.json with SPA fallback**

```json
{
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- [ ] **Step 2: Replace HashRouter with BrowserRouter in App.tsx**

Change import:
```tsx
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
```

Change JSX in `App`:
```tsx
<BrowserRouter>
  <RouterShell lang={lang} setLang={setLang} />
</BrowserRouter>
```

- [ ] **Step 3: Remove gh-pages from package.json**

Remove from `devDependencies`: `"gh-pages": "^6.3.0"`
Remove from `scripts`: `"predeploy"` and `"deploy"` entries.

- [ ] **Step 4: Verify locally**

Run: `npm run dev`
Navigate to `/finance/black-scholes` directly in browser bar — should load the page, not 404.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx vercel.json package.json
git commit -m "feat: migrate from HashRouter to BrowserRouter for clean URLs and SEO"
```

---

### Task 2: KaTeX Font Cleanup (WOFF2 only)

**Files:**
- Modify: `vite.config.ts`

- [ ] **Step 1: Add Vite rollup config to exclude TTF and WOFF fonts**

In `vite.config.ts`, inside the `build` object, add:

```ts
build: {
  chunkSizeWarningLimit: 1000,
  rollupOptions: {
    output: {
      assetFileNames: (assetInfo) => {
        // Exclude TTF and WOFF (keep only WOFF2)
        if (assetInfo.name && /\.(ttf|woff)$/i.test(assetInfo.name) && !/\.woff2$/i.test(assetInfo.name)) {
          return 'assets/excluded/[name][extname]';
        }
        return 'assets/[name]-[hash][extname]';
      },
    },
  },
},
```

- [ ] **Step 2: Add Vite plugin to filter KaTeX non-WOFF2 fonts from the bundle**

Better approach — use a custom plugin in `vite.config.ts`:

```ts
const katexFontFilter = () => ({
  name: 'katex-font-filter',
  generateBundle(_: any, bundle: any) {
    for (const key of Object.keys(bundle)) {
      if (/katex.*\.(ttf|woff)$/i.test(key) && !/\.woff2$/i.test(key)) {
        delete bundle[key];
      }
    }
  },
});
```

Add to plugins: `plugins: [react(), tailwindcss(), katexFontFilter()]`

- [ ] **Step 3: Build and compare sizes**

Run: `npm run build`
Check `dist/assets/` — should contain only `.woff2` KaTeX fonts, no `.ttf` or `.woff`.

- [ ] **Step 4: Verify math renders in browser**

Run: `npm run dev`, open an article with LaTeX (e.g. any Finance article with formulas). Confirm formulas render correctly.

- [ ] **Step 5: Commit**

```bash
git add vite.config.ts
git commit -m "perf: strip TTF/WOFF KaTeX fonts, keep only WOFF2"
```

---

### Task 3: Fix Wikilink Resolution

**Files:**
- Modify: `src/lib/content-loader.ts` (getGraphData)
- Modify: `src/components/MarkdownRenderer.tsx` (processWikilinks)

- [ ] **Step 1: Create shared wikilink resolver in content-loader.ts**

Add after `getAllPages()`:

```ts
/**
 * Resolve a wikilink target name to a page.
 * Priority: exact slug match → exact filename match → same-category suffix → any suffix.
 */
export const resolveWikilink = (
  target: string,
  pages: PageContent[],
  sourceCategory?: string
): PageContent | undefined => {
  const t = target.toLowerCase();

  // 1. Exact slug match: target = "finance/black-scholes" matches slug "/finance/black-scholes"
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

  // 4. Same-category suffix match (prefer links within same category)
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
```

- [ ] **Step 2: Update getGraphData to use resolveWikilink**

Replace the wikilink matching in `getGraphData`:

```ts
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
```

- [ ] **Step 3: Update processWikilinks in MarkdownRenderer.tsx**

Replace the `processWikilinks` function:

```tsx
import { getAllPages, resolveWikilink } from '@/lib/content-loader';

const processWikilinks = (content: string, sourceCategory?: string) => {
  const allPages = getAllPages();
  return content.replace(/\[\[(.*?)(?:\|(.*?))?\]\]/g, (match, pageName, displayText) => {
    const target = pageName.trim();
    const page = resolveWikilink(target, allPages, sourceCategory);
    if (page) {
      const linkText = displayText ? displayText.trim() : page.metadata.title;
      return `[${linkText}](${page.metadata.slug})`;
    }
    const display = (displayText || pageName).trim();
    return `<span class="text-zinc-400 opacity-70">[[${display}]]</span>`;
  });
};
```

Update the `MarkdownRenderer` component to accept and pass `category`:

```tsx
interface MarkdownRendererProps {
  content: string;
  className?: string;
  category?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className, category }) => {
  const processedContent = React.useMemo(() => processWikilinks(content, category), [content, category]);
  // ... rest unchanged
```

- [ ] **Step 4: Pass category from PageContent to MarkdownRenderer**

In `App.tsx`, update the `PageContent` component's non-graph branch:

```tsx
<MarkdownRenderer content={content} category={category} />
```

- [ ] **Step 5: Verify**

Open an article with wikilinks, confirm they resolve correctly. Check the knowledge graph — edges should still appear.

- [ ] **Step 6: Commit**

```bash
git add src/lib/content-loader.ts src/components/MarkdownRenderer.tsx src/App.tsx
git commit -m "fix: improve wikilink resolution with priority chain (exact→title→filename→category→suffix)"
```

---

### Task 4: Content-Loader Enhancements (backlinks + related data layer + category on nodes)

**Files:**
- Modify: `src/lib/content-loader.ts`

- [ ] **Step 1: Add getBacklinks function**

```ts
/** Returns pages that link TO the given slug via wikilinks. */
export const getBacklinks = (slug: string, lang: 'en' | 'ru'): PageMetadata[] => {
  const targetSlug = slug.replace(/^\//, '');
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
```

- [ ] **Step 2: Add getRelatedArticles function**

```ts
/** Returns related articles by shared wikilink overlap (Jaccard-like), falling back to same category. */
export const getRelatedArticles = (slug: string, lang: 'en' | 'ru', limit = 5): PageMetadata[] => {
  const pages = getAllPages().filter(p => p.metadata.lang === lang);
  const currentPage = pages.find(p => p.metadata.slug === slug);
  if (!currentPage) return [];

  // Extract outgoing link slugs for a page
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
    // Fallback: same category, sorted by order
    return pages
      .filter(p => p.metadata.category === currentPage.metadata.category && p.metadata.slug !== slug)
      .sort((a, b) => (a.metadata.order || 99) - (b.metadata.order || 99))
      .slice(0, limit)
      .map(p => p.metadata);
  }

  // Score by shared links (Jaccard)
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

  // If we have fewer than limit related articles, fill with same-category
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
```

- [ ] **Step 3: Add category field to graph nodes**

In `getGraphData`, update the nodes mapping:

```ts
const nodes = pages.map(page => ({
  id: page.metadata.slug.replace(/^\//, ''),
  name: page.metadata.title,
  category: page.metadata.category,
  val: page.metadata.category === 'Home' || page.metadata.category === 'Главная' ? 2 : 1
}));
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/content-loader.ts
git commit -m "feat: add backlinks, related articles, and category on graph nodes to content-loader"
```

---

## Phase 2: Code Splitting & Lazy Content

### Task 5: Lazy-load heavy dependencies

**Files:**
- Modify: `src/components/MarkdownRenderer.tsx`

- [ ] **Step 1: Lazy-load SyntaxHighlighter**

Replace the static import:

```tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
```

With a lazy wrapper:

```tsx
const SyntaxHighlighterLazy = React.lazy(() =>
  import('react-syntax-highlighter').then(m => ({ default: m.Prism }))
);
const vscDarkPlusPromise = import('react-syntax-highlighter/dist/esm/styles/prism').then(m => m.vscDarkPlus);

// Inside CodeBlock, wrap the SyntaxHighlighter in Suspense:
// Also need to load the style. Use a state hook:
```

Actually, a simpler approach — keep static imports for SyntaxHighlighter (tree-shaking handles it) and focus on conditionally importing KaTeX CSS:

- [ ] **Step 1 (revised): Conditional KaTeX CSS import**

Remove the global import from MarkdownRenderer.tsx:
```tsx
// REMOVE: import 'katex/dist/katex.min.css';
```

Create `src/components/KatexStyles.tsx`:

```tsx
import 'katex/dist/katex.min.css';
export const KatexStyles = () => null;
```

In `MarkdownRenderer.tsx`, conditionally render it:

```tsx
import { KatexStyles } from './KatexStyles';

// Inside the component:
const hasMath = content.includes('$');

return (
  <div className={cn("prose prose-zinc dark:prose-invert max-w-none w-full break-words", className)}>
    {hasMath && <KatexStyles />}
    <ReactMarkdown ...>
```

- [ ] **Step 2: Lazy-load ChartRenderer**

In `MarkdownRenderer.tsx`, replace:
```tsx
import { ChartRenderer } from './ChartRenderer';
```
with:
```tsx
const ChartRendererLazy = React.lazy(() =>
  import('./ChartRenderer').then(m => ({ default: m.ChartRenderer }))
);
```

In the `CodeBlock` component where `ChartRenderer` is used, wrap with Suspense:
```tsx
if (language === 'chart') {
  try {
    const chartConfig = JSON.parse(String(children));
    return (
      <React.Suspense fallback={<div className="h-64 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-lg my-6" />}>
        <ChartRendererLazy config={chartConfig} />
      </React.Suspense>
    );
  } catch (e) {
    // ... existing error fallback
  }
}
```

- [ ] **Step 3: Verify**

Open an article with charts and one with code blocks. Both should still render correctly (with a brief loading state).

- [ ] **Step 4: Commit**

```bash
git add src/components/MarkdownRenderer.tsx src/components/KatexStyles.tsx
git commit -m "perf: lazy-load KaTeX CSS and ChartRenderer for smaller initial bundle"
```

---

### Task 6: Lazy Content Loading

**Files:**
- Modify: `src/lib/content-loader.ts`

- [ ] **Step 1: Split content loading into metadata (eager) + body (lazy)**

Replace the top of content-loader.ts:

```ts
// Eager: load raw files for frontmatter extraction at startup
const rawFiles = import.meta.glob('../../obsidian-vault/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

// Cache for parsed pages — avoids re-parsing on every getAllPages() call
let _cachedPages: PageContent[] | null = null;
```

Add a `resetCache` export for HMR:

```ts
export const resetContentCache = () => { _cachedPages = null; };
```

Wrap `getAllPages` with caching:

```ts
export const getAllPages = (): PageContent[] => {
  if (_cachedPages) return _cachedPages;
  _cachedPages = Object.entries(rawFiles).map(([filePath, rawContent]) => {
    // ... existing implementation unchanged
  });
  return _cachedPages;
};
```

This is the simplest improvement: since `getAllPages()` is called repeatedly (navigation, search, graph, backlinks), caching avoids re-parsing 610 files on every call.

- [ ] **Step 2: Verify**

Run dev server, navigate between pages. Performance should feel snappier.

- [ ] **Step 3: Commit**

```bash
git add src/lib/content-loader.ts
git commit -m "perf: cache parsed pages in content-loader to avoid re-parsing 610 files"
```

---

## Phase 3: Navigation UI Components

### Task 7: Breadcrumbs

**Files:**
- Create: `src/components/Breadcrumbs.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Breadcrumbs component**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  category: string;
  title: string;
  lang: 'en' | 'ru';
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, title, lang, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400", className)}>
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{lang === 'en' ? 'Home' : 'Главная'}</span>
      </Link>
      <ChevronRight className="w-3 h-3 opacity-50" />
      <span className="text-zinc-600 dark:text-zinc-300">{category}</span>
      <ChevronRight className="w-3 h-3 opacity-50" />
      <span className="text-zinc-900 dark:text-zinc-100 font-medium truncate max-w-[200px]">{title}</span>
    </nav>
  );
};
```

- [ ] **Step 2: Replace the category/title header in PageContent (App.tsx)**

Replace the existing breadcrumb-like div in `PageContent`:

```tsx
{!isGraphPage && (
  <div className="mb-8 flex items-center justify-between gap-4">
    <Breadcrumbs category={category} title={title} lang={lang} />
    {growthInfo && (
      <span className={cn(
        "shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
        growthInfo.tone
      )}>
        <span>{growthInfo[lang]}</span>
      </span>
    )}
  </div>
)}
```

Add import: `import { Breadcrumbs } from './components/Breadcrumbs';`

- [ ] **Step 3: Verify**

Navigate to any article — should show `Home > Category > Title` with clickable Home link.

- [ ] **Step 4: Commit**

```bash
git add src/components/Breadcrumbs.tsx src/App.tsx
git commit -m "feat: add breadcrumb navigation to article pages"
```

---

### Task 8: Prev/Next Article Navigation

**Files:**
- Create: `src/components/ArticleNav.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create ArticleNav component**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getNavigation } from '@/lib/content-loader';

interface ArticleNavProps {
  slug: string;
  category: string;
  lang: 'en' | 'ru';
}

export const ArticleNav: React.FC<ArticleNavProps> = ({ slug, category, lang }) => {
  const navigation = getNavigation(lang);
  const categorySection = navigation.find(s => s.title === category);
  if (!categorySection) return null;

  const items = categorySection.items;
  const currentIndex = items.findIndex(item => item.href === slug);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? items[currentIndex - 1] : null;
  const next = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 gap-4">
      {prev ? (
        <Link
          to={prev.href}
          className="group flex flex-col gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <ArrowLeft className="w-3 h-3" />
            {lang === 'en' ? 'Previous' : 'Предыдущая'}
          </span>
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.href}
          className="group flex flex-col items-end gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-right"
        >
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            {lang === 'en' ? 'Next' : 'Следующая'}
            <ArrowRight className="w-3 h-3" />
          </span>
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};
```

- [ ] **Step 2: Add ArticleNav to PageContent in App.tsx**

Add import: `import { ArticleNav } from './components/ArticleNav';`

In the non-graph branch of PageContent, after `<MarkdownRenderer>`:

```tsx
{!isGraphPage && (
  <>
    <MarkdownRenderer content={content} category={category} />
    <ArticleNav slug={slug} category={category} lang={lang} />
  </>
)}
```

- [ ] **Step 3: Verify**

Open an article in the middle of a category — should see prev/next cards at the bottom.

- [ ] **Step 4: Commit**

```bash
git add src/components/ArticleNav.tsx src/App.tsx
git commit -m "feat: add prev/next article navigation at bottom of pages"
```

---

### Task 9: Back to Top Button

**Files:**
- Create: `src/components/ScrollToTop.tsx`
- Modify: `src/components/PageLayout.tsx`

- [ ] **Step 1: Create ScrollToTop component**

```tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollToTopProps {
  scrollContainer?: React.RefObject<HTMLElement | null>;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollContainer }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = scrollContainer?.current || window;
    const handleScroll = () => {
      const scrollY = scrollContainer?.current
        ? scrollContainer.current.scrollTop
        : window.scrollY;
      setVisible(scrollY > 400);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [scrollContainer]);

  const scrollToTop = () => {
    const el = scrollContainer?.current;
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-20 p-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg transition-all duration-300",
        "hover:bg-zinc-700 dark:hover:bg-zinc-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
```

- [ ] **Step 2: Add ScrollToTop to PageLayout**

Import: `import { ScrollToTop } from './ScrollToTop';`

Add a ref to the scrollable content container in PageLayout. In the sidebar branch:

```tsx
const scrollRef = React.useRef<HTMLDivElement>(null);
```

On the scrollable div (`<div className="flex min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden">`), add `ref={scrollRef}`.

After `<MobileNavDrawer>`, add:

```tsx
<ScrollToTop scrollContainer={scrollRef} />
```

- [ ] **Step 3: Verify**

Scroll down on any article — floating button should appear. Click — smooth scroll to top.

- [ ] **Step 4: Commit**

```bash
git add src/components/ScrollToTop.tsx src/components/PageLayout.tsx
git commit -m "feat: add floating scroll-to-top button"
```

---

### Task 10: TOC Active Section Highlighting

**Files:**
- Modify: `src/components/TableOfContents.tsx`

- [ ] **Step 1: Add IntersectionObserver for active heading tracking**

Replace the entire `TableOfContents.tsx`:

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ className, lang = 'ru' }) => {
  const [headings, setHeadings] = useState<{ title: string; id: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Collect headings from the DOM
  useEffect(() => {
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'))
        .map((el) => ({
          title: (el as HTMLElement).innerText,
          id: el.id,
          level: parseInt(el.tagName.replace('H', '')),
        }))
        .filter((h) => h.id);
      setHeadings(elements);
    };

    updateHeadings();
    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Track which heading is currently in view
  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current?.disconnect();

    const callback: IntersectionObserverCallback = (entries) => {
      // Find the topmost visible heading
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the one closest to the top of the viewport
        const sorted = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        setActiveId(sorted[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -75% 0px',
      threshold: 0.1,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className={cn("w-64 flex-shrink-0 hidden xl:block", className)}>
      <div className="sticky top-20 pt-8 pb-8 pr-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
          {lang === 'en' ? 'On this page' : 'На этой странице'}
        </h4>
        <nav>
          <ul className="space-y-2.5 text-sm">
            {headings.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block transition-colors line-clamp-2",
                    activeId === item.id
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
```

- [ ] **Step 2: Verify**

Open a long article with multiple h2/h3 headings. Scroll — the TOC should highlight the current section in blue.

- [ ] **Step 3: Commit**

```bash
git add src/components/TableOfContents.tsx
git commit -m "feat: highlight active section in table of contents while scrolling"
```

---

## Phase 4: Content Features

### Task 11: Full-Text Search

**Files:**
- Modify: `src/components/SearchDialog.tsx`

- [ ] **Step 1: Add content excerpts to search items**

```tsx
import React, { useEffect } from 'react';
import { Command } from 'cmdk';
import { Search, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllPages } from '@/lib/content-loader';

const extractExcerpt = (content: string, maxLen = 120): string => {
  // Strip frontmatter, headings, wikilinks, code blocks, math
  const clean = content
    .replace(/^---[\s\S]*?---\n?/, '')
    .replace(/^#{1,6}\s+.*/gm, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, s, a) => a || s)
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^$]+\$/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  return clean.length > maxLen ? clean.slice(0, maxLen) + '...' : clean;
};

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang?: 'en' | 'ru';
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange, lang = 'ru' }) => {
  const navigate = useNavigate();
  const allPages = getAllPages().filter(p => p.metadata.lang === lang);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const onSelect = (path: string) => {
    navigate(path);
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center sm:items-start sm:pt-[10vh]">
      <div
        className="fixed inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-50 flex w-full max-w-none flex-col bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all sm:max-w-lg sm:rounded-xl sm:overflow-hidden">
        <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent">
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
            <Command.Input
              autoFocus
              placeholder={lang === 'en' ? "Search documentation..." : "Поиск по базе знаний..."}
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 dark:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12"
            />
          </div>
          <Command.List className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overflow-x-hidden p-2 sm:max-h-[300px]">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              {lang === 'en' ? "No results found." : "Ничего не найдено."}
            </Command.Empty>

            {Array.from(new Set(allPages.map(p => p.metadata.category))).map(category => (
              <Command.Group
                key={category}
                heading={category}
                className="px-2 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400"
              >
                {allPages
                  .filter(p => p.metadata.category === category)
                  .map(page => {
                    const excerpt = extractExcerpt(page.content);
                    return (
                      <Command.Item
                        key={page.metadata.slug}
                        value={`${page.metadata.title} ${excerpt}`}
                        onSelect={() => onSelect(page.metadata.slug)}
                        className="relative flex cursor-pointer select-none items-start gap-2 rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-zinc-700 dark:text-zinc-300 transition-colors"
                      >
                        <FileText className="mt-0.5 h-4 w-4 opacity-70 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium">{page.metadata.title}</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                            {excerpt}
                          </div>
                        </div>
                      </Command.Item>
                    );
                  })}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
};
```

- [ ] **Step 2: Verify**

Press `Cmd+K`, type a word that appears in article content but NOT in the title. It should now find it. Each result should show a snippet below the title.

- [ ] **Step 3: Commit**

```bash
git add src/components/SearchDialog.tsx
git commit -m "feat: full-text search with content excerpts in search dialog"
```

---

### Task 12: Backlinks Component

**Files:**
- Create: `src/components/Backlinks.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Backlinks component**

```tsx
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft } from 'lucide-react';
import { getBacklinks } from '@/lib/content-loader';

interface BacklinksProps {
  slug: string;
  lang: 'en' | 'ru';
}

export const Backlinks: React.FC<BacklinksProps> = ({ slug, lang }) => {
  const backlinks = useMemo(() => getBacklinks(slug, lang), [slug, lang]);

  if (backlinks.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        <ArrowUpLeft className="w-4 h-4" />
        {lang === 'en' ? 'Links to this page' : 'Ссылки на эту страницу'}
        <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">({backlinks.length})</span>
      </h3>
      <ul className="flex flex-wrap gap-2">
        {backlinks.map(bl => (
          <li key={bl.slug}>
            <Link
              to={bl.slug}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {bl.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

- [ ] **Step 2: Add Backlinks to PageContent in App.tsx**

Import: `import { Backlinks } from './components/Backlinks';`

After `<ArticleNav>`:

```tsx
<Backlinks slug={slug} lang={lang} />
<ArticleNav slug={slug} category={category} lang={lang} />
```

- [ ] **Step 3: Verify**

Open a heavily-linked article (e.g. a central Finance concept). Should see incoming links listed below the content.

- [ ] **Step 4: Commit**

```bash
git add src/components/Backlinks.tsx src/App.tsx
git commit -m "feat: show backlinks (incoming references) on article pages"
```

---

### Task 13: Related Articles Component

**Files:**
- Create: `src/components/RelatedArticles.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create RelatedArticles component**

```tsx
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { getRelatedArticles } from '@/lib/content-loader';

interface RelatedArticlesProps {
  slug: string;
  lang: 'en' | 'ru';
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ slug, lang }) => {
  const related = useMemo(() => getRelatedArticles(slug, lang, 5), [slug, lang]);

  if (related.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        <Sparkles className="w-4 h-4" />
        {lang === 'en' ? 'Related articles' : 'Похожие статьи'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {related.map(article => (
          <Link
            key={article.slug}
            to={article.slug}
            className="group rounded-lg border border-zinc-200 dark:border-zinc-800 p-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{article.category}</div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {article.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
```

- [ ] **Step 2: Add RelatedArticles to PageContent in App.tsx**

Import: `import { RelatedArticles } from './components/RelatedArticles';`

Place after `<Backlinks>` and before `<ArticleNav>`:

```tsx
<Backlinks slug={slug} lang={lang} />
<RelatedArticles slug={slug} lang={lang} />
<ArticleNav slug={slug} category={category} lang={lang} />
```

- [ ] **Step 3: Verify**

Open an article with many wikilinks. Should see a grid of related articles.

- [ ] **Step 4: Commit**

```bash
git add src/components/RelatedArticles.tsx src/App.tsx
git commit -m "feat: show related articles based on shared wikilink overlap"
```

---

## Phase 5: Knowledge Graph Enhancements

### Task 14: Category Filtering

**Files:**
- Modify: `src/components/KnowledgeGraph.tsx`

- [ ] **Step 1: Add category filter state and UI**

At the top of the `KnowledgeGraph` component, after existing state:

```tsx
const allCategories = useMemo(
  () => [...new Set(graphData.nodes.map((n: any) => n.category))].sort(),
  [graphData]
);
const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set(allCategories));

// Re-sync when language changes
useEffect(() => {
  setActiveCategories(new Set(allCategories));
}, [allCategories]);

const toggleCategory = (cat: string) => {
  setActiveCategories(prev => {
    const next = new Set(prev);
    if (next.has(cat)) {
      if (next.size > 1) next.delete(cat); // don't allow empty
    } else {
      next.add(cat);
    }
    return next;
  });
};

const filteredData = useMemo(() => {
  const nodeSet = new Set(
    graphData.nodes.filter((n: any) => activeCategories.has(n.category)).map((n: any) => n.id)
  );
  return {
    nodes: graphData.nodes.filter((n: any) => nodeSet.has(n.id)),
    links: graphData.links.filter((l: any) => {
      const src = typeof l.source === 'object' ? l.source.id : l.source;
      const tgt = typeof l.target === 'object' ? l.target.id : l.target;
      return nodeSet.has(src) && nodeSet.has(tgt);
    }),
  };
}, [graphData, activeCategories]);
```

- [ ] **Step 2: Add category chips UI**

After the title/subtitle overlay div, add:

```tsx
<div className="absolute top-16 left-6 z-10 flex flex-wrap gap-1.5 max-w-[calc(100%-3rem)]">
  {allCategories.map((cat: string) => (
    <button
      key={cat}
      onClick={() => toggleCategory(cat)}
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-medium border transition-all",
        activeCategories.has(cat)
          ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
          : "bg-zinc-800/50 border-zinc-700/50 text-zinc-500 hover:text-zinc-300"
      )}
    >
      {cat}
    </button>
  ))}
</div>
```

Add import: `import { cn } from '@/lib/utils';`

- [ ] **Step 3: Replace graphData with filteredData in both ForceGraph components**

Change `graphData={graphData as any}` to `graphData={filteredData as any}` in both `ForceGraph3DLazy` and `ForceGraph2DLazy`.

- [ ] **Step 4: Verify**

Open the graph, click category chips — graph should filter. Deselecting all but one should show only that category's nodes and links.

- [ ] **Step 5: Commit**

```bash
git add src/components/KnowledgeGraph.tsx
git commit -m "feat: add category filter chips to knowledge graph"
```

---

### Task 15: Graph Node/Edge Hover Highlighting

**Files:**
- Modify: `src/components/KnowledgeGraph.tsx`

- [ ] **Step 1: Add hover state and neighbor lookup**

After `filteredData` memo:

```tsx
const [hoveredNode, setHoveredNode] = useState<string | null>(null);

// Build adjacency set for hovered node
const neighbors = useMemo(() => {
  if (!hoveredNode) return new Set<string>();
  const set = new Set<string>();
  filteredData.links.forEach((l: any) => {
    const src = typeof l.source === 'object' ? l.source.id : l.source;
    const tgt = typeof l.target === 'object' ? l.target.id : l.target;
    if (src === hoveredNode) set.add(tgt);
    if (tgt === hoveredNode) set.add(src);
  });
  return set;
}, [hoveredNode, filteredData.links]);
```

- [ ] **Step 2: Update 3D node rendering for hover**

Replace the `nodeThreeObject` function:

```tsx
const nodeThreeObject = (node: any) => {
  const isHovered = node.id === hoveredNode;
  const isNeighbor = neighbors.has(node.id);
  const isDimmed = hoveredNode !== null && !isHovered && !isNeighbor;

  let color = '#a1a1aa'; // default zinc
  if (isHovered) color = '#3b82f6'; // blue-500
  else if (isNeighbor) color = '#60a5fa'; // blue-400
  else if (node.val > 1.5) color = '#60a5fa';

  const radius = isHovered ? 6 : (node.val === 2 ? 5 : 3);
  const geometry = new THREE.SphereGeometry(radius, 24, 24);
  const material = new THREE.MeshPhongMaterial({
    color,
    emissive: color,
    emissiveIntensity: isHovered ? 0.8 : 0.5,
    transparent: true,
    opacity: isDimmed ? 0.15 : 0.9,
    shininess: 100,
  });
  return new THREE.Mesh(geometry, material);
};
```

- [ ] **Step 3: Update link colors for hover**

Replace the static `linkColor` prop with a function:

```tsx
const linkColorFn = (link: any) => {
  if (!hoveredNode) return 'rgba(113, 113, 122, 0.2)';
  const src = typeof link.source === 'object' ? link.source.id : link.source;
  const tgt = typeof link.target === 'object' ? link.target.id : link.target;
  if (src === hoveredNode || tgt === hoveredNode) return 'rgba(96, 165, 250, 0.8)';
  return 'rgba(113, 113, 122, 0.05)';
};

const linkWidthFn = (link: any) => {
  if (!hoveredNode) return 0.5;
  const src = typeof link.source === 'object' ? link.source.id : link.source;
  const tgt = typeof link.target === 'object' ? link.target.id : link.target;
  if (src === hoveredNode || tgt === hoveredNode) return 2;
  return 0.2;
};
```

- [ ] **Step 4: Add onNodeHover to both graph components and apply link functions**

On `ForceGraph3DLazy`:

```tsx
<ForceGraph3DLazy
  ref={fgRef}
  width={dimensions.width}
  height={dimensions.height}
  graphData={filteredData as any}
  nodeLabel="name"
  nodeThreeObject={nodeThreeObject}
  linkDirectionalParticles={(link: any) => {
    if (!hoveredNode) return 1;
    const src = typeof link.source === 'object' ? link.source.id : link.source;
    const tgt = typeof link.target === 'object' ? link.target.id : link.target;
    return (src === hoveredNode || tgt === hoveredNode) ? 3 : 0;
  }}
  linkDirectionalParticleSpeed={0.003}
  linkDirectionalParticleWidth={2}
  linkDirectionalParticleColor={() => '#60a5fa'}
  backgroundColor="rgba(0,0,0,0)"
  showNavInfo={false}
  onNodeClick={(node: any) => navigate(`/${node.id}`)}
  onNodeHover={(node: any) => setHoveredNode(node ? node.id : null)}
  linkColor={linkColorFn}
  linkWidth={linkWidthFn}
  enableNodeDrag={false}
  enableNavigationControls={true}
/>
```

On `ForceGraph2DLazy`, add `onNodeHover`, `linkColor`, `linkWidth` the same way, and add a custom `nodeCanvasObject` for 2D hover:

```tsx
<ForceGraph2DLazy
  width={dimensions.width}
  height={dimensions.height}
  graphData={filteredData as any}
  nodeLabel="name"
  nodeRelSize={4}
  nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const isHov = node.id === hoveredNode;
    const isNb = neighbors.has(node.id);
    const isDim = hoveredNode !== null && !isHov && !isNb;

    const r = isHov ? 6 : 4;
    ctx.beginPath();
    ctx.arc(node.x!, node.y!, r, 0, 2 * Math.PI);
    ctx.fillStyle = isHov ? '#3b82f6' : isNb ? '#60a5fa' : isDim ? 'rgba(161,161,170,0.15)' : '#a1a1aa';
    ctx.fill();

    // Label on hover
    if (isHov || isNb) {
      const label = node.name;
      const fontSize = isHov ? 13 / globalScale : 11 / globalScale;
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = isHov ? '#3b82f6' : '#60a5fa';
      ctx.fillText(label, node.x!, node.y! + r + 2);
    }
  }}
  nodePointerAreaPaint={(node: any, color: string, ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(node.x!, node.y!, 6, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }}
  linkDirectionalParticles={(link: any) => {
    if (!hoveredNode) return 1;
    const src = typeof link.source === 'object' ? link.source.id : link.source;
    const tgt = typeof link.target === 'object' ? link.target.id : link.target;
    return (src === hoveredNode || tgt === hoveredNode) ? 3 : 0;
  }}
  linkDirectionalParticleSpeed={0.003}
  linkDirectionalParticleWidth={2}
  linkDirectionalParticleColor={() => '#60a5fa'}
  backgroundColor="rgba(0,0,0,0)"
  onNodeClick={(node: any) => navigate(`/${node.id}`)}
  onNodeHover={(node: any) => setHoveredNode(node ? node.id : null)}
  linkColor={linkColorFn}
  linkWidth={linkWidthFn}
  enableNodeDrag={false}
  cooldownTicks={100}
  d3VelocityDecay={0.3}
/>
```

- [ ] **Step 5: Verify**

Open the graph. Hover over a node — it should glow blue, its neighbors should be slightly highlighted, connected edges should brighten, and all unrelated nodes/edges should dim.

- [ ] **Step 6: Commit**

```bash
git add src/components/KnowledgeGraph.tsx
git commit -m "feat: highlight hovered node and its connections in knowledge graph"
```

---

## Summary

| Phase | Tasks | New Files | Modified Files |
|-------|-------|-----------|----------------|
| 1: Infrastructure | 1-4 | 0 | App.tsx, vercel.json, package.json, vite.config.ts, content-loader.ts, MarkdownRenderer.tsx |
| 2: Code Splitting | 5-6 | KatexStyles.tsx | MarkdownRenderer.tsx, content-loader.ts |
| 3: Navigation UI | 7-10 | Breadcrumbs.tsx, ArticleNav.tsx, ScrollToTop.tsx | App.tsx, PageLayout.tsx, TableOfContents.tsx |
| 4: Content Features | 11-13 | Backlinks.tsx, RelatedArticles.tsx | SearchDialog.tsx, App.tsx |
| 5: Knowledge Graph | 14-15 | 0 | KnowledgeGraph.tsx |
