import FloatingNavbar from "./FloatingNavbar"
import MatrixBackground from "./MatrixBackground"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <FloatingNavbar />

      <main className="relative z-10 pt-20">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
