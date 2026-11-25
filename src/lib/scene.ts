import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from './scroll'

type Build = (tl: gsap.core.Timeline, el: HTMLElement) => void | (() => void)

/** Pinned scrubbed scene on desktop; on phones the same timeline plays as the visual scrolls through. Nothing runs under reduced motion. */
export function useScene(ref: RefObject<HTMLElement | null>, build: Build, desktopEnd: string) {
  useLayoutEffect(() => {
    const el = ref.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const make = (st: ScrollTrigger.Vars) => build(gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { scrub: 0.6, invalidateOnRefresh: true, ...st } }), el)
      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 901px) and (min-height: 700px)', () => make({ trigger: el, start: 'top top', end: desktopEnd, pin: true, anticipatePin: 1 }))
      mm.add('(prefers-reduced-motion: no-preference) and ((max-width: 900px) or (max-height: 699px))', () => make({ trigger: el.querySelector('.scene-visual')!, start: 'top 75%', end: '+=90%' }))
    }, el)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

/** Count a number up inside the timeline. Returns a function that restores the final text. */
export function countUp(tl: gsap.core.Timeline, node: Element | null, to: number, at: number, dur: number, signed = false): () => void {
  if (!node) return () => {}
  const final = node.textContent ?? ''
  const fmt = (v: number) => (signed ? (to < 0 ? '−' : '+') : '') + Math.abs(v).toFixed(2) + '%'
  node.textContent = fmt(0)
  const o = { v: 0 }
  tl.to(o, { v: to, duration: dur, ease: 'none', onUpdate: () => { node.textContent = fmt(o.v) } }, at)
  return () => { node.textContent = final }
}

/** Count any number up inside the timeline with a custom formatter. Returns a function that restores the final text. */
export function countFmt(tl: gsap.core.Timeline, node: Element | null, from: number, to: number, at: number, dur: number, fmt: (v: number) => string): () => void {
  if (!node) return () => {}
  const final = node.textContent ?? ''
  node.textContent = fmt(from)
  const o = { v: from }
  tl.to(o, { v: to, duration: dur, ease: 'none', onUpdate: () => { node.textContent = fmt(o.v) } }, at)
  return () => { node.textContent = final }
}
