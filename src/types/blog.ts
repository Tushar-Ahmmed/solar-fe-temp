export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or structured text
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  author: BlogAuthor;
  isFeatured?: boolean;
  relatedArticleSlugs?: string[];
  relatedProductCategory?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "products" | "services" | "pricing-savings" | "technical";
}
