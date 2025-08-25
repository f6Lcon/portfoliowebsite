import FloatingNavbar from "./FloatingNavbar"
import MatrixBackground from "./MatrixBackground"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <MatrixBackground />
      <FloatingNavbar />

      <main className="relative z-10 flex-1 ml-64 overflow-y-auto">
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
