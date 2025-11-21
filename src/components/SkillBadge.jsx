import { motion } from 'framer-motion'

function SkillBadge({ skill, icon, delay = 0 }) {
  return (
    <motion.div
      className="skill-badge"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
    >
      {icon && <i className={`bi bi-${icon} me-2`}></i>}
      {skill}
    </motion.div>
  )
}

export default SkillBadge
