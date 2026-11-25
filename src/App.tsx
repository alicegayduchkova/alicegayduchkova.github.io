import { useEffect } from 'react'
import { initLenis, ScrollTrigger } from './lib/scroll'
import Header from './components/Header'
import Landing from './scenes/Landing'
import Places from './chapters/Places'
import Jobs from './chapters/Jobs'
import Certificates from './chapters/Certificates'
import Projects from './chapters/Projects'
import School from './chapters/School'
import Timeline from './chapters/Timeline'
import SkillsContact from './chapters/SkillsContact'
import Footer from './components/Footer'

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
      <main id="main">
        <Landing />
        <Places />
        <Jobs />
        <Certificates />
        <Projects />
        <School />
        <Timeline />
        <SkillsContact />
      </main>
      <Footer />
    </>
  )
}
