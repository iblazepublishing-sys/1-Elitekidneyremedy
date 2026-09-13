# Kidney Restoration Mastery: Elite Program

A single high-converting landing page for the Elite kidney restoration
program, built with React + Tailwind CSS. Pricing is never shown on the
page itself — every path ends in one of three direct actions: pay in full,
finance, or book a call.

## Stack

- **React 18** + **Vite** (build tooling)
- **Tailwind CSS** for styling
- **lucide-react** for icons

## Structure

```
src/
  KidneyRestorationMastery.jsx   # the page, assembles all sections
  data/content.js                # all copy + the ctaLinks config (see below)
  components/                    # PricingCard, CaseStudyCard, LabResultCard,
                                  # FAQItem, VslEmbed, NextStepsSection,
                                  # StickyHeader, Reveal (scroll-in animation wrapper)
  hooks/useReveal.js              # IntersectionObserver hooks (reveal + scroll-depth tracking)
  lib/analytics.js                # GA4 event helpers (safe no-ops if gtag isn't present)
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Outputs a static site to `dist/`, deployable to Vercel, Netlify, GitHub Pages,
or any static host.

## Before launch: things to wire up

1. **`ctaLinks` in `src/data/content.js`**: this is the most important one.
   Every "Apply"/"Pay In Full"/"Financing"/"Talk To Us" button on the page
   scrolls to the Next Steps section, which reads its destinations from
   here. Replace the placeholders with real URLs:
   - `tiers.<Foundation|Mastery|Elite>.store`: the product page on your
     main store for that tier (pay in full / full checkout)
   - `tiers.<Foundation|Mastery|Elite>.financing`: your Affirm or WHOP
     link for that tier
   - `calendar`: your booking link (Calendly, Acuity, etc.) — shared
     across tiers; the tier name is appended as a `?tier=` query param
     automatically so you can see which tier someone was viewing
2. **VSL video**: `VslEmbed` (used in the hero) shows a placeholder until
   you pass it a real `embedUrl` (Wistia/Vimeo/YouTube embed URL) in
   `KidneyRestorationMastery.jsx`.
3. **Lab result images**: `labResults` in `src/data/content.js` has an
   `image: null` placeholder per patient. Set `image` to a real URL once
   you have the screenshots/charts, and `LabResultCard` will render them.
4. **GA4**: add your GA4 `gtag.js` snippet to `index.html`; the tracking
   calls in `src/lib/analytics.js` are safe no-ops until then.
5. **Footer contact info**: swap the placeholder email/phone in the footer
   for your real support channels.
6. **Case studies**: results shown (Sue Lynn Gross Fisher, Stanley Shepherd,
   Frank Williams) are real testimonials; confirm you have consent on file
   before publishing.
