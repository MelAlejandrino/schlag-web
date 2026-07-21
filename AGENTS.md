# Repository Notes

## Framework Versions & Breaking Changes
- **Next.js 16.2.10** + **React 19.2.4** — both have breaking changes from prior majors. Read `node_modules/next/dist/docs/01-app/` before writing code. Heed deprecation notices.

## Stack
- **App Router** (`app/`), not Pages Router.
- **Tailwind CSS v4** — no `tailwind.config.*` file. Configured via `@tailwindcss/postcss` in `postcss.config.mjs` and `@import "tailwindcss"` in `app/globals.css`. Theme tokens use `@theme inline` with CSS custom properties.
- **TypeScript strict mode** — `tsconfig.json` has `strict: true`, path alias `@/*` → root.
- **ESLint 9 flat config** — `eslint.config.mjs` uses `defineConfig`, not `.eslintrc`.

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- No test framework is configured.

## Structure
- Entrypoints: `app/layout.tsx` (root layout), `app/page.tsx` (home).
- Static assets in `public/`.
- No monorepo, no CI workflows, no env files.

## Gotchas
- Adding new CSS utilities or theme tokens requires updating `app/globals.css`, not a JS config.
- `next/font/google` auto-loads Geist families; no manual font imports needed.
