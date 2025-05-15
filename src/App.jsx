"use client"

import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("resume")

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <Dashboard activeSection={activeSection} />
    </div>
  )
}

export default App
