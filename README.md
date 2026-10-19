# M Vinay Sagar — Portfolio

Interactive portfolio built from the supplied reference screens: **Astro + TypeScript + React islands + Tailwind CSS v4 + GSAP**, pre-rendered for SEO with View Transitions.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server (http://localhost:4321)
npm run check      # astro check (TypeScript)
npm run build      # production build (Vercel adapter)
```

## Pages

| Route | Contents |
|---|---|
| `/` | Hero, stats, floating cards, explore strip, featured projects |
| `/about` | About intro, experience timeline, education, PDF resume download |
| `/projects` | Filterable project grid (chips + explore lenses) |
| `/projects/[slug]` | Full case study with sticky section nav |
| `/skills` | Interactive skills explorer (React island) |
| `/contact` | Validated contact form (server endpoint) + connect cards |

The home portrait has animated engineering orbits and a subtle pointer tilt. An interactive engineering studio switches between signal, interface and network animations, with a pause control. The four feature cards link to relevant work and include pointer spotlights, keyboard focus states and animated previews. All motion respects reduced-motion preferences; touch devices keep a steady portrait. The cards and captions use separate layout rows to stay readable at every screen size.

## Content sources

- **Resume facts** (name, contact, education, experience bullets, skills): `Vinay_Resume1 %281%29.pdf`
- **Design + project content**: reference screens (`HomePage.png`, `AboutPage.png`, …) — thumbnails cropped from the screens live in `public/images/projects/`
- Project case studies: `src/content/projects/*.md`
- Experience: `src/content/experience/*.json`
- Skills: `src/data/skills.ts`

## Contact form delivery

`POST /api/contact` validates every submission, then delivers through **Knock**
(`contact-form-submission` workflow → `admin` recipient) when configured:

```bash
KNOCK_API_KEY=...            # required to actually deliver
KNOCK_WORKFLOW=contact-form-submission   # optional override
KNOCK_RECIPIENT=admin                    # optional override
```

Without a key the endpoint responds `202 { delivered: false }` and the form
shows an honest "not configured yet" state with a pre-filled `mailto:`
fallback — it never claims delivery that didn't happen.

## Deploy (Vercel)

Push the repo to Vercel (framework: Astro) and add the `KNOCK_API_KEY`
environment variable in project settings. Static pages are pre-rendered;
`/api/contact` deploys as a serverless function.
