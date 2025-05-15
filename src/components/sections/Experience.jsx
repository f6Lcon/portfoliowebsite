import { Briefcase } from "lucide-react"

function Experience() {
  const experiences = [
    {
      title: "Penetration Tester",
      company: "Onix-market",
      period: "2023 - 2024",
      description:
        "Performed in-depth security assessments of web applications and APIs, identified critical vulnerabilities, and delivered actionable remediation reports to development teams. Contributed to strengthening the security posture of the SaaS platform.",
      technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "Arch Linux"],
    },
    {
      title: "Backend Developer",
      company: "ALX Portfolio project",
      period: "2024 - 2024",
      description:
        "Designed and developed secure backend services for portfolio-level projects, integrating RESTful APIs and authentication systems. Focused on clean architecture, scalability, and performance optimization.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Web Developer Attachee",
      company: "BITSYSTEMS Ltd.",
      period: "May 2024 - August 2024",
      description:
        "Contributed to ongoing projects by implementing new features, debugging existing functionality, and collaborating with senior developers. Gained hands-on experience with agile workflows and real-world client interactions.",
      technologies: ["HTML", "CSS", "PHP", "jQuery", "Codigniter"],
    },
    {
      title: "Fullstack Developer",
      company: "ALX",
      period: "Dec 2024 - Jan 2025",
      description:
        "Built a fullstack web application as part of the ALX capstone project. Developed both the frontend and backend, implemented user authentication, and deployed the solution to a cloud environment.",
      technologies: ["React", "ExpressJS", "NodeJS", "MongoDB"],
    },
    {
      title: "Fullstack Developer",
      company: "Karatina University",
      period: "Nov 2024 - April 2025",
      description:
        "Developed a Medical Referral and Appointment System for the final year project. Engineered backend services, integrated hospital-patient workflows, and implemented secure appointment scheduling with real-time data handling.",
      technologies: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    }
    
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>

      <div className="relative border-l-2 border-purple-600 pl-8 ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
              <Briefcase size={14} />
            </div>

            {/* Content */}
            <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-purple-400 font-medium">{exp.period}</span>
              </div>

              <p className="text-zinc-400 mb-2">{exp.company}</p>
              <p className="mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
