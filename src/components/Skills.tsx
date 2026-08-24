import { skills } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Skills() {
  return (
    <Section id="stack" index="04" label="STACK" title="Ferramentas que eu uso">
      <dl className="border-t border-line">
        {skills.map((group, position) => (
          <Reveal
            key={group.label}
            delay={position * 60}
            className="group grid gap-2 border-b border-line py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="font-mono text-[10px] tracking-[0.24em] text-brand">
              {group.label.toUpperCase()}
            </dt>
            <dd className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
              {group.items.map((item, itemPosition) => (
                <span key={item} className="flex items-center gap-2.5">
                  {itemPosition > 0 ? <span className="size-1 bg-line" aria-hidden="true" /> : null}
                  <span className="text-sm text-muted transition-colors group-hover:text-ink">
                    {item}
                  </span>
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
