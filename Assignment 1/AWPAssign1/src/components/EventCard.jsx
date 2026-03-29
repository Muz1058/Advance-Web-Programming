function EventCard({ title, date, location, category, description }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
          {category}
        </span>
        <span className="text-sm font-medium text-slate-500">{date}</span>
      </div>

      <h3 className="mt-5 text-2xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5 text-sm text-slate-600">
        <span>{location}</span>
        <a
          href="#register"
          className="font-bold text-sky-700 transition hover:text-sky-800"
        >
          Register Now
        </a>
      </div>
    </article>
  )
}

export default EventCard
