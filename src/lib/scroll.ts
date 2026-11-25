import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)
export { gsap, ScrollTrigger }

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let current: Lenis | null = null
export const getLenis = () => current

/** Smooth scroll synced to ScrollTrigger. Off for reduced motion or ?lenis=off (for testing). */
export function initLenis(): Lenis | null {
  if (prefersReducedMotion() || new URLSearchParams(location.search).get('lenis') === 'off') return null
  const lenis = new Lenis({ lerp: 0.1 })
  current = lenis
  lenis.on('scroll', ScrollTrigger.update)
  const tick = (t: number) => lenis.raf(t * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  return lenis
}
