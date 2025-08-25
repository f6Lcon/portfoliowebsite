"use client"

import { ArrowRight, Shield, Code, Target } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const HomePage = () => {
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
            GRAY
          </h1>
          <p className="text-lg text-muted-foreground mb-4">Cybersecurity Specialist & Security Researcher</p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Penetration testing, vulnerability assessment, and offensive security operations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="glass-morphism p-6 rounded-2xl apple-hover group">
            <Shield className="w-12 h-12 text-primary mb-4 mx-auto group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Penetration Testing</h3>
            <p className="text-muted-foreground">Comprehensive security assessments and vulnerability identification</p>
          </div>
          <div className="glass-morphism p-6 rounded-2xl apple-hover group">
            <Code className="w-12 h-12 text-primary mb-4 mx-auto group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Exploit Development</h3>
            <p className="text-muted-foreground">Custom payload creation and advanced exploitation techniques</p>
          </div>
          <div className="glass-morphism p-6 rounded-2xl apple-hover group">
            <Target className="w-12 h-12 text-primary mb-4 mx-auto group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Cyber Operations</h3>
            <p className="text-muted-foreground">Simulated attacks and security posture evaluation</p>
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
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-colors apple-hover"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 glass-morphism text-foreground rounded-2xl font-semibold apple-hover"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage
