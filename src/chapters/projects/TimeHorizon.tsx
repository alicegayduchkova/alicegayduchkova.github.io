import { useRef } from 'react'
import { gsap } from '../../lib/scroll'
import { useScene } from '../../lib/scene'
import ProjectShell from '../../components/ProjectShell'
import { projects } from '../../content/copy'

const p = projects.horizon
// TODO(Alice): the copy doesn't name specific goals, so goal cards are blank paper notes. Add real goal names here if you want them shown.
const lanes = [
  { name: 'Short term', note: 'Stability' },
  { name: 'Medium term', note: '' },
  { name: 'Long term', note: 'Growth' },
]

export default function TimeHorizon() {
  const ref = useRef<HTMLElement>(null)
  useScene(ref, (tl, el) => {
    const laneEls = gsap.utils.toArray<HTMLElement>('.lane', el)
    const chips = gsap.utils.toArray<HTMLElement>('.chip-goal', el)
    const area = el.querySelector('.th-lanes')!
    // goals start in one pile above the lanes, then sort into short, medium, long
    tl.from(chips, {
      x: (_i, t: HTMLElement) => { const a = area.getBoundingClientRect(), c = t.getBoundingClientRect(); return a.left + a.width / 2 - (c.left + c.width / 2) },
      y: (_i, t: HTMLElement) => { const a = area.getBoundingClientRect(), c = t.getBoundingClientRect(); return a.top - 60 - c.top },
      rotation: (i: number) => (i % 2 ? 14 : -12), opacity: 0, stagger: 0.18, duration: 0.8, ease: 'power2.out',
    }, 0)
    // the horizon moves from now toward retirement; the risk dial follows
    tl.set(laneEls, { opacity: 0.4 }, 1.4)
    tl.fromTo('.th-marker', { left: '0%' }, { left: '100%', duration: 3 }, 1.5)
    tl.fromTo('.needle', { rotation: -70, svgOrigin: '100 100' }, { rotation: 70, duration: 3 }, 1.5)
    laneEls.forEach((l, i) => {
      tl.to(l, { opacity: 1, duration: 0.2 }, 1.5 + i)
      if (i < 2) tl.to(l, { opacity: 0.4, duration: 0.2 }, 2.5 + i)
    })
    tl.to(laneEls, { opacity: 1, duration: 0.4 }, 4.7)
    tl.from('.takeaway', { opacity: 0, y: 20, duration: 0.6 }, 5)
    tl.to({}, { duration: 0.6 })
  }, '+=300%')

  return (
    <ProjectShell sceneRef={ref} id="th-h" kind={p.kind} title={p.title} summary={p.summary} takeaway={p.takeaway}>
      <div className="th">
        <div className="th-axis" aria-hidden="true"><span>Now</span><div className="th-track"><div className="th-marker" /></div><span>Retirement</span></div>
        <div className="th-lanes">
          {lanes.map((l) => (
            <div className="lane" key={l.name}>
              <h4>{l.name}</h4>
              {l.note && <p className="lane-note">{l.note}</p>}
              <div className="chips" aria-hidden="true">{[0, 1].map((k) => <span className="chip-goal" key={k}><i /><i /></span>)}</div>
            </div>
          ))}
        </div>
        <div className="th-dial">
          <svg viewBox="0 0 200 116" role="img" aria-label="Risk dial: from stability for near-term money to growth for money needed far in the future.">
            <defs><linearGradient id="dialg" x1="0" x2="1"><stop offset="0" stopColor="#8FBFA9" /><stop offset="1" stopColor="#E7B8AE" /></linearGradient></defs>
            <path d="M20 100A80 80 0 0 1 180 100" fill="none" stroke="url(#dialg)" strokeWidth="10" strokeLinecap="round" />
            <g className="needle" transform="rotate(70 100 100)"><line x1="100" y1="100" x2="100" y2="34" /><circle cx="100" cy="100" r="7" /></g>
          </svg>
          <div className="dial-labels"><span>Stability</span><span>Growth</span></div>
        </div>
      </div>
    </ProjectShell>
  )
}
