import { Shield, Target, Search, Code } from "lucide-react"

const AboutSection = () => {
  const tools = [
    { name: "Metasploit", category: "Exploitation", icon: Target },
    { name: "Burp Suite", category: "Web Security", icon: Shield },
    { name: "Nmap", category: "Network Scanning", icon: Search },
    { name: "Wireshark", category: "Network Analysis", icon: Code },
    { name: "Kali Linux", category: "OS", icon: Shield },
    { name: "OWASP ZAP", category: "Web Security", icon: Target },
    { name: "Cobalt Strike", category: "Cyber Operations", icon: Search },
    { name: "BloodHound", category: "AD Enumeration", icon: Code },
  ]

  const specialties = [
    { name: "Penetration Testing", icon: Shield },
    { name: "Cyber Operations", icon: Target },
    { name: "Security Research", icon: Search },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-6">Cybersecurity Professional</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a passionate cybersecurity professional with extensive experience in penetration testing,
                vulnerability assessment, and security research. My expertise lies in identifying security weaknesses
                and helping organizations strengthen their defensive posture.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With a deep understanding of both offensive and defensive security techniques, I specialize in
                simulating real-world attacks to test and improve security measures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon
                return (
                  <div key={index} className="flex items-center space-x-3 p-4 glass-morphism rounded-2xl apple-hover">
                    <Icon size={20} className="text-primary" />
                    <span className="text-foreground font-medium text-sm">{specialty.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <div key={index} className="p-6 glass-morphism rounded-2xl apple-hover border border-border">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon size={20} className="text-primary" />
                      <h4 className="font-semibold text-foreground">{tool.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.category}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
