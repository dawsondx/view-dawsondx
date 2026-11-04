# WorkShowcase Specification

## Overview
- Target: `src/components/WorkShowcase.tsx`
- Interaction: vertical scroll drives horizontal track

## Styles
- Light gradient panels, dark `#434343` copy.
- Desktop card width `50vw`, media `670/460`, gap `24px`, image radius `8px`.
- Title `28.8px / 28.8px`; body max width about `320px`; CTA Martian Mono `11.2px`.

## Content and assets
- MyWorker AI — `/images/projects/myworker/myworker.jpg`; subtitle: `AI platform simplifying hiring, management, and workforce scaling.`
- Pulse Studio — `/images/projects/pulse-studio/pulse-studio.jpg`.
- Loftloom — `/images/projects/loftloom/loftloom.jpg`.
- Final card: `Discover our complete collection of digital experiences, brands, and platforms.`

## Behavior
- Desktop sticky viewport; track translates from 0 to its overflow width based on section progress.
- Hover: image scale 1 → 1.035 in `700ms`, arrow/underline slides.
- Mobile: no pin; cards stack and use `_m.jpg` images.

