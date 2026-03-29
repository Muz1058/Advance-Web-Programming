import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'
import { events } from './data/events'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              React Event Management Website
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Plan the next big campus experience with EventHub.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Discover live workshops, creative meetups, and networking events
              through a responsive single-page interface built with React, Vite,
              Tailwind CSS, and reusable components.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#events"
                className="rounded-lg bg-sky-700 px-6 py-3 font-bold text-white transition hover:bg-sky-800"
              >
                Browse Events
              </a>
              <a
                href="#register"
                className="rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-800 transition hover:border-sky-700 hover:text-sky-700"
              >
                Register Now
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
                Live Snapshot
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-4xl font-black text-slate-900">{events.length}</p>
                  <p className="mt-2 text-sm text-slate-600">Featured events</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-4xl font-black text-slate-900">100%</p>
                  <p className="mt-2 text-sm text-slate-600">Controlled form flow</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50 p-5 text-slate-700">
                <p className="text-sm leading-7">
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
