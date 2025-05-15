"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"

function BlogPostForm({ post, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    image: "",
  })

  // If editing, populate form with post data
  useEffect(() => {
    if (post) {
      setFormData({
        id: post.id,
        title: post.title || "",
        category: post.category || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        image: post.image || "",
      })
    }
  }, [post])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  // List of common categories for the dropdown
  const categories = ["React", "JavaScript", "CSS", "HTML", "Node.js", "Python", "Cybersecurity", "UI/UX", "Other"]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter post title"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category *
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter image URL or path (e.g., /blog/my-image.png)"
        />
        <p className="text-xs text-zinc-500 mt-1">
          Add images to the public/blog folder and use path like /blog/image-name.png
        </p>
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium mb-1">
          Excerpt *
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows={2}
          className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Brief summary of your post (displayed in cards)"
        ></textarea>
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Content *
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={8}
          className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Write your blog post content here..."
        ></textarea>
      </div>

      <div className="flex gap-3 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
          {post ? "Update Post" : "Publish Post"}
        </Button>
      </div>
    </form>
  )
}

export default BlogPostForm
