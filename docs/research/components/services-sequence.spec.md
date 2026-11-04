# ServicesSequence Specification

## Overview
- Target: `src/components/ServicesSequence.tsx`
- Interaction: scroll-driven visual sequence

## Styles
- Full viewport black stage, local services video with `mix-blend-mode: screen`.
- Large service titles are light `#d8d8d8`, Familjen, responsive `clamp(48px,8vw,120px)`.
- Fine wire grid and a white flash transition into the next light section.

## Content
- Brand strategy
- Digital product design
- Web development
- AI experiences

## Behavior
- Sticky stage over roughly `260vh`.
- Scroll progress advances active service, scene scale and video opacity.
- Mobile uses `/video/homepage-services-video_m.mp4` and a normal-height stack when reduced motion is enabled.

