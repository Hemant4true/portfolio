import React, { useEffect, useState } from 'react'

const LINES = [
  { text: '$ whoami', delay: 0 },
  { text: 'hemant_pachauri', delay: 600, accent: true },
  { text: '$ status --check', delay: 1100 },
  { text: 'role: full-stack engineer / ai & security', delay: 1700 },
  { text: 'base: faridabad, india', delay: 2100 },
  { text: 'availability: open_to_work', delay: 2500, signal: true },
]

export default function Hero() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => setVisible(v => Math.max(v, i + 1)), line.delay)
    })
  }, [])

  return (
    <section className="pt-16 md:pt-24 pb-20 border-b border-line">
      <div className="font-mono text-xs text-muted mb-6">// boot sequence</div>

      <div className="bg-panel/60 backdrop-blur-md border border-line/50 rounded-md p-5 md:p-8 text-sm md:text-base space-y-2 max-w-2xl" style={{ fontFamily: '"Pixelbasel", monospace', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
        {LINES.map((line, i) => (
          <div key={i} className={`transition-opacity duration-300 ${visible > i ? 'opacity-100' : 'opacity-0'}`}>
            {line.text.startsWith('$') ? (
              <span className="text-muted">{line.text}</span>
            ) : (
              <span className={
                line.signal ? 'text-signal text-glow font-bold' :
                line.accent ? 'text-ink font-bold text-lg md:text-xl' :
                'text-ink'
              }>
                {line.text}
              </span>
            )}
          </div>
        ))}
        <div className={`transition-opacity duration-300 ${visible >= LINES.length ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-signal">$</span>
          <span className="inline-block w-2 h-4 bg-signal ml-2 cursor-blink align-middle" />
        </div>
      </div>

      <h1 className="mt-10 text-4xl md:text-6xl font-mono font-extrabold leading-[1.05] max-w-3xl">
        Building systems that <span className="text-signal text-glow">detect</span>,
        {' '}<span className="text-signal text-glow">monitor</span>, and
        {' '}<span className="text-signal text-glow">respond</span>.
      </h1>
      <p className="mt-5 text-muted max-w-xl text-base md:text-lg font-sans">
        Final-year BCA student building full-stack applications and AI-driven security tools — from real-time uptime monitors to intrusion detection systems.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="px-5 py-2.5 bg-signal text-base font-mono text-sm font-bold rounded-md hover:bg-signal/90 transition-colors">
          view projects ↓
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-signal/50 text-signal font-mono text-sm font-bold rounded-md hover:bg-signal/10 transition-colors">
          resume.pdf
        </a>
        <a href="#contact" className="px-5 py-2.5 border border-line text-ink font-mono text-sm rounded-md hover:border-signal/50 transition-colors">
          get in touch
        </a>
      </div>
    </section>
  )
}
