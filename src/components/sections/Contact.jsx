import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "../ui/button"

function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact info cards */}
        <div className="bg-zinc-900 rounded-xl p-6 text-center">
          <div className="bg-purple-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-purple-400" size={20} />
          </div>
          <h3 className="font-bold mb-2">Phone</h3>
          <p className="text-zinc-400">+1 (123) 456-7890</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 text-center">
          <div className="bg-purple-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-purple-400" size={20} />
          </div>
          <h3 className="font-bold mb-2">Email</h3>
          <p className="text-zinc-400">john.doe@example.com</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 text-center">
          <div className="bg-purple-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-purple-400" size={20} />
          </div>
          <h3 className="font-bold mb-2">Location</h3>
          <p className="text-zinc-400">San Francisco, CA</p>
        </div>
      </div>

      {/* Contact form */}
      <div className="mt-12 bg-zinc-900 rounded-xl p-8">
        <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your message"
            ></textarea>
          </div>

          <Button className="w-full md:w-auto rounded-xl bg-purple-600 hover:bg-purple-700 py-3 px-6">
            <Send size={16} className="mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
