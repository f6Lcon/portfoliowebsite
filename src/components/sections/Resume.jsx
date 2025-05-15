import { Download, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "../ui/button"

function Resume() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <h2 className="text-xl text-purple-400 mb-4">Frontend Developer</h2>

          <div className="flex flex-col gap-2 text-zinc-400">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <Button className="bg-purple-600 hover:bg-purple-700">
          <Download size={16} className="mr-2" />
          Download CV
        </Button>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">About Me</h3>
        <p className="text-zinc-400 leading-relaxed">
          I'm a passionate frontend developer with 5+ years of experience building modern, responsive web applications.
          I specialize in React and JavaScript, with a strong focus on creating intuitive user interfaces and seamless
          user experiences. My approach combines technical expertise with creative problem-solving to deliver solutions
          that not only look great but also perform exceptionally well.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Education</h3>
        <div className="space-y-4">
          <div className="bg-zinc-900 rounded-xl p-4">
            <div className="flex justify-between">
              <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
              <span className="text-purple-400">2014 - 2018</span>
            </div>
            <p className="text-zinc-400">Stanford University</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-4">
            <div className="flex justify-between">
              <h4 className="font-bold">Master of Science in Web Engineering</h4>
              <span className="text-purple-400">2018 - 2020</span>
            </div>
            <p className="text-zinc-400">MIT</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">Technical Skills</h4>
            <div className="space-y-2">
              <SkillBar name="JavaScript" percentage={90} />
              <SkillBar name="React" percentage={85} />
              <SkillBar name="HTML/CSS" percentage={95} />
              <SkillBar name="Node.js" percentage={75} />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Professional Skills</h4>
            <div className="space-y-2">
              <SkillBar name="Problem Solving" percentage={90} />
              <SkillBar name="Communication" percentage={85} />
              <SkillBar name="Teamwork" percentage={95} />
              <SkillBar name="Time Management" percentage={80} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Languages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900 rounded-xl p-4 text-center">
            <h4 className="font-bold">English</h4>
            <p className="text-zinc-400">Native</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-4 text-center">
            <h4 className="font-bold">Spanish</h4>
            <p className="text-zinc-400">Fluent</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-4 text-center">
            <h4 className="font-bold">French</h4>
            <p className="text-zinc-400">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default Resume
