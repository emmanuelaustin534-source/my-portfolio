# Images guide

Every image is optional. The site shows an elegant built-in placeholder until you add a real one.
Put files in this folder, then point to them from the data files (paths start with `/images/`).
File names are case-sensitive on Vercel, so type them exactly as saved.

| Where it is used | Suggested file name | Set it in | Recommended size |
| --- | --- | --- | --- |
| Portrait (home hero and About page) | `portrait.jpg` | `src/data/site.ts` -> `images.portrait` = `"/images/portrait.jpg"` | 1200 x 1500 px (4:5), under 400 KB |
| Project cover | `projects/<project-slug>.jpg` | `src/data/projects.ts` -> `image` | 1600 x 900 px (16:9), under 400 KB |
| Gig cover | `gigs/<gig-name>.jpg` | `src/data/gigs.ts` -> `image` | 1280 x 800 px (16:10), under 300 KB |
| Logo for dark backgrounds (light text) | `logo-dark.svg` (included) | Replace the file | About 320 x 60 px SVG |
| Logo for light backgrounds (dark text) | `logo-light.svg` (included) | Replace the file | About 320 x 60 px SVG |

The logo in the navbar is the `Logo` component in `src/components/ui/Logo.tsx`. Edit the SVG there to change it.
Social share image and favicon are generated automatically (`src/app/opengraph-image.tsx` and `src/app/icon.svg`).

Tip: use .jpg or .webp for photos. Next.js converts them to AVIF/WebP automatically.
