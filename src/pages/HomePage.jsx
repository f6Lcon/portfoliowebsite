"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Code, Target } from "lucide-react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            GRAY
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Cybersecurity Specialist & Security Researcher
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Penetration testing, vulnerability assessment, and offensive security operations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          <div className="glass-morphism p-4 rounded-2xl apple-hover">
            <Shield className="w-8 h-8 text-primary mb-2 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Penetration Testing</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive security assessments and vulnerability identification
            </p>
          </div>
          <div className="glass-morphism p-4 rounded-2xl apple-hover">
            <Code className="w-8 h-8 text-primary mb-2 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Exploit Development</h3>
            <p className="text-sm text-muted-foreground">
              Custom payload creation and advanced exploitation techniques
            </p>
          </div>
          <div className="glass-morphism p-4 rounded-2xl apple-hover">
            <Target className="w-8 h-8 text-primary mb-2 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Cyber Operations</h3>
            <p className="text-sm text-muted-foreground">Simulated attacks and security posture evaluation</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold apple-hover cyber-glow group"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 glass-morphism text-foreground rounded-xl font-semibold apple-hover"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage
