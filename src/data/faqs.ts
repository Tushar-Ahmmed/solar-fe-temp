import { FAQItem } from "@/types";

export const faqsData: FAQItem[] = [
  {
    id: "faq-monsoon-generation",
    question: "Do solar panels still generate electricity during cloudy or rainy days in Bangladesh?",
    answer:
      "Yes. Modern Monocrystalline PERC and N-Type TOPCon panels are engineered with high low-light spectral sensitivity. Even during overcast monsoon days, they capture diffuse solar radiation, typically producing 20% to 35% of their peak capacity. During clear summer and winter days, generation reaches 100%.",
    category: "general",
  },
  {
    id: "faq-net-metering-process",
    question: "How does Net Metering work with DESCO, DPDC, or BREB in Bangladesh?",
    answer:
      "If you have a 3-phase electricity connection, we install a bi-directional smart meter with utility approval. During the day, your surplus solar energy is fed back into the national grid. At the end of the month, the utility bills you only for the net difference (Units Imported minus Units Exported). If you exported more than you imported, the surplus units roll over as credit into your next bill.",
    category: "pricing-savings",
  },
  {
    id: "faq-load-shedding-backup",
    question: "Will my solar system power my home during electricity load shedding?",
    answer:
      "A standard On-Grid (grid-tied) solar system shuts down automatically during grid outages for lineman safety. However, if you choose a Hybrid Solar System with LiFePO4 Lithium or Tubular Gel batteries, the system automatically transfers to battery backup within 10 milliseconds, keeping your lights, fans, computers, and refrigerators running continuously.",
    category: "technical",
  },
  {
    id: "faq-lifespan-warranty",
    question: "What is the expected lifespan and warranty on solar equipment?",
    answer:
      "Our Tier-1 solar panels come with a 25-year to 30-year linear performance warranty (guaranteed at least 80-85% output after 25 years). Hybrid inverters carry 5-year warranties, and LiFePO4 Lithium batteries carry 5-year warranties with 10 to 15 years expected operational cycle life.",
    category: "products",
  },
  {
    id: "faq-roof-leakage-safety",
    question: "Will installing solar panels cause rooftop water leakage or structural damage?",
    answer:
      "No. We use non-penetrative ballast mounting or chemical-anchor waterproofing flashings with EPDM rubber seals for flat concrete roofs. Our mounting structures are engineered with Hot-Dip Galvanized steel and stainless steel SUS304 hardware rated for 150 km/h wind speeds to comply with the Bangladesh National Building Code (BNBC).",
    category: "services",
  },
  {
    id: "faq-roi-payback",
    question: "What is the typical return on investment (ROI) payback period for a solar system in Bangladesh?",
    answer:
      "For commercial and industrial factories under commercial tariff rates, the payback period is typically 3.2 to 4.5 years. For residential systems with net-metering, the payback period is typically 4.5 to 6 years, after which you enjoy virtually free electricity for the remaining 20+ years of the system's life.",
    category: "pricing-savings",
  },
];
