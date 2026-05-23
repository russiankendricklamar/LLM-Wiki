import React, { useState } from 'react';
import { Quote, Github, Check, Copy, FileCode, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResearchToolboxProps {
  title: string;
  slug: string;
  author?: string;
  lang: 'en' | 'ru';
}

export const ResearchToolbox: React.FC<ResearchToolboxProps> = ({ title, slug, author, lang }) => {
  const [copied, setCopied] = useState<'bib' | 'link' | null>(null);

  const getBibTeX = () => {
    const year = new Date().getFullYear();
    const siteTitle = lang === 'en' ? 'LLM Wiki: Knowledge Garden' : 'LLM Wiki: Сад Знаний';
    const authorStr = author || 'LLM Wiki Contributors';
    const entry = `@online{llmwiki_${slug.replace(/\//g, '_')},
  author = {${authorStr}},
  title = {${title}},
  year = {${year}},
  url = {${window.location.href}},
  note = {Accessed: ${new Date().toLocaleDateString()}},
  organization = {${siteTitle}}
}`;
    return entry;
  };

  const copyToClipboard = (text: string, type: 'bib' | 'link') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const sourceUrl = `https://github.com/russiankendricklamar/LLM-Wiki/blob/main/obsidian-vault/${lang}${slug}.md`;

  return (
    <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-8 print:hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {lang === 'en' ? 'Research Tools' : 'Инструментарий исследователя'}
          </h4>
          <p className="text-xs text-zinc-500">
            {lang === 'en' ? 'Cite this article or view source code.' : 'Цитируйте статью или просматривайте исходный код.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => copyToClipboard(getBibTeX(), 'bib')}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
          >
            {copied === 'bib' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Quote className="w-3.5 h-3.5" />}
            {lang === 'en' ? 'Copy BibTeX' : 'Копировать BibTeX'}
          </button>

          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
          >
            <Github className="w-3.5 h-3.5" />
            {lang === 'en' ? 'View Source' : 'Исходный код'}
          </a>

          <button
            onClick={() => copyToClipboard(window.location.href, 'link')}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
          >
            {copied === 'link' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            {lang === 'en' ? 'Share Link' : 'Поделиться'}
          </button>
        </div>
      </div>

      {/* BibTeX Preview (Optional subtle detail) */}
      <div className="mt-4 p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">BibTeX Reference</span>
          <FileCode className="w-3 h-3 text-zinc-300" />
        </div>
        <pre className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 overflow-x-auto whitespace-pre">
          {getBibTeX()}
        </pre>
      </div>
    </div>
  );
};
