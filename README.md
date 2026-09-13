# Kidney Restoration Mastery: Elite Program

A single high-converting landing page for the Elite ($9k / $6k / $30k) kidney
restoration program, built with React + Tailwind CSS.

## Stack

- **React 18** + **Vite** (build tooling)
- **Tailwind CSS** for styling
- **lucide-react** for icons

## Structure

```
src/
  KidneyRestorationMastery.jsx   # the page, assembles all 13 sections
  data/content.js                # all copy (pillars, pricing, case studies, FAQ, timeline)
  components/                    # PricingCard, CaseStudyCard, FAQItem, ApplicationForm,
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

1. **Formspree endpoint**: `src/components/ApplicationForm.jsx` has a
   placeholder `FORMSPREE_ENDPOINT`. Replace it with your real form ID from
   https://formspree.io.
2. **GA4**: add your GA4 `gtag.js` snippet to `index.html`; the tracking
   calls in `src/lib/analytics.js` are safe no-ops until then.
3. **Financing links**: the "See Financing Options" link and disclaimer
   copy reference Affirm/WHOP; point them at your actual partner links.
4. **Footer contact info**: swap the placeholder email/phone in the footer
   for your real support channels.
5. **Case studies**: results shown (Sue Lynn Gross Fisher, Stanley Shepherd,
   Frank Williams) are real testimonials; confirm you have consent on file
   before publishing.
