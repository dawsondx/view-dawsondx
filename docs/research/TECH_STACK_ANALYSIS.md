# Technical Stack Analysis

## Original

- Next.js application
- Tailwind CSS
- Three.js `WebGLRenderer`, manual `Shape` + `ExtrudeGeometry`
- GSAP 3.15 + ScrollTrigger / ScrollSmoother
- Lenis smooth scroll
- Canvas image-sequence renderer (371 frames)
- Native HTML video/audio

## Clone

- Next.js 16 App Router + React 19 + strict TypeScript
- Tailwind CSS v4 plus component CSS in `globals.css`
- Three.js with manual extruded `D` geometry
- Native IntersectionObserver and requestAnimationFrame for reveals/parallax
- CSS sticky/pinned sections and scroll progress for the work sequence
- Local media assets only; no runtime dependency on `trionn.com`

