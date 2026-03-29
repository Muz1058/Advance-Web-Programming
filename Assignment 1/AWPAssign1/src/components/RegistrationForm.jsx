import { useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  selectedEvent: '',
}

function RegistrationForm({ events }) {
  const [formData, setFormData] = useState(initialFormState)
  const [submittedData, setSubmittedData] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    setSubmittedData(formData)
    console.log('Registration submitted:', formData)
    setFormData(initialFormState)
  }

  return (
    <section id="register" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            Registration
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
            Reserve your seat.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This controlled form uses <code>useState</code>, one input handler,
            and submit handling to capture the user&apos;s registration details.
          </p>

          {submittedData ? (
            <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-slate-700">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Latest Submission
              </p>
              <p className="mt-3 text-base">
                {submittedData.name} registered with {submittedData.email} for{' '}
                {submittedData.selectedEvent}.
              </p>
            </div>
          ) : null}
        </article>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Select Event
              <select
                name="selectedEvent"
                value={formData.selectedEvent}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
              >
                <option value="">Choose an event</option>
                {events.map((event) => (
                  <option key={event.id} value={event.title}>
                    {event.title}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-sky-700 px-5 py-3 text-base font-bold text-white transition hover:bg-sky-800"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegistrationForm
