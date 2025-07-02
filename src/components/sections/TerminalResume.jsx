"use client"

import { Download } from "lucide-react"

function TerminalResume() {
  return (
    <div className="space-y-6 text-sm">
      {/* Header Output */}
      <div className="border border-terminal-border rounded p-4 bg-terminal-bg">
        <div className="text-terminal-green mb-2">[INFO] User profile loaded successfully</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-terminal-comment">USER_ID:</div>
            <div className="text-terminal-green">RedTeam_Operator_001</div>
            <div className="text-terminal-comment mt-2">ROLE:</div>
            <div className="text-terminal-green">Senior Penetration Tester</div>
            <div className="text-terminal-comment mt-2">CLEARANCE:</div>
            <div className="text-red-400">CLASSIFIED</div>
          </div>
          <div className="flex justify-end">
            <a
              href="/resume.pdf"
              download="RedTeam_Resume.pdf"
              className="inline-flex items-center gap-2 bg-terminal-green text-terminal-bg px-3 py-2 rounded hover:bg-terminal-green-bright transition-colors"
            >
              <Download size={14} />
              DOWNLOAD_CV.pdf
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <div className="text-terminal-green mb-2">[EXEC] cat about.txt</div>
        <div className="border-l-2 border-terminal-green pl-4 text-terminal-comment">
          Cybersecurity professional specializing in offensive security operations, advanced persistent threat
          simulation, and red team engagements. Expertise in vulnerability research, exploit development, and social
          engineering campaigns. Committed to strengthening organizational security through ethical hacking
          methodologies.
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="text-terminal-green mb-2">[EXEC] python3 education_parser.py</div>
        <div className="space-y-3">
          <div className="bg-terminal-border rounded p-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-terminal-green font-bold">BSc Cybersecurity</div>
                <div className="text-terminal-comment">University of Technology</div>
              </div>
              <div className="text-terminal-green text-xs">2018-2022</div>
            </div>
          </div>
          <div className="bg-terminal-border rounded p-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-terminal-green font-bold">Advanced Penetration Testing</div>
                <div className="text-terminal-comment">Cybersecurity Institute</div>
              </div>
              <div className="text-terminal-green text-xs">2022-2023</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div>
        <div className="text-terminal-green mb-2">[EXEC] ./skill_assessment.sh --verbose</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-terminal-green mb-2">OFFENSIVE_CAPABILITIES:</div>
            <div className="space-y-2">
              <SkillBar name="Web_App_Testing" level={95} />
              <SkillBar name="Network_Penetration" level={90} />
              <SkillBar name="Wireless_Security" level={85} />
              <SkillBar name="Social_Engineering" level={80} />
            </div>
          </div>
          <div>
            <div className="text-terminal-green mb-2">OPERATIONAL_SKILLS:</div>
            <div className="space-y-2">
              <SkillBar name="OSINT_Gathering" level={90} />
              <SkillBar name="Payload_Development" level={85} />
              <SkillBar name="Post_Exploitation" level={88} />
              <SkillBar name="Report_Writing" level={92} />
            </div>
          </div>
        </div>
      </div>

      {/* Security Platforms */}
      <div>
        <div className="text-terminal-green mb-2">[EXEC] curl -s api.platforms.com/user/stats</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-terminal-green mb-2">TRAINING_PLATFORMS:</div>
            <div className="space-y-2">
              <PlatformStatus name="HackTheBox" status="Pro Hacker" color="text-green-400" />
              <PlatformStatus name="TryHackMe" status="Top 5%" color="text-red-400" />
              <PlatformStatus name="VulnHub" status="Active" color="text-blue-400" />
            </div>
          </div>
          <div>
            <div className="text-terminal-green mb-2">BUG_BOUNTY:</div>
            <div className="space-y-2">
              <PlatformStatus name="HackerOne" status="Verified" color="text-purple-400" />
              <div className="text-xs text-terminal-comment">
                <div>• CVE_DISCOVERIES: 12</div>
                <div>• CRITICAL_VULNS: 8</div>
                <div>• BOUNTY_EARNED: $$$$$</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Arsenal */}
      <div>
        <div className="text-terminal-green mb-2">[EXEC] ls -la /opt/tools/</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "Python",
            "JavaScript",
            "Bash",
            "Kali_Linux",
            "Burp_Suite",
            "Metasploit",
            "Wireshark",
            "Nmap",
            "Docker",
            "Git",
            "Cobalt_Strike",
            "Empire",
          ].map((tool) => (
            <div key={tool} className="bg-terminal-border rounded p-2 text-center">
              <div className="text-terminal-green text-xs">{tool}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, level }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-terminal-comment">{name}</span>
        <span className="text-terminal-green">{level}%</span>
      </div>
      <div className="w-full bg-terminal-bg rounded-full h-2">
        <div
          className="bg-terminal-green h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}

function PlatformStatus({ name, status, color }) {
  return (
    <div className="flex justify-between items-center text-xs">
      <span className="text-terminal-comment">{name}:</span>
      <span className={color}>{status}</span>
    </div>
  )
}

export default TerminalResume
