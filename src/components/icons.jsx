// Small inline SVG icon set (lucide-style strokes) — crisper than the old PNG icons.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const ArrowUpRight = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base} aria-hidden="true">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export const ArrowRight = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base} aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const Mail = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const MessageCircle = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base} aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const Copy = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base} aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const Check = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Github = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);
