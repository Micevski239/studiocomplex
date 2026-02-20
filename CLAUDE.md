# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

This is a **Next.js 14 App Router** portfolio site for GoDevLab with **internationalization (i18n)** and a **dark-only theme**.

### Routing & i18n

The site uses `next-intl` for bilingual support (Macedonian `mk` / English `en`). Macedonian is the **default locale** (served at `/`, no prefix); English is served at `/en`.

- `i18n/config.ts` — locale list and default locale
- `i18n/routing.ts` — `next-intl` routing config with `localePrefix: 'as-needed'`
- `i18n/request.ts` — server-side message loading from `messages/{locale}.json`
- `middleware.ts` — intercepts all non-asset requests for locale routing
- `app/[locale]/layout.tsx` — wraps content in `NextIntlClientProvider`
- `app/layout.tsx` — root layout (sets `lang="mk"`, wraps in `ThemeProvider`)

All UI strings live in `messages/en.json` and `messages/mk.json`. Use `useTranslations()` in client components and `getTranslations()` in server components.

### Page Structure

The homepage (`app/[locale]/page.tsx`) is a single scrollable page with section IDs for anchor navigation: `#about`, `#portfolio`, `#testimonials`, `#services`, `#process`, `#why-us`, `#awards`, `#faq`, `#contact`.

The projects detail route is at `app/[locale]/projects/[slug]/page.tsx`.

### Data Layer

`data/projects.ts` is the single source of truth for portfolio projects. It exports typed helper functions:
- `getAllProjects(locale?)` / `getFeaturedProjects(locale?)` / `getProjectBySlug(slug, locale?)`
- Locale-aware: passing `'mk'` applies translations from the project's `translations.mk` field

The `Project` type is defined in `types/project.ts`.

### Styling

- **Tailwind CSS** with a custom design system — dark mode uses the `dark:` prefix toggled via the `dark` class on `<html>`.
- The site is **dark-only**: `ThemeContext` always sets `theme: 'dark'` and `ThemeProvider` adds the `dark` class on mount.
- Custom Tailwind tokens (defined in `tailwind.config.ts`):
  - Light bg: `bg-space`, `bg-space-light`, `bg-space-surface`
  - Dark bg: `dark:bg-dark-space`, `dark:bg-dark-space-light`, `dark:bg-dark-space-surface`
  - Accent: `accent-blue` (`#3B82F6`), `accent-cyan` (`#06B6D4`)
  - Text: `text-text-primary` / `dark:text-dark-text-primary`
  - Font mono: `font-mono` → JetBrains Mono

### Animations

Framer Motion is used throughout. Shared animation variants live in `components/animations/` (`AnimatedCounter`, `TiltCard`). Many sections use scroll-triggered `motion.div` with `viewport={{ once: true }}`.

### Key Components

- `Header.tsx` / `MobileNav.tsx` — desktop sticky nav and mobile bottom nav bar
- `LanguageSwitcher.tsx` — switches locale using `next-intl` navigation
- `Portfolio.tsx` + `ProjectCard.tsx` — project grid on the homepage
- `TrustedBy.tsx` — auto-scrolling logo marquee (uses Tailwind `animate-marquee` keyframe)
- `ParallaxProviderWrapper.tsx` — wraps `react-scroll-parallax` provider for client use

### Path Aliases

`@/` maps to the project root (configured in `tsconfig.json`).
