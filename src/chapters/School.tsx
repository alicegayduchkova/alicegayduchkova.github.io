import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { school } from '../content/copy'

export default function School() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.school-row', el).forEach((r) =>
          gsap.from(r, { opacity: 0, y: 50, ease: 'power2.out', scrollTrigger: { trigger: r, start: 'top 90%', end: 'top 60%', scrub: 0.6 } }))
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="chapter school" id="school" ref={root} aria-labelledby="school-h">
      <header className="school-head"><h2 id="school-h">{school.title}</h2><p>{school.intro}</p></header>
      <div className="school-list">
        {school.list.map((s) => (
          <article className="school-row" key={s.name}>
            <div>
              <h3>{s.name}</h3>
              {s.full && <p className="school-full">{s.full}</p>}
            </div>
            <div>
              <p className="school-role">{s.role}</p>
              {s.text && <p>{s.text}{s.link && <> (<a href={s.link.href}>{s.link.label}</a>)</>}</p>}
              {s.courses && <p className="courses"><b>Courses:</b> {s.courses}</p>}
            </div>
          </article>
        ))}
      </div>
      <p className="school-story">{school.story}</p>
    </section>
  )
}
