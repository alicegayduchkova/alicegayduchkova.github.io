import { useRef } from 'react'
import { gsap } from '../../lib/scroll'
import { countFmt, useScene } from '../../lib/scene'
import ProjectShell from '../../components/ProjectShell'
import { investors as inv } from '../../content/coursework'

const MAX = Math.max(...inv.people.map((p) => p.worth))

export default function SmartInvestors() {
  const ref = useRef<HTMLElement>(null)

  useScene(ref, (tl, el) => {
    const restore: (() => void)[] = []
    // net worth bars grow and count up
    inv.people.forEach((p, i) => {
      tl.fromTo(`.nw-bar-${p.id}`, { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: 'power2.out' }, 0.2 + i * 0.3)
      restore.push(countFmt(tl, el.querySelector(`.nw-val-${p.id}`), 0, p.worth, 0.2 + i * 0.3, 0.9, (x) => `$${Math.round(x)}B`))
    })
    // each person's chain: how the money was made, step by step, with flow dots between steps
    inv.people.forEach((p, pi) => {
      const t = 1.8 + pi * 0.4
      gsap.utils.toArray<HTMLElement>(`.card-${p.id} .step`, el).forEach((s, i) => tl.from(s, { opacity: 0, y: 18, duration: 0.5, ease: 'power2.out' }, t + i * 0.6))
      tl.from(`.card-${p.id} .win`, { opacity: 0, y: 14, duration: 0.5 }, 4.2 + pi * 0.3)
      tl.from(`.card-${p.id} .loss`, { opacity: 0, y: 14, duration: 0.5 }, 5 + pi * 0.3)
      tl.from(`.card-${p.id} .avoid`, { opacity: 0, y: 14, duration: 0.5 }, 5.8 + pi * 0.3)
    })
    tl.to('.link', { strokeDashoffset: -60, duration: 7 }, 1.8)
    tl.from('.compare', { opacity: 0, y: 16, duration: 0.5 }, 6.8)
    tl.from('.takeaway', { opacity: 0, y: 20, duration: 0.6 }, 7.4)
    tl.to({}, { duration: 0.6 })
    return () => restore.forEach((f) => f())
  }, '+=420%')

  return (
    <ProjectShell sceneRef={ref} id="inv-h" kind={inv.kind} title={inv.title} summary={inv.summary} takeaway={inv.takeaway}
      extra={<p className="compare">{inv.compare}</p>}>
      <div className="si">
        <div className="nw" role="group" aria-label="Net worth, billions of dollars">
          {inv.people.map((p) => (
            <div className="nw-row" key={p.id}>
              <span className="nw-name">{p.name} <small>{p.rank}</small></span>
              <span className="nw-track"><span className={`nw-bar nw-bar-${p.id}`} style={{ width: `${(p.worth / MAX) * 100}%` }} /></span>
              <span className={`nw-val nw-val-${p.id}`}>${p.worth}B</span>
            </div>
          ))}
          <p className="nw-note">{inv.rankNote}</p>
        </div>
        <div className="si-cols">
          {inv.people.map((p) => (
            <article className={`card card-${p.id}`} key={p.id}>
              <header><h4>{p.name}</h4><p>{p.role}</p></header>
              <ol className="chain">
                {p.chain.map((s, i) => (
                  <li className="step" key={s}>
                    {s}
                    {i < p.chain.length - 1 && <svg className="arrow" viewBox="0 0 12 22" aria-hidden="true"><path className="link" d="M6 0V22" /></svg>}
                  </li>
                ))}
              </ol>
              <p className="win"><b>A win:</b> {p.win}</p>
              <p className="loss"><b>A setback:</b> {p.loss}</p>
              <p className="avoid"><b>What I'd avoid:</b> {p.avoid}</p>
              <details className="src"><summary>Sources</summary><ul>{p.sources.map((s) => <li key={s}>{s}</li>)}</ul></details>
            </article>
          ))}
        </div>
      </div>
    </ProjectShell>
  )
}
