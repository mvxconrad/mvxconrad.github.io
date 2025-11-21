import { motion } from 'framer-motion'

function ProjectCard({ title, description, techStack, githubLink, liveLink, delay = 0 }) {
  return (
    <motion.div
      className="col-md-6 col-lg-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="card glass-card h-100 p-4">
        <div className="card-body d-flex flex-column">
          {/* Project title */}
          <h4 className="card-title neon-text mb-3">{title}</h4>
          
          {/* Project description */}
          <p className="card-text mb-3 flex-grow-1" style={{ color: 'var(--text-very-bright)' }}>
            {description}
          </p>
          
          {/* Tech stack badges */}
          <div className="mb-3">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="badge bg-dark border border-success me-2 mb-2"
                style={{ fontSize: '0.8rem' }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="d-flex gap-2">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success btn-sm flex-grow-1"
              >
                <i className="bi bi-github me-2"></i>
                Code
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-sm flex-grow-1"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
