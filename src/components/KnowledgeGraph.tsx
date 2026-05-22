import React, { useMemo, useRef, useEffect, useState, Suspense, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGraphData } from '@/lib/content-loader';
import { useMediaQuery } from '@/hooks/use-media-query';
import * as THREE from 'three';
import { Maximize2, MousePointer2, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  'projects':        0xf97316,
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
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const graphData = useMemo(() => {
    const connected = new Set<string>();
    for (const l of rawGraphData.links) {
      connected.add(linkEndpointId(l.source));
      connected.add(linkEndpointId(l.target));
    }
    
    let nodes = rawGraphData.nodes.filter((n: any) => connected.has(n.id));
    
    if (selectedSection) {
      nodes = nodes.filter((n: any) => n.id.startsWith(selectedSection));
    }

    const visibleNodeIds = new Set(nodes.map((n: any) => n.id));
    const links = rawGraphData.links.filter((l: any) => 
      visibleNodeIds.has(linkEndpointId(l.source)) && visibleNodeIds.has(linkEndpointId(l.target))
    );

    return { nodes, links };
  }, [rawGraphData, selectedSection]);

  const sections = useMemo(() => {
    const s = new Set<string>();
    rawGraphData.nodes.forEach((n: any) => {
      const section = n.id.split('/')[0];
      if (section && section !== 'knowledge-graph') s.add(section);
    });
    return Array.from(s).sort();
  }, [rawGraphData]);

  const adjacency = useMemo(() => {
    const map = new Map<string, { nodes: Set<string>; links: Set<any> }>();
    for (const link of graphData.links) {
      const s = linkEndpointId(link.source);
      const t = linkEndpointId(link.target);
      if (!map.has(s)) map.set(s, { nodes: new Set(), links: new Set() });
      if (!map.has(t)) map.set(t, { nodes: new Set(), links: new Set() });
      map.get(s)!.nodes.add(t);
      map.get(s)!.links.add(link);
      map.get(t)!.nodes.add(s);
      map.get(t)!.links.add(link);
    }
    return map;
  }, [graphData]);

  const fgRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [showHint, setShowHint] = useState(true);

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
      setDimensions({
        width: containerRef.current?.offsetWidth || window.innerWidth,
        height: window.innerHeight - 56,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [graphData]);

  useEffect(() => {
    if (!isDesktop || !fgRef.current) return;
    const fg = fgRef.current;
    const linkForce = fg.d3Force?.('link');
    if (linkForce) linkForce.distance(25).strength(1);
    const chargeForce = fg.d3Force?.('charge');
    if (chargeForce) chargeForce.strength(-25).distanceMax(250);
    fg.d3ReheatSimulation?.();
    const timer = setTimeout(() => fg.zoomToFit?.(400), 1000);
    return () => clearTimeout(timer);
  }, [graphData, isDesktop]);

  const nodeThreeObject = useCallback((node: any) => {
    const isHub = node.val > 1.5;
    const section = node.id.split('/')[0];
    const isHighlighted = !dimmedMode || highlightNodes.has(node.id);
    const geometry = isHub ? HUB_GEOMETRY : NODE_GEOMETRY;
    const material = getMaterial(section, isHighlighted, dimmedMode && !isHighlighted, isHub);
    return new THREE.Mesh(geometry, material);
  }, [dimmedMode, highlightNodes]);

  const linkColor = useCallback((d: any) => {
    if (highlightLinks.has(d)) return 'rgba(96, 165, 250, 0.8)';
    return dimmedMode ? 'rgba(113, 113, 122, 0.02)' : 'rgba(113, 113, 122, 0.1)';
  }, [highlightLinks, dimmedMode]);
  
  const linkWidth = useCallback((d: any) => highlightLinks.has(d) ? 1.5 : 0.5, [highlightLinks]);
  const particleCount = useCallback((d: any) => highlightLinks.has(d) ? 4 : 0, [highlightLinks]);

  const nodeColor2D = useCallback((node: any) => {
    const section = node.id.split('/')[0];
    const hex = SECTION_COLORS[section] || SECTION_COLORS._other;
    const color = `#${hex.toString(16).padStart(6, '0')}`;
    if (dimmedMode && !highlightNodes.has(node.id)) return `${color}22`;
    return color;
  }, [dimmedMode, highlightNodes]);

  const handleNodeClick = useCallback((node: any) => {
    navigate(`/${node.id}`);
  }, [navigate]);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="w-full h-full min-h-[700px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80 backdrop-blur-sm relative group shadow-2xl">
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-4 pointer-events-none">
        <div className="transition-opacity duration-500 group-hover:opacity-100 opacity-60">
          <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-50 tracking-tight text-white">
            {lang === 'en' ? 'Knowledge Universe' : 'Вселенная знаний'}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-[200px]">
            {lang === 'en' ? 'Explore interconnected concepts in 3D' : 'Изучайте связи между концепциями в 3D'}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 max-w-[320px] pointer-events-auto">
          <button
            onClick={() => setSelectedSection(null)}
            className={cn(
              "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all border",
              !selectedSection 
                ? "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-100" 
                : "bg-black/40 border-white/10 text-zinc-400 hover:border-white/30"
            )}
          >
            {lang === 'en' ? 'All' : 'Все'}
          </button>
          {sections.map(section => {
            if (section === 'knowledge-graph') return null;
            const hex = SECTION_COLORS[section] || SECTION_COLORS._other;
            const color = `#${hex.toString(16).padStart(6, '0')}`;
            const isActive = selectedSection === section;
            return (
              <button
                key={section}
                onClick={() => setSelectedSection(isActive ? null : section)}
                className={cn(
                  "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all border",
                  isActive ? "border-transparent text-white" : "bg-black/40 border-white/10 text-zinc-400 hover:border-white/30"
                )}
                style={{ backgroundColor: isActive ? color : undefined, boxShadow: isActive ? `0 0 15px ${color}44` : undefined }}
              >
                {section.replace(/-/g, ' ')}
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
        <button
          onClick={handleResetCamera}
          className="p-2 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all backdrop-blur-md"
          title={lang === 'en' ? 'Reset Camera' : 'Сброс камеры'}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 hidden md:block">
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 border-b border-white/5 pb-1">
          {lang === 'en' ? 'Legend' : 'Легенда'}
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {Object.entries(SECTION_COLORS).map(([section, hex]) => {
            if (section === '_other' || !sections.includes(section)) return null;
            const color = `#${hex.toString(16).padStart(6, '0')}`;
            return (
              <div key={section} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-[9px] text-zinc-300 font-medium capitalize">{section.replace(/-/g, ' ')}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-2">
        <div className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase opacity-40">
          {graphData.nodes.length} Nodes • {graphData.links.length} Links
        </div>
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-[9px] text-zinc-400 font-medium backdrop-blur-md">
          <div className="flex items-center gap-1"><MousePointer2 className="w-3 h-3" /><span>{lang === 'en' ? 'Navigate' : 'Переход'}</span></div>
          <div className="w-px h-3 bg-white/10" /><div className="flex items-center gap-1"><Maximize2 className="w-3 h-3" /><span>{lang === 'en' ? 'Orbit' : 'Орбита'}</span></div>
        </div>
      </div>

      <Suspense fallback={<GraphSkeleton />}>
        {dimensions.width > 0 && (
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
              linkDirectionalParticleSpeed={0.006}
              linkDirectionalParticleWidth={3}
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
              nodeRelSize={4}
              linkDirectionalParticles={particleCount}
              linkDirectionalParticleSpeed={0.006}
              linkDirectionalParticleWidth={3}
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
  );
};
