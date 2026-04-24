import React, { useMemo, useRef, useEffect, useState, Suspense, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGraphData } from '@/lib/content-loader';
import { useMediaQuery } from '@/hooks/use-media-query';
import * as THREE from 'three';

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

// Shared, immutable resources for 3D nodes — created once for the lifetime of
// the module. Re-allocating SphereGeometry / MeshPhongMaterial on every render
// for each of ~700 nodes was the dominant cause of UI freezes.
const HUB_GEOMETRY = new THREE.SphereGeometry(5, 12, 12);
const NODE_GEOMETRY = new THREE.SphereGeometry(3, 12, 12);

type MaterialKey = 'hub-active' | 'hub-dim' | 'node-active' | 'node-dim';
const MATERIALS: Record<MaterialKey, THREE.MeshPhongMaterial> = {
  'hub-active': new THREE.MeshPhongMaterial({
    color: 0x60a5fa, emissive: 0x60a5fa, emissiveIntensity: 0.6,
    transparent: true, opacity: 0.9, shininess: 100,
  }),
  'hub-dim': new THREE.MeshPhongMaterial({
    color: 0xa1a1aa, emissive: 0xa1a1aa, emissiveIntensity: 0.1,
    transparent: true, opacity: 0.2, shininess: 100,
  }),
  'node-active': new THREE.MeshPhongMaterial({
    color: 0xa1a1aa, emissive: 0xa1a1aa, emissiveIntensity: 0.6,
    transparent: true, opacity: 0.9, shininess: 100,
  }),
  'node-dim': new THREE.MeshPhongMaterial({
    color: 0xa1a1aa, emissive: 0xa1a1aa, emissiveIntensity: 0.1,
    transparent: true, opacity: 0.2, shininess: 100,
  }),
};

const linkEndpointId = (endpoint: any) =>
  typeof endpoint === 'string' ? endpoint : endpoint?.id;

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ lang }) => {
  const navigate = useNavigate();
  const rawGraphData = useMemo(() => getGraphData(lang), [lang]);

  // Drop fully isolated nodes (no in/out wikilinks). They add visual noise
  // and force-simulation cost without telling the reader anything.
  const graphData = useMemo(() => {
    const connected = new Set<string>();
    for (const l of rawGraphData.links) {
      connected.add(linkEndpointId(l.source));
      connected.add(linkEndpointId(l.target));
    }
    const nodes = rawGraphData.nodes.filter((n: any) => connected.has(n.id));
    return { nodes, links: rawGraphData.links };
  }, [rawGraphData]);

  // Pre-build adjacency once so hover never has to scan all links.
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

  // Highlight state — always replaced with fresh Sets so React detects change.
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

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [graphData]);

  // 3D-only: tune the d3-force layout so lonely / weakly-connected nodes get
  // pulled close to the cluster instead of being flung to the periphery, then
  // zoom the camera to fit the whole graph.
  useEffect(() => {
    if (!isDesktop || !fgRef.current) return;
    const fg = fgRef.current;
    // Shorter, stronger links → lonely nodes cling to their single neighbour.
    const linkForce = fg.d3Force?.('link');
    if (linkForce) {
      linkForce.distance(18).strength(1);
    }
    // Softer repulsion → tighter overall cluster, no rogue dots adrift.
    const chargeForce = fg.d3Force?.('charge');
    if (chargeForce) {
      chargeForce.strength(-18).distanceMax(180);
    }
    fg.d3ReheatSimulation?.();
    const timer = setTimeout(() => {
      fg.zoomToFit?.(400);
    }, 1500);
    return () => clearTimeout(timer);
  }, [graphData, isDesktop]);

  // Auto-dismiss the mobile touch hint after 3.5s
  useEffect(() => {
    if (!showHint) return;
    const timer = window.setTimeout(() => setShowHint(false), 3500);
    return () => window.clearTimeout(timer);
  }, [showHint]);

  // Returns a single shared Mesh per (size, state) bucket — the renderer can
  // safely reuse Mesh instances since react-force-graph wraps each in its own
  // scene-graph node.
  const nodeThreeObject = useCallback((node: any) => {
    const isHub = node.val > 1.5;
    const isHighlighted = !dimmedMode || highlightNodes.has(node.id);
    const matKey: MaterialKey = isHub
      ? (isHighlighted ? 'hub-active' : 'hub-dim')
      : (isHighlighted ? 'node-active' : 'node-dim');
    return new THREE.Mesh(isHub ? HUB_GEOMETRY : NODE_GEOMETRY, MATERIALS[matKey]);
  }, [dimmedMode, highlightNodes]);

  const linkColor = useCallback(
    (d: any) => highlightLinks.has(d) ? 'rgba(96, 165, 250, 0.8)' : 'rgba(113, 113, 122, 0.1)',
    [highlightLinks]
  );
  const linkWidth = useCallback(
    (d: any) => highlightLinks.has(d) ? 1.5 : 0.5,
    [highlightLinks]
  );
  const particleCount = useCallback(
    (d: any) => highlightLinks.has(d) ? 4 : 0,
    [highlightLinks]
  );

  const nodeColor2D = useCallback((node: any) => {
    if (dimmedMode && !highlightNodes.has(node.id)) return 'rgba(161,161,170,0.1)';
    return node.val > 1.5 ? '#60a5fa' : '#a1a1aa';
  }, [dimmedMode, highlightNodes]);

  const handleNodeClick = useCallback((node: any) => {
    navigate(`/${node.id}`);
  }, [navigate]);

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

      {!isDesktop && showHint && (
        <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">
          Pinch to zoom · drag to pan
        </div>
      )}

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
              cooldownTicks={120}
              warmupTicks={20}
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
              cooldownTicks={100}
              d3VelocityDecay={0.3}
            />
          )
        )}
      </Suspense>
    </div>
  );
};
