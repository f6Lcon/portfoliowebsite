"use client"

import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import CodeBackground from "./components/CodeBackground"
import MobileHeader from "./components/MobileHeader"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("resume")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Auto-collapse sidebar on mobile screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative flex flex-col h-screen bg-zinc-950 text-white p-2 sm:p-4 overflow-hidden">
      {/* Animated Background */}
      <CodeBackground />

      {/* Mobile Header - only visible on small screens */}
      <div className="block md:hidden mb-2">
        <MobileHeader
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      <div className="relative z-10 flex w-full h-full justify-center">
        {/* Sidebar - conditionally shown on mobile */}
        <div className={`${sidebarOpen ? "block" : "hidden"} md:block h-full`}>
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            closeSidebar={() => setSidebarOpen(false)}
          />
        </div>

        {/* Main Content - full width on mobile when sidebar is closed */}
        <div className={`${sidebarOpen ? "hidden" : "w-full"} md:block md:w-[70%] h-full`}>
          <Dashboard activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}

export default App
