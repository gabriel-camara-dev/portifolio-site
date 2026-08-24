import { profile } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

const principles = [
  {
    marker: '01',
    title: 'Domínio no centro',
    description:
      'Entidades e use cases sem saber que existe HTTP, Prisma ou fila. A infraestrutura é detalhe, e detalhe se troca.',
  },
  {
    marker: '02',
    title: 'Erro esperado não é exceção',
    description:
      'Use case devolve sucesso ou falha tipada. Quem chama decide o status. Nada de try/catch espalhado pela aplicação.',
  },
  {
    marker: '03',
    title: 'Teste onde há risco',
    description:
      'Unitário no domínio, e2e nas bordas com banco de verdade. Cobertura que impede regressão, não que enfeita relatório.',
  },
  {
    marker: '04',
    title: 'Deploy faz parte do projeto',
    description:
      'Docker, migrations, CI/CD no GitHub Actions e observabilidade com Axiom desde o primeiro commit, não na véspera de entregar.',
  },
]

export function About() {
  return (
    <Section id="sobre" index="01" label="SOBRE" title="Como eu trabalho">
      <div className="space-y-5">
        {profile.summary.map((paragraph, position) => (
          <Reveal key={paragraph} delay={position * 80}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <ol className="mt-12 border-t border-line">
        {principles.map((principle, position) => (
          <li key={principle.title} className="border-b border-line">
            <Reveal delay={position * 70}>
              <div className="group grid gap-2 py-5 transition-transform duration-300 hover:translate-x-3 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-mono text-[11px] tracking-[0.18em] text-brand">
                  {principle.marker}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold transition-colors group-hover:text-brand">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
