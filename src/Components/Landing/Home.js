import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css' // optional external stylesheet

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1>Welcome to My App</h1>
        <p>Your journey starts here. Simple, fast, and elegant.</p>
        <Link to="/login">
          <button className="cta-button">Get Started</button>
        </Link>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>🚀 Fast</h2>
          <p>Optimized performance for a smooth experience.</p>
        </div>
        <div className="feature-card">
          <h2>🎨 Beautiful</h2>
          <p>Modern design that feels fresh and engaging.</p>
        </div>
        <div className="feature-card">
          <h2>🔒 Secure</h2>
          <p>Your data is safe with industry‑standard protection.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 My App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
