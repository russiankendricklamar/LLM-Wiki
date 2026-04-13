import React, { useMemo, useRef } from 'react';
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

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 relative">
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {lang === 'en' ? 'Knowledge Graph' : 'Граф знаний'}
        </h3>
        <p className="text-xs text-zinc-500">
          {lang === 'en' ? 'Interactive 3D view of related topics' : 'Интерактивный 3D-вид связей между темами'}
        </p>
      </div>
      
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="name"
        nodeAutoColorBy="val"
        nodeRelSize={6}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        backgroundColor="rgba(0,0,0,0)"
        showNavInfo={false}
        onNodeClick={(node: any) => {
          // Navigate to the slug when a node is clicked
          navigate(`/${node.id}`);
        }}
        // Styling nodes
        nodeThreeObjectExtend={true}
        linkColor={() => 'rgba(120, 120, 120, 0.3)'}
      />
    </div>
  );
};
