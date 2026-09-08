import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [['/notes', 'Notes'], ['/work', 'Work'], ['/projects', 'Projects'], ['/misc', 'Misc']]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
    <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-7 sm:px-8">
      <Link to="/" className="font-semibold tracking-tight">Venkat</Link>
      <nav className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 sm:gap-6">
        {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'text-neutral-950 dark:text-white' : 'hover:text-neutral-950 dark:hover:text-white'}>{label}</NavLink>)}
        <button aria-label="Toggle color theme" onClick={() => setDark(!dark)} className="ml-1 px-1 text-base leading-none" title="Toggle theme">🌙</button>
      </nav>
    </header>
    <main className="mx-auto max-w-3xl px-6 pb-24 sm:px-8">{children}</main>
    <footer className="mx-auto flex max-w-3xl justify-between border-t border-neutral-200 px-6 py-7 text-xs text-neutral-500 dark:border-neutral-800 sm:px-8"><span>You made it to the bottom.</span><span>(copyright) {new Date().getFullYear()} Venkat</span></footer>
  </div>
}
