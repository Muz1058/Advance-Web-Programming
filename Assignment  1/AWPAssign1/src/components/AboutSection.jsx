function AboutSection() {
  const highlights = [
    'Discover curated tech, design, and startup events in one place.',
    'Register quickly through a clean controlled React form.',
    'Stay inspired by experiences designed for students and builders.',
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            About The Platform
          </p>
          <h2 className="max-w-xl text-4xl font-black text-slate-900 sm:text-5xl">
            One event space for learning, networking, and launching new ideas.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            EventHub is a React-based event management website where users can
            explore upcoming experiences and register in seconds. The site is
            built around reusable components, dynamic JSX rendering, and a
            controlled form for smooth user input handling.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            Why EventHub
          </p>
          <div className="mt-6 space-y-4">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700"
              >
                {highlight}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
