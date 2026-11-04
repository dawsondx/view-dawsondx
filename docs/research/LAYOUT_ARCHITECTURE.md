# Layout Architecture

- Root is a full-width vertical narrative with horizontal overflow clipped.
- Shared `.tr-container` uses `24px` mobile and `40px` desktop padding.
- Content aligns to a 12-column grid with `24px` gaps.
- Fixed header and cookie banner sit above scene canvases.
- Hero/About/Vision and Footer use dark full-viewport scenes.
- Key Facts, Work and Testimonials use light gradients with `#434343` copy.
- Desktop Work and Orbit sections pin; mobile converts both to normal vertical flow.
- Main responsive switch is `768px`; secondary control/scene changes occur at `1024px`.

