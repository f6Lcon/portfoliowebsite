"use client"

import { ExternalLink, Github, Calendar, Code, Shield, Globe } from "lucide-react"

function Projects() {
  const projects = [

    {
      title: "Secure E-Commerce Platform",
      description:
        "Full-stack e-commerce platform built with security-first approach, implementing OWASP security standards and best practices.",
      image: "/picknest.png",
      category: "Development",
      technologies: ["JavaScript", "React", "Node.js", "Express.Js", "MongoDB"],
      features: [
        "Secure authentication system",
        "Payment gateway integration",
        "OWASP compliance",
        "Real-time inventory management",
      ],
      demoUrl: "https://picknest.com/",
      githubUrl: "https://github.com/initials101/picknest",
      status: "Completed",
      date: "2024",
    },
    {
      title: "Incident Response Automation",
      description:
        "Automated incident response system that integrates with SIEM tools and provides rapid threat containment capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Security",
      technologies: ["Python", "JavaScript", "Docker", "Kubernetes"],
      features: [
        "Automated threat detection",
        "Rapid response workflows",
        "SIEM integration",
        "Forensic data collection",
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "In Progress",
      date: "2024",
    },
    {
      title: "Lipa na mpesa Secure API Gateway",
      description:
        "High-performance API gateway with built-in security features including rate limiting, authentication, and threat protection.",
      image: "/mpesa.png",
      category: "Development",
      technologies: ["Node.Js", "Javascript", "Redis", "MongoDB", "Express.js", "Postman"],
      features: ["Rate limiting & throttling", "JWT authentication", "API threat protection", "Load balancing"],
      demoUrl: "#",
      githubUrl: "https://github.com/f6Lcon/mpesaAPI",
      status: "Completed",
      date: "2023",
    },
    {
      title: "MEDREF",
      description: "A full-stack medical referral and appointment system streamlining patient-hospital interactions and referrals.",
      image: "/medref.png",
      category: "Deveopment",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Automated Referrals",
        "Automated Appointments",
        "Automated notifictions and reminders"
      ],
      demoUrl: "https://medref-fy.vercel.app/",
      githubUrl: "https://github.com/f6Lcon/medref",
      status: "Completed",
      Date: "2025"
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "status-completed"
      case "In Progress":
        return "status-progress"
      case "Planning":
        return "status-planning"
      default:
        return "status-completed"
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Security":
        return <Shield size={16} />
      case "Development":
        return <Code size={16} />
      default:
        return <Globe size={16} />
    }
  }

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>A showcase of my cybersecurity and development work</p>
      </div>

      {/* Project Stats */}
      <div className="project-stats">
        <div className="stat-card">
          <Code size={24} />
          <div>
            <h3>4</h3>
            <p>Total Projects</p>
          </div>
        </div>
        <div className="stat-card">
          <Shield size={24} />
          <div>
            <h3>4</h3>
            <p>Security Tools</p>
          </div>
        </div>
        <div className="stat-card">
          <Globe size={24} />
          <div>
            <h3>10+</h3>
            <p>Web Applications</p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.demoUrl} className="project-link">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.githubUrl} className="project-link">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                <div className="project-meta">
                  <span className={`project-status ${getStatusColor(project.status)}`}>{project.status}</span>
                  <span className="project-date">
                    <Calendar size={14} />
                    {project.date}
                  </span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a href={project.demoUrl} className="btn btn-primary">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a href={project.githubUrl} className="btn btn-secondary">
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
