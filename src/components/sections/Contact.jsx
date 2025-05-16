import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "../ui/button"

function Contact() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Contact Me</h2>

      {/* Contact info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div className="bg-zinc-900 rounded-xl p-4 sm:p-6 text-center">
          <div className="bg-purple-600/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Phone className="text-purple-400" size={18} />
          </div>
          <h3 className="font-bold mb-1 sm:mb-2">Phone</h3>
          <p className="text-zinc-400 text-sm sm:text-base">+254112395869</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 sm:p-6 text-center">
          <div className="bg-purple-600/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Mail className="text-purple-400" size={18} />
          </div>
          <h3 className="font-bold mb-1 sm:mb-2">Email</h3>
          <p className="text-zinc-400 text-sm sm:text-base">muriithidennis340@gmail.com</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 sm:p-6 text-center">
          <div className="bg-purple-600/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <MapPin className="text-purple-400" size={18} />
          </div>
          <h3 className="font-bold mb-1 sm:mb-2">Location</h3>
          <p className="text-zinc-400 text-sm sm:text-base">Meru, Kenya</p>
        </div>
      </div>

      {/* Contact form */}
      <div className="mt-8 sm:mt-12 bg-zinc-900 rounded-xl p-4 sm:p-8">
        <h3 className="text-xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>

        <form className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="Your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1 sm:mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              placeholder="Your message"
            ></textarea>
          </div>

          <Button className="w-full sm:w-auto rounded-xl bg-purple-600 hover:bg-purple-700 py-2 sm:py-3 px-4 sm:px-6">
            <Send size={16} className="mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
