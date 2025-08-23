import { Shield, Globe, Smartphone, Cloud, Code, Target } from "lucide-react"

const ProjectsSection = () => {
  const categoryIcons = {
    "Network Security": Shield,
    "Web Security": Globe,
    "Red Team": Target,
    "Mobile Security": Smartphone,
    "Cloud Security": Cloud,
    "Exploit Development": Code,
    "Cyber Operations": Target,
  }

  const projects = [
    {
      title: "Corporate Network Penetration Test",
      description:
        "Comprehensive security assessment of enterprise network infrastructure, identifying critical vulnerabilities and providing detailed remediation strategies.",
      tech: ["Nmap", "Metasploit", "BloodHound", "PowerShell"],
      category: "Network Security",
      status: "Completed",
    },
    {
      title: "Web Application Security Assessment",
      description:
        "Full-scope security testing of web applications, including OWASP Top 10 vulnerabilities, authentication bypass, and data validation issues.",
      tech: ["Burp Suite", "OWASP ZAP", "SQLMap", "Custom Scripts"],
      category: "Web Security",
      status: "Completed",
    },
    {
      title: "Red Team Exercise",
      description:
        "Multi-phase red team engagement simulating advanced persistent threat (APT) tactics, techniques, and procedures against enterprise environment.",
      tech: ["Cobalt Strike", "Empire", "Mimikatz", "Custom Tools"],
      category: "Red Team",
      status: "Completed",
    },
    {
      title: "Mobile Application Security Testing",
      description:
        "Security assessment of iOS and Android applications, focusing on data storage, communication security, and runtime application self-protection.",
      tech: ["MobSF", "Frida", "Objection", "Burp Suite"],
      category: "Mobile Security",
      status: "In Progress",
    },
    {
      title: "Cloud Security Assessment",
      description:
        "Comprehensive security review of cloud infrastructure, including misconfigurations, IAM policies, and container security.",
      tech: ["AWS CLI", "Azure CLI", "Scout Suite", "Prowler"],
      category: "Cloud Security",
      status: "Completed",
    },
    {
      title: "Custom Exploit Development",
      description:
        "Development of proof-of-concept exploits for newly discovered vulnerabilities, including buffer overflows and privilege escalation.",
      tech: ["Python", "C/C++", "Assembly", "GDB"],
      category: "Exploit Development",
      status: "Ongoing",
    },
    {
      title: "Cyber Operations Engagement",
      description:
        "Multi-phase cyber operations engagement simulating advanced persistent threat (APT) tactics, techniques, and procedures against enterprise environment.",
      tech: ["Cobalt Strike", "Empire", "Mimikatz", "Custom Tools"],
      category: "Cyber Operations",
      status: "Completed",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category]
            return (
              <div key={index} className="glass-morphism border border-border rounded-3xl p-8 apple-hover">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <CategoryIcon size={20} className="text-primary" />
                    <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-xl text-sm font-medium border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium border ${
                      project.status === "Completed"
                        ? "bg-chart-3/10 text-chart-3 border-chart-3/20"
                        : project.status === "In Progress"
                          ? "bg-chart-4/10 text-chart-4 border-chart-4/20"
                          : "bg-primary/10 text-primary border-primary/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">{project.title}</h3>

                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-lg text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
