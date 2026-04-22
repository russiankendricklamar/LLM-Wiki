import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { Loader2, AlertCircle } from 'lucide-react';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Inter, system-ui, sans-serif',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#fff',
    primaryBorderColor: '#3b82f6',
    lineColor: '#94a3b8',
    secondaryColor: '#10b981',
    tertiaryColor: '#f59e0b',
  }
});

interface MermaidRendererProps {
  chart: string;
}

export const MermaidRenderer: React.FC<MermaidRendererProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current || !chart) return;
      
      setIsLoading(true);
      setError(null);

      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
      } catch (e: any) {
        console.error('Mermaid render failed:', e);
        setError('Failed to render architecture diagram. Check syntax.');
      } finally {
        setIsLoading(false);
      }
    };

    renderChart();
  }, [chart]);

  if (error) {
    return (
      <div className="my-6 p-4 rounded-lg border border-red-500/20 bg-red-500/5 text-red-500 flex items-center gap-3 text-sm">
        <AlertCircle className="w-4 h-4 shrink-0" />
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="my-8 w-full flex flex-col items-center">
      <div 
        ref={containerRef} 
        className="w-full overflow-x-auto flex justify-center bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {isLoading && (
        <div className="flex items-center gap-2 mt-2 text-zinc-500 text-xs">
          <Loader2 className="w-3 h-3 animate-spin" />
          <span>Generating diagram...</span>
        </div>
      )}
      <p className="mt-4 text-[10px] text-zinc-400 uppercase tracking-widest font-medium">Architecture Diagram</p>
    </div>
  );
};
