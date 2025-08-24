import { Code, Shield } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border py-4 px-6 relative z-10 mt-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="mb-3 sm:mb-0">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-muted-foreground text-sm">
              <Shield size={14} className="text-primary" />
              <span>© 2024 Gray. All rights reserved.</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm">
            <Code size={14} className="text-primary" />
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs">
            All penetration testing activities performed with explicit written authorization.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
