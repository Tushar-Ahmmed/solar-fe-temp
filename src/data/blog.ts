import { BlogArticle } from "@/types";

export const blogArticles: BlogArticle[] = [
  {
    id: "post-on-grid-vs-off-grid-vs-hybrid",
    slug: "on-grid-vs-off-grid-vs-hybrid-solar-system-bangladesh",
    title: "On-Grid vs Off-Grid vs Hybrid Solar Systems in Bangladesh: Which One Should You Choose?",
    excerpt:
      "A complete technical and financial comparison of grid-tied, standalone battery, and hybrid solar systems tailored to Bangladesh electricity grid conditions and power outages.",
    content: `Choosing the right solar power system for your home or business in Bangladesh depends on two crucial factors: your primary goal (reducing electricity bills vs. having backup power during load shedding) and your budget.

### 1. On-Grid (Grid-Tied) Solar Systems
On-grid systems are connected directly to the national electricity grid (such as DESCO, DPDC, BREB, or NESCO). These systems do NOT have batteries.

* **How it works:** During the daytime, the solar panels generate electricity to power your active appliances. Any excess electricity is automatically exported to the national grid through a bi-directional net meter.
* **Key Advantage:** Lowest initial investment and highest return on investment (ROI). Payback period is typically 3.5 to 5 years.
* **Limitation:** For safety reasons (anti-islanding protection), an on-grid system automatically shuts down during a grid power outage. If you experience frequent load shedding, an on-grid system will not provide backup during those hours unless paired with a generator or battery.
* **Best suited for:** Factories, commercial buildings, schools, and urban homeowners with rare power cuts wanting the fastest bill reduction.

### 2. Off-Grid (Standalone) Solar Systems
Off-grid systems operate completely independently of the national power grid.

* **How it works:** Solar panels charge a battery bank (Lithium or Tubular Gel) via a charge controller, and an off-grid inverter supplies power to your household loads.
* **Key Advantage:** Complete energy independence. Works in remote rural locations, river islands (chars), and offshore hatcheries where no utility grid connection exists.
* **Limitation:** Higher initial cost due to battery storage.
* **Best suited for:** Rural homes, agricultural farms, remote resorts, and telecom installations.

### 3. Hybrid Solar Systems (The Gold Standard for Bangladesh)
A hybrid solar system combines the best features of both on-grid and off-grid configurations.

* **How it works:** It can export excess solar power to the grid through net metering when available, charge your lithium battery bank simultaneously, and instantly switch to battery backup within 10 milliseconds when load shedding occurs.
* **Key Advantage:** You get maximum electricity bill savings through net metering PLUS uninterrupted power backup for lights, fans, computers, and refrigerators.
* **Best suited for:** Modern Bangladeshi apartments, villas, diagnostic clinics, corporate offices, and banks.

### Summary Comparison Table
| Feature | On-Grid | Off-Grid | Hybrid |
| :--- | :--- | :--- | :--- |
| **Battery Needed?** | No | Yes | Yes |
| **Works during Load Shedding?** | No | Yes | Yes |
| **Net-Metering Export?** | Yes | No | Yes |
| **Initial Cost** | Lowest | Medium | Moderate |
| **Typical ROI Payback** | 3.5 - 4.5 Years | 5 - 7 Years | 4 - 6 Years |

### Conclusion
If you are looking for pure cost savings with minimal maintenance, an **On-Grid system** with net metering is ideal. If power reliability and zero-downtime backup during load shedding are essential, a **Hybrid System with LiFePO4 Lithium batteries** is the most future-proof investment.`,
    publishedAt: "2026-06-15",
    readingTimeMinutes: 6,
    category: "System Guides",
    tags: ["Solar System Types", "Hybrid Inverter", "Net Metering", "Bangladesh Power"],
    image: "/images/blog/on-grid-vs-off-grid-bangladesh.webp",
    imageAlt: "Comparison diagram of on grid vs off grid vs hybrid solar system in Bangladesh",
    author: {
      name: "Engr. Farhan Rahman",
      role: "Lead Renewable Energy Consultant",
    },
    isFeatured: true,
    relatedArticleSlugs: [
      "how-solar-net-metering-works-in-bangladesh",
      "how-many-solar-panels-needed-for-home-bangladesh",
    ],
    relatedProductCategory: "solar-inverters",
    seo: {
      metaTitle: "On-Grid vs Off-Grid vs Hybrid Solar System Bangladesh | Guide",
      metaDescription:
        "Understand the difference between on-grid, off-grid, and hybrid solar systems in Bangladesh. Compare costs, backup capabilities, and net metering.",
      keywords: [
        "on grid vs off grid solar Bangladesh",
        "hybrid solar system Bangladesh",
        "solar system guide Dhaka",
        "net metering solar system Bangladesh",
      ],
    },
  },
  {
    id: "post-solar-net-metering-guide",
    slug: "how-solar-net-metering-works-in-bangladesh",
    title: "How Solar Net Metering Works in Bangladesh: Guidelines, Tariff & Benefits",
    excerpt:
      "A step-by-step guide explaining how Bangladeshi homeowners and industries can export surplus solar energy to DESCO, DPDC, BREB, or NESCO and lower their monthly bills.",
    content: `Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the national power grid in Bangladesh.

Under the **Net Metering Guidelines issued by the Ministry of Power, Energy and Mineral Resources (MPEMR) and SREDA**, consumers connected to three-phase utility lines can install solar systems and export daytime surplus power.

### How Net Metering Works in 4 Steps:
1. **Daytime Solar Generation:** Your rooftop solar panels produce electricity whenever the sun shines.
2. **On-Site Consumption:** Your home or factory uses this clean energy first.
3. **Surplus Export:** Any excess electricity not consumed is exported into the grid through a specialized bi-directional smart meter.
4. **Monthly Energy Offsetting:** At the end of each billing cycle, the distribution utility subtracts your exported units (kWh) from the units you imported. You only pay for the net difference.

### What Happens If You Export More Than You Import?
If your solar system produces more units in a month than you consume, the surplus units are rolled over as a credit into the next month's electricity bill. At the end of the settlement year (typically June), any remaining credit balance is settled as per utility tariff regulations.

### Eligibility Criteria in Bangladesh:
* **Connection Type:** Typically three-phase LT (Low Tension) or HT (High Tension) consumer connection.
* **Capacity Limit:** Up to 70% of the consumer's sanctioned load or transformer capacity.
* **Inverter Compliance:** Inverters must comply with IEEE 1547 / IEC standards and feature certified anti-islanding protection for technician safety.

### How to Get Started:
SolarPower Bangladesh handles the complete end-to-end net metering process — from site feasibility survey and Single Line Diagram (SLD) preparation to utility liaison, testing, and bi-directional meter commissioning.`,
    publishedAt: "2026-07-02",
    readingTimeMinutes: 5,
    category: "Policy & Savings",
    tags: ["Net Metering", "DESCO", "DPDC", "BREB", "SREDA", "Electricity Bills"],
    image: "/images/blog/solar-net-metering-bangladesh.webp",
    imageAlt: "Bi-directional smart energy meter for solar net metering in Bangladesh",
    author: {
      name: "Engr. Farhan Rahman",
      role: "Lead Renewable Energy Consultant",
    },
    isFeatured: true,
    relatedArticleSlugs: [
      "on-grid-vs-off-grid-vs-hybrid-solar-system-bangladesh",
      "commercial-solar-rooftop-benefits-for-factories",
    ],
    relatedProductCategory: "solar-panels",
    seo: {
      metaTitle: "Solar Net Metering in Bangladesh: Step-by-Step Guide | SolarPower BD",
      metaDescription:
        "Learn how solar net metering works in Bangladesh under SREDA guidelines. Save money on DESCO, DPDC, and BREB electricity bills by exporting solar power.",
      keywords: [
        "solar net metering Bangladesh",
        "net metering guidelines SREDA",
        "DESCO net metering process",
        "DPDC solar connection",
      ],
    },
  },
  {
    id: "post-solar-panel-home-sizing",
    slug: "how-many-solar-panels-needed-for-home-bangladesh",
    title: "How Many Solar Panels Do You Need for a Home in Bangladesh? Sizing Calculator Guide",
    excerpt:
      "Learn how to calculate the exact solar panel capacity, inverter size, and battery backup required for your household appliances.",
    content: `Determining the right solar system size for your home in Bangladesh requires calculating your daily electricity consumption in kilowatt-hours (kWh) or units.

### Step 1: Check Your Monthly Electricity Bill
Look at your latest utility bill (DESCO, DPDC, BREB, etc.) and find your monthly consumption.
* A typical 3-bedroom apartment in Dhaka consumes between **300 and 600 units (kWh) per month**.
* This translates to approximately **10 to 20 units per day**.

### Step 2: Calculate Average Peak Sun Hours
In Bangladesh, average effective peak sun hours range from **4.0 to 4.5 hours per day** across the year (taking into account sunny winter months and rainy monsoon seasons).

### Step 3: Size the Solar Array
To generate 12 units (kWh) per day:
$$\\text{Required Solar kWp} = \\frac{12\\text{ kWh}}{4.2\\text{ peak sun hours}} \\approx 2.85\\text{ kWp} \\approx 3\\text{ kW}$$

Using **550W Mono PERC Solar Panels**:
$$\\text{Number of Panels} = \\frac{3000\\text{ Watts}}{550\\text{ Watts}} \\approx 5.5 \\rightarrow 6\\text{ Panels}$$

### Required Roof Area:
Each 550W panel measures approximately 2.28m x 1.13m (approx. 27 sq. ft).
For 6 panels, you will need approximately **180 to 220 square feet of shadow-free rooftop space**.

### Recommended System Sizes in Bangladesh:
* **2 kW System (4 Panels):** Ideal for lights, fans, TV, Wi-Fi, and 1 refrigerator. Generates ~8-9 units/day.
* **3 kW - 5 kW System (6-10 Panels):** Ideal for standard households with 1-2 inverter air conditioners. Generates ~12-22 units/day.
* **10 kW+ System (18+ Panels):** Ideal for large duplexes, commercial offices, or multi-family properties.

Contact SolarPower Bangladesh for a free customized 3D rooftop survey and precise load assessment.`,
    publishedAt: "2026-07-20",
    readingTimeMinutes: 7,
    category: "Buying Guide",
    tags: ["Solar Sizing", "Home Solar", "Solar Panel Calculation", "Dhaka Rooftop"],
    image: "/images/blog/solar-panel-sizing-home.webp",
    imageAlt: "Rooftop solar panel layout simulation on residential building",
    author: {
      name: "Tanzim Hasan",
      role: "Senior Systems Engineer",
    },
    isFeatured: true,
    relatedArticleSlugs: [
      "lithium-vs-tubular-battery-for-solar-bangladesh",
      "on-grid-vs-off-grid-vs-hybrid-solar-system-bangladesh",
    ],
    relatedProductCategory: "solar-panels",
    seo: {
      metaTitle: "How Many Solar Panels for Home in Bangladesh | Sizing Guide",
      metaDescription:
        "Calculate the exact solar panel system size and roof area needed for your home in Bangladesh. Sizing formulas, typical home examples, and panel counts.",
      keywords: [
        "solar panel calculation for home Bangladesh",
        "how many solar panels for 1 ton AC Bangladesh",
        "home solar system size Dhaka",
      ],
    },
  },
  {
    id: "post-lithium-vs-tubular-battery",
    slug: "lithium-vs-tubular-battery-for-solar-bangladesh",
    title: "LiFePO4 Lithium vs Deep Cycle Tubular Gel Batteries: Which is Better for Solar in Bangladesh?",
    excerpt:
      "A realistic comparison of lithium iron phosphate and lead-acid tubular batteries focusing on cycle life, depth of discharge, temperature tolerance, and total cost of ownership.",
    content: `Energy storage is one of the most critical components of any off-grid or hybrid solar installation. In Bangladesh, homeowners and business owners often debate between traditional Tubular Lead-Acid/Gel batteries and modern Lithium Iron Phosphate (LiFePO4) batteries.

### 1. Cycle Life & Usable Lifespan
* **Tubular Lead-Acid Batteries:** Typically deliver 1,000 to 1,500 cycles at 50% Depth of Discharge (DoD). In Bangladesh's warm climate, they usually need replacement every **2 to 3 years**.
* **LiFePO4 Lithium Batteries:** Deliver **4,000 to 6,000+ cycles at 80-90% DoD**. They last **10 to 15 years** without noticeable capacity degradation.

### 2. Usable Capacity (Depth of Discharge)
* If you buy a 200Ah Lead-Acid battery (approx. 2.4kWh at 12V), you can only safely use 50% (1.2kWh) without severely shortening its lifespan.
* With a 200Ah LiFePO4 battery, you can safely utilize 90% (2.16kWh) of its stored energy on a daily basis.

### 3. Maintenance & Safety
* **Tubular:** Requires periodic distilled water top-ups, produces corrosive acid fumes, and poses spill risks.
* **Lithium:** 100% sealed and maintenance-free. Built-in smart Battery Management System (BMS) safeguards against overcharging, overdischarging, and short circuits.

### Total Cost of Ownership (10-Year Period)
While Lithium batteries have a higher initial purchase price, replacing 3 to 4 sets of lead-acid batteries over a 10-year span makes **Lithium significantly cheaper in total lifecycle cost**.`,
    publishedAt: "2026-08-05",
    readingTimeMinutes: 5,
    category: "Battery Technology",
    tags: ["Lithium Battery", "LiFePO4", "Tubular Battery", "Solar Storage"],
    image: "/images/blog/lithium-vs-tubular-solar-battery.webp",
    imageAlt: "Comparison of LiFePO4 lithium solar battery module and tubular lead acid battery",
    author: {
      name: "Tanzim Hasan",
      role: "Senior Systems Engineer",
    },
    isFeatured: false,
    relatedArticleSlugs: [
      "how-many-solar-panels-needed-for-home-bangladesh",
    ],
    relatedProductCategory: "solar-batteries",
    seo: {
      metaTitle: "Lithium vs Tubular Battery for Solar in Bangladesh | LiFePO4 Guide",
      metaDescription:
        "Compare LiFePO4 lithium batteries vs deep-cycle tubular batteries for solar storage in Bangladesh. Cycle life, maintenance, and 10-year cost analysis.",
      keywords: [
        "lithium vs tubular battery Bangladesh",
        "LiFePO4 solar battery Dhaka",
        "solar IPS battery comparison Bangladesh",
      ],
    },
  },
  {
    id: "post-commercial-solar-factories",
    slug: "commercial-solar-rooftop-benefits-for-factories",
    title: "Why RMG & Textile Factories in Bangladesh Are Rapidly Transitioning to Rooftop Solar",
    excerpt:
      "How commercial rooftop solar helps Bangladeshi factories combat rising gas and power tariffs while satisfying international green building (LEED) buyer requirements.",
    content: `Bangladesh's export-oriented Ready-Made Garments (RMG) and textile manufacturing sectors are facing dual pressures: escalating grid electricity tariffs and stringent global supply chain decarbonization mandates from international apparel brands.

### Key Drivers for Industrial Solar Adoption:

1. **Electricity Cost Hedge:** Industrial grid tariffs continue to rise. Solar rooftop power generated on-site locks in a fixed levelized cost of energy (LCOE) for 25+ years at a fraction of the utility rate.
2. **Utilizing Unused Concrete & Shed Roofs:** RMG factory sheds have tens of thousands of square feet of unshaded roof space ready to generate megawatts of clean electricity.
3. **LEED Certification & Buyer Compliance:** Global retailers (H&M, Inditex, Marks & Spencer, Target) increasingly prioritize suppliers with verifiable renewable energy shares and lower Scope 2 greenhouse gas emissions.
4. **Rapid Payback Period:** With accelerated tax benefits and net metering credit offsets, average payback time for a 500kW to 2MW industrial solar plant in Bangladesh is between **3.2 to 4.2 years**.

SolarPower Bangladesh provides turnkey EPC execution with industrial-grade safety standards (walkways, anti-fire AFCI string inverters, and BNBC-compliant wind racking).`,
    publishedAt: "2026-08-18",
    readingTimeMinutes: 6,
    category: "Commercial & Industrial",
    tags: ["RMG Solar", "Industrial Solar", "Green Factory", "LEED Certification"],
    image: "/images/blog/industrial-rooftop-solar-bangladesh.webp",
    imageAlt: "RMG factory rooftop covered with industrial solar panels in Bangladesh",
    author: {
      name: "Engr. Farhan Rahman",
      role: "Lead Renewable Energy Consultant",
    },
    isFeatured: false,
    relatedArticleSlugs: [
      "how-solar-net-metering-works-in-bangladesh",
    ],
    relatedProductCategory: "solar-panels",
    seo: {
      metaTitle: "Commercial Rooftop Solar for Factories in Bangladesh | RMG Green Energy",
      metaDescription:
        "Explore the business case for factory rooftop solar in Bangladesh. Lower energy bills, attain LEED green factory standards, and achieve 3.5-year ROI.",
      keywords: [
        "commercial solar factory Bangladesh",
        "RMG rooftop solar Dhaka",
        "green factory solar installation Bangladesh",
      ],
    },
  },
  {
    id: "post-solar-inverter-guide",
    slug: "solar-inverter-buying-guide-bangladesh",
    title: "Complete Solar Inverter Buying Guide for Bangladesh: String vs Hybrid vs Micro Inverters",
    excerpt:
      "Understand the technical differences between On-Grid String, Smart Hybrid, and Microinverters. How to match inverter capacity with Bangladesh voltage fluctuations.",
    content: `The solar inverter is the brain of your solar energy system. It converts Direct Current (DC) electricity produced by solar panels into standard Alternating Current (AC) used by home appliances and industrial machines.

### 1. On-Grid String Inverters (Best for Pure Grid-Tied Solar)
String inverters connect multiple solar panels wired in series ("strings").
* **Efficiency:** High efficiency (97.5% – 98.6%).
* **Cost:** Most cost-effective inverter technology per kilowatt.
* **Limitation:** Shading on one panel reduces the output of the entire string. Shuts down during utility load shedding.
* **Recommended for:** Daytime factories, shopping malls, and commercial buildings with unshaded roofs.

### 2. Smart Hybrid Inverters (Best for Residential & Backup in Bangladesh)
Hybrid inverters manage solar power, lithium battery storage, and utility grid power simultaneously in one integrated unit.
* **Instant UPS Transfer:** Switches to battery storage within 10 milliseconds during load shedding — computers, lights, and ACs never reset.
* **Dual MPPT:** Allows wiring panels on different roof slopes (East-West or South).
* **Net-Metering Ready:** Capable of exporting surplus daytime energy to DESCO/DPDC/BREB.
* **Recommended for:** Bangladeshi apartments, duplexes, diagnostic clinics, and corporate offices.

### 3. Key Technical Specifications to Look For:
* **MPPT Voltage Range:** Wide MPPT window (e.g. 120V – 500V) ensures energy harvesting even in cloudy monsoon conditions.
* **AFCI (Arc Fault Circuit Interrupter):** Essential built-in safety mechanism that detects DC electrical sparks and cuts power to eliminate fire risk.
* **Wi-Fi Telemetry & Mobile App:** Monitor real-time solar generation, grid import, battery SOC (State of Charge), and daily savings from your smartphone.

Consult SolarPower Bangladesh for certified hybrid inverters engineered with Bangladesh grid surge protection.`,
    publishedAt: "2026-08-22",
    readingTimeMinutes: 6,
    category: "Inverter Technology",
    tags: ["Solar Inverter", "Hybrid Inverter", "MPPT", "DESCO Net Metering"],
    image: "/images/blog/solar-inverter-guide-bangladesh.webp",
    imageAlt: "Smart hybrid solar inverter mounted on wall with mobile telemetry app",
    author: {
      name: "Engr. Farhan Rahman",
      role: "Lead Renewable Energy Consultant",
    },
    isFeatured: false,
    relatedArticleSlugs: [
      "on-grid-vs-off-grid-vs-hybrid-solar-system-bangladesh",
      "lithium-vs-tubular-battery-for-solar-bangladesh",
    ],
    relatedProductCategory: "solar-inverters",
    seo: {
      metaTitle: "Solar Inverter Guide Bangladesh | String vs Hybrid vs Micro Inverters",
      metaDescription:
        "Detailed buying guide for solar inverters in Bangladesh. Compare smart hybrid inverters vs string inverters, MPPT specs, and load shedding capabilities.",
      keywords: [
        "solar inverter price in Bangladesh",
        "hybrid solar inverter Dhaka",
        "best solar inverter Bangladesh",
        "5kw hybrid inverter Bangladesh",
      ],
    },
  },
  {
    id: "post-solar-maintenance-cleaning",
    slug: "solar-panel-maintenance-cleaning-guide",
    title: "Solar Panel Maintenance & Cleaning in Bangladesh: How to Prevent Output Loss & Hotspots",
    excerpt:
      "Dust, air pollution, and bird droppings can decrease solar generation by up to 25% in Dhaka and industrial zones. Learn professional cleaning best practices.",
    content: `Solar panels have no moving parts and require minimal maintenance, but in Bangladesh's dusty urban and industrial environments (especially during dry winter months from November to March), soiling can degrade solar electricity generation significantly.

### 1. Impact of Dust & Soiling in Bangladesh:
* **Dhaka & Industrial Zones (Gazipur/Savar/Narayanganj):** Particulate matter, brick kiln soot, and road dust settle on glass surfaces, creating a physical barrier against sunlight.
* **Output Loss:** Unwashed panels can lose between **15% and 25% of their daily kWh yield**.
* **Hotspot Risk:** Bird droppings and localized debris cause shaded cells to act as electrical resistors, overheating the cell and permanently damaging the module.

### 2. Best Practices for Solar Panel Cleaning:
* **Clean During Early Morning or Late Evening:** Never wash hot panels under direct afternoon sunlight. Cold water sprayed onto hot solar glass causes thermal shock and glass micro-cracking.
* **Use Pure Water & Soft Brushes:** Avoid abrasive scouring pads or harsh chemical detergents that strip the anti-reflective coating. Use de-ionized or soft water with microfiber telescopic poles.
* **Never Walk Directly on Panels:** Stepping on solar glass causes internal micro-fractures in the silicon wafers that are invisible to the eye but severely degrade output over time.

### 3. Recommended Electrical Checkups:
* Check DC circuit breaker terminations and MC4 connectors annually for thermal loosening.
* Inspect inverter cooling heat sinks and clean air intake filters from dust blockage.
* Measure open-circuit voltage (Voc) and operating current (Isc) across strings.

SolarPower Bangladesh offers preventative O&M cleaning and thermal infrared drone inspections for residential and commercial solar plants.`,
    publishedAt: "2026-08-25",
    readingTimeMinutes: 5,
    category: "Maintenance",
    tags: ["Solar Cleaning", "Panel Maintenance", "Dhaka Dust", "Hotspots", "O&M"],
    image: "/images/blog/solar-maintenance-guide-bangladesh.webp",
    imageAlt: "Technician safely cleaning rooftop solar panels with soft telescopic brush",
    author: {
      name: "Tanzim Hasan",
      role: "Senior Systems Engineer",
    },
    isFeatured: false,
    relatedArticleSlugs: [
      "how-many-solar-panels-needed-for-home-bangladesh",
      "common-solar-mistakes-bangladesh",
    ],
    relatedProductCategory: "solar-panels",
    seo: {
      metaTitle: "Solar Panel Cleaning & Maintenance Guide Bangladesh | Prevent Output Loss",
      metaDescription:
        "Learn how to clean and maintain solar panels in Dhaka, Bangladesh. Prevent dust degradation, avoid micro-cracks, and keep your solar plant running at peak yield.",
      keywords: [
        "solar panel cleaning Bangladesh",
        "solar maintenance service Dhaka",
        "solar panel dust loss Bangladesh",
      ],
    },
  },
  {
    id: "post-common-solar-mistakes",
    slug: "common-solar-mistakes-bangladesh",
    title: "7 Costly Solar Installation Mistakes to Avoid in Bangladesh",
    excerpt:
      "From undersized DC cables to low-grade painted steel stands that rust in monsoon rains, discover the most critical mistakes to steer clear of.",
    content: `Installing a solar power system is a 25-year capital investment. However, cutting corners on engineering design or selecting unqualified contractors often leads to premature system failure and safety hazards.

### Mistake 1: Choosing Low-Grade Painted Steel Stands Instead of HDG
Bangladesh experiences severe monsoons and high humidity. Standard painted mild steel (MS) structures rust and corrode within 2 to 3 years.
* **Correct Practice:** Use **Hot-Dip Galvanized (HDG) steel (minimum 80-micron zinc coating)** or anodized AL6005-T5 structural aluminum rated for 160+ km/h cyclone wind loads.

### Mistake 2: Using AC Circuit Breakers on DC Circuits
DC electrical current does not have a natural zero-crossing point like AC. Using standard AC breakers on DC solar strings causes dangerous electrical arcs that can ignite roof fires.
* **Correct Practice:** Always install dedicated **1000V/1500V DC miniature circuit breakers (MCB) and Type II DC Surge Protection Devices (SPD)**.

### Mistake 3: Undersized Solar DC Cables
Using undersized copper cables results in excessive voltage drop (often exceeding 5-8% energy loss) and dangerous cable overheating.
* **Correct Practice:** Use TUV-certified 4mm² or 6mm² cross-linked polyethylene (XLPO) dual-insulated solar cables designed for UV radiation and high temperatures.

### Mistake 4: Ignoring Shadow Obstacles & Azimuth Orientation
Placing panels behind water tanks, lift machine rooms, or parapet walls creates partial shading. In series strings, shading even 10% of one module can reduce total string generation by 50%+.
* **Correct Practice:** Conduct 3D sun-path simulation to ensure year-round shadow-free solar irradiation.

### Mistake 5: Buying B-Grade or Relabeled Solar Panels
Unscrupulous traders often sell unbranded or re-labeled panels with fake wattage ratings that degrade rapidly after 12 months.
* **Correct Practice:** Always insist on verifiable **BloombergNEF Tier-1 modules** with authentic laser-etched manufacturer barcodes and flash test reports.

Avoid these costly mistakes by partnering with licensed IEB engineers at SolarPower Bangladesh.`,
    publishedAt: "2026-08-28",
    readingTimeMinutes: 7,
    category: "Installation Tips",
    tags: ["Solar Mistakes", "Engineering Safety", "DC Cables", "HDG Mounting", "Bangladesh Solar"],
    image: "/images/blog/common-solar-mistakes-bangladesh.webp",
    imageAlt: "Inspection of rooftop solar mounting structures and certified DC switchgear",
    author: {
      name: "Engr. Farhan Rahman",
      role: "Lead Renewable Energy Consultant",
    },
    isFeatured: true,
    relatedArticleSlugs: [
      "solar-panel-maintenance-cleaning-guide",
      "on-grid-vs-off-grid-vs-hybrid-solar-system-bangladesh",
    ],
    relatedProductCategory: "mounting-structures",
    seo: {
      metaTitle: "7 Common Solar Installation Mistakes to Avoid in Bangladesh",
      metaDescription:
        "Avoid costly rooftop solar mistakes in Bangladesh. Learn why HDG mounting, dedicated DC breakers, and Tier-1 certified panels protect your investment.",
      keywords: [
        "solar installation mistakes Bangladesh",
        "solar panel mounting stand Bangladesh",
        "solar DC breaker safety",
        "best solar company Dhaka",
      ],
    },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): BlogArticle[] {
  return blogArticles.filter((a) => a.isFeatured);
}

export function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  if (!article.relatedArticleSlugs || article.relatedArticleSlugs.length === 0) {
    return blogArticles
      .filter((a) => a.id !== article.id)
      .slice(0, 3);
  }
  return blogArticles.filter((a) => article.relatedArticleSlugs?.includes(a.slug));
}
