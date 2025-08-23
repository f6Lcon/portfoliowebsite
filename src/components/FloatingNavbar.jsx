"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, User, FolderOpen, Award, Mail } from "lucide-react"

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/skills", label: "Skills", icon: Award },
    { path: "/contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "glass-morphism apple-shadow-lg" : "glass-morphism apple-shadow"
      } rounded-2xl px-4 py-3`}
    >
      <div className="flex items-center space-x-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium apple-hover ${
                isActive
                  ? "bg-primary text-primary-foreground apple-shadow cyber-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default FloatingNavbar
