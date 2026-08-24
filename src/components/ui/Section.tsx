import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  index: string
  label: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ id, index, label, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 py-16 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-14 lg:grid-cols-[9rem_minmax(0,1fr)] lg:py-24">
          <div className="md:sticky md:top-28 md:self-start">
            <span
              className="block font-display text-5xl font-bold leading-none tracking-tighter text-line lg:text-7xl"
              aria-hidden="true"
            >
              {index}
            </span>
            <span className="mt-2 block font-mono text-[10px] tracking-[0.28em] text-brand">
              {label}
            </span>
          </div>

          <div className="min-w-0">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {subtitle}
                </p>
              ) : null}
            </Reveal>

            <div className="mt-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
