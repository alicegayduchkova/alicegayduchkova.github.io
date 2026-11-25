import ErieCompany from './projects/ErieCompany'
import Erie from './projects/Erie'
import SmartInvestors from './projects/SmartInvestors'
import FranklinVsJpm from './projects/FranklinVsJpm'
import TimeHorizon from './projects/TimeHorizon'
import { projects } from '../content/copy'

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <header className="projects-head"><h2>{projects.title}</h2><p>{projects.intro}</p></header>
      <ErieCompany />
      <Erie />
      <FranklinVsJpm />
      <SmartInvestors />
      <TimeHorizon />
    </div>
  )
}
