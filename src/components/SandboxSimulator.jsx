import React from 'react';
import { Target, ArrowDown } from 'lucide-react';

export default function SandboxSimulator({ total, target, carMiles, setCarMiles, meatMeals, setMeatMeals, energyTier, setEnergyTier, flights, setFlights }) {
  const isGoalMet = total <= target;
  
  return (
    <div className="glass-card">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="title" style={{ marginBottom: 4 }}>Live Sandbox</h2>
          <p className="subtitle">Adjust your habits to see the impact</p>
        </div>
        <div className="flex items-center gap-2" style={{ background: 'var(--bg-color)', padding: '8px 16px', borderRadius: 20, border: '1px solid var(--card-border)' }}>
          <Target size={16} className="primary-text" />
          <span className="subtitle">Target: {target.toFixed(1)} MT</span>
        </div>
      </div>

      <div className="flex flex-col items-center mb-4" style={{ padding: '32px 0' }}>
        <div className={`metric-value transition-colors ${isGoalMet ? 'success-text glow-success' : ''}`}>
          {total.toFixed(1)}
        </div>
        <div className="metric-unit">Metric Tons CO2 / Year</div>
        
        {isGoalMet && (
          <div className="flex items-center gap-2 mt-4 success-text" style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '8px 16px', borderRadius: 20 }}>
            <ArrowDown size={16} />
            <span>Target Reached!</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between mb-2">
            <label className="subtitle" style={{ color: 'var(--text-primary)' }}>Car Travel (miles/week)</label>
            <span className="subtitle">{carMiles} mi</span>
          </div>
          <input type="range" min="0" max="500" step="10" value={carMiles} onChange={(e) => setCarMiles(Number(e.target.value))} />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="subtitle" style={{ color: 'var(--text-primary)' }}>Diet (meat meals/week)</label>
            <span className="subtitle">{meatMeals} meals</span>
          </div>
          <input type="range" min="0" max="21" step="1" value={meatMeals} onChange={(e) => setMeatMeals(Number(e.target.value))} />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="subtitle" style={{ color: 'var(--text-primary)' }}>Home Energy Use</label>
            <span className="subtitle">{energyTier === 1 ? 'Low' : energyTier === 2 ? 'Med' : 'High'}</span>
          </div>
          <input type="range" min="1" max="3" step="1" value={energyTier} onChange={(e) => setEnergyTier(Number(e.target.value))} />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="subtitle" style={{ color: 'var(--text-primary)' }}>Flights (per year)</label>
            <span className="subtitle">{flights} flight(s)</span>
          </div>
          <input type="range" min="0" max="10" step="1" value={flights} onChange={(e) => setFlights(Number(e.target.value))} />
        </div>
      </div>
    </div>
  );
}
