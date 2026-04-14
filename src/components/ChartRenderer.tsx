import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

export const ChartRenderer = ({ config }: { config: any }) => {
  if (!config || !config.data || !config.lines) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center text-sm text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded-xl my-6">
        Missing chart data or configuration.
      </div>
    );
  }

  const { data, lines, xAxis, chartType = 'area' } = config;

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center text-sm text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded-xl my-6">
        No data available to display.
      </div>
    );
  }

  // Find min/max for better Y axis scaling safely
  const allValues = data.flatMap((d: any) => 
    lines.map((l: any) => d[l.dataKey]).filter((v: any) => typeof v === 'number' && !isNaN(v))
  );
  
  const minVal = allValues.length > 0 ? Math.min(...allValues) : 0;
  const maxVal = allValues.length > 0 ? Math.max(...allValues) : 100;
  const range = maxVal - minVal;
  const padding = range === 0 ? 10 : range * 0.15;
  const yDomain = [minVal - padding, maxVal + padding];

  const commonProps = {
    stroke: "#71717a",
    fontSize: 11,
    tickLine: false,
    axisLine: false,
  };

  const tooltipStyle = { 
    backgroundColor: 'rgba(9, 9, 11, 0.95)', 
    borderColor: '#27272a', 
    color: '#f4f4f5', 
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '8px 12px'
  };

  const renderChart = () => {
    switch(chartType) {
      case 'bar':
        return (
          <BarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.1} vertical={false} />
            <XAxis dataKey={xAxis} {...commonProps} dy={10} minTickGap={30} tick={{ fontSize: 11 }} interval="preserveStartEnd" />
            <YAxis {...commonProps} dx={-10} domain={yDomain} tickFormatter={(v) => v.toFixed(1)} tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: '#e4e4e7', fontSize: '12px' }} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <Legend verticalAlign="top" align="right" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#a1a1aa' }} />
            {lines.map((line: any, i: number) => (
              <Bar key={i} dataKey={line.dataKey} fill={line.stroke || "#3b82f6"} name={line.name} radius={[4, 4, 0, 0]} />
            ))}
          </BarChart>
        );
      
      case 'scatter':
        return (
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.1} />
            <XAxis type="number" dataKey={xAxis} {...commonProps} name={xAxis} />
            <YAxis type="number" dataKey={lines[0]?.dataKey} {...commonProps} name={lines[0]?.name} domain={yDomain} />
            <ZAxis type="number" range={[64, 144]} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ strokeDasharray: '3 3' }} />
            <Legend verticalAlign="top" align="right" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#a1a1aa' }} />
            {lines.map((line: any, i: number) => (
              <Scatter key={i} name={line.name} data={data} fill={line.stroke || "#3b82f6"} />
            ))}
          </ScatterChart>
        );

      case 'line':
        return (
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.1} vertical={false} />
            <XAxis dataKey={xAxis} {...commonProps} dy={10} minTickGap={30} />
            <YAxis {...commonProps} dx={-10} domain={yDomain} tickFormatter={(v) => v.toFixed(1)} />
            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: '#e4e4e7', fontSize: '12px' }} cursor={{ stroke: '#3f3f46' }} />
            <Legend verticalAlign="top" align="right" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#a1a1aa' }} />
            {lines.map((line: any, i: number) => (
              <Line key={i} type="monotone" dataKey={line.dataKey} stroke={line.stroke || "#3b82f6"} name={line.name} strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
            ))}
          </LineChart>
        );

      default: // area
        return (
          <AreaChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
            <defs>
              {lines.map((line: any, i: number) => (
                <linearGradient key={`gradient-${i}`} id={`color-${line.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={line.stroke || "#3b82f6"} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={line.stroke || "#3b82f6"} stopOpacity={0}/>
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.1} vertical={false} />
            <XAxis dataKey={xAxis} {...commonProps} dy={10} minTickGap={30} />
            <YAxis {...commonProps} dx={-10} domain={yDomain} tickFormatter={(v) => v.toFixed(1)} />
            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: '#e4e4e7', fontSize: '12px' }} />
            <Legend verticalAlign="top" align="right" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#a1a1aa' }} />
            {lines.map((line: any, i: number) => (
              <Area key={i} type="monotone" dataKey={line.dataKey} stroke={line.stroke || "#3b82f6"} fillOpacity={1} fill={`url(#color-${line.dataKey})`} name={line.name} strokeWidth={2.5} />
            ))}
          </AreaChart>
        );
    }
  };

  return (
    <div className="w-full h-[240px] sm:h-[350px] my-10 p-6 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl shadow-sm backdrop-blur-sm">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};
