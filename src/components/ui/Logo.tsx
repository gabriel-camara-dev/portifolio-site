type LogoProps = {
  /** Tamanho do símbolo em pixels. */
  size?: number
  withWordmark?: boolean
}

/**
 * Símbolo: três camadas empilhadas (core / domain / infra). A forma como eu
 * organizo os projetos virou a marca.
 */
export function Logo({ size = 40, withWordmark = true }: LogoProps) {
  return (
    <span className="group/logo inline-flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="14"
          y="10"
          width="36"
          height="36"
          rx="7"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand opacity-25 transition-transform duration-500 group-hover/logo:-translate-y-1"
        />
        <rect
          x="14"
          y="16"
          width="36"
          height="36"
          rx="7"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand opacity-50 transition-transform duration-500 group-hover/logo:-translate-y-0.5"
        />
        <rect x="14" y="22" width="36" height="32" rx="7" className="fill-brand" />
        <path
          d="M38 32.5h-6v5h3.2a4.2 4.2 0 1 1-.4-6.6"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-paper"
        />
      </svg>

      {withWordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-base font-bold tracking-tight">Gabriel Câmara</span>
          <span className="mt-1 font-mono text-[10px] tracking-[0.22em] text-muted">
            FULL STACK DEV
          </span>
        </span>
      ) : null}
    </span>
  )
}
