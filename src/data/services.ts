import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "serv-residential-solar",
    slug: "residential-solar-solutions",
    title: "Residential Rooftop Solar Solutions",
    shortDescription:
      "Customized on-grid, off-grid, and hybrid solar systems engineered to slash home electricity bills and provide uninterrupted power backup.",
    description:
      "Our residential solar solutions provide homeowners, duplexes, and apartment buildings across Bangladesh with clean, reliable, and cost-effective electricity. We handle end-to-end design, high-yield Tier-1 panels, smart hybrid inverters, battery storage, and utility net-metering integration so you enjoy worry-free solar energy for decades.",
    targetAudience: ["Homeowners", "Duplex owners", "Apartment complexes", "Housing societies"],
    image: "/images/services/residential-solar-installation.webp",
    iconName: "Home",
    benefits: [
      {
        title: "Up to 70-90% Lower Electricity Bills",
        description: "Generate your own electricity during peak sun hours and dramatically cut utility payments.",
      },
      {
        title: "Zero-Downtime Power Backup",
        description: "Hybrid lithium storage ensures lights, fans, refrigerators, and ACs stay powered during load shedding.",
      },
      {
        title: "Net-Metering Ready",
        description: "Export surplus daytime electricity to DESCO/DPDC/BREB/NESCO and receive bill credits.",
      },
      {
        title: "Increases Property Value",
        description: "Modern solar installations enhance property marketability and aesthetic roof utilization.",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Free Rooftop Survey & Feasibility",
        description: "Our engineers analyze your roof area, orientation, shading, and average electricity consumption.",
      },
      {
        stepNumber: 2,
        title: "Custom Engineering & Financial Proposal",
        description: "Receive a detailed 3D design simulation, equipment bill of materials, expected kWh yield, and ROI calculation.",
      },
      {
        stepNumber: 3,
        title: "Certified Installation & BOS Assembly",
        description: "Trained technicians install cyclone-rated racking, Tier-1 panels, inverters, and fire-safe DC switchgear.",
      },
      {
        stepNumber: 4,
        title: "Utility Net-Metering & Grid Commissioning",
        description: "We manage utility approvals, bi-directional meter testing, and final system energization.",
      },
      {
        stepNumber: 5,
        title: "Mobile App Handover & Ongoing Support",
        description: "We set up live mobile monitoring and provide periodic performance health checks.",
      },
    ],
    deliverables: [
      "Tier-1 Monocrystalline PV modules with 25-year warranty",
      "Smart Hybrid Inverter with Wi-Fi telemetry",
      "Cyclone-resistant HDG steel/aluminum mounting racks",
      "TUV-certified DC solar cables, SPD surge protectors, and circuit breakers",
      "Utility bi-directional net-metering documentation & liaison",
      "1-Year free comprehensive maintenance service package",
    ],
    suitableFor: [
      "Duplexes & Independent Houses",
      "Residential Apartment Building Rooftops",
      "Rural Villas & Holiday Homes",
    ],
    isFeatured: true,
    seo: {
      metaTitle: "Residential Rooftop Solar Solutions in Bangladesh | SolarPower Bangladesh",
      metaDescription:
        "Engineered residential solar systems in Dhaka and across Bangladesh. Reduce electricity bills and enjoy seamless battery backup with net-metering.",
      keywords: [
        "residential solar system Bangladesh",
        "home solar panel installation Dhaka",
        "rooftop solar for home Bangladesh",
        "solar net metering residential Dhaka",
      ],
    },
  },
  {
    id: "serv-commercial-industrial",
    slug: "commercial-industrial-solar-solutions",
    title: "Commercial & Industrial (C&I) Solar Plants",
    shortDescription:
      "High-capacity rooftop and ground-mounted solar plants for RMG factories, textile mills, warehouses, and commercial establishments.",
    description:
      "Designed specifically for Bangladesh's manufacturing and commercial sectors facing rising electricity tariffs and ESG compliance requirements. Our industrial solar EPC services deliver megawatt-scale rooftop and ground installations that slash operational expenses, boost profitability, and achieve international green factory certifications (LEED).",
    targetAudience: [
      "RMG & Garment Factories",
      "Textile & Spinning Mills",
      "Pharmaceuticals & FMCG",
      "Warehouses & Cold Storage",
      "Corporate Towers & Shopping Centers",
    ],
    image: "/images/services/commercial-solar-plant.webp",
    iconName: "Building2",
    benefits: [
      {
        title: "Significant Levelized Cost of Energy (LCOE) Reduction",
        description: "Generate solar electricity at a fraction of the commercial utility tariff rate for 25+ years.",
      },
      {
        title: "LEED & ESG Compliance Acceleration",
        description: "Fulfill international buyer sustainability requirements and lower factory carbon emissions.",
      },
      {
        title: "Fast ROI Within 3 to 4.5 Years",
        description: "Predictable payback with accelerated depreciation and energy cost savings.",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Structural & Electrical Load Assessment",
        description: "Rigorous load-bearing roof inspection, transformer capacity review, and 3D irradiance modeling.",
      },
      {
        stepNumber: 2,
        title: "Detailed Engineering & Single Line Diagram (SLD)",
        description: "Complete electrical, mechanical, and protection coordination design adhering to BNBC and SREDA standards.",
      },
      {
        stepNumber: 3,
        title: "Procurement & Turnkey EPC Execution",
        description: "Direct Tier-1 component sourcing and systematic deployment with zero disruption to factory operations.",
      },
      {
        stepNumber: 4,
        title: "HT/LT Grid Synchronization & Net Metering",
        description: "Grid integration with power distribution utilities (BREB, DESCO, DPDC, PDB) under national net-metering guidelines.",
      },
    ],
    deliverables: [
      "High-power N-Type TOPCon / Bifacial PV modules",
      "Industrial string inverters with multiple MPPT and AFCI safety",
      "Walkways, safety lifelines, and lightning protection systems (LPS)",
      "SCADA / IoT centralized cloud monitoring system",
      "Complete regulatory approvals & SREDA guideline compliance",
    ],
    suitableFor: [
      "Export-Oriented RMG & Textile Factories",
      "Industrial Parks & Economic Zones",
      "Commercial Shopping Complexes & Hospitals",
      "Universities & Educational Campuses",
    ],
    isFeatured: true,
    seo: {
      metaTitle: "Commercial & Industrial Solar Solutions Bangladesh | SolarPower Bangladesh",
      metaDescription:
        "Turnkey C&I rooftop solar EPC for factories, warehouses, and commercial buildings in Bangladesh. Maximize ESG compliance and cut power costs.",
      keywords: [
        "commercial solar Bangladesh",
        "industrial solar rooftop Dhaka",
        "factory solar installation Bangladesh",
        "RMG solar plant Bangladesh",
      ],
    },
  },
  {
    id: "serv-net-metering",
    slug: "solar-net-metering-consultation",
    title: "Solar Net Metering Consultation & Approvals",
    shortDescription:
      "End-to-end liaison, technical design, feasibility testing, and utility paperwork for national grid net-metering connections.",
    description:
      "Bangladesh Net Metering Guidelines allow consumers to export surplus solar energy back to the national distribution grid (DESCO, DPDC, BREB, NESCO, WZPDCL, BPDB) and receive monetary bill deductions. We handle all technical documentation, SLD design, distribution transformer capacity checks, and utility sanction approvals.",
    targetAudience: ["Factory owners", "Commercial building owners", "Residential property owners with 3-phase supply"],
    image: "/images/services/net-metering-consultation.webp",
    iconName: "RefreshCw",
    benefits: [
      {
        title: "Zero Energy Wastage",
        description: "Surplus electricity generated on weekends and holidays is banked with the grid as bill credits.",
      },
      {
        title: "100% Hassle-Free Utility Liaison",
        description: "We manage all official filings, inspections, and bi-directional meter installations.",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Eligibility Check & Transformer Capacity Review",
        description: "Verifying your sanction load and utility feeder capacity as per national guidelines.",
      },
      {
        stepNumber: 2,
        title: "Official Application & Technical Dossier",
        description: "Preparing single-line diagrams, protection scheme reports, and submitting official files to the utility.",
      },
      {
        stepNumber: 3,
        title: "Bi-Directional Meter Installation & Commissioning",
        description: "Utility inspection witness, bi-directional meter testing, and final system sync.",
      },
    ],
    deliverables: [
      "Utility approved Single Line Diagram (SLD)",
      "Protective relay and anti-islanding compliance certificate",
      "Sanctioned net-metering agreement with distribution company",
      "Commissioned bi-directional energy meter",
    ],
    suitableFor: [
      "Three-phase industrial, commercial, and residential electricity consumers",
    ],
    isFeatured: false,
    seo: {
      metaTitle: "Solar Net Metering Consultation in Bangladesh | SolarPower Bangladesh",
      metaDescription:
        "Get official net metering approval for your solar system in Bangladesh. Complete DESCO, DPDC, and BREB liaison and technical design.",
      keywords: [
        "solar net metering Bangladesh",
        "DESCO net metering process",
        "DPDC solar net metering Dhaka",
        "BREB net metering guidelines",
      ],
    },
  },
  {
    id: "serv-maintenance-repair",
    slug: "solar-maintenance-inspection",
    title: "Solar System Maintenance, Cleaning & Inspection",
    shortDescription:
      "Preventative maintenance, thermal drone imaging, module cleaning, and inverter troubleshooting to restore peak output.",
    description:
      "Dust accumulation, loose connections, hotspot degradation, and inverter faults can reduce solar energy production by up to 25%. Our certified technicians provide scheduled preventative maintenance, IV curve tracing, thermal scanning, and professional cleaning across Bangladesh.",
    targetAudience: ["Existing solar system owners", "Commercial facilities", "Institutions with legacy solar plants"],
    image: "/images/services/solar-maintenance.webp",
    iconName: "Wrench",
    benefits: [
      {
        title: "Restores Up to 20-25% Lost Generation",
        description: "Professional de-soiling and electrical optimization maximizes kWh output.",
      },
      {
        title: "Prevents Costly Equipment Failures",
        description: "Early hotspot detection prevents module burnout and fire hazards.",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Comprehensive Physical & Thermal Audit",
        description: "Infrared thermal scan to pinpoint cell micro-cracks, hotspots, and loose electrical terminations.",
      },
      {
        stepNumber: 2,
        title: "IV-Curve Diagnostic & Inverter Telemetry Check",
        description: "Measuring string voltage, current characteristics, and firmware health.",
      },
      {
        stepNumber: 3,
        title: "De-ionized Water Module Cleaning",
        description: "Scratch-free specialized solar panel washing without damaging anti-reflective coatings.",
      },
      {
        stepNumber: 4,
        title: "Audit Report & Performance Optimization",
        description: "Detailed before/after yield report with actionable recommendations.",
      },
    ],
    deliverables: [
      "Detailed health check & thermal diagnostic report",
      "Thorough cleaning and BOS tightening",
      "Inverter firmware updates and calibration",
      "Safety certification and earthing resistance testing",
    ],
    suitableFor: [
      "Any operational solar installation requiring performance enhancement or troubleshooting",
    ],
    isFeatured: false,
    seo: {
      metaTitle: "Solar System Maintenance & Repair Bangladesh | SolarPower Bangladesh",
      metaDescription:
        "Professional solar panel cleaning, maintenance, thermal audit, and inverter repair services in Bangladesh.",
      keywords: [
        "solar panel maintenance Bangladesh",
        "solar panel cleaning service Dhaka",
        "solar inverter repair Bangladesh",
      ],
    },
  },
  {
    id: "serv-solar-irrigation",
    slug: "solar-irrigation-agricultural-systems",
    title: "Solar Water Pumping & Agricultural Systems",
    shortDescription:
      "Reliable off-grid solar irrigation pumps replacing expensive diesel pumps for Bangladeshi farmers and agro-farms.",
    description:
      "Solar water pumping systems deliver reliable water supply for paddy fields, fish hatcheries, poultry farms, and drip irrigation across rural Bangladesh. Free from the burden of diesel fuel costs, erratic fuel pricing, and grid electricity shortages.",
    targetAudience: ["Farmers", "Agro-farms", "Fish hatcheries", "Dairy & poultry farms", "Rural landowners"],
    image: "/images/services/solar-irrigation-pump.webp",
    iconName: "Sprout",
    benefits: [
      {
        title: "Zero Fuel Cost",
        description: "Operates 100% on free sunlight, eliminating recurring diesel expenses.",
      },
      {
        title: "Automatic Daytime Operation",
        description: "VFD pump controllers auto-start and throttle speed based on sunlight intensity.",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Water Head & Flow Rate Sizing",
        description: "Calculating daily water volume (liters/day) and borehole static/dynamic water depth.",
      },
      {
        stepNumber: 2,
        title: "Solar VFD & Submersible Pump Selection",
        description: "Matching high-efficiency brushless DC (BLDC) or AC submersible pumps with solar array capacity.",
      },
      {
        stepNumber: 3,
        title: "On-Site Installation & Pipe Testing",
        description: "Deploying elevated solar stands, sensor-based dry-run protection, and water distribution lines.",
      },
    ],
    deliverables: [
      "Solar VFD pump controller with MPPT",
      "Stainless steel submersible water pump",
      "High-efficiency solar array and ground mount frame",
      "Water level float sensors and dry-run safety mechanisms",
    ],
    suitableFor: [
      "Boro paddy irrigation",
      "Fruit orchards & drip irrigation",
      "Aquaculture & shrimp farms",
      "Livestock & dairy farms",
    ],
    isFeatured: false,
    seo: {
      metaTitle: "Solar Water Pump & Irrigation in Bangladesh | SolarPower Bangladesh",
      metaDescription:
        "Cut diesel costs with solar irrigation pumps in Bangladesh. Ideal for boro rice fields, agro-farms, fish hatcheries, and dairy farms.",
      keywords: [
        "solar irrigation pump Bangladesh",
        "solar water pump price in Bangladesh",
        "agricultural solar pump Dhaka",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return servicesData.filter((s) => s.isFeatured);
}
