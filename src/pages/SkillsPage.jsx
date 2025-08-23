"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const SkillsPage = () => {
  const canvasRef = useRef(null)

  const radarData = [
    { skill: "PACKET CAPTURE\nANALYSIS", value: 85, angle: 0 },
    { skill: "PASSWORD REUSE", value: 90, angle: 30 },
    { skill: "REVERSING", value: 75, angle: 60 },
    { skill: "CRYPTO", value: 80, angle: 90 },
    { skill: "PWN", value: 95, angle: 120 },
    { skill: "WEB", value: 92, angle: 150 },
    { skill: "MISC", value: 78, angle: 180 },
    { skill: "FORENSICS", value: 88, angle: 210 },
    { skill: "MOBILE", value: 70, angle: 240 },
    { skill: "OSINT", value: 85, angle: 270 },
    { skill: "HARDWARE", value: 65, angle: 300 },
    { skill: "GAMEPWN", value: 72, angle: 330 },
  ]

  const radarData2 = [
    { skill: "ICS", value: 60, angle: 30 },
    { skill: "SUID EXPLOITATION", value: 88, angle: 90 },
    { skill: "SECURE\nCODING", value: 82, angle: 120 },
    { skill: "CODING", value: 95, angle: 180 },
    { skill: "AI - ML", value: 70, angle: 210 },
    { skill: "BLOCKCHAIN", value: 55, angle: 270 },
    { skill: "LOG ANALYSIS", value: 90, angle: 300 },
    { skill: "VULNERABILITY\nASSESSMENT", value: 92, angle: 330 },
    { skill: "SECURITY OPERATIONS", value: 87, angle: 0 },
    { skill: "INJECTIONS", value: 89, angle: 60 },
    { skill: "WEB\nAPPLICATION", value: 94, angle: 150 },
    { skill: "COMMON\nSECURITY\nCONTROLS", value: 85, angle: 240 },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const centerX = canvas.width / 4
    const centerY = canvas.height / 2
    const centerX2 = (canvas.width * 3) / 4
    const maxRadius = Math.min(centerX, centerY) - 80

    const drawRadarChart = (data, centerX, centerY) => {
      // Draw grid circles
      ctx.strokeStyle = "rgba(0, 255, 255, 0.3)"
      ctx.lineWidth = 1
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius * i) / 5, 0, 2 * Math.PI)
        ctx.stroke()
      }

      // Draw grid lines
      data.forEach((item) => {
        const angle = (item.angle * Math.PI) / 180
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(angle - Math.PI / 2) * maxRadius,
          centerY + Math.sin(angle - Math.PI / 2) * maxRadius,
        )
        ctx.stroke()
      })

      // Draw skill labels
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.font = "10px monospace"
      ctx.textAlign = "center"
      data.forEach((item) => {
        const angle = (item.angle * Math.PI) / 180
        const labelRadius = maxRadius + 30
        const x = centerX + Math.cos(angle - Math.PI / 2) * labelRadius
        const y = centerY + Math.sin(angle - Math.PI / 2) * labelRadius

        const lines = item.skill.split("\n")
        lines.forEach((line, index) => {
          ctx.fillText(line, x, y + index * 12)
        })
      })

      // Draw data polygon
      ctx.strokeStyle = "#00ff00"
      ctx.fillStyle = "rgba(0, 255, 0, 0.2)"
      ctx.lineWidth = 2
      ctx.beginPath()

      data.forEach((item, index) => {
        const angle = (item.angle * Math.PI) / 180
        const radius = (item.value / 100) * maxRadius
        const x = centerX + Math.cos(angle - Math.PI / 2) * radius
        const y = centerY + Math.sin(angle - Math.PI / 2) * radius

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Draw data points
      ctx.fillStyle = "#00ff00"
      data.forEach((item) => {
        const angle = (item.angle * Math.PI) / 180
        const radius = (item.value / 100) * maxRadius
        const x = centerX + Math.cos(angle - Math.PI / 2) * radius
        const y = centerY + Math.sin(angle - Math.PI / 2) * radius

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fill()
      })
    }

    // Clear canvas
    ctx.fillStyle = "rgba(15, 23, 42, 0.9)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw both radar charts
    drawRadarChart(radarData, centerX, centerY)
    drawRadarChart(radarData2, centerX2, centerY)
  }, [])

  const tools = [
    { name: "Metasploit", category: "Exploitation" },
    { name: "Burp Suite", category: "Web Testing" },
    { name: "Nmap", category: "Network Scanning" },
    { name: "Wireshark", category: "Network Analysis" },
    { name: "Cobalt Strike", category: "Red Team" },
    { name: "BloodHound", category: "AD Enumeration" },
    { name: "OWASP ZAP", category: "Web Testing" },
    { name: "Nessus", category: "Vulnerability Scanning" },
    { name: "Kali Linux", category: "Operating System" },
    { name: "PowerShell Empire", category: "Post-Exploitation" },
    { name: "Ghidra", category: "Reverse Engineering" },
    { name: "John the Ripper", category: "Password Cracking" },
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
            Technical Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in offensive security, penetration testing, and cybersecurity operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-morphism p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Skills Assessment</h2>
          <div className="flex justify-center">
            <canvas ref={canvasRef} width={800} height={400} className="max-w-full h-auto" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-morphism p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Security Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="bg-card p-4 rounded-xl apple-hover text-center group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsPage
