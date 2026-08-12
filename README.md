# M Vinay Sagar Portfolio

A production-ready, highly responsive, single-page developer portfolio website built with **Astro 5**, **TypeScript**, **Tailwind CSS**, and custom CSS Design Tokens.

Live URL: [https://vinay-sagar.vercel.app/](https://vinay-sagar.vercel.app/)

---

## 🌟 Primary Objective

This portfolio visually demonstrates:
- **Applications Built**: Mobile apps, SaaS platforms, web applications, desktop GUIs, and business tools.
- **Problems Solved**: Multi-tenant institutional management, receipt OCR parsing, offline-first note-taking, and telemetry flight data visualization.
- **Technical Stack**: Flutter, Supabase, PostgreSQL, Astro, React, TypeScript, Python, C++/Qt.
- **End-to-End Execution**: From user workflow discovery and UI/UX wireframing to database architecture, store deployment, and performance optimization.

---

## 🛠️ Technology Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation, Single-Page Architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, fully typed datasets)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Design Tokens (`src/styles/tokens.css`)
- **Theme System**: Zero-FOUC Dark & Light Mode with OS preference detection and `localStorage` persistence
- **Icons**: Lucide SVG System
- **Hosting**: [Vercel](https://vercel.com/) Edge Network

---

## 🚀 Key Features

1. **Sticky Glass Navigation & Scroll-Spy**:
   - Smooth hash scrolling across `#work`, `#projects`, `#capabilities`, `#journey`, `#about`, `#contact`.
   - Scroll-spy tracking active section in viewport and updating navigation states.
   - Accessible mobile drawer menu with keyboard focus trap and ESC support.

2. **Hero Section & Product Composition**:
   - High-impact value proposition (*I design and build useful digital products.*).
   - Dynamic product screen composition combining real desktop dashboard and mobile application screenshots.
   - Pointer parallax movement (disabled for touch and `prefers-reduced-motion`).

3. **Featured Work Spotlight**:
   - Flagship project spotlight based on resume-backed work.
   - Secondary featured cards for **Focus Today**, **SpendScanr**, **Notiva**, and **Data Analysis Application**.

4. **All-Projects Explorer & Interactive Filters**:
   - Instant filtering across categories: `All`, `Mobile`, `Web`, `SaaS`, `Desktop`, `Productivity`, `Business Tools`, `Dev Tools`.

5. **Accessible Full-Screen Case Study Modal (`#project-[id]`)**:
   - Deep-linking URL hash support (`#project-schooldesk`).
   - `role="dialog"`, `aria-modal="true"`, focus trap, ESC listener, background scroll lock.
   - Detailed case studies featuring problem/solution/impact, responsibilities, visual architecture pipelines, and expandable technical challenges.

6. **Outcome-Driven Capabilities & Process**:
   - Grouped pillars for Product Engineering, Backend & Data, Product & UI/UX, and Delivery & Operations.
   - 8-stage visual methodology pipeline.

7. **Verified Experience Journey & Ecosystem**:
   - Compact timeline highlighting roles at Independent Development, Amazon, DRDL, and ECE Engineering degree.
   - Categorized technology ecosystem with theme-adaptive SVG icons.

8. **Contact Section & Email Integration**:
   - Full client validation, loading states, success banner, error state, and EmailJS callback.

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/
│   │   ├── images/       # Optimised project screenshots & profile photo
│   │   └── Resume.pdf    # Downloadable resume
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/       # Navigation, ThemeToggle, ProjectDialog, Footer
│   │   ├── hero/         # HeroSection
│   │   ├── work/         # FeaturedWork
│   │   ├── projects/     # ProjectExplorer, ProjectCard
│   │   ├── capabilities/ # CapabilitiesSection
│   │   ├── process/      # ProductProcess
│   │   ├── journey/      # ExperienceJourney
│   │   ├── ecosystem/    # TechEcosystem
│   │   ├── about/        # AboutSection
│   │   └── contact/      # ContactSection
│   ├── data/
│   │   ├── projects.ts       # Typed project dataset
│   │   ├── technologies.ts   # Typed technology ecosystem dataset
│   │   └── experience.ts     # Typed experience timeline dataset
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base HTML, SEO metadata, JSON-LD, theme script
│   ├── pages/
│   │   └── index.astro       # Main single-page route
│   ├── scripts/
│   │   ├── theme.ts          # Theme management
│   │   ├── scrollspy.ts      # Active section tracking
│   │   ├── filters.ts        # Category filters
│   │   └── project-dialog.ts # Accessible case study modal
│   └── styles/
│       ├── tokens.css        # Light/Dark CSS design tokens
│       └── global.css        # Base Tailwind & global styles
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── vercel.json
```

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vinay125219/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. **Verify TypeScript & Astro diagnostics**:
   ```bash
   npx astro check
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment Instructions (Vercel)

This project is configured for single-command deployment on Vercel:

1. Import the repository into your Vercel Dashboard.
2. Build Settings are auto-detected via `vercel.json` and `astro.config.mjs`:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**.

---

## 🧹 Removed Legacy Features Summary

Per prompt specifications, the following legacy elements were removed:
- XP System, progress points, skill level indicators, and easter egg triggers
- Visitor counter widget
- Daily motivation quote generator widget
- 3D skill cube mini-game
- Percentage-based skill bars (e.g. 90%, 85%)
- Unverified client testimonials and logos
- Typing text animations and random canvas particle scripts

---

## 💯 QA Verification Checklist

- [x] Single-page smooth navigation and scroll-spy hash tracking
- [x] Zero-FOUC Light and Dark theme persistence
- [x] Fully accessible case study modal with keyboard focus trap, ESC listener, and scroll lock
- [x] Responsive layout tested across mobile (320px+), tablet (768px+), and desktop (1280px+)
- [x] `npx astro check` passes with 0 errors
- [x] `npm run build` generates clean static output
- [x] Valid SEO metadata, JSON-LD Schema (`Person`), `robots.txt`, and `sitemap.xml`







Updated your LinkedIn everywhere to:

`https://www.linkedin.com/in/vinay-sagar-659b551b4/`

`npm run check` passes.

That computer icon in the left sidebar is the **theme selector** button. It opens the Light / Dark / System theme menu. The computer icon means “System theme”. If you want, we can replace it with clearer Sun/Moon only, or add a small tooltip/label like `Theme`.

For featured project images/cards:

The main data is in [projects.ts](/home/astra/Desktop/Portfolio/src/data/projects.ts).

To change the right-side hero simulator cards, edit this file:
[HeroSection.astro](/home/astra/Desktop/Portfolio/src/components/hero/HeroSection.astro)

Look for `SIM_DATA`. Each item has:

```ts
image: '/assets/images/Data_Analysis_Application.png',
title: 'DRDL Data Analysis Application',
desc: '...',
id: 'drdl-data-analysis'
```

To change featured cards below the hero:
- Go to [projects.ts](/home/astra/Desktop/Portfolio/src/data/projects.ts)
- Change `featured: true` or `featured: false`
- Change `coverImage`
- The first `featured: true` project becomes the large spotlight card in [FeaturedWork.astro](/home/astra/Desktop/Portfolio/src/components/work/FeaturedWork.astro)

Images should go in:

`public/assets/images/`

Then reference them like:

```ts
coverImage: "/assets/images/my-new-image.png"
```
