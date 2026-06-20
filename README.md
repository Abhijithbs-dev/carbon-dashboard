# 🍃 CarbonDash - Carbon Footprint Dashboard

## 📝 Project Description
CarbonDash is a sleek, premium, and modern React dashboard designed to help users track, simulate, and reduce their carbon footprint. Featuring a glassmorphic aesthetic, the application provides real-time calculations, interactive visualizations, scenario planning, and activity feeds. It allows users to simulate lifestyle changes in real time and immediately see the corresponding impact on their annual carbon footprint.

---

## 🌟 Feature List

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

## 🚀 Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher recommended) installed on your machine.

### Installation
1. Clone or navigate to the project directory:
   ```bash
   cd carbon-dashboard
   ```

2. Install all required dependencies:
   ```bash
   npm install
   ```

### Development Server
To launch the local development server:
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
To compile and build optimized assets for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
