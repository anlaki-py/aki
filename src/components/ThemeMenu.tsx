import { useEffect, useRef, useState } from "react";
import { themes } from "../utils/themes";
import type { Theme } from "../utils/themes";

interface ThemeMenuProps {
  currentThemeId: string;
  onSelect: (theme: Theme) => void;
  onClose: () => void;
}

const ThemeMenu = ({ currentThemeId, onSelect, onClose }: ThemeMenuProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate tilt based on mouse position relative to window center
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setTilt({ x: x * 15, y: -y * 15 }); // Max 15 degree tilt
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null) {
        // Map gyroscope data to tilt
        // beta: -180 to 180 (front/back), gamma: -90 to 90 (left/right)
        const x = (e.gamma / 45);
        const y = ((e.beta - 45) / 45);
        setTilt({ x: x * 20, y: -y * 20 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleOrientation);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      onClick={onClose}
    >
      <div 
        ref={menuRef}
        className="glass-panel p-6 rounded-2xl flex flex-wrap gap-4 max-w-[280px] justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto transition-transform duration-200 ease-out border-white/10"
        style={{ 
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          backgroundColor: 'rgba(15, 15, 15, 0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={onClose}
      >
        <div className="w-full text-center mb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Select Palette</span>
        </div>
        
        {Object.values(themes).map((theme) => (
          <button
            key={theme.id}
            onClick={() => {
              onSelect(theme);
              onClose();
            }}
            className={`group relative w-10 h-10 rounded-full transition-all duration-300 hover:scale-125 active:scale-95 ${
              currentThemeId === theme.id ? 'ring-2 ring-white ring-offset-4 ring-offset-[#050505]' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ backgroundColor: theme.colors.primary }}
            title={theme.name}
            aria-label={`Select ${theme.name} theme`}
          >
            {/* Hover tooltip or highlight effect */}
            <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: theme.colors.primary }}></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeMenu;