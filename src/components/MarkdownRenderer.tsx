import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { KatexStyles } from './KatexStyles';
import { Link } from 'react-router-dom';
import { getAllPages, resolveWikilink } from '@/lib/content-loader';

const ChartRendererLazy = React.lazy(() =>
  import('./ChartRenderer').then(m => ({ default: m.ChartRenderer }))
);

interface MarkdownRendererProps {
  content: string;
  className?: string;
  category?: string;
}

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

const CustomLink = ({ href, children, ...props }: any) => {
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
  
  if (isInternal) {
    return (
      <Link 
        to={href} 
        className="font-medium text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
      >
        {children}
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
};

const CodeBlock = ({
  node,
  inline,
  className,
  children,
  ...props
}: any) => {
  const match = /language-(\w+)/.exec(className || '');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!inline && match) {
    const language = match[1];
    
    if (language === 'chart') {
      try {
        const chartConfig = JSON.parse(String(children));
        return (
          <React.Suspense fallback={<div className="h-64 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-lg my-6" />}>
            <ChartRendererLazy config={chartConfig} />
          </React.Suspense>
        );
      } catch (e) {
        return (
          <div className="p-4 my-6 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
            Failed to parse chart JSON configuration.
          </div>
        );
      }
    }

    return (
      <div className="relative group my-6 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            {match[1]}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-700"
            aria-label="Copy code"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
        <div className="p-3 sm:p-4 overflow-x-auto text-sm">
          <SyntaxHighlighter
            {...props}
            style={vscDarkPlus}
            language={match[1]}
            PreTag="div"
            customStyle={{
              margin: 0,
              padding: 0,
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
            codeTagProps={{
              style: {
                fontFamily: 'var(--font-mono)',
              }
            }}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }

  return (
    <code
      className={cn(
        "px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 font-mono text-[0.875em]",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
};

const extractText = (children: React.ReactNode): string => {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }
  if (React.isValidElement(children)) {
    return extractText((children.props as any).children);
  }
  return '';
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\sа-яё-]/gi, '')
    .replace(/\s+/g, '-');
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className, category }) => {
  const processedContent = React.useMemo(() => processWikilinks(content, category), [content, category]);
  const hasMath = content.includes('$');

  return (
    <div className={cn("prose prose-zinc dark:prose-invert max-w-none w-full break-words", className)}>
      {hasMath && <KatexStyles />}
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code: CodeBlock,
          a: CustomLink,
          h1: ({ node, children, ...props }) => {
            const id = slugify(extractText(children));
            return <h1 id={id} className="text-3xl font-semibold tracking-tight mt-8 mb-4 text-zinc-900 dark:text-zinc-50" {...props}>{children}</h1>;
          },
          h2: ({ node, children, ...props }) => {
            const id = slugify(extractText(children));
            return <h2 id={id} className="text-2xl font-semibold tracking-tight mt-10 mb-4 text-zinc-900 dark:text-zinc-50 pb-2 border-b border-zinc-200 dark:border-zinc-800" {...props}>{children}</h2>;
          },
          h3: ({ node, children, ...props }) => {
            const id = slugify(extractText(children));
            return <h3 id={id} className="text-xl font-semibold tracking-tight mt-8 mb-4 text-zinc-900 dark:text-zinc-50" {...props}>{children}</h3>;
          },
          p: ({ node, ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-700 dark:text-zinc-300" {...props} />,
          ul: ({ node, ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-zinc-700 dark:text-zinc-300" {...props} />,
          ol: ({ node, ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-zinc-700 dark:text-zinc-300" {...props} />,
          li: ({ node, ...props }) => <li className="text-zinc-700 dark:text-zinc-300" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="mt-6 border-l-2 border-zinc-300 dark:border-zinc-700 pl-6 italic text-zinc-600 dark:text-zinc-400" {...props} />
          ),
          hr: ({ node, ...props }) => <hr className="my-12 h-0.5 border-none bg-zinc-300 dark:bg-zinc-100 opacity-100" {...props} />,
          table: ({ node, ...props }) => (
            <div className="my-6 w-full overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-sm" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-3 text-left font-medium text-zinc-900 dark:text-zinc-200" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 text-zinc-700 dark:text-zinc-300 last:border-0" {...props} />
          ),
          tr: ({ node, ...props }) => <tr className="even:bg-zinc-50 dark:even:bg-zinc-900/20" {...props} />,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};
