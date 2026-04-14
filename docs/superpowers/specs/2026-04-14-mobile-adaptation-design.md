# Mobile Adaptation — Design Spec

**Date:** 2026-04-14
**Status:** Approved, ready for implementation planning
**Scope:** Adapt the entire LLM-Wiki SPA (`https://github.com/.../LLM-Wiki`) to work well on phone screens down to 375px wide (iPhone SE), without regressing the existing desktop experience.

---

## 1. Problem Statement

The site is a React 19 + Vite + Tailwind 4 bilingual wiki (`obsidian-vault/{en,ru}`) built around a hand-rolled content loader and a cinematic home page. It was built desktop-first. On a phone the current state has three hard breakages:

1. **Sidebar is always-on.** `Sidebar.tsx` is `w-64 shrink-0` and mounted unconditionally for every non-home / non-graph page via `PageLayout.tsx`. On a 375px screen it eats ~68% of the viewport, leaving articles unreadable.
2. **Home hero (`HomeHero.tsx`) is `fullBleed` with no scroll.** It uses a 2-column grid that only activates at `lg:` (1024px), a `9vw` / `clamp(3rem, …)` title, and a 3-stack CTA row with two fixed `w-36` columns. On narrow screens the CTA row overflows horizontally, the carousel gets clipped, and there is no fallback scroll.
3. **Knowledge Graph (`/knowledge-graph`) uses `react-force-graph-3d` + Three.js.** Heavy WebGL, single-finger gestures conflict with page scroll, and the 600KB+ Three.js bundle is overkill on a phone.

Additionally, a handful of smaller issues compound on mobile:

- `MarkdownRenderer.tsx` tables are wrapped in `overflow-y-auto` (wrong axis) — wide tables break layout on narrow screens.
- KaTeX display-mode equations have no overflow wrapper and will push the page wider than the viewport.
- `ChartRenderer.tsx` uses Recharts `ResponsiveContainer` but the default `min-height` (200px) and axis label sizing don't degrade gracefully on 375px.
- `AboutPage.tsx`, `ProjectsPage.tsx`, `Footer.tsx`, `SearchDialog.tsx` use multi-column grids without explicit narrow-screen fallbacks.

## 2. Goals & Non-Goals

### Goals

- Every route on the site is usable on a **375px-wide phone** (iPhone SE is the minimum target) and looks good at 390–430px (iPhone 12/13/14/15 / Pixel 7).
- Navigation sidebar becomes accessible on mobile via a **hamburger drawer**.
- `HomeHero` becomes **vertically scrollable** on mobile, preserving the featured-articles carousel.
- Featured carousel supports **touch swipe gestures** (in addition to arrow buttons).
- Knowledge Graph loads a **2D fallback** on mobile to eliminate 3D perf / gesture problems.
- Content-rendering bugs that affect narrow screens (table overflow axis, KaTeX overflow) get fixed as part of this work.
- **No desktop regressions.** Existing `lg+` layouts look bit-for-bit identical.
- Both dark and light themes remain correct.

### Non-Goals

- PWA / offline / service worker.
- Any change to routing, the content loader, or the `obsidian-vault/` structure.
- Rewriting content-rendering logic beyond targeted bug fixes.
- Perf optimization beyond the dynamic-import split for the Knowledge Graph.
- Localization audit — only new UI strings we introduce need en/ru pairs.
- Fixing the pre-existing `useEffect` dependency bug in `PageLayout.tsx:32` (dark-mode init) — unrelated to mobile scope.
- File-structure refactoring or cleanup outside what's directly required.

## 3. Design Decisions (with rationale)

All five structural decisions were agreed through a brainstorming Q&A pass. They are locked before implementation begins.

| # | Decision | Rationale (why over alternatives) |
|---|---|---|
| 1 | **Scope: entire site.** | User explicitly chose "весь сайт целиком" — Home, articles, About, Projects, Knowledge Graph, Search, Footer. |
| 2 | **Min breakpoint: 375px (iPhone SE).** | Industry standard; iPhone SE is still in wide use. 390px-only excludes a real audience. |
| 3 | **Sidebar pattern: hamburger drawer (overlay).** | Matches documentation-wiki conventions (Vercel docs, Supabase, Next.js docs). Fits a deep 3-level category tree. Allows reusing `Sidebar.tsx` 1:1 inside the drawer. Bottom-sheet would be cramped for deep trees; top-collapsed menu would break for long category lists; inline expansion would destroy the article reading frame. |
| 4 | **Home hero: vertical-scroll stack.** | Preserves the featured-articles carousel (important as a content entry point) without forcing it into a nested swipe-slide deck (UX anti-pattern). Matches user mental model for mobile web. Simplified-no-carousel would lose a key navigation surface. Horizontal swipe-deck of full screens would conflict with the internal carousel. |
| 5 | **Knowledge Graph: 2D fallback on mobile.** | `react-force-graph-2d` has the same API as `-3d`, data is identical. Touch controls (pan, pinch-zoom) work cleanly. No Three.js in the mobile bundle via dynamic import. 3D-as-is risks lag + awkward single-finger rotate gestures conflicting with page scroll. |
| 6 | **Carousel: add swipe gestures.** | `motion` is already a dependency. `drag="x"` + `onDragEnd` costs ~15 LOC. Swipe on a mobile carousel is a baseline expectation (Instagram Stories, Apple News). Arrows remain for accessibility. |

## 4. Architecture

### Principles

- **Mobile-first Tailwind 4.** Default classes target mobile (375px); `sm:`, `md:`, `lg:`, `xl:` progressively enhance. All existing desktop-only styling stays behind `lg:` / `xl:` where possible to guarantee no regression.
- **Breakpoints: Tailwind defaults.** `sm 640`, `md 768`, `lg 1024`, `xl 1280`. No custom breakpoints introduced.
- **No structural refactors.** Existing components are extended, not rewritten. Only two new files.
- **Only one new dependency:** `react-force-graph-2d`.

### New primitives

#### `src/hooks/use-media-query.ts`

A SSR-safe `useMediaQuery(query: string): boolean` hook wrapping `window.matchMedia`. Used where CSS-only responsive classes are insufficient — specifically in `KnowledgeGraph.tsx` to pick between 2D and 3D renderers. No other consumers unless a decision can't be expressed in Tailwind classes.

Implementation notes:
- Returns `false` on the server / before hydration (harmless: the graph falls back to 2D, which is fine as a default).
- Subscribes to `change` events on the `MediaQueryList`; cleans up on unmount.

#### `src/components/MobileNavDrawer.tsx`

A wrapper that renders the existing `Sidebar` inside a full-height slide-out panel on the left.

Requirements:
- **Width:** full-screen max with `max-w-xs` (~320px) + `w-[85vw]` to leave a visible tap-to-close area.
- **Animation:** `motion` slide-in-from-left (x: `-100% → 0`) with `ease: [0.22, 1, 0.36, 1]`, ~220ms. Backdrop fades in behind.
- **Close triggers:** backdrop click, `Escape` key, swipe-left gesture on the drawer (`motion drag="x"` with constraint), click on any `NavLink` inside the drawer (`onNavigate` callback from parent).
- **Accessibility:** `role="dialog"` + `aria-modal="true"` + `aria-label="Navigation"`. Trap scroll on `<body>` while open (`overflow-hidden`).
- **Sidebar reuse:** accepts `lang` prop, renders `<Sidebar lang={lang} />` verbatim. No changes to `Sidebar.tsx` itself.

### Rejected alternatives

- **Refactoring `Sidebar` into desktop + mobile variants** — unnecessary. The drawer wrapper pattern preserves a single source of truth.
- **Adding a `useBreakpoint` context at the `App.tsx` level** — over-engineering. CSS-only responsive classes handle 95% of cases; `useMediaQuery` handles the remaining 5%.
- **Introducing a mobile-only route at `/m/*`** — forks the app, massive maintenance cost.

## 5. Component Changes

### 5.1 `PageLayout.tsx`

- Add hamburger button in the top-bar left slot, shown on `< lg`. On click: open `MobileNavDrawer` via local `useState`.
- `<Sidebar>` inside the desktop `<main>` layout: wrap in `hidden lg:block`. On `< lg`, the drawer is the sole sidebar surface.
- Logo text ("Knowledge Garden" / "Сад Знаний"): currently `hidden sm:block`. Change to always visible (the icon alone reads as orphaned). Size is already `text-sm`.
- Main content padding is already responsive (`px-4 sm:px-6 lg:px-8 xl:px-12`) — no change.
- **`fullBleed` mode `<main>`:** change from `overflow-hidden` to `overflow-hidden lg:overflow-hidden max-lg:overflow-y-auto` — on `< lg`, the main scroll container is allowed to scroll, which is what HomeHero relies on (see 5.2). On `lg+`, the current viewport-locked behavior is bit-identical. No new props introduced.

### 5.2 `HomeHero.tsx`

- **Scroll strategy (CSS-only, no JS breakpoint check):** `PageLayout` unconditionally allows scroll in its `<main>` on `< lg`. HomeHero's own root container uses mobile-first classes so that on mobile it is tall-and-scrollable and on `lg+` it is viewport-locked (bit-identical to today). No `useMediaQuery` in HomeHero — the entire switch is Tailwind responsive classes. This keeps the component pure and avoids a hydration-time layout flash.
- Root container: `h-full` → `min-h-full lg:h-full`, add `overflow-y-auto lg:overflow-hidden`.
- Grid: existing `grid-cols-1 … lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]` stays. Mobile already gets 1 column.
- Title `EXPLORE / BUILD / RELEASE`: `fontSize: clamp(2.25rem, 12vw, 9.5rem)` (currently `clamp(3rem, 9vw, 9.5rem)`). Lower bound drops to 2.25rem so it fits on 375px without overflow. Multiplier bumped slightly so it still fills wider phones.
- Intro block vertical padding: `py-6` → `py-4 lg:py-6`.
- **CTA row:** on mobile, abandon the 3-stack and render **4 equal tiles in a 2×2 grid**:
  - row 1: About (primary style), Projects
  - row 2: Knowledge base, Graph
  - GitHub link: moved to intro area below subtitle as a small inline link with GitHub icon (keeps it reachable without a 5th tile).
  - On `lg+`, the existing 3-stack layout is restored via `hidden lg:flex` for the current markup and `grid grid-cols-2 gap-3 lg:hidden` for the mobile grid.
- **Featured carousel aside:** full width on mobile (`grid-cols-1` makes it naturally stack). `aspect-square` preserved. Add `motion.div` swipe wrapper:
  - `drag="x"`, `dragConstraints={{ left: 0, right: 0 }}`, `dragElastic={0.2}`.
  - `onDragEnd(_, info)`: if `info.offset.x < -50` → `paginate(1)`, if `> 50` → `paginate(-1)`.
  - `onDragStart`: set `isPaused=true`. On `onDragEnd`: `setTimeout(() => setIsPaused(false), 3000)`.
  - Arrow buttons remain visible (accessibility).
  - Progress bar and dot indicators unchanged.

### 5.3 `Sidebar.tsx`

- **No changes.** Reused verbatim inside `MobileNavDrawer`. The drawer controls width; the sidebar itself uses `h-full` which cooperates.
- Verify `NavLink` children trigger the drawer's `onNavigate` close on click — done by subscribing to `useLocation` in `MobileNavDrawer`, not by modifying `Sidebar`.

### 5.4 `KnowledgeGraph.tsx`

- Add `react-force-graph-2d` to `package.json`.
- Use `useMediaQuery('(min-width: 768px)')` to pick the renderer:
  - `true` → current `ForceGraph3D` path.
  - `false` → `ForceGraph2D` with same `graphData`, `nodeLabel`, `linkColor`, etc.
- Use `React.lazy` for BOTH renderers so mobile never loads Three.js and desktop never loads the 2D code path:
  - `const ForceGraph3DLazy = React.lazy(() => import('react-force-graph-3d'))`
  - `const ForceGraph2DLazy = React.lazy(() => import('react-force-graph-2d'))`
  - Wrap in `<Suspense fallback={<GraphLoadingState />}>` with a simple skeleton.
- Add a brief touch-hint overlay on mobile ("Pinch to zoom · drag to pan") that fades out after 3 seconds on first interaction.

### 5.5 `MarkdownRenderer.tsx`

- **Bug fix (non-mobile-specific, but surfaces on mobile):** line 215, `overflow-y-auto` → `overflow-x-auto` on the table wrapper. Wide tables now scroll horizontally inside their container.
- Code block padding: `p-4` → `p-3 sm:p-4` to give narrow screens a bit more usable width.
- No other changes — `prose` handles mobile type sizes correctly.

### 5.6 `index.css`

Add KaTeX overflow fix under `@layer utilities` or a plain rule:

```css
.prose .katex-display {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.25rem 0;
  max-width: 100%;
}
```

Long display-mode equations now scroll horizontally within the article column instead of pushing the viewport wider.

### 5.7 `ChartRenderer.tsx`

- `ResponsiveContainer` stays.
- Bump container `min-height` from 200px → 240px on mobile (covers legend + chart area comfortably).
- `XAxis`: add `tick={{ fontSize: 10 }}` + `interval="preserveStartEnd"` on narrow screens. Keep defaults on `sm+`.
- If a chart has more than 3 data series, consider `Legend layout="vertical"` on mobile — but only if the implementation shows it's needed. Leave as a refinement.
- No structural restructure.

### 5.8 `AboutPage.tsx`

- Name + role heading: apply `clamp()` sizing (e.g., `clamp(2rem, 8vw, 4.5rem)`) to the big name line.
- Timeline section: single-column on mobile, current layout on `md+`.
- Tech Stack & Interests grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Social icons: flex-wrap, each tap target ≥ 44×44px (iOS HIG minimum).

### 5.9 `ProjectsPage.tsx`

- Card grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-4 lg:gap-6`.
- Card internals already use `aspect-*` — should degrade gracefully.

### 5.10 `Footer.tsx`

- Column layout → vertical stack on `< sm`. `gap-8` between sections.

### 5.11 `SearchDialog.tsx`

- On mobile, render as a full-screen sheet: `inset-0` instead of centered modal.
- Input height ≥ 44px.
- Result list: full width, `px-4`.
- On `sm+`, existing centered modal style returns.
- Dialog backdrop and focus trap: verify Radix (or the dialog primitive in use) still works; no structural swap.

## 6. Bug Fixes (in-scope)

1. **`MarkdownRenderer.tsx:215`** — table wrapper uses `overflow-y-auto` instead of `overflow-x-auto`. This is a latent bug that only manifests on narrow screens; fix it as part of this work.
2. **KaTeX display-mode overflow** — add the CSS rule above in `index.css`.

These are the only fixes in scope. Everything else stays untouched.

## 7. Testing & Verification Plan

### Local dev verification

Run `DISABLE_HMR=true npm run dev` to avoid flicker during agent edits. Test in Chrome DevTools device emulation at:

- iPhone SE (375 × 667) — minimum target
- iPhone 14 Pro (393 × 852)
- Pixel 7 (412 × 915)
- iPad Mini (768 × 1024) — verify the `md` → `lg` transition
- Desktop 1280+ — verify zero regressions

### Smoke-test user flow

1. **Home:** page scrolls vertically; title, subtitle, 2×2 CTA grid, carousel visible in order; swipe carousel left/right advances slides; arrows still work; autoplay pauses during drag and resumes after 3s.
2. **Top bar:** hamburger visible on `< lg`; tap opens drawer; backdrop visible; drawer contains full sidebar.
3. **Drawer:** tap category expands; tap article navigates and auto-closes drawer; tap backdrop closes drawer; press Escape closes drawer.
4. **Article page:** content is readable (prose fits viewport); tables with wide content scroll horizontally inside their box; code blocks scroll horizontally; KaTeX display equations scroll horizontally; inline charts render without overflow.
5. **Knowledge Graph:** loads 2D graph on mobile (verify no Three.js in Network tab via DevTools bundle inspection); pan with one finger; pinch-zoom with two fingers; tap a node navigates to that article. Hint overlay fades out after first gesture.
6. **About:** single-column timeline; 2-column tech grid on `sm+`; social icons hit ≥ 44px.
7. **Projects:** single-column grid on mobile; cards tap-navigate.
8. **Search:** tap search button → full-screen sheet; type → results; tap result → navigates + closes sheet. Cmd+K still works on desktop.
9. **Dark mode:** toggle, repeat smoke for a few key screens.
10. **Landscape 667 × 375:** no regressions; hero stays readable; drawer still works.

### Type checking

- `npm run lint` (= `tsc --noEmit`) passes.

### Desktop regression check

- Reload at 1280, 1440, 1920 — each page should look exactly as before. Any pixel drift on desktop is a regression and must be fixed.

## 8. Files Touched

```
create:  src/hooks/use-media-query.ts
create:  src/components/MobileNavDrawer.tsx

modify:  src/components/PageLayout.tsx
modify:  src/components/HomeHero.tsx
modify:  src/components/KnowledgeGraph.tsx
modify:  src/components/MarkdownRenderer.tsx
modify:  src/components/ChartRenderer.tsx
modify:  src/components/AboutPage.tsx
modify:  src/components/ProjectsPage.tsx
modify:  src/components/Footer.tsx
modify:  src/components/SearchDialog.tsx
modify:  src/index.css
modify:  package.json          (add react-force-graph-2d)
```

~13 files total; 2 new, 11 modified.

## 9. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Drawer swipe-to-close conflicts with internal sidebar scroll. | `dragDirectionLock={true}`; only trigger close when `info.offset.x < -80 && Math.abs(info.offset.y) < 30`. Also disable drag entirely when the sidebar is scrolled vertically (`scrollTop > 0`). |
| HomeHero swipe conflicts with vertical page scroll on mobile. | Scope `drag="x"` only to the inner `.absolute inset-0` slide container, not the parent aside. `dragConstraints={{ left: 0, right: 0 }}` + `dragElastic={0.2}` prevent runaway. `dragDirectionLock` ensures vertical scrolls don't trigger paginate. |
| `react-force-graph-2d` peer dep mismatch with Three.js version of -3d. | `react-force-graph-2d` does NOT depend on Three.js. Safe to add. |
| Lazy-loading both graph renderers breaks SSR. | App is a SPA (`HashRouter`, no SSR). No issue. |
| KaTeX overflow rule unintentionally affects inline math. | Selector `.prose .katex-display` targets only display-mode (block) equations — inline KaTeX uses `.katex` without `-display`. Safe. |
| `PageLayout` dark-mode `useEffect` has `[]` dep array (pre-existing bug). | Out of scope; document in risks for future cleanup. |
| Desktop regression from mobile-first class ordering. | Test at 1280+ explicitly; rely on `lg:` / `xl:` overrides to re-assert desktop styling. |

## 10. Explicit Out of Scope

- PWA, offline, service workers, install prompts.
- Routing or content-loader changes.
- Perf optimization beyond the Knowledge Graph dynamic-import split.
- UI string localization audit (only new strings introduced by this work need en/ru pairs).
- File-structure reorg.
- Pre-existing `PageLayout` dark-mode `useEffect` dep bug.
- Tests: repo has no test runner configured; this work adds none.
