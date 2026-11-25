import { useRef } from 'react'
import { gsap } from '../../lib/scroll'
import { useScene } from '../../lib/scene'
import ProjectShell from '../../components/ProjectShell'
import { projects } from '../../content/copy'

const p = projects.ft

export default function FranklinVsJpm() {
  const ref = useRef<HTMLElement>(null)
  useScene(ref, (tl, el) => {
    const cards = gsap.utils.toArray<HTMLElement>('.ft-card', el)
    tl.from(cards[0], { opacity: 0, y: 30, duration: 1, ease: 'power2.out' }, 0)
    tl.from(cards[1], { opacity: 0, y: 30, duration: 1, ease: 'power2.out' }, 1)
    // revenue flows: dashes travel along each path as you scroll
    tl.to('.flow', { strokeDashoffset: -160, duration: 6 }, 0)
    // assets under management rise and fall with markets and fund flows
    // (fill bottom is fixed at y=212; level = height)
    const level = (h: number) => ({ attr: { height: h, y: 212 - h }, duration: 1.4, ease: 'sine.inOut' })
    tl.fromTo('.tank-fill', { attr: { height: 34, y: 178 } }, level(100), 0.4)
    tl.to('.tank-fill', level(52), 1.8)
    tl.to('.tank-fill', level(90), 3.2)
    tl.from('.takeaway', { opacity: 0, y: 20, duration: 0.6 }, 4.4)
    tl.to({}, { duration: 0.6 })
  }, '+=260%')

  return (
    <ProjectShell sceneRef={ref} id="ft-h" kind={p.kind} title={p.title} summary={p.summary} takeaway={p.takeaway}>
      <div className="ft-grid">
        <figure className="ft-card">
          <figcaption><span>Asset manager</span><b>Franklin Templeton</b></figcaption>
          <svg viewBox="0 0 300 370" role="img" aria-label="Markets and fund flows move the assets Franklin Templeton manages. Fees on those assets flow into the company as its main source of revenue.">
            <g className="chip"><rect x="14" y="6" width="100" height="28" rx="14" /><text x="64" y="25" textAnchor="middle">Markets</text></g>
            <g className="chip"><rect x="186" y="6" width="100" height="28" rx="14" /><text x="236" y="25" textAnchor="middle">Fund flows</text></g>
            <path className="flow thin" d="M64 36V96" /><path className="flow thin" d="M236 36C236 70 190 70 190 96" />
            <rect className="tank" x="70" y="96" width="160" height="118" rx="10" />
            <rect className="tank-fill" x="72" y="98" width="156" height="114" rx="8" />
            <text className="lbl" x="150" y="128" textAnchor="middle">Assets under</text><text className="lbl" x="150" y="146" textAnchor="middle">management</text>
            <path className="flow fee" d="M150 216V296" />
            <text className="lbl" x="172" y="262">Fees</text>
            <rect className="co" x="55" y="296" width="190" height="56" rx="10" /><text className="lbl" x="150" y="330" textAnchor="middle">Franklin Templeton</text>
          </svg>
          <p>Most of its revenue comes from fees on the assets it manages.</p>
        </figure>
        <figure className="ft-card">
          <figcaption><span>Diversified bank</span><b>JPMorgan Chase</b></figcaption>
          <svg viewBox="0 0 300 370" role="img" aria-label="JPMorgan Chase earns revenue from lending and from wealth management, two flows into the bank.">
            <g className="src"><rect x="6" y="60" width="132" height="44" rx="8" /><text x="72" y="87" textAnchor="middle">Lending</text></g>
            <g className="src"><rect x="162" y="60" width="132" height="44" rx="8" /><text x="228" y="87" textAnchor="middle">Wealth management</text></g>
            <path className="flow lend" d="M72 106C72 200 120 200 120 296" /><path className="flow wealth" d="M228 106C228 200 180 200 180 296" />
            <rect className="co" x="55" y="296" width="190" height="56" rx="10" /><text className="lbl" x="150" y="330" textAnchor="middle">JPMorgan Chase</text>
          </svg>
          <p>It also lends and offers wealth management.</p>
        </figure>
      </div>
    </ProjectShell>
  )
}
