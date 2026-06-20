# 🍃 CarbonDash - Carbon Footprint Dashboard

CarbonDash is a sleek, premium, and modern React dashboard designed to help users track, simulate, and reduce their carbon footprint. Featuring a glassmorphic aesthetic, the application provides real-time calculations, interactive visualizations, scenario planning, and activity feeds.

---

## 🌟 Key Features

- **⚡ Live Sandbox Simulator**: Interactive range controls to adjust daily and weekly habits (Car travel, meat consumption, home energy tier, and annual flights) and see the instant recalculation of your annual carbon emissions against a set target of **8.0 Metric Tons CO2/year**.
- **📊 Interactive Emissions Breakdown**: A clean, customized Recharts donut chart with smooth hover animations and a customized tooltip breaking down your emissions by category:
  - 🚗 **Transport**
  - 🥩 **Diet**
  - ⚡ **Energy**
  - ✈️ **Flights**
  - 🏢 **Base/Other**
- **🏆 Action Hub**: A simulation hub where you can toggle active lifestyle upgrades (e.g., switching to an EV, eating plant-based for a week, or using a green energy grid) to view potential emission reductions and earn sustainability points.
- **💸 Recent Activity Feed**: A mock auto-tracked feed displaying recent transaction values alongside their calculated carbon footprint impact (e.g., fuel purchases, flight bookings, grocery shopping, rideshares).

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Charts & Visualizations**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Custom CSS with Glassmorphism variables (defined in [index.css](file:///c:/Users/abhij/.gemini/antigravity/scratch/carbon-dashboard/src/index.css))

---

## 📂 Project Structure

```
carbon-dashboard/
├── dist/                   # Production build outputs
├── src/
│   ├── components/
│   │   ├── ActionHub.jsx          # Actions toggle and points system
│   │   ├── EmissionsChart.jsx     # Recharts Pie/Donut breakdown of emissions
│   │   ├── SandboxSimulator.jsx   # Habit sliders and target calculation
│   │   └── TransactionFeed.jsx    # Recent transactions and carbon impact
│   ├── App.jsx             # Main dashboard assembly and state calculations
│   ├── index.css           # Glassmorphism design tokens & styles
│   └── main.jsx            # React application mount point
├── index.html              # Main HTML entry point
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite React plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd carbon-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the development server:
```bash
npm run dev
```

The application will run locally, usually at `http://localhost:5173`.

### Building for Production

To build optimized production assets in the `dist` folder:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
