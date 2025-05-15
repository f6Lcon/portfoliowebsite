import { Award, ExternalLink } from "lucide-react"

function Certifications() {
  const certifications = [
    {
      title: "ALX Software Engineering",
      issuer: "African Leadership Expirience",
      date: "2025",
      credentialId: "",
      credentialURL: "https://savanna.alxafrica.com/certificates/ES93rHnCfM",
      description: "Certified in Full-Stack Software Engineering through ALX’s intensive, hands-on program.",
      image: "/alx.png?height=300&width=500",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>

      <div className="grid grid-cols-1 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Certificate Image */}
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Certificate Details */}
              <div className="md:w-3/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg shrink-0">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
