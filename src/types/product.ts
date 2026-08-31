export type ProductCategory =
  | "solar-panels"
  | "solar-inverters"
  | "solar-batteries"
  | "charge-controllers"
  | "mounting-structures"
  | "solar-cables-accessories";

export interface ProductSpecItem {
  label: string;
  value: string;
  group?: "Electrical" | "Mechanical" | "General" | "Warranty";
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  modelNumber?: string;
  category: ProductCategory;
  categoryName: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery?: string[];
  keySpecs: {
    capacityOrPower?: string;
    efficiency?: string;
    warrantyYears?: number;
    voltage?: string;
    type?: string;
  };
  specifications: ProductSpecItem[];
  features: ProductFeature[];
  applications: string[];
  benefits: string[];
  isFeatured?: boolean;
  inStock?: boolean;
  relatedProductSlugs?: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  iconName: string;
  itemCount?: number;
}
