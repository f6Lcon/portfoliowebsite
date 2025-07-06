"use client"

import { Code, Shield, Wrench, Award } from "lucide-react"

function Skills() {
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
  ]

  const specializations = [
    "Web Application Security",
    "Network Penetration Testing",
    "Vulnerability Assessment",
    "Social Engineering",
    "OSINT",
    "Incident Response",
    "Security Auditing",
    "Threat Modeling",
  ]

  const frameworks = ["React", "Node.js", "Django", "Flask", "Express.js", "Next.js", "Vue.js", "Angular"]

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
        <p>My technical expertise and specializations</p>
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

      {/* Skill Summary */}
      <div className="skill-summary">
        <h3>Technical Proficiency</h3>
        <div className="proficiency-grid">
          <div className="proficiency-item">
            <h4>Frontend Development</h4>
            <div className="proficiency-bar">
              <div className="proficiency-fill" style={{ width: "88%" }}></div>
            </div>
          </div>
          <div className="proficiency-item">
            <h4>Backend Development</h4>
            <div className="proficiency-bar">
              <div className="proficiency-fill" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="proficiency-item">
            <h4>Cybersecurity</h4>
            <div className="proficiency-bar">
              <div className="proficiency-fill" style={{ width: "92%" }}></div>
            </div>
          </div>
          <div className="proficiency-item">
            <h4>Penetration Testing</h4>
            <div className="proficiency-bar">
              <div className="proficiency-fill" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
