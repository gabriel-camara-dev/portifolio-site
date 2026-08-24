import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

const channels = [
  { label: 'E-MAIL', value: profile.links.email, href: `mailto:${profile.links.email}` },
  { label: 'WHATSAPP', value: profile.links.phone, href: profile.links.whatsapp },
  { label: 'LINKEDIN', value: 'Gabriel Câmara', href: profile.links.linkedin },
  { label: 'GITHUB', value: 'gabriel-camara-dev', href: profile.links.github },
]

export function Contact() {
  return (
    <Section
      id="contato"
      index="05"
      label="CONTATO"
      title="Vamos conversar"
      subtitle="Aberto a oportunidades como Full Stack Developer e a projetos que deem trabalho de verdade."
    >
      <div className="border-t border-line">
        {channels.map((channel, position) => (
          <Reveal key={channel.label} delay={position * 60}>
            <a
              href={channel.href}
              target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 border-b border-line py-5"
            >
              <span className="flex min-w-0 flex-col gap-1 transition-transform duration-300 group-hover:translate-x-3 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-32 shrink-0 font-mono text-[10px] tracking-[0.24em] text-brand">
                  {channel.label}
                </span>
                <span className="truncate text-base transition-colors group-hover:text-brand sm:text-lg">
                  {channel.value}
                </span>
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={2.2}
                className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
