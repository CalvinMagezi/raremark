# Raremark Foundation Redesign

A modern, accessible redesign for the [Raremark Foundation](https://raremarkfoundation.org) built from Figma designs with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Features & Pages
- **Landing Page (`/`)**: Hero section, trust strip with partner organizations, measurable impact stats (Hope for Warriors Fund, Know Your Type, counseling), featured podcast spotlight, and trending topics.
- **About Us (`/about-us`)**: Mission, origins story honoring Josephine Esisa Madewo, leadership team cards, and Board of Directors directory.
- **HEAL Program (`/programs/heal`)**: 6-step vertical timeline detailing Health Education & Aid for Life.
- **Latest News (`/latest-news`)**: Two-column featured lead story, secondary news cards, and quarterly impact metrics.
- **Sick Conversations Podcast (`/podcast`)**: Official podcast series, player links, and episode archive.
- **Support Us (`/donate`) & Connect (`/connect`)**: Community contribution tiers and interactive contact desk.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: Product Sans (self-hosted TTF) + Playfair Display
- **Icons**: Lucide React

## Development

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000`.

## Production Build

```bash
pnpm build
pnpm start
```
