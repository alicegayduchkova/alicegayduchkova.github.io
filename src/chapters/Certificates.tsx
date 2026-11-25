import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { certs } from '../content/copy'

// TODO(Alice): drop real certificate images in public/certs/ and show them here. Until then these are typographic cards.
const tilt = [-2.2, 1.6, 1.2, -1.8]

export default function Certificates() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = root.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.cert', el).forEach((c, i) => {
          gsap.fromTo(c, { y: -140, rotation: tilt[i] * 4, opacity: 0 }, { y: 0, rotation: tilt[i], opacity: 1, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: c, start: 'top 92%', end: 'top 58%', scrub: 0.6 } })
        })
      })
      mm.add('(prefers-reduced-motion: reduce)', () => { gsap.set('.cert', { rotation: (i: number) => tilt[i] }) })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="chapter certs" ref={root} aria-labelledby="certs-h">
      <header className="certs-head"><h2 id="certs-h">{certs.title}</h2><p>{certs.intro}</p></header>
      <div className="board">
        {certs.list.map((c) => (
          <article className="cert" key={c.title}>
            <span className="pin" aria-hidden="true" />
            <p className="cert-issuer">{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
