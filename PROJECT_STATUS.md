# Momil Foods — Project Status & Handoff

**Project:** Momil Foods Pvt. Ltd. — Pakistani food & beverages exporter website
**Owner:** Abdullah Awan (theabdullah.awan11@gmail.com)
**Reference site being cloned:** bhandarifoods.com
**Domain (purchased, not connected yet):** momilfoods.com
**GitHub:** https://github.com/AbdullahBuildsDev/momil-foods
**Hosting:** Netlify (free plan, 150 credits left this cycle)
**Deadline:** Live in 2-3 days

---

## Tech Stack

- **Framework:** Next.js 16.2.6 (App Router, Turbopack) — this is NOT the Next.js you know from training data
- **Styling:** Tailwind CSS v4 + inline styles + globals.css
- **Static export:** `output: 'export'` in `next.config.mjs`
- **Contact form:** Web3Forms (key: `385c757a-19f0-4d1f-a43d-916d54f57a4a`, sends to momilfoods@gmail.com)
- **Package manager:** npm
- **Node:** whatever the system has

**IMPORTANT:** Read `AGENTS.md` before writing any Next.js code — API differs from training data.

---

## Project Location

```
/Users/sid/Downloads/momil-foods-main/
```

---

## What's DONE ✅

### 1. Full UI overhaul (Bhandari Foods style, Momil content)
- Home page — hero slider, special products, commitment, about, social responsibility cards, products showcase, categories, testimonials, service strip
- About page — hero with stats (13+ years / 50+ products / 10+ markets / 24h response), four pillars, vision/mission, services, CTA strip. **NO address anywhere per client request.**
- Contact page — clean hero, email + WhatsApp chips, working Web3Forms enquiry form
- Blog listing + individual blog post pages (3 dummy posts in `lib/blogData.js`)
- Products listing + category pages + individual product pages (13 categories, 13 sample products in `lib/data.js`)

### 2. Components
- `Navbar.js` — solid dark on interior pages, transparent on homepage; hover dropdown for Products (simple category list, no product sub-items); mobile hamburger with full category menu; "Get In Touch" as bordered button
- `Footer.js` — 3-column layout (Brand + Quick Links + Contact Info), 80px vertical padding for breathing room, green top border separator, USA·UK·Vietnam·Oman·Pakistan export markets listed
- `HeroSlider.js` — 4 slides with Unsplash images (mango, spices, dry fruits, honey), auto-rotate 7s, dot nav + bottom progress bar

### 3. Contact form working
- Web3Forms integrated in `app/contact/page.js`
- Access key: `385c757a-19f0-4d1f-a43d-916d54f57a4a`
- All inputs have proper `name` attributes (name, email, company, country, message)
- Emails go to momilfoods@gmail.com

### 4. GitHub
- Repo initialized and pushed
- Latest commit: "Fix navbar, footer, blog posts, contact page"
- Remote: `https://github.com/AbdullahBuildsDev/momil-foods.git`

---

## What's PENDING 🚧

### 1. Product page redesign (HIGH PRIORITY)
User wants product category pages to match **Bhandari Foods exactly** — analyze bhandarifoods.com/products style:
- Full-width horizontal product cards
- Image left, text right (or overlay style)
- Breadcrumb navigation
- Possibly remove sidebar, use top filter chips instead
- Currently at: `app/products/[category]/page.js` and `app/products/[category]/[product]/page.js`

### 2. Real product images (client will provide)
User will provide folder structure like:
```
public/products/
  fruits-and-juices/
    mango-juice/
      pic1.jpg  ← main
      pic2.jpg
      pic3.jpg
      info.txt  ← contains: name, weight, origin, description
    kiwi-juice/
      ...
```
When user provides this, need to:
- Resize all images to 800×800 (use `sips`)
- Parse `info.txt` files
- Update `lib/data.js` with real products (currently only 13 sample products, all images are Unsplash placeholders)
- Add gallery of 3 images on product detail page

### 3. SEO metadata
Add per-page metadata for:
- Page titles (targeting keywords like "Pakistani food exporter", "halal food supplier")
- Descriptions
- Open Graph tags (for WhatsApp/social share previews)
- Sitemap generation
- Robots.txt

### 4. Hero slider images
User will get custom designs from a designer. Told them **1920×1080** dimensions. `object-cover` handles responsive automatically.

### 5. Domain connect
- `momilfoods.com` bought via user's cousin's registrar (user has to check which — GoDaddy/Namecheap/etc)
- Connect via Netlify → Domain Settings → Add custom domain → get nameservers → update at registrar
- 24-48hr DNS propagation

### 6. Netlify login issue
User couldn't log into Netlify — needs to find out which email/method was used (probably GitHub OAuth).

---

## Key Files Cheat Sheet

| To edit... | Open this file |
|---|---|
| Add/remove products | `lib/data.js` |
| Blog posts | `lib/blogData.js` |
| Hero slider images/text | `components/HeroSlider.js` (top `slides` array) |
| Category card images on homepage | `app/page.js` (top `IMG` object) |
| Global CSS + fonts | `app/globals.css` |
| Site metadata | `app/layout.js` |

---

## Design System

**Colors:**
- Green dark: `#2D5016`
- Green mid: `#4A8B1F`
- Yellow gold: `#F5C518`
- Amber: `#D97706`
- Lime accent: `#B8C63B`
- Cream bg: `#faf7ec`
- Off-white cards: `#fffdf7`
- Border tan: `#eadfae` / `#e6d8a4`
- Dark hero bg: `#0d1308`

**Typography:** Montserrat (Google Fonts, all weights 300–900)

**Section padding:** `96px 0` desktop, scaled down mobile

**Container:** `.site-container` class in globals.css — max 1280px, responsive gutters

---

## User Preferences (VERY IMPORTANT)

- User is **Abdullah Awan** — communicates in **Roman Urdu / Hinglish**. Respond in same language.
- User wants **"caveman mode"** — short, direct, no fluff, no long explanations
- **Don't waste tokens** — user is on $20 Claude plan and worried about limits
- User's clients are from **USA, UK, Vietnam, Oman, Romania** — foreign buyers, so site MUST feel premium and international
- **No address anywhere on the site** (user explicitly asked)
- User will handle images/products himself when ready — don't invent placeholder data unnecessarily
- User is not a heavy dev — explain like they can find + change ONE snippet themselves for future edits

---

## Commands Cheat Sheet

```bash
# Run local dev
cd /Users/sid/Downloads/momil-foods-main
npm run dev
# → http://localhost:3000

# Check mobile via same WiFi
ipconfig getifaddr en0
# → phone browser: http://<that-ip>:3000

# Build for production
npm run build

# Push to GitHub (already set up)
git add .
git commit -m "message"
git push
```

---

## Next Steps (in order)

1. **Product page → Bhandari Foods style** (redesign category + product detail pages)
2. **SEO metadata** on every page
3. **User provides real product images + info.txt** → update `data.js` + add image galleries
4. **Domain connect** (Netlify → momilfoods.com)
5. **Go live**

---

**Last updated by Claude:** end of session before context ran out. Fresh chat should read this file first, then continue.
