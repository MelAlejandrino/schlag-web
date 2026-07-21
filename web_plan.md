# Web Plan — Schlag Landing Page

## 1. Overview

A single-page application (SPA) landing page for **Schlag**, a Windows desktop file explorer. The page serves as the public download entry point — no authentication, no backend logic beyond the client-side GitHub release fetch.

**Stack:** Next.js (App Router), React 19, Tailwind CSS v4, Framer Motion, TypeScript.

### Visual design
All typography, color, and visual design decisions are defined in [`DESIGN_WEB.md`](./DESIGN_WEB.md). Follow that file for implementation. Do not invent colors or fonts inline.

---

## 2. One-Click Download (No Server Required)

The download flow is entirely client-side using the GitHub Releases API.

### Flow
1. On mount / on demand, fetch `https://api.github.com/repos/MelAlejandrino/Schlag/releases/latest`.
2. Parse the `assets` array to find the Windows installer (`.exe` or `.msi`).
3. Trigger a programmatic download by creating an invisible `<a download>` element pointing to the asset `browser_download_url` and programmatically clicking it.

### Fallback behavior
- If the API call fails (rate limit / network), show a secondary **"Download from GitHub Releases"** button that opens the releases page directly.
- If the asset is not found, hide the primary CTA and show only the fallback.

### No Supabase needed
The requirement is satisfied without a backend. Supabase is unnecessary unless you later want download analytics.

---

## 3. Page Structure

Single scrollable SPA with smooth section transitions.

### Sections
| # | Section | Purpose |
|---|---------|---------|
| 1 | **Hero** | Headline, one-line description, primary CTA, release version badge |
| 2 | **Highlights** | 3–4 feature cards (instant search, tabs, terminal, zip browsing) |
| 3 | **How it works** | 3-step visual flow (Download → Install → Index) |
| 4 | **Keyboard-first** | Shortcuts preview / power-user signal |
| 5 | **Footer** | GitHub link, license, copyright |

---



## 4. Animation (Framer Motion)

- **Hero entrance:** Staggered fade-up (`whileInView` + `transition.staggerChildren`) for headline → subhead → CTA.
- **Scroll reveals:** Feature cards and section headings animate in with `y: 40, opacity: 0 → 1` when they enter the viewport.
- **Micro-interactions:** Button hover scale (1.02), subtle border-color transitions on cards, version badge pulse on load.
- **Respects reduced motion:** Wrap all motion in `useReducedMotion` check; fall back to static layout if `prefers-reduced-motion: reduce`.

---

## 5. Technical Details

### Directory layout
```
web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── FeatureCard.tsx
│   ├── DownloadButton.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/
│   └── github.ts          # release fetch + asset parser
├── public/
│   └── brand/             # placeholder logos, og-image
└── web_plan.md
```

### Key file: `lib/github.ts`
- `getLatestRelease()` — fetches latest release metadata from GitHub API.
- `findWindowsAsset(release)` — returns the first `.exe` / `.msi` asset URL.
- `triggerDownload(url, filename)` — creates a temporary `<a download>`, clicks it, revokes the object URL.

### Environment
- No `.env` required for public GitHub API calls (rate-limited to 60 req/hr unauthenticated, which is fine for a landing page).

---

## 6. Brand Assets (Placeholders)

| Asset | Location | Note |
|-------|----------|------|
| Logo / wordmark | `public/brand/logo.svg` | Replace placeholder with final SVG |
| OG image | `public/brand/og.png` | 1200×630px for social sharing |
| Favicon | `public/brand/favicon.ico` | 32×32 / 16×16 |

---

## 7. Acceptance Criteria

- [ ] Landing page loads as a single route (`/`) with no client-side routing needed.
- [ ] Primary CTA fetches the latest GitHub release and triggers a direct `.exe`/`.msi` download without leaving the page.
- [ ] Fallback button opens `https://github.com/MelAlejandrino/Schlag/releases` if API fails.
- [ ] Typography, colors, and visual design follow `DESIGN_WEB.md`.
- [ ] Framer Motion animations run on section entrance and hero load.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Page is responsive (mobile → desktop).
- [ ] No tracking, no cookies, no external dependencies beyond Google Fonts and Framer Motion.
