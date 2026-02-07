import { useEffect, useState } from "react";
import type { Project } from "./types";

const projects: Project[] = [
  { name: "rōkaru", href: "https://rokaru.anlaki.dev" },
  { name: "mdshare", href: "https://mdshare.anlaki.dev/" },
];

const Projects = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse movement handler for desktop
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate percentage from center of screen (-1 to 1)
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      // Vertical movement should rotate around X axis, horizontal around Y axis
      setTilt({ x: x * 10, y: -y * 10 });
    };

    // Gyroscope handler for mobile
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null) {
        // beta: front-to-back tilt (typically 0-90 when held)
        // gamma: left-to-right tilt
        
        // Normalize: assume 45deg beta is "neutral" (holding phone normally)
        const beta = e.beta - 45;
        const gamma = e.gamma;

        // Apply scaling for a noticeable but controlled effect
        // Limit to ~15 degrees max
        const tiltX = Math.max(-15, Math.min(15, gamma / 2));
        const tiltY = Math.max(-15, Math.min(15, -beta / 2));

        setTilt({ x: tiltX, y: tiltY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Some mobile browsers require permission for DeviceOrientation
    // This listener only works if the site is served over HTTPS
    window.addEventListener('deviceorientation', handleOrientation, true);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <main 
      className="w-full glass-panel rounded-xl p-6 transition-transform duration-200 ease-out relative z-20 hover:border-[var(--accent-dim)]"
      style={{ 
        borderWidth: '1px',
        // perspective(1000px) is crucial for the 3D effect
        // rotateX uses Y-axis tilt, rotateY uses X-axis tilt
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
      }}
    >
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Projects</h3>
      <div className="flex flex-col gap-3 items-start">
        {projects.map((project) => (
          <a key={project.name} href={project.href} className="group flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-all duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[var(--accent-primary)] group-hover:shadow-[0_0_8px_var(--accent-glow)] transition-all"></span>
            <span className="underline decoration-slate-700 underline-offset-4 decoration-1 group-hover:decoration-[var(--accent-dim)]">
              {project.name}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Projects;