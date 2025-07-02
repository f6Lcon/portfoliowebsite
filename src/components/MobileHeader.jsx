"use client"

import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

function MobileHeader({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) {
  // Map section IDs to display names
  const sectionNames = {
    resume: "Overview",
    certifications: "Certifications",
    portfolio: "Portfolio",
  }

  return (
    <div className="flex items-center justify-between bg-ayu-sidebar backdrop-blur-sm rounded-xl p-3 border border-ayu-border shadow-lg">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-ayu-text hover:bg-ayu-surface"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
      <h1 className="text-lg font-bold text-ayu-text">{sectionNames[activeSection] || "Portfolio"}</h1>
      <div className="w-8"></div> {/* Empty div for flex spacing */}
    </div>
  )
}

export default MobileHeader
