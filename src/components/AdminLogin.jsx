"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Lock } from "lucide-react"

function AdminLogin({ onLogin, onCancel }) {
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(password)
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Lock className="mr-2" size={20} />
        Admin Login
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter admin password"
            required
          />
        </div>

        <div className="flex gap-3 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            Login
          </Button>
        </div>
      </form>

      <p className="text-xs text-zinc-500 mt-4">
        Note: This is a client-side authentication for demonstration purposes. In a production environment, you should
        implement secure server-side authentication.
      </p>
    </div>
  )
}

export default AdminLogin
