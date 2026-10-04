# Humphrey

My personal site: a story told along a single drawn thread. It starts as a tangled scribble, wanders through pharmacy, small businesses and the things I make, and ends at a raised hand. "After dark" drops you into a second page with everything else.

- **Laptop:** the story scrolls sideways. The thread draws itself, objects talk when you hover them, the hanger follows your cursor along the thread, and the figure at the end stretches when you drag it.
- **Phone:** the same story told vertically.

## Credit

The code is based on the open-source portfolio template by Nidhi Prajapati (somehowliving.tech), used under the MIT licence. Her `LICENSE` file stays in this repo as the licence requires. The licence covers the code only. Her photos, story, copy and screenshots are not included here: every image and every word on this site was replaced.

## Before you publish

1. `src/routes/index.tsx`: set `EMAIL` (top of the file).
2. `src/lib/seo.ts`: set `SITE_URL` to your real domain.
3. `src/assets/me.webp`: your own cutout (already in; see below if you swap it).
4. `src/routes/work.tsx` and `index.tsx`: add `live` links for TEND.ng, PRAN and anything else.
5. Optional: add a LinkedIn link in `LINKS`, and your Cloudflare token in `src/routes/__root.tsx`.
6. After you have a domain, add a `public/sitemap.xml` and a `Sitemap:` line in `public/robots.txt`.

### Your cutout

Use a transparent WebP/PNG, 900 x 1350, standing, one arm raised. The raised hand currently sits about 27% across and 6.5% down the image. If yours differs, change `HAND_X`, `HAND_Y`, the `translate: "-27% -6.5%"` and `transformOrigin: "27% 6.5%"` values in `MeCutout`, and the `0.27` / `0.065` in the phone thread in `OhHi`.

## Run it

```sh
npm install
npm run dev     # local
npm run build   # production build
```

## Where things live

- `src/routes/index.tsx`: the home page (story, work, ending)
- `src/routes/work.tsx`: the "after dark" page with all the work
- `src/components/rabbit-hole.tsx`: the fall and the climb back out
- `src/styles.css`: theme tokens and animations
- `src/assets/`: the drawn objects and project cards
- `design-tools/`: the scripts that drew those objects (`npm i playwright-core sharp`, then `node render.mjs out`)

## Content notes

Project cards are drawn previews, not screenshots. Dates the story doesn't know are written as "year one", "somewhere in the middle" and "also". Edit them freely.

## Object images

The objects in `src/assets/obj-*.webp` and the project tiles are cut out of Humphrey's own generated image sheets (transparent backgrounds). The earlier hand-drawn SVG versions are still in `design-tools/` if they're ever needed.
