import Resume from "./sections/Resume"
import Experience from "./sections/Experience"
import Certifications from "./sections/Certifications"
import Blog from "./sections/Blog"
import Portfolio from "./sections/Portfolio"
import Contact from "./sections/Contact"

function Dashboard({ activeSection }) {
  return (
    <div className="h-full overflow-hidden bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-xl">
      <div className="h-full overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto py-4">
          {activeSection === "resume" && <Resume />}
          {activeSection === "experience" && <Experience />}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "blog" && <Blog />}
          {activeSection === "portfolio" && <Portfolio />}
          {activeSection === "contact" && <Contact />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
