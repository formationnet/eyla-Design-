@AGENTS.md

# Eya Chebbah Portfolio

Bilingual (EN/FR) Next.js portfolio for Eya CHEBBAH, interior architect.

## Design direction: Architectural Grid

Chosen from 3 proposed directions (Minimal Editorial, Warm Material, Architectural Grid).
Bold, structured, monochrome with one accent — strong lines and asymmetric layouts that
let project photography read like technical drawings.

### Fonts (next/font/google, see `app/[locale]/layout.tsx`)

- Headings: **Outfit** — CSS var `--font-heading`, Tailwind class `font-heading`
- Body: **Rubik** — CSS var `--font-body`, Tailwind class `font-sans` (default)

### Color tokens (`app/globals.css`)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | `#FAFAFA` | `#09090B` | Page background |
| `--foreground` | `#09090B` | `#FAFAFA` | Body text |
| `--primary` | `#18181B` | `#FAFAFA` | Primary buttons/emphasis |
| `--secondary` | `#3F3F46` | `#27272A` | Secondary surfaces/text |
| `--accent` | `#B45309` | `#F59E0B` | Warm amber/gold accent — CTAs, links, focus (switched from an earlier blue accent; ~5:1 contrast in both themes) |
| `--muted` | `#F1F1F2` | `#27272A` | Muted backgrounds |
| `--border` | `#E4E4E7` | `oklch(1 0 0 / 10%)` | Borders/dividers |

Both light and dark variants are defined in `app/globals.css` (`:root` and `.dark`), and
consumed as shadcn/ui semantic tokens (`bg-background`, `text-foreground`, `bg-primary`,
etc.) — never hardcode raw hex in components.

