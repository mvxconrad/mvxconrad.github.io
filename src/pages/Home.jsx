import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row min-vh-100 align-items-center">
        <div className="col-lg-12 text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-3">
              <span className="neon-text">Hi, I'm </span>
              <span className="text-very-bright">Max Conrad</span>
            </h1>
          </motion.div>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="display-6 text-muted mb-4">
              Junior Cybersecurity Analyst & Software Developer
            </h2>
          </motion.div>

          {/* Animated description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-5"
          >
            <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'var(--text-bright)' }}>
              Learning to build <span className="neon-text">full-stack systems</span> and 
              exploring AI applications in cybersecurity and software engineering as a student developer.
            </p>
            <p className="mx-auto mt-3" style={{ maxWidth: '700px', color: 'var(--text-bright)' }}>
              Proven track record at <span className="neon-text">Amazon</span>, where I developed and optimized 
              backend microservices for <span className="neon-text">Alexa's internal APIs</span>, 
              delivering measurable improvements in performance and scalability.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="d-flex gap-3 justify-content-center flex-wrap"
          >
            <Link to="/projects" className="btn btn-success btn-lg px-4">
              <i className="bi bi-code-slash me-2"></i>
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline-success btn-lg px-4">
              <i className="bi bi-envelope me-2"></i>
              Get in Touch
            </Link>
            <a 
              href="/assets/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info btn-lg px-4"
            >
              <i className="bi bi-file-earmark-text me-2"></i>
              View Resume
            </a>
          </motion.div>

          {/* Animated tech highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-5"
          >
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {['Python', 'Java', 'C++', 'JavaScript', 'React', 'PostgreSQL', 'Docker', 'AWS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="badge bg-dark border border-success px-3 py-2"
                  style={{ fontSize: '1rem' }}
                  whileHover={{ scale: 1.1, borderColor: '#b026ff' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Current status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-5"
          >
            <div className="glass-card p-4 mx-auto" style={{ maxWidth: '600px' }}>
              <p className="mb-2" style={{ color: '#999' }}>
                <strong className="neon-text">Currently:</strong>
              </p>
              <p className="mb-0" style={{ color: 'var(--text-bright)' }}>
                Currently studying Cybersecurity & CS at Stetson University, expected to graduate in Spring 2026. Learning about 
                offensive & defensive security, web development, and AI applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home
