import React, { useMemo, useRef, useEffect, useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGraphData } from '@/lib/content-loader';

// Lazy load the 3D graph component to avoid issues during initial load
const ForceGraph3D = lazy(() => import('react-force-graph-3d'));

interface KnowledgeGraphProps {
  lang: 'en' | 'ru';
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ lang }) => {
  const navigate = useNavigate();
  const graphData = useMemo(() => getGraphData(lang), [lang]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="w-full h-full min-h-[600px] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 relative">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {lang === 'en' ? 'Knowledge Graph' : 'Граф знаний'}
        </h3>
        <p className="text-xs text-zinc-500">
          {lang === 'en' ? 'Interactive 3D view of related topics' : 'Интерактивный 3D-вид связей между темами'}
        </p>
      </div>
      
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
          {lang === 'en' ? 'Loading 3D Map...' : 'Загрузка 3D карты...'}
        </div>
      }>
        {dimensions.width > 0 && (
          <ForceGraph3D
            width={dimensions.width}
            height={dimensions.height}
            graphData={graphData}
            nodeLabel="name"
            nodeAutoColorBy="val"
            nodeRelSize={6}
            linkDirectionalParticles={2}
            linkDirectionalParticleSpeed={0.005}
            backgroundColor="rgba(0,0,0,0)"
            showNavInfo={false}
            onNodeClick={(node: any) => {
              navigate(`/${node.id}`);
            }}
            linkColor={() => 'rgba(120, 120, 120, 0.3)'}
          />
        )}
      </Suspense>
    </div>
  );
};
