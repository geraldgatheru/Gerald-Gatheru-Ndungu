import React from 'react'

import './Footer.css'


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gerald Gatheru Ndung'u. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer