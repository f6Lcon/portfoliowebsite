"use client"

import { useState } from "react"
import {
  User,
  Briefcase,
  Code,
  Award,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

function Sidebar({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const handleMenuClick = (id) => {
    setActiveSection(id)
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""} ${collapsed ? "sidebar-collapsed" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <button className="mobile-close-btn" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>

          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Profile Section */}
        <div className="sidebar-profile">
          <div className="profile-image">
            <img src="/profile.png" alt="f6Lcon Profile" />
            <div className="status-indicator"></div>
          </div>

          {!collapsed && (
            <>
              <h3 className="profile-name">Muriithi Dennis</h3>
              <p className="profile-title">Cybersecurity Specialist</p>
              <p className="profile-subtitle">Software Engineer</p>

              <div className="profile-social">
                <a href="https://github.com/f6Lcon" target="_blank" rel="noreferrer" className="social-link">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/f6Lcon" target="_blank" rel="noreferrer" className="social-link">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:muriithidennis340@gmail.com" className="social-link">
                  <Mail size={18} />
                </a>
              </div>
            </>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleMenuClick(item.id)}
                title={collapsed ? item.label : ""}
              >
                <Icon size={20} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {/* Download CV Button */}
        {!collapsed && (
          <div className="sidebar-footer">
            <a href="/resume.pdf" download className="download-btn">
              <Download size={18} />
              Download CV
            </a>
          </div>
        )}
      </div>
    </>
  )
}

export default Sidebar
