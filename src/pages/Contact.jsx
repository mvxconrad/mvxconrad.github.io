import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    // EmailJS configuration
    const serviceID = 'service_pjut4rl'
    const templateID = 'template_uq5tnhy'
    const publicKey = 'fbYLazhPlim6K3H0c'

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message
    }, publicKey)
      .then(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try emailing me directly.'
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="container py-5">
      {/* Page header */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="display-4 fw-bold mb-3">
          Get In <span className="neon-text">Touch</span>
        </h1>
        <p className="lead text-very-bright">
          Email me to collaborate on a project or just to chat
        </p>
      </motion.div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row">
            {/* Contact form */}
            <div className="col-md-7 mb-4">
              <motion.div
                className="glass-card p-5"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="neon-text mb-4">
                  <i className="bi bi-envelope-at me-3"></i>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-very-bright">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-success"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-very-bright">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control bg-dark text-light border-success"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-very-bright">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-success"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-very-bright">
                      Message
                    </label>
                    <textarea
                      className="form-control bg-dark text-light border-success"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-outline-light w-100" 
                    disabled={isSubmitting}
                    style={{ 
                      borderColor: '#ffffff', 
                      color: '#ffffff',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.borderColor = '#00ff41';
                        e.currentTarget.style.color = '#00ff41';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.4)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#ffffff';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = '';
                      e.currentTarget.style.transform = '';
                    }}
                  >
                    <i className="bi bi-send me-2"></i>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus.message && (
                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3 mb-0`}>
                      <i className={`bi ${submitStatus.type === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-2`}></i>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* Contact info & social links */}
            <div className="col-md-5 mb-4">
              <motion.div
                className="glass-card p-5 mb-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="neon-text mb-4">
                  <i className="bi bi-person-lines-fill me-3"></i>
                  Contact Info
                </h3>

                <div className="mb-4">
                  <h5 className="text-very-bright mb-3">
                    <i className="bi bi-envelope neon-text me-2"></i>
                    Email
                  </h5>
                  <a 
                    href="mailto:mvxconrad@gmail.com"
                    className="text-very-bright text-decoration-none"
                  >
                    mvxconrad@gmail.com
                  </a>
                </div>

                <div className="mb-4">
                  <h5 className="text-very-bright mb-3">
                    <i className="bi bi-geo-alt neon-text me-2"></i>
                    Location
                  </h5>
                  <p className="text-very-bright mb-0">
                    Greater Orlando Area, FL.
                  </p>
                </div>

                <div>
                  <h5 className="text-very-bright mb-3">
                    <i className="bi bi-clock neon-text me-2"></i>
                    Response Time
                  </h5>
                  <p className="text-very-bright mb-0">
                    Usually within 24-48 hours
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-5"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="neon-text mb-4">
                  <i className="bi bi-share me-3"></i>
                  Connect Online
                </h3>

                <div className="d-grid gap-3">
                  <a
                    href="https://github.com/mvxconrad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light d-flex align-items-center justify-content-start"
                    style={{ borderColor: '#ffffff', color: '#ffffff' }}
                  >
                    <i className="bi bi-github me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div className="text-start">
                      <div className="fw-bold">GitHub</div>
                      <small className="text-very-bright">@mvxconrad</small>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/maxwell-conrad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light d-flex align-items-center justify-content-start"
                    style={{ borderColor: '#ffffff', color: '#ffffff' }}
                  >
                    <i className="bi bi-linkedin me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div className="text-start">
                      <div className="fw-bold">LinkedIn</div>
                      <small className="text-very-bright">Maxwell Conrad</small>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
