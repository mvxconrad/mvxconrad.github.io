import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer 
      className="py-4 mt-5 text-center"
      style={{ 
        background: 'rgba(10, 14, 39, 0.95)',
        borderTop: '1px solid rgba(0, 255, 65, 0.2)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Social links */}
            <div className="mb-3">
              <a 
                href="https://github.com/mvxconrad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-very-bright mx-3"
                style={{ fontSize: '1.5rem' }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/maxwell-conrad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-very-bright mx-3"
                style={{ fontSize: '1.5rem' }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="mailto:mvxconrad@gmail.com"
                className="text-very-bright mx-3"
                style={{ fontSize: '1.5rem' }}
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-very-bright mb-0">
              © 2025 Max Conrad · Crafted with React, fueled by caffeine.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
