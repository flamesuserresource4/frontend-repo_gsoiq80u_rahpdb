import { useState } from 'react'
import { Menu, X, Calendar as CalendarIcon, Newspaper, Info, Phone, Home } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/calendar', label: 'Calendar', icon: CalendarIcon },
  { to: '/news', label: 'News', icon: Newspaper },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Phone },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-sm font-medium ${
      isActive
        ? 'bg-pink-100 text-pink-700'
        : 'text-slate-700 hover:bg-slate-100'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 shadow-sm" />
            <span className="text-lg font-semibold text-slate-800">Bright Meadow School</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={linkClasses} onClick={() => setOpen(false)}>
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg bg-white/70 shadow-sm border border-white/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} className={linkClasses} onClick={() => setOpen(false)}>
                  <Icon size={16} />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
