import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { timeline } from '../content/copy'

export default function Timeline() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const rows = gsap.utils.toArray<HTMLElement>('.tl-row', el)
        // the spine draws itself as you scroll down the timeline
        gsap.fromTo('.tl-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.tl-body', start: 'top 60%', end: 'bottom 60%', scrub: 0.5 } })
        rows.forEach((r) => {
          const side = matchMedia('(max-width: 700px)').matches ? 0 : r.classList.contains('is-career') ? 40 : -40
          gsap.from(r.querySelector('.tl-card'), { opacity: 0, x: side, y: side === 0 ? 20 : 0, ease: 'power2.out', scrollTrigger: { trigger: r, start: 'top 72%', end: 'top 55%', scrub: 0.5 } })
          gsap.from(r.querySelector('.tl-dot'), { scale: 0, ease: 'back.out(2)', scrollTrigger: { trigger: r, start: 'top 72%', end: 'top 62%', scrub: 0.5 } })
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="chapter tl" id="timeline" ref={root} aria-labelledby="tl-h">
      <header className="tl-head"><h2 id="tl-h">{timeline.title}</h2><p>{timeline.intro}</p></header>
      <div className="tl-tracks" aria-hidden="true"><span className="t-life">{timeline.tracks.life}</span><span className="t-career">{timeline.tracks.career}</span></div>
      <ol className="tl-body">
        <div className="tl-spine" aria-hidden="true"><div className="tl-fill" /></div>
        {timeline.items.map((it) => (
          <li key={it.when + it.text} className={`tl-row ${it.track === 'career' ? 'is-career' : 'is-life'}`}>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-card">
              <p className="tl-when"><span className="tl-track-name">{timeline.tracks[it.track]}</span> {it.when}</p>
              <p className="tl-text">{it.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
