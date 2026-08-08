# OUMATRA

The brand-system and website foundation for OUMATRA — a global parent company created to build, nurture, and own enduring category-defining companies across technology and future industries.

> **From Sound. Beyond Silence.**

This repository currently contains **Step 1 only**: a production-quality Next.js foundation, the v1 brand documentation, and a minimal brand-preview homepage. It is not the full corporate website.

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- npm

## Local development

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Repository map

```text
app/                    App Router entry points and global styles
components/             Presentational brand-preview components
docs/                   Brand foundation, decisions, and website brief
public/brand/            Reserved production brand-asset structure
```

Start with [docs/BRAND_FOUNDATION.md](docs/BRAND_FOUNDATION.md). The authoritative distinction between approved and unresolved decisions lives in [docs/BRAND_DECISIONS.md](docs/BRAND_DECISIONS.md).

## Asset status

The supplied brand-kit image is conceptual reference artwork, not a production asset. It is intentionally not used as a website logo and has not been traced. Final master logo files, favicon artwork, social artwork, typography, and usage specifications are still open decisions. See `public/brand/README.md` before adding assets.

## Branch model

- `main` — lower/integration environment
- `production` — production/default branch
- Feature work branches from `main` and is reviewed before any merge

Never commit feature work directly to `production`.
