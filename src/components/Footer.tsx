import { profile } from '../data/profile'
import { Logo } from './ui/Logo'

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a href="#topo" aria-label="Voltar ao topo">
          <Logo size={32} withWordmark={false} />
        </a>
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted">
          © {new Date().getFullYear()} {profile.fullName.toUpperCase()}
        </span>
      </div>
    </footer>
  )
}
