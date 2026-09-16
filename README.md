# Threshold — Step inside the world of synthetic minds

Scroll-driven landing page: a 10-second walk through a doorway, scrubbed by scroll, with the copy landing on the final frame. Followed by a Vision section and footer in the same style. Built for the Scroll Sites marketplace and designed to be embedded in an iframe.

- `npm run dev` — local dev
- `npm run build` — production build to `dist/` (set `BASE=/repo-name/` for GitHub Pages)

## Live URLs
- **Primary (Vercel):** https://threshold-scroll-site.vercel.app — this is the URL the marketplace embeds in its iframe.
- Mirror (GitHub Pages): https://husnainkhushid.github.io/threshold-scroll-site/

Both deploy automatically on push to `main`. Vercel builds with `BASE=/` (default); the Pages workflow sets `BASE=/threshold-scroll-site/`.

## For the coding agent
Section-by-section resources (component + asset prompt + agent prompt + preview) live in the marketplace workspace under `02-sections/threshold/`. Section ids: `01-hero 02-vision 03-footer` (`data-section` attributes). DOM anchors: `#top #vision #platform #resources` — deep-link with `https://threshold-scroll-site.vercel.app/#vision`. When embedded, the page posts `{ source:'scroll-site', type:'sections'|'section', ... }` and accepts `{ type:'scrollTo', id }`.

## Stack
React 19 · TypeScript · Vite 6 · Tailwind 4 · motion · lucide-react · self-hosted Plus Jakarta Sans
