"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "../ui/button"

function Portfolio() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "MEDREF",
      description: "A full-stack medical referral and appointment system streamlining patient-hospital interactions and referrals.",
      image: "/medref.png",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://medref-fy.vercel.app/",
      githubLink: "https://github.com/initials101/medref",
    },
    {
      title: "VMS",
      description: "A productivity app to help teams organize and track their projects efficiently.",
      image: "/vms.png",
      category: "web",
      technologies: ["React", "Flask", "Redux", "SqlIte3"],
      demoLink: "https://volunteers-management-system-frontend.vercel.app/",
      githubLink: "https://github.com/initials101/Volunteers_Management_System-Frontend",
    },
    {
      title: "Lipa Na mpesa STK_Push",
      description: "Secure cleane scalable Lipa na mpesa online Daraja API integration",
      image: "/mpesa.png",
      category: "web",
      technologies: ["Express", "NodeJS", "0Auth", "MOngoDB"],
      demoLink: "#",
      githubLink: "https://github.com/initials101/mpesaAPI",
    },
    {
      title: "Picknest",
      description: "Modern MERN stack Ecommerce website",
      image: "/picknest.png",
      category: "app",
      technologies: ["JavaScript", "React", "NodeJS", "MongoDB", "Express"],
      demoLink: "https://picknest.com/",
      githubLink: "https://github.com/initials101/picknest",
    },
    {
      title: "Restaurant Website",
      description: "A responsive website for a restaurant with menu, reservation, and contact features.",
      image: "/projects/restaurant.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Fitness Tracker",
      description: "An application to track workouts, set goals, and monitor progress over time.",
      image: "/projects/fitness.png",
      category: "app",
      technologies: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-8">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          className={`rounded-full ${filter === "all" ? "bg-purple-600 hover:bg-purple-700" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "web" ? "default" : "outline"}
          className={`rounded-full ${filter === "web" ? "bg-purple-600 hover:bg-purple-700" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web
        </Button>
        <Button
          variant={filter === "app" ? "default" : "outline"}
          className={`rounded-full ${filter === "app" ? "bg-purple-600 hover:bg-purple-700" : ""}`}
          onClick={() => setFilter("app")}
        >
          Apps
        </Button>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg?height=300&width=600"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-zinc-800 text-white p-2 rounded-full hover:bg-zinc-700 transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-400 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
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

export default Portfolio
