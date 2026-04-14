import React, { useMemo, useRef, useEffect, useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGraphData } from '@/lib/content-loader';
import * as THREE from 'three';

const ForceGraph3D = lazy(() => import('react-force-graph-3d'));

interface KnowledgeGraphProps {
  lang: 'en' | 'ru';
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ lang }) => {
  const navigate = useNavigate();
  const graphData = useMemo(() => getGraphData(lang), [lang]);
  const fgRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      setDimensions({
        width: containerRef.current?.offsetWidth || window.innerWidth,
        height: window.innerHeight - 56,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Zoom to fit after data is loaded
    const timer = setTimeout(() => {
      if (fgRef.current) {
        fgRef.current.zoomToFit(400);
      }
    }, 1000);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, [graphData]);

  const nodeColor = (node: any) => {
    if (node.val > 1.5) return '#60a5fa'; // Blue for hubs
    return '#a1a1aa'; // Zinc for regular nodes
  };

  const nodeThreeObject = (node: any) => {
    const color = nodeColor(node);
    const geometry = new THREE.SphereGeometry(node.val === 2 ? 5 : 3, 24, 24);
    const material = new THREE.MeshPhongMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.9,
      shininess: 100
    });
    return new THREE.Mesh(geometry, material);
  };

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="w-full h-full min-h-[700px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80 backdrop-blur-sm relative group shadow-2xl">
      <div className="absolute top-6 left-6 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60">
        <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-50 tracking-tight">
          {lang === 'en' ? 'Knowledge Universe' : 'Вселенная знаний'}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-[200px]">
          {lang === 'en' ? 'Explore interconnected concepts in 3D' : 'Изучайте связи между концепциями в 3D'}
        </p>
      </div>
      
      <div className="absolute bottom-6 right-6 z-10 text-[10px] text-zinc-400 font-mono tracking-widest uppercase opacity-40">
        {graphData.nodes.length} Nodes • {graphData.links.length} Links
      </div>
      
      <Suspense fallback={
        <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
          <div className="w-8 h-8 border-2 border-zinc-300 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-100 rounded-full animate-spin" />
          <div className="text-sm font-medium animate-pulse">
            {lang === 'en' ? 'Initializing 3D Universe...' : 'Инициализация 3D вселенной...'}
          </div>
        </div>
      }>
        {dimensions.width > 0 && (
          <ForceGraph3D
            ref={fgRef}
            width={dimensions.width}
            height={dimensions.height}
            graphData={graphData}
            nodeLabel="name"
            nodeThreeObject={nodeThreeObject}
            linkDirectionalParticles={1}
            linkDirectionalParticleSpeed={0.003}
            linkDirectionalParticleWidth={2}
            linkDirectionalParticleColor={() => '#60a5fa'}
            backgroundColor="rgba(0,0,0,0)"
            showNavInfo={false}
            onNodeClick={(node: any) => {
              navigate(`/${node.id}`);
            }}
            linkColor={() => 'rgba(113, 113, 122, 0.2)'}
            linkWidth={0.5}
            enableNodeDrag={false}
            enableNavigationControls={true}
          />
        )}
      </Suspense>
    </div>
  );
};
