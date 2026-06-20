import React from 'react';
import { Zap, LeafyGreen, Sun, Trophy } from 'lucide-react';

export default function ActionHub({ actions, toggleAction }) {
  // Mock points calculation
  const points = (actions.evSwitch ? 500 : 0) + (actions.plantBased ? 300 : 0) + (actions.greenEnergy ? 400 : 0);

  return (
    <div className="glass-card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="title" style={{ marginBottom: 0 }}>Action Hub</h2>
        <div className="flex items-center gap-2" style={{ background: 'rgba(251, 146, 60, 0.1)', color: 'var(--accent-warning)', padding: '6px 12px', borderRadius: 20, fontWeight: 'bold' }}>
          <Trophy size={16} />
          {points} pts
        </div>
      </div>
      <p className="subtitle mb-4">Toggle scenarios to see your potential impact.</p>

      <div className="flex flex-col gap-4">
        <ActionToggle 
          title="Switch to EV" 
          subtitle="Reduces driving footprint by ~70%" 
          icon={Zap} 
          iconColor="var(--cat-transport)"
          active={actions.evSwitch} 
          onToggle={() => toggleAction('evSwitch')} 
        />
        <ActionToggle 
          title="Plant-Based Week" 
          subtitle="Cut out meat for 7 days" 
          icon={LeafyGreen} 
          iconColor="var(--cat-diet)"
          active={actions.plantBased} 
          onToggle={() => toggleAction('plantBased')} 
        />
        <ActionToggle 
          title="Green Energy Grid" 
          subtitle="Switch to renewable home energy" 
          icon={Sun} 
          iconColor="var(--cat-energy)"
          active={actions.greenEnergy} 
          onToggle={() => toggleAction('greenEnergy')} 
        />
      </div>
    </div>
  );
}

function ActionToggle({ title, subtitle, icon: Icon, iconColor, active, onToggle }) {
  return (
    <div className="flex justify-between items-center" style={{ background: 'var(--bg-color)', padding: 16, borderRadius: 12, border: active ? `1px solid ${iconColor}` : '1px solid transparent', transition: 'all 0.3s' }}>
      <div className="flex items-center gap-3">
        <div style={{ color: active ? iconColor : 'var(--text-secondary)' }}>
          <Icon size={24} />
        </div>
        <div>
          <div style={{ fontWeight: 600, color: active ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{title}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{subtitle}</div>
        </div>
      </div>
      <label className="toggle-switch">
        <input type="checkbox" checked={active} onChange={onToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
