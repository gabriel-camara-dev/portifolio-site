import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const THEME_KEY = 'gc-portfolio-theme'

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  function toggleDarkMode() {
    const nextDarkMode = !isDarkMode

    document.documentElement.classList.toggle('dark', nextDarkMode)
    localStorage.setItem(THEME_KEY, nextDarkMode ? 'dark' : 'light')
    setIsDarkMode(nextDarkMode)
  }

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDarkMode ? 'Modo claro' : 'Modo escuro'}
      className="grid size-9 place-items-center border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand"
    >
      {isDarkMode ? <Sun size={17} strokeWidth={2.2} /> : <Moon size={17} strokeWidth={2.2} />}
    </button>
  )
}
