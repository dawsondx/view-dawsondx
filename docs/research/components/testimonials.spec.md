# Testimonials Specification

## Overview
- Target: `src/components/Testimonials.tsx`
- Interaction: click-driven tabs

## Styles
- Background `linear-gradient(#fff 0%, #c3c3c3 100%)`, dark text `#434343`, min-height `100dvh`.
- Title desktop about `76px / 72px`; quote `28.8px / 28.8px`.
- Left selector and right quote form a 12-column split.

## States
- Luxury Presence / Malte Smith / `/images/malte.webp`
- Credible / Stephen Dash / `/images/stephen.webp`
- Fast Resume / Doug Petrie / `/images/doug.webp`
- Technis / Jean-Baptiste Biolay / `/images/jean.webp`
- Ventigence / Zoltan Csonka / `/images/zoltan.webp`
- Active content cross-fades/raises over `500ms`; active label opacity 1, inactive `.42`.

## Responsive
- Desktop: selector left, quote right.
- Mobile: horizontal selector rail above quote.

