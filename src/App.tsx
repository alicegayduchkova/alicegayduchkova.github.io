import { useEffect, useRef, useState, type ComponentType } from 'react'
import { getLenis, initLenis, ScrollTrigger } from './lib/scroll'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './scenes/Landing'
import Places from './chapters/Places'
import Jobs from './chapters/Jobs'
import Certificates from './chapters/Certificates'
import { projectParts } from './chapters/Projects'
import School from './chapters/School'
import Timeline from './chapters/Timeline'
import SkillsContact from './chapters/SkillsContact'

// Everything after the landing, in page order.
const before: ComponentType[] = [Places, Jobs, Certificates]
const after: ComponentType[] = [School, Timeline, SkillsContact]
const total = before.length + projectParts.length + after.length

const idle = (fn: () => void) => ('requestIdleCallback' in window ? (window as unknown as { requestIdleCallback: (f: () => void, o: object) => void }).requestIdleCallback(fn, { timeout: 120 }) : setTimeout(fn, 30))

// Remember scroll position ourselves: staged mounting makes the page short at first, so the browser's own restore would be clamped.
const KEY = 'ag-scroll'
const savedY = () => {
  try {
    const t = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)?.type
    return t === 'reload' || t === 'back_forward' ? Number(sessionStorage.getItem(KEY) || 0) : 0
  } catch { return 0 }
}

export default function App() {
  const [saved] = useState(savedY)
  const restored = useRef(false)
  // Landing paints first, then chapters mount one per idle slot. A reload mid-page or a #hash mounts everything at once so the scroll position lands right.
  const [n, setN] = useState(() => (saved > 0 || location.hash ? total : 0))

  useEffect(() => {
    const lenis = initLenis()
    history.scrollRestoration = 'manual'
    let raf = 0
    const save = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { try { sessionStorage.setItem(KEY, String(Math.round(window.scrollY))) } catch { /* storage unavailable */ } }) }
    addEventListener('scroll', save, { passive: true })
    return () => { removeEventListener('scroll', save); lenis?.destroy() }
  }, [])

  useEffect(() => {
    if (n >= total) {
      document.fonts?.ready.then(() => ScrollTrigger.refresh())
      ScrollTrigger.refresh()
      if (saved > 0 && !restored.current) {
        restored.current = true
        requestAnimationFrame(() => { const l = getLenis(); if (l) l.scrollTo(saved, { immediate: true }); else window.scrollTo(0, saved) })
      }
      return
    }
    const t = setTimeout(() => idle(() => setN((x) => x + 1)), n === 0 ? 400 : 0)
    return () => clearTimeout(t)
  }, [n, saved])

  const nodes: { key: string; C: ComponentType }[] = [
    ...before.map((C, i) => ({ key: `b${i}`, C })),
    ...projectParts.map((C, i) => ({ key: `p${i}`, C })),
    ...after.map((C, i) => ({ key: `a${i}`, C })),
  ]
  const shown = nodes.slice(0, n)
  const inProjects = (key: string) => key.startsWith('p')

  return (
    <>
      <Header />
      <main id="main">
        <Landing />
        {shown.filter((x) => !inProjects(x.key) && x.key.startsWith('b')).map(({ key, C }) => <C key={key} />)}
        {shown.some((x) => inProjects(x.key)) && (
          <div className="projects" id="projects">{shown.filter((x) => inProjects(x.key)).map(({ key, C }) => <C key={key} />)}</div>
        )}
        {shown.filter((x) => x.key.startsWith('a')).map(({ key, C }) => <C key={key} />)}
      </main>
      <Footer />
    </>
  )
}
