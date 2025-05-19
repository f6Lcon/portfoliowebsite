
import { Download, Mail, MapPin, Phone } from "lucide-react"

function Resume() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">Dennis Muriithi</h1>
                    <h2 className="text-xl text-purple-400 mb-4">BAckend Developer & Red Teamer</h2>

                    <div className="flex flex-col gap-2 text-zinc-400">
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>muriithidennis340@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>+254112395869</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Meru, Kenya</span>
                        </div>
                    </div>
                </div>

                <a
                    href="/resume.pdf"
                    download="RESUME_DENNIS.pdf"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-purple-600 text-white hover:bg-purple-700 px-4 py-2"
                >
                    <Download size={16} className="mr-2" />
                    Download CV
                </a>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">About Me</h3>
                <p className="text-zinc-400 leading-relaxed">
                    I'm Dennis Muriithi, a backend developer and red teamer with over 3 years of experience in building secure, scalable systems. I specialize in backend development using technologies like Node.js and MongoDB, and I bring a strong understanding of cybersecurity and penetration testing to every project I work on.

                    My unique blend of backend engineering and offensive security expertise allows me to craft solutions that are not only efficient and maintainable but also hardened against real-world threats. I document my cybersecurity learning journey through technical blogs, focusing on ethical hacking, system exploitation, and secure coding practices.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Education</h3>
                <div className="space-y-4">
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Bachelor of Science in Information Technology</h4>
                            <span className="text-purple-400">2021 - 20125</span>
                        </div>
                        <p className="text-zinc-400">Karatina University</p>
                    </div>

                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Software Engineering</h4>
                            <span className="text-purple-400">2024 - 2025</span>
                        </div>
                        <p className="text-zinc-400">African Leadership Expirience (ALX)</p>
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
                <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Languages and Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    <ToolIcon name="Python" icon={<i className="devicon-python-plain colored text-3xl"></i>} />
                    <ToolIcon name="JavaScript" icon={<i className="devicon-javascript-plain colored text-3xl"></i>} />
                    <ToolIcon name="Node.js" icon={<i className="devicon-nodejs-plain colored text-3xl"></i>} />
                    <ToolIcon name="React" icon={<i className="devicon-react-original colored text-3xl"></i>} />
                    <ToolIcon name="Tailwind CSS" icon={<i className="devicon-tailwindcss-plain colored text-3xl"></i>} />
                    <ToolIcon name="MongoDB" icon={<i className="devicon-mongodb-plain colored text-3xl"></i>} />
                    <ToolIcon name="Vscode" icon={<i className="devicon-vscode-plain colored text-3xl"></i>} />
                    <ToolIcon name="Git" icon={<i className="devicon-git-plain colored text-3xl"></i>} />
                    <ToolIcon name="Github" icon={<i className="devicon-github-plain colored text-3xl"></i>} />
                    <ToolIcon name="C" icon={<i className="devicon-c-plain colored text-3xl"></i>} />
                    <ToolIcon
                        name="C++"
                        icon={<i className={"devicon-cplusplus-plain colored text-3xl"}></i>}
                    />
                    <ToolIcon name="Burp Suite" icon={<img src="/icons/burpsuite.png" alt="Burp Suite" className="w-8 h-8" />} />
                    <ToolIcon name="Metasploit" icon={<img src="/icons/metasploit.png" alt="Metasploit" className="w-8 h-8" />} />
                    <ToolIcon name="Wireshark" icon={<img src="/icons/wireshark.png" alt="Wireshark" className="w-8 h-8" />} />
                    <ToolIcon name="nmap" icon={<img src="/icons/nmap.png" alt="nmap" className="w-8 h-8" />} />
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

function ToolIcon({ name, icon }) {
    return (
        <div className="bg-zinc-900 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center">
            <div className="mb-2">{icon}</div>
            <h4 className="text-xs sm:text-sm">{name}</h4>
        </div>
    )
}

export default Resume
