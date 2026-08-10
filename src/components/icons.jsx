// Original hand-built SVG icon set for BAB Training — bold, stroke-based,
// designed to match the retro badge look of the BAB logo.

export function IconBasketball({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 4v40M4 24h40" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8.5 10.5c5 5 7.5 8.5 7.5 13.5s-2.5 8.5-7.5 13.5M39.5 10.5c-5 5-7.5 8.5-7.5 13.5s2.5 8.5 7.5 13.5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

export function IconHoop({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <path d="M4 10h40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="24" cy="10" rx="16" ry="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M9 11l3 22M39 11l-3 22M17 11.5l1.5 20M31 11.5l-1.5 20M24 12v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 11l8 11M39 11l-8 11M14 15l10 8M34 15l-10 8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconWhistle({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <path d="M18 20a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 20h16l6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 14h8v6h-8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="18" cy="30" r="3" fill="currentColor" />
      <path d="M12 24l-3-2M12 36l-3 2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function IconStopwatch({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <circle cx="24" cy="26" r="16" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 26l6-7M24 16v4M18 6h12M24 6v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconStar({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <path
        d="M24 3l4.2 12.3L41 16l-9.8 8.4L34.5 37 24 29.8 13.5 37l3.3-12.6L7 16l12.8-0.7z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function IconSwish({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 24" fill="none" className={className} style={style}>
      <path d="M2 20C10 6 20 2 30 2M6 20C13 9 21 5 30 5M10 20C16 12 22 9 30 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="40" cy="4" r="3.4" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  )
}

export function IconPlay({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.5" />
      <path d="M19 15l16 9-16 9V15z" fill="currentColor" />
    </svg>
  )
}

export function IconCamera({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <rect x="4" y="12" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 12l4-6h8l4 6" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="24" cy="27" r="8" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="37" cy="18" r="1.8" fill="currentColor" />
    </svg>
  )
}

export function IconChevronRow({ className = '', style = {}, color = 'currentColor', count = 14 }) {
  return (
    <svg width="100%" height="16" viewBox={`0 0 ${count * 20} 16`} preserveAspectRatio="none" className={className} style={style}>
      {Array.from({ length: count }).map((_, i) => (
        <path key={i} d={`M${i * 20} 0l10 8-10 8`} stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  )
}

export function IconTrophy({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <path d="M14 8h20v12a10 10 0 0 1-20 0V8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M14 10H7a2 2 0 0 0-2 2c0 6 4 9 9 9.5M34 10h7a2 2 0 0 1 2 2c0 6-4 9-9 9.5" stroke="currentColor" strokeWidth="2.3" />
      <path d="M24 30v6M17 42h14M18 36h12v3a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-3z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
    </svg>
  )
}

export function IconBurst({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x2 = 24 + Math.cos(angle) * 20
        const y2 = 24 + Math.sin(angle) * 20
        const x1 = 24 + Math.cos(angle) * 12
        const y1 = 24 + Math.sin(angle) * 12
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      })}
    </svg>
  )
}

export function IconClipboard({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <rect x="9" y="7" width="30" height="37" rx="2.5" stroke="currentColor" strokeWidth="2.5" />
      <rect x="17" y="4" width="14" height="7" rx="2" stroke="currentColor" strokeWidth="2.5" fill="var(--cream-2, #EDE8D5)" />
      <path d="M15 20h18M15 27h18M15 34h12" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconUsers({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <circle cx="17" cy="16" r="6.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="33" cy="18" r="5" stroke="currentColor" strokeWidth="2.3" />
      <path d="M5 40c0-8.5 5.4-14 12-14s12 5.5 12 14M28 40c0-6.5 3.6-11.5 9-13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function IconHome({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <path d="M5 23L24 7l19 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v21h28V19" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 40V27h8v13" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="24" cy="21" r="3.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function IconCalendar({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <rect x="6" y="10" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 19h36M14 5v9M34 5v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 27l6 6 14-14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
