"use client"

import { motion } from "framer-motion"
import { ExternalLink, Shield, Bug, Network, Terminal, Target, Eye, Zap } from "lucide-react"

const ProjectsPage = () => {
  const projects = [
    {
      title: "Operation: CRIMSON SHADOW",
      description:
        "Advanced Persistent Threat simulation targeting Fortune 500 financial institution. Multi-phase engagement including initial access, lateral movement, privilege escalation, and data exfiltration simulation.",
      icon: Target,
      tags: ["APT Simulation", "Financial Sector", "Multi-Vector Attack"],
      status: "CLASSIFIED",
      impact: "Complete domain compromise achieved in 72 hours",
      threatLevel: "CRITICAL",
      duration: "6 weeks",
      scope: "3,000+ endpoints",
    },
    {
      title: "Operation: DIGITAL PHANTOM",
      description:
        "Red team assessment of healthcare network infrastructure focusing on medical device security, patient data protection, and HIPAA compliance validation through offensive security testing.",
      icon: Shield,
      tags: ["Healthcare Security", "IoMT Testing", "HIPAA Compliance"],
      status: "COMPLETED",
      impact: "15 critical vulnerabilities in medical devices",
      threatLevel: "HIGH",
      duration: "4 weeks",
      scope: "500+ medical devices",
    },
    {
      title: "Operation: GHOST PROTOCOL",
      description:
        "Covert penetration testing of government contractor network using advanced evasion techniques, living-off-the-land tactics, and custom malware development.",
      icon: Eye,
      tags: ["Government Sector", "Evasion Techniques", "Custom Malware"],
      status: "COMPLETED",
      impact: "Bypassed all security controls undetected",
      threatLevel: "CRITICAL",
      duration: "8 weeks",
      scope: "Classified",
    },
    {
      title: "Operation: CYBER STORM",
      description:
        "Large-scale red team exercise simulating nation-state attack patterns against critical infrastructure, including SCADA systems and industrial control networks.",
      icon: Zap,
      tags: ["Critical Infrastructure", "SCADA/ICS", "Nation-State TTPs"],
      status: "COMPLETED",
      impact: "Demonstrated potential for widespread disruption",
      threatLevel: "CRITICAL",
      duration: "12 weeks",
      scope: "Multi-site infrastructure",
    },
    {
      title: "Operation: SILENT BREACH",
      description:
        "Web application penetration testing focusing on zero-day discovery, custom exploit development, and business logic bypass techniques against e-commerce platform.",
      icon: Bug,
      tags: ["Zero-Day Research", "E-commerce", "Custom Exploits"],
      status: "ONGOING",
      impact: "3 zero-day vulnerabilities discovered",
      threatLevel: "HIGH",
      duration: "Ongoing",
      scope: "Multi-million user platform",
    },
    {
      title: "Operation: DARK NETWORK",
      description:
        "Internal network penetration testing with focus on Active Directory compromise, Kerberos attacks, and domain controller exploitation in enterprise environment.",
      icon: Network,
      tags: ["Active Directory", "Kerberos Attacks", "Enterprise"],
      status: "COMPLETED",
      impact: "Full AD forest compromise achieved",
      threatLevel: "CRITICAL",
      duration: "3 weeks",
      scope: "10,000+ domain users",
    },
  ]

  const getThreatColor = (level) => {
    switch (level) {
      case "CRITICAL":
        return "text-red-400 border-red-400/30 bg-red-500/20"
      case "HIGH":
        return "text-orange-400 border-orange-400/30 bg-orange-500/20"
      case "MEDIUM":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-500/20"
      default:
        return "text-green-400 border-green-400/30 bg-green-500/20"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "CLASSIFIED":
        return "text-purple-400 border-purple-400/30 bg-purple-500/20"
      case "COMPLETED":
        return "text-green-400 border-green-400/30 bg-green-500/20"
      case "ONGOING":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-500/20"
      default:
        return "text-blue-400 border-blue-400/30 bg-blue-500/20"
    }
  }

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="glass-morphism p-4 mb-4">
            <div className="flex items-center justify-center mb-2">
              <Terminal className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary text-sm font-semibold">CLASSIFIED OPERATIONS DATABASE</span>
            </div>
            <div className="text-muted-foreground text-xs">
              ACCESS LEVEL: RED TEAM OPERATOR
              <br />
              CLEARANCE: TOP SECRET//SI//TK
              <br />
              COMPARTMENT: CYBER OPERATIONS
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Operation Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Classified red team engagements and offensive cyber operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="glass-morphism p-6 rounded-2xl apple-hover group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <span
                      className={`px-3 py-1 rounded-xl border text-xs font-bold ${getThreatColor(project.threatLevel)}`}
                    >
                      {project.threatLevel}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-xl border text-xs font-bold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">{project.description}</p>

                <div className="glass-morphism p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-primary font-semibold">Duration:</span>
                      <div className="text-foreground">{project.duration}</div>
                    </div>
                    <div>
                      <span className="text-primary font-semibold">Scope:</span>
                      <div className="text-foreground">{project.scope}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 glass-morphism text-primary rounded-xl text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mt-auto">
                  <p className="text-sm text-primary mb-2 font-semibold">Operation Impact:</p>
                  <p className="text-accent font-semibold text-sm">{project.impact}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-primary">Initiate Security Assessment</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to test your defenses against advanced persistent threats?
              <br />
              Contact for classified engagement briefing
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold apple-hover cyber-glow group">
              Establish Secure Channel
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage
