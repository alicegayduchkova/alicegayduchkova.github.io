import { useEffect, useRef, useState } from 'react'
import { getLenis, prefersReducedMotion, ScrollTrigger } from '../lib/scroll'
import { hero } from '../content/copy'

const links: [string, string][] = [['Places', 'places'], ['Work', 'jobs'], ['Certificates', 'certs'], ['Projects', 'projects'], ['School', 'school'], ['Contact', 'contact']]

function goTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const target = el.closest<HTMLElement>('.pin-spacer') ?? el // pinned chapters live inside a spacer
  const y = target.getBoundingClientRect().top + window.scrollY
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(y, { duration: 1.2 })
  else window.scrollTo({ top: y, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

export default function Header() {
  const bar = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const st = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => { if (bar.current) bar.current.style.transform = `scaleX(${s.progress})` } })
    return () => st.kill()
  }, [])
  useEffect(() => {
    if (!open) return
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [open])
  return (
    <header className="site-header">
      <a className="skip" href="#main">Skip to content</a>
      <a className="wordmark" href="#main" aria-label="ag., back to top" onClick={(e) => { e.preventDefault(); goTo('main') }}>{hero.wordmark}</a>
      <nav className="site-nav" aria-label="Chapters">
        <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="nav-list" onClick={() => setOpen(!open)}>Menu</button>
        <ul id="nav-list" className={open ? 'open' : ''}>
          {links.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); setOpen(false); goTo(id) }}>{label}</a></li>
          ))}
        </ul>
      </nav>
      <div className="progress" aria-hidden="true"><div ref={bar} /></div>
    </header>
  )
}
