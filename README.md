# Offerlash Pages

Official marketing website for Offerlash — Real coupons, better shopping.

## Overview

Static website showcasing Offerlash's coupon platform for both shoppers and marketers. Built with vanilla HTML, CSS, and minimal JavaScript for optimal performance.

This site now consumes the design system from the mobile app (single source of truth):
- Tokens (colors, spacing, typography, radii) are exposed as CSS variables in `assets/styles.min.css`.
- Base web theme is mapped in `assets/css/offerlash-theme.css` and applied to page components.
- Light/Dark are handled via `prefers-color-scheme` with the same brand palette as the app.

## Structure

- `/` - Homepage (EN)
- `/ar/` - Homepage (AR)
- `/shoppers/` - Shoppers landing page
- `/marketers/` - Marketers landing page
- `/app/` - App universal link handler

## Development

This is a static site deployed via GitHub Pages. No build process required.

```bash
# Serve locally
python3 -m http.server 8000
# or
npx serve
```

### Design tokens and theming
- Source of truth: `../offerlash-app` Compose UI tokens.
- Web tokens: defined as CSS custom properties under `:root` in `assets/styles.min.css`.
- Component theme: `assets/css/offerlash-theme.css` matches app layout primitives (container, hero, grid, cards, buttons, nav).
- Typography: pages load Montserrat (Latin) and Noto Sans Arabic; variables `--font-family` and `--font-family-arabic` are applied based on document `dir`.

## Deployment

Automatically deployed to GitHub Pages on push to `main` branch via GitHub Actions.

## Links

- Website: https://offerlash.com
- Google Play: https://play.google.com/store/apps/details?id=com.offerlash.platform
- App Store: https://apps.apple.com/sa/app/id6642654538

## License

© Offerlash. All rights reserved.
