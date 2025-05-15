import { Calendar, User, ArrowRight } from "lucide-react"

function Blog() {
  const blogPosts = [
    {
      title: "How to Optimize React Performance",
      excerpt:
        "Learn the best practices for optimizing your React applications for better performance and user experience.",
      date: "May 15, 2023",
      author: "John Doe",
      category: "React",
      image: "/placeholder.svg?height=300&width=600",
      readTime: "5 min read",
    },
    {
      title: "Understanding JavaScript Promises",
      excerpt:
        "A comprehensive guide to JavaScript Promises, async/await, and handling asynchronous operations effectively.",
      date: "April 22, 2023",
      author: "John Doe",
      category: "JavaScript",
      image: "/placeholder.svg?height=300&width=600",
      readTime: "7 min read",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt:
        "A detailed comparison of CSS Grid and Flexbox with practical examples to help you choose the right layout system.",
      date: "March 10, 2023",
      author: "John Doe",
      category: "CSS",
      image: "/placeholder.svg?height=300&width=600",
      readTime: "6 min read",
    },
    {
      title: "Getting Started with Tailwind CSS",
      excerpt:
        "Learn how to set up and use Tailwind CSS in your projects for rapid UI development with utility-first approach.",
      date: "February 5, 2023",
      author: "John Doe",
      category: "CSS",
      image: "/placeholder.svg?height=300&width=600",
      readTime: "4 min read",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                {post.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{post.title}</h3>

              <p className="text-zinc-400 mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex justify-between items-center text-sm text-zinc-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <span>{post.readTime}</span>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 mt-4 text-sm font-medium"
              >
                Read More <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
