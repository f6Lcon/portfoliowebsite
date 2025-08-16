"use client"

import { Briefcase, Calendar } from "lucide-react"

function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "BitSystems Ltd.",
      period: "2024",
      location: "Nakuru, Kenya",
      description:
        "Developed secure web applications and implemented security best practices in the development lifecycle. Collaborated with security teams to ensure application security compliance.",
      achievements: [
        "Built 5+ secure web applications",
        "Implemented OWASP security standards",
        "Reduced security vulnerabilities by 40%",
        "Led secure code review processes",
      ],
      technologies: ["JavaScript", "PHP", "Codigniter"],
    },
    {
      title: "Junior Penetration Tester",
      company: "CyberGuard Systems",
      period: "2022 - 2023",
      location: "Remote",
      description:
        "Performed Web, Network and App penetration testing Gave detailed reports that helped the Blueteam stay ahed of malicious Hackers erned their Hall of Fame.",
      achievements: [
        "Conducted 100+ vulnerability assessments",
        "Participated in 20+ incident response cases",
        "Developed security monitoring scripts",
        "Achieved 99% uptime for security systems",
      ],
      technologies: ["Bash", "Python", "Wireshark", "Nmap", "Splunk", "metasploit", "Burpsuite", "maltego", "mitre Att&ck"],
    },
  ]

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <p>My journey in cybersecurity and software development</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <Briefcase size={16} />
            </div>

            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="experience-period">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience-location">
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-achievements">
                <h5>Key Achievements:</h5>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-technologies">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
