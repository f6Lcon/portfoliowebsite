"use client"
import { Link, useLocation } from "react-router-dom"
import { Home, User, FolderOpen, Award, Mail } from "lucide-react"

const FloatingNavbar = () => {
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/skills", label: "Skills", icon: Award },
    { path: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed left-0 top-0 h-full w-64 z-50 glass-morphism apple-shadow-lg border-r border-border/20 flex flex-col">
      <div className="p-6 border-b border-border/20">
        <h1 className="text-2xl font-bold text-primary cyber-glow">GRAY</h1>
        <p className="text-sm text-muted-foreground mt-1">Red Team Operator</p>
      </div>

      <div className="flex-1 flex flex-col justify-center p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium apple-hover w-full ${
                isActive
                  ? "bg-primary text-primary-foreground apple-shadow cyber-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>

      <div className="p-4 border-t border-border/20">
        <p className="text-xs text-muted-foreground text-center">© 2025 Gray Portfolio</p>
      </div>
    </nav>
  )
}

export default FloatingNavbar
