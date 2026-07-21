---
name: Schlag Executive Explorer
colors:
  background: '#fcf9f4'
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#434843'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#747872'
  outline-variant: '#c3c8c1'
  surface-tint: '#526255'
  primary: '#455548'
  on-primary: '#ffffff'
  primary-container: '#5d6d5f'
  on-primary-container: '#ddeedd'
  inverse-primary: '#bacbba'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#54514b'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c6963'
  on-tertiary-container: '#efe9e2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e7d6'
  primary-fixed-dim: '#bacbba'
  on-primary-fixed: '#101f14'
  on-primary-fixed-variant: '#3b4a3e'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e7e2da'
  tertiary-fixed-dim: '#cbc6bf'
  on-tertiary-fixed: '#1d1b17'
  on-tertiary-fixed-variant: '#494641'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  hero-headline:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  hero-headline-mobile:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  section-heading:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  section-heading-mobile:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  mono-ui:
    fontFamily: Geist Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-page: 24px
  content-max-width: 1024px
---

## Brand & Style

The design system is built on the philosophy of **Technical Minimalism**. It targets power users who demand professional-grade utility without sacrificing aesthetic sophistication. The visual narrative rejects the "softness" of modern mobile-first OS design in favor of a desktop-centric, precision-engineered environment.

The emotional response is one of **calculated calm**. By utilizing a muted, organic palette of bone, clay, and forest greens, the interface feels like a well-crafted physical tool—analogous to a high-end Leica camera or a Dieter Rams-era appliance. The aesthetic is a hybrid of **Modernism** and **Brutalism**, emphasizing structural integrity, meticulous alignment, and a total absence of unnecessary ornamentation.

## Colors

The palette is intentionally restrained to maintain focus on the file hierarchy and data.
- **Backgrounds**: The primary canvas uses `#FCF9F4`, providing a warm, paper-like quality that reduces eye strain compared to pure white.
- **Surfaces**: Navigation sidebars and modal containers use `#F6F3EE` to create subtle structural differentiation without relying on heavy shadows.
- **Typography**: Primary text is a warm near-black (`#1C1C1A`) to maintain high contrast, while secondary metadata uses `#434843`.
- **Action Elements**: The accent color is a muted forest green (`#455548`). It is used sparingly for primary actions, selection states, and focus indicators.

## Typography

This design system employs a sophisticated typographic contrast. **Fraunces** provides a prestigious, editorial feel for large headings and directory titles, lending the application an "archival" authority.

**Geist** is used for all functional UI elements, file names, and metadata. Its technical, slightly monospaced influence ensures that file paths and sizes remain highly legible and perfectly aligned.
- Use **Medium (500)** weight for labels to ensure clarity against the beige background.
- Maintain strict baseline alignment across columns in the file list view.

### Type Scale

| Token | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| `hero-headline` | Fraunces | 48px | 600 | 56px | -0.01em | Hero H1 (desktop) |
| `hero-headline-mobile` | Fraunces | 32px | 600 | 40px | — | Hero H1 (mobile) |
| `section-heading` | Fraunces | 32px | 500 | 40px | -0.01em | Section H2 (desktop) |
| `section-heading-mobile` | Fraunces | 24px | 500 | 32px | — | Section H2 (mobile) |
| `body-lg` | Geist | 18px | 400 | 28px | 0 | Hero description |
| `body-md` | Geist | 16px | 400 | 24px | 0 | Card/step descriptions |
| `label-md` | Geist | 14px | 500 | 20px | 0 | Buttons, inputs |
| `label-sm` | Geist | 12px | 500 | 16px | 0.02em | Brand label, small tags |
| `mono-ui` | Geist Mono | 11px | 400 | 16px | 0 | Version badge |

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. The sidebar and utility panels occupy fixed widths to ensure tool consistency, while the primary file viewing area scales fluidly.

- **Rhythm**: All spacing is derived from a 4px base unit.
- **Alignment**: Hard-edge alignment is mandatory. Content should snap to a rigorous 12-column grid in detail views.
- **Page padding**: `24px` (6 units) on all sides.
- **Content max-width**: `1024px` (`max-w-5xl`).
- **Responsive behavior**: On smaller viewports, the sidebar collapses into a condensed icon-only rail. The Hero typography scales down to `32px` on mobile to maintain hierarchy on compact displays.

### Hero Layout

The Hero is a single left-aligned column with the following structure:
1. Brand row: small icon + uppercase label (`label-sm`, `tracking-widest`)
2. Headline: `hero-headline` / `hero-headline-mobile`
3. Description: `body-lg` (desktop), `body-md` (mobile), `max-w-xl`
4. Actions: primary button (`label-md`) + optional version badge (`mono-ui`, `rounded-full`)

Vertical spacing between hero elements: `20px` (`gap-5`) on desktop, `24px` (`gap-6`) on mobile.

## Elevation & Depth

Elevation is communicated through **Tonal Layering** and **Thin Outlines** rather than traditional shadows.
- **Level 0 (Background)**: `#FCF9F4` - The base application canvas.
- **Level 1 (Panels)**: `#F6F3EE` with a 1px solid border of `#C3C8C1`. No shadow.
- **Active State**: Selected files or folders use a subtle tint of the Primary Green (`#455548`) across the entire row.

## Shapes

The shape language is strictly **technical and sharp**.
- All container corners and buttons use a **4px (0.25rem)** radius.
- This small radius softens the "brutalism" just enough to feel premium while remaining distinct from the hyper-rounded "bubble" aesthetics of consumer software.
- Pills and badges use `rounded-full`.
- Checkboxes and radio buttons must remain square or strictly geometric.

## Components

### Buttons & Inputs
- **Primary Action**: Solid `#455548` background, white text, 4px radius, `label-md` weight. On hover, transition to `#455548/90`.
- **Secondary Action**: Ghost style. 1px border of `#C3C8C1`, text `#1C1C1A`.
- **Inputs**: Background `#FCF9F4`, 1px border. Focus state replaces border with 1px solid `#455548`.

### Cards & Panels
- **Card**: `bg-surface-container-low`, `border border-outline-variant`, `rounded-sm`, `p-6`.
- **Card title**: `text-base font-semibold`.
- **Card description**: `text-sm text-on-surface-variant`.

### File Lists & Navigation
- **Rows**: 40px height for density. Staggered fade-in animation (80ms delay per row).
- **Icons**: Monochrome or highly desaturated. Avoid multi-color illustrative icons.
- **Breadcrumbs**: Use `label-sm`. Separators should be a simple forward slash `/` in `#C3C8C1`.

### Version Badge
- `bg-surface-container-high`, `border border-outline-variant`, `rounded-full`.
- `mono-ui` text size, `text-on-surface-variant`.
- Pulsing dot: `w-1.5 h-1.5 rounded-full bg-primary animate-pulse`.

### Motion
- **Entrance**: Use Framer Motion `variants`. Initial `opacity: 0, y: 10` to `opacity: 1, y: 0`.
- **Stagger**: Children stagger at `0.08s` intervals.
- **Delay**: `0.1s` delay before first child.
- **Duration**: `0.5s`.
- **Easing**: `[0.4, 0, 0.2, 1]` (CircOut) for a snappy, mechanical feel.
- **Respects `prefers-reduced-motion`** via `useReducedMotion()`.
