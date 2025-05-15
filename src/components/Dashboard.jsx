import Resume from "./sections/Resume"
import Experience from "./sections/Experience"
import Certifications from "./sections/Certifications"
import Blog from "./sections/Blog"
import Portfolio from "./sections/Portfolio"
import Contact from "./sections/Contact"

function Dashboard({ activeSection }) {
  return (
    <div className="flex-1 overflow-y-auto bg-black">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {activeSection === "resume" && <Resume />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "certifications" && <Certifications />}
        {activeSection === "blog" && <Blog />}
        {activeSection === "portfolio" && <Portfolio />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  )
}

export default Dashboard
