# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Inferia AI website — landing page + documentation site for the Inferia inference platform. Built with Next.js 16 + Fumadocs. The entire application lives inside the `docs/` directory (not at the repo root).

## Commands

All commands must be run from the `docs/` directory:

```bash
cd docs

pnpm install          # Install dependencies (pnpm is the package manager)
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm types:check      # Type-check (runs fumadocs-mdx codegen + next typegen + tsc)
```

There is no linter, formatter, or test runner configured.

## Architecture

### Directory Layout (inside `docs/`)

- `app/(home)/` — Landing page route group (renders at `/`)
- `app/docs/` — Documentation pages (Fumadocs, renders at `/docs/...`)
- `app/api/search/` — Full-text search endpoint (Orama)
- `app/og/` — Dynamic OG image generation
- `app/llms.mdx/` — Raw markdown endpoint for LLM consumption (rewrites from `/docs/:path*.mdx`)
- `components/landing/` — All landing page components (HeroPage, DemoSection, UseCases, etc.)
- `components/ai/` — AI-integration components (LLMCopyButton, ViewOptions)
- `content/docs/` — MDX documentation content, organized by section
- `lib/source.ts` — Fumadocs content source adapter (central import for docs pages)
- `lib/layout.shared.tsx` — Shared layout configuration (nav, GitHub link)
- `source.config.ts` — Fumadocs MDX config (content dir, mermaid plugin, schemas)

### Key Patterns

- **Fumadocs framework**: Documentation is MDX-based with `fumadocs-mdx` for content loading and `fumadocs-ui` for the docs layout/theme. Content source is configured in `source.config.ts` and consumed via `lib/source.ts`.
- **App Router**: Uses Next.js App Router with route groups — `(home)` for landing, `docs` for documentation.
- **Dark-first theme**: Default theme is dark. Brand color is Inferia green (`#0D9373`, HSL `166 84% 31%`), set as CSS custom properties in `global.css`.
- **Landing page font**: Space Grotesk (loaded in the landing page layout). Docs use Inter.
- **No component library**: Landing page components are custom-built with Tailwind CSS. Docs UI comes from fumadocs-ui.
- **Static generation**: Documentation pages use `generateStaticParams()` for static builds.
- **LLM text endpoints**: Documentation is exposed as raw markdown at `/docs/:path*.mdx` via Next.js rewrites, plus `/llms-full.txt` for full content. `robots.txt` includes `LLM-site` directive.

### Environment Variables

- `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID
