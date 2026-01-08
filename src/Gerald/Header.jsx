import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Gerald Gatheru Ndung'u</h1>
          <p>Business and Information Technology Student</p>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              {/*<li><a href="#skills">Skills</a></li>*/}
              <li><a href="#certifications">Certifications</a></li>
              {/*<li><a href="#projects">Projects</a></li>*/}
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header