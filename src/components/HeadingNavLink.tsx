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
 * The active entry is rendered at a larger font size, but that size change is
 * deliberately NOT part of the transition: font-size drives layout, so easing it
 * over half a second forced the browser to re-lay-out the whole nav on every
 * frame. Only compositable properties are animated here.
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
        'block origin-left transition-[color,opacity,transform] duration-300 ease-out motion-reduce:transition-none',
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
