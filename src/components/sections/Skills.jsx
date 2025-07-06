"use client"

import { Code, Shield, Wrench, Award, Target, Bug } from "lucide-react"

function Skills() {
  const coreSkills = [
    { name: "Backend Development", level: 92 },
    { name: "Penetration Testing", level: 90 },
    { name: "Cybersecurity", level: 95 },
    { name: "Bug Bounty Hunting", level: 88 },
  ]

  const programmingSkills = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 88 },
    { name: "C", level: 82 },
    { name: "Bash", level: 85 },
  ]

  const securityTools = [
    "Burp Suite",
    "Metasploit",
    "Nmap",
    "Wireshark",
    "OWASP ZAP",
    "Kali Linux",
    "BlackArch",
    "Hashcat",
    "John the Ripper",
    "Aircrack-ng",
    "Nikto",
    "SQLMap",
    "Gobuster",
    "Ffuf",
  ]

  const specializations = [
    "Web Application Security",
    "Network Penetration Testing",
    "Vulnerability Assessment",
    "Bug Bounty Hunting",
    "OSINT",
    "Incident Response",
    "Security Auditing",
    "Threat Modeling",
    "API Security Testing",
    "Social Engineering",
  ]

  const frameworks = ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "Spring Boot", "Next.js", "React"]

  const platforms = [
    { name: "HackerOne", type: "Bug Bounty", status: "Active Researcher" },
    { name: "VulnHub", type: "Practice", status: "50+ Machines Completed" },
    { name: "Hack The Box", type: "Labs", status: "Active Member" },
    { name: "TryHackMe", type: "Training", status: "Top 10%" },
  ]

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
        <p>My technical expertise and specializations</p>
      </div>

      {/* Core Proficiencies */}
      <div className="core-skills">
        <h3>Core Proficiencies</h3>
        <div className="core-skills-grid">
          {coreSkills.map((skill, index) => (
            <div key={index} className="core-skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill-category">
          <div className="category-header">
            <Code size={24} />
            <h3>Programming Languages</h3>
          </div>
          <div className="skill-items">
            {programmingSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Tools */}
        <div className="skill-category">
          <div className="category-header">
            <Shield size={24} />
            <h3>Security Tools</h3>
          </div>
          <div className="skill-badges">
            {securityTools.map((tool, index) => (
              <span key={index} className="skill-badge">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skill-category">
          <div className="category-header">
            <Wrench size={24} />
            <h3>Frameworks & Libraries</h3>
          </div>
          <div className="skill-badges">
            {frameworks.map((framework, index) => (
              <span key={index} className="skill-badge">
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="skill-category">
          <div className="category-header">
            <Award size={24} />
            <h3>Specializations</h3>
          </div>
          <div className="skill-badges">
            {specializations.map((spec, index) => (
              <span key={index} className="skill-badge">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Practice Platforms */}
      <div className="platforms-section">
        <div className="category-header">
          <Target size={24} />
          <h3>Security Practice Platforms</h3>
        </div>
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-card">
              <div className="platform-header">
                <div className="platform-icon">
                  {platform.name === "HackerOne" && <Bug size={20} />}
                  {platform.name === "VulnHub" && "📦"}
                  {platform.name === "Hack The Box" && "🏴‍☠️"}
                  {platform.name === "TryHackMe" && "🚀"}
                </div>
                <div className="platform-info">
                  <h4>{platform.name}</h4>
                  <p>{platform.type}</p>
                </div>
              </div>
              <span
                className={`platform-status ${platform.name === "HackerOne" || platform.name === "Hack The Box" ? "active" : "completed"}`}
              >
                {platform.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bug Bounty Stats */}
      <div className="bounty-stats">
        <h3>Bug Bounty & Security Research</h3>
        <div className="bounty-grid">
          <div className="bounty-card">
            <div className="bounty-icon">🎯</div>
            <h4>HackerOne Profile</h4>
            <p>Active bug bounty researcher with verified vulnerabilities</p>
            <div className="bounty-achievements">
              <span>• Multiple CVE discoveries</span>
              <span>• Critical vulnerability reports</span>
              <span>• Hall of Fame mentions</span>
            </div>
          </div>
          <div className="bounty-card">
            <div className="bounty-icon">🏆</div>
            <h4>Practice Labs</h4>
            <p>Continuous learning through hands-on security challenges</p>
            <div className="bounty-achievements">
              <span>• 50+ VulnHub machines completed</span>
              <span>• HTB active member</span>
              <span>• TryHackMe top 10% ranking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
