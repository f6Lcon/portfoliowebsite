import { ExternalLink } from "lucide-react"

function ProjectCard({ title, description, image, tags, link }) {
  return (
    <div className="group bg-zinc-900 rounded-3xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-purple-900/10">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <a href={link} className="text-white flex items-center gap-2 text-sm font-medium">
            View Project <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
