# Business & Carobar

**Business & Carobar** is an entrepreneurial news and highlight platform — a place to amplify the stories, problems, and achievements of small-to-medium entrepreneurs and local business communities.

Live domain: [businessandcarobar.com](https://businessandcarobar.com)

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com) for styling
- `next/image` and `next/font` for performance and SEO
- Server Components by default — `"use client"` only where interactivity is required

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/            # Routes: /, /about, /stories, /contact, sitemap.ts, robots.ts
  components/     # Shared UI components (Header, Footer, cards, forms, etc.)
  components/icons/  # Inline SVG icon components
  data/           # Placeholder article and team data
  lib/            # Site-wide constants
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Notes

- This phase uses placeholder/dummy content only — no CMS, backend, or form submission logic.
- SEO (metadata, Open Graph tags, JSON-LD, sitemap, robots.txt, semantic HTML) is implemented throughout per project requirements.
