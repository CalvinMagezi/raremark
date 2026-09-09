# Raremark Foundation Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11-orange?logo=pnpm)](https://pnpm.io/)

A modern, responsive, and accessible redesign for the **[Raremark Foundation](https://raremarkfoundation.org)**.

The Raremark Foundation is a non-profit organization dedicated to improving the lives of individuals living with or affected by Sickle Cell Disease (SCD) in Uganda and across Africa. This platform powers the foundation's advocacy, donor engagement, patient assistance programs, and educational outreach.

---

## Table of Contents

- [Overview & Mission](#overview--mission)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Brand & Design System](#brand--design-system)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Local Dev](#installation--local-dev)
  - [Available Scripts](#available-scripts)
- [Contributing](#contributing)
  - [Branching & Workflow](#branching--workflow)
  - [Coding Standards](#coding-standards)
  - [Pull Request Checklist](#pull-request-checklist)
  - [Contribution Ideas & Roadmap](#contribution-ideas--roadmap)
- [License & Acknowledgments](#license--acknowledgments)

---

## Overview & Mission

The Raremark Foundation champions sickle cell warriors through four strategic pillars:
1. **Health Education & Aid for Life (HEAL)**: Community outreach, patient literacy, and caregiver training.
2. **Hope for Warriors Fund**: Subsidizing critical medical interventions, notably total hip arthroplasty for warriors suffering from avascular necrosis (AVN).
3. **Know Your Type**: Genetic counseling and pre-marital genotype screening to mitigate transmission rates.
4. **Sick Conversations Podcast**: Amplifying raw, authentic lived experiences to dismantle sickle cell stigma.

This web application translates the foundation's official design system into a high-performance Next.js application built for accessibility, reliability, and ease of maintenance.

---

## Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | React server/client components with Turbopack |
| **Library** | [React 19](https://react.dev/) | Modern concurrent UI architecture |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | CSS-first configuration via `@tailwindcss/postcss` and `@theme` |
| **Typography** | Product Sans + Playfair Display | Self-hosted Product Sans + Google Fonts Playfair Display |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible SVG iconography |
| **Package Manager** | [pnpm](https://pnpm.io/) | Fast, deterministic dependency management (`pnpm@11`) |

---

## Project Structure

```
raremark/
├── brand-assets/           # Extracted brand identity assets, logos, and guidelines
│   └── docs/
│       └── brand-reference.md  # Detailed palette, typography, and asset notes
├── public/                 # Static web assets
│   ├── fonts/              # Product Sans TTF font files
│   ├── icons/              # Brand graphic elements and decorative shapes
│   ├── images/             # High-resolution program and editorial photography
│   ├── logos/              # Raremark logos and app marks
│   └── partner-logos/      # Partner organization emblems
├── src/
│   ├── app/                # Next.js App Router routes & pages
│   │   ├── about-us/       # About Us page (origins, mission, leadership)
│   │   ├── connect/        # Contact desk & partner enquiry form
│   │   ├── donate/         # Support Us & donation tier page
│   │   ├── latest-news/    # Press releases, updates & quarterly impact
│   │   ├── podcast/        # Sick Conversations episode archive
│   │   ├── programs/
│   │   │   └── heal/       # HEAL program 6-stage roadmap
│   │   ├── globals.css     # Tailwind v4 @theme tokens & base styles
│   │   ├── layout.tsx      # Root layout (fonts, metadata, shell)
│   │   └── page.tsx        # Homepage (hero, impact stats, spotlight)
│   ├── components/         # Reusable global UI components
│   │   ├── Footer.tsx      # Multi-column footer with quick links & newsletter
│   │   ├── Navbar.tsx      # Responsive header with navigation & CTA
│   │   └── TopBanner.tsx   # Announcement banner
│   └── fonts/              # Local font loader references
├── next.config.ts          # Next.js runtime configuration
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md
```

---

## Pages & Routes

| Route | File Path | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | **Home**: Hero banner, partner trust strip, impact metrics, podcast spotlight, and call to action. |
| `/about-us` | `src/app/about-us/page.tsx` | **About Us**: Mission, founding story honoring Josephine Esisa Madewo, leadership team, and Board of Directors. |
| `/programs/heal` | `src/app/programs/heal/page.tsx` | **HEAL Program**: 6-step roadmap for Health Education & Aid for Life. |
| `/latest-news` | `src/app/latest-news/page.tsx` | **Latest News**: Featured story, secondary news cards, and quarterly metrics. |
| `/podcast` | `src/app/podcast/page.tsx` | **Sick Conversations Podcast**: Episode directory, player links, and warrior audio features. |
| `/donate` | `src/app/donate/page.tsx` | **Support Us**: Donation tiers ($25, $100, $500) and medical assistance funding details. |
| `/connect` | `src/app/connect/page.tsx` | **Connect**: Contact details, headquarters in Kampala, Uganda, and message desk. |

---

## Brand & Design System

The app utilizes custom design tokens configured in `src/app/globals.css`. Always use these tokens for visual consistency:

### Color Palette

- **Brand Red (Primary)**: `#E50A19` (`text-brand-red`, `bg-brand-red`)
- **Brand Crimson**: `#DC143C` (`text-brand-crimson`, `bg-brand-crimson`)
- **Brand Red Dark**: `#B1002C` (`text-brand-red-dark`, `bg-brand-red-dark`)
- **Brand Navy**: `#07263A` (`text-brand-navy`, `bg-brand-navy`)
- **Brand Navy Dark**: `#161A32` (`text-brand-navy-dark`, `bg-brand-navy-dark`)
- **Dark Neutral**: `#1A1C1C` / `#1E1E1E`
- **Light Warm Background**: `#FFF8F6` (`bg-brand-light-bg`)
- **Card Background**: `#F8F9FA` (`bg-brand-card-bg`)
- **Border**: `#EAEAEA` (`border-brand-border`)

### Typography

- **Primary Sans-Serif**: `Product Sans` (`font-sans`, default body font).
- **Display Serif Accent**: `Playfair Display` (`font-serif`, editorial headings).

For in-depth background on logos, photography usage, and asset source notes, refer to [`brand-assets/docs/brand-reference.md`](brand-assets/docs/brand-reference.md).

---

## Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher (LTS recommended)
- **pnpm**: `v9.x` or `v11.x` (`packageManager` is set to `pnpm@11.21.0`)

If you do not have `pnpm` installed:
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Installation & Local Dev

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CalvinMagezi/raremark.git
   cd raremark
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Action |
|---|---|
| `pnpm dev` | Starts local development server with Turbopack |
| `pnpm build` | Compiles an optimized production build |
| `pnpm start` | Serves the production build locally |
| `pnpm lint` | Runs ESLint to detect syntax or style issues |

---

## Contributing

We welcome contributions from developers, designers, and advocates passionate about sickle cell health awareness and accessible web technologies!

### Branching & Workflow

1. **Fork or create a branch** from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
2. **Commit your changes**:
   Write clear, semantic commit messages (e.g., `feat: add audio player to podcast page`, `fix: correct mobile menu toggle`).
3. **Verify locally**:
   Ensure both the linter and build pass cleanly before pushing:
   ```bash
   pnpm lint
   pnpm build
   ```
4. **Submit a Pull Request**:
   Open a PR against the `main` branch with:
   - A clear summary of the change and motivation.
   - Screenshots or GIFs for any UI changes.
   - References to any relevant issue numbers.

### Coding Standards

- **TypeScript**: Write strictly-typed code without using `any`.
- **Tailwind CSS v4**: Use the defined brand color utilities (`brand-red`, `brand-navy`, etc.) rather than arbitrary hex values whenever possible.
- **Accessibility (a11y)**: Ensure interactive elements have accessible names, proper contrast, and keyboard navigability.
- **Image Optimization**: Place images in `public/` and use `next/image` with explicit width/height or `fill` with `sizes`.

### Pull Request Checklist

- [ ] Code compiles without errors via `pnpm build`
- [ ] No ESLint errors or warnings via `pnpm lint`
- [ ] Responsive across mobile, tablet, and desktop viewports
- [ ] Accessible semantic markup
- [ ] Visual verification of UI against Figma specs

### Contribution Ideas & Roadmap

Looking for ways to help? Here are active areas open for contribution:
- **Dedicated Program Pages**: Build out standalone pages for the *Hope for Warriors Fund* and *Know Your Type* programs.
- **Dynamic Content**: Wire up podcast RSS feed or CMS integration for news articles.
- **Interactive Forms**: Add server-side handling and validation for the `/connect` contact form.
- **Donation Gateway**: Integrate payment options (e.g., Stripe, Mobile Money, PayPal) into `/donate`.
- **SEO & Social Sharing**: Expand OpenGraph metadata, sitemaps, and structured JSON-LD schemas.

---

## License & Acknowledgments

- **Organization**: [Raremark Foundation](https://raremarkfoundation.org) (Kampala, Uganda).
- Built in honor and memory of **Josephine Esisa Madewo** and all sickle cell warriors.
- Maintained by [Calvin Magezi](https://github.com/CalvinMagezi) and community contributors.
