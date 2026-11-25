import { useEffect, useRef } from 'react'
import { ScrollTrigger } from '../lib/scroll'
import { hero } from '../content/copy'

export default function Header() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const st = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => { if (bar.current) bar.current.style.transform = `scaleX(${s.progress})` } })
    return () => st.kill()
  }, [])
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Alisa Gayduchkova, back to top">{hero.wordmark}</a>
      <div className="progress" aria-hidden="true"><div ref={bar} /></div>
    </header>
  )
}
