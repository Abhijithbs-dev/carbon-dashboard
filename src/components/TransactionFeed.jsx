import React from 'react';
import { Fuel, Plane, ShoppingBag, Coffee } from 'lucide-react';

const TRANSACTIONS = [
  { id: 1, merchant: "Shell Gas Station", amount: "$45.00", carbon: "+40kg CO2", icon: Fuel, color: "var(--cat-transport)" },
  { id: 2, merchant: "Delta Airlines", amount: "$350.00", carbon: "+250kg CO2", icon: Plane, color: "var(--cat-flights)" },
  { id: 3, merchant: "Whole Foods Market", amount: "$120.00", carbon: "+15kg CO2", icon: ShoppingBag, color: "var(--cat-diet)" },
  { id: 4, merchant: "Local Coffee Shop", amount: "$4.50", carbon: "+1kg CO2", icon: Coffee, color: "var(--accent-warning)" },
  { id: 5, merchant: "Uber Rideshare", amount: "$24.00", carbon: "+8kg CO2", icon: Fuel, color: "var(--cat-transport)" },
];

export default function TransactionFeed() {
  return (
    <div className="glass-card">
      <h2 className="title" style={{ marginBottom: 4 }}>Recent Activity</h2>
      <p className="subtitle mb-4">Auto-tracked from your linked accounts.</p>
      
      <div className="flex flex-col gap-4">
        {TRANSACTIONS.map(tx => {
          const Icon = tx.icon;
          return (
            <div key={tx.id} className="flex justify-between items-center" style={{ paddingBottom: 12, borderBottom: '1px solid var(--card-border)' }}>
              <div className="flex items-center gap-4">
                <div style={{ background: 'var(--bg-color)', padding: 10, borderRadius: 12, color: tx.color }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{tx.merchant}</div>
                  <div className="subtitle">{tx.amount}</div>
                </div>
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'right' }}>
                {tx.carbon}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
