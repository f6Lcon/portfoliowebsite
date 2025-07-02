"use client"

import { useState } from "react"
import { FileText, Award, FolderOpen, ChevronLeft, ChevronRight, Github, Linkedin, Twitter, X } from "lucide-react"
import SkillBadge from "./SkillBadge"

function Sidebar({ activeSection, setActiveSection, closeSidebar }) {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { id: "resume", label: "Overview", icon: FileText },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  ]

  const skills = ["Python", "JavaScript", "Burp Suite", "Metasploit", "Wireshark", "Kali Linux", "OSCP"]

  const handleMenuClick = (id) => {
    setActiveSection(id)
    // On mobile, close the sidebar after selection
    if (window.innerWidth < 768) {
      closeSidebar()
    }
  }

  return (
    <div
      className={`relative ${
        collapsed ? "w-20" : "w-72"
      } h-full bg-ayu-sidebar backdrop-blur-sm border border-ayu-border rounded-2xl transition-all duration-300 flex flex-col mr-0 md:mr-4 overflow-hidden shadow-xl`}
    >
      {/* Mobile close button - only visible on small screens */}
      <button className="absolute top-2 right-2 p-1 rounded-full bg-ayu-surface md:hidden" onClick={closeSidebar}>
        <X size={16} />
      </button>

      {/* Collapse toggle button - hidden on mobile */}
      <button
        className="absolute -right-3 top-8 z-10 bg-ayu-accent rounded-full p-1 text-ayu-bg shadow-lg hidden md:block"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Profile section */}
      <div className={`flex flex-col items-center py-8 ${collapsed ? "px-2" : "px-6"}`}>
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-ayu-accent">
            <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-ayu-accent rounded-full border-2 border-ayu-sidebar"></div>
        </div>

        {!collapsed && (
          <>
            <h2 className="mt-4 text-lg font-bold">Red Team Operator</h2>
            <p className="text-sm text-ayu-comment">Cybersecurity Professional</p>

            <div className="flex gap-2 mt-4">
              <a href="#" target="_blank" rel="noreferrer" className="text-ayu-comment hover:text-ayu-accent">
                <Github size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-ayu-comment hover:text-ayu-accent">
                <Linkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-ayu-comment hover:text-ayu-accent">
                <Twitter size={18} />
              </a>
            </div>
          </>
        )}
      </div>

      {/* Secure contact info - no button needed */}
      {!collapsed && (
        <div className="px-4 mb-4">
          <div className="bg-ayu-surface rounded-lg p-3 text-center">
            <p className="text-xs text-ayu-comment">Secure communications available</p>
            <p className="text-xs text-ayu-accent">via professional channels</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  className={`w-full flex items-center ${
                    collapsed ? "justify-center" : "justify-start"
                  } gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-ayu-accent text-ayu-bg"
                      : "text-ayu-comment hover:bg-ayu-surface hover:text-ayu-text"
                  }`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <Icon size={18} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Skills section */}
      {!collapsed && (
        <div className="px-4 py-4 border-t border-ayu-border">
          <h3 className="text-sm font-medium text-ayu-comment mb-3">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill} small />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
