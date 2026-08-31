import { Product } from "@/types";

export const productsData: Product[] = [
  {
    id: "prod-550w-mono-perc",
    slug: "550w-monocrystalline-solar-panel",
    name: "550W Tier-1 Mono PERC Solar Panel",
    modelNumber: "SP-550M-PERC",
    category: "solar-panels",
    categoryName: "Solar Panels",
    tagline: "High-yield half-cut cell technology engineered for tropical climates and low-light conditions.",
    shortDescription:
      "A premium 550 Watt Monocrystalline module featuring 144 half-cut cells, anti-reflective tempered glass, and PID resistance for residential and industrial rooftops.",
    description:
      "The 550W Tier-1 Mono PERC Solar Panel delivers exceptional performance and long-term energy yield. Engineered with multi-busbar (MBB) half-cut cell architecture, it significantly reduces internal resistance losses while boosting power output under partial shading and tropical temperature coefficients typical in Bangladesh. Built with heavy-duty anodized aluminum frames rated for 2400 Pa wind load and 5400 Pa mechanical load.",
    image: "/images/products/solar-panel-550w.webp",
    gallery: [
      "/images/products/solar-panel-550w.webp",
      "/images/products/solar-panel-550w-detail.webp",
    ],
    keySpecs: {
      capacityOrPower: "550 Watts",
      efficiency: "21.3%",
      warrantyYears: 25,
      voltage: "41.95 V (Vmp)",
      type: "Mono PERC Half-Cell",
    },
    specifications: [
      { label: "Rated Maximum Power (Pmax)", value: "550 W", group: "Electrical" },
      { label: "Module Efficiency", value: "21.3%", group: "Electrical" },
      { label: "Optimum Operating Voltage (Vmp)", value: "41.95 V", group: "Electrical" },
      { label: "Optimum Operating Current (Imp)", value: "13.12 A", group: "Electrical" },
      { label: "Open Circuit Voltage (Voc)", value: "49.80 V", group: "Electrical" },
      { label: "Short Circuit Current (Isc)", value: "13.98 A", group: "Electrical" },
      { label: "Cell Type & Count", value: "Monocrystalline Half-Cell (144 Cells)", group: "Mechanical" },
      { label: "Dimensions", value: "2278 x 1134 x 35 mm", group: "Mechanical" },
      { label: "Weight", value: "27.5 kg", group: "Mechanical" },
      { label: "Front Glass", value: "3.2mm High-Transmission ARC Tempered Glass", group: "Mechanical" },
      { label: "Frame", value: "Anodized Aluminum Alloy", group: "Mechanical" },
      { label: "Junction Box", value: "IP68 Rated with 3 Bypass Diodes", group: "Mechanical" },
      { label: "Product Warranty", value: "12-Year Material & Workmanship", group: "Warranty" },
      { label: "Linear Output Warranty", value: "25-Year Linear Power Output Warranty", group: "Warranty" },
    ],
    features: [
      {
        title: "Half-Cut Cell Architecture",
        description: "Reduces resistive power loss and enables higher generation when lower sections experience shading.",
      },
      {
        title: "Superior Temperature Coefficient",
        description: "Optimized Pmax temperature coefficient of -0.35%/°C to retain output during hot Bangladeshi summer peaks.",
      },
      {
        title: "Anti-PID & Salt-Mist Resistance",
        description: "Resistant to potential induced degradation and certified for coastal and high-humidity deployment.",
      },
    ],
    applications: [
      "Residential rooftop grid-tied and hybrid installations",
      "Commercial factory rooftop projects (RMG, textiles, warehouses)",
      "Solar-powered agricultural water pump systems",
      "Telecom tower backup generation",
    ],
    benefits: [
      "Lowers monthly grid electricity consumption significantly",
      "Qualifies for net-metering schemes with DESCO, DPDC, BREB, and NESCO",
      "High return on investment (ROI) with minimal maintenance needs",
    ],
    isFeatured: true,
    inStock: true,
    relatedProductSlugs: [
      "580w-n-type-topcon-solar-panel",
      "5kw-hybrid-solar-inverter",
      "48v-100ah-lithium-battery",
    ],
    seo: {
      metaTitle: "550W Tier-1 Mono PERC Solar Panel | SolarPower Bangladesh",
      metaDescription:
        "Explore specifications of high-efficiency 550W Tier-1 Monocrystalline solar panels in Bangladesh. 25-year performance warranty and net-metering ready.",
      keywords: [
        "550W solar panel Bangladesh",
        "Mono PERC solar module Dhaka",
        "Tier 1 solar panel price in Bangladesh",
        "rooftop solar panels Bangladesh",
      ],
    },
  },
  {
    id: "prod-580w-n-type-topcon",
    slug: "580w-n-type-topcon-solar-panel",
    name: "580W N-Type TOPCon Bifacial Solar Panel",
    modelNumber: "SP-580N-BIFACIAL",
    category: "solar-panels",
    categoryName: "Solar Panels",
    tagline: "Next-generation N-Type TOPCon bifacial technology with up to 22.5% front efficiency.",
    shortDescription:
      "Advanced dual-glass bifacial solar panel harvesting energy from both front and rear sides for maximum kWh/kWp output.",
    description:
      "The 580W N-Type TOPCon Bifacial module represents the highest standard in photovoltaic generation. Featuring zero light-induced degradation (LID), lower degradation rates over 30 years, and dual-glass construction that withstands harsh weather conditions. With up to 15-25% extra energy yield from ground albedo reflection.",
    image: "/images/products/solar-panel-580w.webp",
    gallery: [
      "/images/products/solar-panel-580w.webp",
    ],
    keySpecs: {
      capacityOrPower: "580 Watts",
      efficiency: "22.5%",
      warrantyYears: 30,
      voltage: "43.10 V (Vmp)",
      type: "N-Type TOPCon Bifacial",
    },
    specifications: [
      { label: "Rated Maximum Power (Pmax)", value: "580 W", group: "Electrical" },
      { label: "Front Efficiency", value: "22.5%", group: "Electrical" },
      { label: "Bifaciality Factor", value: "80% ± 5%", group: "Electrical" },
      { label: "Optimum Operating Voltage (Vmp)", value: "43.10 V", group: "Electrical" },
      { label: "Optimum Operating Current (Imp)", value: "13.46 A", group: "Electrical" },
      { label: "Dimensions", value: "2278 x 1134 x 30 mm", group: "Mechanical" },
      { label: "Weight", value: "31.5 kg (Dual Glass)", group: "Mechanical" },
      { label: "Linear Output Warranty", value: "30-Year Linear Power Output Warranty", group: "Warranty" },
    ],
    features: [
      {
        title: "Bifacial Power Gain",
        description: "Captures reflected light from concrete roofs or ground surfaces for additional kWh yield.",
      },
      {
        title: "N-Type TOPCon Technology",
        description: "Superior low-light response during overcast monsoon days and early morning/late afternoon hours.",
      },
    ],
    applications: [
      "Commercial & Industrial (C&I) rooftop solar plants",
      "Utility-scale ground-mount projects",
      "Solar parking canopy structures",
    ],
    benefits: [
      "Maximum energy density per square foot of roof space",
      "30-year performance guarantee with less than 0.4% annual degradation",
    ],
    isFeatured: true,
    inStock: true,
    relatedProductSlugs: [
      "550w-monocrystalline-solar-panel",
      "10kw-three-phase-hybrid-inverter",
    ],
    seo: {
      metaTitle: "580W N-Type TOPCon Bifacial Solar Panel | SolarPower Bangladesh",
      metaDescription:
        "High-performance 580W N-Type TOPCon bifacial solar module. High efficiency, dual-glass durability, and 30-year power warranty in Bangladesh.",
      keywords: [
        "580W TOPCon solar panel Bangladesh",
        "bifacial solar module Dhaka",
        "N type solar panel Bangladesh",
      ],
    },
  },
  {
    id: "prod-5kw-hybrid-inverter",
    slug: "5kw-hybrid-solar-inverter",
    name: "5kW Smart Single-Phase Hybrid Solar Inverter",
    modelNumber: "INV-5K-HYBRID-1P",
    category: "solar-inverters",
    categoryName: "Solar Inverters",
    tagline: "Intelligent energy management supporting solar, battery storage, and grid synchronization.",
    shortDescription:
      "A versatile 5kW hybrid inverter with dual MPPT trackers, pure sine wave output, and integrated mobile app monitoring for zero-downtime backup.",
    description:
      "The 5kW Hybrid Solar Inverter combines on-grid net metering export capability with off-grid battery backup security. During grid outages, it switches seamlessly in under 10 milliseconds to keep critical home and office loads operating without disruption. Supports both Lithium-ion and Lead-Acid battery banks.",
    image: "/images/products/solar-inverter-5kw.webp",
    gallery: [
      "/images/products/solar-inverter-5kw.webp",
    ],
    keySpecs: {
      capacityOrPower: "5000 Watts",
      efficiency: "97.6%",
      warrantyYears: 5,
      voltage: "230V AC / 48V DC Battery",
      type: "Single-Phase Hybrid Inverter",
    },
    specifications: [
      { label: "Rated AC Output Power", value: "5000 W", group: "Electrical" },
      { label: "Max DC Input Power", value: "6500 W", group: "Electrical" },
      { label: "Max PV Open Circuit Voltage", value: "500 V DC", group: "Electrical" },
      { label: "MPPT Operating Voltage Range", value: "120 V - 450 V DC", group: "Electrical" },
      { label: "Number of MPPT Trackers", value: "2", group: "Electrical" },
      { label: "Nominal Battery Voltage", value: "48 V DC (40V - 60V)", group: "Electrical" },
      { label: "Max Charge/Discharge Current", value: "100 A", group: "Electrical" },
      { label: "Transfer Time", value: "< 10 ms (UPS Grade)", group: "General" },
      { label: "Communication Ports", value: "RS485, CAN, Wi-Fi / 4G Dongle", group: "General" },
      { label: "Ingress Protection", value: "IP65 Rated (Outdoor & Indoor)", group: "Mechanical" },
      { label: "Warranty", value: "5-Year Manufacturer Warranty", group: "Warranty" },
    ],
    features: [
      {
        title: "Uninterrupted Power (UPS-grade)",
        description: "10ms transfer time ensures desktop computers, servers, and routers never restart during load shedding.",
      },
      {
        title: "Net-Metering Compatible",
        description: "Can export surplus solar generation back to the national grid while keeping batteries charged.",
      },
      {
        title: "Smart Wi-Fi Monitoring",
        description: "Real-time daily yield, battery state of charge, and consumption telemetry via smartphone app.",
      },
    ],
    applications: [
      "Apartments, villas, and modern residential homes",
      "Retail shops, clinics, and small branch offices",
      "Remote estates requiring continuous 24/7 power backup",
    ],
    benefits: [
      "Eliminates reliance on noisy, fuel-consuming diesel generators",
      "Maximizes solar self-consumption and cuts utility bills",
    ],
    isFeatured: true,
    inStock: true,
    relatedProductSlugs: [
      "550w-monocrystalline-solar-panel",
      "48v-100ah-lithium-battery",
    ],
    seo: {
      metaTitle: "5kW Single-Phase Hybrid Solar Inverter | SolarPower Bangladesh",
      metaDescription:
        "Buy 5kW hybrid solar inverter in Bangladesh with dual MPPT, net metering support, 48V battery interface, and Wi-Fi monitoring.",
      keywords: [
        "5kw hybrid solar inverter Bangladesh",
        "solar inverter price Dhaka",
        "hybrid inverter 48V Bangladesh",
        "net metering inverter Bangladesh",
      ],
    },
  },
  {
    id: "prod-10kw-3p-hybrid-inverter",
    slug: "10kw-three-phase-hybrid-inverter",
    name: "10kW Three-Phase Commercial Hybrid Inverter",
    modelNumber: "INV-10K-HYBRID-3P",
    category: "solar-inverters",
    categoryName: "Solar Inverters",
    tagline: "Industrial-grade three-phase hybrid inverter with unbalanced load support.",
    shortDescription:
      "Heavy-duty 10kW 3-phase hybrid inverter suitable for commercial offices, diagnostic centers, and industrial facilities with 400V grid connection.",
    description:
      "Designed for three-phase commercial installations across Bangladesh. Features 100% unbalanced phase output capability, high-voltage battery storage support for enhanced efficiency, and integrated DC disconnect switch with smart air cooling.",
    image: "/images/products/solar-inverter-10kw.webp",
    gallery: [
      "/images/products/solar-inverter-10kw.webp",
    ],
    keySpecs: {
      capacityOrPower: "10,000 Watts",
      efficiency: "98.2%",
      warrantyYears: 5,
      voltage: "400V 3-Phase / HV Battery",
      type: "Three-Phase Hybrid",
    },
    specifications: [
      { label: "Rated Output Power", value: "10,000 W (3-Phase)", group: "Electrical" },
      { label: "Max PV Input Power", value: "15,000 W", group: "Electrical" },
      { label: "MPPT Range", value: "160 V - 850 V DC", group: "Electrical" },
      { label: "Grid Nominal Voltage", value: "3L/N/PE 380V/400V", group: "Electrical" },
      { label: "Protection", value: "IP65, Anti-Islanding, Surge Type II", group: "General" },
      { label: "Warranty", value: "5-Year Standard Warranty (Extendable)", group: "Warranty" },
    ],
    features: [
      {
        title: "100% Phase Unbalance Support",
        description: "Supplies independent single-phase loads across the three phases without tripping.",
      },
      {
        title: "High Voltage Battery Port",
        description: "Higher DC bus efficiency translates to lower heat generation and higher round-trip efficiency.",
      },
    ],
    applications: [
      "Commercial office buildings & corporate headquarters",
      "Hospitals, diagnostic clinics, and laboratories",
      "Medium manufacturing units, packaging plants, and workshops",
    ],
    benefits: [
      "Substantial commercial tariff electricity bill reduction",
      "Seamless emergency backup for critical industrial machinery",
    ],
    isFeatured: false,
    inStock: true,
    relatedProductSlugs: [
      "580w-n-type-topcon-solar-panel",
      "48v-200ah-lithium-server-rack-battery",
    ],
    seo: {
      metaTitle: "10kW Three-Phase Hybrid Solar Inverter | SolarPower Bangladesh",
      metaDescription:
        "Commercial 10kW three-phase hybrid solar inverter in Bangladesh. High efficiency, 400V 3-phase grid compatibility, and smart monitoring.",
      keywords: [
        "10kw three phase solar inverter Bangladesh",
        "commercial solar inverter Dhaka",
        "3 phase hybrid inverter Bangladesh",
      ],
    },
  },
  {
    id: "prod-48v-100ah-lithium-battery",
    slug: "48v-100ah-lithium-battery",
    name: "5.12kWh 48V 100Ah LiFePO4 Lithium Battery Wall-Mount",
    modelNumber: "BAT-5.12K-WALL",
    category: "solar-batteries",
    categoryName: "Energy Storage & Batteries",
    tagline: "Safe, maintenance-free Lithium Iron Phosphate battery with 6,000+ cycle life.",
    shortDescription:
      "Wall-mounted 5.12kWh lithium battery module with integrated smart BMS, LCD display, and multi-unit parallel expansion up to 15 units.",
    description:
      "Engineered with automotive-grade LiFePO4 cells, this 48V 100Ah battery system is the modern replacement for bulky lead-acid batteries. Offers 90% usable depth of discharge (DoD), built-in intelligent Battery Management System (BMS) with thermal cut-off, overcurrent, and short-circuit protection. Guaranteed 6,000 charge cycles at 80% DoD.",
    image: "/images/products/solar-battery-100ah.webp",
    gallery: [
      "/images/products/solar-battery-100ah.webp",
    ],
    keySpecs: {
      capacityOrPower: "5.12 kWh / 100 Ah",
      efficiency: "95% Roundtrip",
      warrantyYears: 5,
      voltage: "51.2 V Nominal",
      type: "LiFePO4 (Lithium Iron Phosphate)",
    },
    specifications: [
      { label: "Nominal Energy", value: "5.12 kWh", group: "Electrical" },
      { label: "Nominal Voltage", value: "51.2 V", group: "Electrical" },
      { label: "Capacity", value: "100 Ah", group: "Electrical" },
      { label: "Cycle Life", value: "≥ 6,000 Cycles @ 80% DoD (25°C)", group: "General" },
      { label: "Max Continuous Charge/Discharge", value: "100 A (5.12 kW)", group: "Electrical" },
      { label: "Operating Temperature", value: "-10°C to 55°C", group: "General" },
      { label: "BMS Protection", value: "Over-voltage, under-voltage, over-current, short-circuit, temperature", group: "General" },
      { label: "Communication Protocol", value: "CAN / RS485 (Compatible with Growatt, Deye, SMA, Victron, etc.)", group: "General" },
      { label: "Dimensions", value: "650 x 440 x 180 mm", group: "Mechanical" },
      { label: "Weight", value: "48 kg", group: "Mechanical" },
      { label: "Warranty", value: "5-Year Performance Warranty", group: "Warranty" },
    ],
    features: [
      {
        title: "Extended 6,000+ Cycle Lifespan",
        description: "Lasts 10 to 15 years under normal daily cycling compared to only 2-3 years for traditional lead-acid batteries.",
      },
      {
        title: "Smart BMS Integration",
        description: "Direct CAN/RS485 communication with leading hybrid inverters for automated charge balancing.",
      },
      {
        title: "Zero Maintenance & Compact Form Factor",
        description: "No acid refilling, zero hazardous fume emission, and wall-mountable to save floor space.",
      },
    ],
    applications: [
      "Residential rooftop hybrid storage systems",
      "Critical workstation, server room, and telecom backup",
      "Commercial uninterrupted power supply systems",
    ],
    benefits: [
      "Fast charging: Recharges from 0 to 100% in under 2 hours",
      "High energy density in a compact, aesthetic wall-mount enclosure",
    ],
    isFeatured: true,
    inStock: true,
    relatedProductSlugs: [
      "5kw-hybrid-solar-inverter",
      "550w-monocrystalline-solar-panel",
    ],
    seo: {
      metaTitle: "5.12kWh 48V 100Ah LiFePO4 Lithium Solar Battery | SolarPower Bangladesh",
      metaDescription:
        "Premium 48V 100Ah (5.12kWh) LiFePO4 wall-mount lithium battery in Bangladesh. 6,000+ cycle life, smart BMS, and 5-year warranty.",
      keywords: [
        "lithium battery for solar Bangladesh",
        "48V 100Ah LiFePO4 battery Dhaka",
        "solar storage battery Bangladesh",
        "lithium solar battery price Bangladesh",
      ],
    },
  },
  {
    id: "prod-48v-200ah-rack-battery",
    slug: "48v-200ah-lithium-server-rack-battery",
    name: "10.24kWh 48V 200Ah Server-Rack LiFePO4 Battery",
    modelNumber: "BAT-10.24K-RACK",
    category: "solar-batteries",
    categoryName: "Energy Storage & Batteries",
    tagline: "High-capacity server-rack modular battery for scalable commercial & industrial storage.",
    shortDescription:
      "Heavy-duty 10.24kWh lithium battery pack designed for 19-inch standard server racks with master-slave communication for multi-rack scalability.",
    description:
      "The 48V 200Ah server-rack lithium battery is designed for demanding commercial, industrial, and telecom storage applications. Built with heavy-duty steel casing and front-facing terminals for rapid installation inside standard server racks. Stackable up to 160kWh total capacity.",
    image: "/images/products/solar-battery-200ah.webp",
    gallery: [
      "/images/products/solar-battery-200ah.webp",
    ],
    keySpecs: {
      capacityOrPower: "10.24 kWh / 200 Ah",
      efficiency: "96%",
      warrantyYears: 5,
      voltage: "51.2 V Nominal",
      type: "LiFePO4 Server-Rack Module",
    },
    specifications: [
      { label: "Nominal Capacity", value: "10.24 kWh (200 Ah)", group: "Electrical" },
      { label: "Nominal Voltage", value: "51.2 V", group: "Electrical" },
      { label: "Max Discharge Current", value: "150 A (Continuous)", group: "Electrical" },
      { label: "Standard 19-Inch Form Factor", value: "3U / 4U Server Rack Mount", group: "Mechanical" },
      { label: "Weight", value: "88 kg", group: "Mechanical" },
      { label: "Warranty", value: "5-Year Performance Warranty", group: "Warranty" },
    ],
    features: [
      {
        title: "Modular Rack Expansion",
        description: "Connect up to 15 units in parallel for over 150 kWh total backup capacity.",
      },
    ],
    applications: [
      "Commercial server rooms & data centers",
      "Textile and garment factories requiring clean backup",
      "Off-grid telecom base transceiver stations (BTS)",
    ],
    benefits: [
      "Highest energy density per rack unit with industrial thermal safety",
    ],
    isFeatured: false,
    inStock: true,
    relatedProductSlugs: [
      "10kw-three-phase-hybrid-inverter",
      "580w-n-type-topcon-solar-panel",
    ],
    seo: {
      metaTitle: "10.24kWh 48V 200Ah Server-Rack Lithium Battery | SolarPower Bangladesh",
      metaDescription:
        "Industrial 48V 200Ah LiFePO4 server-rack lithium battery in Bangladesh. Ideal for commercial solar backup, servers, and telecom BTS sites.",
      keywords: [
        "48V 200Ah lithium battery Bangladesh",
        "server rack solar battery Dhaka",
        "industrial energy storage Bangladesh",
      ],
    },
  },
  {
    id: "prod-60a-mppt-controller",
    slug: "60a-mppt-solar-charge-controller",
    name: "60A MPPT Intelligent Solar Charge Controller",
    modelNumber: "CC-60A-MPPT",
    category: "charge-controllers",
    categoryName: "Solar Charge Controllers",
    tagline: "High-efficiency Maximum Power Point Tracking with 99% tracking efficiency.",
    shortDescription:
      "Smart 60 Amp MPPT controller auto-sensing 12V/24V/36V/48V battery systems with backlit LCD screen and comprehensive electronic protections.",
    description:
      "The 60A MPPT Charge Controller utilizes ultra-fast Maximum Power Point Tracking technology to harvest up to 30% more power from solar arrays compared to traditional PWM controllers. Equipped with multi-stage intelligent charging to extend battery lifespan.",
    image: "/images/products/charge-controller-60a.webp",
    gallery: [
      "/images/products/charge-controller-60a.webp",
    ],
    keySpecs: {
      capacityOrPower: "60 Amps (up to 3200W PV)",
      efficiency: "99% Tracking / 98% Conversion",
      warrantyYears: 2,
      voltage: "12V/24V/36V/48V Auto",
      type: "MPPT",
    },
    specifications: [
      { label: "Rated Charge Current", value: "60 A", group: "Electrical" },
      { label: "System Voltage", value: "12V / 24V / 36V / 48V Auto Detect", group: "Electrical" },
      { label: "Max PV Input Voltage (Voc)", value: "150 V DC", group: "Electrical" },
      { label: "Max PV Input Power", value: "800W (12V) / 1600W (24V) / 3200W (48V)", group: "Electrical" },
      { label: "Display", value: "Multi-function Backlit LCD", group: "General" },
      { label: "Warranty", value: "2-Year Replacement Warranty", group: "Warranty" },
    ],
    features: [
      {
        title: "Ultra-Fast MPPT Algorithm",
        description: "Continuous tracking under rapidly changing cloud conditions to maximize daily energy collection.",
      },
    ],
    applications: [
      "Off-grid rural electrification projects",
      "Solar street lighting & surveillance systems",
      "Boat and mobile RV solar installations",
    ],
    benefits: [
      "Extends battery service life through programmable multi-stage charging",
    ],
    isFeatured: false,
    inStock: true,
    relatedProductSlugs: [
      "550w-monocrystalline-solar-panel",
    ],
    seo: {
      metaTitle: "60A MPPT Solar Charge Controller | SolarPower Bangladesh",
      metaDescription:
        "High efficiency 60A MPPT solar charge controller in Bangladesh. Auto 12V/24V/36V/48V detection with LCD display.",
      keywords: [
        "MPPT solar charge controller Bangladesh",
        "60A solar controller Dhaka",
        "solar charge controller price Bangladesh",
      ],
    },
  },
  {
    id: "prod-hdg-mounting-structure",
    slug: "hot-dip-galvanized-rooftop-mounting-structure",
    name: "Hot-Dip Galvanized Rooftop Solar Mounting Structure",
    modelNumber: "STR-HDG-ROOF-4P",
    category: "mounting-structures",
    categoryName: "Mounting & Racking Systems",
    tagline: "Cyclone-resistant heavy-gauge mounting frames with 80+ micron zinc coating.",
    shortDescription:
      "Engineered HDG steel & aluminum mounting system designed for flat concrete and tin-shed roofs with 150 km/h wind load rating.",
    description:
      "Custom-engineered mounting structures fabricated from high-grade structural steel and coated with 80+ microns of hot-dip galvanization to resist rust in Bangladesh's humid climate. Fastened with SS304 stainless steel hardware to ensure 25+ years of structural integrity.",
    image: "/images/products/solar-mounting-structure.webp",
    gallery: [
      "/images/products/solar-mounting-structure.webp",
    ],
    keySpecs: {
      capacityOrPower: "Custom modular (2/4/6/8 panel configs)",
      warrantyYears: 15,
      type: "Hot-Dip Galvanized & Anodized AL",
    },
    specifications: [
      { label: "Material", value: "Q235B Steel HDG & AL6005-T5 Aluminum", group: "Mechanical" },
      { label: "Galvanization Thickness", value: "≥ 80 microns (ASTM A123)", group: "Mechanical" },
      { label: "Wind Load Rating", value: "Up to 150 km/h (Bangladesh Wind Zone Compliant)", group: "Mechanical" },
      { label: "Tilt Angle", value: "15° to 25° (Optimized for Bangladesh Latitude)", group: "Mechanical" },
      { label: "Hardware & Fasteners", value: "SUS 304 Stainless Steel", group: "Mechanical" },
      { label: "Structural Warranty", value: "15-Year Anti-Corrosion Guarantee", group: "Warranty" },
    ],
    features: [
      {
        title: "Wind & Cyclone Engineered",
        description: "Validated for local wind speed zones as per BNBC (Bangladesh National Building Code).",
      },
    ],
    applications: [
      "RCC flat concrete rooftops",
      "Industrial corrugated metal/tin shed roofs",
      "Elevated rooftop solar frames with space utilization underneath",
    ],
    benefits: [
      "Guarantees waterproof roof mounting without risking structural leaks",
    ],
    isFeatured: false,
    inStock: true,
    relatedProductSlugs: [
      "550w-monocrystalline-solar-panel",
      "580w-n-type-topcon-solar-panel",
    ],
    seo: {
      metaTitle: "Rooftop Solar Mounting Structures in Bangladesh | SolarPower Bangladesh",
      metaDescription:
        "Durable Hot-Dip Galvanized (HDG) and aluminum solar panel mounting frames in Bangladesh. 150 km/h wind resistant and 15-year warranty.",
      keywords: [
        "solar mounting structure Bangladesh",
        "HDG solar frame Dhaka",
        "solar panel stand price in Bangladesh",
      ],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return productsData.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product): Product[] {
  if (!product.relatedProductSlugs || product.relatedProductSlugs.length === 0) {
    return productsData
      .filter((p) => p.id !== product.id && p.category === product.category)
      .slice(0, 3);
  }
  return productsData.filter((p) => product.relatedProductSlugs?.includes(p.slug));
}
