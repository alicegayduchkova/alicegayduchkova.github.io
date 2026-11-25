import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { skills, contact, hero } from '../content/copy'

const tilt = [-1.6, 1.2, -0.8, 1.8, -1.2, 0.9]

export default function SkillsContact() {
  const root = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.cluster', el).forEach((c) =>
          gsap.from(c.querySelectorAll('.tag'), { opacity: 0, y: 24, scale: 0.9, stagger: 0.08, ease: 'back.out(1.6)', scrollTrigger: { trigger: c, start: 'top 85%', end: 'top 45%', scrub: 0.6 } }))
        gsap.from('.contact-inner > *', { opacity: 0, y: 30, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '.contact', start: 'top 75%', end: 'top 25%', scrub: 0.6 } })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={root}>
      <section className="chapter skills" id="skills" aria-labelledby="skills-h">
        <h2 id="skills-h">{skills.title}</h2>
        <div className="clusters">
          {skills.groups.map((g) => (
            <div className="cluster" key={g.name}>
              <h3>{g.name}</h3>
              <ul>{g.items.map((s, i) => <li className="tag" key={s} style={{ transform: `rotate(${tilt[i % tilt.length]}deg)` }}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="chapter contact" id="contact" aria-labelledby="contact-h">
        <div className="contact-inner">
          <img className="portrait" src="/photo.png" width="421" height="421" alt="Portrait of Alisa Gayduchkova" loading="lazy" decoding="async" />
          <h2 id="contact-h">{contact.title}</h2>
          <p>{contact.text}</p>
          <p className="email"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p className="contact-links">
            <a className="btn primary" href={hero.links.email}>{contact.links.talk}</a>
            <a className="btn" href={hero.links.resume}>{contact.links.resume}</a>
            <a className="btn" href={hero.links.linkedin} rel="noopener">{contact.links.linkedin}</a>
          </p>
        </div>
      </section>
    </div>
  )
}
