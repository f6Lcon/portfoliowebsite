"use client"

import { ExternalLink, Shield } from "lucide-react"

function TerminalCertifications() {
  const certifications = [
    {
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "2023",
      credentialId: "OS-101337",
      credentialURL: "#",
      description: "Advanced penetration testing certification requiring 24-hour practical exam.",
      status: "ACTIVE",
      difficulty: "EXPERT",
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2022",
      credentialId: "ECC-CEH-2022",
      credentialURL: "#",
      description: "Comprehensive ethical hacking and penetration testing certification.",
      status: "ACTIVE",
      difficulty: "INTERMEDIATE",
    },
    {
      title: "GIAC Penetration Tester (GPEN)",
      issuer: "SANS Institute",
      date: "2023",
      credentialId: "GIAC-GPEN-2023",
      credentialURL: "#",
      description: "Hands-on penetration testing skills and techniques certification.",
      status: "ACTIVE",
      difficulty: "ADVANCED",
    },
    {
      title: "Certified Red Team Professional (CRTP)",
      issuer: "PentesterAcademy",
      date: "2023",
      credentialId: "PA-CRTP-2023",
      credentialURL: "#",
      description: "Active Directory focused red team operations certification.",
      status: "ACTIVE",
      difficulty: "ADVANCED",
    },
  ]

  return (
    <div className="space-y-6 text-sm">
      <div className="text-terminal-green mb-4">
        [INFO] Loading certification database...
        <br />
        [SUCCESS] Found {certifications.length} active certifications
      </div>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="border border-terminal-border rounded bg-terminal-window p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-terminal-green" />
                <div>
                  <h3 className="text-terminal-green font-bold">{cert.title}</h3>
                  <p className="text-terminal-comment text-xs">{cert.issuer}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-terminal-green text-xs">{cert.date}</div>
                <div
                  className={`text-xs px-2 py-1 rounded ${
                    cert.difficulty === "EXPERT"
                      ? "bg-red-900 text-red-400"
                      : cert.difficulty === "ADVANCED"
                        ? "bg-yellow-900 text-yellow-400"
                        : "bg-green-900 text-green-400"
                  }`}
                >
                  {cert.difficulty}
                </div>
              </div>
            </div>

            <p className="text-terminal-comment text-xs mb-3">{cert.description}</p>

            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-4">
                <span className="text-terminal-comment">
                  ID: <span className="text-terminal-green">{cert.credentialId}</span>
                </span>
                <span className="text-terminal-comment">
                  STATUS: <span className="text-terminal-green">{cert.status}</span>
                </span>
              </div>

              <a
                href={cert.credentialURL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-terminal-green hover:text-terminal-green-bright transition-colors"
              >
                VERIFY <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Stats */}
      <div className="border border-terminal-border rounded bg-terminal-window p-4">
        <div className="text-terminal-green mb-2">[EXEC] ./cert_stats.py --summary</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-terminal-comment">TOTAL_CERTS:</div>
            <div className="text-terminal-green text-lg">{certifications.length}</div>
          </div>
          <div>
            <div className="text-terminal-comment">EXPERT_LEVEL:</div>
            <div className="text-terminal-green text-lg">
              {certifications.filter((c) => c.difficulty === "EXPERT").length}
            </div>
          </div>
          <div>
            <div className="text-terminal-comment">ACTIVE_STATUS:</div>
            <div className="text-terminal-green text-lg">
              {certifications.filter((c) => c.status === "ACTIVE").length}
            </div>
          </div>
          <div>
            <div className="text-terminal-comment">LATEST_YEAR:</div>
            <div className="text-terminal-green text-lg">2023</div>
          </div>
        </div>
      </div>

      {/* Upcoming Certifications */}
      <div className="border border-terminal-border rounded bg-terminal-window p-4">
        <div className="text-terminal-green mb-2">[INFO] Planned certifications queue:</div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-terminal-comment">CISSP (Certified Information Systems Security Professional)</span>
            <span className="text-yellow-400">SCHEDULED_2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-terminal-comment">OSEP (Offensive Security Experienced Penetration Tester)</span>
            <span className="text-yellow-400">SCHEDULED_2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-terminal-comment">GCIH (GIAC Certified Incident Handler)</span>
            <span className="text-yellow-400">PLANNED_2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalCertifications
