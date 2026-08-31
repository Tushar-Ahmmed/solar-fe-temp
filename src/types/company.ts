export interface OfficeAddress {
  street: string;
  area: string;
  city: string;
  district: string;
  country: string;
  postalCode?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface BusinessHours {
  days: string;
  hours: string;
  closedOn?: string;
}

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  description: string;
  foundedYear: number;
  domain: string;
  url: string;
  email: string;
  salesEmail: string;
  supportEmail: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  emergencyPhone?: string;
  address: OfficeAddress;
  businessHours: BusinessHours;
  social: SocialLinks;
  serviceAreas: string[];
  certificationsPlaceholder: string[];
}
