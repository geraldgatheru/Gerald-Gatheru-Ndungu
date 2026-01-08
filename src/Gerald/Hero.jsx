import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Bridging Business Strategy with Technical Expertise</h2>
            <p>Dual-focused student specializing in business administration and information technology with Cisco certifications</p>
            <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero