import React from 'react'

export default function About() {
  return (
    <section className="py-16 md:py-20 border-b border-line">
      <div className="font-mono text-xs text-muted mb-6">// about</div>
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12">
        <h2 className="text-2xl md:text-3xl font-mono font-bold leading-tight">
          Profile<br />summary
        </h2>
        <p className="text-ink/90 text-base md:text-lg leading-relaxed font-sans">
          I'm a BCA student (graduating 2026) at Manav Rachna International Institute, working at the intersection of <span className="text-signal">full-stack engineering</span>, <span className="text-signal">applied AI/ML</span>, and <span className="text-signal">network security</span>. I've built a real-time uptime monitoring platform and an AI-powered intrusion detection system, completed a 6-month full-stack internship, and co-authored a research paper on AI in cybersecurity. I like systems that have to work correctly under pressure — the kind that watch, alert, and explain themselves.
        </p>
      </div>
    </section>
  )
}
