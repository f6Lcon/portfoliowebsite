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

    // Cybersecurity and JavaScript related symbols and keywords
    const characters = [
      // JavaScript syntax
      "function",
      "const",
      "let",
      "var",
      "=>",
      "return",
      "async",
      "await",
      "import",
      "export",
      "class",
      "extends",
      "new",
      "this",
      "super",
      "static",
      "get",
      "set",
      "if",
      "else",
      "for",
      "while",
      "switch",
      "case",
      "break",
      "continue",
      "try",
      "catch",
      "finally",
      "throw",

      // Cybersecurity terms
      "encryption",
      "firewall",
      "malware",
      "exploit",
      "vulnerability",
      "payload",
      "backdoor",
      "cipher",
      "hash",
      "authentication",
      "authorization",
      "injection",
      "XSS",
      "CSRF",
      "DoS",
      "buffer overflow",
      "zero-day",
      "ransomware",
      "phishing",
      "spoofing",
      "honeypot",

      // Symbols
      "{",
      "}",
      "[",
      "]",
      "(",
      ")",
      "<",
      ">",
      "&&",
      "||",
      "===",
      "!==",
      "+=",
      "-=",
      "*=",
      "/=",
      "++",
      "--",
      "//",
      "/*",
      "*/",
      "0x",
      "0b",
      "0o",
      "#",
      "$",
      "@",
      "~",
      "|",
      "&",
      "^",
      "%",

      // Binary and hex
      "0",
      "1",
      "0x1F",
      "0xFF",
      "0b1010",
      "0b0101",
      "0xDEADBEEF",
      "0xC0FFEE",
      "0xBAADF00D",
    ]

    // Create an array of falling text columns
    const columns = []
    const columnCount = Math.floor(canvas.width / 20) // Adjust spacing between columns

    for (let i = 0; i < columnCount; i++) {
      columns.push({
        x: i * 20,
        y: Math.random() * -1000, // Start at random positions above the canvas
        speed: Math.random() * 2 + 1,
        text: characters[Math.floor(Math.random() * characters.length)],
        size: Math.floor(Math.random() * 6) + 10, // Random font size between 10-16px
        color: `rgba(${Math.random() > 0.8 ? "124, 58, 237" : "0, 255, 0"}, ${Math.random() * 0.5 + 0.1})`, // Purple or green with random opacity
        changeInterval: Math.random() * 200 + 100, // Change text every 100-300 frames
      })
    }

    // Animation loop
    let frameCount = 0
    const animate = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(9, 9, 11, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw each column
      columns.forEach((column, index) => {
        ctx.fillStyle = column.color
        ctx.font = `${column.size}px monospace`
        ctx.fillText(column.text, column.x, column.y)

        // Move column down
        column.y += column.speed

        // If column goes off screen, reset to top with new properties
        if (column.y > canvas.height) {
          column.y = Math.random() * -100
          column.speed = Math.random() * 2 + 1
          column.size = Math.floor(Math.random() * 6) + 10
          column.color = `rgba(${Math.random() > 0.8 ? "124, 58, 237" : "0, 255, 0"}, ${Math.random() * 0.5 + 0.1})`
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

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30" style={{ zIndex: 0 }} />
}

export default CodeBackground
