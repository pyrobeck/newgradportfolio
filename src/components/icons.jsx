// Small inline icon set (stroke icons, 24x24 grid).
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p) => (
  <svg {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const ArrowUpRight = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowDown = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);
export const Close = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Play = (p) => (
  <svg {...base} {...p}><path d="M7 4.5v15l12-7.5z" fill="currentColor" /></svg>
);
export const Mail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const SoundOn = (p) => (
  <svg {...base} {...p}><path d="M4 9v6h4l5 4V5L8 9z" /><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" /></svg>
);
export const SoundOff = (p) => (
  <svg {...base} {...p}><path d="M4 9v6h4l5 4V5L8 9z" /><path d="m17 10 4 4M21 10l-4 4" /></svg>
);
export const Send = (p) => (
  <svg {...base} {...p}><path d="M21 3 10 14M21 3l-7 18-4-7-7-4z" /></svg>
);

/* A little crooked witch house, used as the 3D poster */
export const WitchHouseIcon = (p) => (
  <svg viewBox="0 0 160 170" fill="none" aria-hidden="true" {...p}>
    <path d="M80 6 30 72h100z" fill="#9b5cff" />
    <path d="M80 6 58 36l44 6z" fill="#ff3ea5" />
    <rect x="40" y="70" width="80" height="86" rx="4" fill="#1b1630" stroke="#f5f2fb" strokeWidth="4" transform="rotate(-3 80 113)" />
    <rect x="64" y="110" width="26" height="44" rx="12" fill="#ffe14a" transform="rotate(-3 77 132)" />
    <rect x="52" y="84" width="18" height="18" rx="3" fill="#22e4ff" />
    <rect x="94" y="82" width="18" height="18" rx="3" fill="#22e4ff" />
    <path d="M104 24v26h12V36z" fill="#1b1630" stroke="#f5f2fb" strokeWidth="4" />
    <circle cx="124" cy="12" r="4" fill="#f5f2fb" opacity=".6" />
    <circle cx="134" cy="4" r="3" fill="#f5f2fb" opacity=".4" />
    <path d="M10 160h140" stroke="#f5f2fb" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
