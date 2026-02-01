# Aki - Personal Portfolio

## Project Overview
This project is a personal portfolio website for "aki", built with a modern React stack. It showcases projects and provides a brief introduction to the developer. The application is designed to be lightweight, fast, and visually clean, utilizing Tailwind CSS for styling.

## Technology Stack
- **Framework:** React 19
- **Build Tool:** Vite 7
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 9

## Key Files and Directories
- **`src/App.tsx`**: The main application component, defining the layout and structure.
- **`src/components/`**: Contains reusable UI components like `Projects.tsx` and `Footer.tsx`.
- **`src/main.tsx`**: The application entry point.
- **`docs/EXECUTION_PROTOCOL.md`**: Contains strict operational protocols for AI assistance, emphasizing scope isolation and request fidelity.
- **`vite.config.ts`**: Configuration for the Vite build tool.

## Building and Running
The following scripts are available in `package.json`:

- **Start Development Server:**
  ```bash
  npm run dev
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
  *Note: This runs `tsc -b` (TypeScript build) before `vite build`.*
- **Lint Code:**
  ```bash
  npm run lint
  ```
- **Preview Production Build:**
  ```bash
  npm run preview
  ```

## Recent Updates

### Favicon and SEO Assets (February 2026)
- **Asset Migration:** Replaced the default `favicon.svg` with `favicon.jpg` in `public/`.
- **Metadata Update:** Synchronized `index.html` to reference the new JPEG favicon.
- **SEO Optimization:** Updated Open Graph (`og:image`) and Twitter Card (`twitter:image`) meta tags to point to `favicon.jpg` to ensure consistent branding across social platforms.
- **Security Audit:** Performed a codebase scan for secrets and sensitive information; confirmed the repository is safe for public/open-source status on GitHub.

## Development Conventions

### Operational Protocol
This project includes a specific **EXECUTION_PROTOCOL** (located in `docs/EXECUTION_PROTOCOL.md`) that outlines strict rules for modifying code. Key tenets include:
1.  **Scope Isolation:** Do not modify anything outside the direct scope of the user's request.
2.  **Request Fidelity:** Interpret requests literally; do not assume or "improve" without asking.
3.  **Forecast & Plan:** A detailed plan and forecast of changes are required before execution.

### Code Style
- **Styling:** Use Tailwind CSS utility classes directly in JSX.
- **TypeScript:** Ensure type safety. The project uses strict mode (`tsc -b`).
- **Components:** Functional components with named exports or default exports (as seen in `App.tsx`).
