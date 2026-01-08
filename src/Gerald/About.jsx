import React from 'react'
import Gerald from '../assets/GeraldPic.jpg'

import './About.css'

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated student pursuing a dual-focused education in Business Administration and Information Technology. 
                My passion lies at the intersection of these two fields, where technical solutions meet business objectives.
              </p>
              <p>
                As a dedicated student of Business and Information Technology, I am committed to producing high-quality work while continuously expanding my knowledge and skills. 
                I am deeply driven by a passion for self-improvement and professional development. My primary interest lies in front-end development, with a strong foundation in HTML, CSS, JavaScript, and C/C++. 
                Beyond my technical pursuits, I also engage in painting and drawing during my leisure time—creative outlets that I believe enhance my problem-solving abilities and contribute to my overall creativity.
              </p>
              <p>
                With several Cisco certifications under my belt, I have developed a strong foundation in networking, cybersecurity, 
                and IT infrastructure. Combined with my business education, I can effectively translate technical capabilities 
                into strategic advantages for organizations.
              </p>
              <p>
                I am seeking opportunities where I can apply my unique skill set to solve complex business problems 
                through technology-driven solutions.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <img className='gerald-img' src={Gerald} alt="My Photo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About