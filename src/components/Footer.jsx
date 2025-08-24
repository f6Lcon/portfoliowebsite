import { Code, Shield } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                GRAY
              </span>
            </h3>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Shield size={16} className="text-primary" />
              <span>Cybersecurity Specialist & Security Researcher</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">© 2025 Gray. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
