import React from 'react'

import './Certifications.css'


  const certifications = [
    {
      title: 'Digital Awareness',
      issuer: 'Cisco',
      date: '2025',
      description: 'Certified in Digital Awareness, equipped with the knowledge to navigate the modern online environment, focusing on the strategic use of digital tools, understanding user behavior, and the principles of online branding and reputation management. This competence allows for informed decision-making in digital strategy and communication.'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: '2025',
      description: 'Certified in the fundamentals of Cybersecurity, providing competence in the essential concepts of digital defense. I possess a working knowledge of major cyber threats (e.g., malware, phishing), cryptography, and the tools/techniques required to safeguard personal and organizational assets, enabling a security-first approach to IT and business operations.'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Cisco',
      date: '2024',
      description: 'Certified in Data Science fundamentals, proficient in using analytical tools and programming languages (e.g., Python/R) to mine data and build predictive models. Possess the ability to translate complex data findings into clear, strategic narratives for stakeholders, enabling organizations to leverage data for competitive advantage and performance optimization.'
    }
  ];

  const handleCertVerification = () => {
    window.open('https://www.credly.com/users/gerald-ndung-u/badges#credly', '_blank');
  }
 
const Certifications = () => {
  return (
    <div>
      <section id="certifications" className="certifications">
        <div className="container">
          <h2>Cisco Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <h3> <button onClick={handleCertVerification}> {cert.title} </button> </h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications