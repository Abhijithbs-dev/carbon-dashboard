import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function EmissionsChart({ breakdown }) {
  const data = [
    { name: 'Transport', value: breakdown.transport, color: '#38bdf8' },
    { name: 'Diet', value: breakdown.diet, color: '#4ade80' },
    { name: 'Energy', value: breakdown.energy, color: '#fbbf24' },
    { name: 'Flights', value: breakdown.flights, color: '#c084fc' },
    { name: 'Base/Other', value: breakdown.base, color: '#64748b' }
  ].filter(item => item.value > 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '8px 12px', borderRadius: 8 }}>
          <p style={{ color: payload[0].payload.color, fontWeight: 'bold' }}>{payload[0].name}</p>
          <p>{payload[0].value.toFixed(2)} MT</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ height: 350, width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
            animationDuration={800}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: 20 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
