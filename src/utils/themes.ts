// Type definitions
export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;   // Main accent (text, icons) - e.g. 400
    secondary: string; // Gradient middle - e.g. 200
    dim: string;       // Border/Decoration - e.g. 500/30 or 500
    glow: string;      // Shadow glow color
  };
  blobs: number[];     // 4 hex colors for Three.js
}

export const themes: Record<string, Theme> = {
  yellow: {
    id: 'yellow',
    name: 'Gold',
    colors: {
      primary: '#facc15', // yellow-400
      secondary: '#fef08a', // yellow-200
      dim: '#eab308',     // yellow-500
      glow: 'rgba(250, 204, 21, 0.8)',
    },
    blobs: [0xeab308, 0xa16207, 0xfacc15, 0x713f12],
  },
  green: {
    id: 'green',
    name: 'Emerald',
    colors: {
      primary: '#4ade80', // green-400
      secondary: '#bbf7d0', // green-200
      dim: '#22c55e',     // green-500
      glow: 'rgba(74, 222, 128, 0.8)',
    },
    blobs: [0x22c55e, 0x15803d, 0x4ade80, 0x14532d],
  },
  purple: {
    id: 'purple',
    name: 'Amethyst',
    colors: {
      primary: '#c084fc', // purple-400
      secondary: '#e9d5ff', // purple-200
      dim: '#a855f7',     // purple-500
      glow: 'rgba(192, 132, 252, 0.8)',
    },
    blobs: [0xa855f7, 0x7e22ce, 0xc084fc, 0x581c87],
  },
  blue: {
    id: 'blue',
    name: 'Sapphire',
    colors: {
      primary: '#60a5fa', // blue-400
      secondary: '#bfdbfe', // blue-200
      dim: '#3b82f6',     // blue-500
      glow: 'rgba(96, 165, 250, 0.8)',
    },
    blobs: [0x3b82f6, 0x1d4ed8, 0x60a5fa, 0x1e3a8a],
  },
  pink: {
    id: 'pink',
    name: 'Rose',
    colors: {
      primary: '#f472b6', // pink-400
      secondary: '#fbcfe8', // pink-200
      dim: '#ec4899',     // pink-500
      glow: 'rgba(244, 114, 182, 0.8)',
    },
    blobs: [0xec4899, 0xbe185d, 0xf472b6, 0x831843],
  },
  red: {
    id: 'red',
    name: 'Ruby',
    colors: {
      primary: '#f87171', // red-400
      secondary: '#fecaca', // red-200
      dim: '#ef4444',     // red-500
      glow: 'rgba(248, 113, 113, 0.8)',
    },
    blobs: [0xef4444, 0xb91c1c, 0xf87171, 0x7f1d1d],
  },
  white: {
    id: 'white',
    name: 'Ghost',
    colors: {
      primary: '#ffffff', // white
      secondary: '#e2e8f0', // slate-200
      dim: '#94a3b8',     // slate-400
      glow: 'rgba(255, 255, 255, 0.8)',
    },
    blobs: [0xffffff, 0xcbd5e1, 0xe2e8f0, 0x64748b],
  },
  cyan: {
    id: 'cyan',
    name: 'Cyan',
    colors: {
      primary: '#22d3ee', // cyan-400
      secondary: '#a5f3fc', // cyan-200
      dim: '#06b6d4',     // cyan-500
      glow: 'rgba(34, 211, 238, 0.8)',
    },
    blobs: [0x06b6d4, 0x0e7490, 0x22d3ee, 0x155e75],
  },
};
