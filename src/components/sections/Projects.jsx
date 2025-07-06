"use client"

import { ExternalLink, Github, Calendar, Code, Shield, Globe } from "lucide-react"

function Projects() {
  const projects = [
    {
      title: "Security Monitoring Dashboard",
      description:
        "Real-time security monitoring dashboard with threat intelligence integration and automated incident response capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Security",
      technologies: ["JavaScript", "Python", "React", "Node.js", "MongoDB"],
      features: [
        "Real-time threat monitoring",
        "Automated incident response",
        "Threat intelligence integration",
        "Custom alert system",
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      date: "2023",
    },
    {
      title: "Advanced Web Scanner",
      description:
        "Custom vulnerability scanner for web applications with advanced detection capabilities and comprehensive reporting features.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Security",
      technologies: ["Python", "C", "Bash", "SQLite"],
      features: [
        "Advanced vulnerability detection",
        "Custom payload generation",
        "Comprehensive reporting",
        "Multi-threaded scanning",
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      date: "2023",
    },
    {
      title: "Network Enumeration Suite",
      description:
        "Comprehensive network discovery and enumeration toolkit for security professionals with automated reporting and analysis.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Security",
      technologies: ["C", "Python", "Bash", "Nmap"],
      features: [
        "Network discovery automation",
        "Service enumeration",
        "Vulnerability assessment",
        "Automated reporting",
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      date: "2022",
    },
    {
      title: "Secure E-Commerce Platform",
      description:
        "Full-stack e-commerce platform built with security-first approach, implementing OWASP security standards and best practices.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Development",
      technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
      features: [
        "Secure authentication system",
        "Payment gateway integration",
        "OWASP compliance",
        "Real-time inventory management",
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      date: "2023",
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
      title: "Secure API Gateway",
      description:
        "High-performance API gateway with built-in security features including rate limiting, authentication, and threat protection.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Development",
      technologies: ["C", "Python", "Redis", "Nginx"],
      features: ["Rate limiting & throttling", "JWT authentication", "API threat protection", "Load balancing"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      date: "2023",
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
            <h3>6</h3>
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
            <h3>2</h3>
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
