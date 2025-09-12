# YouPage (Vite + React + TypeScript)

Personal "YouPage" to showcase who I am and what I do. It includes an About Me page, Projects, Experience, a Resume page (print/download), a faith-focused Christ page, and a CodeHaven page for my venture.

## Pages and Routes

- About Me — `/about`
   - Bio, background, and context.
- Projects — `/projects`
   - Featured and in‑progress projects; lightweight cards and background imagery.
- Experience — `/experience` (planned)
   - Work history, roles, and achievements.
- Resume — `/resume` (planned)
   - Print-friendly page and a direct download link to a PDF.
- Christ — `/christ` (planned)
   - Faith statement and related content.
- CodeHaven — `/codehaven` (planned)
   - Overview of the venture, goals, and links.
- Home — `/`
   - Landing/YouPage hub.

Routing uses `react-router-dom` v6. See `src/App.tsx` for the current route table.

## Tech Stack

- Vite + React 18 + TypeScript
- React Router v6
- Plain CSS (page styles in `src/pages/landingpage.css`)

## Project Structure

```
youpage-app/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ public/
│  └─ images/
│     ├─ Anthony Simmons Headshot.png
│     ├─ Batman.jpg
│     ├─ ironman.jpg
│     └─ ...
└─ src/
    ├─ App.tsx
    ├─ index.tsx
    ├─ components/
    │  ├─ NavBar.tsx
    │  └─ Footer.tsx
    ├─ pages/
    │  ├─ AboutMe.tsx
    │  ├─ Projects.tsx
    │  ├─ YouPage.tsx
    │  └─ landingpage.css
    └─ types/
         └─ index.ts
```

## How to Run

Prerequisites:
- Node.js 18+ recommended

Install dependencies:

```powershell
npm install
```

Start the dev server (HMR):

```powershell
npm run dev
```

Open the URL printed in the terminal (typically http://localhost:5173).

Type-check only:

```powershell
npm run type-check
```

Build for production:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Static Assets (Images, PDFs)

Files placed under `public/` are served from the site root. Reference them with root‑relative URLs:

```tsx
// Example image
<img src="/images/Anthony%20Simmons%20Headshot.png" alt="Anthony Simmons" />

// Example CSS background
/* background-image: url('/images/ironman.jpg'); */
```

For the Resume page (planned):

- Place your PDF at `public/resume/Anthony_Simmons_Resume.pdf`.
- Link to it anywhere: `<a href="/resume/Anthony_Simmons_Resume.pdf" download>Download Resume</a>`.
- For printing, use a print‑friendly route (e.g., `/resume`) with a print stylesheet or a button that calls `window.print()`.

## Roadmap / TODO

- [x] NavBar with router Links for About and Projects
- [x] Projects page scaffold and content
- [ ] Experience page and route
- [ ] Resume page with print styles and PDF download
- [ ] Christ page content and route
- [ ] CodeHaven page content and route
- [ ] Global layout (NavBar/Footer in `App.tsx`) and active‑link styling
- [ ] Basic accessibility pass (landmarks, focus, contrast)
- [ ] ESLint + Prettier configuration

## License

MIT