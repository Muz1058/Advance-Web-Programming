const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-slate-900">
            Smart Multan Portal
          </p>
          <p className="mt-1 text-sm text-slate-500">
            A consistent portal experience for browsing and managing services.
          </p>
        </div>
        <div className="text-sm text-slate-500 md:text-right">
          Built with React, Vite, and Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}

export default Footer
