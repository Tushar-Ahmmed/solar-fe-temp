# Deployment Checklist

## Before Deploying

- [ ] Confirm `src/config/site.ts` has the production domain, email addresses, phone numbers, WhatsApp number, and business address.
- [ ] Confirm `public/images` contains all referenced assets.
- [ ] Review the English and Bangla copy changes.
- [ ] Run `npm ci` from a clean checkout.
- [ ] Run `npm run qa:phase9`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Review the generated sitemap and robots routes.

## Docker Compose Deployment

The production container uses Next.js standalone output and listens on port 3000.

```bash
docker compose build --pull
docker compose up -d
docker compose ps
docker compose logs --tail=100 solar-app
```

Open `http://localhost:3000` and verify the home page, language toggle, products, services, blog, contact form, sitemap, and robots routes.

The Compose healthcheck requests `/` every 30 seconds. A healthy container should report `healthy` in `docker compose ps`.

## Production Smoke Test

- [ ] `/` returns HTTP 200.
- [ ] `/products`, `/services`, `/blog`, `/about`, and `/contact` return HTTP 200.
- [ ] `/sitemap.xml` returns XML.
- [ ] `/robots.txt` references the production sitemap.
- [ ] English and Bangla toggles work on desktop and mobile.
- [ ] Reloading after changing language preserves the selected language.
- [ ] WhatsApp links contain the expected language message.
- [ ] Forms show localized validation and success/error states.
- [ ] Canonical URLs remain English and stable.

## Monitoring

Track these signals after release:

- container health and restart count
- HTTP 4xx and 5xx rates
- response time for `/`, `/products`, `/services`, and `/contact`
- contact form submissions and WhatsApp click-throughs
- language preference distribution using the `solar_bd_language` client-side preference where analytics consent exists
- Core Web Vitals, especially CLS and mobile LCP

Do not collect the language preference or form contents in analytics without the required consent and privacy controls.

## Rollback

1. Keep the previous known-good image tag available.
2. Stop the current service: `docker compose down`.
3. Restore the previous image or checkout.
4. Rebuild and start: `docker compose up -d --build`.
5. Repeat the production smoke test and inspect logs.

## Important Notes

- This project uses `output: "standalone"`; do not deploy `.next` as a static export.
- There is no `npm run export` script in this project.
- Keep secrets and environment-specific values outside the repository.
- `NEXT_TELEMETRY_DISABLED=1` is already configured for the container build and runtime.
