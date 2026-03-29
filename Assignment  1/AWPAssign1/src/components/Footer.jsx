function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-white px-6 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-slate-800">
          EventHub | Contact: hello@eventhub.pk
        </p>
        <div className="flex gap-4">
          <a href="https://instagram.com" className="transition hover:text-sky-700">
            Instagram
          </a>
          <a href="https://linkedin.com" className="transition hover:text-sky-700">
            LinkedIn
          </a>
          <a href="https://x.com" className="transition hover:text-sky-700">
            X
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
