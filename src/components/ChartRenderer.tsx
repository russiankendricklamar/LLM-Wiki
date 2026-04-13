import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export const ChartRenderer = ({ config }: { config: any }) => {
  if (!config || !config.type) return null;

  const { type, data, lines, xAxis } = config;

  if (type === 'line') {
    return (
      <div className="w-full h-[400px] my-8 p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.2} vertical={false} />
            <XAxis 
              dataKey={xAxis} 
              stroke="#a1a1aa" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              dy={10}
            />
            <YAxis 
              stroke="#a1a1aa" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              dx={-10}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'rgba(24, 24, 27, 0.9)', 
                borderColor: '#3f3f46', 
                color: '#f4f4f5', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              itemStyle={{ color: '#e4e4e7' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            {lines?.map((line: any, i: number) => (
              <Line
                key={i}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.stroke || "#3b82f6"}
                name={line.name}
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: 'var(--background)' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="p-4 my-6 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
      Unsupported chart type: {type}
    </div>
  );
};
