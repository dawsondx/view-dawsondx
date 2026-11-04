# Trionn Homepage Behaviors

## Global

- **Interaction model:** scroll + pointer + time.
- Lenis smooths vertical motion; GSAP ScrollTrigger pins long scenes and maps vertical distance to horizontal/sequence progress.
- Page uses three canvases, six video nodes and fixed overlays.

## Header

- Fixed at the top; controls remain visible over all sections.
- Desktop: logo left; sound, talk and menu controls right.
- Mobile: same controls condensed; menu is an icon pill.
- Buttons lighten or fill on hover over `300–500ms`.

## Hero

- Headline cycles the last word (`something`, `purpose`, `impact`) with blur/fade; observed different words across captures.
- Pointer movement tilts the extruded mark and shifts wire-line parallax.
- Holding/pressing the scene builds a blast state; releasing resets it.
- The requested clone changes the original abstract Trionn mark to a custom extruded `D`.
- Mobile retains the live scene but reduces scale and background line count.

## About / Vision

- Scroll-driven. Text opacity rises by line/word as it crosses the viewport.
- Vision words travel on opposing axes while the shared symbol rotates.

## Key Facts

- Cards reveal on entry; counters count upward once.
- Awards card uses a local looping video; team card uses hover/play behavior on capable devices.
- Partner logos move in a continuous rail.

## Work

- **Interaction model: vertical-scroll-driven horizontal gallery.** It is not a click carousel.
- Desktop container pins while a row translates left; each card uses a `670/460` image.
- Mobile removes the pin and stacks cards vertically.
- Image hover scales slightly; underlines/arrows animate in `500ms`.

## Services sequence

- Original preloads 371 `/images/stone/frame_XXXX.webp` files in idle batches of 20.
- Scroll progress selects a frame and cross-fades to `/video/homepage-services-video.mp4`.
- Clone keeps the same black-to-white visual beat but avoids shipping the original symbol sequence because the hero identity is now `D`.

## Testimonials

- **Interaction model: click-driven.** Five company buttons select content: Luxury Presence, Credible, Fast Resume, Technis, Ventigence.
- Quote/avatar/name/role cross-fade while the chosen label becomes fully opaque.

## Creative Orbit

- Scroll-driven card/orbit field; marquee words enter from opposite sides.
- Desktop supports pointer parallax; mobile uses a vertical editorial grid.

## Cookie banner

- Fixed bottom-center on desktop and full-width inset on mobile.
- Decline and Accept both dismiss locally; no tracking is enabled in the clone.

