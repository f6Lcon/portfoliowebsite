"use client"

import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

function MobileHeader({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) {
  // Map section IDs to display names
  const sectionNames = {
    resume: "Resume",
    experience: "Experience",
    certifications: "Certifications",
    blog: "Blog",
    portfolio: "Portfolio",
    contact: "Contact",
  }

  return (
    <div className="flex items-center justify-between bg-zinc-900/80 backdrop-blur-sm rounded-xl p-3 border border-zinc-800 shadow-lg">
      <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
      <h1 className="text-lg font-bold">{sectionNames[activeSection] || "Portfolio"}</h1>
      <div className="w-8"></div> {/* Empty div for flex spacing */}
    </div>
  )
}

export default MobileHeader
