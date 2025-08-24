"use client"

import { motion } from "framer-motion"
import { Shield, Award, Code, Target, Users, Zap } from "lucide-react"

const AboutPage = () => {
  const skills = [
    { icon: Shield, title: "Penetration Testing", description: "Web applications, networks, and infrastructure" },
    { icon: Code, title: "Exploit Development", description: "Custom payloads and proof-of-concepts" },
    { icon: Target, title: "Cyber Operations", description: "Advanced persistent threat simulation" },
    { icon: Users, title: "Social Engineering", description: "Human factor security assessments" },
    { icon: Zap, title: "Incident Response", description: "Threat hunting and forensic analysis" },
    { icon: Award, title: "Compliance", description: "Security frameworks and standards" },
  ]

  const certifications = [
    "OSCP - Offensive Security Certified Professional",
    "CISSP - Certified Information Systems Security Professional",
    "CEH - Certified Ethical Hacker",
    "ALX SWE - Certified Software Enfineer"
  
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
            About Gray
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cybersecurity professional with 8+ years of experience in offensive security, penetration testing, and red
            team operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-primary">Professional Background</h2>
            <p className="text-muted-foreground mb-4">
              Specialized in offensive security operations with extensive experience in penetration testing,
              vulnerability assessment, and cyber operations across various industries including finance, healthcare,
              and government sectors.
            </p>
            <p className="text-muted-foreground">
              Passionate about staying ahead of emerging threats and developing innovative security solutions to protect
              organizations from sophisticated cyber attacks.
            </p>
          </div>

          <div className="glass-morphism p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-primary">Certifications</h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <Award className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="glass-morphism p-6 rounded-2xl apple-hover text-center"
                >
                  <Icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
