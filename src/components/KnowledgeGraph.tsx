import React, { useMemo, useRef, useEffect, useState, Suspense, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGraphData } from '@/lib/content-loader';
import { useMediaQuery } from '@/hooks/use-media-query';
import * as THREE from 'three';
import { Maximize2, MousePointer2, RotateCcw, Network, Home, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SearchDialog } from './SearchDialog';

const ForceGraph3DLazy = React.lazy(() =>
  import('react-force-graph-3d').then(m => ({ default: m.default }))
);
const ForceGraph2DLazy = React.lazy(() =>
  import('react-force-graph-2d').then(m => ({ default: m.default }))
);

interface KnowledgeGraphProps {
  lang: 'en' | 'ru';
}

const GraphSkeleton: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center bg-zinc-50 dark:bg-zinc-950">
    <div className="text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
      Loading graph…
    </div>
  </div>
);

const HUB_GEOMETRY = new THREE.SphereGeometry(5, 12, 12);
const NODE_GEOMETRY = new THREE.SphereGeometry(3, 12, 12);

const SECTION_COLORS: Record<string, number> = {
  'language-models': 0x10b981,
  'llm-infra':       0x3b82f6,
  'ai-theory':       0x8b5cf6,
  'ai-finance':      0x06b6d4,
  'ai-physics':      0xf59e0b,
  'math':            0xec4899,
  'finance':         0x14b8a6,
  'physics':         0x6366f1,
  'cs':              0xef4444,
  'courses':         0xfacc15,
  'projects':        0xf97316,
  'research':        0x10b981,
  'about':           0x71717a,
  '_other':          0x71717a,
};

const getMaterial = (section: string, isHighlighted: boolean, isDimmed: boolean, isHub: boolean) => {
  const color = SECTION_COLORS[section] || SECTION_COLORS._other;
  const opacity = isHighlighted ? 0.9 : (isDimmed ? 0.05 : 0.7);
  
  return new THREE.MeshPhongMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: isHighlighted ? 0.5 : 0.2,
    transparent: true,
    opacity: opacity,
    shininess: 100,
  });
};

const linkEndpointId = (endpoint: any) =>
  typeof endpoint === 'string' ? endpoint : endpoint?.id;

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ lang }) => {
  const navigate = useNavigate();
  const rawGraphData = useMemo(() => getGraphData(lang), [lang]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const graphData = useMemo(() => {
    return rawGraphData;
  }, [rawGraphData]);

  const adjacency = useMemo(() => {
    const map = new Map<string, { nodes: Set<string>; links: Set<any> }>();
    
    // Initialize map with all nodes to ensure adjacency exists for every node
    for (const node of graphData.nodes) {
      map.set(node.id, { nodes: new Set(), links: new Set() });
    }

    for (const link of graphData.links) {
      const s = linkEndpointId(link.source);
      const t = linkEndpointId(link.target);
      if (map.has(s) && map.has(t)) {
        map.get(s)!.nodes.add(t);
        map.get(s)!.links.add(link);
        map.get(t)!.nodes.add(s);
        map.get(t)!.links.add(link);
      }
    }
    return map;
  }, [graphData]);

  const fgRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const graphContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [highlightNodes, setHighlightNodes] = useState<Set<string>>(() => new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<any>>(() => new Set());
  const dimmedMode = highlightNodes.size > 0;

  const handleNodeHover = useCallback((node: any) => {
    if (!node) {
      setHighlightNodes(new Set());
      setHighlightLinks(new Set());
      return;
    }
    const entry = adjacency.get(node.id);
    const nextNodes = new Set<string>([node.id]);
    const nextLinks = new Set<any>();
    if (entry) {
      for (const n of entry.nodes) nextNodes.add(n);
      for (const l of entry.links) nextLinks.add(l);
    }
    setHighlightNodes(nextNodes);
    setHighlightLinks(nextLinks);
  }, [adjacency]);

  const handleLinkHover = useCallback((link: any) => {
    if (!link) {
      setHighlightNodes(new Set());
      setHighlightLinks(new Set());
      return;
    }
    setHighlightNodes(new Set([linkEndpointId(link.source), linkEndpointId(link.target)]));
    setHighlightLinks(new Set([link]));
  }, []);

  const handleResetCamera = useCallback(() => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(600);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      if (graphContainerRef.current) {
        setDimensions({
          width: graphContainerRef.current.offsetWidth,
          height: graphContainerRef.current.offsetHeight,
        });
      }
    };
    
    updateDimensions();
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
      }
    });
    
    if (graphContainerRef.current) observer.observe(graphContainerRef.current);
    
    const timeout = setTimeout(() => {
      if (dimensions.height === 0 && graphContainerRef.current) {
        const h = graphContainerRef.current.offsetHeight;
        const w = graphContainerRef.current.offsetWidth;
        if (h > 0) setDimensions({ width: w, height: h });
      }
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !fgRef.current || dimensions.height <= 0) return;
    const fg = fgRef.current;
    const linkForce = fg.d3Force?.('link');
    if (linkForce) linkForce.distance(35).strength(0.8);
    const chargeForce = fg.d3Force?.('charge');
    if (chargeForce) chargeForce.strength(-40).distanceMax(300);
    fg.d3ReheatSimulation?.();
    const timer = setTimeout(() => fg.zoomToFit?.(400, 100), 1000);
    return () => clearTimeout(timer);
  }, [graphData, isDesktop, dimensions.height]);

  const nodeThreeObject = useCallback((node: any) => {
    const isHub = node.val > 1.5;
    const section = String(node.id || '').split('/')[0];
    const isHighlighted = !dimmedMode || highlightNodes.has(node.id);
    const geometry = isHub ? HUB_GEOMETRY : NODE_GEOMETRY;
    const material = getMaterial(section, isHighlighted, dimmedMode && !isHighlighted, isHub);
    const mesh = new THREE.Mesh(geometry, material);
    
    if (isHighlighted && dimmedMode) {
      const glowGeometry = isHub ? new THREE.SphereGeometry(6, 12, 12) : new THREE.SphereGeometry(4, 12, 12);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: material.color,
        transparent: true,
        opacity: 0.2
      });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      mesh.add(glowMesh);
    }
    
    return mesh;
  }, [dimmedMode, highlightNodes]);

  const linkColor = useCallback((d: any) => {
    if (highlightLinks.has(d)) return 'rgba(96, 165, 250, 0.9)';
    return dimmedMode ? 'rgba(113, 113, 122, 0.02)' : 'rgba(113, 113, 122, 0.15)';
  }, [highlightLinks, dimmedMode]);
  
  const linkWidth = useCallback((d: any) => highlightLinks.has(d) ? 2 : 0.6, [highlightLinks]);
  const particleCount = useCallback((d: any) => highlightLinks.has(d) ? 6 : 0, [highlightLinks]);

  const nodeColor2D = useCallback((node: any) => {
    const section = String(node.id || '').split('/')[0];
    const hex = SECTION_COLORS[section] || SECTION_COLORS._other;
    const color = `#${hex.toString(16).padStart(6, '0')}`;
    if (dimmedMode && !highlightNodes.has(node.id)) return `${color}11`;
    return color;
  }, [dimmedMode, highlightNodes]);

  const handleNodeClick = useCallback((node: any) => {
    if (node && node.id) navigate(`/${node.id}`);
  }, [navigate]);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="w-full h-full min-h-[700px] md:min-h-[900px] flex flex-col overflow-hidden bg-white dark:bg-zinc-950">
      {/* Header Toolbar */}
      <div className="shrink-0 bg-zinc-50/50 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight uppercase flex items-center gap-2">
            <Network className="w-4 h-4 text-emerald-500" />
            {lang === 'en' ? 'Knowledge Core' : 'Ядро знаний'}
          </h3>
          <div className="flex items-center gap-2 text-[10px] text-zinc-500 dark:text-zinc-400 font-mono tracking-wider uppercase">
            <span>{graphData.nodes.length} Nodes</span>
            <span className="opacity-30">•</span>
            <span>{graphData.links.length} Links</span>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-sm flex items-center gap-2"
            title={lang === 'en' ? 'Search Articles' : 'Поиск статей'}
          >
            <Search className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase hidden md:inline">{lang === 'en' ? 'Search' : 'Поиск'}</span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-sm flex items-center gap-2"
            title={lang === 'en' ? 'Back to Home' : 'На главную'}
          >
            <Home className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase hidden md:inline">{lang === 'en' ? 'Home' : 'Домой'}</span>
          </button>
          
          <button
            onClick={handleResetCamera}
            className="p-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-sm"
            title={lang === 'en' ? 'Reset Camera' : 'Сброс камеры'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Graph Area */}
      <div ref={graphContainerRef} className="flex-1 relative min-h-0 bg-zinc-50/30 dark:bg-black/20">
        {/* Absolute HUD Overlays (Essential Controls Only) */}
        <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-3 pointer-events-none">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-[9px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest backdrop-blur-md shadow-lg pointer-events-auto">
            <div className="flex items-center gap-2"><MousePointer2 className="w-3 h-3 text-blue-500" /><span>{lang === 'en' ? 'Click to Navigate' : 'Клик для перехода'}</span></div>
            <div className="w-px h-3 bg-zinc-200 dark:border-zinc-800" />
            <div className="flex items-center gap-2"><Maximize2 className="w-3 h-3 text-emerald-500" /><span>{lang === 'en' ? 'Drag to Orbit' : 'Драг для орбиты'}</span></div>
          </div>
        </div>

        <Suspense fallback={<GraphSkeleton />}>
          {dimensions.width > 0 && dimensions.height > 0 && (
            isDesktop ? (
              <ForceGraph3DLazy
                ref={fgRef}
                width={dimensions.width}
                height={dimensions.height}
                graphData={graphData as any}
                nodeLabel="name"
                nodeThreeObject={nodeThreeObject}
                onNodeHover={handleNodeHover}
                onLinkHover={handleLinkHover}
                linkDirectionalParticles={particleCount}
                linkDirectionalParticleSpeed={0.004}
                linkDirectionalParticleWidth={2}
                linkDirectionalParticleColor={() => '#60a5fa'}
                backgroundColor="rgba(0,0,0,0)"
                showNavInfo={false}
                onNodeClick={handleNodeClick}
                linkColor={linkColor}
                linkWidth={linkWidth}
                enableNodeDrag={false}
                enableNavigationControls={true}
              />
            ) : (
              <ForceGraph2DLazy
                width={dimensions.width}
                height={dimensions.height}
                graphData={graphData as any}
                nodeLabel="name"
                onNodeHover={handleNodeHover}
                onLinkHover={handleLinkHover}
                nodeColor={nodeColor2D}
                nodeRelSize={5}
                linkDirectionalParticles={particleCount}
                linkDirectionalParticleSpeed={0.004}
                linkDirectionalParticleWidth={2}
                linkDirectionalParticleColor={() => '#60a5fa'}
                backgroundColor="rgba(0,0,0,0)"
                onNodeClick={handleNodeClick}
                linkColor={linkColor}
                linkWidth={linkWidth}
                enableNodeDrag={false}
              />
            )
          )}
        </Suspense>
      </div>

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} lang={lang} />
    </div>
  );
};
