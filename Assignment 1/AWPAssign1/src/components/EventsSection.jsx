import EventCard from './EventCard'

function EventsSection({ events }) {
  return (
    <section
      id="events"
      style={{ border: '1px solid black', margin: '12px', padding: '12px' }}
    >
      <div style={{ borderBottom: '1px solid black', paddingBottom: '12px' }}>
        <div>
          <p>Upcoming Events</p>
          <h2>Explore what&apos;s next.</h2>
        </div>
        <p>
          Each card is rendered from an array of event objects and passed into a
          reusable component through props.
        </p>
      </div>

      <div>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  )
}

export default EventsSection
