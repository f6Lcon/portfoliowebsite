"use client"

import { Wifi, Shield, Zap, Activity } from "lucide-react"

function TerminalHeader({ currentTime }) {
  return (
    <div className="relative z-10 bg-terminal-window border-b border-terminal-border p-3">
      <div className="flex justify-between items-center">
        {/* Terminal Title */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <span className="text-terminal-green font-bold">root@redteam-ops:~$ ./portfolio --mode=professional</span>
        </div>

        {/* System Status */}
        <div className="hidden md:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-terminal-green" />
            <span className="text-terminal-comment">VPN: ACTIVE</span>
          </div>
          <div className="flex items-center gap-1">
            <Wifi className="w-3 h-3 text-terminal-green" />
            <span className="text-terminal-comment">TOR: ENABLED</span>
          </div>
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-terminal-green" />
            <span className="text-terminal-comment">STEALTH: ON</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-terminal-green" />
            <span className="text-terminal-green">READY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalHeader
