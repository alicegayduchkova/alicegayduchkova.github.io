import ErieCompany from './projects/ErieCompany'
import Erie from './projects/Erie'
import FranklinVsJpm from './projects/FranklinVsJpm'
import SmartInvestors from './projects/SmartInvestors'
import TimeHorizon from './projects/TimeHorizon'
import { projects } from '../content/copy'

export function ProjectsHead() {
  return <header className="projects-head"><h2>{projects.title}</h2><p>{projects.intro}</p></header>
}
/** The project scenes in order. The page mounts them one at a time so no single task blocks the main thread for long. */
export const projectParts = [ProjectsHead, ErieCompany, Erie, FranklinVsJpm, SmartInvestors, TimeHorizon]
