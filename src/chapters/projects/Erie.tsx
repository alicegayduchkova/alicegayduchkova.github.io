import { useRef, useState } from 'react'
import { gsap } from '../../lib/scroll'
import { countUp, useScene } from '../../lib/scene'
import ProjectShell from '../../components/ProjectShell'
import { projects } from '../../content/copy'

const e = projects.erie
// Geometry (viewBox units)
const W = 640, H = 400, L = 52, R = 64, T = 44, B = 40
const PR = W - R, PB = H - B
const y = (v: number) => T + ((20 - v) / 35) * (PB - T)
const Z = y(0), YA = y(e.avg)
const slot = (PR - L) / 6
const cx = (i: number) => L + slot * (i + 0.5)
const BW = 24, r = 4
const fmt = (v: number) => (v < 0 ? '−' : '+') + Math.abs(v).toFixed(2) + '%'
// Bar with a rounded data end and a square baseline
const bar = (i: number, v: number) => {
  const x = cx(i) - BW / 2, t = y(v)
  return v >= 0
    ? `M${x} ${Z}V${t + r}a${r} ${r} 0 0 1 ${r} ${-r}h${BW - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}V${Z}Z`
    : `M${x} ${Z}V${t - r}a${r} ${r} 0 0 0 ${r} ${r}h${BW - 2 * r}a${r} ${r} 0 0 0 ${r} ${-r}V${Z}Z`
}
const hiI = e.months.findIndex(([, v]) => v === Math.max(...e.months.map((m) => m[1])))
const loI = e.months.findIndex(([, v]) => v === Math.min(...e.months.map((m) => m[1])))

export default function Erie() {
  const ref = useRef<HTMLElement>(null)
  const [tip, setTip] = useState<number | null>(null)

  useScene(ref, (tl, el) => {
    const q = (s: string) => el.querySelector(s)
    const restore: (() => void)[] = []
    const bars = gsap.utils.toArray<SVGElement>('.bar', el)
    const others = bars.filter((_, i) => i !== hiI && i !== loI)
    tl.from('.grid, .ax:not(.swing-note)', { opacity: 0, duration: 0.6 }, 0)
    tl.fromTo('.avg-line', { scaleX: 0, svgOrigin: `${L} ${YA}` }, { scaleX: 1, duration: 0.8, ease: 'power2.out' }, 0.6)
    tl.from('.avg-label', { opacity: 0, duration: 0.3 }, 0.9)
    restore.push(countUp(tl, q('.avg-num'), e.avg, 0.8, 0.7), countUp(tl, q('.stat-avg'), e.avg, 0.8, 0.7))
    bars.forEach((b, i) => tl.fromTo(b, { scaleY: 0, svgOrigin: `${cx(i)} ${Z}` }, { scaleY: 1, duration: 0.5, ease: 'power2.out' }, 1.8 + i * 0.25))
    tl.to(others, { opacity: 0.3, duration: 0.4 }, 3.8)
    tl.fromTo('.bracket', { scaleY: 0, svgOrigin: `${PR + 26} ${(y(e.months[hiI][1]) + y(e.months[loI][1])) / 2}` }, { scaleY: 1, duration: 0.6, ease: 'power2.out' }, 3.9)
    tl.from('.bar-label', { opacity: 0, duration: 0.3 }, 3.9)
    tl.from('.swing-note', { opacity: 0, duration: 0.4 }, 4.2)
    restore.push(countUp(tl, q('.lbl-hi'), e.months[hiI][1], 3.9, 0.7, true), countUp(tl, q('.lbl-lo'), e.months[loI][1], 3.9, 0.7, true))
    tl.fromTo('.band', { scaleY: 0, svgOrigin: `${L} ${YA}` }, { scaleY: 1, duration: 0.8, ease: 'power2.out' }, 5.2)
    tl.from('.band-label', { opacity: 0, duration: 0.3 }, 5.5)
    restore.push(countUp(tl, q('.band-num'), e.sd, 5.3, 0.8), countUp(tl, q('.stat-sd'), e.sd, 5.3, 0.8))
    tl.to(others, { opacity: 1, duration: 0.4 }, 6.4)
    tl.from('.takeaway', { opacity: 0, y: 20, duration: 0.6 }, 6.6)
    tl.to({}, { duration: 0.6 })
    return () => restore.forEach((f) => f())
  }, '+=380%')

  return (
    <ProjectShell sceneRef={ref} id="erie-h" kind={e.kind} title={e.title} summary={e.summary} takeaway={e.takeaway} source={e.source}
      extra={<dl className="stats"><div><dt>Average monthly return</dt><dd className="stat-avg">{e.avg.toFixed(2)}%</dd></div><div><dt>Standard deviation</dt><dd className="stat-sd">{e.sd.toFixed(2)}%</dd></div></dl>}>
      <div className="chart">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Bar chart of monthly total return for ERIE, March to August: ${e.months.map(([m, v]) => `${m} ${fmt(v)}`).join(', ')}. Average ${e.avg}%, standard deviation ${e.sd}%.`}>
          <g className="grid">
            {[-10, 0, 10, 20].map((t) => <line key={t} x1={L} x2={PR} y1={y(t)} y2={y(t)} className={t === 0 ? 'zero' : ''} />)}
          </g>
          {[-10, 0, 10, 20].map((t) => <text key={t} className="ax" x={L - 8} y={y(t) + 4} textAnchor="end">{t > 0 ? '+' : t < 0 ? '−' : ''}{Math.abs(t)}%</text>)}
          <rect className="band" x={L} width={PR - L} y={y(e.avg + e.sd)} height={y(e.avg - e.sd) - y(e.avg + e.sd)} />
          {e.months.map(([m, v], i) => <text key={m} className="ax" x={cx(i)} y={PB + 22} textAnchor="middle">{m}</text>)}
          {e.months.map(([m, v], i) => <path key={m} className={`bar ${v >= 0 ? 'pos' : 'neg'}`} d={bar(i, v)} />)}
          <line className="avg-line" x1={L} x2={PR} y1={YA} y2={YA} />
          <text className="lbl avg-label" x={L + 8} y={YA - 9}><tspan className="avg-num">{e.avg.toFixed(2)}%</tspan> average</text>
          <text className="lbl band-label" x={L + 8} y={y(e.avg + e.sd) + 18}><tspan className="band-num">{e.sd.toFixed(2)}%</tspan> standard deviation</text>
          <text className="lbl bar-label lbl-hi" x={cx(hiI)} y={y(e.months[hiI][1]) - 8} textAnchor="middle">{fmt(e.months[hiI][1])}</text>
          <text className="lbl bar-label lbl-lo" x={cx(loI)} y={y(e.months[loI][1]) + 20} textAnchor="middle">{fmt(e.months[loI][1])}</text>
          <path className="bracket" d={`M${PR + 20} ${y(e.months[hiI][1])}h12M${PR + 26} ${y(e.months[hiI][1])}V${y(e.months[loI][1])}M${PR + 20} ${y(e.months[loI][1])}h12`} />
          <text className="ax swing-note" x={PR} y={T - 22} textAnchor="end">Single months swung from {'−'}12% to +18%</text>
          {e.months.map(([m], i) => (
            <rect key={m} className="hit" x={L + slot * i} y={T} width={slot} height={PB - T} tabIndex={0} role="img" aria-label={`${m} ${fmt(e.months[i][1])}`}
              onMouseEnter={() => setTip(i)} onMouseLeave={() => setTip(null)} onFocus={() => setTip(i)} onBlur={() => setTip(null)} />
          ))}
        </svg>
        {tip !== null && (
          <div className="tip" style={{ left: `${(cx(tip) / W) * 100}%`, top: `${(y(Math.max(e.months[tip][1], 0)) / H) * 100}%` }} role="status">
            {e.months[tip][0]}: {fmt(e.months[tip][1])}
          </div>
        )}
        <details className="data-table">
          <summary>View the numbers</summary>
          <table><caption>Monthly total return, % (Mar to Aug)</caption>
            <thead><tr><th>Month</th><th>Total return</th></tr></thead>
            <tbody>{e.months.map(([m, v]) => <tr key={m}><td>{m}</td><td>{fmt(v)}</td></tr>)}</tbody>
          </table>
        </details>
      </div>
    </ProjectShell>
  )
}
