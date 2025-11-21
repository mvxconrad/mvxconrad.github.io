import { motion } from 'framer-motion'
import SkillBadge from '../components/SkillBadge'
import headshot from '../../assets/headshot.jpg'


function About() {
  // Skills from resume - exact match
  const skills = {
    'Programming Languages': ['Java', 'Python', 'C++', 'JavaScript', 'Bash', 'PowerShell', 'SQL'],
    'Web Development': ['React', 'Bootstrap', 'Vite', 'FastAPI', 'Node.js', 'REST', 'RPC', 'WebSockets'],
    'Security & Auth': ['JWT', 'OAuth 2.0', 'Burp Suite', 'Nmap', 'Wireshark', 'OWASP', 'Suricata IDS'],
    'Cloud & DevOps': ['AWS (EC2, RDS, IAM, Lambda, S3)', 'Docker', 'Linux', 'NGINX', 'CI/CD', 'Git/GitHub'],
    'Databases & AI': ['PostgreSQL', 'SQLite', 'Vector Databases', 'GPT APIs', 'LLM Agents'],
    'Networking': ['Network Protocols', 'TCP/IP', 'Suricata', 'Network Security']
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
          About <span className="neon-text">Me</span>
        </h1>
      </motion.div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Bio section with headshot */}
          <motion.div
            className="glass-card p-5 mb-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="row align-items-center">
              <div className="col-md-4 text-center mb-4 mb-md-0">
                <motion.img 
                  src={headshot} 
                  alt="Max Conrad" 
                  className="img-fluid rounded-circle"
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    border: '3px solid var(--neon-green)',
                    boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="col-md-8">
                <h3 className="neon-text mb-4">
                  Who I Am
                </h3>
                <p className="lead mb-3" style={{ color: 'var(--text-very-bright)' }}>
                  Full-stack software engineer with hands-on experience at Amazon and a 
                  background in cybersecurity. U.S. Marine Corps veteran with proven leadership, 
                  discipline, and a strong problem-solving mindset.
                </p>
                <p className="mb-3" style={{ color: 'var(--text-very-bright)' }}>
                  Currently working on <span className="neon-text-blue">Blue</span> and <span className="neon-text-red">Red</span> team <span className="neon-text">AI-augmented security tools</span> for 
                  my senior research proposal. Skilled at programming in Java, Python, React, and C++ with a vast experience in AWS. Proven ability to build secure, scalable systems. From 
                  <span className="neon-text"> Amazon Alexa microservices</span> to AI-powered security analysis.
                </p>
                <p className="mb-0" style={{ color: 'var(--text-very-bright)' }}>
                  Experience serving on diverse corporate teams and collaborating with colleagues from 
                  different departments to achieve shared goals and create innovative solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills section */}
          <motion.div
            className="glass-card p-5 mb-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="neon-text mb-4">
              <i className="bi bi-laptop me-3"></i>
              Technical Skills
            </h3>

            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className="mb-4">
                <h5 className="text-glow-white mb-3">{category}</h5>
                <div className="d-flex flex-wrap">
                  {skillList.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      delay={0.6 + (categoryIndex * 0.1) + (skillIndex * 0.05)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            className="glass-card p-5 mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="neon-text mb-4">
              <i className="bi bi-mortarboard me-3"></i>
              Education
            </h3>

            <div className="mb-4">
              <h5 className="text-glow-white">Stetson University</h5>
              <p className="text-very-bright mb-2">B.S. Computer Science & Cybersecurity | Expected Spring 2026</p>
              <p className="text-very-bright mb-0">
                Dean's List | Focus on offensive security, AI applications in cybersecurity, 
                and full-stack development
              </p>
            </div>

            <h3 className="neon-text mb-4 mt-5">
              <i className="bi bi-briefcase me-3"></i>
              Work Experience
            </h3>

            <div className="mb-4">
              <h5 className="text-glow-white">Software Development Engineer Intern</h5>
              <p className="text-very-bright mb-2">Amazon, Bellevue, WA | May 2025 - Aug 2025</p>
              <ul className="text-very-bright">
                <li>Developed and maintained Java-based microservices for Alexa's internal APIs, ensuring high performance and reliability at scale</li>
                <li>Optimized backend architecture to deliver an mesurable reduction in network traffic and decrease in service latency</li>
                <li>Improved system efficiency and responsiveness for millions of Alexa users</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="text-glow-white">IT Support Technician</h5>
              <p className="text-very-bright mb-2">Stetson University, DeLand, FL | Sep 2024 - Present</p>
              <ul className="text-very-bright">
                <li>Resolved hardware and software issues for over 300 students and faculty, achieving a 95% satisfaction rate</li>
                <li>Documented support processes to streamline onboarding for new team members</li>
                <li>Provided technical support across Windows, macOS, and Linux environments</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="text-glow-white">Marine Corps Reservist</h5>
              <p className="text-very-bright mb-2">U.S. Marine Corps | Aug 2021 - Apr 2025</p>
              <ul className="text-very-bright">
                <li>Led operations for moving equipment and personnel under tight timelines and high stress</li>
                <li>Coordinated team communications and decision-making dashboards, minimizing errors in supply workflows</li>
                <li>Used time-management and teamwork skills crucial for fast-paced engineering environments</li>
              </ul>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            className="glass-card p-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="neon-text mb-4">
              <i className="bi bi-heart me-3"></i>
              Interests & Hobbies
            </h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-shield-lock neon-text me-2" style={{ fontSize: '1.5rem' }}></i>
                  <h5 className="text-glow-white mb-0">Capture The Flag (CTF)</h5>
                </div>
                <p className="text-muted">
                  Competing in cybersecurity challenges and writing detailed writeups
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-cpu neon-text me-2" style={{ fontSize: '1.5rem' }}></i>
                  <h5 className="text-glow-white mb-0">AI Research</h5>
                </div>
                <p className="text-muted">
                  Exploring LLMs, prompt engineering, and AI security implications
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-code-square neon-text me-2" style={{ fontSize: '1.5rem' }}></i>
                  <h5 className="text-glow-white mb-0">Open Source</h5>
                </div>
                <p className="text-muted">
                  Contributing to security tools and developer utilities
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-book neon-text me-2" style={{ fontSize: '1.5rem' }}></i>
                  <h5 className="text-glow-white mb-0">Continuous Learning</h5>
                </div>
                <p className="text-muted">
                  Always exploring new technologies and security methodologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
