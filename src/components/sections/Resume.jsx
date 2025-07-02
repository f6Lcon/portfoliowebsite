import { Download } from "lucide-react"

function Resume() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Red Team Portfolio</h1>
          <h2 className="text-xl text-ayu-accent mb-4">Cybersecurity Professional</h2>
          <p className="text-ayu-comment">
            Specialized in offensive security, penetration testing, and red team operations.
          </p>
        </div>

        <a
          href="/resume.pdf"
          download="RedTeam_Resume.pdf"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-ayu-accent text-ayu-bg hover:bg-ayu-accent-hover px-4 py-2"
        >
          <Download size={16} className="mr-2" />
          Download CV
        </a>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-ayu-border pb-2">About</h3>
        <p className="text-ayu-comment leading-relaxed">
          Cybersecurity professional with expertise in offensive security operations, vulnerability assessment, and
          penetration testing. Experienced in simulating real-world attacks to help organizations strengthen their
          security posture. Proficient in various security tools and methodologies for comprehensive security
          assessments.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-ayu-border pb-2">Education</h3>
        <div className="space-y-4">
          <div className="bg-ayu-surface rounded-xl p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h4 className="font-bold">Bachelor of Science in Cybersecurity</h4>
              <span className="text-ayu-accent">2018 - 2022</span>
            </div>
            <p className="text-ayu-comment">University of Technology</p>
          </div>

          <div className="bg-ayu-surface rounded-xl p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h4 className="font-bold">Advanced Penetration Testing Course</h4>
              <span className="text-ayu-accent">2022 - 2023</span>
            </div>
            <p className="text-ayu-comment">Cybersecurity Institute</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-ayu-border pb-2">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2 text-ayu-accent">Penetration Testing</h4>
            <div className="space-y-2">
              <SkillBar name="Web Application Testing" percentage={95} />
              <SkillBar name="Network Penetration" percentage={90} />
              <SkillBar name="Wireless Security" percentage={85} />
              <SkillBar name="Social Engineering" percentage={80} />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-ayu-accent">Red Team Operations</h4>
            <div className="space-y-2">
              <SkillBar name="OSINT Gathering" percentage={90} />
              <SkillBar name="Payload Development" percentage={85} />
              <SkillBar name="Post-Exploitation" percentage={88} />
              <SkillBar name="Report Writing" percentage={92} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-ayu-border pb-2">Security Platforms & Training</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3 text-ayu-accent">Practice Platforms</h4>
            <div className="space-y-3">
              <PlatformCard
                name="HackTheBox"
                description="Advanced penetration testing labs"
                rank="Pro Hacker"
                color="bg-green-600"
              />
              <PlatformCard
                name="TryHackMe"
                description="Cybersecurity learning platform"
                rank="Top 5%"
                color="bg-red-600"
              />
              <PlatformCard
                name="VulnHub"
                description="Vulnerable VMs for practice"
                rank="Active Contributor"
                color="bg-blue-600"
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-ayu-accent">Bug Bounty & Research</h4>
            <div className="space-y-3">
              <PlatformCard
                name="HackerOne"
                description="Bug bounty platform"
                rank="Verified Researcher"
                color="bg-purple-600"
              />
              <div className="bg-ayu-surface rounded-lg p-4">
                <h5 className="font-semibold text-ayu-text mb-2">Achievements</h5>
                <ul className="text-sm text-ayu-comment space-y-1">
                  <li>• Multiple CVE discoveries</li>
                  <li>• Critical vulnerability reports</li>
                  <li>• Security research publications</li>
                  <li>• Community contributions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 border-b border-ayu-border pb-2">Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          <ToolIcon name="Python" icon={<i className="devicon-python-plain colored text-3xl"></i>} />
          <ToolIcon name="JavaScript" icon={<i className="devicon-javascript-plain colored text-3xl"></i>} />
          <ToolIcon name="Bash" icon={<i className="devicon-bash-plain text-3xl text-ayu-accent"></i>} />
          <ToolIcon name="Kali Linux" icon={<i className="devicon-linux-plain text-3xl text-ayu-accent"></i>} />
          <ToolIcon name="Docker" icon={<i className="devicon-docker-plain colored text-3xl"></i>} />
          <ToolIcon name="Git" icon={<i className="devicon-git-plain colored text-3xl"></i>} />
          <ToolIcon name="Burp Suite" icon={<img src="/icons/burpsuite.png" alt="Burp Suite" className="w-8 h-8" />} />
          <ToolIcon name="Metasploit" icon={<img src="/icons/metasploit.png" alt="Metasploit" className="w-8 h-8" />} />
          <ToolIcon name="Wireshark" icon={<img src="/icons/wireshark.png" alt="Wireshark" className="w-8 h-8" />} />
          <ToolIcon
            name="Nmap"
            icon={
              <div className="w-8 h-8 bg-ayu-accent rounded text-ayu-bg flex items-center justify-center font-bold">
                N
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-ayu-text">{name}</span>
        <span className="text-ayu-accent">{percentage}%</span>
      </div>
      <div className="w-full bg-ayu-surface rounded-full h-2">
        <div className="bg-ayu-accent h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

function PlatformCard({ name, description, rank, color }) {
  return (
    <div className="bg-ayu-surface rounded-lg p-4 hover:bg-ayu-border transition-colors">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <div className="flex-1">
          <h5 className="font-semibold text-ayu-text">{name}</h5>
          <p className="text-xs text-ayu-comment">{description}</p>
          <span className="text-xs text-ayu-accent font-medium">{rank}</span>
        </div>
      </div>
    </div>
  )
}

function ToolIcon({ name, icon }) {
  return (
    <div className="bg-ayu-surface rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:bg-ayu-border transition-colors">
      <div className="mb-2">{icon}</div>
      <h4 className="text-xs sm:text-sm text-ayu-comment">{name}</h4>
    </div>
  )
}

export default Resume
