# about — mihail-damchevski.com

Personal portfolio (QA engineer / test automation). React 18 + TypeScript + Vite 7 + Tailwind CSS v4 + Framer Motion. Dark cyber-noir theme.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | `tsc -b` then `vite build` (typecheck before build) |
| `npm run lint` | `eslint .` |
| `npm run preview` | Vite preview of production build |
| `npm run deploy` | `gh-pages -d dist` (publishes `dist/` to GitHub Pages) |

> `lint` → `build` is the usual order. No tests exist.

## Architecture

- `src/main.tsx` → `App.tsx` → sections: `Hero`, `About`, `Projects`, `Beat`, `Footer`
- Config: `src/config/navigation.ts` (nav items), `src/config/site.ts` (social links)
- Data: `src/data/about.ts`, `projects.ts`, `music.ts`
- Constants: `src/constants/` — ASCII art banners (`*.txt` loaded via `?raw`), tech doc URL map
- Components: `sections/`, `ui/`, `projects/`, `motion/`
- `src/lib/motion.ts` — shared Framer Motion variants; `src/lib/formatTime.ts` — audio time formatting
- Hooks: `useAudioPlayer.ts` (play/pause/seek/volume/loading/error), `useWaveformBars.ts` (animated beat bars)
- `src/components/ErrorBoundary.tsx` — class component wrapping `<App />` in `main.tsx`
- Style: Tailwind utility classes + CSS custom properties; CSS split into `src/styles/` modules (base, ascii, hero, beat, projects) imported from `index.css`
- Audio asset: `public/audio/beat.mp3`

## Deployment

- `npm run deploy` pushes `dist/` via `gh-pages`
- Custom domain: `public/CNAME` → `mihail-damchevski.com`
- `homepage` in `package.json` points to GitHub Pages URL

## Notable

- `verbatimModuleSyntax` is on — use `import type` for type-only imports
- `noUnusedLocals` / `noUnusedParameters` — strict, will error on unused vars
- All sections use `aria-labelledby` + `<h2 className="sr-only">` for accessibility
- Framer Motion components respect `prefers-reduced-motion` via `useReducedMotion()`
- Section ASCII art lives in external `src/constants/ascii/*.txt` files imported with `?raw`
- CI/CD: `.github/workflows/deploy.yml` — runs lint → build → deploy on push to `main`
