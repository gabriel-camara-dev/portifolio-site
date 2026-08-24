import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

const specs = [
  { label: 'BASE', value: profile.location },
  { label: 'FORMAÇÃO', value: profile.education },
  { label: 'STATUS', value: 'Aberto a oportunidades' },
]

export function Hero() {
  return (
    <section id="topo" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <p
              className="animate-fade-up font-mono text-[11px] tracking-[0.28em] text-brand"
              style={{ animationDelay: '60ms' }}
            >
              FULL STACK DEVELOPER
              <span className="ml-1 inline-block animate-blink">_</span>
            </p>

            <h1
              className="mt-5 animate-fade-up font-display text-[clamp(2.75rem,10vw,6.5rem)] font-bold leading-[0.88] tracking-tighter"
              style={{ animationDelay: '140ms' }}
            >
              Gabriel
              <br />
              <span className="text-brand">Câmara</span>
            </h1>

            <p
              className="mt-7 max-w-lg animate-fade-up border-l-2 border-brand pl-4 text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: '220ms' }}
            >
              {profile.headline}
            </p>

            <div
              className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: '300ms' }}
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2.5 bg-brand px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-on-brand transition-all duration-300 hover:gap-4"
              >
                VER PROJETOS
                <ArrowDown
                  size={14}
                  strokeWidth={2.6}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 border border-line px-5 py-3 font-mono text-[11px] tracking-[0.18em] transition-all duration-300 hover:border-brand hover:text-brand"
              >
                GITHUB
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.6}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div
            className="animate-fade-in justify-self-start lg:justify-self-end"
            style={{ animationDelay: '180ms' }}
          >
            <figure className="group relative w-fit">
              <span
                className="absolute -bottom-3 -right-3 h-full w-full bg-brand transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
                aria-hidden="true"
              />
              <span
                className="absolute -left-3 -top-3 h-full w-full border border-line transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
              <img
                src={profile.avatar}
                alt={profile.fullName}
                width={320}
                height={320}
                loading="eager"
                className="relative block size-56 object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:size-72 lg:size-80"
              />
              <figcaption className="relative mt-4 font-mono text-[10px] tracking-[0.22em] text-muted">
                // {profile.fullName.toUpperCase()}
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="mt-14 grid border-y border-line sm:mt-16 sm:grid-cols-3">
          {specs.map((spec, position) => (
            <div
              key={spec.label}
              className="animate-fade-up border-b border-line py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              style={{ animationDelay: `${380 + position * 80}ms` }}
            >
              <dt className="font-mono text-[10px] tracking-[0.22em] text-brand">{spec.label}</dt>
              <dd className="mt-1.5 text-sm">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
