# Portfolio

Personal portfolio of Ayoub Faragi — React + Vite + Tailwind CSS.

## Development

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Structure

- `src/data/` — all portfolio content (projects, skills); edit here to add/update projects
- `src/pages/` — one component per route (`/`, `/projects`, `/about`, `/contact`)
- `src/components/` — section components used by the pages
- `src/assets/` — images imported by the data/components

Deployed on Vercel (SPA rewrites configured in `vercel.json`).
