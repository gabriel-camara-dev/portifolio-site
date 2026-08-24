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
        <div className="grid gap-5 py-14 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-14 md:py-16 lg:grid-cols-[9rem_minmax(0,1fr)] lg:py-24">
          {/* No mobile o número e o rótulo ficam lado a lado: empilhados, abriam
              uma faixa vazia enorme antes do título. */}
          <div className="flex items-baseline gap-3 md:sticky md:top-28 md:block md:self-start">
            <span
              className="font-display text-4xl font-bold leading-none tracking-tighter text-line md:block md:text-5xl lg:text-7xl"
              aria-hidden="true"
            >
              {index}
            </span>
            <span className="font-mono text-[10px] tracking-[0.28em] text-brand md:mt-2 md:block">
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
