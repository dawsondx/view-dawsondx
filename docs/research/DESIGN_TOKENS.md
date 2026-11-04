# Trionn Homepage Design Tokens

Evidence: browser-computed styles at 1440px/1265px content viewport, mobile screenshot at 390px, downloaded production CSS, and local font files.

## Color

- Hero background: `#0c0c0c`
- Deep footer background: `#040508`
- Light text / cream line: `#d8d8d8`
- Primary white: `#ffffff`
- Light panel start: `#d2d2d2`
- Light panel end: `#ffffff`
- Testimonial panel end: `#c3c3c3`
- Dark text / grey line: `#434343`
- Hero wire lines: `#2f323b`
- Warm 3D accent: `#dc3a16` to `#ff7a1a`
- Muted light copy: `rgba(216,216,216,.1)` through `rgba(216,216,216,.6)`

## Type

- Display: Familjen Grotesk variable — `public/fonts/FamiljenGroteskVariable_Regular-s.p.04jxz-d23sc_e.woff2`
- Body: Neue Haas Display — `public/fonts/NeueHaasDisplay_Roman-s.p.0ykdwddnvy5f_.woff2`
- Utility / CTA: Martian Mono Light — `public/fonts/MartianMono_Light-s.p.0htes.s6weu9-.woff2`
- Editorial numbers: PP Editorial New Ultralight — `public/fonts/PPEditorialNew_Ultralight-s.p.0qe_2frr_fmiu.woff2`
- Desktop hero H1 observed: `80px / 72px`, Familjen, normal weight, roughly `-0.04em`
- Large section title observed: `76.0064px / 72px`, Familjen
- Card title observed: `28.8px / 28.8px`, Familjen
- Utility labels observed: `11.2px`, Martian Mono
- Marquee: `clamp(5rem, 9.164vw, 10rem)`, line-height `.672`, letter-spacing `-.08em`

## Layout

- Horizontal page padding: `24px` mobile, `40px` from `768px`
- Core grid: 12 columns with `24px` gap
- Section height baseline: `100dvh`
- Card radius: `8px`; compact control radius: `4px`; pill controls: `999px`
- Main breakpoints found in production CSS: `640px`, `768px`, `1024px`, `1280px`, `1441px`
- Desktop work cards: `50vw` width with `670 / 460` media ratio
- Mobile work cards: `calc(100% - 48px)` width, vertically stacked

## Motion

- Smooth scrolling: Lenis (`html.lenis`)
- Narrative pinning and horizontal translation: GSAP ScrollTrigger
- Common UI transition: `300–500ms cubic-bezier(.4,0,.2,1)`
- Main eased reveals: `700–900ms cubic-bezier(.22,1,.36,1)`
- Reduced-motion mode must replace continuous 3D rotation with a stable pose.

