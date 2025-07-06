"use client"

import { Menu } from "lucide-react"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Certifications from "./sections/Certifications"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function Dashboard({ activeSection, sidebarOpen, setSidebarOpen }) {
  const getSectionTitle = () => {
    const titles = {
      about: "About Me",
      experience: "Experience",
      skills: "Skills & Technologies",
      certifications: "Certifications",
      projects: "Projects",
      contact: "Contact",
    }
    return titles[activeSection] || "Dashboard"
  }

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />
      case "experience":
        return <Experience />
      case "skills":
        return <Skills />
      case "certifications":
        return <Certifications />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div className="dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu size={24} />
        </button>
        <h1 className="dashboard-title">{getSectionTitle()}</h1>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">{renderSection()}</div>
    </div>
  )
}

export default Dashboard
