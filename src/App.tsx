import { useEffect } from 'react'
import { initLenis, ScrollTrigger } from './lib/scroll'
import Header from './components/Header'
import Landing from './scenes/Landing'
import { about } from './content/copy'

export default function App() {
  useEffect(() => {
    const lenis = initLenis()
    const r = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(r)
    return () => lenis?.destroy()
  }, [])
  return (
    <>
      <Header />
      <main id="top">
        <Landing />
        {/* Chapter 1 stub: replaced in stage 3 */}
        <section className="stub"><h2>{about.headline}</h2></section>
      </main>
    </>
  )
}
