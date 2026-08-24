import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../data/profile'

type ProjectEntryProps = {
  project: Project
  index: string
}

export function ProjectEntry({ project, index }: ProjectEntryProps) {
  return (
    <article className="group relative border-b border-line py-8 lg:py-10">
      <span
        className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-brand transition-transform duration-1000 ease-out group-hover:scale-y-100"
        aria-hidden="true"
      />

      <div className="grid gap-6 transition-transform duration-300 group-hover:translate-x-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-[11px] tracking-[0.18em] text-brand">{index}</span>
            <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand sm:text-3xl">
              {project.name}
            </h3>
            <span className="font-mono text-[11px] text-muted">{project.year}</span>
          </div>

          <p className="mt-2 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted sm:mt-1.5 sm:pl-8 sm:tracking-[0.14em]">
            {project.tagline.toUpperCase()}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] transition-colors hover:text-brand"
            >
              <Github size={13} strokeWidth={2.4} />
              CÓDIGO
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group/live inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-brand transition-colors hover:text-brand-strong"
              >
                EM PRODUÇÃO
                <ArrowUpRight
                  size={13}
                  strokeWidth={2.4}
                  className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                />
              </a>
            ) : null}
          </div>
        </div>

        <div className="min-w-0 border-l border-line pl-5">
          <ul className="space-y-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="relative text-sm leading-relaxed text-muted">
                <span
                  className="absolute -left-[1.375rem] top-[0.4375rem] size-1 bg-brand/60"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>

          <p className="mt-5 font-mono text-[10px] leading-relaxed tracking-[0.16em] text-muted">
            {project.stack.map((tech) => tech.toUpperCase()).join('  ·  ')}
          </p>
        </div>
      </div>

      {project.image ? (
        <figure className="mt-8 overflow-hidden border border-line bg-surface shadow-panel transition-transform duration-500 group-hover:translate-x-3">
          <img
            src={project.image.light}
            alt={project.image.alt}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="block w-full dark:hidden"
          />
          <img
            src={project.image.dark}
            alt={project.image.alt}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="hidden w-full dark:block"
          />
        </figure>
      ) : null}
    </article>
  )
}
