"use client"

import { useEffect, useRef } from "react"

function HackerBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Hacker-themed characters and commands
    const characters = [
      // Terminal commands
      "sudo",
      "nmap",
      "nc",
      "ssh",
      "curl",
      "wget",
      "grep",
      "awk",
      "sed",
      "cat",
      "ls",
      "cd",
      "pwd",
      "chmod",
      "chown",
      "ps",
      "kill",
      "top",
      "netstat",
      "ifconfig",

      // Hacking tools
      "metasploit",
      "burpsuite",
      "wireshark",
      "aircrack",
      "hashcat",
      "john",
      "hydra",
      "sqlmap",
      "nikto",
      "dirb",
      "gobuster",
      "ffuf",
      "masscan",
      "zap",

      // Code snippets
      "#!/bin/bash",
      "import os",
      "import sys",
      "import socket",
      "import subprocess",
      "def exploit():",
      "class Payload:",
      "try:",
      "except:",
      "if __name__:",

      // Network/Security terms
      "192.168.1.1",
      "10.0.0.1",
      "127.0.0.1",
      "0.0.0.0",
      "255.255.255.0",
      "443",
      "80",
      "22",
      "21",
      "23",
      "53",
      "3389",

      // Hex and binary
      "0x41414141",
      "0xdeadbeef",
      "0xcafebabe",
      "\\x90\\x90\\x90\\x90",
      "/bin/sh",
      "/etc/passwd",
      "/etc/shadow",
      "cmd.exe",

      // Symbols
      "$",
      "#",
      ">",
      "|",
      "&",
      "&&",
      "||",
      ">>",
      "<<",
      "~",
      "*",
      "?",
      "[",
      "]",
      "{",
      "}",
      "(",
      ")",
    ]

    // Create falling text columns
    const columns = []
    const columnCount = Math.floor(canvas.width / 20)

    for (let i = 0; i < columnCount; i++) {
      columns.push({
        x: i * 20,
        y: Math.random() * -1000,
        speed: Math.random() * 3 + 1,
        text: characters[Math.floor(Math.random() * characters.length)],
        size: Math.floor(Math.random() * 4) + 10,
        color: `rgba(0, 255, 0, ${Math.random() * 0.5 + 0.1})`,
        changeInterval: Math.random() * 150 + 50,
      })
    }

    // Animation loop
    let frameCount = 0
    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw scan lines effect
      if (frameCount % 60 === 0) {
        ctx.fillStyle = "rgba(0, 255, 0, 0.02)"
        ctx.fillRect(0, Math.random() * canvas.height, canvas.width, 2)
      }

      // Draw falling text
      columns.forEach((column) => {
        ctx.fillStyle = column.color
        ctx.font = `${column.size}px 'Courier New', monospace`
        ctx.fillText(column.text, column.x, column.y)

        column.y += column.speed

        if (column.y > canvas.height) {
          column.y = Math.random() * -100
          column.speed = Math.random() * 3 + 1
          column.size = Math.floor(Math.random() * 4) + 10
          column.color = `rgba(0, 255, 0, ${Math.random() * 0.5 + 0.1})`
        }

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

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-10" style={{ zIndex: 0 }} />
}

export default HackerBackground
