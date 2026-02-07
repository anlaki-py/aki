import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackgroundFluid from "./components/BackgroundFluid";
import { themes } from "./utils/themes";
import type { Theme } from "./utils/themes";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  // Keeping the theme state for CSS variable injection
  // Even if the menu is disabled, the white theme colors are still needed
  const [currentTheme] = useState<Theme>(themes.white);

  // Apply CSS variables whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-primary', currentTheme.colors.primary);
    root.style.setProperty('--accent-secondary', currentTheme.colors.secondary);
    root.style.setProperty('--accent-dim', currentTheme.colors.dim);
    root.style.setProperty('--accent-glow', currentTheme.colors.glow);
  }, [currentTheme]);

  return (
    <div className="min-h-[100dvh] text-slate-200 flex flex-col items-center relative overflow-hidden">
      
      {/* 1. Fluid Background */}
      <BackgroundFluid blobColors={currentTheme.blobs} />

      {/* Theme Menu is currently disabled in source */}

      <div className="max-w-lg w-full p-8 md:p-12 flex-grow flex flex-col justify-center z-20">
        <header className="mb-10 animate-blur-in">
          <div className="inline-block relative select-none">
             <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--accent-secondary)] to-slate-400 tracking-tight transition-all duration-300">
              anlaki
            </h1>
          </div>
          <p className="text-sm text-slate-400 mt-2 font-light">
            tech nerd who <span className="font-normal transition-colors duration-300 text-[var(--accent-primary)]">builds things</span>
          </p>
        </header>

        <div className="animate-blur-in delay-150">
          <Projects />
        </div>
      </div>

      <div className="w-full flex justify-center animate-fade-in delay-300 z-20">
        <Footer />
      </div>
      <Analytics />
    </div>
  );
};

export default App;