const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/products',
  'public/images/services',
  'public/images/blog',
  'public/images/company',
  'public/images/banners',
  'public/images/icons'
];

dirs.forEach(d => {
  const fullPath = path.join(__dirname, '..', d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

function createSvgAsset(title, category, iconType, bgGradient = ['#0f172a', '#1e293b']) {
  return `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}" />
      <stop offset="100%" stop-color="${bgGradient[1]}" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="50%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#bg)" />
  <rect width="800" height="600" fill="url(#grid)" />
  
  <!-- Subtle Solar Grid Graphic -->
  <g opacity="0.15" stroke="#38bdf8" stroke-width="1.5" fill="none">
    <polygon points="200,180 600,180 680,380 120,380" />
    <line x1="200" y1="180" x2="120" y2="380" />
    <line x1="300" y1="180" x2="260" y2="380" />
    <line x1="400" y1="180" x2="400" y2="380" />
    <line x1="500" y1="180" x2="540" y2="380" />
    <line x1="600" y1="180" x2="680" y2="380" />
    <line x1="160" y1="280" x2="640" y2="280" />
  </g>

  <!-- Central Badge -->
  <rect x="150" y="220" width="500" height="180" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.5" />
  
  <text x="400" y="270" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#38bdf8" letter-spacing="2">${category.toUpperCase()}</text>
  <text x="400" y="315" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#ffffff">${title}</text>
  
  <!-- Accent Line -->
  <rect x="360" y="345" width="80" height="4" rx="2" fill="url(#accent)" />
  
  <!-- Solar Brand watermark -->
  <text x="400" y="550" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b" letter-spacing="1">SOLARPOWER BANGLADESH • PREMIUM ENERGY</text>
</svg>`;
}

const assets = [
  // Products
  { path: 'public/images/products/solar-panel-550w.webp', title: '550W Tier-1 Mono PERC Panel', cat: 'Solar Panels' },
  { path: 'public/images/products/solar-panel-550w-detail.webp', title: '550W Half-Cut Cell Architecture', cat: 'Technical Detail' },
  { path: 'public/images/products/solar-panel-580w.webp', title: '580W N-Type TOPCon Bifacial', cat: 'Solar Panels' },
  { path: 'public/images/products/solar-inverter-5kw.webp', title: '5kW Smart Hybrid Inverter', cat: 'Solar Inverters' },
  { path: 'public/images/products/solar-inverter-10kw.webp', title: '10kW 3-Phase Hybrid Inverter', cat: 'Solar Inverters' },
  { path: 'public/images/products/solar-battery-100ah.webp', title: '5.12kWh 48V LiFePO4 Lithium Battery', cat: 'Energy Storage' },
  { path: 'public/images/products/solar-battery-200ah.webp', title: '10.24kWh Server-Rack LiFePO4 Battery', cat: 'Energy Storage' },
  { path: 'public/images/products/charge-controller-60a.webp', title: '60A MPPT Solar Charge Controller', cat: 'Charge Controllers' },
  { path: 'public/images/products/solar-mounting-structure.webp', title: 'HDG Rooftop Mounting Structure', cat: 'Mounting Systems' },
  
  // Services
  { path: 'public/images/services/residential-solar-installation.webp', title: 'Residential Rooftop Solar Solutions', cat: 'Home Solar EPC' },
  { path: 'public/images/services/commercial-solar-plant.webp', title: 'Commercial & Industrial Solar Plants', cat: 'Industrial EPC' },
  { path: 'public/images/services/net-metering-consultation.webp', title: 'Solar Net Metering & Utility Approvals', cat: 'Grid Integration' },
  { path: 'public/images/services/solar-maintenance.webp', title: 'Solar Maintenance, Cleaning & Audits', cat: 'O&M Services' },
  { path: 'public/images/services/solar-irrigation-pump.webp', title: 'Solar Irrigation & Agricultural Systems', cat: 'Agro Solar' },
  
  // Blog
  { path: 'public/images/blog/on-grid-vs-off-grid-bangladesh.webp', title: 'On-Grid vs Off-Grid vs Hybrid Solar', cat: 'Solar Guide' },
  { path: 'public/images/blog/solar-net-metering-bangladesh.webp', title: 'How Solar Net Metering Works in Bangladesh', cat: 'Policy & Savings' },
  { path: 'public/images/blog/solar-panel-sizing-home.webp', title: 'How Many Solar Panels for Home?', cat: 'Sizing Guide' },
  { path: 'public/images/blog/lithium-vs-tubular-solar-battery.webp', title: 'LiFePO4 Lithium vs Tubular Battery', cat: 'Battery Tech' },
  { path: 'public/images/blog/industrial-rooftop-solar-bangladesh.webp', title: 'Commercial Solar for RMG & Factories', cat: 'Industrial Solar' },
  { path: 'public/images/blog/solar-inverter-guide-bangladesh.webp', title: 'Solar Inverter Buying Guide Bangladesh', cat: 'Inverter Tech' },
  { path: 'public/images/blog/solar-maintenance-guide-bangladesh.webp', title: 'Solar Panel Maintenance & Cleaning Guide', cat: 'Maintenance' },
  { path: 'public/images/blog/common-solar-mistakes-bangladesh.webp', title: '7 Common Solar Mistakes to Avoid', cat: 'Installation Tips' },
  
  // Banners & Company
  { path: 'public/images/banners/hero-solar-banner.webp', title: 'Clean, Uninterrupted Solar Energy for Bangladesh', cat: 'Engineered Solar Solutions' },
  { path: 'public/images/company/office-bangladesh.webp', title: 'SolarPower Bangladesh Engineering HQ', cat: 'Dhaka Headquarters' }
];

assets.forEach(a => {
  const filePath = path.join(__dirname, '..', a.path);
  const svgContent = createSvgAsset(a.title, a.cat, 'solar');
  fs.writeFileSync(filePath, svgContent, 'utf8');
});

console.log('Successfully generated', assets.length, 'image assets.');
