# Emmanuel Augustine, portfolio website

Next.js (App Router) + TypeScript (strict) + Tailwind CSS v4 + Framer Motion + GSAP + Lenis.
All content lives in `src/data`. No backend, no database. The contact form uses Formspree.

## Quick start

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000. Before you push to GitHub, run both:

```powershell
npm run lint
npm run build
```

## Environment variables (`.env.local`)

| Name | What it is |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | The ID from your Formspree form URL (`https://formspree.io/f/abcdwxyz` -> `abcdwxyz`). Until set, the form shows a friendly "not connected" message. |
| `NEXT_PUBLIC_SITE_URL` | Your live address, e.g. `https://your-site.vercel.app`. Used for SEO. Set it in Vercel too. |

## How to edit content (everything is in `src/data`)

| File | What it controls |
| --- | --- |
| `site.ts` | Name, tagline, bio, hero text, contact details, social links, portrait path, blog on/off, call-to-action text |
| `services.ts` | The six services and each service page |
| `projects.ts` | Portfolio projects and case-study pages |
| `gigs.ts` | Fiverr / Upwork listings |
| `testimonials.ts` | Testimonials (currently clearly labelled demo) |
| `faqs.ts` | The 10 FAQs |
| `experience.ts` | Experience cards and education |
| `skills.ts` | Skill cards, tools, optional progress bars |
| `process.ts` | The "how we'd work together" steps |
| `posts.ts` | Blog posts (blog is off by default) |

Empty values hide themselves. For example, an empty email hides the email button, and an empty social link is not shown.

### Add contact details and social links
Open `src/data/site.ts`. Fill `contact.email`, `contact.phone`, `contact.whatsapp` (digits only with country code, like `2348012345678`), `contact.location`, `contact.availability`. Paste full URLs into `socials`. Anything left as `""` stays hidden.

### Add a project
Open `src/data/projects.ts` and add an object to the `projects` array (an example is in the comment at the top). It gets a page at `/portfolio/<slug>` automatically. Only fill the fields that are true. Empty fields are hidden. Once you add one, the "work on the way" placeholders disappear. Set `featured: true` to show a project in the home page showcase.

### Add a gig
Open `src/data/gigs.ts` and add an object to the `gigs` array with the real link, title and description. Price and delivery are optional. Placeholders disappear when you add the first one.

### Replace the demo testimonials
Edit `src/data/testimonials.ts`, use real quotes with permission, and set `isDemo: false`. The "Demo testimonial" labels and the sample note disappear automatically.

### Skill progress bars
In `src/data/skills.ts` set `showProgress = true` and give each skill an honest `level` from 1 to 100. A level of 0 hides that bar.

### Turn the blog on
In `src/data/site.ts` set `features.blog` to `true`, then add posts in `src/data/posts.ts`. While it is `false`, the Blog link is hidden, `/blog` returns the 404 page and the sitemap leaves it out.

### Change the brand color (one place only)
Open `src/app/globals.css` and change `--brand: #2f7bff;`. The full shade scale (50 to 950) is generated from it.

### Images
See `public/images/README.md` for every file name and size.

## Project structure

```
src/app          pages, layout, sitemap, robots, 404, error, loading, OG image
src/components   layout, effects, sections, ui, providers
src/data         all content (edit here)
src/lib          helpers (cn, SEO, GSAP and Lenis setup)
public/images    your images and logo files
```

## Notes on animation
Reduced-motion preferences are respected. GSAP effects are wrapped in contexts and reverted on cleanup. Framer Motion and GSAP never animate the same element. Page transitions are opacity-only so the pinned showcase keeps working.

## Deploying
Push to GitHub, import the repo in Vercel, add `NEXT_PUBLIC_FORMSPREE_ID` and `NEXT_PUBLIC_SITE_URL`, then Deploy. Every later `git push` redeploys automatically.

## Troubleshooting
- Port 3000 busy: `npm run dev -- -p 3001`, or stop the other process.
- Strange dev errors: `Remove-Item -Recurse -Force .next` then `npm run dev`.
- Works locally but not on Vercel: check file name casing, because Vercel is case-sensitive.
- Image not updating: hard refresh (Ctrl+F5) and check the path starts with `/images/`.
- Form not arriving: confirm the Formspree ID, confirm your email in Formspree, check Formspree's Submissions tab and spam folder.
