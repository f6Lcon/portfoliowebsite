"use client"

import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import CodeBackground from "./components/CodeBackground"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("resume")

  return (
    <div className="relative flex h-screen bg-zinc-950 text-white p-4 overflow-hidden">
      {/* Animated Background */}
      <CodeBackground />

      <div className="relative z-10 flex w-full justify-center">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content - reduced to 70% */}
        <div className="w-[70%]">
          <Dashboard activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}

export default App
