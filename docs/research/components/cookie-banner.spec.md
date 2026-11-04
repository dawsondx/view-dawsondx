# CookieBanner Specification

## Overview
- Target: `src/components/CookieBanner.tsx`
- Interaction: dismiss

## Styles
- Fixed bottom center, z-index above page, dark translucent panel with 1px `#2f323b` border.
- Desktop single row; mobile full-width inset `18px` and two-row layout.
- Copy and actions use Martian Mono at `9–11px`.

## Behavior
- Accept or Decline dismisses with opacity/translate transition.
- State is stored in `sessionStorage`; no analytics cookies are created.

