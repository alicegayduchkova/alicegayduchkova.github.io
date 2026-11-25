import type { ReactNode } from 'react'

// Original cut-paper objects. Each is a 120x120 SVG; the paper edge is a wide light stroke.
const P = '#EDE7E4' // paper edge
const INK = '#0F1412'
const edge = { stroke: P, strokeWidth: 6, strokeLinejoin: 'round' as const, paintOrder: 'stroke' as const }
const line = { stroke: INK, strokeWidth: 2, strokeLinecap: 'round' as const, fill: 'none' }

export type Obj = { id: string; caption: string; depth: number; x: number; y: number; rot: number; size: number; mobile?: boolean; art: ReactNode }

export const objects: Obj[] = [
  { id: 'swim', caption: 'Division II swimming, 2024–2025', depth: 0.9, x: 9, y: 16, rot: -12, size: 1.15, mobile: true, art: (<>
    <path d="M14 82C12 28 108 28 106 82Z" fill="#E7B8AE" {...edge} />
    <path d="M30 60C50 44 74 44 92 60" {...line} /><path d="M24 72C50 52 80 52 98 72" {...line} />
    <circle cx="86" cy="94" r="12" fill="#8FBFA9" {...edge} /><circle cx="86" cy="94" r="6" fill={INK} />
  </>) },
  { id: 'thread', caption: 'I sew', depth: 0.6, x: 24, y: 72, rot: 8, size: 0.9, art: (<>
    <rect x="30" y="20" width="60" height="80" rx="6" fill="#8FBFA9" {...edge} />
    <rect x="22" y="14" width="76" height="14" rx="5" fill="#EDE7E4" {...edge} /><rect x="22" y="94" width="76" height="14" rx="5" fill="#EDE7E4" {...edge} />
    <path d="M34 40H86M34 54H86M34 68H86M34 82H86" {...line} />
  </>) },
  { id: 'scissors', caption: 'Also sewing', depth: 0.75, x: 33, y: 80, rot: -28, size: 1, art: (<>
    <path d="M60 64 30 14M60 64 90 14" stroke={P} strokeWidth="14" strokeLinecap="round" />
    <path d="M60 64 30 14M60 64 90 14" stroke="#B9B3B0" strokeWidth="6" strokeLinecap="round" />
    <circle cx="42" cy="92" r="14" fill="none" stroke={P} strokeWidth="12" /><circle cx="42" cy="92" r="14" fill="none" stroke="#E7B8AE" strokeWidth="6" />
    <circle cx="78" cy="92" r="14" fill="none" stroke={P} strokeWidth="12" /><circle cx="78" cy="92" r="14" fill="none" stroke="#E7B8AE" strokeWidth="6" />
  </>) },
  { id: 'dumbbell', caption: 'Working out', depth: 0.5, x: 6, y: 50, rot: 22, size: 1.1, mobile: true, art: (<>
    <rect x="36" y="52" width="48" height="16" fill="#B9B3B0" {...edge} />
    <rect x="16" y="34" width="20" height="52" rx="5" fill={INK} {...edge} /><rect x="84" y="34" width="20" height="52" rx="5" fill={INK} {...edge} />
    <rect x="6" y="42" width="10" height="36" rx="4" fill="#8FBFA9" {...edge} /><rect x="104" y="42" width="10" height="36" rx="4" fill="#8FBFA9" {...edge} />
  </>) },
  { id: 'ticket', caption: 'Jira and Ivanti tickets', depth: 0.7, x: 30, y: 10, rot: 9, size: 1, mobile: true, art: (<>
    <path d="M18 18H102V78L90 100H18Z" fill="#F2D77E" {...edge} />
    <path d="M30 38H88M30 52H80M30 66H70" {...line} /><rect x="30" y="76" width="16" height="10" fill="none" stroke={INK} strokeWidth="2" />
  </>) },
  { id: 'solar', caption: 'Sunrun, 2024', depth: 1, x: 68, y: 9, rot: 10, size: 1.2, mobile: true, art: (<>
    <path d="M22 98 34 22H98L86 98Z" fill="#2F4A63" {...edge} />
    <path d="M28 60H92M63 22 55 98M44 22 38 98M82 22 72 98" stroke="#8FB3D1" strokeWidth="2" />
  </>) },
  { id: 'laser', caption: 'IPG Photonics', depth: 0.8, x: 88, y: 34, rot: -8, size: 1, art: (<>
    <rect x="14" y="40" width="56" height="40" rx="5" fill="#C9CFCC" {...edge} />
    <rect x="70" y="52" width="14" height="16" fill={INK} {...edge} />
    <path d="M84 60H112" stroke="#E7B8AE" strokeWidth="5" strokeLinecap="round" /><path d="M84 60H112" stroke="#fff" strokeWidth="1.5" />
    <path d="M24 52H58M24 62H58M24 72H58" {...line} />
  </>) },
  { id: 'ticker', caption: 'Bloomberg Market Concepts', depth: 0.65, x: 90, y: 68, rot: 7, size: 1.1, mobile: true, art: (<>
    <rect x="12" y="22" width="96" height="70" rx="4" fill={INK} {...edge} />
    <path d="M20 78 38 56 52 66 70 40 84 50 100 30" stroke="#8FBFA9" strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M20 84H100" stroke="#E7B8AE" strokeWidth="2" />
  </>) },
  { id: 'calc', caption: 'Six months of ERIE returns', depth: 0.85, x: 70, y: 82, rot: -10, size: 1, art: (<>
    <rect x="26" y="12" width="68" height="96" rx="7" fill="#E7B8AE" {...edge} />
    <rect x="34" y="20" width="52" height="20" rx="2" fill={INK} />
    {[0,1,2].flatMap(r => [0,1,2].map(c => <rect key={r*3+c} x={34+c*18} y={50+r*18} width="14" height="12" rx="2" fill={INK} />))}
  </>) },
  { id: 'notebook', caption: 'Class notes', depth: 0.55, x: 12, y: 84, rot: -6, size: 1.05, mobile: true, art: (<>
    <rect x="22" y="12" width="76" height="98" rx="4" fill="#8FBFA9" {...edge} />
    <rect x="22" y="12" width="12" height="98" fill="#6FA38B" />
    <path d="M44 36H88M44 50H88M44 64H80" {...line} />
  </>) },
  { id: 'pin', caption: 'Four places I’ve called home', depth: 0.95, x: 50, y: 5, rot: 6, size: 0.85, mobile: true, art: (<>
    <path d="M60 106C34 74 28 62 28 46a32 32 0 0 1 64 0c0 16-6 28-32 60Z" fill="#E7B8AE" {...edge} />
    <circle cx="60" cy="46" r="12" fill={INK} />
  </>) },
]
