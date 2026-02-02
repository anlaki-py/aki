# Aki - Personal Portfolio

## Project Overview
This project is a personal portfolio website for "aki" (anlaki.dev), built with a modern React stack. It showcases projects and provides a brief introduction to the developer. The application is designed to be lightweight, fast, and visually clean, utilizing Tailwind CSS for styling.

## Technology Stack
- **Framework:** React 19
- **Build Tool:** Vite 7
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4
- **Analytics:** Vercel Web Analytics
- **Linting:** ESLint 9

## Key Files and Directories
- **`src/App.tsx`**: The main application component, defining the layout, background effects, and entrance animations.
- **`src/components/`**: Contains reusable UI components like `Projects.tsx` and `Footer.tsx`.
- **`src/main.tsx`**: The application entry point.
- **`public/`**: Contains static assets like `favicon.jpg`, `robots.txt`, and `sitemap.xml`.
- **`docs/EXECUTION_PROTOCOL.md`**: Contains strict operational protocols for AI assistance.
- **`README.md`**: General project documentation and setup guide.

## Recent Updates

### Background & UI Enhancement (February 2026)
- **Ambient Background:** Implemented a large, static, blurred indigo disk centered in the background to provide a modern "glow" effect on a pure black background.
- **Entrance Animations:** Added a custom staggered entrance. The header and projects use a "blur-in" reveal, while the footer uses a simple fade-in.
- **Link Styling:** Enhanced project links with subtle underlines and interactive hover states for better visual affordance.
- **Viewport Optimization:** Updated the root container to use `min-h-dvh` instead of `min-h-screen`, fixing "phantom" scrollbars caused by mobile browser address bars.

### Analytics and SEO (February 2026)
- **Vercel Analytics:** Integrated `@vercel/analytics` for privacy-friendly web insights.
- **Static Assets:** Moved `robots.txt` and `sitemap.xml` to the `public/` directory to ensure they are correctly served from the site root.

### Documentation (February 2026)
- **README:** Created a simple `README.md`

## Development Conventions

### Operational Protocol
This project includes a specific **EXECUTION_PROTOCOL** (located in `docs/EXECUTION_PROTOCOL.md`) that outlines strict rules for modifying code. Key tenets include:
1.  **Scope Isolation:** Do not modify anything outside the direct scope of the user's request.
2.  **Request Fidelity:** Interpret requests literally; do not assume or "improve" without asking.
3.  **Forecast & Plan:** A detailed plan and forecast of changes are required before execution.

### Code Style
- **Styling:** Use Tailwind CSS utility classes directly in JSX.
- **TypeScript:** Ensure type safety. The project uses strict mode (`tsc -b`).
- **Animations:** Custom animations are defined in `src/index.css` using CSS keyframes and applied via utility classes.