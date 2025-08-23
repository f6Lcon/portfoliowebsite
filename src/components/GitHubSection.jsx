"use client"

import { useState } from "react"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"

const GitHubSection = () => {
  const [stats, setStats] = useState({
    repos: 42,
    followers: 156,
    following: 89,
    contributions: 1247,
  })

  const repositories = [
    {
      name: "pentest-toolkit",
      description: "Collection of custom penetration testing scripts and tools",
      language: "Python",
      stars: 234,
      forks: 67,
    },
    {
      name: "vuln-scanner",
      description: "Automated vulnerability scanner for web applications",
      language: "Python",
      stars: 189,
      forks: 45,
    },
    {
      name: "exploit-db-scripts",
      description: "Custom exploit scripts and proof-of-concepts",
      language: "C",
      stars: 156,
      forks: 32,
    },
    {
      name: "red-team-tools",
      description: "Red team operation utilities and automation scripts",
      language: "PowerShell",
      stars: 298,
      forks: 78,
    },
  ]

  return (
    <section id="github" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            GitHub <span className="text-chart-3">Stats</span>
          </h2>
          <div className="w-16 h-1 bg-chart-3 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Repositories", value: stats.repos, icon: Github },
            { label: "Followers", value: stats.followers, icon: Github },
            { label: "Following", value: stats.following, icon: Github },
            { label: "Contributions", value: stats.contributions, icon: Github },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center p-8 glass-morphism border border-border rounded-2xl apple-hover">
                <Icon size={24} className="text-chart-3 mb-4 mx-auto" />
                <div className="text-4xl font-bold text-chart-3 mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-foreground mb-10 text-center">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {repositories.map((repo, index) => (
              <div key={index} className="p-8 glass-morphism border border-border rounded-3xl apple-hover">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-foreground">{repo.name}</h4>
                  <span className="px-3 py-1.5 bg-chart-3/10 text-chart-3 rounded-xl text-sm font-medium border border-chart-3/20">
                    {repo.language}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{repo.description}</p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Star size={16} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GitFork size={16} />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/gray"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-chart-3 text-white font-semibold rounded-2xl apple-hover apple-shadow"
          >
            <ExternalLink size={20} />
            <span>View Full GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHubSection
