# Vizija Mebel — PRD

## Original Problem Statement
Professional, modern, responsive bilingual (Macedonian default / English) website for "Vizija Mebel", a custom furniture manufacturing company in Bitola, North Macedonia. 10 pages, sticky header with MK/EN switcher, footer, SEO per page. Core feature: an interactive step-by-step furniture configurator. Premium minimalist aesthetic (matte finishes, warm wood, anthracite, sage/brass accents). Award-worthy motion & craft.

## Architecture
- **Frontend**: React 19 + React Router 7, Tailwind, framer-motion (scroll reveals, masked hero, parallax), Lenis (smooth scroll), shadcn/ui, sonner toasts. Bilingual via `LanguageContext` (instant state swap, default MK, persisted in localStorage `vm_lang`).
- **Backend**: FastAPI + MongoDB (motor). Endpoints under `/api`: quotes (create/list), contact (create/list), catalog PDF (reportlab-generated).
- Fonts: Outfit (display, bold uppercase) + Manrope (body).

## Core Requirements (static)
- 10 pages: Home, About, Products, Custom Manufacturing, Gallery, Contact, Privacy, Terms, Shipping, Warranty — all bilingual.
- Interactive configurator with live preview (finish tint overlay) + summary + quote form.
- CNC panel swatch collection (10 finishes) + downloadable PDF catalog.
- Contact + quote submissions persisted in MongoDB.

## Implemented (2026-06-22)
- All 10 pages built & routed, bilingual MK/EN with instant toggle.
- Kinetic hero (masked line reveal + parallax), marquee, numbered manifesto, why-cards, featured grid, testimonials, CTA banner.
- Products: category/material/color filters, CNC swatch gallery, PDF catalog download (backend reportlab).
- Custom Manufacturing configurator: 6 steps, live tinted preview + summary, quote request dialog + success overlay.
- Gallery masonry + lightbox with filters. Contact form + info + Google Maps embed.
- Backend quotes/contact APIs + catalog PDF. Tested 100% (backend + frontend), no issues.

## Personas
- Homeowner in North Macedonia wanting custom kitchen/wardrobe; designs online and requests a quote.
- Business/office client browsing portfolio and downloading catalog.

## Backlog / Remaining
- **P1**: Real content (founding story, exact address/phone, stats, legal review of policies), real project photos.
- **P1**: Admin dashboard to view/manage quote & contact submissions (currently list endpoints are public/unauthenticated).
- **P2**: Email notifications on new quote/contact (Resend).
- **P2**: Replace placeholder Google Maps embed with exact pinned location; real Facebook/social links.
- **P2**: FastAPI lifespan handler (replace deprecated on_event shutdown).

## Next Tasks
1. Gather & insert real business content + photos.
2. Add authenticated admin view for submissions + optional email alerts.
