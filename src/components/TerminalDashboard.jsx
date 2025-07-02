"use client"

import { Menu, Terminal } from "lucide-react"
import Resume from "./sections/TerminalResume"
import Certifications from "./sections/TerminalCertifications"
import Portfolio from "./sections/TerminalPortfolio"

function TerminalDashboard({ activeSection, sidebarOpen, setSidebarOpen }) {
  const getSectionTitle = () => {
    switch (activeSection) {
      case "resume":
        return "whoami.sh"
      case "certifications":
        return "list_certs.py"
      case "portfolio":
        return "show_projects.sh"
      default:
        return "terminal.sh"
    }
  }

  return (
    <div className="h-full bg-terminal-window border border-terminal-border rounded flex flex-col overflow-hidden">
      {/* Terminal Window Header */}
      <div className="bg-terminal-header border-b border-terminal-border p-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-terminal-green hover:text-terminal-green-bright"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-4 h-4" />
          </button>
          <Terminal className="w-4 h-4 text-terminal-green" />
          <span className="text-xs text-terminal-green">{getSectionTitle()}</span>
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-4 font-mono">
        <div className="text-xs text-terminal-comment mb-2">root@redteam-ops:~$ ./{getSectionTitle()}</div>
        <div className="text-terminal-green mb-4">Executing {getSectionTitle()}...</div>

        {activeSection === "resume" && <Resume />}
        {activeSection === "certifications" && <Certifications />}
        {activeSection === "portfolio" && <Portfolio />}

        {/* Terminal Cursor */}
        <div className="flex items-center mt-4">
          <span className="text-terminal-comment">root@redteam-ops:~$ </span>
          <span className="bg-terminal-green w-2 h-4 ml-1 animate-pulse"></span>
        </div>
      </div>
    </div>
  )
}

export default TerminalDashboard
