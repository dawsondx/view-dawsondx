# AboutVision Specification

## Overview
- Target: `src/components/AboutVision.tsx`
- Screenshot: `docs/design-references/trionn-desktop-scroll-01-y510.png`
- Interaction: scroll-driven reveal

## Styles
- Two consecutive `100dvh` dark sections.
- About statement: Familjen `clamp(44px, 6vw, 86px)`, line-height `.95`, muted base `rgba(216,216,216,.1)` and highlighted foreground `#d8d8d8`.
- Content aligned to 12-column grid; label at col 1, title starts near col 2, body/CTA toward right.
- Vision words are uppercase, oversize and separated by thin grid lines.

## Behavior
- IntersectionObserver adds reveal class per text line/word.
- Vision words translate in alternating directions as section becomes visible.
- Mobile stacks label, statement, body and CTA.

