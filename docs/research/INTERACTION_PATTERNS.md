# Interaction Patterns

- Scroll reveals use opacity, transform and blur; no layout properties animate.
- Horizontal gallery translates a single track according to section scroll progress.
- Pointer parallax is capped to a few degrees and uses requestAnimationFrame interpolation.
- Buttons use dual-arrow or underline movement instead of color-only feedback.
- Testimonial state changes are explicit button clicks, with opacity/translate transitions.
- Video is muted and plays inline. Sound UI is decorative in the local clone unless the user later supplies owned audio.
- Reduced motion disables autoplaying parallax, pinned transforms and continuous rotation.

