import { siteConfig } from "@/config/site";

export const companyData = {
  ...siteConfig,
  stats: [
    { value: "25+", label: "Year Equipment Warranty", sublabel: "Tier-1 Manufacturer Backed" },
    { value: "98.2%", label: "Peak Inverter Efficiency", sublabel: "Smart MPPT Tracking" },
    { value: "6,000+", label: "Lithium Battery Cycles", sublabel: "10-15 Year Life Expectancy" },
    { value: "100%", label: "Net Metering Compliant", sublabel: "DESCO, DPDC, BREB Ready" },
  ],
  coreValues: [
    {
      title: "Engineering Excellence",
      description:
        "Every installation is custom-designed by certified electrical engineers with meticulous single-line diagrams (SLD) and structural wind load analysis.",
    },
    {
      title: "Tier-1 Genuine Equipment",
      description:
        "We source directly from world-leading Tier-1 solar manufacturers with genuine manufacturer serial verification and warranty certificates.",
    },
    {
      title: "Long-Term Local Support",
      description:
        "Our dedicated Bangladesh technical team provides responsive on-site warranty support, preventative maintenance, and lifetime phone/WhatsApp troubleshooting.",
    },
    {
      title: "Transparent & Honest Consultation",
      description:
        "We provide realistic generation estimates and transparent ROI calculations without fake claims or hidden installation charges.",
    },
  ],
};
