"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("whoami")
  const [currentTime, setCurrentTime] = useState(new Date())

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
          <span className="terminal-title">root@redteam-ops:~$ ./portfolio --mode=professional</span>
        </div>
        <div className="status-indicators">
          <span className="status-item">🔒 VPN: ACTIVE</span>
          <span className="status-item">🌐 TOR: ENABLED</span>
          <span className="status-item">👤 STEALTH: ON</span>
          <span className="status-ready">⚡ READY</span>
        </div>
      </div>

      {/* Main Terminal Body */}
      <div className="terminal-body">
        {/* Sidebar Navigation */}
        <div className="terminal-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">📁 navigation.terminal</span>
            <span className="minimize-btn">🟡</span>
          </div>

          {/* ASCII Art Profile */}
          <div className="profile-section">
            <pre className="ascii-art">
              {`██████╗ ███████╗██████╗ 
██╔══██╗██╔════╝██╔══██╗
██████╔╝█████╗  ██║  ██║
██╔══██╗██╔══╝  ██║  ██║
██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚═════╝ 
    TEAM OPERATOR`}
            </pre>
            <div className="status-info">
              <div>
                STATUS: <span className="online">ONLINE</span>
              </div>
              <div>
                CLEARANCE: <span className="classified">CLASSIFIED</span>
              </div>
              <div>
                MODE: <span className="operational">OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Command Prompt */}
          <div className="command-prompt">
            <div className="prompt-line">root@redteam-ops:~$ ls -la</div>
          </div>

          {/* Navigation Commands */}
          <div className="nav-commands">
            <button
              className={`nav-cmd ${activeSection === "whoami" ? "active" : ""}`}
              onClick={() => setActiveSection("whoami")}
            >
              <span className="cmd-icon">📄</span>
              <div className="cmd-info">
                <div className="cmd-name">./whoami.sh</div>
                <div className="cmd-desc"># profile info</div>
              </div>
            </button>

            <button
              className={`nav-cmd ${activeSection === "certs" ? "active" : ""}`}
              onClick={() => setActiveSection("certs")}
            >
              <span className="cmd-icon">🏆</span>
              <div className="cmd-info">
                <div className="cmd-name">./list_certs.py</div>
                <div className="cmd-desc"># certifications</div>
              </div>
            </button>

            <button
              className={`nav-cmd ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => setActiveSection("projects")}
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
              <span>root@redteam-ops:~$ </span>
              <span className="cursor-blink">█</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="terminal-footer">
        <span>[SYSTEM] RedTeam-Terminal v2.1.0 | Status: OPERATIONAL</span>
        <span>
          {currentTime.toLocaleTimeString()} | {currentTime.toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}

// Content Components
function WhoAmI() {
  return (
    <div className="content-section">
      <div className="command-output">root@redteam-ops:~$ ./whoami.sh</div>
      <div className="executing">Executing whoami.sh...</div>

      <div className="info-block">
        <div className="info-title">[INFO] User profile loaded successfully</div>
        <div className="user-info">
          <div>USER_ID: RedTeam_Operator_001</div>
          <div>ROLE: Senior Penetration Tester</div>
          <div>
            CLEARANCE: <span className="classified">CLASSIFIED</span>
          </div>
          <div>SPECIALIZATION: Offensive Security Operations</div>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">[EXEC] cat about.txt</div>
        <div className="about-text">
          Cybersecurity professional specializing in offensive security operations, advanced persistent threat
          simulation, and red team engagements. Expertise in vulnerability research, exploit development, and social
          engineering campaigns.
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">[EXEC] ./skill_assessment.sh --verbose</div>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-title">OFFENSIVE_CAPABILITIES:</div>
            <div className="skill-item">
              Web_App_Testing: <span className="skill-level">95%</span>
            </div>
            <div className="skill-item">
              Network_Penetration: <span className="skill-level">90%</span>
            </div>
            <div className="skill-item">
              Wireless_Security: <span className="skill-level">85%</span>
            </div>
            <div className="skill-item">
              Social_Engineering: <span className="skill-level">80%</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-title">OPERATIONAL_SKILLS:</div>
            <div className="skill-item">
              OSINT_Gathering: <span className="skill-level">90%</span>
            </div>
            <div className="skill-item">
              Payload_Development: <span className="skill-level">85%</span>
            </div>
            <div className="skill-item">
              Post_Exploitation: <span className="skill-level">88%</span>
            </div>
            <div className="skill-item">
              Report_Writing: <span className="skill-level">92%</span>
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
      <div className="command-output">root@redteam-ops:~$ ./list_certs.py</div>
      <div className="executing">Loading certification database...</div>

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
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="content-section">
      <div className="command-output">root@redteam-ops:~$ ./show_projects.sh</div>
      <div className="executing">Loading project repository...</div>

      <div className="project-item">
        <div className="project-header">
          <span className="project-name">🔍 Advanced_Web_Scanner</span>
          <span className="project-status active">ACTIVE</span>
        </div>
        <div className="project-desc">Custom vulnerability scanner for web applications</div>
        <div className="project-tech">Python | Requests | Threading</div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <span className="project-name">🎣 Corporate_Phishing_Framework</span>
          <span className="project-status classified">CLASSIFIED</span>
        </div>
        <div className="project-desc">Social engineering framework for authorized testing</div>
        <div className="project-tech">Python | Flask | SQLite</div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <span className="project-name">🌐 Network_Enumeration_Suite</span>
          <span className="project-status active">ACTIVE</span>
        </div>
        <div className="project-desc">Comprehensive network discovery toolkit</div>
        <div className="project-tech">Python | Nmap | Masscan</div>
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
