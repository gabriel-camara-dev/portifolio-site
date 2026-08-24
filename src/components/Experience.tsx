import { experiences } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Experience() {
  return (
    <Section id="experiencia" index="03" label="EXPERIÊNCIA" title="Onde eu passei">
      <ol className="border-t border-line">
        {experiences.map((experience, position) => (
          <li key={experience.company} className="border-b border-line">
            <Reveal delay={position * 100}>
              <div className="grid gap-4 py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8 lg:py-10">
                <div className="md:pt-1">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                    {experience.period.toUpperCase()}
                  </span>
                  {experience.current ? (
                    <span className="mt-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-brand">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping bg-brand opacity-70" />
                        <span className="relative inline-flex size-1.5 bg-brand" />
                      </span>
                      ATUAL
                    </span>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-brand">
                    {experience.company.toUpperCase()}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-l border-line pl-5">
                    {experience.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative max-w-2xl text-sm leading-relaxed text-muted"
                      >
                        <span
                          className="absolute -left-[1.375rem] top-[0.4375rem] size-1 bg-brand/60"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
