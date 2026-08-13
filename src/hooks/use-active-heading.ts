import { useEffect, useRef, useState } from 'react';

export interface Heading {
  id: string;
  title: string;
  level: number;
}

/** A heading becomes active once it passes this far below the scroller's top edge. */
const ACTIVATION_OFFSET = 150;

const readHeadings = (selector: string): Heading[] =>
  Array.from(document.querySelectorAll<HTMLElement>(selector))
    .filter(el => el.id)
    .map(el => ({
      id: el.id,
      title: el.innerText,
      level: Number(el.tagName.slice(1)) || 2,
    }));

const sameHeadings = (a: readonly Heading[], b: readonly Heading[]): boolean =>
  a.length === b.length && a.every((heading, i) => heading.id === b[i].id);

/**
 * Collects the headings matching `selector` and reports which one the reader is
 * currently on.
 *
 * The expensive and the frequent work are deliberately split. Heading positions
 * are measured only when the layout actually changes; each scroll event then
 * does nothing but compare numbers, so it never reads geometry. The previous
 * implementation called getBoundingClientRect on every heading on every scroll
 * event, which forced a full layout recalculation and made scrolling stutter.
 *
 * @param selector CSS selector for the headings to track.
 * @param contentKey Changes to this value force a re-scan (e.g. article body).
 */
export const useActiveHeading = (selector: string, contentKey?: unknown) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const headingsRef = useRef<Heading[]>([]);

  useEffect(() => {
    let frame = 0;

    const sync = () => {
      frame = 0;
      const next = readHeadings(selector);
      if (sameHeadings(next, headingsRef.current)) return;
      headingsRef.current = next;
      setHeadings(next);
    };

    sync();

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(sync);
    };

    // Markdown, KaTeX and syntax highlighting all land asynchronously, so the
    // heading list has to stay in sync — but only the article subtree matters.
    const target = document.querySelector('.prose') ?? document.body;
    const observer = new MutationObserver(schedule);
    observer.observe(target, { childList: true, subtree: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [selector, contentKey]);

  useEffect(() => {
    if (headings.length === 0) {
      setActiveId('');
      return;
    }

    // The article scrolls inside <main>, not the document.
    const scroller = document.querySelector('main');
    const readScrollTop = () => (scroller ? scroller.scrollTop : window.scrollY);

    let offsets: Array<{ id: string; top: number }> = [];
    let frame = 0;
    let needsMeasure = true;

    const measure = () => {
      const base = scroller ? scroller.getBoundingClientRect().top : 0;
      const scrollTop = readScrollTop();
      offsets = headings.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top - base + scrollTop : 0 };
      });
    };

    const update = () => {
      if (offsets.length === 0) return;
      const line = readScrollTop() + ACTIVATION_OFFSET;
      let current = offsets[0].id;
      for (const offset of offsets) {
        if (offset.top > line) break;
        current = offset.id;
      }
      setActiveId(current);
    };

    const flush = () => {
      frame = 0;
      if (needsMeasure) {
        needsMeasure = false;
        measure();
      }
      update();
    };

    const schedule = (remeasure = false) => {
      if (remeasure) needsMeasure = true;
      if (frame) return;
      frame = requestAnimationFrame(flush);
    };

    const onScroll = () => schedule();
    const onResize = () => schedule(true);

    schedule(true);

    const scrollTarget: HTMLElement | Window = scroller ?? window;
    scrollTarget.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Late-arriving math and code blocks change how far down each heading sits.
    const resizeObserver = new ResizeObserver(onResize);
    const content = document.querySelector('.prose');
    if (content) resizeObserver.observe(content);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      scrollTarget.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
    };
  }, [headings]);

  return { headings, activeId };
};
