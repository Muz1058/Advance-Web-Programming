function Header() {
  const navItems = ['Home', 'About', 'Events', 'Register', 'Contact']

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-2xl font-black uppercase tracking-[0.18em] text-sky-700 transition hover:text-sky-800"
        >
          EventHub
        </a>

        <nav aria-label="Primary" className="hidden gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-sky-700"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
