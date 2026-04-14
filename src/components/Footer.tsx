import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  lang?: 'en' | 'ru';
}

export const Footer: React.FC<FooterProps> = ({ lang = 'ru' }) => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-8 py-5 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span className="text-xs text-zinc-400 dark:text-zinc-500">
        © 2026 Egor Galkin
      </span>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/russiankendricklamar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <Github className="h-3.5 w-3.5" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/russiankendricklamar/?locale=ru"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <Linkedin className="h-3.5 w-3.5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:egor@example.com"
          aria-label="Email"
          className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>{lang === 'en' ? 'Email' : 'Написать'}</span>
        </a>
      </div>
    </footer>
  );
};
