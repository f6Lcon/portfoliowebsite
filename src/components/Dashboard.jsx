import Resume from "./sections/Resume"
import Certifications from "./sections/Certifications"
import Portfolio from "./sections/Portfolio"

function Dashboard({ activeSection }) {
  return (
    <div className="h-full overflow-hidden bg-ayu-panel backdrop-blur-sm rounded-2xl border border-ayu-border shadow-xl">
      <div className="h-full overflow-y-auto p-3 sm:p-6">
        <div className="max-w-5xl mx-auto py-2 sm:py-4">
          {activeSection === "resume" && <Resume />}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "portfolio" && <Portfolio />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
