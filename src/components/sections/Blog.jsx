"use client"

import { useState, useEffect } from "react"
import { Calendar, User, ArrowRight, Plus, X, Edit, Trash2, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import BlogPostForm from "../BlogPostForm"
import AdminLogin from "../AdminLogin"

function Blog() {
  // State for blog posts
  const [blogPosts, setBlogPosts] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingPost, setEditingPost] = useState(null)

  // Admin authentication state
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)

  // Load blog posts and admin status from localStorage on component mount
  useEffect(() => {
    // Load blog posts
    const savedPosts = localStorage.getItem("blogPosts")
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts))
    } else {
      // Default posts if none exist
      const defaultPosts = [
        {
          id: 1,
          title: "How to Optimize React Performance",
          excerpt:
            "Learn the best practices for optimizing your React applications for better performance and user experience.",
          content:
            "React performance optimization is crucial for building smooth user experiences. This post covers techniques like memoization, code splitting, and proper state management to ensure your React apps run efficiently.",
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          author: "Dennis Muriithi",
          category: "React",
          image: "/blog/nmap.png",
          readTime: "5 min read",
        },
      ]
      setBlogPosts(defaultPosts)
      localStorage.setItem("blogPosts", JSON.stringify(defaultPosts))
    }

    // Check if admin is logged in
    const adminStatus = localStorage.getItem("blogAdminLoggedIn")
    if (adminStatus === "true") {
      setIsAdmin(true)
    }
  }, [])

  // Save blog posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts))
  }, [blogPosts])

  // Add a new blog post
  const handleAddPost = (newPost) => {
    const post = {
      ...newPost,
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      author: "Dennis Muriithi",
      readTime: `${Math.max(Math.ceil(newPost.content.length / 1000), 1)} min read`,
    }
    setBlogPosts([post, ...blogPosts])
    setShowAddForm(false)
  }

  // Update an existing blog post
  const handleUpdatePost = (updatedPost) => {
    setBlogPosts(blogPosts.map((post) => (post.id === updatedPost.id ? { ...post, ...updatedPost } : post)))
    setEditingPost(null)
  }

  // Delete a blog post
  const handleDeletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setBlogPosts(blogPosts.filter((post) => post.id !== id))
    }
  }

  // Handle admin login
  const handleLogin = (password) => {
    // In a real app, you would validate against a secure backend
    // This is a simplified example with a stronger password
    if (password === "Cyber#Portfolio2023") {
      setIsAdmin(true)
      localStorage.setItem("blogAdminLoggedIn", "true")
      setShowLoginForm(false)
    } else {
      alert("Invalid password")
    }
  }

  // Handle admin logout
  const handleLogout = () => {
    setIsAdmin(false)
    localStorage.removeItem("blogAdminLoggedIn")
    setShowAddForm(false)
    setEditingPost(null)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Blog</h2>

        {/* Admin controls */}
        {isAdmin ? (
          <div className="flex gap-2">
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-purple-600 hover:bg-purple-700 rounded-full"
            >
              {showAddForm ? <X className="mr-2" size={16} /> : <Plus className="mr-2" size={16} />}
              {showAddForm ? "Cancel" : "Add New Post"}
            </Button>

            <Button onClick={handleLogout} variant="outline" className="rounded-full" title="Logout">
              <LogOut size={16} />
            </Button>
          </div>
        ) : (
          <Button onClick={() => setShowLoginForm(true)} variant="outline" className="rounded-full text-sm">
            Admin Login
          </Button>
        )}
      </div>

      {/* Admin Login Form */}
      {showLoginForm && (
        <div className="mb-8 bg-zinc-800 rounded-xl p-6">
          <AdminLogin onLogin={handleLogin} onCancel={() => setShowLoginForm(false)} />
        </div>
      )}

      {/* Add/Edit Blog Post Form - only visible to admin */}
      {isAdmin && (showAddForm || editingPost) && (
        <div className="mb-8 bg-zinc-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">{editingPost ? "Edit Blog Post" : "Add New Blog Post"}</h3>
          <BlogPostForm
            post={editingPost}
            onSubmit={editingPost ? handleUpdatePost : handleAddPost}
            onCancel={() => {
              setShowAddForm(false)
              setEditingPost(null)
            }}
          />
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image || "/placeholder.svg?height=300&width=600"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                {post.category}
              </div>

              {/* Admin controls - only visible when logged in */}
              {isAdmin && (
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setEditingPost(post)}
                    className="bg-zinc-800 text-white p-1.5 rounded-full hover:bg-zinc-700"
                    title="Edit post"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700"
                    title="Delete post"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
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

      {blogPosts.length === 0 && isAdmin && !showAddForm && (
        <div className="text-center py-12 bg-zinc-900/50 rounded-xl">
          <p className="text-zinc-400 mb-4">No blog posts yet. Add your first post!</p>
          <Button onClick={() => setShowAddForm(true)} className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2" size={16} />
            Add New Post
          </Button>
        </div>
      )}

      {blogPosts.length === 0 && !isAdmin && (
        <div className="text-center py-12 bg-zinc-900/50 rounded-xl">
          <p className="text-zinc-400">No blog posts available yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}

export default Blog
