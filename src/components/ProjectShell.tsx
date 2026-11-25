import type { ReactNode, RefObject } from 'react'

type Props = { sceneRef: RefObject<HTMLElement | null>; id: string; kind: string; title: string; summary: string; takeaway: string; source?: string; extra?: ReactNode; children: ReactNode }

export default function ProjectShell({ sceneRef, id, kind, title, summary, takeaway, source, extra, children }: Props) {
  return (
    <section className="scene" ref={sceneRef} aria-labelledby={id}>
      <div className="scene-text">
        <p className="kind">{kind}</p>
        <h3 id={id}>{title}</h3>
        <p className="summary">{summary}</p>
        {extra}
      </div>
      <div className="scene-visual">{children}</div>
      <div className="scene-take">
        <p className="takeaway"><b>Takeaway:</b> {takeaway}</p>
        {source && <p className="source">{source}</p>}
      </div>
    </section>
  )
}
