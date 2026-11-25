import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { jobs } from '../content/copy'

export default function Jobs() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const cards = gsap.utils.toArray<HTMLElement>('.job', el)
      // Desktop: pinned stack where each job levels up into the next.
      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 901px) and (min-height: 700px)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'none' },
          scrollTrigger: { trigger: el, start: 'top top', end: `+=${cards.length * 90}%`, pin: true, scrub: 0.6, anticipatePin: 1 } })
        gsap.set(cards.slice(1), { yPercent: 110, rotation: 2, opacity: 0 })
        cards.forEach((card, i) => {
          if (i === 0) return
          const t = i * 1.2
          tl.fromTo(cards[i - 1], { scale: 1, yPercent: 0, filter: 'brightness(1)' }, { scale: 0.92, yPercent: -6, filter: 'brightness(0.55)', duration: 1, ease: 'power2.inOut' }, t)
          tl.to(cards[i - 1], { opacity: 0, duration: 0.12 }, t + 0.88)
          tl.to(card, { opacity: 1, duration: 0.1 }, t)
          tl.to(card, { yPercent: 0, rotation: 0, duration: 1, ease: 'power2.inOut' }, t)
          tl.to('.level-fill', { scaleX: (i + 1) / cards.length, duration: 1, ease: 'power2.inOut' }, t)
        })
        tl.to({}, { duration: 0.6 })
      })
      // Phones and tablets: cards stack in normal flow and rise into view.
      mm.add('(prefers-reduced-motion: no-preference) and ((max-width: 900px) or (max-height: 699px))', () => {
        cards.forEach((c) => gsap.from(c, { opacity: 0, y: 40, ease: 'power2.out', scrollTrigger: { trigger: c, start: 'top 92%', end: 'top 68%', scrub: 0.5 } }))
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="chapter jobs" id="jobs" ref={root} aria-labelledby="jobs-h">
      <div className="jobs-inner">
        <header className="jobs-head">
          <h2 id="jobs-h">{jobs.title}</h2>
          <p>{jobs.intro}</p>
          <div className="level" aria-hidden="true"><div className="level-fill" /></div>
        </header>
        <div className="job-stack">
          {jobs.list.map((j, i) => (
            <article className="job" key={j.org} style={{ zIndex: i + 1 }}>
              <div className="job-top">
                <img className="job-logo" src={j.logo.src} alt={j.logo.alt} width={j.logo.w} height={j.logo.h} loading="lazy" decoding="async" />
                <div className="job-head">
                  <p className="job-meta"><span className="job-n">{String(i + 1).padStart(2, '0')}<small> / 04</small></span><span className="job-industry">{j.industry}</span></p>
                  <h3>{j.role}</h3>
                  <p className="job-org">{j.org}</p>
                  <dl className="job-facts">
                    <div><dt>When</dt><dd>{j.when}</dd></div>
                    <div><dt>Where</dt><dd>{j.where}</dd></div>
                  </dl>
                </div>
              </div>
              <ul className="job-bullets">{j.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              {'learning' in j && j.learning && <p className="learning"><b>What I'm learning:</b> {j.learning}</p>}
              <div className="job-tags">
                <p className="tags-label">What I worked with</p>
                <ul>{j.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
