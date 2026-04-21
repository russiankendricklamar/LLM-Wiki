import React, { useState, useMemo, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, AreaChart, Area
} from 'recharts';
import { Play, RotateCcw, Activity, TrendingUp, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SimulationProps {
  type: string;
  config?: any;
}

// --- Kelly Criterion Simulation ---
const KellySimulation = () => {
  const [winProb, setWinProb] = useState(0.6);
  const [winLossRatio, setWinLossRatio] = useState(1.0);
  const [leverage, setLeverage] = useState(0.2);
  const [history, setHistory] = useState<any[]>([]);

  const kellyOptimal = useMemo(() => {
    return Math.max(0, (winProb * (winLossRatio + 1) - 1) / winLossRatio);
  }, [winProb, winLossRatio]);

  const runSim = () => {
    let capital = 100;
    const newHistory = [{ step: 0, capital }];
    for (let i = 1; i <= 50; i++) {
      const win = Math.random() < winProb;
      const bet = capital * leverage;
      if (win) {
        capital += bet * winLossRatio;
      } else {
        capital -= bet;
      }
      newHistory.push({ step: i, capital: Math.max(0.1, capital) });
    }
    setHistory(newHistory);
  };

  useEffect(() => { runSim(); }, []);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 my-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-5 h-5 text-emerald-500" />
        <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Kelly Criterion Simulator</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-500 uppercase">Win Probability: {(winProb * 100).toFixed(0)}%</label>
          <input 
            type="range" min="0.1" max="0.9" step="0.05" value={winProb} 
            onChange={(e) => setWinProb(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-500 uppercase">Payout Ratio: {winLossRatio}:1</label>
          <input 
            type="range" min="0.5" max="5" step="0.1" value={winLossRatio} 
            onChange={(e) => setWinLossRatio(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-500 uppercase">Bet Size: {(leverage * 100).toFixed(0)}%</label>
          <input 
            type="range" min="0.01" max="1.0" step="0.01" value={leverage} 
            onChange={(e) => setLeverage(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      <div className="h-64 w-full mb-6 bg-white dark:bg-zinc-950 rounded-lg p-2 border border-zinc-100 dark:border-zinc-800">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} opacity={0.1} />
            <XAxis dataKey="step" hide />
            <YAxis scale="log" domain={['auto', 'auto']} hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', fontSize: '12px' }}
              itemStyle={{ color: '#10b981' }}
            />
            <Line type="monotone" dataKey="capital" stroke="#10b981" strokeWidth={2} dot={false} animationDuration={500} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button onClick={runSim} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors">
            <Play className="w-4 h-4" /> Run Trial
          </button>
          <button onClick={() => setLeverage(kellyOptimal)} className="flex items-center gap-2 px-4 py-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm font-medium transition-colors">
            Set to Kelly ({(kellyOptimal * 100).toFixed(1)}%)
          </button>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Theoretical Optimal</p>
          <p className="text-lg font-bold text-emerald-500">{(kellyOptimal * 100).toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
};

// --- SDE / Brownian Motion Simulation ---
const SDESimulation = () => {
  const [vol, setVol] = useState(0.2);
  const [drift, setDrift] = useState(0.05);
  const [paths, setPaths] = useState<any[]>([]);

  const generatePaths = () => {
    const numSteps = 100;
    const dt = 1/252;
    const allPaths: any[] = [];
    
    for (let p = 0; p < 5; p++) {
      let price = 100;
      const pathData = [{ step: 0, [`p${p}`]: price }];
      for (let i = 1; i <= numSteps; i++) {
        const rand = (Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() - 3) / 1.732; // Approx Normal
        price = price * Math.exp((drift - 0.5 * vol**2) * dt + vol * Math.sqrt(dt) * rand);
        pathData.push({ step: i, [`p${p}`]: price });
      }
      allPaths.push(pathData);
    }

    // Merge paths for recharts
    const merged = [];
    for (let i = 0; i <= numSteps; i++) {
      const entry: any = { step: i };
      allPaths.forEach((p, idx) => {
        entry[`p${idx}`] = p[i][`p${idx}`];
      });
      merged.push(entry);
    }
    setPaths(merged);
  };

  useEffect(() => { generatePaths(); }, []);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 my-8">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="w-5 h-5 text-blue-500" />
        <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">GBM Path Simulator</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-500 uppercase">Annual Volatility: {(vol * 100).toFixed(0)}%</label>
          <input 
            type="range" min="0.01" max="1.0" step="0.05" value={vol} 
            onChange={(e) => setVol(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-500 uppercase">Expected Drift: {(drift * 100).toFixed(0)}%</label>
          <input 
            type="range" min="-0.5" max="0.5" step="0.05" value={drift} 
            onChange={(e) => setDrift(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      <div className="h-64 w-full mb-6 bg-white dark:bg-zinc-950 rounded-lg p-2 border border-zinc-100 dark:border-zinc-800">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={paths}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} opacity={0.1} />
            <XAxis dataKey="step" hide />
            <YAxis hide domain={['auto', 'auto']} />
            <Line dataKey="p0" stroke="#3b82f6" dot={false} isAnimationActive={false} />
            <Line dataKey="p1" stroke="#3b82f6" dot={false} strokeOpacity={0.4} isAnimationActive={false} />
            <Line dataKey="p2" stroke="#3b82f6" dot={false} strokeOpacity={0.4} isAnimationActive={false} />
            <Line dataKey="p3" stroke="#3b82f6" dot={false} strokeOpacity={0.4} isAnimationActive={false} />
            <Line dataKey="p4" stroke="#3b82f6" dot={false} strokeOpacity={0.4} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button onClick={generatePaths} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
        <RotateCcw className="w-4 h-4" /> Regenerate Paths
      </button>
    </div>
  );
};

export const SimulationRenderer: React.FC<SimulationRendererProps> = ({ type, config }) => {
  switch (type) {
    case 'kelly':
      return <KellySimulation />;
    case 'sde':
      return <SDESimulation />;
    default:
      return (
        <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-sm text-zinc-500">
          Simulation type "{type}" not implemented.
        </div>
      );
  }
};

interface SimulationRendererProps {
  type: string;
  config?: any;
}
