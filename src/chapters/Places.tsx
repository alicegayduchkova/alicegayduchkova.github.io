import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { places } from '../content/copy'

export default function Places() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('.place', el)
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' },
          scrollTrigger: { trigger: el, start: 'top top', end: '+=180%', pin: true, scrub: 0.6, anticipatePin: 1 } })
        tl.from('.places-head', { opacity: 0, y: 40, duration: 0.5 })
        tl.fromTo('.rail-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', duration: items.length * 0.5 }, 0.5)
        items.forEach((li, i) => tl.from(li, { opacity: 0, x: -36, duration: 0.4 }, 0.5 + i * 0.5))
        tl.from('.places-note', { opacity: 0, y: 24, duration: 0.5 }, 0.5 + items.length * 0.5)
        tl.to({}, { duration: 0.4 })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="chapter places" ref={root} aria-labelledby="places-h">
      <div className="places-inner">
        <h2 id="places-h" className="places-head">{places.headline}</h2>
        <div className="places-body">
          <div className="rail" aria-hidden="true"><div className="rail-fill" /></div>
          <ol className="place-list">
            {places.lived.map((p) => (
              <li className="place" key={p}><span className="dot" aria-hidden="true" /><span className="place-name">{p}</span></li>
            ))}
            <li className="place place-home"><span className="dot" aria-hidden="true" /><span className="place-name">{places.home.name}</span><span className="place-note">{places.home.note}, {places.home.sub}</span></li>
          </ol>
        </div>
        <p className="places-note">{places.paragraph}</p>
      </div>
    </section>
  )
}
