import type { ReactNode } from 'react'

// Original cut-paper objects. Each is a 120x120 SVG; the paper edge is a wide light stroke.
const P = '#EDE7E4' // paper edge
const INK = '#0F1412'
const edge = { stroke: P, strokeWidth: 6, strokeLinejoin: 'round' as const, paintOrder: 'stroke' as const }
const line = { stroke: INK, strokeWidth: 2, strokeLinecap: 'round' as const, fill: 'none' }

export type Obj = { id: string; caption: string; title: string; text: string; depth: number; x: number; y: number; mx: number; my: number; rot: number; size: number; mobile?: boolean; art: ReactNode }

export const objects: Obj[] = [
  { id: 'swim', caption: 'Division II swimming, 2024–2025', title: `Division II swimming`, text: `I spent my first year of college as a Division II swimmer at Assumption University (2024–2025), then transferred to UMass Lowell as a sophomore.`, depth: 0.9, x: 12, y: 28, mx: 25, my: 9, rot: -10, size: 1.15, mobile: true, art: (<>
    <path d="M2 64H15M105 64H118" stroke={P} strokeWidth="15" strokeLinecap="round" />
    <path d="M2 64H15M105 64H118" stroke="#2F4A63" strokeWidth="8" strokeLinecap="round" />
    <rect x="48" y="58" width="24" height="9" rx="4" fill="#E7B8AE" {...edge} />
    <circle cx="31" cy="64" r="23" fill="#E7B8AE" {...edge} /><circle cx="89" cy="64" r="23" fill="#E7B8AE" {...edge} />
    <circle cx="31" cy="64" r="15" fill="#2F4A63" /><circle cx="89" cy="64" r="15" fill="#2F4A63" />
    <path d="M22 58a11 11 0 0 1 8-5M80 58a11 11 0 0 1 8-5" stroke="#8FB3D1" strokeWidth="3" strokeLinecap="round" fill="none" />
  </>) },
  { id: 'thread', caption: 'I sew', title: `Sewing`, text: `Outside of work and class, I love to sew. It sits right next to working out and hanging out with my friends.`, depth: 0.6, x: 30, y: 89, mx: 0, my: 0, rot: 8, size: 0.9, art: (<>
    <rect x="30" y="20" width="60" height="80" rx="6" fill="#8FBFA9" {...edge} />
    <rect x="22" y="14" width="76" height="14" rx="5" fill="#EDE7E4" {...edge} /><rect x="22" y="94" width="76" height="14" rx="5" fill="#EDE7E4" {...edge} />
    <path d="M34 40H86M34 54H86M34 68H86M34 82H86" {...line} />
  </>) },
  { id: 'dumbbell', caption: 'Working out', title: `Working out`, text: `Working out is the other thing I make time for outside of work and class, along with sewing and spending time with friends.`, depth: 0.5, x: 8, y: 52, mx: 14, my: 80, rot: 20, size: 1.1, mobile: true, art: (<>
    <rect x="36" y="52" width="48" height="16" fill="#B9B3B0" {...edge} />
    <rect x="16" y="34" width="20" height="52" rx="5" fill={INK} {...edge} /><rect x="84" y="34" width="20" height="52" rx="5" fill={INK} {...edge} />
    <rect x="6" y="42" width="10" height="36" rx="4" fill="#8FBFA9" {...edge} /><rect x="104" y="42" width="10" height="36" rx="4" fill="#8FBFA9" {...edge} />
  </>) },
  { id: 'ticket', caption: 'Jira and Ivanti tickets', title: `Ticketing systems`, text: `At IPG Photonics I created ticketing systems in Ivanti for Facilities and in Jira for the Diode Assembly department.`, depth: 0.7, x: 22, y: 13.5, mx: 70, my: 22, rot: 9, size: 1.0, mobile: true, art: (<>
    <path d="M18 18H102V78L90 100H18Z" fill="#F2D77E" {...edge} />
    <path d="M30 38H88M30 52H80M30 66H70" {...line} /><rect x="30" y="76" width="16" height="10" fill="none" stroke={INK} strokeWidth="2" />
  </>) },
  { id: 'solar', caption: 'Sunrun, 2024', title: `Sunrun, summer 2024`, text: `The first of my four jobs: solar panel sales assistant in Worcester, MA. I explained solar products, pricing, and installation processes so customers understood their options, and prepared proposals and quotes.`, depth: 1.0, x: 79, y: 14, mx: 75, my: 9, rot: 10, size: 1.15, mobile: true, art: (<>
    <path d="M22 98 34 22H98L86 98Z" fill="#2F4A63" {...edge} />
    <path d="M28 60H92M63 22 55 98M44 22 38 98M82 22 72 98" stroke="#8FB3D1" strokeWidth="2" />
  </>) },
  { id: 'laser', caption: 'IPG Photonics', title: `IPG Photonics`, text: `Business Analytics Intern, Jun–Dec 2025, in Marlborough, MA, at a laser manufacturer. I interviewed staff to write standard operating procedures and validated production-time data for a company audit.`, depth: 0.8, x: 88, y: 28, mx: 0, my: 0, rot: -8, size: 1.0, art: (<>
    <rect x="14" y="40" width="56" height="40" rx="5" fill="#C9CFCC" {...edge} />
    <rect x="70" y="52" width="14" height="16" fill={INK} {...edge} />
    <path d="M84 60H112" stroke="#E7B8AE" strokeWidth="5" strokeLinecap="round" /><path d="M84 60H112" stroke="#fff" strokeWidth="1.5" />
    <path d="M24 52H58M24 62H58M24 72H58" {...line} />
  </>) },
  { id: 'ticker', caption: 'Bloomberg Market Concepts', title: `Bloomberg Market Concepts`, text: `A self-paced course built on the Bloomberg Terminal covering economic indicators, currencies, fixed income, and equities, and how each one moves markets.`, depth: 0.65, x: 91, y: 52, mx: 86, my: 80, rot: 7, size: 1.05, mobile: true, art: (<>
    <rect x="12" y="22" width="96" height="70" rx="4" fill={INK} {...edge} />
    <path d="M20 78 38 56 52 66 70 40 84 50 100 30" stroke="#8FBFA9" strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M20 84H100" stroke="#E7B8AE" strokeWidth="2" />
  </>) },
  { id: 'calc', caption: 'Six months of ERIE returns', title: `ERIE return and risk`, text: `In coursework I calculated six months of total returns for one Class A share of Erie Indemnity. The average was 0.03% a month, but the standard deviation was 11.07%.`, depth: 0.85, x: 86, y: 76, mx: 0, my: 0, rot: -9, size: 1.0, art: (<>
    <rect x="26" y="12" width="68" height="96" rx="7" fill="#E7B8AE" {...edge} />
    <rect x="34" y="20" width="52" height="20" rx="2" fill={INK} />
    {[0,1,2].flatMap(r => [0,1,2].map(c => <rect key={r*3+c} x={34+c*18} y={50+r*18} width="14" height="12" rx="2" fill={INK} />))}
  </>) },
  { id: 'notebook', caption: 'Class notes', title: `Class notes`, text: `I'm at UMass Lowell's Manning School of Business, studying business administration with concentrations in finance and business analytics. I graduate in May 2028.`, depth: 0.55, x: 14, y: 76, mx: 38, my: 80, rot: -6, size: 1.0, mobile: true, art: (<>
    <rect x="22" y="12" width="76" height="98" rx="4" fill="#8FBFA9" {...edge} />
    <rect x="22" y="12" width="12" height="98" fill="#6FA38B" />
    <path d="M44 36H88M44 50H88M44 64H80" {...line} />
  </>) },
  { id: 'pin', caption: 'Four places I’ve called home', title: `Places I've called home`, text: `Canada, Kazakhstan, Russia, and Massachusetts, where my family settled in 2018. Today home is Shrewsbury, MA.`, depth: 0.95, x: 60, y: 12.5, mx: 50, my: 8, rot: 6, size: 0.85, mobile: true, art: (<>
    <path d="M60 106C34 74 28 62 28 46a32 32 0 0 1 64 0c0 16-6 28-32 60Z" fill="#E7B8AE" {...edge} />
    <circle cx="60" cy="46" r="12" fill={INK} />
  </>) },
  { id: 'franklin', caption: 'Franklin Templeton / Putnam', title: `Franklin Templeton / Putnam Investments`, text: `Client Representative Intern since June 2026, in Andover, MA. I'm a first point of contact for financial advisors, shareholders, and beneficiaries on inbound calls. (Yes, that's Benjamin Franklin on their logo.)`, depth: 0.8, x: 40, y: 13.5, mx: 30, my: 22, rot: -4, size: 1.1, mobile: true, art: (<>
    {/* banknote-style medallion */}
    <ellipse cx="60" cy="60" rx="46" ry="54" fill="#F4EFE6" {...edge} />
    <ellipse cx="60" cy="60" rx="41" ry="49" fill="none" stroke="#C9BFAE" strokeWidth="2" />
    {/* coat and cravat */}
    <path d="M22 106C28 94 42 90 56 89L78 89C92 91 100 98 104 106C96 112 28 112 22 106Z" fill="#2F4A63" />
    <path d="M62 88L70 89L74 102L66 98Z" fill="#F4EFE6" />
    {/* long hair behind the head */}
    <path d="M34 48C25 64 26 88 34 100C40 104 47 99 48 92L52 52Z" fill="#B7BDC2" />
    <path d="M32 66C30 76 32 88 36 96M39 58C37 70 39 84 43 92" stroke="#8E959B" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* head in profile */}
    <path d="M46 46C45 29 61 20 73 27C79 31 82 37 82 43L90 55L83 60C85 63 84 66 83 68C85 71 83 75 80 78C78 83 74 87 66 89L50 86C45 74 44 58 46 46Z" fill="#F0CFB4" />
    <path d="M46 46C47 40 50 36 54 33C54 41 53 49 51 56C49 56 47 52 46 46Z" fill="#B7BDC2" />
    {/* spectacles, eye, brow, mouth */}
    <circle cx="70" cy="50" r="7" fill="#FFFFFF" fillOpacity=".55" stroke={INK} strokeWidth="2.2" /><path d="M63.5 49L52 48" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="71" cy="50.5" r="1.8" fill={INK} /><path d="M65 43Q71 40 76 42" stroke="#8E6B52" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M79 69Q83 68 82 66" stroke="#B8896B" strokeWidth="2" strokeLinecap="round" fill="none" />
  </>) },
  { id: 'launch', caption: '52 Launch', title: `52 Launch`, text: `Marketing Intern, Feb–May 2026, in Framingham, MA. I supported lead-generation campaigns, added short-form video and interactive polls to lift social media engagement, and analyzed competitor brands.`, depth: 0.85, x: 70, y: 89, mx: 62, my: 80, rot: 6, size: 1.0, mobile: true, art: (<>
    <rect x="10" y="10" width="100" height="100" rx="14" fill="#0A0A0A" {...edge} />
    <rect x="18" y="18" width="84" height="84" rx="9" fill="none" stroke="#2A2A2A" strokeWidth="2" />
    <text x="60" y="71" textAnchor="middle" fontSize="58" fontWeight="800" fill="#FFFFFF" style={{ fontFamily: 'var(--sans)', letterSpacing: '-0.03em' }}>52</text>
    <text x="60" y="94" textAnchor="middle" fontSize="17" fontWeight="600" fill="#FFFFFF" style={{ fontFamily: 'var(--sans)', letterSpacing: '0.05em' }}>launch</text>
  </>) },
]
