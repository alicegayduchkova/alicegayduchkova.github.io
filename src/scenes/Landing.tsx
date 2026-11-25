import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/scroll'
import { hero } from '../content/copy'
import { objects } from './objects'

export default function Landing() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = root.current!
    const q = <T extends Element>(s: string) => gsap.utils.toArray<T>(s, el)
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const build = (end: string, overlay: boolean) => {
        const laptop = el.querySelector<HTMLElement>('.laptop')!
        const screen = el.querySelector<HTMLElement>('.screen')!
        const objs = q<HTMLElement>('.obj')
        const measure = () => {
          const lr = laptop.getBoundingClientRect(), sr = screen.getBoundingClientRect()
          const cx = sr.left + sr.width / 2, cy = sr.top + sr.height / 2
          gsap.set(laptop, { transformOrigin: `${cx - lr.left}px ${cy - lr.top}px` })
          return { dx: innerWidth / 2 - cx, dy: innerHeight / 2 - cy, s: overlay ? (innerWidth / sr.width) * 1.02 : Math.max(innerWidth / sr.width, innerHeight / sr.height) * 1.01 }
        }
        let m = measure()
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: el, start: 'top top', end, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true,
            onRefreshInit: () => { gsap.set(laptop, { clearProps: 'transform' }) }, onRefresh: () => { m = measure() } },
        })
        // 0 to 0.4: objects drift outward by depth, with a little spin
        objs.forEach((o) => {
          const d = Number(o.dataset.depth), ox = Number(o.dataset.x) - 50, oy = Number(o.dataset.y) - 50
          const len = Math.hypot(ox, oy) || 1
          tl.to(o, { x: () => (ox / len) * innerWidth * (0.55 + d * 0.6), y: () => (oy / len) * innerHeight * (0.55 + d * 0.6),
            rotation: Number(o.dataset.rot) + (ox < 0 ? -1 : 1) * 40 * d, ease: 'power1.in', duration: 0.4 }, 0)
        })
        // 0.4 to 1: laptop scales until the screen fills the viewport
        tl.to(laptop, { x: () => m.dx, y: () => m.dy, scale: () => m.s, ease: 'power2.inOut', duration: 0.6 }, 0.4)
        tl.to('.base, .lid-shell, .hint', { opacity: 0, duration: 0.2 }, 0.75)
        tl.to('.screen', { borderRadius: 0, duration: 0.2 }, 0.8)
        tl.to('.screen-extra', { opacity: 1, y: 0, duration: 0.2, ease: 'power1.out' }, 0.85)
        tl.to('.hero-name', { y: -10, duration: 0.2 }, 0.85)
        if (overlay) { tl.to('.screen-full', { opacity: 1, duration: 0.15, ease: 'power1.out' }, 0.85); tl.to('.laptop', { opacity: 0, duration: 0.1 }, 0.95) }
        return () => tl.kill()
      }
      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 701px)', () => build('+=150%', false))
      mm.add('(prefers-reduced-motion: no-preference) and (max-width: 700px)', () => build('+=110%', true))
      mm.add('(prefers-reduced-motion: reduce)', () => { root.current?.classList.add('is-static') })

      // idle float on every object, mouse parallax on desktop
      q<HTMLElement>('.float').forEach((f, i) => gsap.to(f, { y: gsap.utils.random(-8, 8), rotation: gsap.utils.random(-3, 3), duration: gsap.utils.random(2.5, 4), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.2 }))
      mm.add('(pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        const movers = q<HTMLElement>('.parallax').map((p) => ({ x: gsap.quickTo(p, 'x', { duration: 0.8 }), y: gsap.quickTo(p, 'y', { duration: 0.8 }), d: Number(p.parentElement!.dataset.depth) }))
        const move = (e: MouseEvent) => { const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5; movers.forEach((m) => { m.x(-nx * 36 * m.d); m.y(-ny * 36 * m.d) }) }
        addEventListener('mousemove', move)
        return () => removeEventListener('mousemove', move)
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="landing" ref={root} aria-label="Introduction">
      <div className="desk">
        {objects.map((o) => (
          <div key={o.id} className={`obj${o.mobile ? '' : ' m-hide'}`} data-depth={o.depth} data-x={o.x} data-y={o.y} data-rot={o.rot}
            style={{ left: `${o.x}%`, top: `${o.y}%`, ['--s' as string]: o.size, transform: `rotate(${o.rot}deg)` }}>
            <div className="parallax"><div className="float">
              <button type="button" className="obj-btn" aria-label={o.caption}>
                <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">{o.art}</svg>
                <span className="cap" role="tooltip">{o.caption}</span>
              </button>
            </div></div>
          </div>
        ))}
        <div className="laptop-wrap"><div className="laptop">
          <div className="lid"><div className="lid-shell" />
            <div className="screen">
              <h1 className="hero-name">{hero.name}</h1>
              <p className="hero-first">{hero.introFirst}</p>
              <div className="screen-extra">
                <p>{hero.introRest}</p>
                <ul className="glance" aria-label="Four jobs at a glance">
                  {hero.jobsGlance.map(([y, c, r]) => (<li key={c}><b>{y}</b> {c} <span>{r}</span></li>))}
                </ul>
              </div>
            </div>
          </div>
          <div className="base" aria-hidden="true"><div className="notch" /></div>
        </div></div>
        <div className="screen-full" aria-hidden="true">
          <p className="sf-name">{hero.name}</p>
          <p className="sf-first">{hero.introFirst}</p>
          <p className="sf-rest">{hero.introRest}</p>
          <ul className="glance">{hero.jobsGlance.map(([y, c, r]) => (<li key={c}><b>{y}</b> {c} <span>{r}</span></li>))}</ul>
        </div>
        <p className="hint" aria-hidden="true">Scroll</p>
      </div>
    </section>
  )
}
