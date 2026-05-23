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
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    // Use a small delay to ensure container is fully rendered
    const timer = setTimeout(updateDimensions, 100);
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !fgRef.current) return;
    const fg = fgRef.current;
    const linkForce = fg.d3Force?.('link');
    if (linkForce) linkForce.distance(35).strength(0.8);
    const chargeForce = fg.d3Force?.('charge');
    if (chargeForce) chargeForce.strength(-40).distanceMax(300);
    fg.d3ReheatSimulation?.();
    const timer = setTimeout(() => fg.zoomToFit?.(400, 100), 1000);
    return () => clearTimeout(timer);
  }, [graphData, isDesktop]);

  const nodeThreeObject = useCallback((node: any) => {
    const isHub = node.val > 1.5;
    const section = node.id.split('/')[0];
    const isHighlighted = !dimmedMode || highlightNodes.has(node.id);
    const geometry = isHub ? HUB_GEOMETRY : NODE_GEOMETRY;
    const material = getMaterial(section, isHighlighted, dimmedMode && !isHighlighted, isHub);
    const mesh = new THREE.Mesh(geometry, material);
    
    // Add a very subtle glow to highlighted nodes
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
    const section = node.id.split('/')[0];
    const hex = SECTION_COLORS[section] || SECTION_COLORS._other;
    const color = `#${hex.toString(16).padStart(6, '0')}`;
    if (dimmedMode && !highlightNodes.has(node.id)) return `${color}11`;
    return color;
  }, [dimmedMode, highlightNodes]);

  const handleNodeClick = useCallback((node: any) => {
    navigate(`/${node.id}`);
  }, [navigate]);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="w-full h-full min-h-[600px] md:min-h-[750px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative group shadow-xl">
      {/* HUD - Top Left: Navigation & Info */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none space-y-4">
        <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-sm transition-opacity duration-500 opacity-90 group-hover:opacity-100 pointer-events-auto">
          <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-widest uppercase mb-1">
            {lang === 'en' ? 'Knowledge Core' : 'Ядро знаний'}
          </h3>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[180px]">
            {lang === 'en' ? 'Visualizing 390 interconnected technical topics' : 'Визуализация 390 связанных технических тем'}
          </p>
        </div>

        {/* Section Quick Filters - Vertical Column */}
        <div className="flex flex-col gap-1 pointer-events-auto">
          <button
            onClick={() => setSelectedSection(null)}
            className={cn(
              "flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border text-left w-fit",
              !selectedSection 
                ? "bg-zinc-900 dark:bg-zinc-100 border-zinc-900 dark:border-zinc-100 text-white dark:text-zinc-900 shadow-md" 
                : "bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 backdrop-blur-sm"
            )}
          >
            <div className={cn("w-1.5 h-1.5 rounded-full", !selectedSection ? "bg-white dark:bg-zinc-900" : "bg-zinc-300 dark:bg-zinc-600")} />
            {lang === 'en' ? 'All Sections' : 'Все разделы'}
          </button>
          
          <div className="flex flex-col gap-1 overflow-y-auto max-h-[300px] no-scrollbar pr-2 pt-1">
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
                    "flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border text-left group/btn",
                    isActive 
                      ? "shadow-md text-white" 
                      : "bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 backdrop-blur-sm"
                  )}
                  style={{ 
                    backgroundColor: isActive ? color : undefined,
                    borderColor: isActive ? color : undefined
                  }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full transition-transform group-hover/btn:scale-125" 
                    style={{ backgroundColor: isActive ? 'white' : color }} 
                  />
                  <span className="truncate">{section.replace(/-/g, ' ')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* HUD - Top Right: Actions */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button
          onClick={handleResetCamera}
          className="p-2 rounded-xl bg-white/60 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all backdrop-blur-md shadow-sm"
          title={lang === 'en' ? 'Reset Camera' : 'Сброс камеры'}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* HUD - Bottom Left: Legend (Compact) */}
      <div className="absolute bottom-4 left-4 z-20 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-2 hidden md:block max-w-[200px]">
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {Object.entries(SECTION_COLORS).map(([section, hex]) => {
            if (section === '_other' || !sections.includes(section)) return null;
            const color = `#${hex.toString(16).padStart(6, '0')}`;
            return (
              <div key={section} className="flex items-center gap-1.5 overflow-hidden">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="text-[8px] text-zinc-500 dark:text-zinc-400 font-bold uppercase truncate">{section.replace(/-/g, ' ')}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* HUD - Bottom Right: Stats & Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end gap-2">
        <div className="px-2 py-1 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 text-[9px] text-zinc-500 dark:text-zinc-400 font-mono tracking-widest uppercase backdrop-blur-sm">
          {graphData.nodes.length} N • {graphData.links.length} L
        </div>
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-[9px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-1.5"><MousePointer2 className="w-3 h-3 opacity-50" /><span>{lang === 'en' ? 'Select' : 'Выбор'}</span></div>
          <div className="w-px h-2.5 bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex items-center gap-1.5"><Maximize2 className="w-3 h-3 opacity-50" /><span>{lang === 'en' ? 'Orbit' : 'Орбита'}</span></div>
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
  );
};
