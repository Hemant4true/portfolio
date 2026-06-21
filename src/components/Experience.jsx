import React from 'react'

const LOG = [
  {
    when: '2025 — 2026',
    title: 'Full Stack Web Development Intern',
    org: 'Labmentix Pvt. Ltd. · Remote',
    detail: 'Built 3+ responsive web apps with a React frontend and Node.js/Express backend, designed MySQL/MongoDB schemas, and owned features end-to-end across a 6-month cycle.',
  },
  {
    when: '2025',
    title: 'Research Paper — AI & ML in Cybersecurity',
    org: 'Manav Rachna International Institute of Research & Studies',
    detail: 'Co-authored a review of supervised, deep learning, and unsupervised models for intrusion, phishing, and ransomware detection across the CICIDS2017 and UNSW-NB15 datasets.',
  },
  {
    when: '2023 — 2026',
    title: 'Bachelor of Computer Applications',
    org: 'Manav Rachna International Institute of Research & Studies',
    detail: 'Coursework spanning data structures, OOP, web development, AI fundamentals, DBMS, software engineering, OS, and IoT.',
  },
]

export default function Experience() {
  return (
    <section className="py-16 md:py-20 border-b border-line">
      <div className="font-mono text-xs text-muted mb-6">// log</div>
      <h2 className="text-2xl md:text-3xl font-mono font-bold mb-10">Experience & education</h2>

      <div className="relative pl-6 md:pl-8 border-l border-line space-y-10">
        {LOG.map((item, i) => (
          <div key={i} className="relative group">
            <span className="absolute -left-[29px] md:-left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-signal transition-all duration-300 group-hover:scale-[1.3] group-hover:shadow-[0_0_12px_rgba(0,255,156,0.8)]" />
            <div className="font-mono text-xs text-signal mb-1">{item.when}</div>
            <h3 className="text-lg md:text-xl font-mono font-bold">{item.title}</h3>
            <div className="text-sm text-muted mb-2">{item.org}</div>
            <p className="text-ink/80 text-sm md:text-base leading-relaxed max-w-2xl">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
