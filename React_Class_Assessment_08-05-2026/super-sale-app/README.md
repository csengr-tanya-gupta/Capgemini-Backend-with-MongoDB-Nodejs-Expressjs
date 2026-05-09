# Super Sale Landing Page

A React landing page inspired by a vibrant "Final Season Super Sale" design, with platform redirect buttons.

## Project Structure

```
src/
├── App.js
├── index.js
├── index.css
└── components/
    ├── SuperSaleLanding.js   ← Main page component
    ├── NavButton.js          ← Navigation link button
    ├── ShopNowButton.js      ← Hero CTA button
    ├── PlatformButton.js     ← E-commerce platform pill button
    ├── FloatingShape.js      ← Decorative shape (circle, star, diamond, pill)
    └── HamburgerIcon.js      ← Hamburger menu icon
```

## Getting Started

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Platform Redirects

| Button   | URL                          |
|----------|------------------------------|
| Amazon   | https://www.amazon.com/deals |
| eBay     | https://www.ebay.com/deals   |
| Etsy     | https://www.etsy.com/sale    |
| Zalando  | https://www.zalando.com      |
| ASOS     | https://www.asos.com/sale    |
| Shein    | https://www.shein.com        |

## Customization

- Replace the model image placeholder in `SuperSaleLanding.js` with a real `<img>` tag.
- Update platform URLs or add new ones in the `platforms` array inside `SuperSaleLanding.js`.
- Font used: **Barlow Condensed** (loaded via Google Fonts in `public/index.html`).
