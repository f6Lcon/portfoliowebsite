"use client"

import { MapPin, Calendar, Award, Users } from "lucide-react"

function About() {
  return (
    <div className="section-container">
      {/* Hero Card */}
      <div className="hero-card">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">f6Lcon</span>
            </h1>
            <h2 className="hero-subtitle">Cybersecurity Specialist & Software Engineer</h2>
            <p className="hero-description">
              Passionate about ethical hacking, penetration testing, and building secure applications. Experienced in
              full-stack development with a focus on cybersecurity and secure coding practices.
            </p>

            <div className="hero-info">
              <div className="info-item">
                <MapPin size={16} />
                <span>Available Remotely</span>
              </div>
              <div className="info-item">
                <Calendar size={16} />
                <span>4+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src="/placeholder.svg?height=300&width=300" alt="Profile" />
          </div>
        </div>
      </div>

      {/* About Details */}
      <div className="about-grid">
        <div className="about-card">
          <h3>Background</h3>
          <p>
            I'm a dedicated cybersecurity professional and software engineer with expertise in ethical hacking,
            penetration testing, and secure application development. My journey combines technical excellence with a
            passion for protecting digital assets and building robust security solutions.
          </p>
          <p>
            With experience in both offensive and defensive security, I help organizations identify vulnerabilities and
            strengthen their security posture through comprehensive assessments and modern development practices.
          </p>
        </div>

        <div className="about-card">
          <h3>What I Do</h3>
          <div className="services-list">
            <div className="service-item">
              <div className="service-icon">🛡️</div>
              <div>
                <h4>Penetration Testing</h4>
                <p>Comprehensive security assessments and vulnerability analysis</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">💻</div>
              <div>
                <h4>Secure Development</h4>
                <p>Building secure applications with modern frameworks</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">🔍</div>
              <div>
                <h4>Security Research</h4>
                <p>Vulnerability research and security tool development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Award size={24} />
          </div>
          <div className="stat-content">
            <h3>4</h3>
            <p>Certifications</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>50+</h3>
            <p>Security Assessments</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Calendar size={24} />
          </div>
          <div className="stat-content">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
