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
    <section
      id="register"
      style={{ border: '1px solid black', margin: '12px', padding: '12px' }}
    >
      <div>
        <article style={{ border: '1px solid black', padding: '12px' }}>
          <p>Registration</p>
          <h2>Reserve your seat.</h2>
          <p>
            This controlled form uses <code>useState</code>, one input handler,
            and submit handling to capture the user&apos;s registration details.
          </p>

          {submittedData ? (
            <div
              style={{ border: '1px solid black', marginTop: '12px', padding: '12px' }}
            >
              <p>Latest Submission</p>
              <p>
                {submittedData.name} registered with {submittedData.email} for{' '}
                {submittedData.selectedEvent}.
              </p>
            </div>
          ) : null}
        </article>

        <form
          onSubmit={handleSubmit}
          style={{ border: '1px solid black', marginTop: '12px', padding: '12px' }}
        >
          <div>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                style={{
                  display: 'block',
                  border: '1px solid black',
                  marginTop: '8px',
                  marginBottom: '12px',
                }}
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                style={{
                  display: 'block',
                  border: '1px solid black',
                  marginTop: '8px',
                  marginBottom: '12px',
                }}
              />
            </label>

            <label>
              Select Event
              <select
                name="selectedEvent"
                value={formData.selectedEvent}
                onChange={handleChange}
                required
                style={{
                  display: 'block',
                  border: '1px solid black',
                  marginTop: '8px',
                  marginBottom: '12px',
                }}
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
              style={{ border: '1px solid black' }}
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
