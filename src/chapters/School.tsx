import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { school } from '../content/copy'
import { aim } from '../content/coursework'

export default function School() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.aim-head > *', { opacity: 0, y: 30, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '.aim', start: 'top 80%', end: 'top 40%', scrub: 0.6 } })
        gsap.from('.pillar', { opacity: 0, y: 40, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.pillars', start: 'top 88%', end: 'top 45%', scrub: 0.6 } })
        gsap.utils.toArray<HTMLElement>('.school-row', el).forEach((r) =>
          gsap.from(r, { opacity: 0, y: 50, ease: 'power2.out', scrollTrigger: { trigger: r, start: 'top 90%', end: 'top 60%', scrub: 0.6 } }))
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="chapter school" id="school" ref={root} aria-labelledby="school-h">
      <header className="school-head"><h2 id="school-h">{school.title}</h2><p>{school.intro}</p></header>
      <article className="aim" aria-labelledby="aim-h">
        <div className="aim-head">
          <p className="aim-eyebrow">{aim.eyebrow}</p>
          <h3 id="aim-h">{aim.name}</h3>
          <p className="aim-full">{aim.full}</p>
          <dl className="aim-facts">
            <div><dt>My role</dt><dd>{aim.role}</dd></div>
            <div><dt>Since</dt><dd>{aim.since}</dd></div>
            <div><dt>Club</dt><dd>{aim.founded}</dd></div>
          </dl>
          <a className="btn" href={aim.link.href} rel="noopener">{aim.link.label}</a>
        </div>
        <div className="aim-body">
          <p className="aim-mine">{aim.mine}</p>
          {aim.who.map((t) => <p key={t}>{t}</p>)}
        </div>
        <ol className="pillars">
          {aim.pillars.map(([n, k, t, d]) => (
            <li className="pillar" key={n}>
              <span className="pillar-n">{n} / {k}</span>
              <h4>{t}</h4>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </article>
      <div className="school-list">
        {school.list.map((s) => (
          <article className="school-row" key={s.name}>
            <div>
              <h3>{s.name}</h3>
              {s.full && <p className="school-full">{s.full}</p>}
            </div>
            <div>
              <p className="school-role">{s.role}</p>
              <p className="courses"><b>Courses:</b> {s.courses}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="school-story">{school.story}</p>
    </section>
  )
}
