import React from 'react'

const LINKS = [
  { label: 'email', value: 'a.hemant9002@gmail.com', href: 'mailto:a.hemant9002@gmail.com' },
  { label: 'github', value: 'github.com/Hemant4true', href: 'https://github.com/Hemant4true' },
  { label: 'linkedin', value: 'linkedin.com/in/hemantpachauri', href: 'https://linkedin.com/in/hemantpachauri' },
  { label: 'phone', value: '+91 70423 26123', href: 'tel:+917042326123' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="font-mono text-xs text-muted mb-6">// connect</div>
      <h2 className="text-2xl md:text-4xl font-mono font-bold mb-3 max-w-xl">
        Open to Software, Full-Stack, AI/ML, and Security roles.
      </h2>
      <p className="text-muted mb-10 max-w-lg">Reach out — happy to talk through any of the projects above in detail.</p>

      <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-panel/60 backdrop-blur-md border border-line/50 rounded-md px-4 py-3 hover:border-signal/50 transition-colors group overflow-hidden gap-4"
          >
            <span className="font-mono text-xs text-muted uppercase shrink-0">{l.label}</span>
            <span className="font-mono text-sm text-ink group-hover:text-signal truncate text-right">{l.value}</span>
          </a>
        ))}
      </div>

      <div className="mt-16 pt-6 border-t border-line font-mono text-xs text-muted flex justify-between">
        <span>hemant_pachauri.sh</span>
        <span>built with react + tailwind</span>
      </div>
    </section>
  )
}
