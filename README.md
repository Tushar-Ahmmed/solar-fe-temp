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

## 🌍 Language Toggle Implementation Roadmap (English ↔ Bangla)

**Status:** Under Development | **Complexity:** 10-Phase Epic | **Expertise Required:** i18n, SEO, Digital Marketing Analysis

**Strategic Objective:** Enable seamless English ↔ Casual Bangla (ক্যাজুয়াল বাংলা, not সাধু বাংলা) toggle with:
- Language preference persistence (localStorage)
- Optimized marketing copy for Bengali audience (colloquial, conversational, high-intent keywords)
- Zero layout shift or CLS issues
- Full SEO support (meta tags, structured data, sitemap)
- Complete content translation across 34+ routes

---

### 📋 Implementation Phases

#### **PHASE 1: Complete English Translation Audit & Expansion** ✅ COMPLETED
**Objective:** Audit existing English translations and expand to cover 100% of UI/marketing copy.
**Components Affected:** All translation keys in `src/lib/i18n/translations.ts`
**Deliverables:**
- [x] Add all missing translation keys (hero, products, services, blog, forms, etc.)
- [x] Review for copy optimization (marketing-focused, high-intent keywords)
- [x] Ensure consistent terminology across pages
- [x] Create structured translation key naming convention (prefix.feature.element)
**Completed:** 264+ translation keys added (English & Bangla pair) with marketing-optimized copy
**Files Modified:** `src/lib/i18n/translations.ts`
**Translation Key Categories Added:**
- Product details, specifications, features, benefits
- Service details, process timeline, deliverables
- Blog/article metadata, comments, sharing
- Form validation, error messages, success notifications
- UI elements (badges, breadcrumbs, pagination, modals)
- Navigation labels, footer content
- SEO meta titles and descriptions
- Language toggle interface

---

#### **PHASE 2: Bangla (Casual) Translation Creation** ❌ NOT STARTED
**Objective:** Create comprehensive casual Bangla translations (ক্যাজুয়াল বাংলা) with digital marketing expertise.
**Style Guide for Bangla:**
- ✅ Use conversational, friendly tone (চলিত বাংলা)
- ✅ High-intent keywords for solar industry (সোলার, বিদ্যুৎ বিল, বাঁচান, টাকা)
- ✅ Local context (load shedding = লোডশেডিং/দুর্ঘটনা, DESCO/DPDC utility names recognized)
- ✅ Currency & measurements (টাকা, কিলোওয়াট, বছর)
- ✅ **AVOID:** Formal/sadhu Bangla (সাধু বাংলা), overly technical jargon
**Marketing-Critical Phrases (localized for Bangla audience):**
- "বিদ্যুৎ বিল ৮০% পর্যন্ত কমান" (Bill reduction impact)
- "লোডশেডিং থেকে মুক্তি" (Frequent pain point in Bangladesh)
- "সহজ কিস্তিতে সোলার সিস্টেম" (Easy financing angle)
- "ঘরে বসে ফ্রি পরামর্শ" (Home consultation value prop)
**Deliverables:**
- [ ] Native Bangla speaker review + digital marketing analysis
- [ ] Create `translations.bn` export with 400+ key-value pairs
- [ ] Verify colloquial tone, not formal/sadhu Bangla
- [ ] Optimize for search intent (local SEO keywords)

---

#### **PHASE 3: Language Toggle UI Component** ❌ NOT STARTED
**Objective:** Design and implement language toggle button in header & mobile nav.
**Components to Update:**
- `src/components/layout/header.tsx` → Add toggle button (globe icon + lang code)
- `src/components/layout/mobile-nav.tsx` → Add toggle in mobile menu
**Design Specs:**
- Location: Top-right of header (before WhatsApp CTA button)
- Style: Lucide `Globe2` icon + language code (EN / BN) with dropdown or toggle
- Mobile: Integrate in mobile nav menu with flag/label
- Accessibility: `aria-label`, keyboard-navigable, high contrast
- RTL consideration: Bangla text alignment (currently LTR design)
**Deliverables:**
- [ ] `src/components/layout/language-toggle.tsx` (new component)
- [ ] Update header & mobile-nav to include toggle
- [ ] Test on mobile/desktop breakpoints
- [ ] Add smooth transitions (no jarring layout shift)

---

#### **PHASE 4: Homepage & Hero Translation** ❌ NOT STARTED
**Objective:** Translate homepage (hero, intro, products, solutions, benefits, FAQ, CTA).
**Pages:** `/` (homepage)
**Components Affected:**
- HeroSection
- CompanyIntro
- FeaturedProducts
- SolutionsSplit
- BenefitsSection
- FAQSection
- CTABanner
**Bangla Strategy:**
- Hero headline: Emphasize bill savings + load shedding protection (key pain points)
- Company intro: Trust + engineering expertise in local context
- Products: Highlight Tier-1, warranty, local support
- Solutions: Residential vs. commercial use cases (applicable to Bangladesh)
**Deliverables:**
- [ ] All 7 home components use `t()` hook for translations
- [ ] Test English/Bangla toggle on homepage
- [ ] Verify no text overflow or layout issues with longer Bangla copy
- [ ] Check homepage performance (no additional bundle size impact)

---

#### **PHASE 5: Products & Services Pages Translation** ❌ NOT STARTED
**Objective:** Translate product listings, product detail pages, services, and service detail pages.
**Routes Affected:** `/products`, `/products/[slug]`, `/services`, `/services/[slug]`
**Components Affected:**
- ProductCard
- ProductFilters
- ProductGallery
- ProductSpecsTable
- ProductQuoteCard
- ServiceCard
- ServiceProcessTimeline
- ServiceInquiryBox
**Bangla Strategy:**
- Product specs: Technical terms (Watt, Ampere, kWh) + Bangla equivalents
- Pricing/ROI calculations: Translate currency context, payback period messaging
- Quote CTA: Emphasize quick response, engineer consultation
- Service phases: Step-by-step process in Bangla (5-phase EPC timeline)
**Deliverables:**
- [ ] ProductCard, ProductFilters, ProductGallery fully translated
- [ ] ProductSpecsTable adapted for Bangla (no horizontal overflow)
- [ ] ServiceCard, ServiceProcessTimeline, ServiceInquiryBox translated
- [ ] Test dynamic product quote requests in both languages
- [ ] Verify WhatsApp quote messages include correct language context

---

#### **PHASE 6: Blog & About Pages Translation** ❌ NOT STARTED
**Objective:** Translate blog articles, blog metadata, and about/why-solar/why-us pages.
**Routes Affected:** `/blog`, `/blog/[slug]`, `/about`, `/why-solar`, `/why-us`
**Components Affected:**
- BlogCard
- BlogAuthorBox
- BlogShareBar
- BlogTOC
- BlogContentRenderer
**Bangla Strategy:**
- Blog slugs: Keep as English URL paths (e.g., `/blog/solar-benefits` not `/blog/সোলার-সুবিধা`) for SEO stability
- Blog title/excerpt: Translate in data layer, not URL
- About/Why pages: Localize company narrative for Bangla audience (SREDA, IEB certifications context)
- Author bios: Can be bilingual or Bangla-only
**Deliverables:**
- [ ] Blog article data layer: `title_en`, `title_bn`, `excerpt_en`, `excerpt_bn` structure
- [ ] BlogCard, BlogAuthorBox, BlogShareBar use translations
- [ ] About page narrative: Bengali context (IEB, local standards)
- [ ] Why Solar page: Bangladesh-specific net metering + load shedding context
- [ ] Why Us page: Local certifications + warranty localization
- [ ] Test blog slugs (remain English) but content fully Bangla

---

#### **PHASE 7: Forms, Navigation & Interactive Elements** ❌ NOT STARTED
**Objective:** Translate all forms, navigation menus, error messages, and interactive UI.
**Components Affected:**
- Header/Footer navigation links
- Breadcrumbs
- ContactForm (labels, placeholders, error messages, success messages)
- MobileNav menu
- StickyActions (Call, WhatsApp, Quote buttons)
- TopBar (hours, location, hotline label)
- 404 Page (not-found.tsx)
**Bangla Strategy:**
- Form labels: Casual, customer-friendly (e.g., "আপনার ফোন নম্বর" not "টেলিফোন সংখ্যা প্রদান করুন")
- Validation errors: Helpful, not technical (e.g., "অনুগ্রহ করে সঠিক ফোন নম্বর দিন")
- Success messages: Warm, reassuring (e.g., "ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করব")
- Navigation: Keep familiar structure, just translate labels
**Deliverables:**
- [ ] ContactForm fully translated with Bangla validation messages
- [ ] Navigation menus (Header, MobileNav, Footer) translated
- [ ] TopBar (hours, location, labels) translated
- [ ] Error pages (404, etc.) translated
- [ ] All form success/error messages in both languages
- [ ] Test form submission flow in both languages

---

#### **PHASE 8: SEO, Metadata & Schema Translation** ❌ NOT STARTED
**Objective:** Translate page metadata, structured data (JSON-LD), sitemap, robots.txt, and favicon alt-text.
**Technical Changes:**
- Meta titles: Bilingual or language-specific
- Meta descriptions: Both languages with local SEO keywords
- Open Graph (og:title, og:description): Language-specific
- Structured Data (JSON-LD): Translate `name`, `description`, `text` fields
- Sitemap: Consider language-specific routes OR single-language approach
- robots.txt: No changes needed (language toggle is client-side)
**SEO Strategy for Bangla:**
- Meta titles: Bangla keywords first for .com.bd audience + English fallback
- Focus keywords: "সোলার প্যানেল ঢাকা", "বিদ্যুৎ বিল কমানোর উপায়", "হোম সোলার সিস্টেম বাংলাদেশ"
- LocalBusiness schema: Include Bengali translations
- BreadcrumbList schema: Translate breadcrumb labels (but keep URLs English)
**Deliverables:**
- [ ] Update `layout.tsx` to render language-specific meta tags
- [ ] Update JSON-LD schemas to include `name@bn`, `description@bn` fields
- [ ] Optimize meta descriptions with Bangla SEO keywords
- [ ] Update Open Graph tags for social sharing in Bangla
- [ ] Test structured data with Google Rich Results Test (both languages)
- [ ] Create language-specific sitemap OR update existing sitemap logic

---

#### **PHASE 9: Testing, Refinement & Performance Optimization** ❌ NOT STARTED
**Objective:** QA across all pages, fix CLS issues, optimize performance, and refine Bangla copy.
**Testing Checklist:**
- [ ] Toggle button visibility and functionality on all viewport sizes
- [ ] Language persistence across page navigation (localStorage)
- [ ] No missing translation keys (implement fallback to English)
- [ ] No layout shifts when switching languages (CLS = 0)
- [ ] Text overflow/truncation on mobile (Bangla longer than English)
- [ ] Form validation messages in correct language
- [ ] WhatsApp messages include correct language (EN or BN)
- [ ] Links/URLs remain consistent regardless of language
- [ ] Browser back-button language preference is retained
- [ ] Performance: Lighthouse score no regression (bundle size impact <5KB)
**Refinement:**
- [ ] Native Bangla speaker review + customer feedback
- [ ] Marketing copy A/B testing (colloquial vs. formal Bangla)
- [ ] Adjust messaging based on user behavior (heatmaps, conversions)
**Deliverables:**
- [ ] Full QA report with screenshots (EN vs BN)
- [ ] Performance report (Lighthouse, bundle size)
- [ ] Bangla copy refinement document
- [ ] Accessibility audit (WCAG 2.1 AA for both languages)

---

#### **PHASE 10: Documentation & Deployment** ❌ NOT STARTED
**Objective:** Document i18n architecture, deployment steps, and handoff to future developers/AI agents.
**Documentation:**
- [ ] Translation workflow guide (how to add/update translations)
- [ ] Bangla tone & style guide (for consistency with new content)
- [ ] SEO best practices for bilingual site
- [ ] Deployment checklist (build, test, deploy to production)
- [ ] Monitoring & analytics setup (track language preferences, conversions by language)
**Deployment Steps:**
```bash
npm run build        # Build static HTML in both languages
npm run export       # Export to /out directory
# Deploy /out to Nginx / Vercel / CloudFront
```
**Future Enhancements (Post-MVP):**
- [ ] Language-specific URL prefixes (e.g., /en/, /bn/) for better SEO
- [ ] Automatic language detection (browser Accept-Language header)
- [ ] Google Translate API integration for additional languages
- [ ] Bangla blog content creation workflow
**Deliverables:**
- [ ] Updated README with i18n section
- [ ] `TRANSLATION_GUIDE.md` with workflow instructions
- [ ] `BANGLA_STYLE_GUIDE.md` for consistency
- [ ] Deployment checklist in CI/CD pipeline
- [ ] Updated monitoring dashboard (language metric tracking)

---

### 🚀 How to Execute Phases

**Each phase will be executed in sequence. Upon user command:**
1. **User says:** "Execute Phase X" (or just "Phase X")
2. **Agent action:**
   - Reads implementation details above
   - Executes all code changes (component updates, translation additions, etc.)
   - Runs type checking + linting
   - Tests the phase locally (npm run dev)
3. **Phase complete:** Updates README with ✅ COMPLETED marker
4. **Next phase:** Ready to proceed to Phase X+1

**Current Progress:**
- ✅ Phase 1: Pending (COMPLETED 2026-09-11)
- ⏳ Phase 2-10: Queued

---

## ⚙️ Central Business Configuration

To update company contact details, address, hotline, or WhatsApp numbers, edit a single file:
👉 [`src/config/site.ts`](src/config/site.ts)

All structured data schemas, footer links, header hotlines, contact forms, and WhatsApp URLs will automatically reflect the updated configuration across the entire site.
