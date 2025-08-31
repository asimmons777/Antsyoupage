# YouPage (Vite + React + TypeScript)

## Overview
A simple personal "YouPage" built with React 18, TypeScript, and Vite. Fast dev server, instant HMR, minimal config.

## Structure
```
youpage-app
├── index.html              # Vite entry HTML (must stay at project root)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── images/Anthony Simmons Headshot.png
└── src/
   ├── App.tsx             # Root component
   ├── index.tsx           # React entry (createRoot)
   ├── pages/
   │   ├── YouPage.tsx     # Main page content
   │   └── YouPage.css     # Styles for YouPage
   └── types/              # (Optional) shared TS interfaces
```

## Prerequisites
- Node 18+ recommended

## Install
```
npm install
```

## Develop
```
npm run dev
```
Opens (default) http://localhost:5173

## Type Check Only
```
npm run type-check
```

## Build (production bundle)
```
npm run build
```
Output: `dist/`

## Preview Production Build
```
npm run preview
```

## Static Assets
Files in `public` are served at the site root. Example image reference in code:
```tsx
<img src="/images/Anthony%20Simmons%20Headshot.png" />
```

## Next Ideas
- Extract a NavBar component
- Add routing (react-router-dom) for ABOUT / PROJECTS / etc.
- Upgrade TypeScript to latest 5.x
- Add ESLint + Prettier config (removed CRA-specific lint setup)

## License
MIT