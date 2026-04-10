function AboutSection() {
  const highlights = [
    'Discover curated tech, design, and startup events in one place.',
    'Register quickly through a clean controlled React form.',
    'Stay inspired by experiences designed for students and builders.',
  ]

  return (
    <section
      id="about"
      style={{ border: '1px solid black', margin: '12px', padding: '12px' }}
    >
      <div>
        <article style={{ border: '1px solid black', padding: '12px' }}>
          <p>About The Platform</p>
          <h2>One event space for learning, networking, and launching new ideas.</h2>
          <p>
            EventHub is a React-based event management website where users can
            explore upcoming experiences and register in seconds. The site is
            built around reusable components, dynamic JSX rendering, and a
            controlled form for smooth user input handling.
          </p>
        </article>

        <article
          style={{ border: '1px solid black', marginTop: '12px', padding: '12px' }}
        >
          <p>Why EventHub</p>
          <div>
            {highlights.map((highlight) => (
              <div
                key={highlight}
                style={{ border: '1px solid black', marginTop: '12px', padding: '12px' }}
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
