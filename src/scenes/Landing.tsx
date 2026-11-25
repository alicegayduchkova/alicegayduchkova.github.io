import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent as RMouseEvent } from 'react'
import { gsap, ScrollTrigger } from '../lib/scroll'
import { hero } from '../content/copy'
import { objects, type Obj } from './objects'

export default function Landing() {
  const root = useRef<HTMLElement>(null)
  const deskRef = useRef<HTMLDivElement>(null)
  const popRef = useRef<HTMLDivElement>(null)
  const [pop, setPop] = useState<{ id: string; left: number; top?: number; bottom?: number; y0: number } | null>(null)

  // click an icon to read about it; the card sits next to the icon (bottom sheet on phones)
  const pick = (e: RMouseEvent<HTMLButtonElement>, o: Obj) => {
    if (pop?.id === o.id) { setPop(null); return }
    const desk = deskRef.current!.getBoundingClientRect(), r = e.currentTarget.getBoundingClientRect()
    const W = Math.min(320, desk.width - 24)
    const left = Math.max(12, Math.min(r.left - desk.left + r.width / 2 - W / 2, desk.width - W - 12))
    const below = r.top + r.height / 2 < desk.top + desk.height * 0.55
    setPop(below ? { id: o.id, left, top: r.bottom - desk.top + 14, y0: window.scrollY } : { id: o.id, left, bottom: desk.bottom - r.top + 14, y0: window.scrollY })
  }
  useEffect(() => {
    if (!pop) return
    popRef.current?.focus({ preventScroll: true })
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setPop(null); (document.querySelector(`[data-pick="${pop.id}"]`) as HTMLElement | null)?.focus() } }
    const down = (e: PointerEvent) => { const t = e.target as Element; if (!t.closest('.pop') && !t.closest('.obj-btn')) setPop(null) }
    const scroll = () => { if (Math.abs(window.scrollY - pop.y0) > 12) setPop(null) }
    const close = () => setPop(null)
    addEventListener('keydown', key); addEventListener('pointerdown', down); addEventListener('scroll', scroll, { passive: true }); addEventListener('resize', close)
    return () => { removeEventListener('keydown', key); removeEventListener('pointerdown', down); removeEventListener('scroll', scroll); removeEventListener('resize', close) }
  }, [pop])
  const popObj = pop ? objects.find((o) => o.id === pop.id) : undefined

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
          const d = Number(o.dataset.depth), ox = Number(overlay ? o.dataset.mx : o.dataset.x) - 50, oy = Number(overlay ? o.dataset.my : o.dataset.y) - 50
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
      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 701px)', () => build('+=150%', true))
      mm.add('(prefers-reduced-motion: no-preference) and (max-width: 700px)', () => build('+=110%', true))
      mm.add('(prefers-reduced-motion: reduce)', () => { root.current?.classList.add('is-static') })

      // mouse parallax on desktop (the idle float is pure CSS, so it costs no JS per frame)
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
      <div className="desk" ref={deskRef}>
        {objects.map((o, i) => (
          <div key={o.id} className={`obj${o.mobile ? '' : ' m-hide'}`} data-depth={o.depth} data-x={o.x} data-y={o.y} data-mx={o.mx} data-my={o.my} data-rot={o.rot}
            style={{ ['--x' as string]: `${o.x}%`, ['--y' as string]: `${o.y}%`, ['--mx' as string]: `${o.mx}%`, ['--my' as string]: `${o.my}%`, ['--s' as string]: o.size, transform: `rotate(${o.rot}deg)` }}>
            <div className="parallax"><div className="float" style={{ ['--d' as string]: `${(2.8 + ((i * 0.37) % 1.4)).toFixed(2)}s`, ['--dl' as string]: `${(-i * 0.6).toFixed(1)}s` }}>
              <button type="button" className="obj-btn" data-pick={o.id} aria-label={`${o.title}: read more`} aria-expanded={pop?.id === o.id} aria-controls={pop?.id === o.id ? 'obj-pop' : undefined} onClick={(e) => pick(e, o)}>
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
        {popObj && pop && (
          <div className="pop" id="obj-pop" ref={popRef} role="dialog" aria-labelledby="obj-pop-title" tabIndex={-1} style={{ left: pop.left, top: pop.top, bottom: pop.bottom }}>
            <button type="button" className="pop-x" aria-label="Close" onClick={() => { setPop(null); (document.querySelector(`[data-pick="${popObj.id}"]`) as HTMLElement | null)?.focus() }}>×</button>
            <svg className="pop-art" viewBox="0 0 120 120" aria-hidden="true" focusable="false">{popObj.art}</svg>
            <p className="pop-title" id="obj-pop-title">{popObj.title}</p>
            <p className="pop-text">{popObj.text}</p>
          </div>
        )}
        <p className="hint" aria-hidden="true">Scroll <span className="hint-sub">· <span className="h-d">click</span><span className="h-m">tap</span> an icon</span></p>
      </div>
    </section>
  )
}
