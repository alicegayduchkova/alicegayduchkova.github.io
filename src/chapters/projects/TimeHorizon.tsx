import { useRef } from 'react'
import { gsap } from '../../lib/scroll'
import { countFmt, useScene } from '../../lib/scene'
import ProjectShell from '../../components/ProjectShell'
import { projects } from '../../content/copy'
import { goals } from '../../content/coursework'

const p = projects.horizon
const usd = (v: number) => `$${Math.round(v).toLocaleString('en-US')}`

export default function TimeHorizon() {
  const ref = useRef<HTMLElement>(null)
  useScene(ref, (tl, el) => {
    const restore: (() => void)[] = []
    const laneEls = gsap.utils.toArray<HTMLElement>('.lane', el)
    // the goals land first, then the horizon moves from now toward retirement while the risk dial follows
    tl.from('.goal', { opacity: 0, y: 30, stagger: 0.25, duration: 0.7, ease: 'power2.out' }, 0)
    tl.set(laneEls, { opacity: 0.4 }, 1.4)
    tl.fromTo('.th-marker', { left: '0%' }, { left: '100%', duration: 3.6 }, 1.5)
    tl.fromTo('.needle', { rotation: -70, svgOrigin: '100 100' }, { rotation: 70, duration: 3.6 }, 1.5)
    laneEls.forEach((l, i) => {
      const t = 1.5 + i * 1.2
      tl.to(l, { opacity: 1, duration: 0.2 }, t)
      if (i < 2) tl.to(l, { opacity: 0.4, duration: 0.2 }, t + 1.2)
      const g = goals.items[i]
      restore.push(countFmt(tl, l.querySelector('.amt-now'), g.steps[0], g.steps[g.steps.length - 1], t, 1, (v) => `about ${usd(v)}`))
    })
    tl.to(laneEls, { opacity: 1, duration: 0.4 }, 5.4)
    tl.from('.th-also, .sources', { opacity: 0, duration: 0.5 }, 5.6)
    tl.from('.takeaway', { opacity: 0, y: 20, duration: 0.6 }, 5.8)
    tl.to({}, { duration: 0.6 })
    return () => restore.forEach((f) => f())
  }, '+=360%')

  return (
    <ProjectShell sceneRef={ref} id="th-h" kind={p.kind} title={p.title} summary={p.summary} takeaway={p.takeaway}
      extra={
        <>
        <div className="th-dial">
          <svg viewBox="0 0 200 116" role="img" aria-label="Risk dial: from stability for near-term money to growth for money needed far in the future.">
            <defs><linearGradient id="dialg" x1="0" x2="1"><stop offset="0" stopColor="#8FBFA9" /><stop offset="1" stopColor="#E7B8AE" /></linearGradient></defs>
            <path d="M20 100A80 80 0 0 1 180 100" fill="none" stroke="url(#dialg)" strokeWidth="10" strokeLinecap="round" />
            <g className="needle" transform="rotate(70 100 100)"><line x1="100" y1="100" x2="100" y2="34" /><circle cx="100" cy="100" r="7" /></g>
          </svg>
          <div className="dial-labels"><span>Stability</span><span>Growth</span></div>
        </div>
        <p className="th-also">{goals.also}</p>
        <details className="sources">
          <summary>Articles I read to revise these estimates</summary>
          <p>{goals.caveat} Started at the first figure; the last is my current planning estimate.</p>
          <ul>{goals.articles.map(([t, u]) => <li key={u}><a href={u} rel="noopener">{t}</a></li>)}</ul>
        </details>
        </>
      }>
      <div className="th">
        <div className="th-axis" aria-hidden="true"><span>Now</span><div className="th-track"><div className="th-marker" /></div><span>Retirement</span></div>
        <div className="th-lanes">
          {goals.items.map((g) => {
            const mid = g.steps.slice(1, -1)
            return (
              <div className="lane" key={g.lane}>
                <div className="lane-head"><h4>{g.lane}</h4>{g.note && <p className="lane-note">{g.note}</p>}</div>
                <div className="goal">
                  <h5>{g.title}</h5>
                  <p className="goal-when">{g.when}</p>
                  <p className="goal-amt">
                    <span className="amt-was">{usd(g.steps[0])}</span>
                    {mid.map((m) => <span key={m}> <i aria-hidden="true">→</i> <span className="amt-mid">{usd(m)}</span></span>)}
                    {' '}<i aria-hidden="true">→</i> <b className="amt-now">about {usd(g.steps[g.steps.length - 1])}</b>
                  </p>
                  <p className="goal-text">{g.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ProjectShell>
  )
}
