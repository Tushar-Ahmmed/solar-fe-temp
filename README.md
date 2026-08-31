# SolarPower Bangladesh — Production Solar Business Web Platform

A production-ready, SEO-optimized, conversion-focused web platform engineered for a leading solar energy company operating in Bangladesh.

---

## ⚡ Tech Stack & Architecture

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components by default, SSG static pre-rendering)
* **Language:** [TypeScript 5.8](https://www.typescriptlang.org/) (Strict Mode)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Next.js Google Fonts (`Inter` with `display: swap`)
* **Data Architecture:** Type-safe static repository (`src/data/`) decoupled from UI, ready for instant API / Headless CMS migration (UI → TS Data → Future NestJS / PostgreSQL).
* **SEO & Rich Snippets:** Full Schema.org JSON-LD structured data (`LocalBusiness`, `Organization`, `FAQPage`, `WebSite` with `SearchAction`, `Product`, `BlogPosting`, `Service`, `BreadcrumbList`).
* **Conversion Optimization:** Context-aware WhatsApp deep linking (`src/lib/whatsapp.ts`), dynamic phone hotlines, and interactive quote capture.

---

## 📁 Project Structure

```
solar-fe-temp/
├── public/
│   └── images/              # Semantic WebP image library (banners, blog, company, icons, products, services)
├── src/
│   ├── app/                 # Next.js App Router (100% pre-rendered SSG)
│   │   ├── about/           # /about (AboutPage & Organization JSON-LD)
│   │   ├── blog/            # /blog & /blog/[slug] (BlogPosting schema, TOC, AuthorBox, SocialShare)
│   │   ├── contact/         # /contact (ContactPage & LocalBusiness schema, Interactive Survey Form)
│   │   ├── products/        # /products & /products/[slug] (Product schema, STC Specs, Gallery, Direct WhatsApp Quote)
│   │   ├── services/        # /services & /services/[slug] (Service schema, 5-Phase EPC Timeline, BOM Scope)
│   │   ├── why-solar/       # /why-solar (Bangladesh Net Metering policy, ROI payback calculations)
│   │   ├── why-us/          # /why-us (IEB certifications, Tier-1 warranties, structural engineering)
│   │   ├── globals.css      # Tailwind CSS v4 custom tokens
│   │   ├── layout.tsx       # Root layout, WebSite SearchAction schema, header/footer shell
│   │   ├── not-found.tsx    # Accessible 404 error page
│   │   ├── page.tsx         # Homepage (10 conversion sections, LocalBusiness & FAQPage schemas)
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic XML sitemap indexing all 34+ routes
│   ├── components/
│   │   ├── blog/            # BlogCard, BlogAuthorBox, BlogShareBar, BlogTOC, BlogContentRenderer
│   │   ├── forms/           # Accessible ContactForm with validation and structured payload
│   │   ├── home/            # Hero, CompanyIntro, FeaturedProducts, SolutionsSplit, Benefits, FAQ, CTABanner
│   │   ├── layout/          # TopBar, Header, MobileNav, StickyActions, Footer
│   │   ├── products/        # ProductCard, ProductFilters, ProductGallery, ProductQuoteCard, ProductSpecsTable
│   │   ├── services/        # ServiceCard, ServiceProcessTimeline, ServiceInquiryBox
│   │   └── ui/              # Button, Card, Badge, Breadcrumbs, Container, SectionHeader
│   ├── config/
│   │   └── site.ts          # Central single source of truth for business contact details, address & GPS
│   ├── data/                # Strongly typed datasets (products, services, blog, faqs, categories)
│   ├── lib/                 # Tailwind utility helpers and dynamic WhatsApp link builder
│   └── types/               # TypeScript interfaces (Product, Service, BlogArticle, CompanyConfig)
```

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type Checking & Linting
```bash
npm run lint
```

### 4. Production Build (Static Site Generation)
```bash
npm run build
```

---

## 🌐 Production Static Deployment (Nginx / Cloud)

This application produces **100% static HTML & assets** (34+ pre-rendered routes), making it deployable on any high-performance static web server or CDN (Nginx, Cloudflare Pages, Vercel, AWS S3 / CloudFront) without requiring an active Node.js daemon or database in Phase 1.

### Example Nginx Configuration:
```nginx
server {
    listen 80;
    server_name solarpowerbd.com www.solarpowerbd.com;

    root /var/www/solar-fe-temp/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    # Security & Cache Headers
    location ~* \.(webp|avif|png|jpg|jpeg|svg|css|js|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

---

## ⚙️ Central Business Configuration

To update company contact details, address, hotline, or WhatsApp numbers, edit a single file:
👉 [`src/config/site.ts`](file:///D:/Projects/solar-project/solar-fe-temp/src/config/site.ts)

All structured data schemas, footer links, header hotlines, contact forms, and WhatsApp URLs will automatically reflect the updated configuration across the entire site.
