# Next.js Sanity CMS Starter

Next.js 15 + Sanity CMS starter. Originally forked from Schema UI, heavily modified for internal use.

## Stack

- Next.js 15 (App Router, React 19)
- Sanity CMS with visual editing
- TypeScript
- Tailwind CSS + shadcn/ui
- pnpm

## Features

- Light/dark mode theme system
- Semantic search with AI embeddings
- Visual editing with Sanity Presentation
- Modular page builder
- CookieScript integration
- Google Tag Manager
- SEO metadata and sitemaps

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment variables (see below)

3. Start dev server:

```bash
pnpm dev
```

4. Access app at http://localhost:3000, Studio at http://localhost:3000/studio

### Front Page

Create a page with slug `index` in Sanity. The app redirects `/index` → `/` (see `next.config.ts`).

## Scripts

- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm start` - Production server
- `pnpm lint` - ESLint
- `pnpm typecheck` - TypeScript check
- `pnpm typegen` - Generate Sanity types
- `pnpm typegen:watch` - Watch mode for types

## Environment Variables

Validated with `@t3-oss/env-nextjs`:

**Client:**

- `NEXT_PUBLIC_SITE_URL` - Website URL
- `NEXT_PUBLIC_SITE_ENV` - `production` | `development`
- `NEXT_PUBLIC_SANITY_API_VERSION` - YYYY-MM-DD
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - 8-character project ID
- `NEXT_PUBLIC_SANITY_DATASET` - `production` | `development`
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID (optional)

**Server:**

- `SANITY_API_READ_TOKEN` - Read token
- `SANITY_API_EDITOR_TOKEN` - Editor token for previews

## Page Modules

Flexible module-based page builder:

**Available modules:**

- `page-hero` - Main banner with title, description, CTAs
- `section-header` - Section headings
- `cta-1` - Call-to-action sections
- `all-articles` - Article listings

**Adding new modules:**

1. Schema: `src/sanity/schemas/modules/`
2. Component: `src/components/modules/`
3. Register: `src/components/modules/index.tsx`
4. Add to: `src/sanity/schemas/partials/modules.ts`
5. Update queries: `src/sanity/queries/`

## Sanity Features

**Visual Editing:** Live preview with Presentation tool

**Semantic Search:** AI embeddings configured in `sanity.config.ts`, implementation in `src/features/search/`

**Type Generation:**

```bash
pnpm typegen        # Generate once
pnpm typegen:watch  # Watch mode
```

## Theme System

Three modes: automatic, light, dark

- CSS variables: `src/app/globals.css`
- Components: `src/features/theme/`
- Uses `next-themes`

## Integrations

**Google Tag Manager:** Set `NEXT_PUBLIC_GTM_ID`, auto-loads via `@next/third-parties`

**CookieScript:** Trigger in `src/features/cookie-banner/trigger.tsx`

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Add production URL to Sanity CORS settings
