"use client"

import { motion } from "framer-motion"
import { ExternalLink, Shield, Bug, Network, Lock } from "lucide-react"

const ProjectsPage = () => {
  const projects = [
    {
      title: "Corporate Network Penetration Test",
      description:
        "Comprehensive security assessment of a Fortune 500 company's internal network infrastructure, identifying critical vulnerabilities and providing remediation strategies.",
      icon: Network,
      tags: ["Network Security", "Internal Pentest", "Active Directory"],
      status: "Completed",
      impact: "15 Critical vulnerabilities identified and remediated",
    },
    {
      title: "Web Application Security Assessment",
      description:
        "Full-scope security testing of a financial services web application, including authentication bypass, SQL injection, and business logic flaws.",
      icon: Bug,
      tags: ["Web Security", "OWASP Top 10", "API Testing"],
      status: "Completed",
      impact: "Prevented potential $2M+ data breach",
    },
    {
      title: "Red Team Exercise - Healthcare Sector",
      description:
        "Multi-phase red team engagement simulating advanced persistent threat actors targeting healthcare infrastructure and patient data systems.",
      icon: Shield,
      tags: ["Cyber Operations", "APT Simulation", "Healthcare"],
      status: "Completed",
      impact: "Improved security posture by 85%",
    },
    {
      title: "Custom Exploit Development",
      description:
        "Development of proof-of-concept exploits for zero-day vulnerabilities discovered during security research and responsible disclosure.",
      icon: Lock,
      tags: ["Exploit Dev", "Zero-day", "Research"],
      status: "Ongoing",
      impact: "3 CVEs assigned and patched",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Security Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of penetration testing engagements, red team operations, and security research projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="glass-morphism p-8 rounded-2xl apple-hover group"
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon className="w-12 h-12 text-primary flex-shrink-0" />
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Impact:</p>
                  <p className="text-foreground font-medium">{project.impact}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">Interested in a Security Assessment?</h2>
            <p className="text-muted-foreground mb-6">
              Contact me to discuss your organization's security testing needs and custom engagement requirements.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold apple-hover cyber-glow">
              Schedule Consultation
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage
