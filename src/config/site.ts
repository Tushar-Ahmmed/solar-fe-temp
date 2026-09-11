import { CompanyConfig } from "@/types";

export const siteConfig: CompanyConfig = {
  name: "SolarPower BD",
  legalName: "SolarPower Bangladesh Ltd.",
  tagline: "Reliable Solar Energy Solutions for Homes, Businesses & Industries",
  shortDescription:
    "Leading provider of high-efficiency solar panels, hybrid inverters, lithium batteries, and complete turnkey solar installations across Bangladesh.",
  description:
    "SolarPower BD delivers engineered solar energy systems for residential rooftops, commercial factories, agricultural pumps, and off-grid facilities across Bangladesh. Engineered for maximum efficiency and long-term reliability.",
  foundedYear: 2020,
  domain: "solarpowerbd.com",
  url: "https://solarpowerbd.com",
  email: "info@solarpowerbd.com",
  salesEmail: "sales@solarpowerbd.com",
  supportEmail: "support@solarpowerbd.com",
  phone: "+880 1783001045",
  phoneRaw: "+8801783001045",
  whatsapp: "+880 1783001045",
  whatsappRaw: "8801783001045",
  emergencyPhone: "+880 1931329111",
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

export const seoByLanguage = {
  en: {
    title: "SolarPower Bangladesh | Reliable Solar Energy Solutions",
    description:
      "Leading provider of high-efficiency solar panels, hybrid inverters, lithium batteries, and complete turnkey solar installations across Bangladesh.",
    keywords: [
      "solar energy Bangladesh",
      "solar panels Dhaka",
      "solar inverter price in Bangladesh",
      "solar battery LiFePO4 Bangladesh",
      "solar net metering DESCO DPDC BREB",
      "industrial solar rooftop Bangladesh",
      "residential solar system Bangladesh",
      "solar system installation Bangladesh",
      "solar accessories Dhaka",
    ],
    ogTitle: "SolarPower Bangladesh | Solar Energy Solutions for Homes & Businesses",
    ogDescription:
      "Cut electricity bills and improve energy independence with engineered solar systems designed for Bangladesh’s climate and grid conditions.",
    schemaName: "SolarPower Bangladesh",
    schemaAlternateName: "SolarPower Bangladesh Ltd.",
  },
  bn: {
    title: "সোলার পাওয়ার বাংলাদেশ | নির্ভরযোগ্য সোলার শক্তির সমাধান",
    description:
      "বাংলাদেশের জন্য উচ্চদক্ষতার সোলার প্যানেল, হাইব্রিড ইনভার্টার, লিথিয়াম ব্যাটারি ও টার্নকি সোলার ইনস্টলেশন সমাধান প্রদানকারী শীর্ষ প্রতিষ্ঠান।",
    keywords: [
      "বাংলাদেশে সোলার প্যানেল",
      "ঢাকার সোলার সিস্টেম",
      "বাংলাদেশে সোলার ইনভার্টার দাম",
      "লিথিয়াম ব্যাটারি বাংলাদেশ",
      "নেট মিটারিং বাংলাদেশ",
      "রুফটপ সোলার বাংলাদেশ",
      "হোম সোলার সিস্টেম বাংলাদেশ",
      "সোলার ইনস্টলেশন বাংলাদেশ",
      "সোলার এক্সেসরিজ ঢাকা",
    ],
    ogTitle: "সোলার পাওয়ার বাংলাদেশ | ঘর ও ব্যবসার জন্য সোলার শক্তি",
    ogDescription:
      "বাংলাদেশের আবহাওয়া ও গ্রিডের জন্য ডিজাইন করা সোলার সিস্টেমে বিনিয়োগ করে বিদ্যুৎ খরচ কমান ও শক্তি নির্ভরতা বাড়ান।",
    schemaName: "সোলার পাওয়ার বাংলাদেশ",
    schemaAlternateName: "সোলার পাওয়ার বাংলাদেশ লিমিটেড",
  },
} as const;
