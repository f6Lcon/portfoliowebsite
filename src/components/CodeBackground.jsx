"use client"

import { useEffect, useRef } from "react"

function CodeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Set canvas dimensions to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Cybersecurity and programming related symbols and keywords
    const characters = [
      // Programming languages
      "python",
      "bash",
      "powershell",
      "javascript",
      "sql",
      "php",
      "c++",
      "ruby",
      "perl",

      // Cybersecurity terms
      "exploit",
      "payload",
      "shellcode",
      "backdoor",
      "rootkit",
      "keylogger",
      "botnet",
      "phishing",
      "malware",
      "ransomware",
      "trojan",
      "worm",
      "virus",
      "spyware",
      "adware",
      "firewall",
      "ids",
      "ips",
      "siem",
      "soc",
      "apt",
      "ttp",
      "ioc",
      "mitre",
      "nist",
      "owasp",
      "cve",
      "cvss",
      "nmap",
      "metasploit",
      "burpsuite",
      "wireshark",
      "kali",
      "parrot",
      "blackarch",
      "oscp",
      "ceh",
      "cissp",
      "sans",
      "giac",

      // Network terms
      "tcp",
      "udp",
      "http",
      "https",
      "ssl",
      "tls",
      "dns",
      "dhcp",
      "arp",
      "icmp",
      "snmp",
      "ftp",
      "ssh",
      "telnet",
      "smtp",
      "pop3",
      "imap",

      // Symbols and operators
      "&&",
      "||",
      ">>",
      "<<",
      "|",
      "&",
      "^",
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "*",
      "+",
      "-",
      "=",
      "<",
      ">",
      "?",
      ":",
      ";",
      "{",
      "}",
      "[",
      "]",
      "(",
      ")",

      // Binary and hex
      "0x41414141",
      "0xdeadbeef",
      "0xcafebabe",
      "0x90909090",
      "\\x41\\x41\\x41\\x41",
      "/bin/sh",
      "/etc/passwd",
      "/etc/shadow",
      "cmd.exe",
      "powershell.exe",
      "nc -lvp",
      "rm -rf",
      "sudo su",
      "chmod 777",
    ]

    // Create an array of falling text columns
    const columns = []
    const columnCount = Math.floor(canvas.width / 20)

    for (let i = 0; i < columnCount; i++) {
      columns.push({
        x: i * 20,
        y: Math.random() * -1000,
        speed: Math.random() * 2 + 1,
        text: characters[Math.floor(Math.random() * characters.length)],
        size: Math.floor(Math.random() * 6) + 10,
        color: `rgba(${Math.random() > 0.7 ? "95, 215, 135" : "34, 139, 34"}, ${Math.random() * 0.3 + 0.05})`, // Ayu green colors
        changeInterval: Math.random() * 200 + 100,
      })
    }

    // Animation loop
    let frameCount = 0
    const animate = () => {
      // Semi-transparent background to create trail effect
      ctx.fillStyle = "rgba(13, 17, 23, 0.03)" // Ayu dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw each column
      columns.forEach((column, index) => {
        ctx.fillStyle = column.color
        ctx.font = `${column.size}px 'Fira Code', monospace`
        ctx.fillText(column.text, column.x, column.y)

        // Move column down
        column.y += column.speed

        // If column goes off screen, reset to top with new properties
        if (column.y > canvas.height) {
          column.y = Math.random() * -100
          column.speed = Math.random() * 2 + 1
          column.size = Math.floor(Math.random() * 6) + 10
          column.color = `rgba(${Math.random() > 0.7 ? "95, 215, 135" : "34, 139, 34"}, ${Math.random() * 0.3 + 0.05})`
        }

        // Periodically change the text
        if (frameCount % Math.floor(column.changeInterval) === 0) {
          column.text = characters[Math.floor(Math.random() * characters.length)]
        }
      })

      frameCount++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-15" style={{ zIndex: 0 }} />
}

export default CodeBackground
