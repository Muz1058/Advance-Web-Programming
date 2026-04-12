import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/add', label: 'Add Services' },
]

const NavBar = () => {
  return (
    <header className="border-b border-slate-200 bg-slate-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-slate-200"
          />
          <span className="text-base font-semibold tracking-tight text-slate-800">
            Smart Multan Portal
          </span>
        </Link>

        <div className="flex items-center gap-1 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-white hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
