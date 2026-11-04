# SiteHeader Specification

## Overview
- Target: `src/components/SiteHeader.tsx`
- Screenshot: `docs/design-references/trionn-desktop-scroll-00-y0.png`
- Interaction: fixed + hover + click menu

## Structure and exact styles
- Fixed container: top `0`, left `0`, width `100%`, z-index `50`, padding `32px 40px` desktop and `20px 18px` mobile.
- Left brand is replaced by a compact `D/DAWSON` wordmark; original measured `96 × 26px`.
- Right cluster gap `8px`; sound circle `26px`; white talk pill about `91 × 27px`; menu outline pill about `90 × 28px`.
- Neue Haas/Familjen, uppercase controls, `12–14px`.

## Behavior
- Hover: fill/opacity change in `300ms`.
- Menu button opens a full-screen dark menu; second click/Escape closes.
- Links: Work, Services, About, Contact.
- Mobile keeps only compact pills.

## Responsive
- Desktop: full labels.
- Mobile 390px: talk label visible, menu text hidden, circular menu icon.

