const items = [
  'NODE.JS',
  'NESTJS',
  'FASTIFY',
  'TYPESCRIPT',
  'REACT',
  'NEXT.JS',
  'PRISMA',
  'POSTGRESQL',
  'ORACLE PL/SQL',
  'DOCKER',
  'GITHUB ACTIONS',
  'VITEST',
]

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-surface/60 py-3">
      {[0, 1].map((track) => (
        <ul
          key={track}
          aria-hidden={track === 1}
          className="flex shrink-0 animate-marquee items-center gap-8 pr-8 font-mono text-[11px] tracking-[0.22em] text-muted"
        >
          {items.map((item) => (
            <li key={item} className="flex shrink-0 items-center gap-8">
              {item}
              <span className="size-1 shrink-0 bg-brand" aria-hidden="true" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
