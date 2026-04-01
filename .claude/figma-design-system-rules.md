# Figma Design System Rules
# For use with the Figma MCP integration in this repository.

---

## 1. Project Overview

This repository contains two distinct frontend projects, each with its own design language. Always confirm which project you are targeting before implementing a Figma design.

| Project | Path | Stack |
|---|---|---|
| VDR Analytics Dashboard | `react_charts_generation/vdr-dashboard/` | React 19 + TypeScript + Vite + Tailwind CSS 4 + Recharts |
| Fruit Market Landing Page | `fruit_market_landing/index.html` | Vanilla HTML/CSS + React via CDN (no build step) |

---

## 2. Primary Project: VDR Analytics Dashboard

### 2.1 Framework & Toolchain

- **UI Framework:** React 19 with TypeScript (`react-jsx` transform)
- **Build Tool:** Vite 8 with `@vitejs/plugin-react`
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite` plugin (imported as `@import "tailwindcss"` in `src/index.css`)
- **Charts:** Recharts 3 (all chart components wrap Recharts primitives)
- **Component Library:** Tremor React 3 (available but used sparingly)
- **Type Safety:** Strict TypeScript — `noUnusedLocals`, `noUnusedParameters`, `strict: true`

Start the dev server:
```bash
cd react_charts_generation/vdr-dashboard
npm run dev
```

### 2.2 Design Tokens

Tokens are CSS custom properties defined in `src/index.css`. There is **no separate token file** — all tokens live in `:root` alongside the Tailwind import.

```css
/* src/index.css */
@import "tailwindcss";

:root {
  --green-900: #1a472a;
  --green-800: #2d6a4f;
  --green-700: #40916c;
  --green-500: #52b788;
  --green-400: #74c69d;
  --green-200: #b7e4c7;
  --green-50:  #f0faf4;
}
```

**When implementing Figma designs into this project:**
- Map Figma color styles to the nearest `--green-*` token.
- Page background is `#f1f5f2` (set on `body`); card/surface backgrounds use white or `--green-50`.
- Do not introduce new color tokens without updating `:root` in `src/index.css`.
- There is no separate Tailwind config file — Tailwind 4 is configured entirely via the Vite plugin. Do not create `tailwind.config.js`.

### 2.3 Typography

- **Font family:** `Inter` loaded from Google Fonts (`index.html`)
- **Weights available:** 300, 400, 500, 600, 700, 800
- **Font set on `body`:** `font-family: 'Inter', system-ui, -apple-system, sans-serif`
- **No custom serif or display fonts** in this project.

When implementing Figma text styles, use Tailwind utility classes (`text-sm`, `font-semibold`, etc.) rather than inline styles or hardcoded `font-family` declarations.

### 2.4 Component Architecture

```
src/
├── main.tsx                  # ReactDOM.createRoot entry point
├── App.tsx                   # Root layout, filter state, data loading
├── index.css                 # Tailwind import + CSS tokens
├── types.ts                  # VdrRecord, FilterState interfaces
├── utils/
│   └── parseData.ts          # countBy, avgBy, countByYear, extractYear
├── hooks/
│   └── useVdrData.ts         # CSV fetch + PapaParse hook
└── components/
    ├── Header.tsx             # Top nav bar
    ├── KpiCards.tsx           # 4-metric KPI row
    ├── FilterBar.tsx          # 6-dropdown filter strip
    └── charts/
        ├── StatusDonut.tsx
        ├── CreationTimeline.tsx
        ├── VdrsByPlan.tsx
        ├── TopCountries.tsx
        ├── AvgLifetimeByPlan.tsx
        ├── ClientVsTrialByYear.tsx
        ├── PlanStatusStacked.tsx
        └── UseCaseChart.tsx
```

**Patterns to follow when adding components:**
- New chart components go in `src/components/charts/`
- New layout/UI components go in `src/components/`
- Accept a `data: VdrRecord[]` prop (already filtered by `App.tsx`)
- Export as named export, not default
- All props must be typed with TypeScript interfaces

### 2.5 Layout System

- Root layout is a **2-column CSS grid** defined inline in `App.tsx`
- KPI cards and FilterBar are full-width (`col-span-2` equivalent)
- Charts occupy single columns; some span both (`grid-column: 1 / -1`)
- Responsive breakpoints use Tailwind utilities

**Spacing conventions:**
- Section padding: `p-6` (24px) or `p-4` (16px)
- Card gap: `gap-6` (24px)
- Internal card padding: `p-4` to `p-6`

### 2.6 Chart Component Pattern

Every chart component follows this structure:

```tsx
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface Props {
  data: VdrRecord[];
}

export function MyChart({ data }: Props) {
  const chartData = countBy(data, 'fieldName');

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">Chart Title</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          {/* ... */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
```

**Chart color palette (used across all charts):**
```ts
const COLORS = ['#1a472a','#2d6a4f','#40916c','#52b788','#74c69d','#b7e4c7'];
```

### 2.7 Styling Approach

- **Primary:** Tailwind CSS utility classes on JSX elements
- **Exceptions:** Recharts tooltip/axis overrides use global CSS classes in `src/index.css` (Recharts does not support Tailwind on its internal elements)
- **Inline styles:** Used only for dynamic values (e.g., `style={{ width: `${pct}%` }}`)
- **No CSS Modules, no Styled Components, no Emotion**

### 2.8 Data Types

```ts
// src/types.ts
interface VdrRecord {
  uuid: string;
  server_id: string;
  country: string;
  status: string;
  type: string;         // "Client" | "Trial"
  plan: string;
  lifetime_days: number;
  created_ts: string;   // ISO timestamp string
  use_case: string;
}

interface FilterState {
  status: string;
  plan: string;
  type: string;
  use_case: string;
  country: string;
  year: string;
}
```

### 2.9 Asset Management

- **No image assets** in this project — all visuals are chart-generated
- Public assets (favicon.svg) go in `public/`
- Data file (`sample_data.csv`) is in `react_charts_generation/` and served from `public/` via Vite's static serving
- No CDN configuration

### 2.10 Icons

- **No icon library installed**
- SVG icons are inlined directly in JSX or used as Vite SVG imports
- Naming convention: descriptive camelCase (`ChevronDownIcon`, `FilterIcon`)

---

## 3. Secondary Project: Fruit Market Landing Page

### 3.1 Stack

- **Single HTML file:** `fruit_market_landing/index.html`
- **No build step** — React and Babel loaded from CDN (`unpkg.com`)
- All CSS in a `<style>` block in `<head>`
- All JS in a `<script type="text/babel">` block

### 3.2 Design Tokens

```css
:root {
  --bg:        #080F0A;   /* near-black forest green */
  --bg-2:      #0C1810;
  --bg-3:      #101F14;
  --cream:     #F2E8D0;
  --cream-dim: rgba(242,232,208,0.5);
  --orange:    #F97316;
  --yellow:    #EAB308;
  --lime:      #84CC16;
  --red:       #DC2626;
  --purple:    #9333EA;
  --serif:     'Cormorant Garamond', Georgia, serif;
  --sans:      'Jost', sans-serif;
}
```

### 3.3 Typography

- **Display font:** Cormorant Garamond (300, 400, 600, 700; italic variants)
- **Body font:** Jost (200, 300, 400, 500, 600)
- Both loaded from Google Fonts in `<head>`
- Fluid type sizing with `clamp()`: e.g. `font-size: clamp(4.5rem, 10vw, 10rem)`

### 3.4 Styling Approach

- **Plain CSS** in a single `<style>` block — no frameworks
- BEM-like class names (`.fruit-card`, `.card-art`, `.card-name`)
- CSS custom properties for all design decisions
- Animations: `@keyframes` in the same `<style>` block
- No Tailwind, no CSS Modules

---

## 4. General Rules for Figma-to-Code Implementation

### 4.1 Which Project to Target

- If the Figma design uses dark backgrounds, serif display fonts, or fruit-related content → target **Fruit Market Landing Page**
- If the Figma design uses charts, data tables, KPI cards, or a green/white light theme → target **VDR Analytics Dashboard**
- If unclear, ask before proceeding

### 4.2 Color Mapping

When a Figma design uses colors not in the token set:
1. First check if the color is close to an existing token (within ~10% luminance/hue)
2. If yes, use the existing token
3. If no, add a new CSS custom property to `:root` in the appropriate CSS file

### 4.3 Component Placement

| New component type | Destination |
|---|---|
| Chart visualization | `src/components/charts/MyChart.tsx` |
| Layout / UI widget | `src/components/MyWidget.tsx` |
| Shared utility | `src/utils/myUtil.ts` |
| Data hook | `src/hooks/useMyData.ts` |

### 4.4 What to Avoid

- Do not install new CSS frameworks or styling libraries — Tailwind is already configured
- Do not create a `tailwind.config.js` — Tailwind 4 uses the Vite plugin only
- Do not use `default export` for components — use named exports
- Do not hardcode color hex values in component files — always use a CSS variable or Tailwind token
- Do not add `app.css` styles — that file is intentionally empty; global styles go in `index.css`
- Do not use `React.FC` type annotation — use explicit prop interfaces instead

### 4.5 Responsive Design

- The dashboard uses Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- The fruit landing page uses CSS `clamp()` and media queries
- Target breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop)

---

## 5. File References

| File | Purpose |
|---|---|
| `react_charts_generation/vdr-dashboard/src/index.css` | Design tokens + Tailwind import + Recharts overrides |
| `react_charts_generation/vdr-dashboard/src/types.ts` | TypeScript data interfaces |
| `react_charts_generation/vdr-dashboard/src/utils/parseData.ts` | Data transformation utilities |
| `react_charts_generation/vdr-dashboard/src/App.tsx` | Root layout and filter state |
| `fruit_market_landing/index.html` | Entire fruit market app (single file) |
| `.claude/CLAUDE.md` | General project instructions |
