import { Briefcase } from "lucide-react"

function Experience() {
  const experiences = [
    {
      title: "Penetration Tester",
      company: "Onix-market",
      period: "2023 - 2024",
      description:
        "Led the frontend development team in building a complex SaaS platform. Implemented modern React practices, improved performance by 40%, and mentored junior developers.",
      technologies: ["React", "Redux", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Developer",
      company: "ALX Portfolio project",
      period: "2024- 2024",
      description:
        "Developed responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality products on time.",
      technologies: ["React", "JavaScript", "SCSS", "REST API"],
    },
    {
      title: "Web Developer Attachee",
      company: "BITSYSTEMS Ltd.",
      period: "May 2024 - Agust 2024",
      description:
        "Assisted in developing website features and fixing bugs. Gained hands-on experience with modern web technologies and agile development methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      title: "Fullstack Developer",
      company: "ALX ",
      period: "Dec 2024 - Jan 2025",
      description: "",
      technologies: ["React", "ExpressJS", "NodeJS", "MongoDB"],
    },
    {
      title: "Fullstack Developer",
      company: "Karatina University",
      period: "Nov 2024 - April 2025",
      description: "",
      technologies: ["React", "NodeJS", "ExpressJS", "MOngoDB"]
    },
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
