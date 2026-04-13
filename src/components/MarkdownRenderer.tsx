import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChartRenderer } from './ChartRenderer';

// Import KaTeX CSS for math rendering
import 'katex/dist/katex.min.css';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

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
        return <ChartRenderer config={chartConfig} />;
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
        <div className="p-4 overflow-x-auto text-sm">
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

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  return (
    <div className={cn("prose prose-zinc dark:prose-invert max-w-none w-full", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code: CodeBlock,
          h1: ({ node, ...props }) => <h1 className="text-3xl font-semibold tracking-tight mt-8 mb-4 text-zinc-900 dark:text-zinc-50" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4 text-zinc-900 dark:text-zinc-50 pb-2 border-b border-zinc-200 dark:border-zinc-800" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold tracking-tight mt-8 mb-4 text-zinc-900 dark:text-zinc-50" {...props} />,
          p: ({ node, ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-700 dark:text-zinc-300" {...props} />,
          ul: ({ node, ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-zinc-700 dark:text-zinc-300" {...props} />,
          ol: ({ node, ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-zinc-700 dark:text-zinc-300" {...props} />,
          li: ({ node, ...props }) => <li className="text-zinc-700 dark:text-zinc-300" {...props} />,
          a: ({ node, ...props }) => <a className="font-medium text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="mt-6 border-l-2 border-zinc-300 dark:border-zinc-700 pl-6 italic text-zinc-600 dark:text-zinc-400" {...props} />
          ),
          hr: ({ node, ...props }) => <hr className="my-12 border-zinc-200 dark:border-zinc-800" {...props} />,
          table: ({ node, ...props }) => (
            <div className="my-6 w-full overflow-y-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
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
        {content}
      </ReactMarkdown>
    </div>
  );
};
