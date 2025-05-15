import { Award, ExternalLink } from "lucide-react"

function Certifications() {
  const certifications = [
    {
      title: "React Advanced Concepts",
      issuer: "Frontend Masters",
      date: "2023",
      credentialId: "FM-REACT-2023",
      credentialURL: "#",
      description: "Advanced course covering React hooks, context, performance optimization, and advanced patterns.",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC-JSALGO-2022",
      credentialURL: "#",
      description: "Comprehensive course on JavaScript algorithms, data structures, and problem-solving techniques.",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "2021",
      credentialId: "IDF-UIUX-2021",
      credentialURL: "#",
      description:
        "Course covering user interface design principles, user experience, and design thinking methodologies.",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2020",
      credentialId: "FCC-RWD-2020",
      credentialURL: "#",
      description: "Course on building responsive websites using HTML, CSS, and modern design principles.",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <Award className="text-purple-400" size={24} />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <span className="text-purple-400">{cert.date}</span>
                </div>

                <p className="text-zinc-400 mb-2">{cert.issuer}</p>
                <p className="mb-3 text-sm">{cert.description}</p>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-500">Credential ID: {cert.credentialId}</span>

                  <a
                    href={cert.credentialURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
