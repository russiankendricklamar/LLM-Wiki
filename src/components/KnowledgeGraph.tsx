import React, { useMemo, useRef, useEffect, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { useNavigate } from 'react-router-dom';
import { getGraphData } from '@/lib/content-loader';

interface KnowledgeGraphProps {
  lang: 'en' | 'ru';
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ lang }) => {
  const navigate = useNavigate();
  const graphData = useMemo(() => getGraphData(lang), [lang]);
  const fgRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
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
      
      {dimensions.width > 0 && (
        <ForceGraph3D
          ref={fgRef}
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
          nodeThreeObjectExtend={true}
          linkColor={() => 'rgba(120, 120, 120, 0.3)'}
        />
      )}
    </div>
  );
};
