import { useRef } from 'react'
import { gsap } from '../../lib/scroll'
import { countFmt, useScene } from '../../lib/scene'
import ProjectShell from '../../components/ProjectShell'
import { erieCompany as c } from '../../content/coursework'

const money = (ch: (typeof c.charts)[number], v: number) => `${ch.prefix}${v.toFixed(ch.dec)}${ch.suffix}`

export default function ErieCompany() {
  const ref = useRef<HTMLElement>(null)

  useScene(ref, (tl, el) => {
    const restore: (() => void)[] = []
    c.charts.forEach((ch, ci) => {
      const t = ci * 1.3
      tl.from(`.tb-${ch.id} .tb-title`, { opacity: 0, duration: 0.3 }, t)
      ch.points.forEach(([, v], i) => {
        tl.fromTo(`.tb-${ch.id} .tb-bar-${i}`, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, t + 0.15 + i * 0.15)
        restore.push(countFmt(tl, el.querySelector(`.tb-${ch.id} .tb-val-${i}`), 0, v, t + 0.15 + i * 0.15, 0.6, (x) => money(ch, x)))
      })
    })
    tl.from('.chart-note', { opacity: 0, y: 10, duration: 0.4 }, 4)
    tl.from('.control-head, .control-note', { opacity: 0, duration: 0.4 }, 4.5)
    tl.fromTo('.seg', { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power2.out', stagger: 0.25 }, 4.7)
    c.control.parts.forEach(([, v], i) => restore.push(countFmt(tl, el.querySelector(`.seg-val-${i}`), 0, v, 4.7 + i * 0.25, 0.8, (x) => `${x.toFixed(2)}%`)))
    tl.from('.pc-col', { opacity: 0, y: 18, duration: 0.5, stagger: 0.3 }, 6)
    tl.from('.takeaway, .source', { opacity: 0, y: 20, duration: 0.6 }, 7.2)
    tl.to({}, { duration: 0.6 })
    return () => restore.forEach((f) => f())
  }, '+=400%')

  return (
    <ProjectShell sceneRef={ref} id="erieco-h" kind={c.kind} title={c.title} summary={c.summary} takeaway={c.takeaway} source={c.sources}
      extra={<dl className="facts">{c.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}>
      <div className="co">
        <div className="co-trends">
          {c.charts.map((ch) => {
            const max = Math.max(...ch.points.map((p) => p[1]))
            return (
              <figure className={`tb tb-${ch.id}`} key={ch.id}>
                <figcaption className="tb-title">{ch.title}</figcaption>
                {ch.points.map(([yr, v], i) => (
                  <div className="tb-row" key={yr}>
                    <span className="tb-yr">{yr}</span>
                    <span className="tb-track"><span className={`tb-bar tb-bar-${i}`} style={{ width: `${(v / max) * 100}%` }} /></span>
                    <span className={`tb-val tb-val-${i}`}>{money(ch, v)}</span>
                  </div>
                ))}
              </figure>
            )
          })}
        </div>
        <p className="chart-note">{c.chartNote}</p>
        <div className="control">
          <p className="control-head">{c.control.title}</p>
          <div className="seg-bar" role="img" aria-label={c.control.parts.map(([n, v]) => `${n} ${v}%`).join(', ')}>
            {c.control.parts.map(([n, v], i) => (
              <span className={`seg seg-${i}`} key={n} style={{ width: `${v}%` }} />
            ))}
          </div>
          <ul className="seg-legend">{c.control.parts.map(([n, v], i) => <li key={n}><i className={`sw sw-${i}`} />{n} <b className={`seg-val-${i}`}>{v.toFixed(2)}%</b></li>)}</ul>
          <p className="control-note">{c.control.note}</p>
        </div>
        <div className="pc">
          <div className="pc-col"><h4>What I liked</h4><ul>{c.pros.map((p) => <li key={p}>{p}</li>)}</ul></div>
          <div className="pc-col"><h4>What worried me</h4><ul>{c.cons.map((p) => <li key={p}>{p}</li>)}</ul></div>
        </div>
      </div>
    </ProjectShell>
  )
}
