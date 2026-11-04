# HeroSection Specification

## Overview
- Targets: `src/components/HeroSection.tsx`, `src/components/DMarkScene.tsx`
- Screenshot: `docs/design-references/trionn-desktop-scroll-00-y0.png`
- Interaction: time + pointer + press/hold + scroll

## Computed styles
- Full viewport, min-height `100dvh`, background `#0c0c0c`, color `#d8d8d8`, overflow hidden.
- Desktop H1: Familjen, `80px / 72px`, normal, two lines at `32px` left and about `108px` top in the 1440 capture.
- CTA: Martian Mono, `11.2px`, 160 × 32px, bottom border and arrow.
- Facts: bottom-right, roughly `230px` wide; two bordered cells above 16px body copy.
- Center/bottom hold hint uses `11–13px` uppercase copy.

## D scene
- Manual Three.js Shape with an outer D contour and inner counter, extruded depth `0.65`, bevel enabled.
- Matte near-black faces, edge wireframe, sparse orange emissive accents.
- Desktop mark occupies center-right 55% of viewport; mobile centered at 52% viewport height.
- Add diagonal wire lines behind mark.

## States
- Headline word cycles `something → purpose → impact` every ~2.6s, blur/fade `700ms`.
- Pointer tilt max `±7deg`; press/hold increases orange glow and particle burst.
- Reduced motion: fixed word `impact`, fixed mark pose.

