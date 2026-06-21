import React from 'react'

function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0')
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
  const s = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${h}:${m}:${s}`
}

export default function StatusBar({ uptime }) {
  return (
    <div className="sticky top-0 z-50 bg-[#0B0D0F]/60 backdrop-blur-md border-b border-signal/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-2 flex items-center justify-between font-mono text-[11px] md:text-xs text-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal pulse-dot" />
          <span className="text-signal">online</span>
          <span className="hidden sm:inline">· hemant-pachauri.dev</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">uptime <span className="text-ink">{formatUptime(uptime)}</span></span>
          <span>region <span className="text-ink">faridabad-in</span></span>
        </div>
      </div>
    </div>
  )
}
