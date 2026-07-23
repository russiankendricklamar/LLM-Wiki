import React, { useMemo, useRef, useEffect, useState, Suspense, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGraphData } from '@/lib/content-loader';
import { useMediaQuery } from '@/hooks/use-media-query';
import * as THREE from 'three';
import {
  Maximize2,
  MousePointer2,
  RotateCcw,
  Network,
  Home,
  Search,
  Layers,
  Share2,
  Box,
  Sparkles,
  Palette,
  X,
  ArrowRight
} from 'lucide-react';
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

export type ColorPalette = 'spectrum' | 'cyberpunk' | 'matrix' | 'thermal' | 'aurora' | 'monochrome';

export interface VisualizerNode {
  id: string;
  label: string;
  category?: string;
  section?: string;
  subsection?: string;
  layerIndex: number;
  value: number;
}

export interface VisualizerEdge {
  id: string;
  sourceId: string;
  targetId: string;
  weight: number;
}

export interface ViewportState {
  x: number;
  y: number;
  zoom: number;
}

const GraphSkeleton: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center bg-zinc-950">
    <div className="text-sm text-zinc-400 animate-pulse">
      Loading Neural Pipeline Studio engine…
    </div>
  </div>
);

const SECTION_COLORS: Record<string, string> = {
  'language-models': '#10b981',
  'llm-infra':       '#3b82f6',
  'ai-theory':       '#8b5cf6',
  'ai-finance':      '#06b6d4',
  'ai-physics':      '#f59e0b',
  'math':            '#ec4899',
  'finance':         '#14b8a6',
  'physics':         '#6366f1',
  'cs':              '#ef4444',
  'courses':         '#facc15',
  'projects':        '#f97316',
  'research':        '#10b981',
  'about':           '#71717a',
  '_other':          '#71717a',
};

// 14 Sequential Layers: Fundamental -> AI Theory -> LLM Systems -> Quant Finance & Applications
const LAYER_STAGES = [
  { id: 'pure-math',        nameEn: 'L0: Pure Mathematics',      nameRu: 'L0: Фундаментальная Математика',tag: 'L0: PURE MATH',   color: '#ec4899' },
  { id: 'stochastics',      nameEn: 'L1: Stochastics & Info',    nameRu: 'L1: Вероятность и Инфо-Теория', tag: 'L1: STOCHASTICS',  color: '#f43f5e' },
  { id: 'cs-foundations',   nameEn: 'L2: CS & Algorithms',       nameRu: 'L2: Алгоритмы и Вычисления',    tag: 'L2: CS ALGO',      color: '#ef4444' },
  { id: 'physics-quantum',  nameEn: 'L3: Theoretical Physics',   nameRu: 'L3: Теоретическая Физика',      tag: 'L3: PHYSICS',      color: '#6366f1' },
  { id: 'ai-physics',       nameEn: 'L4: AI for Physics & PINNs',nameRu: 'L4: ИИ в Физике и PINNs',       tag: 'L4: AI PHYSICS',   color: '#f59e0b' },
  { id: 'ml-theory',        nameEn: 'L5: Machine Learning Theory',nameRu: 'L5: Теория Машинного Обучения',  tag: 'L5: ML THEORY',    color: '#8b5cf6' },
  { id: 'deep-learning',    nameEn: 'L6: Deep Neural Nets',      nameRu: 'L6: Глубокие Нейросети',        tag: 'L6: DEEP LEARNING',color: '#a855f7' },
  { id: 'transformer',      nameEn: 'L7: Transformer & Attn',    nameRu: 'L7: Внимание и Трансформеры',   tag: 'L7: TRANSFORMERS', color: '#10b981' },
  { id: 'cuda-acceleration',nameEn: 'L8: CUDA & GPU Acceleration',nameRu: 'L8: CUDA и GPU Ускорение',     tag: 'L8: CUDA & GPU',   color: '#3b82f6' },
  { id: 'llm-infra',        nameEn: 'L9: LLM Infra & Serving',   nameRu: 'L9: Инфраструктура LLM',        tag: 'L9: LLM INFRA',    color: '#0284c7' },
  { id: 'frontier-llms',    nameEn: 'L10: Frontier LLMs & Align',nameRu: 'L10: Языковые Модели и Align',  tag: 'L10: FRONTIER LLMS',color: '#059669' },
  { id: 'quant-math',       nameEn: 'L11: Quant Finance Math',   nameRu: 'L11: Квантовая Фин. Математика',tag: 'L11: QUANT MATH', color: '#06b6d4' },
  { id: 'quant-trading',    nameEn: 'L12: Financial ML & Trading',nameRu: 'L12: Фин. ML и Трейдинг',     tag: 'L12: FIN ML',      color: '#0891b2' },
  { id: 'applied-systems',  nameEn: 'L13: Applied Systems & Case',nameRu: 'L13: Прикладные Системы',     tag: 'L13: APPLIED APPS',color: '#eab308' },
];

const classifyStageIndex = (node: { id: string; label?: string; category?: string; section?: string; subsection?: string }): number => {
  const path = String(node.id || '').toLowerCase();
  const title = String(node.label || '').toLowerCase();
  const section = String(node.section || '').toLowerCase();
  const category = String(node.category || '').toLowerCase();
  const text = `${path} ${title} ${section} ${category} ${node.subsection || ''}`.toLowerCase();

  // Phase 5: High-Level Applied Systems & Frontier Applications (Rightmost stages L11, L12, L13)
  if (text.includes('backtest') || text.includes('trading-bot') || text.includes('market-simulator') || text.includes('case-study') || text.includes('projects') || text.includes('courses') || text.includes('agent-system')) return 13; // L13: Applied Systems
  if (text.includes('financial-ml') || text.includes('ai-finance') || text.includes('trading') || text.includes('portfolio') || text.includes('market-microstructure') || text.includes('alpha') || text.includes('time-series-finance') || text.includes('econometrics')) return 12; // L12: Financial ML & Algo Trading
  if (text.includes('black-scholes') || text.includes('option-pricing') || text.includes('derivatives') || text.includes('volatility-surface') || text.includes('quant-finance')) return 11; // L11: Quant Finance Math

  // Phase 4: Systems & LLM Scale (L8, L9, L10)
  if (text.includes('gpt') || text.includes('llama') || text.includes('deepseek') || text.includes('bert') || text.includes('moe') || text.includes('reasoning') || text.includes('prompt') || text.includes('rag') || text.includes('rlhf') || text.includes('dpo') || text.includes('fine-tuning') || text.includes('lora') || text.includes('chain-of-thought') || text.includes('language-models')) return 10; // L10: Frontier Language Models
  if (text.includes('vllm') || text.includes('quantization') || text.includes('gptq') || text.includes('awq') || text.includes('speculative') || text.includes('tensor-parallel') || text.includes('serving') || text.includes('distributed-training') || text.includes('llm-infra')) return 9; // L9: LLM Infra & Serving
  if (text.includes('cuda') || text.includes('flashattention') || text.includes('flash-attention') || text.includes('triton') || text.includes('gpu-acceleration') || text.includes('kernel')) return 8; // L8: Hardware & GPU Acceleration

  // Phase 3: Machine Learning & Core AI (L5, L6, L7)
  if (text.includes('attention') || text.includes('self-attention') || text.includes('multi-head') || text.includes('positional-encoding') || text.includes('rope') || text.includes('transformer')) return 7; // L7: Transformer Engine & Attention
  if (text.includes('deep-learning') || text.includes('neural-network') || text.includes('cnn') || text.includes('rnn') || text.includes('autoencoder') || text.includes('gan') || text.includes('representation') || text.includes('reinforcement')) return 6; // L6: Deep Neural Architectures
  if (text.includes('ai-theory') || text.includes('optimization') || text.includes('gradient-descent') || text.includes('backprop') || text.includes('loss-function') || text.includes('regularization') || text.includes('convex')) return 5; // L5: Machine Learning Theory

  // Phase 2: Physical & Scientific Modeling (L3, L4)
  if (text.includes('ai-physics') || text.includes('pinn') || text.includes('physics-informed') || text.includes('neural-ode') || text.includes('fluid-dynamics') || text.includes('symbolic-regression')) return 4; // L4: AI for Physics & PINNs
  if (path.startsWith('physics/') || section === 'physics' || text.includes('quantum') || text.includes('thermodynamics') || text.includes('relativity') || text.includes('hawking') || text.includes('penrose') || text.includes('electrodynamics') || text.includes('mechanics')) return 3; // L3: Theoretical Physics & Quantum

  // Phase 1: Pure Fundamentals (L0, L1, L2)
  if (path.startsWith('cs/') || section === 'cs' || text.includes('algorithm') || text.includes('data-structure') || text.includes('operating-system') || text.includes('compiler') || text.includes('distributed-system') || text.includes('c-plus-plus') || text.includes('rust')) return 2; // L2: CS & Compute Foundations
  if (text.includes('probability') || text.includes('statistics') || text.includes('stochastic') || text.includes('distribution') || text.includes('bayes') || text.includes('entropy') || text.includes('information-theory') || text.includes('measure-theory') || text.includes('functional-analysis') || text.includes('differential-equation') || text.includes('fourier') || text.includes('ergodic') || text.includes('markov') || text.includes('ito-calculus') || text.includes('martingale') || text.includes('hjb-equation')) return 1; // L1: Stochastics & Info
  if (path.startsWith('math/') || section === 'math' || text.includes('algebra') || text.includes('calculus') || text.includes('topology') || text.includes('geometry') || text.includes('matrix-theory')) return 0; // L0: Pure Mathematics

  // Research fallback based on keyword or path
  if (path.startsWith('research/')) {
    if (text.includes('market') || text.includes('finance') || text.includes('stock')) return 12;
    if (text.includes('llm') || text.includes('model')) return 10;
    if (text.includes('gpu') || text.includes('infra')) return 9;
    return 8;
  }

  return 13;
};

const linkEndpointId = (endpoint: any) =>
  typeof endpoint === 'string' ? endpoint : endpoint?.id;

type ViewMode = 'pipeline2d' | 'force3d';

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ lang }) => {
  const navigate = useNavigate();
  const rawGraphData = useMemo(() => getGraphData(lang), [lang]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('pipeline2d');

  // Visualizer Settings
  const edgeCurvature = 0.5;

  // Viewport State (Centered for landscape neural pipeline)
  const [viewport, setViewport] = useState<ViewportState>({ x: 0, y: 0, zoom: 0.65 });
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const graphContainerRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // 3D Orbital Helpers
  const particleCount = useCallback(() => 2, []);
  const linkColor3D = useCallback(() => 'rgba(99, 102, 241, 0.4)', []);
  const linkWidth3D = useCallback(() => 1, []);
  const nodeThreeObject = useCallback((node: any) => {
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        color: new THREE.Color(SECTION_COLORS[String(node.id).split('/')[0]] || '#38bdf8'),
      })
    );
    sprite.scale.set(8, 8, 1);
    return sprite;
  }, []);

  // Map graph nodes into Visualizer Node & Edge Structures
  const visualizerData = useMemo(() => {
    const nodes: VisualizerNode[] = rawGraphData.nodes.map(n => {
      const rawNode = {
        id: n.id,
        label: n.name,
        category: n.category,
        section: (n as any).section || String(n.id).split('/')[0],
        subsection: (n as any).subsection,
      };
      return {
        ...rawNode,
        layerIndex: classifyStageIndex(rawNode),
        value: n.val || 1.0,
      };
    });

    const edges: VisualizerEdge[] = rawGraphData.links.map((l, idx) => ({
      id: `edge-${idx}`,
      sourceId: linkEndpointId(l.source),
      targetId: linkEndpointId(l.target),
      weight: 0.6,
    }));

    return { nodes, edges };
  }, [rawGraphData]);

  // Compute Single-Column Neural Architecture Pipeline Layout
  const nodePositionsRef = useRef<Map<string, { x: number; y: number; ringCenterX: number; ringCenterY: number; node: VisualizerNode; degree: number; radius: number }>>(new Map());
  const stageHeadersRef = useRef<Array<{ x: number; y: number; tag: string; name: string; count: number; color: string }>>([]);
  const subHeadersRef = useRef<Array<{ x: number; y: number; tag: string; name: string; count: number; color: string; ringRadius: number }>>([]);
  const particlesRef = useRef<Map<string, Array<{ progress: number; speed: number; size: number }>>>(new Map());

  const computeNodeLayout = useCallback(() => {
    const { nodes, edges } = visualizerData;
    const posMap = new Map<string, { x: number; y: number; ringCenterX: number; ringCenterY: number; node: VisualizerNode; degree: number; radius: number }>();
    const stageHeaderPositions: Array<{ x: number; y: number; tag: string; name: string; count: number; color: string }> = [];
    const subHeaderPositions: Array<{ x: number; y: number; tag: string; name: string; count: number; color: string; ringRadius: number }> = [];

    // Calculate degree centrality
    const degreeMap = new Map<string, number>();
    nodes.forEach(n => degreeMap.set(n.id, 0));
    edges.forEach(e => {
      degreeMap.set(e.sourceId, (degreeMap.get(e.sourceId) || 0) + 1);
      degreeMap.set(e.targetId, (degreeMap.get(e.targetId) || 0) + 1);
    });

    const totalStages = LAYER_STAGES.length;
    const LAYER_SPACING = 550; // Extra wide horizontal spacing between main L category columns
    const RING_GAP = 60; // Vertical gap between subcategory ring centers

    // Step 1: Collect nodes by stage and subcategory
    const stageMap = new Map<number, Map<string, VisualizerNode[]>>();
    for (let i = 0; i < totalStages; i++) stageMap.set(i, new Map());

    nodes.forEach(n => {
      const sIdx = Math.min(Math.max(0, n.layerIndex), totalStages - 1);
      const subMap = stageMap.get(sIdx)!;
      const subKey = (n.subsection || n.category || 'General').trim();
      if (!subMap.has(subKey)) subMap.set(subKey, []);
      subMap.get(subKey)!.push(n);
    });

    // Step 2: Calculate circular orbital placement for each subcategory
    for (let sIdx = 0; sIdx < totalStages; sIdx++) {
      const stageBaseX = (sIdx - (totalStages - 1) / 2) * LAYER_SPACING;
      const subMap = stageMap.get(sIdx)!;
      const subEntries = Array.from(subMap.entries());

      const ringBlocks: Array<{
        tag: string;
        name: string;
        nodes: VisualizerNode[];
        radius: number;
        diameter: number;
      }> = [];

      let subCounter = 1;
      subEntries.forEach(([rawName, subNodes]) => {
        subNodes.sort((a, b) => a.label.localeCompare(b.label));

        // Chunk into sub-blocks L_k.1, L_k.2 (max 16 nodes per ring)
        const CHUNK_SIZE = 16;
        for (let i = 0; i < subNodes.length; i += CHUNK_SIZE) {
          const chunk = subNodes.slice(i, i + CHUNK_SIZE);
          const count = chunk.length;

          // Ring radius proportional to node count -> guarantees ~22px arc distance between dots!
          const radius = count > 1 ? Math.max(22, count * 3.4) : 0;
          const diameter = radius * 2;
          const tag = `L${sIdx}.${subCounter}`;
          const displayName = chunk[0].subsection || rawName;

          ringBlocks.push({
            tag,
            name: `${tag}: ${displayName}`,
            nodes: chunk,
            radius,
            diameter,
          });
          subCounter++;
        }
      });

      const totalDiameters = ringBlocks.reduce((sum, r) => sum + r.diameter, 0);
      const totalGaps = Math.max(0, ringBlocks.length - 1) * RING_GAP;
      const totalStageHeight = totalDiameters + totalGaps;

      // Main stage header above column
      stageHeaderPositions.push({
        x: stageBaseX,
        y: -totalStageHeight / 2 - 40,
        tag: LAYER_STAGES[sIdx].tag,
        name: lang === 'en' ? LAYER_STAGES[sIdx].nameEn : LAYER_STAGES[sIdx].nameRu,
        count: ringBlocks.reduce((sum, r) => sum + r.nodes.length, 0),
        color: LAYER_STAGES[sIdx].color,
      });

      let currentY = -totalStageHeight / 2;

      ringBlocks.forEach((ring) => {
        const ringCenterY = currentY + ring.radius;

        // Sub-header badge centered inside the ring
        subHeaderPositions.push({
          x: stageBaseX,
          y: ringCenterY,
          tag: ring.tag,
          name: ring.name,
          count: ring.nodes.length,
          color: LAYER_STAGES[sIdx].color,
          ringRadius: ring.radius,
        });

        // Distribute nodes in a circle around (stageBaseX, ringCenterY)
        const count = ring.nodes.length;
        ring.nodes.forEach((node, mIdx) => {
          let posX = stageBaseX;
          let posY = ringCenterY;

          if (count > 1) {
            const angle = (2 * Math.PI * mIdx) / count - Math.PI / 2;
            posX = stageBaseX + ring.radius * Math.cos(angle);
            posY = ringCenterY + ring.radius * Math.sin(angle);
          }

          const deg = degreeMap.get(node.id) || 0;
          const dotRadius = Math.min(3.2, Math.max(1.8, 1.8 + Math.sqrt(deg) * 0.22));

          posMap.set(node.id, { x: posX, y: posY, ringCenterX: stageBaseX, ringCenterY, node, degree: deg, radius: dotRadius });
        });

        currentY += ring.diameter + RING_GAP;
      });
    }

    nodePositionsRef.current = posMap;
    stageHeadersRef.current = stageHeaderPositions;
    subHeadersRef.current = subHeaderPositions;
  }, [visualizerData, lang]);

  useEffect(() => {
    computeNodeLayout();
  }, [computeNodeLayout]);

  // Color Gradient Helper for S-Curve Bezier Lines
  const getEdgeColor = useCallback((yRatio: number, isHighlighted: boolean, isDimmed: boolean) => {
    if (isDimmed) return 'rgba(255, 255, 255, 0.02)';
    const alpha = isHighlighted ? 0.95 : 0.28;

    // Green -> Yellow -> Orange -> Red Gradient
    if (yRatio < 0.25) return `rgba(34, 197, 94, ${alpha})`;   // Green
    if (yRatio < 0.50) return `rgba(234, 179, 8, ${alpha})`;   // Yellow
    if (yRatio < 0.75) return `rgba(249, 115, 22, ${alpha})`;  // Orange
    return `rgba(239, 68, 68, ${alpha})`;                     // Red
  }, []);

  // Bezier Curve Helper
  const getBezierPoint = (
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    p3: { x: number; y: number },
    t: number
  ) => {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;
    return {
      x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
      y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
    };
  };

  // Canvas 2D Engine Loop
  useEffect(() => {
    if (viewMode !== 'pipeline2d' || !isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const width = canvas.clientWidth || 1000;
      const height = canvas.clientHeight || 700;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      // Pure deep black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(
        width / 2, height / 2, 80,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      grad.addColorStop(0, '#09090b');
      grad.addColorStop(0.6, '#040405');
      grad.addColorStop(1, '#000000');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2 + viewport.x, height / 2 + viewport.y);
      ctx.scale(viewport.zoom, viewport.zoom);

      const focusNodeId = hoveredNodeId || selectedNodeId;
      const activeNodeIds = new Set<string>();
      const activeEdgeIds = new Set<string>();

      if (focusNodeId) {
        activeNodeIds.add(focusNodeId);
        visualizerData.edges.forEach(edge => {
          if (edge.sourceId === focusNodeId || edge.targetId === focusNodeId) {
            activeEdgeIds.add(edge.id);
            activeNodeIds.add(edge.sourceId);
            activeNodeIds.add(edge.targetId);
          }
        });
      }

      // 1. DRAW STAGE COLUMN HEADERS (Top Badges per Layer)
      stageHeadersRef.current.forEach(header => {
        const boxW = 150;
        const boxH = 28;
        const boxX = header.x - boxW / 2;
        const boxY = header.y - boxH / 2;

        ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = header.color;
        ctx.lineWidth = 1.2 / viewport.zoom;

        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 5);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 8.5px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = header.color;
        ctx.fillText(`${header.tag} (${header.count})`, header.x, header.y);

        // Subtle vertical column guide
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1 / viewport.zoom;
        ctx.beginPath();
        ctx.moveTo(header.x, -1000);
        ctx.lineTo(header.x, 1000);
        ctx.stroke();
      });

      const isZoomedOut = viewport.zoom < 0.40;

      // 1b. DRAW SUBCATEGORY CONSTELLATION ORBITAL RINGS OR GLOWING SPHERES (LOD)
      subHeadersRef.current.forEach(sub => {
        if (isZoomedOut) {
          // REAL VOLUMETRIC GLOWING PLASMA ENERGY SPHERE ON ZOOM OUT
          const time = Date.now() * 0.0025;
          const pulse = Math.sin(time + sub.x * 0.008 + sub.y * 0.008) * 0.12 + 1.0;
          const orbRadius = Math.max(16, sub.ringRadius * 0.8) * pulse;

          ctx.save();
          ctx.globalCompositeOperation = 'lighter';

          // Layer 1: Multi-stage Photonic Aura Glow
          const auraGrad = ctx.createRadialGradient(
            sub.x, sub.y, 1,
            sub.x, sub.y, orbRadius * 3.2
          );
          auraGrad.addColorStop(0, `${sub.color}ee`);
          auraGrad.addColorStop(0.25, `${sub.color}77`);
          auraGrad.addColorStop(0.65, `${sub.color}22`);
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = auraGrad;
          ctx.beginPath();
          ctx.arc(sub.x, sub.y, orbRadius * 3.2, 0, 2 * Math.PI);
          ctx.fill();

          // Layer 2: Plasma Core Sphere with Shadow Bloom
          ctx.shadowColor = sub.color;
          ctx.shadowBlur = (30 / viewport.zoom) * pulse;
          
          const coreGrad = ctx.createRadialGradient(
            sub.x - orbRadius * 0.25, sub.y - orbRadius * 0.25, 0,
            sub.x, sub.y, orbRadius
          );
          coreGrad.addColorStop(0, '#ffffff');
          coreGrad.addColorStop(0.35, `${sub.color}`);
          coreGrad.addColorStop(0.85, `${sub.color}cc`);
          coreGrad.addColorStop(1, `${sub.color}44`);

          ctx.fillStyle = coreGrad;
          ctx.beginPath();
          ctx.arc(sub.x, sub.y, orbRadius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Layer 3: Rotating Sub-orbital Energy Sparks
          const sparkCount = 3;
          const sparkDistance = orbRadius * 1.5;
          for (let sIdx = 0; sIdx < sparkCount; sIdx++) {
            const sparkAngle = time * (sIdx % 2 === 0 ? 1.5 : -1.2) + (sIdx * Math.PI * 2) / sparkCount;
            const sx = sub.x + sparkDistance * Math.cos(sparkAngle);
            const sy = sub.y + sparkDistance * Math.sin(sparkAngle);

            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = sub.color;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(sx, sy, 2 / viewport.zoom, 0, 2 * Math.PI);
            ctx.fill();
            ctx.shadowBlur = 0;
          }

          ctx.restore();

        } else {
          // DETAILED ORBITAL RING VIEW
          if (sub.ringRadius > 5) {
            ctx.strokeStyle = `${sub.color}33`; // Subtle glowing orbital orbit
            ctx.lineWidth = 1.0 / viewport.zoom;
            ctx.beginPath();
            ctx.arc(sub.x, sub.y, sub.ringRadius, 0, 2 * Math.PI);
            ctx.stroke();
          }

          // Position badge to the LEFT of the orbital ring
          const offsetLeft = sub.ringRadius > 5 ? sub.ringRadius + 12 : 12;
          const textWidth = ctx.measureText(sub.name).width;
          const padX = 7;
          const boxW = textWidth + padX * 2;
          const boxH = 15;
          const boxX = sub.x - offsetLeft - boxW;
          const boxY = sub.y - boxH / 2;

          ctx.fillStyle = 'rgba(15, 23, 42, 0.90)';
          ctx.strokeStyle = `${sub.color}aa`;
          ctx.lineWidth = 1.0 / viewport.zoom;

          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxW, boxH, 4);
          ctx.fill();
          ctx.stroke();

          ctx.font = '600 8px Inter, sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = sub.color;
          ctx.fillText(sub.name, boxX + padX, sub.y);
        }
      });

      // 2. DRAW DENSE S-CURVE BEZIER EDGES & GLOWING PARTICLES
      visualizerData.edges.forEach(edge => {
        const src = nodePositionsRef.current.get(edge.sourceId);
        const tgt = nodePositionsRef.current.get(edge.targetId);
        if (!src || !tgt) return;

        const isHighlighted = activeEdgeIds.has(edge.id);
        const isDimmed = focusNodeId && !isHighlighted;

        if (isDimmed && !isHighlighted) return;
        if (!isHighlighted && viewport.zoom < 0.35) return;

        const dx = tgt.x - src.x;
        const cp1x = src.x + dx * edgeCurvature;
        const cp1y = src.y;
        const cp2x = tgt.x - dx * edgeCurvature;
        const cp2y = tgt.y;

        const yRatio = (Math.abs(src.y) + Math.abs(tgt.y)) / 650;
        const strokeStyle = getEdgeColor(Math.min(1, yRatio), isHighlighted, !!isDimmed);

        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = isHighlighted ? 2.8 / viewport.zoom : 0.7 / viewport.zoom;

        if (isHighlighted) {
          ctx.globalCompositeOperation = 'lighter';
          ctx.shadowColor = strokeStyle;
          ctx.shadowBlur = 8;
        }

        ctx.beginPath();
        ctx.moveTo(src.x, src.y);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, tgt.x, tgt.y);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = 'source-over';

        // Animated Particle Flow along Bezier Curves
        if (!focusNodeId || isHighlighted) {
          let edgeParticles = particlesRef.current.get(edge.id);
          if (!edgeParticles) {
            edgeParticles = [
              { progress: Math.random(), speed: 0.5 + Math.random() * 0.4, size: 1.6 },
            ];
            particlesRef.current.set(edge.id, edgeParticles);
          }

          edgeParticles.forEach(p => {
            p.progress = (p.progress + p.speed * 0.005) % 1.0;
            const pos = getBezierPoint(src, { x: cp1x, y: cp1y }, { x: cp2x, y: cp2y }, tgt, p.progress);

            ctx.fillStyle = isHighlighted ? '#ffffff' : 'rgba(255, 255, 255, 0.75)';
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, isHighlighted ? p.size * 1.6 : p.size, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      });

      // 3. DRAW SINGLE-COLUMN NODES & RADIAL OUTWARD PILL LABELS
      nodePositionsRef.current.forEach(({ x, y, ringCenterX, ringCenterY, node, radius }) => {
        const isSelected = selectedNodeId === node.id;
        const isHovered = hoveredNodeId === node.id;
        const isConnected = activeNodeIds.has(node.id);
        const isDimmed = focusNodeId && !isConnected;

        const currentRadius = isSelected || isHovered ? radius * 1.8 : radius;

        if (isSelected || isHovered) {
          ctx.strokeStyle = isSelected ? '#38bdf8' : '#34d399';
          ctx.lineWidth = 2.0 / viewport.zoom;
          ctx.shadowColor = ctx.strokeStyle;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(x, y, currentRadius + 3, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        const secColor = SECTION_COLORS[node.section || ''] || '#71717a';

        ctx.fillStyle = isDimmed ? 'rgba(71, 85, 105, 0.25)' : isSelected ? '#38bdf8' : isHovered ? '#34d399' : secColor;
        ctx.globalAlpha = isDimmed ? 0.2 : 0.95;

        ctx.beginPath();
        ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.lineWidth = 0.6 / viewport.zoom;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Label Rendering: Radial outward smart positioning
        const showLabel = isHovered || isSelected || viewport.zoom > 1.4;
        if (showLabel) {
          const fontSize = Math.max(9.5 / viewport.zoom, 2.5);
          ctx.font = `${isHovered || isSelected ? '600' : '400'} ${fontSize}px sans-serif`;

          const textWidth = ctx.measureText(node.label).width;
          const paddingX = 5 / viewport.zoom;
          const paddingY = 3 / viewport.zoom;

          ctx.fillStyle = isSelected ? 'rgba(14, 165, 233, 0.95)' : isHovered ? 'rgba(16, 185, 129, 0.95)' : 'rgba(9, 9, 11, 0.92)';
          ctx.strokeStyle = isSelected ? '#38bdf8' : isHovered ? '#34d399' : 'rgba(255, 255, 255, 0.15)';
          ctx.lineWidth = 1 / viewport.zoom;

          // Compute radial vector from orbital ring center to node
          const dx = x - (ringCenterX ?? x);
          const dy = y - (ringCenterY ?? y);

          let pillX: number;
          let pillY = y - fontSize / 2 - paddingY;
          const pillW = textWidth + paddingX * 2;
          const pillH = fontSize + paddingY * 2;
          let textX: number;

          if (dx < -3) {
            // Node is on the LEFT side of orbital ring -> label extends LEFT
            pillX = x - currentRadius - 5 - pillW;
            textX = pillX + paddingX;
          } else if (dx > 3) {
            // Node is on the RIGHT side of orbital ring -> label extends RIGHT
            pillX = x + currentRadius + 5;
            textX = pillX + paddingX;
          } else {
            // Node is at TOP or BOTTOM of orbital ring -> label extends UP/DOWN
            pillX = x - pillW / 2;
            if (dy < 0) {
              pillY = y - currentRadius - 5 - pillH;
            } else {
              pillY = y + currentRadius + 5;
            }
            textX = pillX + paddingX;
          }

          ctx.beginPath();
          ctx.roundRect(pillX, pillY, pillW, pillH, 4 / viewport.zoom);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isSelected || isHovered ? '#ffffff' : '#f1f5f9';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.label, textX, pillY + pillH / 2);
        }
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [viewMode, visualizerData, viewport, edgeCurvature, selectedNodeId, hoveredNodeId, lang, getEdgeColor, isClient]);

  // Mouse Interaction Handlers
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);

  const screenToWorld = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const screenX = clientX - rect.left;
    const screenY = clientY - rect.top;
    const worldX = (screenX - canvas.clientWidth / 2 - viewport.x) / viewport.zoom;
    const worldY = (screenY - canvas.clientHeight / 2 - viewport.y) / viewport.zoom;
    return { x: worldX, y: worldY };
  }, [viewport]);

  const hitTestNode = useCallback((worldX: number, worldY: number) => {
    let found: VisualizerNode | null = null;
    let minDistance = Infinity;
    nodePositionsRef.current.forEach(({ x, y, node, radius }) => {
      const hitRadius = (radius + 8) / viewport.zoom;
      const dx = worldX - x;
      const dy = worldY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= hitRadius && dist < minDistance) {
        minDistance = dist;
        found = node;
      }
    });
    return found;
  }, [viewport.zoom]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (viewMode !== 'pipeline2d') return;
    const world = screenToWorld(e.clientX, e.clientY);
    const hit = hitTestNode(world.x, world.y);
    if (hit) {
      setDraggedNodeId(hit.id);
      setSelectedNodeId(hit.id);
      navigate(`/${hit.id}`);
    } else {
      setIsDraggingCanvas(true);
      setDragStart({ x: e.clientX - viewport.x, y: e.clientY - viewport.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (viewMode !== 'pipeline2d') return;
    const world = screenToWorld(e.clientX, e.clientY);

    if (draggedNodeId) {
      const item = nodePositionsRef.current.get(draggedNodeId);
      if (item) {
        item.x = world.x;
        item.y = world.y;
      }
    } else if (isDraggingCanvas) {
      setViewport(prev => ({
        ...prev,
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      }));
    } else {
      const hit = hitTestNode(world.x, world.y);
      setHoveredNodeId(hit ? hit.id : null);
    }
  };

  const handleMouseUp = () => {
    setIsDraggingCanvas(false);
    setDraggedNodeId(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (viewMode !== 'pipeline2d') return;
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 0.88;
    setViewport(prev => ({
      ...prev,
      zoom: Math.min(Math.max(0.15, prev.zoom * factor), 3.5),
    }));
  };

  const handleResetCamera = useCallback(() => {
    if (viewMode === 'pipeline2d') {
      setViewport({ x: 0, y: 0, zoom: 0.65 });
    } else if (fgRef.current) {
      fgRef.current.zoomToFit(600, 60);
    }
  }, [viewMode]);

  const handleJumpToStage = useCallback((sIdx: number) => {
    const totalStages = LAYER_STAGES.length;
    const LAYER_SPACING = 550;
    const targetX = (sIdx - (totalStages - 1) / 2) * LAYER_SPACING;
    setViewport(prev => ({
      ...prev,
      x: -targetX * prev.zoom,
      y: 0,
    }));
  }, []);

  // Dimension tracking
  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      if (graphContainerRef.current) {
        const { offsetWidth, offsetHeight } = graphContainerRef.current;
        if (offsetWidth > 0 && offsetHeight > 0) {
          setDimensions({ width: offsetWidth, height: offsetHeight });
        }
      }
    };
    const timer = setTimeout(updateDimensions, 100);
    const observer = new ResizeObserver(updateDimensions);
    if (graphContainerRef.current) observer.observe(graphContainerRef.current);
    window.addEventListener('resize', updateDimensions);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleNodeClickOrganic = useCallback((node: any) => {
    if (node && node.id) navigate(`/${node.id}`);
  }, [navigate]);

  if (!isClient) return null;

  return (
    <div ref={graphContainerRef} className="w-full h-full flex flex-col overflow-hidden bg-black text-zinc-50">
      {/* Sleek Minimal Header Toolbar */}
      <div className="shrink-0 bg-black border-b border-zinc-900 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-0.5">
          <h3 className="text-sm font-bold text-zinc-100 tracking-tight uppercase flex items-center gap-2">
            <Network className="w-4 h-4 text-emerald-400" />
            {lang === 'en' ? 'Knowledge Core' : 'Ядро знаний'}
          </h3>
          <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono tracking-wider uppercase">
            <span>{visualizerData.nodes.length} Nodes</span>
            <span className="opacity-30">•</span>
            <span>{visualizerData.edges.length} Links</span>
          </div>
        </div>

        {/* Minimal 2D / 3D Mode Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-zinc-900 border border-zinc-800">
          <button
            onClick={() => setViewMode('pipeline2d')}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all",
              viewMode === 'pipeline2d'
                ? "bg-zinc-800 text-zinc-100 shadow-sm border border-zinc-700"
                : "text-zinc-400 hover:text-zinc-200"
            )}
            title={lang === 'en' ? '2D Studio View' : '2D Режим'}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>2D Studio</span>
          </button>

          {isDesktop && (
            <button
              onClick={() => setViewMode('force3d')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all",
                viewMode === 'force3d'
                  ? "bg-zinc-800 text-zinc-100 shadow-sm border border-zinc-700"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
              title={lang === 'en' ? '3D Space View' : '3D Режим'}
            >
              <Box className="w-3.5 h-3.5 text-purple-400" />
              <span>3D Space</span>
            </button>
          )}
        </div>

        {/* Minimal Toolbar */}
        <div className="shrink-0 flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all shadow-sm flex items-center gap-2"
            title={lang === 'en' ? 'Search Articles' : 'Поиск статей'}
          >
            <Search className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase hidden md:inline">{lang === 'en' ? 'Search' : 'Поиск'}</span>
          </button>

          <button
            onClick={handleResetCamera}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all shadow-sm"
            title={lang === 'en' ? 'Reset Camera' : 'Сброс камеры'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Graph Display Area */}
      <div className="flex-1 relative min-h-0 bg-black">
        {/* Floating Stage Quick-Jump Navigation Bar */}
        {viewMode === 'pipeline2d' && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 shadow-2xl backdrop-blur-md max-w-[92vw] overflow-x-auto scrollbar-none">
            {LAYER_STAGES.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => handleJumpToStage(idx)}
                className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold tracking-tight whitespace-nowrap transition-all hover:scale-105 active:scale-95 border border-transparent hover:border-zinc-700"
                style={{
                  color: st.color,
                  backgroundColor: `${st.color}15`,
                }}
                title={lang === 'en' ? st.nameEn : st.nameRu}
              >
                {st.tag.split(':')[0]}
              </button>
            ))}
          </div>
        )}

        {/* Hover / Active Node Inspector Card */}
        {(hoveredNodeId || selectedNodeId) && (() => {
          const targetId = hoveredNodeId || selectedNodeId;
          const posItem = nodePositionsRef.current.get(targetId!);
          if (!posItem) return null;
          const node = posItem.node;
          const degree = posItem.degree;

          return (
            <div className="absolute bottom-6 left-6 z-30 max-w-sm w-80 p-4 rounded-2xl bg-zinc-900/95 border border-zinc-800 text-zinc-100 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {node.section || 'Wiki'}
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {degree} links
                </span>
              </div>

              <h4 className="text-sm font-bold leading-snug mb-1 text-zinc-50">
                {node.label}
              </h4>

              {node.subsection && (
                <p className="text-[11px] text-zinc-400 mb-3">
                  {node.subsection}
                </p>
              )}

              <button
                onClick={() => navigate(`/${node.id}`)}
                className="w-full mt-1 py-1.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>{lang === 'en' ? 'Open Article' : 'Читать статью'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })()}

        <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-3 pointer-events-none">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[9px] text-zinc-400 font-bold uppercase tracking-widest backdrop-blur-md shadow-lg pointer-events-auto">
            <div className="flex items-center gap-2"><MousePointer2 className="w-3 h-3 text-blue-400" /><span>{lang === 'en' ? 'Click to Navigate' : 'Клик для перехода'}</span></div>
            <div className="w-px h-3 bg-zinc-800" />
            <div className="flex items-center gap-2"><Maximize2 className="w-3 h-3 text-emerald-400" /><span>{lang === 'en' ? 'Drag / Wheel Zoom' : 'Драг / Масштаб'}</span></div>
          </div>
        </div>

        {viewMode === 'pipeline2d' ? (
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-grab active:cursor-grabbing block"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          />
        ) : (
          <Suspense fallback={<GraphSkeleton />}>
            {dimensions.width > 0 && dimensions.height > 0 && (
              viewMode === 'force3d' && isDesktop ? (
                <ForceGraph3DLazy
                  key={`3d-${lang}`}
                  ref={fgRef}
                  width={dimensions.width}
                  height={dimensions.height}
                  graphData={rawGraphData as any}
                  nodeLabel="name"
                  nodeThreeObject={nodeThreeObject}
                  onNodeHover={() => {}}
                  onLinkHover={() => {}}
                  linkDirectionalParticles={particleCount}
                  linkDirectionalParticleSpeed={0.004}
                  linkDirectionalParticleWidth={2}
                  linkDirectionalParticleColor={() => '#60a5fa'}
                  backgroundColor="rgba(0,0,0,0)"
                  showNavInfo={false}
                  onNodeClick={handleNodeClickOrganic}
                  linkColor={linkColor3D}
                  linkWidth={linkWidth3D}
                  enableNodeDrag={false}
                  enableNavigationControls={true}
                />
              ) : (
                <ForceGraph2DLazy
                  key={`2d-${lang}`}
                  ref={fgRef}
                  width={dimensions.width}
                  height={dimensions.height}
                  graphData={rawGraphData as any}
                  nodeLabel="name"
                  onNodeClick={handleNodeClickOrganic}
                  enableNodeDrag={true}
                />
              )
            )}
          </Suspense>
        )}
      </div>

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} lang={lang} />
    </div>
  );
};
