import React , { useState , useRef} from 'react'
import Resume from '../assets/Gerald_Gatheru_Ndungu_Resume.pdf'
import emailjs, { send } from '@emailjs/browser';

import './Contact.css'

const Contact = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    emailjs.sendForm('service_7q4oc88', 'template_qgvdb9h', form.current, {
        publicKey: 'K9AmlxDnNEANACyeg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }


  
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Feel free to reach out for opportunities, collaborations, or just to say hello!</p>
              <div className="contact-details">
                <p><strong>Email:</strong> ndungug200@gmail.com</p>
                <p><strong>Phone:</strong> 0758719191</p>
                <p><strong>Location:</strong> Nairobi, Kenya</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/gerald-ndung-u-7a1391192/" target='blank' rel='noopener noreferrer' className="social-link">LinkedIn</a>
                <a href="https://github.com/geraldgatheru" target='blank' rel='noopener noreferrer' className="social-link">GitHub</a>
                <a href={Resume} download={Resume}  className="social-link">Resume</a>
              </div>
            </div>

            
            <form ref={form} onSubmit={handleSubmit} className="contact-form" >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder='Enter Name'
                  id='name'
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange (e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder='Enter Email'
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange (e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder='Enter Message'
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={(e) => handleChange (e)}
                  required
                ></textarea>
              </div>
              <button type="submit" value="send" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact