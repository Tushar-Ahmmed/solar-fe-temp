# Bilingual SEO Guide

## URL Strategy

The current site uses one English URL for each page and switches visible language client-side. Keep slugs, canonical URLs, sitemap URLs, and internal links in English until language-prefixed routes are implemented.

Do not create duplicate `/en` and `/bn` URLs without adding server-rendered locale metadata and `hreflang` links.

## Metadata

- Add page-specific metadata in the route `page.tsx` when the page has a distinct search intent.
- Use `seoByLanguage` in `src/config/site.ts` for global language-aware title, description, keywords, Open Graph, and schema values.
- Keep descriptions useful and specific to Bangladesh search intent.
- Do not keyword-stuff Bangla descriptions.
- Keep Open Graph image URLs absolute in production.

## Structured Data

- Keep JSON-LD valid JSON and render it through `application/ld+json`.
- Use stable English URLs in `url`, `item`, and `urlTemplate` fields.
- Localize human-readable `name`, `description`, and breadcrumb labels when the active language changes.
- Keep organization identity, telephone, address, and social profile data consistent.
- Validate schema output after changes with the production build and Google Rich Results Test before release.

## Sitemap And Robots

- `src/app/sitemap.ts` owns the canonical route list.
- `src/app/robots.ts` references `/sitemap.xml` and blocks `/api/`.
- Add every indexable route to the sitemap; do not add query-string variants.
- Keep `robots.txt` unchanged for the client-side language toggle.

## Release Review

- Inspect page source and browser metadata in English and Bangla.
- Confirm `html[lang]`, title, description, `og:locale`, and JSON-LD update after switching language.
- Confirm canonical URL and sitemap URL do not change when the language changes.
