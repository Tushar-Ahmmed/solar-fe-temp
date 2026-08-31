export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  targetAudience: string[];
  image: string;
  iconName: string;
  benefits: ServiceBenefit[];
  processSteps: ServiceProcessStep[];
  deliverables: string[];
  suitableFor: string[];
  isFeatured?: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}
