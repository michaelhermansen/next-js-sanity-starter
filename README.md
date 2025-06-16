# Next.js Sanity CMS Starter

Next.js 15 + Sanity CMS starter. Originally forked from Schema UI, heavily modified for internal use.

## Stack

- Next.js 15 (App Router, React 19)
- Sanity CMS with visual editing
- TypeScript
- Tailwind CSS 4.x with custom design system
- Radix UI components
- pnpm

## Features

- Light/dark mode theme system with `next-themes`
- Semantic search with AI embeddings
- Visual editing with Sanity Presentation
- Modular page builder with flexible block system
- CookieScript integration
- Google Tag Manager integration
- SEO metadata and sitemaps
- Portable text renderer with custom components
- Image optimization with Sanity CDN
- Video player support (YouTube, Vimeo, etc.)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm package manager
- Sanity account and project

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-js-sanity-starter
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy environment variables:

```bash
cp .env.local.example .env.local
```

4. Configure environment variables (see [Environment Variables](#environment-variables) section)

5. Start development server:

```bash
pnpm dev
```

6. Access the application:
   - Frontend: http://localhost:3000
   - Sanity Studio: http://localhost:3000/studio

### Front Page Setup

Create a page with slug `index` in Sanity Studio. The app automatically redirects `/index` → `/` (configured in `next.config.ts`).

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm check` - Run both typecheck and lint
- `pnpm typegen` - Generate Sanity TypeScript types
- `pnpm typegen:watch` - Watch mode for Sanity type generation

## Environment Variables

Environment variables are validated using `@t3-oss/env-nextjs`. Copy `.env.local.example` to `.env.local` and configure:

**Required Client Variables:**

- `NEXT_PUBLIC_SITE_URL` - Your website URL (e.g., "http://localhost:3000")
- `NEXT_PUBLIC_SITE_ENV` - Environment: `"production"` | `"development"`
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version (YYYY-MM-DD format)
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - 8-character Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset: `"production"` | `"development"`

**Optional Client Variables:**

- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID (e.g., "GTM-XXXXXX")

**Required Server Variables:**

- `SANITY_API_READ_TOKEN` - Sanity read token for data fetching
- `SANITY_API_EDITOR_TOKEN` - Sanity editor token for preview mode
- `SANITY_REVALIDATE_SECRET` - Secret for webhook revalidation

## Page Builder System

The project uses a flexible, modular page builder that allows content editors to create pages using reusable blocks.

### Available Page Blocks

- **`pageHero`** - Main hero section with title, description, and call-to-action links
- **`navigationSection`** - Grid of navigation cards with links and descriptions
- **`allArticles`** - Dynamic article listing with category filtering

### Adding New Page Blocks

To add a new page block type:

1. **Create Schema**: Add schema definition in `src/sanity/schemas/page-blocks/`
2. **Add Component**: Create React component in `src/features/page-builder/page-blocks/`
3. **Register Component**: Add to `componentMap` in `src/features/page-builder/page-blocks-renderer.tsx`
4. **Update Schema Registry**: Add to `src/sanity/schemas/partials/page-blocks.ts`
5. **Update Queries**: Add to GROQ queries in `src/sanity/queries/fragments/page-blocks.ts`

### Block Content System

Rich text content uses Sanity's Portable Text with custom components:

- **Text blocks**: Paragraphs, headings (H1-H3), blockquotes
- **Lists**: Bullet and numbered lists
- **Links**: Internal and external links with optional `target="_blank"`
- **Images**: Optimized images with alt text and captions
- **Videos**: Embedded videos with aspect ratio control (16:9, 1:1)

Components are defined in `src/features/portable-text/portable-text-renderer.tsx`.

## Sanity CMS Features

### Visual Editing

Live preview editing with Sanity Presentation tool. Content editors can see changes in real-time while editing in the Studio.

### Semantic Search

AI-powered search with embeddings:

- Configured in `sanity.config.ts` with `embeddingsIndexDashboard`
- Implementation in `src/features/search/`
- Search UI available at `/sok` route

### Document Types

- **Pages**: Flexible pages built with page blocks
- **Articles**: Blog posts with categories, featured images, and rich content
- **Authors**: Author profiles with bio and social links
- **Categories**: Taxonomies for organizing articles

### Internationalization

Norwegian locale support with `@sanity/locale-nb-no` package.

### Type Generation

Automatically generate TypeScript types from Sanity schemas:

```bash
pnpm typegen        # Generate types once
pnpm typegen:watch  # Watch mode with auto-regeneration
```

Types are generated in `src/sanity/sanity.types.ts` and updated when schemas change.

## UI Components & Design System

### Component Library

Built with Radix UI primitives and custom styling:

- **Form components**: Button, Input, Label
- **Navigation**: Dropdown menus, Sheet (mobile menu)
- **Layout**: Card, Accordion, Breadcrumbs
- **Feedback**: Toast notifications (Sonner), Loading states
- **Typography**: Semantic heading and text components
- **Media**: Avatar, Skeleton loaders

Components are located in `src/components/ui/` and follow consistent design patterns.

### Typography System

Hierarchical typography components in `src/components/ui/typography.tsx`:

- `TypographyH1`, `TypographyH2`, `TypographyH3` - Semantic headings
- `TypographyP` - Body text with responsive sizing

### Theme System

**Color modes**: Light, dark, and system automatic

- CSS custom properties in `src/app/globals.css`
- Theme provider: `src/features/theme/theme-provider.tsx`
- Theme toggle: `src/features/theme/theme-toggle.tsx`
- Uses `next-themes` for theme management

**Custom utilities**:

- `pt-section`, `pb-section`, `py-section` - Consistent section spacing
- `container` - Responsive container with max-widths
- Custom animations for accordions and fade effects

### Tailwind CSS 4.x

Latest Tailwind CSS with:

- Custom color palette with semantic naming
- CSS custom properties for theming
- `@utility` directives for reusable patterns
- `tailwindcss-animate` plugin for smooth animations

## Third-Party Integrations

### Google Tag Manager

- Set `NEXT_PUBLIC_GTM_ID` environment variable
- Auto-loads via `@next/third-parties/google` package
- Configured in main layout with conditional loading

### CookieScript

- Cookie consent banner integration
- Trigger component: `src/features/cookie-banner/trigger.tsx`
- Manual trigger available in footer

## Development Workflow

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict mode enabled with path mapping
- **Prettier**: Code formatting with Tailwind CSS plugin

### Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── features/           # Feature-specific code
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and config
├── sanity/             # Sanity CMS integration
└── types/              # TypeScript type definitions
```

### Common Troubleshooting

**Environment Variables**: Ensure all required variables are set in `.env.local`

**Sanity Connection**: Check project ID and dataset in environment variables

**Type Errors**: Run `pnpm typegen` to regenerate Sanity types

**Port Conflicts**: Default port is 3000, change with `PORT=3001 pnpm dev`

**Build Errors**: Clear Next.js cache with `rm -rf .next` and rebuild

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Add production URL to Sanity CORS settings in Sanity Studio

### Environment Setup

- Add all environment variables from `.env.local.example`
- Update `NEXT_PUBLIC_SITE_URL` to your production domain
- Set `NEXT_PUBLIC_SITE_ENV` to `"production"`

### Sanity Configuration

1. In Sanity Studio, go to API settings
2. Add your production domain to CORS origins
3. Configure webhook for ISR revalidation (optional)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards

- Follow existing code style and patterns
- Add TypeScript types for new features
- Test components thoroughly
- Update documentation for significant changes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Architecture Notes

### Key Design Decisions

- **App Router**: Uses Next.js 13+ App Router for better performance
- **TypeScript**: Strict type checking with generated Sanity types
- **Component Co-location**: Feature-specific components live in `features/` directory
- **Custom Hooks**: Reusable state logic in `hooks/` directory
- **Environment Validation**: Runtime validation with `@t3-oss/env-nextjs`

### Performance Optimizations

- Image optimization with Sanity CDN
- Incremental Static Regeneration (ISR) for dynamic content
- Lazy loading for page blocks and components
- Font optimization with `next/font`
