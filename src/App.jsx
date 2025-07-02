"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("whoami")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case "whoami":
        return <WhoAmI />
      case "certs":
        return <Certifications />
      case "projects":
        return <Projects />
      default:
        return <WhoAmI />
    }
  }

  return (
    <div className="terminal-container">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="control-buttons">
            <span className="control-btn red"></span>
            <span className="control-btn yellow"></span>
            <span className="control-btn green"></span>
          </div>
          <span className="terminal-title">
            <span className="mobile-hidden">f6Lcon@archlinux:~$ ./portfolio --mode=professional</span>
            <span className="mobile-only">f6Lcon@arch:~$</span>
          </span>
        </div>
        <div className="status-indicators">
          <span className="status-item">🔒 VPN</span>
          <span className="status-item mobile-hidden">🌐 TOR</span>
          <span className="status-item mobile-hidden">👤 STEALTH</span>
          <span className="status-ready">⚡ READY</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>

      {/* Main Terminal Body */}
      <div className="terminal-body">
        {/* Sidebar Navigation */}
        <div className={`terminal-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-header">
            <span className="sidebar-title">📁 navigation.terminal</span>
            <button className="mobile-close-btn" onClick={() => setSidebarOpen(false)}>
              ✕
            </button>
          </div>

          {/* Arch Linux Logo & Profile */}
          <div className="profile-section">
            <div className="arch-logo">
              <pre className="arch-ascii">
                {`      /\\
     /  \\
    /\\   \\
   /      \\
  /   ,,   \\
 /   |  |  -\\
/_-''    ''-_\\`}
              </pre>
              <div className="os-info">
                <div className="os-name">Arch Linux</div>
                <div className="kernel-info">Linux 6.6.8-arch1</div>
              </div>
            </div>

            <pre className="ascii-art">
              {`███████╗ ██████╗ ██╗      ██████╗ ██████╗ ███╗   ██╗
██╔════╝██╔════╝ ██║     ██╔════╝██╔═══██╗████╗  ██║
█████╗  ███████╗ ██║     ██║     ██║   ██║██╔██╗ ██║
██╔══╝  ██╔═══██╗██║     ██║     ██║   ██║██║╚██╗██║
██║     ╚██████╔╝███████╗╚██████╗╚██████╔╝██║ ╚████║
╚═╝      ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝
        CYBERSECURITY SPECIALIST`}
            </pre>
            <div className="status-info">
              <div>
                STATUS: <span className="online">ONLINE</span>
              </div>
              <div>
                MODE: <span className="operational">OPERATIONAL</span>
              </div>
              <div>
                ROLE: <span className="operational">PENTESTER</span>
              </div>
            </div>
          </div>

          {/* Command Prompt */}
          <div className="command-prompt">
            <div className="prompt-line">f6Lcon@archlinux:~$ ls -la</div>
          </div>

          {/* Navigation Commands */}
          <div className="nav-commands">
            <button
              className={`nav-cmd ${activeSection === "whoami" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("whoami")
                setSidebarOpen(false)
              }}
            >
              <span className="cmd-icon">📄</span>
              <div className="cmd-info">
                <div className="cmd-name">./whoami.sh</div>
                <div className="cmd-desc"># profile info</div>
              </div>
            </button>

            <button
              className={`nav-cmd ${activeSection === "certs" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("certs")
                setSidebarOpen(false)
              }}
            >
              <span className="cmd-icon">🏆</span>
              <div className="cmd-info">
                <div className="cmd-name">./list_certs.py</div>
                <div className="cmd-desc"># certifications</div>
              </div>
            </button>

            <button
              className={`nav-cmd ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("projects")
                setSidebarOpen(false)
              }}
            >
              <span className="cmd-icon">📁</span>
              <div className="cmd-info">
                <div className="cmd-name">./show_projects.sh</div>
                <div className="cmd-desc"># portfolio</div>
              </div>
            </button>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <div className="skills-title">SKILLS LOADED:</div>
            <div className="skills-tags">
              <span className="skill-tag">OSINT</span>
              <span className="skill-tag">PENTEST</span>
              <span className="skill-tag">EXPLOIT</span>
              <span className="skill-tag">SOCIAL-ENG</span>
            </div>
          </div>
        </div>

        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

        {/* Main Content Area */}
        <div className="terminal-main">
          <div className="main-header">
            <div className="main-controls">
              <span className="main-title">📟 terminal.sh</span>
            </div>
            <div className="window-controls">
              <span className="control-btn red"></span>
              <span className="control-btn yellow"></span>
              <span className="control-btn green"></span>
            </div>
          </div>

          <div className="main-content">
            {renderContent()}

            {/* Terminal Cursor */}
            <div className="terminal-cursor">
              <span>f6Lcon@archlinux:~$ </span>
              <span className="cursor-blink">█</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="terminal-footer">
        <span className="footer-left">
          <span className="mobile-hidden">[SYSTEM] Arch Linux Terminal v2.1.0 | Status: OPERATIONAL</span>
          <span className="mobile-only">[ARCH] OPERATIONAL</span>
        </span>
        <span className="footer-right">
          <span className="mobile-hidden">
            {currentTime.toLocaleTimeString()} | {currentTime.toLocaleDateString()}
          </span>
          <span className="mobile-only">{currentTime.toLocaleTimeString()}</span>
        </span>
      </div>
    </div>
  )
}

// Content Components
function WhoAmI() {
  return (
    <div className="content-section">
      <div className="command-output">f6Lcon@archlinux:~$ ./whoami.sh</div>
      <div className="executing">Executing whoami.sh...</div>

      <div className="info-block">
        <div className="info-title">[INFO] User profile loaded successfully</div>
        <div className="user-info">
          <div>USER_ID: f6Lcon</div>
          <div>HOSTNAME: archlinux</div>
          <div>ROLE: Cybersecurity Specialist & Software Engineer</div>
          <div>SPECIALIZATION: Penetration Testing & Full-Stack Development</div>
          <div>STATUS: Active Security Researcher</div>
          <div>OS: Arch Linux (btw I use Arch)</div>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">[EXEC] cat about.txt</div>
        <div className="about-text">
          Passionate cybersecurity professional and software engineer with expertise in ethical hacking, penetration
          testing, and full-stack development. Dedicated to identifying vulnerabilities and strengthening digital
          defenses through comprehensive security assessments. Experienced in web application security, network
          penetration testing, and modern software development practices. Running on Arch Linux for maximum
          customization and control.
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">[EXEC] ./skill_assessment.sh --verbose</div>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-title">PENETRATION_TESTING:</div>
            <div className="skill-item">
              Web_Application_Security: <span className="skill-level">92%</span>
            </div>
            <div className="skill-item">
              Network_Penetration: <span className="skill-level">88%</span>
            </div>
            <div className="skill-item">
              Vulnerability_Assessment: <span className="skill-level">90%</span>
            </div>
            <div className="skill-item">
              Security_Auditing: <span className="skill-level">85%</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-title">SOFTWARE_DEVELOPMENT:</div>
            <div className="skill-item">
              JavaScript_Development: <span className="skill-level">91%</span>
            </div>
            <div className="skill-item">
              Python_Programming: <span className="skill-level">89%</span>
            </div>
            <div className="skill-item">
              C_Programming: <span className="skill-level">82%</span>
            </div>
            <div className="skill-item">
              Bash_Scripting: <span className="skill-level">87%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">[EXEC] pacman -Q | grep -E "(security|dev)"</div>
        <div className="tools-grid">
          <div className="tool-category">
            <div className="category-title">SECURITY_ARSENAL:</div>
            <div className="tool-list">
              <div className="tool-item">• Burp Suite Professional</div>
              <div className="tool-item">• Metasploit Framework</div>
              <div className="tool-item">• Nmap Network Scanner</div>
              <div className="tool-item">• Wireshark Protocol Analyzer</div>
              <div className="tool-item">• OWASP ZAP</div>
              <div className="tool-item">• BlackArch Repository</div>
            </div>
          </div>
          <div className="tool-category">
            <div className="category-title">DEVELOPMENT_STACK:</div>
            <div className="tool-list">
              <div className="tool-item">• JavaScript (Node.js, React)</div>
              <div className="tool-item">• Python (Django, Flask)</div>
              <div className="tool-item">• C (System Programming)</div>
              <div className="tool-item">• Bash (Automation Scripts)</div>
              <div className="tool-item">• Git Version Control</div>
              <div className="tool-item">• Docker Containerization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Certifications() {
  return (
    <div className="content-section">
      <div className="command-output">f6Lcon@archlinux:~$ ./list_certs.py</div>
      <div className="executing">Loading certification database...</div>

      <div className="cert-item">
        <div className="cert-header">
          <span className="cert-name">🎓 ALX Software Engineering Program</span>
          <span className="cert-status active">ACTIVE</span>
        </div>
        <div className="cert-details">
          <div>ISSUER: African Leadership Experience (ALX)</div>
          <div>DATE: 2023-2025</div>
          <div>ID: https://intranet.alxswe.com/certificates/ES93rHnCf</div>
          <div>
            DIFFICULTY: <span className="advanced">ADVANCED</span>
          </div>
          <div className="cert-description">
            Comprehensive 12-month software engineering program covering full-stack development, system design,
            algorithms, and professional software development practices.
          </div>
        </div>
      </div>

      <div className="cert-item">
        <div className="cert-header">
          <span className="cert-name">🛡️ OSCP - Offensive Security Certified Professional</span>
          <span className="cert-status active">ACTIVE</span>
        </div>
        <div className="cert-details">
          <div>ISSUER: Offensive Security</div>
          <div>DATE: 2023</div>
          <div>ID: OS-101337</div>
          <div>
            DIFFICULTY: <span className="expert">EXPERT</span>
          </div>
          <div className="cert-description">
            24-hour hands-on penetration testing certification requiring practical exploitation of multiple systems in a
            controlled environment.
          </div>
        </div>
      </div>

      <div className="cert-item">
        <div className="cert-header">
          <span className="cert-name">🔒 CEH - Certified Ethical Hacker</span>
          <span className="cert-status active">ACTIVE</span>
        </div>
        <div className="cert-details">
          <div>ISSUER: EC-Council</div>
          <div>DATE: 2022</div>
          <div>ID: ECC-CEH-2022</div>
          <div>
            DIFFICULTY: <span className="intermediate">INTERMEDIATE</span>
          </div>
          <div className="cert-description">
            Comprehensive ethical hacking certification covering penetration testing methodologies, tools, and
            techniques used by security professionals.
          </div>
        </div>
      </div>

      <div className="cert-item">
        <div className="cert-header">
          <span className="cert-name">⚔️ GPEN - GIAC Penetration Tester</span>
          <span className="cert-status active">ACTIVE</span>
        </div>
        <div className="cert-details">
          <div>ISSUER: SANS Institute</div>
          <div>DATE: 2023</div>
          <div>ID: GIAC-GPEN-2023</div>
          <div>
            DIFFICULTY: <span className="advanced">ADVANCED</span>
          </div>
          <div className="cert-description">
            Hands-on penetration testing certification focusing on practical skills and real-world attack scenarios
            against modern systems.
          </div>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">[EXEC] python3 cert_stats.py --summary</div>
        <div className="cert-stats">
          <div className="stat-item">
            <span className="stat-label">TOTAL_CERTIFICATIONS:</span>
            <span className="stat-value">4</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">EXPERT_LEVEL:</span>
            <span className="stat-value">1</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">ADVANCED_LEVEL:</span>
            <span className="stat-value">2</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">ACTIVE_STATUS:</span>
            <span className="stat-value">4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="content-section">
      <div className="command-output">f6Lcon@archlinux:~$ ./show_projects.sh</div>
      <div className="executing">Loading project repository...</div>

      <div className="project-item">
        <div className="project-header">
          <span className="project-name">🔍 Advanced_Web_Scanner</span>
          <span className="project-status active">ACTIVE</span>
        </div>
        <div className="project-desc">Custom vulnerability scanner for web applications</div>
        <div className="project-tech">Python | JavaScript | Bash</div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <span className="project-name">🎣 Corporate_Phishing_Framework</span>
          <span className="project-status classified">CLASSIFIED</span>
        </div>
        <div className="project-desc">Social engineering framework for authorized testing</div>
        <div className="project-tech">Python | JavaScript | C</div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <span className="project-name">🌐 Network_Enumeration_Suite</span>
          <span className="project-status active">ACTIVE</span>
        </div>
        <div className="project-desc">Comprehensive network discovery toolkit</div>
        <div className="project-tech">C | Python | Bash</div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <span className="project-name">💻 Full-Stack_Security_Dashboard</span>
          <span className="project-status active">ACTIVE</span>
        </div>
        <div className="project-desc">Real-time security monitoring dashboard with modern UI</div>
        <div className="project-tech">JavaScript | Python | C | Bash</div>
      </div>

      <div className="warning-block">
        <div className="warning-title">[WARNING] LEGAL DISCLAIMER:</div>
        <div className="warning-text">
          All tools are for authorized penetration testing only. Unauthorized use is illegal and unethical.
        </div>
      </div>
    </div>
  )
}

export default App
