# Inferia Website & Documentation

This is the Inferia landing page and documentation site, built with Next.js and [Fumadocs](https://fumadocs.dev).

## Getting Started

Run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The landing page and other marketing pages.            |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Key Files

- `lib/source.ts`: Content source adapter for documentation.
- `lib/layout.shared.tsx`: Shared layout options.
- `source.config.ts`: Fumadocs MDX configuration.
- `components/landing/`: Landing page components.

## Learn More

- [Fumadocs Documentation](https://fumadocs.dev) - learn about Fumadocs.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
