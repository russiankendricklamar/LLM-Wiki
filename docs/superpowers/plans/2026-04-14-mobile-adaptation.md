# Mobile Adaptation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every route of the LLM-Wiki SPA usable on phones down to 375px (iPhone SE) without regressing desktop at `lg+` (1024px+).

**Architecture:** Mobile-first Tailwind 4 responsive classes. Two new primitives (`useMediaQuery` hook + `MobileNavDrawer` wrapper around existing `Sidebar`). One new dependency (`react-force-graph-2d`) for a lazy-loaded 2D graph fallback on mobile. All desktop behavior preserved bit-for-bit via `lg:` overrides. No routing, content-loader, or structural refactors.

**Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS 4, `motion` (already installed), `react-router-dom` v7 HashRouter, `react-force-graph-{3d,2d}` (lazy-loaded), `cmdk` (for SearchDialog).

**Spec:** `docs/superpowers/specs/2026-04-14-mobile-adaptation-design.md`

## Notes for the Implementer

- **No test runner.** The repo has no Jest/Vitest/Playwright configured (confirmed in `CLAUDE.md`). TDD "write test first" doesn't apply here. Verification for every task is instead:
  1. `npm run lint` (= `tsc --noEmit`) must pass.
  2. Manual smoke in Chrome DevTools device emulation at iPhone SE (375×667) and a desktop breakpoint (1280+).
  3. No visual regression at `lg+` (this is the hardest thing to check — always compare before/after at desktop sizes when you touch shared code).
- **Disable HMR during edits** to prevent flicker: `DISABLE_HMR=true npm run dev`. The guard lives in `vite.config.ts`, don't remove it.
- **Dev server port:** 3000 (`vite --port=3000 --host=0.0.0.0`).
- **Commit each task.** Conventional commit style: `feat:`, `fix:`, `refactor:`, `docs:`. Never amend; never `--no-verify`.
- **Mobile-first class ordering.** Default classes target mobile; `sm:`/`md:`/`lg:`/`xl:` progressively enhance. Never rely on "unset on mobile" — explicitly state every breakpoint.
- **Immutability** is enforced project-wide (`~/.claude/rules/coding-style.md`). No mutations — create new objects, spread patterns.

---

## File Structure

**Create (2 files):**

| File | Responsibility |
|---|---|
| `src/hooks/use-media-query.ts` | SSR-safe `useMediaQuery(query)` hook. Used only where CSS-only cannot express the condition (KnowledgeGraph renderer choice). |
| `src/components/MobileNavDrawer.tsx` | Slide-out panel that wraps the existing `Sidebar` for mobile navigation. Owns: open/close state via props, animation, backdrop, Escape/swipe/nav-link close, body scroll lock, a11y. |

**Modify (11 files):**

| File | What changes |
|---|---|
| `package.json` | Add `react-force-graph-2d` dependency. |
| `src/components/PageLayout.tsx` | Hamburger button on `< lg`; mount `MobileNavDrawer`; `<Sidebar>` hidden on `< lg`; `<main>` allows scroll on `< lg` even in `fullBleed` mode; logo text always visible. |
| `src/components/HomeHero.tsx` | Scroll-enabled on mobile; title `clamp()` lower bound drop; CTA row becomes 2×2 grid on mobile with GitHub as inline link; carousel gets `motion` swipe. |
| `src/components/KnowledgeGraph.tsx` | `useMediaQuery` + `React.lazy` → pick between `react-force-graph-3d` (desktop) and `react-force-graph-2d` (mobile). |
| `src/components/MarkdownRenderer.tsx` | Fix table overflow axis (bug); narrow code-block padding on mobile. |
| `src/index.css` | KaTeX `.katex-display` horizontal overflow rule. |
| `src/components/ChartRenderer.tsx` | Responsive container min-height and axis label tick sizing for mobile. |
| `src/components/AboutPage.tsx` | Responsive grids (timeline, tech, interests), `clamp()` name heading, social icons ≥ 44px. |
| `src/components/ProjectsPage.tsx` | Card grid `grid-cols-1 sm:2 lg:3`. |
| `src/components/Footer.tsx` | Column layout → vertical stack on `< sm`. |
| `src/components/SearchDialog.tsx` | Full-screen sheet on mobile; centered modal restored on `sm+`. |

**Order of tasks respects dependencies:**

- Task 1 (install dep) — standalone, first so later tasks can import.
- Task 2 (`useMediaQuery`) — standalone primitive, needed by Tasks 4 and 7.
- Task 3 (`MobileNavDrawer`) — new component, needed by Task 4.
- Task 4 (`PageLayout`) — wires up hamburger + drawer + mobile scroll in `fullBleed`. Unblocks article pages and Task 5.
- Task 5 (`HomeHero`) — requires Task 4's fullBleed scroll fix.
- Task 6 (`MarkdownRenderer`) — independent bug fix; commit early so article testing is clean.
- Task 7 (`KnowledgeGraph`) — requires Tasks 1 and 2.
- Task 8 (`index.css` KaTeX) — independent CSS.
- Task 9 (`ChartRenderer`) — independent.
- Task 10 (`AboutPage`) — independent.
- Task 11 (`ProjectsPage`) — independent.
- Task 12 (`Footer`) — independent.
- Task 13 (`SearchDialog`) — independent.
- Task 14 — final manual QA smoke + desktop regression sweep.

---

## Task 1: Install `react-force-graph-2d` dependency

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json` (auto)

**Context.** Task 7 (KnowledgeGraph 2D fallback) needs this library. Install it standalone first so no other file has a broken import while in flight.

- [ ] **Step 1: Install the dependency**

Run:
```bash
npm install react-force-graph-2d
```

Expected: package added to `dependencies`, lockfile updated, 0 vulnerabilities flagged (warnings are fine; react-force-graph ships with some peer-dep advisories that don't break anything).

- [ ] **Step 2: Verify the install**

Run:
```bash
grep -c "react-force-graph-2d" package.json
```

Expected: `1` (one line added under `dependencies`).

- [ ] **Step 3: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat(deps): add react-force-graph-2d for mobile graph fallback"
```

---

## Task 2: Create `useMediaQuery` hook

**Files:**
- Create: `src/hooks/use-media-query.ts`

**Context.** A SSR-safe hook that returns `true/false` for a media query. We need it only in `KnowledgeGraph.tsx` (Task 7) — everywhere else, Tailwind responsive classes are enough. Keep it small and focused.

- [ ] **Step 1: Create the hook file**

Create `src/hooks/use-media-query.ts`:

```ts
import { useEffect, useState } from 'react';

/**
 * SSR-safe media query hook. Returns `false` before hydration to match the
 * mobile-first default (safe: on mobile we want 2D graph anyway).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const update = (e: MediaQueryListEvent | MediaQueryList) => setMatches(e.matches);
    update(mql);
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);

  return matches;
}
```

- [ ] **Step 2: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors. If `tsc` complains about the union parameter type, simplify to `(e: MediaQueryListEvent | MediaQueryList)` → two overloads or `(e: any)` as a last resort — but the union should work.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/use-media-query.ts
git commit -m "feat(hooks): add SSR-safe useMediaQuery hook"
```

---

## Task 3: Create `MobileNavDrawer` component

**Files:**
- Create: `src/components/MobileNavDrawer.tsx`

**Context.** Slide-out panel that wraps the existing `Sidebar`. Owns all the mobile-drawer concerns (animation, backdrop, Escape, body scroll lock, nav-link auto-close). `Sidebar.tsx` is NOT touched.

**Design constraints from spec §4:**
- Width: `w-[85vw] max-w-xs`
- Animation: `motion` slide-in-from-left, ~220ms, ease `[0.22, 1, 0.36, 1]`
- Close triggers: backdrop click, `Escape` key, swipe-left on drawer (with `dragDirectionLock`), any `NavLink` click inside
- a11y: `role="dialog"`, `aria-modal="true"`, `aria-label="Navigation"`
- Body scroll lock while open

- [ ] **Step 1: Create the component**

Create `src/components/MobileNavDrawer.tsx`:

```tsx
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { Sidebar } from './Sidebar';

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
  lang: 'en' | 'ru';
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({ open, onClose, lang }) => {
  const location = useLocation();

  // Auto-close when the route changes (user tapped a NavLink inside)
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={lang === 'en' ? 'Navigation' : 'Навигация'}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragDirectionLock
            onDragEnd={(_, info) => {
              if (info.offset.x < -80 && Math.abs(info.offset.y) < 40) {
                onClose();
              }
            }}
            className="fixed left-0 top-0 bottom-0 z-50 flex w-[85vw] max-w-xs flex-col bg-white dark:bg-zinc-950 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-3 h-14 shrink-0">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {lang === 'en' ? 'Navigation' : 'Навигация'}
              </span>
              <button
                onClick={onClose}
                aria-label={lang === 'en' ? 'Close navigation' : 'Закрыть навигацию'}
                className="p-2 -mr-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <Sidebar lang={lang} className="w-full border-r-0 bg-transparent" />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
```

**Notes on the implementation:**
- The `Sidebar` component already accepts a `className` prop — we pass `w-full border-r-0 bg-transparent` to override its default `w-64` and remove the right border so the drawer looks clean.
- `useLocation().pathname` changes when a user clicks a NavLink inside the drawer; the effect above catches that and closes.
- `lg:hidden` on both the backdrop and the panel is a safety net — the drawer should never render on desktop because `PageLayout` won't mount it with `open=true`, but if state leaks across a resize, CSS hides it.
- `dragDirectionLock` + the `Math.abs(info.offset.y) < 40` guard prevent vertical scrolls inside the sidebar from triggering a close.

- [ ] **Step 2: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/MobileNavDrawer.tsx
git commit -m "feat(components): add MobileNavDrawer wrapper around Sidebar"
```

---

## Task 4: Integrate `MobileNavDrawer` into `PageLayout`

**Files:**
- Modify: `src/components/PageLayout.tsx`

**Context.** Add the hamburger button, wire up drawer open state, hide the desktop `<Sidebar>` on mobile, and open the `<main>` scroll container on `< lg` even in `fullBleed` mode (this last bit is what unblocks Task 5).

- [ ] **Step 1: Add imports**

Open `src/components/PageLayout.tsx`. Extend the icon import and add the new component:

```tsx
import { Search, Moon, Sun, Leaf, Menu } from 'lucide-react';
import { MobileNavDrawer } from './MobileNavDrawer';
```

- [ ] **Step 2: Add drawer state hook**

At the top of the `PageLayout` component body (near `const [isSearchOpen, setIsSearchOpen] = useState(false);`):

```tsx
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
```

- [ ] **Step 3: Add hamburger button in the header left slot**

Inside the `<header>` block, just before the existing `<NavLink to="/" ...>` logo link, add the hamburger (only visible on `< lg`, and only when the sidebar exists — i.e. when `showSidebar` is true):

```tsx
{showSidebar && (
  <button
    onClick={() => setIsDrawerOpen(true)}
    aria-label={lang === 'en' ? 'Open navigation' : 'Открыть навигацию'}
    className="lg:hidden -ml-1 mr-1 p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
  >
    <Menu className="h-5 w-5" />
  </button>
)}
```

- [ ] **Step 4: Make logo text always visible**

Change the logo text from `hidden sm:block` to always-visible:

```tsx
<span className="font-semibold text-sm">
  {lang === 'en' ? 'Knowledge Garden' : 'Сад Знаний'}
</span>
```

- [ ] **Step 5: Hide desktop Sidebar on `< lg`**

Inside the `showSidebar && !fullBleed` branch of the `<main>` render, change:

```tsx
<Sidebar lang={lang} />
```

to:

```tsx
<Sidebar lang={lang} className="hidden lg:block" />
```

- [ ] **Step 6: Open fullBleed main scroll on mobile**

In the else branch (`!showSidebar || fullBleed`), the `<main>` currently uses:

```tsx
<main className={cn("flex flex-1 flex-col", fullBleed ? "overflow-hidden" : "overflow-y-auto")}>
```

Change it so `fullBleed` mode still allows scroll on `< lg`:

```tsx
<main className={cn(
  "flex flex-1 flex-col",
  fullBleed ? "overflow-y-auto lg:overflow-hidden" : "overflow-y-auto"
)}>
```

This is the single most important line of Task 4 — without it, `HomeHero` on mobile will be clipped to viewport height.

- [ ] **Step 7: Mount the drawer at the bottom of the layout**

Just before the closing `</div>` of the outermost container (right after `<SearchDialog ... />`), add:

```tsx
<MobileNavDrawer
  open={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  lang={lang}
/>
```

- [ ] **Step 8: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 9: Smoke-test in browser**

In one terminal, start the dev server:
```bash
DISABLE_HMR=true npm run dev
```

Open Chrome DevTools → Device Mode → iPhone SE (375×667). Navigate to any article (e.g., `/#/ai/transformers` or whatever slug exists in your Russian Home category).

Checks:
- [x] Hamburger button visible in top-left of the header.
- [x] Desktop sidebar NOT visible (content uses full viewport width minus padding).
- [x] Click hamburger → drawer slides in from the left, backdrop darkens page.
- [x] Click backdrop → drawer slides out.
- [x] Reopen → press Escape → drawer closes.
- [x] Reopen → click a category to expand → click an article → drawer auto-closes and navigation happens.
- [x] Reopen → swipe-left on drawer → drawer closes.

Then resize to 1280 desktop:
- [x] Hamburger is hidden.
- [x] Desktop sidebar is back in its normal place.
- [x] No visual regression vs pre-change.

- [ ] **Step 10: Commit**

```bash
git add src/components/PageLayout.tsx
git commit -m "feat(layout): add hamburger drawer for mobile navigation

PageLayout now mounts MobileNavDrawer on < lg and hides the desktop
Sidebar below the same breakpoint. fullBleed main container now
allows scroll on < lg so HomeHero can become vertically scrollable."
```

---

## Task 5: `HomeHero` — scrollable mobile layout + swipe carousel

**Files:**
- Modify: `src/components/HomeHero.tsx`

**Context.** This is the biggest page-level change. Four sub-changes bundled into one task because they all live in the same component and verification happens on the same screen:

1. Root container becomes scrollable on mobile.
2. Title `clamp()` lower bound drops from 3rem to 2.25rem.
3. CTA row becomes a 2×2 grid of 4 equal tiles on mobile (About / Projects / Knowledge / Graph); GitHub moves to an inline link under the subtitle. On `lg+`, the existing 3-stack layout is restored.
4. Carousel aside gets `motion drag="x"` swipe support with 3-second autoplay pause after interaction.

- [ ] **Step 1: Fix root container height and scroll**

Find the top-level `<div>` of `HomeHero`:

```tsx
<div className="relative h-full w-full overflow-hidden bg-zinc-950 text-zinc-50">
```

Change to:

```tsx
<div className="relative min-h-full w-full overflow-y-auto lg:h-full lg:overflow-hidden bg-zinc-950 text-zinc-50">
```

Mobile gets `min-h-full + overflow-y-auto` → content can be taller than the viewport. Desktop gets the original `h-full + overflow-hidden`.

- [ ] **Step 2: Shrink title clamp lower bound**

Find:

```tsx
style={{ fontSize: 'clamp(3rem, 9vw, 9.5rem)' }}
```

Change to:

```tsx
style={{ fontSize: 'clamp(2.25rem, 12vw, 9.5rem)' }}
```

- [ ] **Step 3: Tighten intro block vertical padding on mobile**

Find:

```tsx
<div className="flex flex-1 flex-col justify-center py-6">
```

Change to:

```tsx
<div className="flex flex-1 flex-col justify-center py-4 lg:py-6">
```

- [ ] **Step 4: Add GitHub inline link below the subtitle**

Find the subtitle wrapper:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="mt-8 flex max-w-md items-start gap-3"
>
  <div className="mt-1 h-px w-8 shrink-0 bg-zinc-400/60" />
  <p className="text-sm text-zinc-300/90 leading-relaxed">{copy.subtitle}</p>
</motion.div>
```

Immediately after its closing `</motion.div>`, add a new small inline GitHub link that is only visible on mobile (`lg:hidden`) because the desktop CTA stack already has a GitHub button:

```tsx
<motion.a
  href="https://github.com/russiankendricklamar"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors lg:hidden"
>
  <GithubIcon className="h-4 w-4" />
  <span className="underline underline-offset-4">github.com/russiankendricklamar</span>
</motion.a>
```

- [ ] **Step 5: Build the mobile 2×2 CTA grid**

The existing CTA row is wrapped in:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="flex items-stretch gap-3"
>
  ...4 tiles organized as [About] [Projects+Knowledge stack] [GitHub+Graph stack]...
</motion.div>
```

Change the wrapper `className` to hide this desktop version below `lg`:

```tsx
className="hidden lg:flex items-stretch gap-3"
```

Then, directly after that `motion.div` closes, add the mobile-only 2×2 grid:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="grid grid-cols-2 gap-3 lg:hidden"
>
  <Link
    to="/about"
    className="group relative flex flex-col items-start gap-2 overflow-hidden rounded-2xl bg-white px-4 py-4 font-semibold text-zinc-900 shadow-xl shadow-black/30 transition hover:bg-zinc-100"
  >
    <UserCircle2 className="h-5 w-5" />
    <span className="text-sm">{copy.ctaAbout}</span>
    <ArrowRight className="h-4 w-4 self-end transition-transform group-hover:translate-x-1" />
  </Link>
  <Link
    to="/projects"
    className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
  >
    <FolderGit2 className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
    <span className="font-medium">{copy.ctaProjects}</span>
  </Link>
  <Link
    to="/knowledge-graph"
    className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
  >
    <BookOpen className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
    <span className="font-medium">{copy.ctaKnowledge}</span>
  </Link>
  <Link
    to="/knowledge-graph"
    className="group flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10"
  >
    <Network className="h-4 w-4 text-zinc-400 transition group-hover:text-white" />
    <span className="font-medium">{copy.ctaGraph}</span>
  </Link>
</motion.div>
```

(GitHub is intentionally absent from this grid — it lives as an inline link from Step 4.)

- [ ] **Step 6: Add swipe to the carousel**

Find the `AnimatePresence` block inside the carousel (starts with `<AnimatePresence mode="wait" custom={direction} initial={false}>` around line ~313). Its child is:

```tsx
<motion.div
  key={current.metadata.slug}
  custom={direction}
  variants={imageVariants}
  ...
  className="absolute inset-0"
>
```

Extend this `motion.div` with drag props. Add `drag="x"`, `dragConstraints`, `dragElastic`, `dragDirectionLock`, and an `onDragEnd` handler. Also add a helper at the top of the component (just above `useEffect(...)` for autoplay) to schedule resume:

At the top of `HomeHero` component body, near `paginate`:

```tsx
const resumeTimerRef = React.useRef<number | null>(null);

const handleDragStart = () => {
  if (resumeTimerRef.current) {
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = null;
  }
  setIsPaused(true);
};

const handleDragEnd = (_: unknown, info: { offset: { x: number; y: number } }) => {
  const THRESHOLD = 50;
  if (Math.abs(info.offset.x) > THRESHOLD && Math.abs(info.offset.y) < 40) {
    paginate(info.offset.x < 0 ? 1 : -1);
  }
  resumeTimerRef.current = window.setTimeout(() => {
    setIsPaused(false);
    resumeTimerRef.current = null;
  }, 3000);
};

React.useEffect(() => {
  return () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
  };
}, []);
```

Then on the carousel's `motion.div` (the one with `key={current.metadata.slug}`), add drag props:

```tsx
<motion.div
  key={current.metadata.slug}
  custom={direction}
  variants={imageVariants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{
    opacity: { duration: 0.5, ease: 'easeInOut' },
    scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
  dragDirectionLock
  onDragStart={handleDragStart}
  onDragEnd={handleDragEnd}
  className="absolute inset-0 cursor-grab active:cursor-grabbing"
>
```

- [ ] **Step 7: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors. If TypeScript complains about the `_: unknown` on `handleDragEnd`, replace with the proper `motion` type: `import type { PanInfo } from 'motion/react'` and use `(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo)`.

- [ ] **Step 8: Smoke-test on mobile emulation**

With `DISABLE_HMR=true npm run dev` running, open Chrome DevTools → iPhone SE (375×667) → navigate to `/`.

Checks:
- [x] Hero fits on screen, title EXPLORE/BUILD/RELEASE visible without horizontal overflow.
- [x] Subtitle paragraph readable; GitHub link visible below it.
- [x] Scroll down → 2×2 CTA grid → carousel.
- [x] Carousel: swipe left → next slide; swipe right → previous slide.
- [x] Autoplay: wait 4.5s without touching → slides advance on their own.
- [x] Touch-drag: during drag, progress bar stops; 3s after drag ends, autoplay resumes.
- [x] Dot indicators: tap a dot → jumps to that slide.
- [x] Scroll up → back to top, everything intact.

Then resize to 1440 desktop:
- [x] Hero looks identical to before (compare with `git stash` if unsure).
- [x] 3-stack CTA row visible (About button + two w-36 stacks), not the 2×2 grid.
- [x] Carousel still works with arrows; drag also works on desktop (bonus, not required).

- [ ] **Step 9: Commit**

```bash
git add src/components/HomeHero.tsx
git commit -m "feat(home): mobile-scrollable hero with 2x2 CTA grid and swipe carousel

- Root container scrolls on < lg; desktop fullBleed preserved.
- Title clamp floor lowered to 2.25rem to fit 375px.
- CTA row: new 2x2 grid for mobile, desktop 3-stack preserved via lg:flex.
- GitHub moved to inline link under subtitle (mobile only).
- Carousel gains motion drag-x swipe with 3s autoplay-resume grace."
```

---

## Task 6: `MarkdownRenderer` — fix table overflow axis + narrow code padding

**Files:**
- Modify: `src/components/MarkdownRenderer.tsx:124` and `src/components/MarkdownRenderer.tsx:215`

**Context.** Two small independent changes. Table overflow axis is a latent bug. Code-block padding is a mobile-only polish.

- [ ] **Step 1: Fix table overflow axis**

Find:

```tsx
table: ({ node, ...props }) => (
  <div className="my-6 w-full overflow-y-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
    <table className="w-full text-sm" {...props} />
  </div>
),
```

Change `overflow-y-auto` → `overflow-x-auto`:

```tsx
table: ({ node, ...props }) => (
  <div className="my-6 w-full overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
    <table className="w-full text-sm" {...props} />
  </div>
),
```

- [ ] **Step 2: Narrow code-block padding on mobile**

Find (around line 124 — the outer code-block div, not the `<pre>`):

```tsx
<div className="p-4 overflow-x-auto text-sm">
```

Change to:

```tsx
<div className="p-3 sm:p-4 overflow-x-auto text-sm">
```

- [ ] **Step 3: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Smoke-test**

Find an article in the vault that contains a wide markdown table (grep `obsidian-vault/ru/**/*.md` for `|---|---|---|---|` multi-column tables). Navigate to it at iPhone SE in DevTools.

Checks:
- [x] Table does not widen the page past 375px.
- [x] Swipe horizontally inside the table's container → it scrolls, the rest of the page doesn't.
- [x] Code blocks have slightly less padding but still look clean.

- [ ] **Step 5: Commit**

```bash
git add src/components/MarkdownRenderer.tsx
git commit -m "fix(markdown): table wrapper uses overflow-x not overflow-y

Wide tables on narrow viewports now scroll horizontally inside their
rounded container instead of pushing the page layout. Also tightens
code block padding on < sm for more usable code width on mobile."
```

---

## Task 7: `KnowledgeGraph` — 2D fallback on mobile via lazy import

**Files:**
- Modify: `src/components/KnowledgeGraph.tsx`

**Context.** On mobile (`< md`), swap `react-force-graph-3d` for `react-force-graph-2d`. Both are lazy-loaded via `React.lazy` so mobile never ships Three.js (~600KB) and desktop doesn't ship the 2D path. Data shape is identical — `nodes` + `links` — the 2D library accepts the same `graphData` prop.

First, read the existing file to understand its current shape. The component likely imports `react-force-graph-3d` directly at module top, sets up `graphData` from `getGraphData(lang)`, and renders a `<ForceGraph3D>` element. We need to:

1. Remove the direct top-level import.
2. Add two `React.lazy` imports.
3. Pick the renderer with `useMediaQuery('(min-width: 768px)')`.
4. Wrap the output in `<Suspense fallback={...}>`.
5. Keep props that exist on both APIs; drop 3D-only props from the 2D renderer and vice versa.

- [ ] **Step 1: Read the current file in full**

Run:
```bash
cat src/components/KnowledgeGraph.tsx
```

Take note of:
- What `getGraphData(lang)` returns.
- Which `<ForceGraph3D>` props are in use (`nodeLabel`, `linkColor`, `backgroundColor`, `onNodeClick`, etc.).
- Any refs into the 3D camera — those will NOT work on 2D and need to be conditionally skipped.

- [ ] **Step 2: Replace the top-level 3D import with lazy imports**

At the top of the file, remove:

```ts
import ForceGraph3D from 'react-force-graph-3d';
```

Add:

```ts
import React, { Suspense } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

const ForceGraph3DLazy = React.lazy(() =>
  import('react-force-graph-3d').then(m => ({ default: m.default }))
);
const ForceGraph2DLazy = React.lazy(() =>
  import('react-force-graph-2d').then(m => ({ default: m.default }))
);
```

- [ ] **Step 3: Pick the renderer at runtime**

Inside the `KnowledgeGraph` component body, add:

```tsx
const isDesktop = useMediaQuery('(min-width: 768px)');
```

- [ ] **Step 4: Extract a loading skeleton**

Above the return, add a small skeleton component (inside the same file is fine):

```tsx
const GraphSkeleton: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center bg-zinc-50 dark:bg-zinc-950">
    <div className="text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
      Loading graph…
    </div>
  </div>
);
```

- [ ] **Step 5: Conditionally render 2D or 3D inside Suspense**

Replace the existing `<ForceGraph3D ... />` JSX with:

```tsx
<Suspense fallback={<GraphSkeleton />}>
  {isDesktop ? (
    <ForceGraph3DLazy
      graphData={graphData}
      // ...keep all existing 3D-specific props here (camera, node three object, etc.)
    />
  ) : (
    <ForceGraph2DLazy
      graphData={graphData}
      nodeLabel={(n: any) => n.title || n.id}
      linkColor={() => isDarkMode ? 'rgba(161,161,170,0.25)' : 'rgba(113,113,122,0.3)'}
      nodeColor={(n: any) => n.color || (isDarkMode ? '#34d399' : '#059669')}
      backgroundColor={isDarkMode ? '#09090b' : '#fafafa'}
      onNodeClick={(node: any) => {
        if (node.slug) navigate(node.slug);
      }}
      cooldownTicks={100}
      d3VelocityDecay={0.3}
    />
  )}
</Suspense>
```

**Adjust the prop list** to match whatever the existing 3D invocation uses. Rule of thumb: props shared by both libraries (`graphData`, `nodeLabel`, `linkColor`, `nodeColor`, `backgroundColor`, `onNodeClick`, `cooldownTicks`, `d3VelocityDecay`, `warmupTicks`, `nodeRelSize`, `linkDirectionalParticles`, `nodeAutoColorBy`) are safe. Anything starting with `nodeThreeObject`, `camera*`, `controlType` is 3D-only and must stay inside the 3D branch.

- [ ] **Step 6: Add a touch-hint overlay on mobile (optional but spec'd)**

Inside the component, add a state for the hint:

```tsx
const [showHint, setShowHint] = React.useState(true);

React.useEffect(() => {
  if (!showHint) return;
  const timer = window.setTimeout(() => setShowHint(false), 3500);
  return () => window.clearTimeout(timer);
}, [showHint]);
```

And render it conditionally above the graph on mobile:

```tsx
{!isDesktop && showHint && (
  <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">
    Pinch to zoom · drag to pan
  </div>
)}
```

The parent wrapper needs `relative` for this to position correctly — it probably already has it.

- [ ] **Step 7: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors. If TypeScript complains that `graphData` is incompatible between the two libraries, cast to `any` at the call sites or define a shared local type that matches both.

- [ ] **Step 8: Smoke-test on both breakpoints**

With dev server running, navigate to `/#/knowledge-graph`.

Mobile (375×667):
- [x] 2D graph renders, not 3D.
- [x] Open DevTools → Network tab → Filter by "force-graph" — only `react-force-graph-2d` chunk loaded, NOT three.js. (If Three.js is loaded, the 3D path is being eagerly imported somewhere.)
- [x] "Pinch to zoom · drag to pan" hint visible briefly then fades.
- [x] One-finger drag pans the graph.
- [x] Two-finger pinch zooms.
- [x] Tap a node → navigates to that article.

Desktop (1440):
- [x] 3D graph renders (compare against pre-change screenshot).
- [x] Camera controls still work (rotate/zoom/pan).
- [x] Click node → navigates.

- [ ] **Step 9: Commit**

```bash
git add src/components/KnowledgeGraph.tsx
git commit -m "feat(graph): 2D force-graph fallback on mobile via lazy import

Mobile (< md) now renders react-force-graph-2d with touch-friendly
pan/pinch, while desktop keeps the existing 3D Three.js renderer.
Both renderers are React.lazy to avoid shipping Three.js to mobile."
```

---

## Task 8: `index.css` — KaTeX display-mode overflow

**Files:**
- Modify: `src/index.css`

**Context.** Long display-mode equations (`$$ ... $$` in Markdown) currently overflow the viewport horizontally. Add a single CSS rule so they scroll inside the article column.

- [ ] **Step 1: Append the rule**

Open `src/index.css`. After the existing `@layer utilities { ... }` block, append:

```css
@layer utilities {
  .prose .katex-display {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.25rem 0;
    max-width: 100%;
  }
}
```

- [ ] **Step 2: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors (TS doesn't type-check CSS but `tsc` will still pass).

- [ ] **Step 3: Smoke-test**

Find an article with a long display-mode equation (grep `obsidian-vault/ru/**/*.md` for `$$`). Example candidates: anything in `physics/` or `ai-physics/`. Navigate there on iPhone SE.

Checks:
- [x] The equation no longer pushes the viewport wider.
- [x] A horizontal scroll inside the equation container works.
- [x] Inline math (`$ ... $`) is unaffected.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "fix(css): horizontal overflow for KaTeX display equations

Long display-mode equations now scroll horizontally inside the
article column instead of widening the viewport on mobile."
```

---

## Task 9: `ChartRenderer` — responsive tweaks

**Files:**
- Modify: `src/components/ChartRenderer.tsx`

**Context.** Recharts already uses `ResponsiveContainer`, but the default min-height and axis label tick sizing don't degrade well on 375px.

- [ ] **Step 1: Read the file to confirm what to change**

Run:
```bash
cat src/components/ChartRenderer.tsx | head -120
```

Identify the `ResponsiveContainer` wrapper (probably `<ResponsiveContainer width="100%" height={200}>` or similar) and the `XAxis` component.

- [ ] **Step 2: Bump container min-height**

Find the chart wrapper (likely a `<div className="w-full h-[200px]">` or similar around `<ResponsiveContainer>`). Change `h-[200px]` → `h-[240px] sm:h-[260px]` (or whatever the current value is + ~40px on mobile and slightly more on `sm+`).

If the height is set directly on `ResponsiveContainer` (`height={200}`), leave that alone and instead wrap it in a div with the responsive Tailwind height.

- [ ] **Step 3: Shrink axis tick font on mobile**

Find `<XAxis ... />` and add a `tick` prop:

```tsx
<XAxis
  dataKey={xAxis}
  tick={{ fontSize: 11 }}
  interval="preserveStartEnd"
  // ...existing props
/>
```

Same for `<YAxis>`:

```tsx
<YAxis
  domain={yDomain}
  tick={{ fontSize: 11 }}
  // ...existing props
/>
```

These sizes apply everywhere, but 11px is fine on desktop too — Recharts' default is 12.

- [ ] **Step 4: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 5: Smoke-test**

Find an article with a chart (grep `obsidian-vault/ru/**/*.md` for ``` ```chart ```). Navigate on iPhone SE.

Checks:
- [x] Chart fits in the viewport with axis labels readable.
- [x] Legend and labels don't overlap.
- [x] On desktop, chart looks the same as before or very close.

- [ ] **Step 6: Commit**

```bash
git add src/components/ChartRenderer.tsx
git commit -m "refactor(charts): shrink axis ticks and bump min-height for mobile"
```

---

## Task 10: `AboutPage` — responsive grids + name clamp + tap targets

**Files:**
- Modify: `src/components/AboutPage.tsx`

**Context.** About page has multi-column timeline/tech/interests sections. On mobile they need to stack to one column. Name heading should use `clamp()` so it doesn't blow past the viewport. Social icons need ≥44px tap targets (iOS HIG).

- [ ] **Step 1: Read the file to find the grids**

Run:
```bash
cat src/components/AboutPage.tsx | grep -n "grid-cols\|className.*grid"
```

Note every occurrence. For each multi-col grid, the mobile default should be `grid-cols-1` and the desktop version in `md:grid-cols-X` or `lg:grid-cols-X`.

- [ ] **Step 2: Audit timeline section**

Find the timeline (around the section that maps over `timeline[]`). If it currently uses a grid, add `grid-cols-1 md:grid-cols-[auto_1fr]` or whatever makes sense. If it's a flex row, change to `flex flex-col md:flex-row`.

Example pattern (adjust to match actual markup):

```tsx
<div className="flex flex-col gap-8 md:flex-row md:gap-12">
```

- [ ] **Step 3: Fix tech-stack and interests grids**

For tech stack:

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
```

For interests:

```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
```

- [ ] **Step 4: Apply clamp() to the name heading**

Find the large name heading (`<h1>` or equivalent) and change its font-size to `clamp`:

```tsx
<h1
  className="font-black tracking-tight text-zinc-900 dark:text-zinc-50"
  style={{ fontSize: 'clamp(2rem, 9vw, 5rem)' }}
>
```

Remove any conflicting Tailwind `text-*` sizing classes from the heading (they'll override `style`).

- [ ] **Step 5: Make social icons 44×44 tap targets**

Find the socials row (at the bottom of the hero block). Each icon link should be:

```tsx
<a
  href={...}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="..."
  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
>
  <Github className="h-5 w-5" />
</a>
```

`h-11 w-11` = 44×44px.

- [ ] **Step 6: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 7: Smoke-test**

Navigate to `/#/about` on iPhone SE.

Checks:
- [x] Name heading visible, doesn't overflow.
- [x] Timeline readable in one column.
- [x] Tech sections stacked one per row.
- [x] Social icons tappable without zooming.

Desktop 1440:
- [x] Looks the same as before.

- [ ] **Step 8: Commit**

```bash
git add src/components/AboutPage.tsx
git commit -m "refactor(about): responsive grids and clamp name heading for mobile"
```

---

## Task 11: `ProjectsPage` — single-column card grid on mobile

**Files:**
- Modify: `src/components/ProjectsPage.tsx`

**Context.** Grid of project cards needs to stack to one column on `< sm`, two on `sm`, three on `lg+`.

- [ ] **Step 1: Read the file**

Run:
```bash
cat src/components/ProjectsPage.tsx | grep -n "grid-cols"
```

- [ ] **Step 2: Update the grid class**

Find the projects grid wrapper. Change its classes to:

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
```

- [ ] **Step 3: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Smoke-test**

Navigate to `/#/projects` on iPhone SE.

Checks:
- [x] One card per row, readable.
- [x] Card images scale to fit container width.
- [x] No horizontal overflow.

Resize to 768 tablet → 2 cards per row. Resize to 1440 → 3 cards per row.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectsPage.tsx
git commit -m "refactor(projects): responsive card grid (1/2/3 cols)"
```

---

## Task 12: `Footer` — stack columns on mobile

**Files:**
- Modify: `src/components/Footer.tsx`

**Context.** Footer probably uses horizontal columns that cramp on `< sm`.

- [ ] **Step 1: Read the file**

Run:
```bash
cat src/components/Footer.tsx
```

Identify the main layout container (flex or grid).

- [ ] **Step 2: Stack on mobile**

Find the primary layout wrapper. If flex-row:

```tsx
<div className="flex flex-col gap-8 sm:flex-row sm:gap-6 sm:justify-between">
```

If grid with many columns:

```tsx
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
```

Pick whichever matches the existing structure; don't restructure.

- [ ] **Step 3: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Smoke-test**

Navigate to any article with a footer visible on iPhone SE. Scroll to the bottom.

Checks:
- [x] Footer content stacks vertically, nothing is clipped.
- [x] On desktop, looks unchanged.

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "refactor(footer): stack columns vertically on < sm"
```

---

## Task 13: `SearchDialog` — full-screen sheet on mobile

**Files:**
- Modify: `src/components/SearchDialog.tsx`

**Context.** Currently the dialog is a centered `max-w-lg` card floating at `pt-[20vh] sm:pt-[10vh]`. On mobile (375px), this wastes screen space. Convert to full-screen sheet on `< sm`, keep centered modal on `sm+`.

- [ ] **Step 1: Change outer container**

Find:

```tsx
<div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] sm:pt-[10vh]">
```

Change to:

```tsx
<div className="fixed inset-0 z-50 flex items-stretch justify-center sm:items-start sm:pt-[10vh]">
```

- [ ] **Step 2: Change inner modal panel**

Find:

```tsx
<div className="relative z-50 w-full max-w-lg transform overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all">
```

Change to:

```tsx
<div className="relative z-50 flex w-full max-w-none flex-col bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all sm:max-w-lg sm:rounded-xl sm:overflow-hidden">
```

**Notes:** On mobile the sheet fills the entire screen (`max-w-none`, no rounded corners, full flex column). On `sm+`, we restore `max-w-lg`, `rounded-xl`, and `overflow-hidden`.

- [ ] **Step 3: Bump input height for touch**

Find `Command.Input`:

```tsx
<Command.Input
  ...
  className="flex h-12 w-full ..."
/>
```

Change `h-12` → `h-14 sm:h-12` (56px mobile, 48px desktop).

- [ ] **Step 4: Open search result list height on mobile**

Find `Command.List`:

```tsx
<Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
```

Change to:

```tsx
<Command.List className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overflow-x-hidden p-2 sm:max-h-[300px]">
```

Mobile gets the full remaining dynamic viewport height (minus the 56px header). Desktop keeps the 300px cap.

- [ ] **Step 5: Type-check**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 6: Smoke-test**

On iPhone SE:
- [x] Click search button in the header → sheet covers the full screen.
- [x] Input is 56px tall, comfortable to tap.
- [x] Type to search → results fill available space.
- [x] Tap a result → navigates + sheet closes.
- [x] Tap backdrop (outside the sheet is basically invisible on full-screen — OK, that's expected).

On desktop (1440):
- [x] Search opens as centered modal at `pt-[10vh]`, 512px wide.
- [x] Cmd+K still toggles it.
- [x] Escape closes (handled by Command primitive).

- [ ] **Step 7: Commit**

```bash
git add src/components/SearchDialog.tsx
git commit -m "refactor(search): full-screen sheet on mobile, modal on sm+"
```

---

## Task 14: Final QA sweep + desktop regression check

**Files:** (none modified unless regressions found)

**Context.** All per-component work is done. This task is a careful pass across devices + themes to catch anything missed and confirm no desktop regressions.

- [ ] **Step 1: Start the dev server**

```bash
DISABLE_HMR=true npm run dev
```

Wait for "Local: http://localhost:3000/".

- [ ] **Step 2: Mobile smoke — iPhone SE (375×667), Russian language (default)**

Open Chrome, navigate to http://localhost:3000, DevTools → Device Mode → iPhone SE. Language is already RU.

Walk through this sequence:
- [x] Home (`/`): scroll works; title fits; 2×2 CTAs visible; swipe carousel advances; autoplay; dot indicators tappable.
- [x] Tap "Обо мне" in the 2×2 grid → `/about` loads; timeline in single column; tech grid stacked; name heading fits.
- [x] Back to home via logo click → top bar hamburger should NOT appear on home (because the drawer is tied to `showSidebar`, which is false on home).
- [x] Tap a CTA to load an article (e.g. via "База знаний" → knowledge graph). Actually test an article: navigate to any physics or ai article via the graph, or via the drawer after opening it.
- [x] On any article page: hamburger appears → open drawer → expand category → tap article → drawer auto-closes, article loads.
- [x] Article has: readable prose, no horizontal overflow, tables scroll inside their box, LaTeX display equations scroll inside their box, code blocks have padding, wikilinks clickable.
- [x] If the article has a chart: chart renders in its container, no overflow, axis labels readable.
- [x] Navigate to `/knowledge-graph`: 2D graph loads (check Network tab: only `react-force-graph-2d` chunk, no Three.js chunk). Pan works, pinch-zoom works, tap node navigates.
- [x] Navigate to `/projects`: one card per row.
- [x] Tap search button in header → full-screen search sheet opens. Type something → results appear. Tap result → sheet closes, navigates.
- [x] Toggle dark mode via the sun/moon button: all pages re-rendered correctly; drawer, search, carousel, graph all work in light mode.
- [x] Switch language RU → EN via the lang toggle: copy updates on hero, drawer categories in English, article list in English.

- [ ] **Step 3: Mobile smoke — iPhone 14 Pro (393×852)**

Switch device emulation. Quick re-smoke:
- [x] Hero looks slightly more comfortable (title larger).
- [x] Everything from Step 2 still works.

- [ ] **Step 4: Tablet smoke — iPad Mini (768×1024)**

Switch. Key things to check because this is the `md` → `lg` transition zone:
- [x] On `md` (768px): still uses mobile layout (hamburger visible, 2×2 CTA grid, 2-column About grids).
- [x] On `lg` (1024px via rotating iPad to landscape): desktop layout kicks in — hamburger gone, desktop sidebar visible, 3-stack CTA on hero.

- [ ] **Step 5: Desktop regression — 1280×800 and 1920×1080**

Disable device emulation. Resize the browser or use "Responsive" mode.

- [x] At 1280: everything looks exactly as before (compare to `git log` — if needed, check out the parent of the first commit of this branch and diff visually).
- [x] At 1920: same.
- [x] Hero fullBleed still locks to viewport, desktop CTA 3-stack visible, carousel looks correct.
- [x] Sidebar on articles is back to 256px.
- [x] Knowledge Graph renders 3D (check Network tab: `three` chunk loaded).
- [x] Cmd+K opens search as centered modal.
- [x] Dark mode ↔ light mode toggle works.

- [ ] **Step 6: Landscape phone — 667×375**

Rotate DevTools emulator to landscape.
- [x] Hero still scrollable, readable.
- [x] Drawer still works, doesn't cover the whole screen.
- [x] No regression.

- [ ] **Step 7: Final lint**

Run:
```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 8: If any regression was found**

If Step 5 revealed a desktop regression, pause here and fix it. Commit the fix with a descriptive message like:

```bash
git commit -m "fix(<component>): <what was regressing>"
```

Then re-run Step 5 until clean.

- [ ] **Step 9: Commit a QA marker (optional)**

Not necessary to commit anything for a pure QA task unless fixes were made. If you want, add a line to a CHANGELOG, but this repo doesn't keep one.

- [ ] **Step 10: Report done**

All 14 tasks complete. The site should now work on iPhone SE through desktop without regression. Summarize findings to the user:

> "Mobile adaptation complete. 13 files touched (2 created, 11 modified), 13 commits. Verified at 375, 393, 768, 1280, 1920. Both themes. Both languages. No desktop regressions. See `docs/superpowers/specs/2026-04-14-mobile-adaptation-design.md` for the spec."

---

## Deviations from the Spec — how to handle

If during implementation you discover something that makes a spec decision wrong or impossible (e.g. `react-force-graph-2d` API has diverged from `-3d` in a way that requires extensive prop rework, or `motion drag` conflicts with carousel `AnimatePresence` in an unfixable way), STOP, do not silently improvise. Report the conflict to the user with:

1. What you were trying to do (which task/step).
2. What you observed (error message or behavior).
3. What minimum viable deviation you'd propose.

Wait for user decision before continuing. Do NOT skip tasks or simplify silently.

## What NOT to do

- Do NOT refactor `Sidebar.tsx`. It's used by both `PageLayout` (desktop) and `MobileNavDrawer` (mobile) and must stay a single source of truth.
- Do NOT restructure `obsidian-vault/`, add sidecar files, or touch the content loader.
- Do NOT add tests (no test runner in repo).
- Do NOT upgrade dependencies beyond adding `react-force-graph-2d`.
- Do NOT touch routing or add new routes.
- Do NOT fix the pre-existing `PageLayout.tsx:32` dark-mode `useEffect` dep bug — that's out of scope.
- Do NOT change existing commit messages or amend past commits.
