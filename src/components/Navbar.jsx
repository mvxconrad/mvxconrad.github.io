import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav 
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ 
        background: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 255, 65, 0.2)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* Brand/Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          <span className="neon-text">&lt;</span>
          Max Conrad
          <span className="neon-text">/&gt;</span>
        </Link>

        {/* Mobile toggle button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'neon-text' : ''}`
                } 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'neon-text' : ''}`
                } 
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'neon-text' : ''}`
                } 
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'neon-text' : ''}`
                } 
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
