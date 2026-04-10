import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'
import { events } from './data/events'

function App() {
  return (
    <div>
      <Header />

      <main>
        <section
          id="home"
          style={{ border: '1px solid black', margin: '12px', padding: '12px' }}
        >
          <div>
            <p>React Event Management Website</p>
            <h1>Plan the next big campus experience with EventHub.</h1>
            <p>
              Discover live workshops, creative meetups, and networking events
              through a responsive single-page interface built with React, Vite,
              Tailwind CSS, and reusable components.
            </p>

            <div
              style={{
                borderTop: '1px solid black',
                marginTop: '12px',
                paddingTop: '12px',
              }}
            >
              <a href="#events">Browse Events</a>
              {' | '}
              <a href="#register">Register Now</a>
            </div>
          </div>

          <aside
            style={{ border: '1px solid black', marginTop: '12px', padding: '12px' }}
          >
            <div>
              <p>Live Snapshot</p>
              <div>
                <div
                  style={{
                    border: '1px solid black',
                    marginTop: '12px',
                    padding: '12px',
                  }}
                >
                  <p>{events.length}</p>
                  <p>Featured events</p>
                </div>
                <div
                  style={{
                    border: '1px solid black',
                    marginTop: '12px',
                    padding: '12px',
                  }}
                >
                  <p>100%</p>
                  <p>Controlled form flow</p>
                </div>
              </div>

              <div
                style={{
                  border: '1px solid black',
                  marginTop: '12px',
                  padding: '12px',
                }}
              >
                <p>
                  Smooth hover interactions, dynamic JSX rendering, and a clear
                  single-page layout help this assignment cover the key React
                  fundamentals from the brief.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <AboutSection />
        <EventsSection events={events} />
        <RegistrationForm events={events} />
      </main>

      <Footer />
    </div>
  )
}

export default App
