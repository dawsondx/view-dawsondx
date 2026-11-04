# SiteFooter Specification

## Overview
- Target: `src/components/SiteFooter.tsx`
- Interaction: pointer-reactive canvas + link hover

## Styles
- Background `#040508`, color `#d8d8d8`, min-height `100dvh`.
- Headline: `Ready to build something bold?`, Familjen, desktop around `76.8px / 70.4px`.
- Contact and social links in a lower 12-column grid separated by fine `#434343` lines.
- Full-bleed low-contrast canvas sits behind content.

## Behavior
- Canvas draws slowly moving nodes/lines and responds gently to pointer position.
- Links gain animated underline; CTA arrow translates.
- Mobile stacks contact and social columns.

