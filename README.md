# dttheme.github.io

My personal portfolio site, deployed to GitHub Pages at [dyannaturner.com](https://www.dyannaturner.com). It's a React SPA built with Vite.

---

## Tech Stack

- **React 18** + **React Router v6** (HashRouter — e.g. `/#/engineering`)
- **Vite** for bundling and dev server
- **Vanilla CSS** with CSS custom properties for theming
- `react-icons`, `hamburger-react` for UI primitives

---

## Key Patterns

- **State lifting** — `isMenuOpen` lives in `App.jsx` and is passed as props to both `Header` (which renders the toggle button) and `BookMenu` (which reads it to show/hide).
- **Click-outside detection** — `BookMenu` uses `useRef` + a `useEffect` event listener to close when you click anywhere outside it.
- **Barrel exports** — Each folder has an `index.js` that re-exports everything so imports look like `import { BookMenu, Card } from '../components'`.
- **Responsive layout** — Desktop: fixed 250px sidebar + content shifts right. Mobile (≤768px): menu becomes a fullscreen overlay. Handled in CSS via media queries.
- **No global state management** — The app is small enough that everything is handled with `useState`/`useRef` and prop drilling.

---

## Routing

HashRouter is used instead of `BrowserRouter` because GitHub Pages doesn't support server-side URL rewrites — the `#` keeps routing client-side.

| URL | Page |
|-----|------|
| `/#/` | Home (About) |
| `/#/engineering` | Projects |
| `/#/currently` | Currently |
| `/#/peersupport` | Peer Support |
| `/#/magic` | Magic (WIP) |

---

## Scripts

```bash
npm start       # Vite dev server
npm run build   # Production build
npm run deploy  # Deploy to GitHub Pages via gh-pages
```
