# CreativeOrbit Specification

## Overview
- Target: `src/components/CreativeOrbit.tsx`
- Interaction: scroll + pointer parallax

## Styles
- Light-to-dark editorial transition.
- Nine local orbit images `/images/orbit/orbit-01.jpg` … `orbit-09.jpg`.
- Oversize opposing marquee text uses `clamp(5rem,9.164vw,10rem)`, line-height `.672`.
- Supporting copy: `Concepts, explorations, and interface experiments shared openly as part of our creative process.`

## Behavior
- Desktop cards sit on concentric elliptical paths and translate/rotate gently with pointer position.
- Scroll brings marquee words from opposite edges.
- Mobile renders an overlapping two-column image collage without pointer dependency.

