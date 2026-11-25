import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { jobs } from '../content/copy'

export default function Jobs() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.job', el)
        const tl = gsap.timeline({ defaults: { ease: 'none' },
          scrollTrigger: { trigger: el, start: 'top top', end: `+=${cards.length * 90}%`, pin: true, scrub: 0.6, anticipatePin: 1 } })
        gsap.set(cards.slice(1), { yPercent: 110, rotation: 2, opacity: 0 })
        cards.forEach((card, i) => {
          if (i === 0) return
          const t = i * 1.2
          tl.to(cards[i - 1], { scale: 0.92, yPercent: -6, filter: 'brightness(0.55)', duration: 1, ease: 'power2.inOut' }, t)
          tl.to(card, { opacity: 1, duration: 0.1 }, t)
          tl.to(card, { yPercent: 0, rotation: 0, duration: 1, ease: 'power2.inOut' }, t)
          tl.to('.level-fill', { scaleX: (i + 1) / cards.length, duration: 1, ease: 'power2.inOut' }, t)
        })
        tl.to({}, { duration: 0.6 })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="chapter jobs" ref={root} aria-labelledby="jobs-h">
      <div className="jobs-inner">
        <header className="jobs-head">
          <h2 id="jobs-h">{jobs.title}</h2>
          <p>{jobs.intro}</p>
          <div className="level" aria-hidden="true"><div className="level-fill" /></div>
        </header>
        <div className="job-stack">
          {jobs.list.map((j, i) => (
            <article className="job" key={j.org} style={{ zIndex: i + 1 }}>
              <div className="job-side">
                <span className="job-n">{String(i + 1).padStart(2, '0')}<small> / 04</small></span>
                <p className="job-industry">{j.industry}</p>
              </div>
              <div className="job-main">
                <h3>{j.role}</h3>
                <p className="job-meta">{j.org} · {j.when}{j.where ? ` · ${j.where}` : ''}</p>
                <ul>{j.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                {j.learning && <p className="learning"><b>What I'm learning:</b> {j.learning}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
