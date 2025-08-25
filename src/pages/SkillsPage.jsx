"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Terminal, Shield, Zap, Target, Eye, Lock } from "lucide-react"

const SkillsPage = () => {
  const canvasRef = useRef(null)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const redTeamSkills = [
    { name: "RECONNAISSANCE", level: 95, icon: Eye, color: "#ff0040" },
    { name: "WEAPONIZATION", level: 90, icon: Zap, color: "#ff4000" },
    { name: "DELIVERY", level: 88, icon: Target, color: "#ff8000" },
    { name: "EXPLOITATION", level: 95, icon: Lock, color: "#ffbf00" },
    { name: "INSTALLATION", level: 92, icon: Shield, color: "#80ff00" },
    { name: "C2 OPERATIONS", level: 94, icon: Terminal, color: "#00ff80" },
    { name: "ACTIONS ON OBJECTIVES", level: 90, icon: Target, color: "#00ffff" },
    { name: "PERSISTENCE", level: 87, icon: Lock, color: "#0080ff" },
  ]

  const hackingTools = [
    { name: "Metasploit Framework", category: "Exploitation", threat: "HIGH" },
    { name: "Cobalt Strike", category: "C2 Framework", threat: "CRITICAL" },
    { name: "BloodHound", category: "AD Enumeration", threat: "HIGH" },
    { name: "Empire/Starkiller", category: "Post-Exploitation", threat: "HIGH" },
    { name: "Burp Suite Pro", category: "Web Application", threat: "MEDIUM" },
    { name: "Nmap/Masscan", category: "Network Discovery", threat: "LOW" },
    { name: "Wireshark", category: "Traffic Analysis", threat: "LOW" },
    { name: "Hashcat", category: "Password Cracking", threat: "MEDIUM" },
    { name: "Ghidra/IDA Pro", category: "Reverse Engineering", threat: "MEDIUM" },
    { name: "Responder", category: "Network Poisoning", threat: "HIGH" },
    { name: "Mimikatz", category: "Credential Dumping", threat: "CRITICAL" },
    { name: "PowerShell Empire", category: "Living off Land", threat: "HIGH" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) - 60

    const drawCyberRadar = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.95)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 1; i <= 5; i++) {
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + i * 0.1})`
        ctx.lineWidth = 1
        ctx.shadowColor = "#00ffff"
        ctx.shadowBlur = 5
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius * i) / 5, 0, 2 * Math.PI)
        ctx.stroke()
      }

      ctx.shadowBlur = 0
      redTeamSkills.forEach((skill, index) => {
        const angle = (index * 45 * Math.PI) / 180
        const radius = (skill.level / 100) * maxRadius

        ctx.strokeStyle = skill.color
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(angle - Math.PI / 2) * maxRadius,
          centerY + Math.sin(angle - Math.PI / 2) * maxRadius,
        )
        ctx.stroke()

        const x = centerX + Math.cos(angle - Math.PI / 2) * radius
        const y = centerY + Math.sin(angle - Math.PI / 2) * radius

        ctx.fillStyle = skill.color
        ctx.shadowColor = skill.color
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fill()

        ctx.shadowBlur = 0
        ctx.fillStyle = "#ffffff"
        ctx.font = "10px 'Courier New', monospace"
        ctx.textAlign = "center"
        const labelX = centerX + Math.cos(angle - Math.PI / 2) * (maxRadius + 30)
        const labelY = centerY + Math.sin(angle - Math.PI / 2) * (maxRadius + 30)
        ctx.fillText(skill.name, labelX, labelY)
        ctx.fillText(`${skill.level}%`, labelX, labelY + 12)
      })
    }

    drawCyberRadar()
    const interval = setInterval(drawCyberRadar, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Red Team Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Offensive security capabilities and attack vectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-morphism p-6 rounded-2xl mb-8"
        >
          <h2 className="text-xl font-bold text-center mb-6 text-primary">Kill Chain Proficiency Matrix</h2>
          <div className="flex justify-center mb-6">
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              className="max-w-full h-auto border border-primary/30 rounded"
            />
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {redTeamSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="glass-morphism p-3 rounded-xl text-center apple-hover">
                  <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <div className="text-foreground font-semibold text-xs">{skill.name.split(" ")[0]}</div>
                  <div className="text-primary font-bold text-xs">{skill.level}%</div>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-morphism p-6 rounded-2xl"
        >
          <h2 className="text-xl font-bold text-center mb-6 text-primary">Arsenal & Toolchain</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {hackingTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="glass-morphism p-3 rounded-xl apple-hover group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {tool.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      tool.threat === "CRITICAL"
                        ? "bg-red-500/20 text-red-400 border border-red-400/30"
                        : tool.threat === "HIGH"
                          ? "bg-orange-500/20 text-orange-400 border border-orange-400/30"
                          : tool.threat === "MEDIUM"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                            : "bg-green-500/20 text-green-400 border border-green-400/30"
                    }`}
                  >
                    {tool.threat}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsPage
