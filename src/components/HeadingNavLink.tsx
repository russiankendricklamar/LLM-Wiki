import React from 'react';
import { cn } from '@/lib/utils';
import type { Heading } from '@/hooks/use-active-heading';

interface HeadingNavLinkProps {
  heading: Heading;
  isActive: boolean;
  onNavigate: (id: string) => void;
  indentSubheadings?: boolean;
}

/**
 * A single entry in the article / course side navigation.
 *
 * The active entry grows from 16px to 24px. Scaling it with a transform instead
 * would be cheaper, but the nav column is only ~248px wide: a transform does not
 * re-wrap the text, so the enlarged label would spill out of the column. The
 * size therefore has to be real, which means easing font-size and line-height.
 *
 * That is affordable here only because nothing reads layout synchronously while
 * the transition runs — see useActiveHeading. The timing is split between the
 * geometry and the colour; `.heading-nav-link` in index.css explains why.
 */
export const HeadingNavLink: React.FC<HeadingNavLinkProps> = ({
  heading,
  isActive,
  onNavigate,
  indentSubheadings = false,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate(heading.id);
  };

  return (
    <a
      href={`#${heading.id}`}
      onClick={handleClick}
      aria-current={isActive ? 'location' : undefined}
      className={cn(
        'heading-nav-link block origin-left',
        indentSubheadings && heading.level === 3 && 'pl-4',
        isActive
          ? 'text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 scale-100'
          : 'text-sm sm:text-base font-medium text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400 scale-95'
      )}
    >
      {heading.title}
    </a>
  );
};
