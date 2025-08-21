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
              Hi, I'm <span className="highlight">Muriithi Dennis.</span>
            </h1>
            <h2 className="hero-subtitle">Cybersecurity Engineer</h2>
            <p className="hero-description">
              Passionate cybersecurity professional and software engineer with expertise in ethical hacking, penetration testing, and full-stack development.
              <br/>Dedicated to identifying vulnerabilities and strengthening digital defenses through comprehesive security assessments. Expirienced in web application security, network penetration testing, and modern development practices.
              <br/>Running on Arch linux for maximum customization and control.  
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
            <img src="/profile.png" alt="f6Lcon Profile" />
          </div>
        </div>
      </div>

      {/* About Details */}
      <div className="about-grid">
        <div className="about-card">
          <h3>Background</h3>
          <p>
            I hold Bachelor of science in Information Technology (BSc IT) with specialization in programming from Karatina University. 
          </p>
          
          <p> 
            African Leadership Expirience (ALX) graduate, with a certificate in full-stack software engineering with specialization in Back-end development.
          </p>
          <p>
            Certified Ethical Hacker with (CEH) certification from EC Council, with expertice in ethical hacking and penetration testing.
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
                <h4>Backend Development</h4>
                <p>Building secure and scalable backend systems and APIs</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">🔍</div>
              <div>
                <h4>Bug Bounty Hunting</h4>
                <p>Finding and reporting security vulnerabilities on HackerOne</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">🎯</div>
              <div>
                <h4>Security Research</h4>
                <p>Hands-on practice through VulnHub, HTB, and TryHackMe platforms</p>
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

      {/* Practice Platforms */}
      <div className="platforms-section">
        <h3>Security Practice Platforms</h3>
        <div className="platforms-grid">
          <div className="platform-card">
            <div className="platform-icon">🎯</div>
            <h4>HackerOne</h4>
            <p>@f6Lcon - Bug Bounty Hunter</p>
            <span className="platform-status active">Active Researcher</span>
          </div>
          <div className="platform-card">
            <div className="platform-icon">📦</div>
            <h4>VulnHub</h4>
            <p>@f6Lcon - Vulnerable VMs</p>
            <span className="platform-status completed">50+ Machines</span>
          </div>
          <div className="platform-card">
            <div className="platform-icon">🏴‍☠️</div>
            <h4>Hack The Box</h4>
            <p>@f6Lcon - Penetration Testing Labs</p>
            <span className="platform-status active">Active Member</span>
          </div>
          <div className="platform-card">
            <div className="platform-icon">🚀</div>
            <h4>TryHackMe</h4>
            <p>@f6Lcon - Cybersecurity Training</p>
            <span className="platform-status completed">Top 10%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
