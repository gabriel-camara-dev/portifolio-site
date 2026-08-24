import { Plus } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../data/profile'
import { ProjectEntry } from './ProjectEntry'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

const featured = projects.filter((project) => project.featured)
const others = projects.filter((project) => !project.featured)

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : featured

  return (
    <Section
      id="projetos"
      index="02"
      label="PROJETOS"
      title="O que eu construí"
      subtitle="Sistemas reais, com decisão de arquitetura por trás. Todo código está aberto no GitHub."
    >
      <div className="border-t border-line">
        {visibleProjects.map((project, position) => (
          <Reveal key={project.name} delay={position < 2 ? position * 90 : 0}>
            <ProjectEntry project={project} index={String(position + 1).padStart(2, '0')} />
          </Reveal>
        ))}
      </div>

      {!showAll && others.length > 0 ? (
        <Reveal className="mt-8">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="group inline-flex items-center gap-2.5 border border-line px-5 py-3 font-mono text-[11px] tracking-[0.18em] transition-all duration-300 hover:border-brand hover:text-brand"
          >
            <Plus
              size={13}
              strokeWidth={2.6}
              className="transition-transform duration-500 group-hover:rotate-90"
            />
            MAIS {others.length} PROJETOS
          </button>
        </Reveal>
      ) : null}
    </Section>
  )
}
