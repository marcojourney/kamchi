# KamChi (កម្ចី) — Marketing Landing Page

Bilingual (English / Khmer) single-page marketing site for **KamChi**, a personal loan management app built for lenders in Cambodia.

## Project Structure

- `index.html` — Semantic HTML5 landing page with SEO, Open Graph, Twitter cards, and `SoftwareApplication` JSON-LD.
- `style.css` — Responsive mobile-first CSS with CSS variables for light & dark themes, Inter & Kantumruy Pro typography, and subtle scroll-reveal animations.
- `script.js` — Bilingual EN/KM translation engine (`localStorage` persistence + browser language detection), theme toggle, screenshot tabs, billing period switch, FAQ accordion, and early-access form validation.
- `404.html` — Custom branded 404 error page for GitHub Pages.
- `assets/` — SVG brand logo (`logo.svg`), browser favicon (`favicon.svg`), and social share card (`og-image.svg`).

## Customization Guide

Look for comments in the source files marking where to swap content:
1. **Logo & Favicon**: Replace `assets/logo.svg` and `assets/favicon.svg` with your final artwork.
2. **Screenshots**: In `index.html` (Section 7), replace the CSS/SVG mockups inside `.screen-stage` with `<img>` files stored in `assets/`.
3. **Copy & Translations**: Update text inside the `translations` object (`en` and `km`) in `script.js` and keep matching fallback text in `index.html`.
4. **Early Access Form**: Because GitHub Pages serves static files only, follow the comment above `#earlyAccessForm` in `index.html` and `script.js` to wire submissions to Formspree or Google Forms.

## Deploy to GitHub Pages

1. Push `index.html`, `style.css`, `script.js`, `404.html`, and the `assets/` folder to a GitHub repository.
2. Open the repository on GitHub and go to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the **`main`** branch and **`/ (root)`** folder, then click **Save**.
5. Your site will be published at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
