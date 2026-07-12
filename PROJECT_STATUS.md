# Momil Foods — Project Status & Handoff

**Read this first in a fresh session, then continue.**

## Where things are
- **ACTIVE project folder:** `/Users/sid/Downloads/momil-foods-main/` ← work here
  - (An old copy at `/Users/sid/Projects/momil-foods` is broken/stale — ignore it.)
- **GitHub:** https://github.com/AbdullahBuildsDev/momil-foods (branch `main`, always push here)
- **Hosting:** Netlify (static export). **Domain:** momilfoods.com (not connected yet)

## Tech
- Next.js 16.2.6 (App Router, Turbopack), `output: 'export'` static export
- Tailwind v4 + lots of inline styles. framer-motion, lucide-react installed.
- Contact form: Web3Forms key `385c757a-19f0-4d1f-a43d-916d54f57a4a` → momilfoods@gmail.com

## Run it
```bash
cd /Users/sid/Downloads/momil-foods-main
npm run dev            # dev at http://localhost:3000  (SLOW on phone — dev mode)
# Real speed / phone test = production build:
npm run build          # -> out/  (static export)
npx serve out -l 4000  # http://localhost:4000  (fast, matches Netlify)
# Phone: http://<mac-ip>:4000   (get IP: ipconfig getifaddr en0)
```

## What's DONE
- Full site: Home, About, Contact (Web3Forms), Blog (+posts), Products (all + per-category + per-product)
- Navbar (transparent hero / solid interior, mobile hamburger), Footer (2 phone numbers, colorful IG/LinkedIn/WhatsApp), HeroSlider (Unsplash, Ken Burns)
- New logo (transparent) + favicon
- **Data model:** `lib/data.js` = single source of truth (categories + products). 17 categories, ~72 products.
- Reusable components: `ProductCard` + `ProductGrid` (2/3/4 cols responsive), `ProductImageZoom` (zoom on detail), `MobileActionBar` (sticky Enquire+WhatsApp on mobile product pages), `FloatingWhatsApp` (hidden on product detail), `TrustBadges`, `Reveal` (scroll fade), `CountUp`.
- Search + category filter on /products (`ProductBrowser`)
- SEO: per-page metadata, `app/sitemap.js`, `app/robots.js`, OpenGraph
- **Images optimized to WebP** (~20-55KB each). When adding new products: resize to ~900px and convert to `.webp` (Pillow), place in `public/products/<category-slug>/`, reference in `lib/data.js`.

## How to add products (repeat pattern)
1. Put source pics in `public/products/<category-slug>/` and convert to `.webp` (Pillow: max 900px, quality 80).
2. Add object to `products` array in `lib/data.js`: `{ id, title, slug, category, image, description, weight, origin, featured }`.
3. New category? Add to `categories` array too.
4. Grid/cards auto-handle any count — nothing else to touch.

## PENDING / next
1. Image compression = done — keep new uploads as webp.
2. Connect domain momilfoods.com on Netlify (nameservers) — go live.
3. Real Instagram/LinkedIn links (currently `href="#"` in Footer + Contact).
4. Optional future: self-serve CMS (Sanity) so client edits products themselves.

## User (Abdullah Awan)
- Roman Urdu / Hinglish, caveman mode (short, direct). No address anywhere on site.
- Buyers: USA, UK, Vietnam, Oman, Romania — site must feel premium/international.
