# Logi Landing Page

A responsive landing page for [Logi](https://github.com/OMTut/Logi), the real-time PvP/PvE kill tracker overlay for Star Citizen.

## Features

- **Github API Integration** - Automatically fetches the latest Logi release version from the GitHub API
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern Tech Stack** - Built with Next.js 15, React 19, and TypeScript

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page component
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── globals.css       # Global styles with theming
├── hooks/
│   └── useLatestRelease.ts  # Custom hook for GitHub release data
└── lib/
    └── github-api.ts     # GitHub API utilities
```

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: CSS Modules + Global CSS
- **Build Tool**: Turbopack
- **Fonts**: Geist Sans & Geist Mono

## Development

The page automatically fetches the latest Logi release information from the GitHub API to keep download links current.
