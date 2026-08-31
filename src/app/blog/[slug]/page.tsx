import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Tag,
  Zap,
  ShoppingBag,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { blogArticles, getArticleBySlug, getRelatedArticles } from "@/data/blog";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BlogAuthorBox,
  BlogCard,
  BlogTOC,
  BlogShareBar,
  BlogContentRenderer,
} from "@/components/blog";
import { formatDate } from "@/lib/utils";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const url = `${siteConfig.url}/blog/${article.slug}`;

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      url,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.image,
          width: 800,
          height: 600,
          alt: article.imageAlt || article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  // Schema.org Article Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/banners/hero-solar-banner.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
  };

  // Schema.org BreadcrumbList Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solar Guide",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Solar Guide", href: "/blog" },
              { label: article.title },
            ]}
          />

          <article className="mt-4 max-w-4xl mx-auto space-y-8">
            {/* Header Details */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary" size="sm" className="font-bold">
                  {article.category}
                </Badge>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readingTimeMinutes} min read
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Top Interactive Share & WhatsApp Bar */}
            <BlogShareBar articleTitle={article.title} slug={article.slug} />

            {/* Interactive Table of Contents */}
            <BlogTOC content={article.content} />

            {/* Article Body with Rich Content Renderer */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs prose-slate max-w-none">
              <BlogContentRenderer content={article.content} />

              {/* Tags Strip */}
              <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-500">Tags:</span>
                {article.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={`/blog?category=${encodeURIComponent(article.category)}`}
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 text-xs font-medium transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cross-Sell Related Equipment Banner */}
            {article.relatedProductCategory && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Zap className="h-4 w-4" />
                    Recommended Hardware
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Need Tier-1 certified equipment for this configuration?
                  </h3>
                  <p className="text-xs text-slate-300">
                    Browse our full range of tested panels, hybrid inverters, and LiFePO4 batteries with Bangladesh warranty.
                  </p>
                </div>
                <Button
                  variant="solar"
                  size="md"
                  href={`/products?category=${article.relatedProductCategory}`}
                  className="shrink-0 text-xs font-bold shadow-md"
                  rightIcon={<ShoppingBag className="h-4 w-4" />}
                >
                  View Equipment Catalog
                </Button>
              </div>
            )}

            {/* Author Profile */}
            <BlogAuthorBox author={article.author} />

            {/* Bottom Share Bar */}
            <div className="pt-2">
              <BlogShareBar articleTitle={article.title} slug={article.slug} />
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-10 border-t border-slate-200 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Related Solar Guides
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    href="/blog"
                    rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                  >
                    All Articles
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((rel) => (
                    <BlogCard key={rel.id} article={rel} />
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Nav */}
            <div className="pt-6 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                href="/blog"
                leftIcon={<ArrowLeft className="h-4 w-4" />}
              >
                Back to All Guides
              </Button>
            </div>
          </article>
        </Container>
      </div>
    </>
  );
}
