# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server on port 3000 (host 0.0.0.0)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — type-check only (`tsc --noEmit`); there is no ESLint/Prettier config
- `npm run deploy` — publish `dist/` via `gh-pages` (runs `build` first through `predeploy`)

There is no test runner configured in this repo.

To disable Vite HMR during agent edits (prevents flicker): `DISABLE_HMR=true npm run dev`. The guard lives in `vite.config.ts` and should not be removed.

## Architecture

This is a **content-driven SPA**: a React 19 + Vite + Tailwind 4 site that renders a Markdown vault (`obsidian-vault/`) as a bilingual (en/ru) knowledge wiki. There is no backend and no build-time content pipeline — markdown is bundled directly into the client via Vite's glob import.

### Content loading pipeline (`src/lib/content-loader.ts`)

The single most important file to understand. It:

1. Uses `import.meta.glob('../../obsidian-vault/**/*.md', { eager: true, query: '?raw' })` to pull every markdown file into the bundle at build time. **Adding files under `obsidian-vault/` requires no code changes** — they appear automatically after a dev-server restart / rebuild.
2. Implements a **hand-rolled YAML frontmatter parser** (`parseFrontmatter`) instead of using `gray-matter`, to avoid pulling in `Buffer`/Node polyfills into the browser bundle. When extending frontmatter, respect that only simple `key: value` scalars are supported — no nested objects, arrays, or multi-line values.
3. Derives `lang` from the path segment (`obsidian-vault/en/...` vs `obsidian-vault/ru/...`), and derives `slug` from the filename; frontmatter `slug` overrides. **English and Russian versions of the same article must share the exact same `slug`** so the language toggle keeps users on the same page.
4. Exposes three views over the vault: `getAllPages()`, `getNavigation(lang)` (category-grouped sidebar tree), and `getGraphData(lang)` (nodes + links for the 3D graph, built by regex-matching `[[wikilinks]]` against known slugs).

### Routing (`src/App.tsx`)

Uses `HashRouter` (required for `gh-pages` hosting). Routes are generated dynamically from `getAllPages()` — one `<Route>` per markdown file, keyed by slug. The index route (`/`) resolves to the page with `order: 1` in category `Home` / `Главная` for the current language. Unknown paths redirect to `/`. Language is UI state (`useState`) on the top-level component, not part of the URL.

The route `/knowledge-graph` is special-cased in `PageContent`: it renders the `KnowledgeGraph` component full-bleed instead of piping content through `MarkdownRenderer`.

### Markdown rendering

`src/components/MarkdownRenderer.tsx` wires `react-markdown` with `remark-gfm`, `remark-math` + `rehype-katex` (LaTeX), and `react-syntax-highlighter` (code blocks). Two non-standard extensions:

- **`[[wikilinks]]`** are rewritten to internal router links before rendering.
- **` ```chart ` code blocks** are parsed as JSON and handed to `ChartRenderer.tsx` (Recharts: line/bar/scatter). Malformed JSON must render a graceful fallback — do not let chart errors break the whole page.

When touching Markdown rendering, also verify the Russian home page and at least one article with both math and a chart, since these three features interact through `react-markdown`'s component override system.

### Knowledge graph

`src/components/KnowledgeGraph.tsx` uses `react-force-graph-3d` + `three`. Data comes from `getGraphData(lang)`; wikilink resolution is **slug-suffix matching**, so renaming files or slugs can silently break graph edges even when article prose still works.

## Content authoring conventions

Files live in `obsidian-vault/{en,ru}/<category>/<slug>.md` and must start with frontmatter:

```yaml
---
title: "..."
category: "..."   # groups pages in the sidebar
order: 1          # sort order within category; 1 = first; order:1 + category:Home/Главная = home page
lang: "en"        # or "ru"
slug: "/path"     # optional; MUST match between en/ru pairs
---
```

The `obsidian-vault/` directory is designed to be opened directly as an Obsidian vault by the user — preserve that. Do not move markdown into `src/`, do not generate sidecar files into the vault, and do not rewrite files in ways that would break round-tripping through Obsidian.

## Deployment

Production is Vercel (auto-deploy on push to `main`, ~1 min). `npm run deploy` is an alternate path that publishes to GitHub Pages via `gh-pages`. `vercel.json` is intentionally minimal.
