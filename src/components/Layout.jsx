import FloatingNavbar from "./FloatingNavbar"
import MatrixBackground from "./MatrixBackground"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden flex">
      <MatrixBackground />
      <FloatingNavbar />

      <main className="relative z-10 flex-1 ml-64 h-full overflow-hidden">
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
