import { Award, BookOpen } from "lucide-react"

const SkillsSection = () => {
  const skills = [
    { name: "Penetration Testing", level: 95 },
    { name: "Network Security", level: 90 },
    { name: "Web Application Security", level: 88 },
    { name: "Red Team Operations", level: 92 },
    { name: "Vulnerability Assessment", level: 85 },
    { name: "Exploit Development", level: 80 },
    { name: "Social Engineering", level: 75 },
    { name: "Incident Response", level: 82 },
  ]

  const certifications = [
    "OSCP - Offensive Security Certified Professional",
    "CEH - Certified Ethical Hacker",
    "CISSP - Certified Information Systems Security Professional",
    "GCIH - GIAC Certified Incident Handler",
    "GPEN - GIAC Penetration Tester",
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <Award size={24} className="text-primary" />
              <h3 className="text-3xl font-semibold text-foreground">Technical Skills</h3>
            </div>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="text-foreground font-medium text-lg">{skill.name}</span>
                    <span className="text-muted-foreground font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-chart-2 rounded-full transition-all duration-1000 ease-out apple-shadow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-10">
              <BookOpen size={24} className="text-primary" />
              <h3 className="text-3xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-4 mb-10">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 glass-morphism border border-border rounded-2xl apple-hover">
                  <p className="text-foreground font-medium leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>

            <div className="glass-morphism border border-border rounded-3xl p-8">
              <h4 className="text-2xl font-semibold text-foreground mb-4">Continuous Learning</h4>
              <p className="text-muted-foreground leading-relaxed">
                Staying updated with the latest security trends, vulnerabilities, and attack techniques through
                continuous research, training, and hands-on practice in controlled environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
