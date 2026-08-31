import { CompanyConfig } from "@/types";

export const siteConfig: CompanyConfig = {
  name: "SolarPower Bangladesh",
  legalName: "SolarPower Bangladesh Ltd.",
  tagline: "Reliable Solar Energy Solutions for Homes, Businesses & Industries",
  shortDescription:
    "Leading provider of high-efficiency solar panels, hybrid inverters, lithium batteries, and complete turnkey solar installations across Bangladesh.",
  description:
    "SolarPower Bangladesh delivers engineered solar energy systems for residential rooftops, commercial factories, agricultural pumps, and off-grid facilities across Bangladesh. Engineered for maximum efficiency and long-term reliability.",
  foundedYear: 2020,
  domain: "solarpowerbd.com",
  url: "https://solarpowerbd.com",
  email: "info@solarpowerbd.com",
  salesEmail: "sales@solarpowerbd.com",
  supportEmail: "support@solarpowerbd.com",
  phone: "+880 1700-000000",
  phoneRaw: "+8801700000000",
  whatsapp: "+880 1700-000000",
  whatsappRaw: "8801700000000",
  emergencyPhone: "+880 1800-000000",
  address: {
    street: "House #12, Road #04, Block-B",
    area: "Banani",
    city: "Dhaka",
    district: "Dhaka",
    postalCode: "1213",
    country: "Bangladesh",
    coordinates: {
      latitude: 23.7937,
      longitude: 90.4066,
    },
  },
  businessHours: {
    days: "Saturday - Thursday",
    hours: "9:00 AM - 6:00 PM (BST)",
    closedOn: "Friday",
  },
  social: {
    facebook: "https://facebook.com/solarpowerbd",
    linkedin: "https://linkedin.com/company/solarpowerbd",
    youtube: "https://youtube.com/@solarpowerbd",
    twitter: "https://twitter.com/solarpowerbd",
  },
  serviceAreas: [
    "Dhaka Division",
    "Chittagong Division",
    "Gazipur & Savar Industrial Zones",
    "Narayanganj",
    "Sylhet Division",
    "Rajshahi & Rangpur",
    "Khulna & Barishal",
    "Nationwide Delivery & Installation Support",
  ],
  certificationsPlaceholder: [
    "ISO 9001:2015 Quality Management Compliant",
    "SREDA Approved Technical Guidelines",
    "Tier 1 Equipment Manufacturer Partnerships",
    "Certified Electrical Engineers (IEB Registered)",
  ],
};

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Services", href: "/services" },
  { title: "Why Solar", href: "/why-solar" },
  { title: "Why Choose Us", href: "/why-us" },
  { title: "Solar Guide", href: "/blog" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];
