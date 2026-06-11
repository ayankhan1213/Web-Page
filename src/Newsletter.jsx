import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <div className="newsletter-text">
          <h2 className="newsletter-heading">STAY AHEAD</h2>
          <p className="newsletter-sub">GET EXCLUSIVE UPDATES ON BYD</p>
        </div>

        <div className="newsletter-form">
          {submitted ? (
            <p className="newsletter-thanks">Thank you for subscribing!</p>
          ) : (
            <>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
              <button className="newsletter-btn" onClick={handleSubmit}>
                SUBSCRIBE
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
