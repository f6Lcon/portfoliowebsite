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
            <p className="text-muted-foreground mb-2">© 2024 Gray. All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-end space-x-2 text-muted-foreground text-sm">
              <Code size={16} className="text-primary" />
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            This portfolio showcases professional cybersecurity work conducted in authorized environments only.
          </p>
          <p className="text-primary text-xs mt-2 font-medium">
            All penetration testing activities performed with explicit written authorization.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
