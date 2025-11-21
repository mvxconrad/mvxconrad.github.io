import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  // Actual projects from resume
  const projects = [
    {
      title: 'AI-Augmented Security Analysis Pipeline',
      description: 'An AI-augmented web security assessment tool built for my CSEC 498 senior research project. It uses Playwright to collect real browser evidence, resolves vulnerabilities through OSV/GHSA/NVD/KEV, and runs a four-agent LLM pipeline (local models via Ollama) for evidence analysis, vulnerability reasoning, false-positive validation, and executive reporting.',
      techStack: [
        "Python",
        "Ollama",
        "Playwright",
        "Docker",
        "SQLite",
        "OSV.dev API",
        "GitHub Security Advisories (GHSA)",
],
      githubLink: 'https://github.com/mvxconrad',
      liveLink: null
    },
    {
      title: 'AI-Sec-Monitor',
      description: 'AI-augmented security monitoring system built for a simulated multi-zone campus network. Includes Suricata IDS, an intentionally vulnerable DVWA web server, and automated attack simulations to generate real intrusion alerts. The system collects and exports Suricata logs for analysis, validation, and future AI-based alert summarization and incident triage.',
      techStack: [
      "Docker",
      "Suricata IDS",
      "Python (Attack Automation)",
      "Ubuntu",
      "Grafana/OpenSearch",
      "IsolationForest",
      "LangGraph",
      "Networking & IDS Tooling"
],
      githubLink: 'https://github.com/mvxconrad',
      liveLink: null
    },
    {
      title: 'ForgePrep AI Study Platform',
      description: 'Full-stack AI study platform that generates practice tests from uploaded study materials. Built with React (Vite), FastAPI, PostgreSQL (Amazon RDS), and GPT APIs, the system supports file uploads, text extraction, AI-generated questions, OAuth authentication, and a dashboard for managing study content and practice tests.',
      techStack: [
      "React (Vite)",
      "FastAPI",
      "Python",
      "PostgreSQL (RDS)",
      "Tailwind CSS",
      "OpenAI GPT-4",
      "OAuth 2.0 / JWT",
],
      githubLink: 'https://github.com/mvxconrad/ForgePrep',
      liveLink: null
    }
  ]

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
          My <span className="neon-text">Projects</span>
        </h1>
        <p className="lead text-muted">
          A collection of cybersecurity tools, full-stack applications, and automation projects
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        className="text-center mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-muted">
          Want to collaborate or learn more?
        </p>
        <a 
          href="mailto:mvxconrad@gmail.com"
          className="btn btn-outline-success btn-lg"
        >
          <i className="bi bi-envelope me-2"></i>
          Get in Touch
        </a>
      </motion.div>
    </div>
  )
}

export default Projects
