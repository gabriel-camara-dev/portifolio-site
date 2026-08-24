import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './ui/Logo'

const navItems = [
  { href: '#sobre', label: 'Sobre', index: '01' },
  { href: '#projetos', label: 'Projetos', index: '02' },
  { href: '#experiencia', label: 'Experiência', index: '03' },
  { href: '#stack', label: 'Stack', index: '04' },
  { href: '#contato', label: 'Contato', index: '05' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled ? 'border-line bg-paper/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#topo" aria-label="Início">
          <Logo size={40} />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group/nav flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.18em] text-muted transition-colors hover:text-ink"
            >
              <span className="text-brand opacity-60 transition-opacity group-hover/nav:opacity-100">
                {item.index}
              </span>
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className="grid size-9 place-items-center border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand md:hidden"
          >
            {isMenuOpen ? <X size={17} strokeWidth={2.2} /> : <Menu size={17} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} items={navItems} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
