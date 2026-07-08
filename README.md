# AC Sound Design — Portfolio

Portfolio site for **Andrew Clelland**, sound designer. Monochrome, audio-inspired
design: Space Grotesk + Space Mono, animated waveform hero, dark/light theme.

**Stack:** React 18 · Vite 6 · lucide-react

## Development

```bash
npm install
npm run dev       # dev server on http://localhost:3000
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Editing content

All content lives in **`src/data/portfolio.js`** — no component changes needed for:

- **Projects** — the `projects` array. Each entry supports one media type:
  `videoUrl` (YouTube embed), `gameUrl` (embedded WebGL build), `isGallery` +
  `galleryImages`, or `downloads` (build zips). Set `image` to a screenshot path,
  or `null` to show the animated waveform placeholder.
- **Toolkit** — the `skillGroups` array (grouped tags, no percentages).
- **Contact & bio** — `contactInfo` and `aboutText`.

Static assets (images, CV, game builds) go in `public/` and are referenced with
root paths like `/images/example.webp`.

## Deployment

Any static host works. Build with `npm run build` and serve the **`dist/`** folder.

- **Netlify / Vercel:** connect the repo; build command `npm run build`,
  publish directory `dist`. Both handle SPA routing automatically.
- **Plain hosting (cPanel etc.):** upload the contents of `dist/` to the web
  root. Because this is a single-page app, add an `.htaccess` rewrite so
  refreshes don't 404:

  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```

Note the repo carries large assets (Unity WebGL builds and downloadable zips in
`public/`, ~190MB) — keep hosting bandwidth/storage limits in mind.

## Credits

- Design & development: [Tyler Bravin](https://tylerbravin.dev) ·
- Icons: [Lucide](https://lucide.dev/) · Fonts: Google Fonts (Space Grotesk, Space Mono)
- Code is MIT licensed; all portfolio content © Andrew Clelland, all rights reserved — see LICENSE.

