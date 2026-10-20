<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — techdevshimul portfolio

Project-specific guidance for AI coding agents. Read this before changing code.
The Next.js block above is managed by Next.js — do not edit inside its markers.

## 1. What this project is

A single-author developer portfolio for **Shimul Hossain (techdevshimul)**: a
dark, glassmorphic marketing site with home, about, projects, skills, education,
blogs, blog detail, case study, testimonials, workflows, and contact pages.

It is a **content-driven static site**. There is no database, no API layer, no
authentication, no CMS, and no runtime data fetching. All copy, projects,
timelines, and blog metadata are hard-coded in components and `utils/`.

- `README.md` is the author's personal GitHub profile README — it is **not**
  application documentation. Don't treat it as a spec.
- `DESIGN.md` is the design source of truth (tokens, typography, spacing,
  elevation, component styling). Visual changes must stay consistent with it.
- `CLAUDE.md` is just `@AGENTS.md`.

## 2. Stack and versions

| Concern     | Choice                                                                    |
| ----------- | ------------------------------------------------------------------------- |
| Framework   | Next.js **16.2.4** (App Router, Turbopack default)                        |
| UI          | React **19.2.4**, React DOM 19.2.4                                        |
| Language    | TypeScript 5, `strict: true`, `@/*` → repo root alias                     |
| Styling     | Tailwind CSS **v4** (CSS-first `@theme`, `@tailwindcss/postcss`)          |
| Icons       | `react-icons` (FA/SI/BS/IO5/TB subpackages) + Google Material Symbols     |
| Images      | `next/image` (local `/public/assets/...` and `lh3.googleusercontent.com`) |
| Lint/format | ESLint 9 flat config (`eslint-config-next`), Prettier 3                   |
| Utilities   | `class-variance-authority` is installed but **currently unused**          |

No test runner, no Storybook, no UI kit, no animation library (`framer-motion`
etc.). Do not add a dependency unless the task genuinely requires it; prefer
plain React + Tailwind + the CSS keyframes already in `app/globals.css`.

Node 20.9+ is required by Next 16 (local toolchain is Node 24).

## 3. Commands

```bash
npm install                # install deps
npm run dev                # next dev (Turbopack) → http://localhost:3000
npm run build              # next build (type-checks, prerenders 13 routes)
npm run start              # serve the production build

npm run lint:check         # eslint .            (CI-safe, no writes)
npm run lint:fix           # eslint --fix .
npm run format:check       # prettier --check .
npm run format             # prettier --write .
npm run format:lint        # format then eslint --fix
```

There is **no `npm test`**. Validate with `lint:check`, `npx tsc --noEmit`,
and `npm run build`.

`next lint` was removed in Next.js 16 — always use the ESLint CLI through the
scripts above.

## 4. Routing map (App Router, no `src/`)

```
app/
  layout.tsx                 # root layout: fonts, metadata, Header, Footer, ambient blobs
  globals.css                # Tailwind v4 theme + all global utilities/keyframes
  page.tsx                   # /             → home/*
  about/page.tsx             # /about        → about/*
  projects/page.tsx          # /projects     → projects/*
  skills/page.tsx            # /skills       → skills/*
  education/page.tsx         # /education    → education/*
  blogs/page.tsx             # /blogs        → blogs/*
  blogs/[blogId]/page.tsx    # /blogs/:id    → blogs/blog-details/*  (dynamic, ignores params)
  case-study/page.tsx        # /case-study   → case-study/*
  testimonials/page.tsx      # /testimonials → testimonials/*
  workflows/page.tsx         # /workflows    → workflows/*
  contact/page.tsx           # /contact      → contact/*
```

- Pages are **thin server components**: each imports feature components and
  composes sections inside one `<main>`.
- No route groups, no `loading.tsx`/`error.tsx`/`not-found.tsx`, no
  `generateMetadata`/`generateStaticParams`, no route handlers (`app/api`).
- No `proxy.ts` (Next 16's rename of middleware) and no `next.config` features
  beyond `allowedDevOrigins` + `images.remotePatterns`.

Feature component directories mirror routes:

```
components/
  layout/        Header (client), Footer
  home/          HeroSection, BrandTicker, StatsSection,
                 FeaturedProjectsSection, TechStackExpertiseSection, ContactSection
  about/         Story, TechStack, EducationHistory
  projects/      ProjectsHeader, ProjectsItems, ProjectsHighlights, ProjectsTechnicalProcess
  skills/        SkillsHeader, SkillsServiceOfferings, SkillsTechnicalProof,
                 SkillsMobileNativeShowcase, SkillsCta
  education/     EducationHero, EducationTimeline, EducationCertificationsAndAchievments
  blogs/         BlogsHeader, BlogItems, Newsletter, ReadingProgress,
                 CopyCodeButton, DockerImplementationSection, blog-details/*
  case-study/    CaseStudyHero, CaseStudyOverview, CaseStudyTechnicalSolution,
                 CodeShowcase, CaseStudyKeyFeatures, CaseStudyResultSection, CaseStudyBottomCta
  testimonials/  TestimonialsHero, TestimonialsImpactMetrics, TestimonialsTrustBar,
                 TestimonialsClientSuccessStories, TestimonialsCta
  workflows/     WorkflowsHero, WorkflowsTechnicalWorkflow, WorkflowsFaq,
                 Accordion (client), WorkflowsCta
  contact/       ContactHeader, ContactForm, ContactInfoAndSocial, ContactLocationMap
```

## 5. Component conventions

- **Naming:** one PascalCase component per file, filename === component name
  (`HeroSection.tsx`). Feature folders are lowercase (`components/home/`).
- **Exports:** `export default function ComponentName() { ... }` is the
  dominant pattern. `Header`/`Footer` still use
  `const X: React.FC = () => {}` + `export default X` — legacy; follow the
  function-declaration style for new code.
- **Props:** no component currently accepts props. If you add them, declare a
  local `type Props = { ... }` next to the component (no `React.FC` needed).
- **Client boundary:** only add `"use client"` when the file needs hooks,
  browser APIs, or event handlers. Current client components are exactly:
  `layout/Header.tsx` (`usePathname`), `blogs/ReadingProgress.tsx` (`useEffect`),
  `blogs/CopyCodeButton.tsx` (clipboard), `workflows/Accordion.tsx` (`useState`).
  Keep every page and everything else a server component.
- **Imports:** absolute via `@/` (e.g. `@/components/home/HeroSection`,
  `@/utils/tech-stacks`). Import icons from React Icons subpaths
  (`react-icons/fa`, `react-icons/si`, ...), never the barrel.
- **Links:** `next/link` for internal routes; `<a>` for external URLs
  (`target="_blank" rel="noopener noreferrer"`) and in-page `#anchors`.
- **Markup style:** semantic `<section>`/`<article>`/`<aside>` per block,
  one section per component, JSX comments mirror the original design export:
  `{/* <!-- Section Label --> */}`.

## 6. Styling and design system

Tailwind v4 is configured **entirely in `app/globals.css`** via `@theme`.
There is **no `tailwind.config.*`** — do not create one, and do not introduce
CSS Modules or styled-components.

### Typography convention (always pair both classes)

```
font-headline-lg text-headline-lg      (also text-headline-lg-mobile for <md>)
font-headline-md text-headline-md
font-headline-sm text-headline-sm
font-body-lg     text-body-lg
font-body-md     text-body-md
font-label-md    text-label-md
font-label-sm    text-label-sm
```

`font-*` sets the family token; `text-*` sets size + line-height + tracking +
weight. Using only one of the pair breaks the design system.

### Color / spacing tokens (from DESIGN.md, defined in `@theme`)

Use token utilities, not raw hex values:
`surface`, `surface-dim`, `surface-container-{lowest,low,high,highest}`,
`on-surface`, `on-surface-variant`, `on-background`, `outline`,
`outline-variant`, `primary` (#b4c5ff), `primary-container` (#2563eb),
`on-primary`, `secondary` (#4cd7f6), `tertiary`, `glass-border`,
`glow-electric`, `charcoal`, `deep-navy`.

Spacing utilities: `max-w-container-max`, `px-margin-mobile`,
`md:px-margin-desktop`, `gap-gutter`, `mb-stack-sm|md|lg`, `py-stack-*`.

### Glassmorphism utilities — reuse, don't re-implement

Defined in `app/globals.css`: `.glass-card`, `.glass-panel`,
`.glass-card-blogs`, `.glass-card-skills`, `.glass-card-workflow`,
`.high-gloss`, `.electric-glow`, `.glow-hover`, `.glow-blob`,
`.glow-blob-skills`, `.atmospheric-blob`, `.timeline-line`, `.circuit-line`,
`.circuit-node`, `.reveal-details`, `.code-block`.

Animations/keyframes: `.animate-fade-in-up`, `.ticker-animation`,
`.animate-pulse-slow`, `.floating-accent`, `.animate-blob`.

Rules for new CSS:

- Put any new utility/keyframes in `app/globals.css`; keep the existing
  section/comment organization.
- Prefer `var(--color-*)` over Tailwind's `theme()` function in new CSS
  (`theme()` still appears in the file and works, but CSS variables are the v4
  direction).
- Use v4 syntax: `bg-linear-to-t` (not `bg-gradient-to-t`), `size-*`,
  arbitrary values (`w-[45%]`), and dynamic spacing (`w-125` = 31.25rem).
- Dark theme only: `app/layout.tsx` hard-codes `<html className="dark">`; there
  is no light mode and no theme toggle.
- Mobile-first responsive: `text-headline-lg-mobile md:text-headline-lg`,
  grids `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, 12-col layouts
  (`lg:col-span-7` / `lg:col-span-5`).

## 7. Content and data conventions

- **Page-local content** lives as a module-level `const` array at the top of the
  component file (e.g. `blogPosts` in `BlogItems.tsx`, `projectItems` in
  `ProjectsItems.tsx`, `testimonials`, `accordionData`).
- **Shared/reused content** lives in `utils/`:
  - `utils/tech-stacks.ts` → `techStacks` record + `techStacksArr`
  - `utils/social-contacts.ts` → `socialContacts` + `socialLinksArr`
  - `utils/educationTimelines.ts` → `educationTimelines`
  - `utils/certifications.ts` → `certifications`
- The record → array pattern is deliberate: objects keyed by name carry
  `{ name, url, Icon }`; a derived `*Arr` adds a numeric `id` for `.map()`
  keys. Follow it when adding new icon-backed datasets.
- `types/types.ts` defines `contactTypes`, `educationTypes`, `projectTypes`,
  but is currently **unreferenced**; local data is structurally typed. Reuse
  these types only if you actually wire them up.
- Material Symbols icons are ligature text, not components:
  `<span className="material-symbols-outlined">arrow_forward</span>`.
  The stylesheet is loaded in `app/layout.tsx`; filled variants use
  `style={{ fontVariationSettings: '"FILL" 1' }}`.
- Images live under `public/assets/images/` (`logos/`, `project-images/`,
  `social-icons/`). Local `<Image>` usage needs `width`/`height` **or**
  `fill` + a sized parent + `sizes`. New remote hosts must be added to
  `images.remotePatterns` in `next.config.ts` (`images.domains` is deprecated
  in Next 16).

## 8. Next.js 16 specifics that bite

Docs are bundled at `node_modules/next/dist/docs/` (mirrors nextjs.org/docs).
Read the matching guide before using an API you are unsure about.

- **Async request APIs (breaking):** `params`, `searchParams`, `cookies()`,
  and `headers()` are Promises in Next 16. In a page:
  `export default async function Page({ params }: PageProps<'/blogs/[blogId]'>) { const { blogId } = await params; }`.
- **Middleware → Proxy:** the convention is now `proxy.ts` at the repo root
  (export `proxy` or default). Do not create `middleware.ts`.
- **Turbopack is the default** for `dev` and `build`; opt out with `--webpack`.
  There is no custom webpack/turbopack config here.
- **ESLint:** `next lint` no longer exists; use `eslint .` via the npm scripts.
- **`next/image`:** `qualities`, `imageSizes`, and `minimumCacheTTL` defaults
  changed in 16; `next/legacy/image` and `images.domains` are deprecated.
- **Cache Components** (`cacheComponents: true`) is **not enabled**. Don't add
  `use cache`, Suspense-prerender assumptions, or `unstable_instant` unless the
  task explicitly enables and configures it.
- **Metadata:** static `metadata` export in `app/layout.tsx`. Page-level SEO
  would use a per-route `metadata` export (or `generateMetadata`); none exists
  today.
- **Fonts:** `Inter`, `Geist`, `Geist_Mono` from `next/font/google` expose
  `--font-inter`, `--font-geist`, `--font-geist-mono`, consumed by
  `--font-*` tokens in `globals.css`. Keep that wiring intact.

## 9. Known gaps and caveats (verify before "fixing")

These are real, current characteristics of the repo — not necessarily bugs to
silently change:

- **Forms are non-functional markup.** `ContactForm`, `Newsletter`, and the
  sidebar subscribe input have no `action`, `onSubmit`, or handler; submit does
  a native page reload. Wiring them requires a backend/route handler + client
  state — confirm scope first.
- **Header CTA and mobile nav:** "Hire Me" is a `<button>` with no handler, and
  the nav is `hidden md:flex` with no mobile menu.
- **Blog detail is a single hard-coded article.** `BlogItems` links to five
  distinct slugs, but `app/blogs/[blogId]/page.tsx` ignores `params` and always
  renders the same MERN/Docker content. Because there is no
  `generateStaticParams`, `/blogs/[blogId]` builds as `ƒ` (dynamic) while every
  other route is `○` (static).
- **Undefined utility classes** (silent no-ops today): `glow-node`,
  `progress-bar-fill`, `glass-card-project`, and `animate-in` /
  `slide-in-from-bottom-4` (no `tailwindcss-animate` plugin). Define them in
  `globals.css` or replace them; don't assume they work.
- **Duplicated CSS:** `.circuit-line` and `.material-symbols-outlined` are each
  declared twice in `globals.css` (the later block wins).
- **No error boundaries, loading states, custom 404, sitemap, robots, or
  analytics.** `/` and all routes are prerendered except the blog detail.
- **No CI config, no env files, no tests.** `.env*` is gitignored.
- `allowedDevOrigins` in `next.config.ts` includes a hard-coded LAN IP
  (`192.168.1.114`) for local device testing.

## 10. Definition of done

Before handing work back:

1. `npm run lint:check` — zero errors/warnings.
2. `npx tsc --noEmit` — clean (build also type-checks).
3. `npm run build` — must succeed and prerender the 13 routes.
4. `npm run format:check` (or run `npm run format` and include the changes).
5. Manually sanity-check responsive layout in `npm run dev` for any UI change:
   mobile (`<768px`), tablet (`md`), desktop (`lg`), and confirm the fixed
   header offset (`pt-16`/`pt-24`/`pt-32`) still clears content.

Keep diffs focused: this is a presentation site, so avoid refactors that churn
markup without a visual or correctness reason, and never silently alter copy,
claims, or personal data.
