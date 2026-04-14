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
