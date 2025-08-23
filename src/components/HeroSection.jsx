"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Download } from "lucide-react"

const HeroSection = () => {
  const [text, setText] = useState("")
  const fullText = "Cybersecurity Specialist"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-bold text-foreground mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-4 bg-clip-text text-transparent">
              GRAY
            </span>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-medium text-muted-foreground">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Penetration Tester • Security Researcher • Ethical Hacker
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center space-x-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl apple-hover apple-shadow"
          >
            <span>View My Work</span>
            <ArrowDown size={20} />
          </button>
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center space-x-3 px-8 py-4 glass-morphism text-foreground font-semibold rounded-2xl apple-hover border border-border"
          >
            <Download size={20} />
            <span>Get In Touch</span>
          </button>
        </div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-chart-2/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-chart-4/30 rounded-full animate-pulse delay-2000"></div>
      </div>
    </section>
  )
}

export default HeroSection
