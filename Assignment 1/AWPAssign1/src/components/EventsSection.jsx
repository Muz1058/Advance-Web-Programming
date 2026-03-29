import EventCard from './EventCard'

function EventsSection({ events }) {
  return (
    <section id="events" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            Upcoming Events
          </p>
          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
            Explore what&apos;s next.
          </h2>
        </div>
        <p className="max-w-xl text-slate-600">
          Each card is rendered from an array of event objects and passed into a
          reusable component through props.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  )
}

export default EventsSection
