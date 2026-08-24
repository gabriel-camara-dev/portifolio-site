import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Logo } from './ui/Logo'

type NavItem = {
  href: string
  label: string
  index: string
}

type MobileMenuProps = {
  isOpen: boolean
  items: NavItem[]
  onClose: () => void
}

export function MobileMenu({ isOpen, items, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-paper md:hidden"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <Logo size={40} />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          className="grid size-9 place-items-center border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <X size={17} strokeWidth={2.2} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-5 py-6">
        <ul>
          {items.map((item, position) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a
                href={item.href}
                onClick={onClose}
                className="group flex animate-fade-up items-baseline gap-4 py-5 transition-transform duration-300 hover:translate-x-2"
                style={{ animationDelay: `${position * 60}ms` }}
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-brand">
                  {item.index}
                </span>
                <span className="font-display text-3xl font-bold tracking-tighter transition-colors group-hover:text-brand">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
