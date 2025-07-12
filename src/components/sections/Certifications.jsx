"use client"

import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"

function Certifications() {
  const certifications = [
    {
      title: "ALX Software Engineering Program",
      issuer: "African Leadership Experience",
      date: "2025",
      credentialId: "ALX-SE-2025",
      icon: "🎓",
      level: "Advanced",
      description:
        "Comprehensive 12-month software engineering program covering full-stack development, system design, algorithms, and professional software development practices.",
      skills: ["Full-Stack Development", "System Design", "Algorithms", "Data Structures", "Software Architecture"],
      status: "Completed",
    },
    {
      title: "OSCP - Offensive Security Certified Professional",
      issuer: "Offensive Security",
      date: "2024",
      credentialId: "OS-101337",
      icon: "🛡️",
      level: "Expert",
      description:
        "24-hour hands-on penetration testing certification requiring practical exploitation of multiple systems in a controlled environment.",
      skills: ["Penetration Testing", "Exploitation", "Post-Exploitation", "Buffer Overflows", "Privilege Escalation"],
      status: "Inactive",
    },
    {
      title: "CEH - Certified Ethical Hacker",
      issuer: "EC-Council",
      date: "2023",
      credentialId: "ECC-CEH-2023",
      icon: "🔒",
      level: "Intermediate",
      description:
        "Comprehensive ethical hacking certification covering penetration testing methodologies, tools, and techniques used by security professionals.",
      skills: ["Ethical Hacking", "Security Assessment", "Vulnerability Analysis", "Network Security", "Web Security"],
      status: "Active",
    },
    {
      title: "GPEN - GIAC Penetration Tester",
      issuer: "SANS Institute",
      date: "2024",
      credentialId: "GIAC-GPEN-2024",
      icon: "⚔️",
      level: "Advanced",
      description:
        "Hands-on penetration testing certification focusing on practical skills and real-world attack scenarios against modern systems.",
      skills: ["Advanced Penetration Testing", "Network Security", "Web Application Testing", "Wireless Security"],
      status: "Inactive",
    },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "level-expert"
      case "Advanced":
        return "level-advanced"
      case "Intermediate":
        return "level-intermediate"
      default:
        return "level-beginner"
    }
  }

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Certifications</h2>
        <p>Professional certifications and achievements</p>
      </div>

      {/* Certification Stats */}
      <div className="cert-stats">
        <div className="stat-item">
          <Award size={20} />
          <div>
            <h3>4</h3>
            <p>Total Certifications</p>
          </div>
        </div>
        <div className="stat-item">
          <CheckCircle size={20} />
          <div>
            <h3>3</h3>
            <p>Active Status</p>
          </div>
        </div>
        <div className="stat-item">
          <Calendar size={20} />
          <div>
            <h3>2025</h3>
            <p>Latest Achievement</p>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-header">
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date}</span>
                  <span className={`cert-level ${getLevelColor(cert.level)}`}>{cert.level}</span>
                </div>
              </div>
              <div className="cert-status">
                <CheckCircle size={16} />
                <span>{cert.status}</span>
              </div>
            </div>

            <p className="cert-description">{cert.description}</p>

            <div className="cert-skills">
              <h4>Skills Covered:</h4>
              <div className="skill-tags">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="cert-footer">
              <div className="cert-credential">
                <span>ID: {cert.credentialId}</span>
              </div>
              <button className="verify-btn">
                <ExternalLink size={14} />
                Verify
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Certifications */}
      <div className="upcoming-certs">
        <h3>Upcoming Certifications</h3>
        <div className="upcoming-list">
          <div className="upcoming-item">
            <div className="upcoming-icon">📅</div>
            <div>
              <h4>CISSP - Certified Information Systems Security Professional</h4>
              <p>Planned for Q2 2025</p>
            </div>
          </div>
          <div className="upcoming-item">
            <div className="upcoming-icon">📅</div>
            <div>
              <h4>OSEP - Offensive Security Experienced Penetration Tester</h4>
              <p>Planned for Q3 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
