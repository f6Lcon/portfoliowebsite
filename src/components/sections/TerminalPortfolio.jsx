"use client"

import { useState } from "react"
import { ExternalLink, Github, Terminal, Shield, Bug, Zap } from "lucide-react"

function TerminalPortfolio() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Advanced_Web_Scanner",
      description: "Custom vulnerability scanner for web applications with advanced detection capabilities.",
      category: "tool",
      technologies: ["Python", "Requests", "BeautifulSoup", "Threading"],
      demoLink: "#",
      githubLink: "#",
      status: "ACTIVE",
      severity: "HIGH",
      type: "SCANNER",
    },
    {
      title: "Corporate_Phishing_Framework",
      description: "Social engineering framework for authorized penetration testing engagements.",
      category: "framework",
      technologies: ["Python", "Flask", "SQLite", "HTML/CSS"],
      demoLink: "#",
      githubLink: "#",
      status: "ACTIVE",
      severity: "CRITICAL",
      type: "SOCIAL_ENG",
    },
    {
      title: "Network_Enumeration_Suite",
      description: "Comprehensive network discovery and enumeration toolkit for red team operations.",
      category: "tool",
      technologies: ["Python", "Nmap", "Masscan", "Threading"],
      demoLink: "#",
      githubLink: "#",
      status: "ACTIVE",
      severity: "MEDIUM",
      type: "RECON",
    },
    {
      title: "Payload_Generation_Engine",
      description: "Automated payload generation and encoding system for bypassing security controls.",
      category: "exploit",
      technologies: ["Python", "Metasploit", "Shellcode", "Encryption"],
      demoLink: "#",
      githubLink: "#",
      status: "CLASSIFIED",
      severity: "CRITICAL",
      type: "EXPLOIT",
    },
    {
      title: "AD_Privilege_Escalation_Kit",
      description: "Active Directory privilege escalation techniques and automated exploitation tools.",
      category: "exploit",
      technologies: ["PowerShell", "C#", "LDAP", "Kerberos"],
      demoLink: "#",
      githubLink: "#",
      status: "ACTIVE",
      severity: "HIGH",
      type: "PRIVESC",
    },
    {
      title: "IoT_Device_Fuzzer",
      description: "Specialized fuzzing framework for discovering vulnerabilities in IoT devices.",
      category: "tool",
      technologies: ["C", "Python", "Firmware", "UART"],
      demoLink: "#",
      githubLink: "#",
      status: "BETA",
      severity: "MEDIUM",
      type: "FUZZER",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const getStatusColor = (status) => {
    switch (status) {
      case "ACTIVE":
        return "text-terminal-green"
      case "BETA":
        return "text-yellow-400"
      case "CLASSIFIED":
        return "text-red-400"
      default:
        return "text-terminal-comment"
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "CRITICAL":
        return "text-red-400"
      case "HIGH":
        return "text-yellow-400"
      case "MEDIUM":
        return "text-terminal-green"
      default:
        return "text-terminal-comment"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "SCANNER":
        return <Bug className="w-4 h-4" />
      case "EXPLOIT":
        return <Zap className="w-4 h-4" />
      case "RECON":
        return <Shield className="w-4 h-4" />
      default:
        return <Terminal className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6 text-sm">
      <div className="text-terminal-green mb-4">
        [INFO] Loading project repository...
        <br />
        [SUCCESS] Found {projects.length} security projects
        <br />
        [WARNING] Some projects contain classified information
      </div>

      {/* Filter Commands */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-3 py-1 rounded text-xs transition-colors ${
            filter === "all"
              ? "bg-terminal-green text-terminal-bg"
              : "border border-terminal-border text-terminal-comment hover:text-terminal-green"
          }`}
          onClick={() => setFilter("all")}
        >
          ./show_all.sh
        </button>
        <button
          className={`px-3 py-1 rounded text-xs transition-colors ${
            filter === "tool"
              ? "bg-terminal-green text-terminal-bg"
              : "border border-terminal-border text-terminal-comment hover:text-terminal-green"
          }`}
          onClick={() => setFilter("tool")}
        >
          ./list_tools.py
        </button>
        <button
          className={`px-3 py-1 rounded text-xs transition-colors ${
            filter === "exploit"
              ? "bg-terminal-green text-terminal-bg"
              : "border border-terminal-border text-terminal-comment hover:text-terminal-green"
          }`}
          onClick={() => setFilter("exploit")}
        >
          ./show_exploits.sh
        </button>
        <button
          className={`px-3 py-1 rounded text-xs transition-colors ${
            filter === "framework"
              ? "bg-terminal-green text-terminal-bg"
              : "border border-terminal-border text-terminal-comment hover:text-terminal-green"
          }`}
          onClick={() => setFilter("framework")}
        >
          ./list_frameworks.py
        </button>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="border border-terminal-border rounded bg-terminal-window p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getTypeIcon(project.type)}
                <div>
                  <h3 className="text-terminal-green font-bold">{project.title}</h3>
                  <p className="text-terminal-comment text-xs">{project.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {project.status !== "CLASSIFIED" && (
                  <>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-terminal-green hover:text-terminal-green-bright transition-colors"
                      title="Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-terminal-green hover:text-terminal-green-bright transition-colors"
                      title="Source Code"
                    >
                      <Github size={16} />
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-terminal-border text-terminal-green rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-4">
                <span className="text-terminal-comment">
                  STATUS: <span className={getStatusColor(project.status)}>{project.status}</span>
                </span>
                <span className="text-terminal-comment">
                  SEVERITY: <span className={getSeverityColor(project.severity)}>{project.severity}</span>
                </span>
                <span className="text-terminal-comment">
                  TYPE: <span className="text-terminal-green">{project.type}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Statistics */}
      <div className="border border-terminal-border rounded bg-terminal-window p-4">
        <div className="text-terminal-green mb-2">[EXEC] python3 project_stats.py</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-terminal-comment">TOTAL_PROJECTS:</div>
            <div className="text-terminal-green text-lg">{projects.length}</div>
          </div>
          <div>
            <div className="text-terminal-comment">ACTIVE_STATUS:</div>
            <div className="text-terminal-green text-lg">{projects.filter((p) => p.status === "ACTIVE").length}</div>
          </div>
          <div>
            <div className="text-terminal-comment">CRITICAL_SEVERITY:</div>
            <div className="text-red-400 text-lg">{projects.filter((p) => p.severity === "CRITICAL").length}</div>
          </div>
          <div>
            <div className="text-terminal-comment">CLASSIFIED:</div>
            <div className="text-red-400 text-lg">{projects.filter((p) => p.status === "CLASSIFIED").length}</div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border border-red-400 rounded bg-red-900 bg-opacity-20 p-4">
        <div className="text-red-400 text-xs">
          <div className="font-bold mb-1">[WARNING] LEGAL DISCLAIMER:</div>
          <div>
            All tools and exploits are developed for authorized penetration testing and educational purposes only.
            Unauthorized use of these tools against systems you do not own or have explicit permission to test is
            illegal and unethical.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalPortfolio
