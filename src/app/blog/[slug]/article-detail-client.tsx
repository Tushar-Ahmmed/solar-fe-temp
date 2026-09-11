"use client";

import React from "react";
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
import { BlogArticle } from "@/types";
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
import { useLanguage } from "@/context/language-context";

interface ArticleDetailClientProps {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
}

export function ArticleDetailClient({ article, relatedArticles }: ArticleDetailClientProps) {
  const { t, language } = useLanguage();
  const articleTitle = language === "bn" ? article.title_bn || article.title_en || article.title : article.title_en || article.title;
  const articleExcerpt = language === "bn" ? article.excerpt_bn || article.excerpt_en || article.excerpt : article.excerpt_en || article.excerpt;

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t("breadcrumb.blog", "Solar Guide"), href: "/blog" },
            { label: articleTitle },
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
                  {article.readingTimeMinutes} {t("blog.readingTime", "min read")}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {articleTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {articleExcerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
            <Image
              src={article.image}
              alt={article.imageAlt || articleTitle}
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
              <span className="text-xs font-bold text-slate-500">{t("blog.tags", "Tags:")}</span>
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
                  {t("blog.recommendedHardware", "Recommended Hardware")}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {t("blog.hardwareBannerTitle", "Need Tier-1 certified equipment for this configuration?")}
                </h3>
                <p className="text-xs text-slate-300">
                  {t(
                    "blog.hardwareBannerDesc",
                    "Browse our full range of tested panels, hybrid inverters, and LiFePO4 batteries with Bangladesh warranty."
                  )}
                </p>
              </div>
              <Button
                variant="solar"
                size="md"
                href={`/products?category=${article.relatedProductCategory}`}
                className="shrink-0 text-xs font-bold shadow-md"
                rightIcon={<ShoppingBag className="h-4 w-4" />}
              >
                {t("products.viewAll", "View Equipment Catalog")}
              </Button>
            </div>
          )}

          {/* Author Profile */}
          <BlogAuthorBox author={article.author} />

          {/* Bottom Share Bar */}
          <div className="pt-2">
            <BlogShareBar articleTitle={articleTitle} slug={article.slug} />
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-200 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {t("blog.relatedArticles", "Related Solar Guides")}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  href="/blog"
                  rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                >
                  {t("common.viewAll", "All Articles")}
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
              {t("blog.backToGuides", "Back to All Guides")}
            </Button>
          </div>
        </article>
      </Container>
    </div>
  );
}
