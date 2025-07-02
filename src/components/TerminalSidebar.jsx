"use client"

import { useState } from "react"
import { FileText, Award, FolderOpen, Terminal, ChevronRight } from "lucide-react"

function TerminalSidebar({ activeSection, setActiveSection, closeSidebar }) {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { id: "resume", label: "whoami", command: "./whoami.sh", icon: FileText },
    { id: "certifications", label: "certs", command: "./list_certs.py", icon: Award },
    { id: "portfolio", label: "projects", command: "./show_projects.sh", icon: FolderOpen },
  ]

  const handleMenuClick = (id) => {
    setActiveSection(id)
    if (window.innerWidth < 768) {
      closeSidebar()
    }
  }

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-80"
      } h-full bg-terminal-window border border-terminal-border rounded transition-all duration-300 flex flex-col overflow-hidden`}
    >
      {/* Terminal Window Header */}
      <div className="bg-terminal-header border-b border-terminal-border p-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-terminal-green" />
          {!collapsed && <span className="text-xs text-terminal-green">navigation.terminal</span>}
        </div>
        <div className="flex gap-1">
          <button
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 hidden md:block"
            onClick={() => setCollapsed(!collapsed)}
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 md:hidden"
            onClick={closeSidebar}
          ></button>
        </div>
      </div>

      {/* ASCII Art Profile */}
      {!collapsed && (
        <div className="p-4 border-b border-terminal-border">
          <pre className="text-xs text-terminal-green leading-tight">
            {`    ██████╗ ███████╗██████╗ 
    ██╔══██╗██╔════╝██╔══██╗
    ██████╔╝█████╗  ██║  ██║
    ██╔══██╗██╔══╝  ██║  ██║
    ██║  ██║███████╗██████╔╝
    ╚═╝  ╚═╝╚══════╝╚═════╝ 
         TEAM OPERATOR`}
          </pre>
          <div className="mt-2 text-xs">
            <div className="text-terminal-comment">
              STATUS: <span className="text-terminal-green">ONLINE</span>
            </div>
            <div className="text-terminal-comment">
              CLEARANCE: <span className="text-red-400">CLASSIFIED</span>
            </div>
            <div className="text-terminal-comment">
              MODE: <span className="text-terminal-green">OPERATIONAL</span>
            </div>
          </div>
        </div>
      )}

      {/* Terminal Commands */}
      <div className="flex-1 p-2">
        <div className="space-y-1">
          {!collapsed && <div className="text-xs text-terminal-comment mb-2">root@redteam-ops:~$ ls -la</div>}
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`w-full text-left p-2 rounded transition-colors ${
                  activeSection === item.id
                    ? "bg-terminal-green bg-opacity-20 text-terminal-green border border-terminal-green"
                    : "text-terminal-comment hover:bg-terminal-border hover:text-terminal-green"
                }`}
                onClick={() => handleMenuClick(item.id)}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {!collapsed && (
                    <div className="flex-1">
                      <div className="text-xs font-mono">{item.command}</div>
                      <div className="text-xs text-terminal-comment"># {item.label}</div>
                    </div>
                  )}
                  {activeSection === item.id && !collapsed && <ChevronRight className="w-3 h-3 text-terminal-green" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* System Info */}
      {!collapsed && (
        <div className="border-t border-terminal-border p-3">
          <div className="text-xs space-y-1">
            <div className="text-terminal-comment">SKILLS LOADED:</div>
            <div className="flex flex-wrap gap-1">
              {["OSINT", "PENTEST", "EXPLOIT", "SOCIAL-ENG"].map((skill) => (
                <span key={skill} className="text-xs bg-terminal-border px-1 rounded text-terminal-green">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TerminalSidebar
