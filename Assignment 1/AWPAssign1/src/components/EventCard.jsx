function EventCard({ title, date, location, category, description }) {
  return (
    <article style={{ border: '1px solid black', marginTop: '12px', padding: '12px' }}>
      <div>
        <span>{category}</span>
        <p>{date}</p>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div style={{ borderTop: '1px solid black', marginTop: '12px', paddingTop: '12px' }}>
        <span>{location}</span>
        <p>
          <a href="#register">Register Now</a>
        </p>
      </div>
    </article>
  )
}

export default EventCard
