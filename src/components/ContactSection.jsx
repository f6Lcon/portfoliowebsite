import { Linkedin, Twitter, Github, Mail } from "lucide-react"

const ContactSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gray-cybersec",
      icon: Linkedin,
      color: "text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gray_cybersec",
      icon: Twitter,
      color: "text-cyan-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/gray",
      icon: Github,
      color: "text-green-400",
    },
    {
      name: "Email",
      url: "mailto:gray@cybersec.com",
      icon: Mail,
      color: "text-primary",
    },
  ]

  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities",
    },
    {
      title: "Red Team Operations",
      description: "Advanced persistent threat simulations and security exercises",
    },
    {
      title: "Security Consulting",
      description: "Strategic security guidance and remediation planning",
    },
    {
      title: "Cyber Operations",
      description: "Advanced persistent threat simulations and security exercises",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Ready to strengthen your security posture? Let's discuss how I can help identify vulnerabilities and improve
            your organization's cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 glass-morphism rounded-2xl apple-hover border border-border group"
              >
                <Icon size={32} className={`${link.color} mb-4 mx-auto`} />
                <h3 className="text-foreground font-semibold mb-2 text-lg">{link.name}</h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  Connect with me
                </p>
              </a>
            )
          })}
        </div>

        <div className="glass-morphism border border-border rounded-3xl p-10">
          <h3 className="text-3xl font-semibold text-foreground mb-8">Professional Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-left">
                <h4 className="font-semibold text-primary mb-3 text-lg">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
