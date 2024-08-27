- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `layouts/*` - The different page layouts each MDX category (snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `pages/feed.xml.tsx` - Automatically generated RSS feed.
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

This application requires Node.js v16.13+.
```bash
pnpm install
pnpm run dev
```

## Next step
Integrate MDX for blogs too
