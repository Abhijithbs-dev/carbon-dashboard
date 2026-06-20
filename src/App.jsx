import { useState, useMemo } from 'react'
import { Leaf } from 'lucide-react'
import SandboxSimulator from './components/SandboxSimulator'
import EmissionsChart from './components/EmissionsChart'
import TransactionFeed from './components/TransactionFeed'
import ActionHub from './components/ActionHub'
import './index.css'

// Base fixed emissions (goods, services, public infrastructure)
const BASE_EMISSIONS_MT = 5.3;

function App() {
  // Simulator State
  const [carMiles, setCarMiles] = useState(100); // miles/week
  const [meatMeals, setMeatMeals] = useState(5); // meals/week
  const [energyTier, setEnergyTier] = useState(2); // 1=Low, 2=Medium, 3=High
  const [flights, setFlights] = useState(1); // flights/year

  // Action Hub Toggles State
  const [actions, setActions] = useState({
    evSwitch: false,
    plantBased: false,
    greenEnergy: false
  });

  // Derived Calculations
  const breakdown = useMemo(() => {
    // Car: 0.4 kg/mile normally. EV reduces this by 70% (0.12 kg/mile)
    const transportEmissionRate = actions.evSwitch ? 0.12 : 0.4;
    const transportCO2 = (carMiles * 52 * transportEmissionRate) / 1000; // in MT

    // Diet: 2 kg/meal. Plant based reduces meat meals effectively to 0.
    const effectiveMeatMeals = actions.plantBased ? 0 : meatMeals;
    const dietCO2 = (effectiveMeatMeals * 52 * 2) / 1000;

    // Energy: Low=2, Med=4, High=6. Green energy reduces by 50%
    const baseEnergyCO2 = energyTier * 2;
    const energyCO2 = actions.greenEnergy ? baseEnergyCO2 * 0.5 : baseEnergyCO2;

    // Flights: 0.5 MT per short haul
    const flightsCO2 = flights * 0.5;

    return {
      transport: transportCO2,
      diet: dietCO2,
      energy: energyCO2,
      flights: flightsCO2,
      base: BASE_EMISSIONS_MT
    };
  }, [carMiles, meatMeals, energyTier, flights, actions]);

  const totalEmissions = Object.values(breakdown).reduce((a, b) => a + b, 0);
  const targetEmissions = 8.0;

  const toggleAction = (key) => {
    setActions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <Leaf size={32} />
          <span>CarbonDash</span>
        </div>
        <div className="user-profile flex items-center gap-2">
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg-color)' }}>
            US
          </div>
        </div>
      </header>

      <main className="dashboard-grid">
        {/* Left Section: Simulator & Chart */}
        <div className="col-8 flex flex-col gap-4">
          <SandboxSimulator 
            total={totalEmissions} 
            target={targetEmissions}
            carMiles={carMiles} setCarMiles={setCarMiles}
            meatMeals={meatMeals} setMeatMeals={setMeatMeals}
            energyTier={energyTier} setEnergyTier={setEnergyTier}
            flights={flights} setFlights={setFlights}
          />
          
          <div className="glass-card">
            <h2 className="title">Emissions Breakdown</h2>
            <EmissionsChart breakdown={breakdown} />
          </div>
        </div>

        {/* Right Sidebar: Feed & Actions */}
        <div className="col-4 flex flex-col gap-4">
          <ActionHub actions={actions} toggleAction={toggleAction} />
          <TransactionFeed />
        </div>
      </main>
    </div>
  )
}

export default App
