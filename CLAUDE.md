# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (outputs to `build/` directory)
- `npm run format` - Format code with Biome
- `npm run lint` - Lint code with Biome
- `npm run check` - Run both linting and formatting checks with Biome

## Architecture

This is a Next.js 15 personal portfolio/blog site that uses:

- **Static Export**: Configured with `output: 'export'` for deployment to GitHub Pages
- **TypeScript**: Strict mode enabled with path aliases (`~/*` maps to `./src/*`)
- **Biome**: Used for both linting and formatting (replaces ESLint/Prettier)
- **Theme System**: Client-side theme switching with localStorage persistence via `useThemeState` hook

### Key Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components organized by feature
- `src/hooks/` - Custom React hooks
- `public/` - Static assets (deploys to GitHub Pages)
- `build/` - Production build output directory

### Component Architecture

Components follow a modular structure with CSS modules:

- Each component has its own directory with `index.tsx` and `index.module.css`
- Theme switching is handled by `ThemeController` component that applies `data-theme` attribute
- CSS custom properties are used for theming

### Deployment

The site deploys automatically to GitHub Pages when changes are merged to the main branch via GitHub Actions.
