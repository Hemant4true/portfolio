import React from 'react'

const PROJECTS = [
  {
    id: '01',
    name: 'PulseWatch',
    status: 'live',
    tagline: 'Real-time uptime monitoring platform',
    description: 'Full-stack SaaS-style monitoring tool. React/TypeScript frontend streams live status via Server-Sent Events; Node.js backend runs scheduled health checks with node-cron against a PostgreSQL (Supabase) store via Prisma.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'SSE'],
    metrics: [
      { label: 'data flow', value: 'real-time' },
      { label: 'auth', value: 'JWT + bcrypt' },
    ],
    link: 'https://github.com/Hemant4true/PulseWatch',
  },
  {
    id: '02',
    name: 'AI Cyber Threat Alert System',
    status: 'active',
    tagline: 'Desktop intrusion detection system',
    description: 'Native Windows app combining Python Flask with Electron. Captures live network packets via Scapy and classifies threats using a dual ML pipeline — XGBoost for known attack patterns, Isolation Forest for zero-day anomalies — with an explainability layer that reasons about each alert in plain language.',
    stack: ['Python', 'Flask', 'XGBoost', 'Scikit-learn', 'Scapy', 'Electron'],
    metrics: [
      { label: 'dataset', value: 'CICIDS2017' },
      { label: 'detection', value: 'dual ML pipeline' },
    ],
    link: 'https://github.com/Hemant4true/Ai-cyber-threat-alert',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 border-b border-line">
      <div className="font-mono text-xs text-muted mb-6">// projects</div>
      <h2 className="text-2xl md:text-3xl font-mono font-bold mb-10">Things I've shipped</h2>

      <div className="space-y-6">
        {PROJECTS.map((p) => (
          <div key={p.id} className="bg-panel/60 backdrop-blur-md border border-line/50 rounded-md p-6 md:p-8 hover:border-signal/40 transition-colors group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted">{p.id}</span>
                <h3 className="text-xl md:text-2xl font-mono font-bold">{p.name}</h3>
              </div>
              <span className={`font-mono text-[11px] px-2 py-1 rounded border ${
                p.status === 'live'
                  ? 'border-signal/40 text-signal'
                  : 'border-amber-400/40 text-amber-300'
              }`}>
                {p.status === 'live' ? '● live' : '● active'}
              </span>
            </div>

            <p className="font-mono text-sm text-signal/90 mb-3">{p.tagline}</p>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-2xl" style={{ color: '#ffffff' }}>{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded bg-base border border-line text-muted">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-6">
                {p.metrics.map((m) => (
                  <div key={m.label} className="font-mono">
                    <div className="text-[10px] text-muted uppercase tracking-wide">{m.label}</div>
                    <div className="text-sm text-ink">{m.value}</div>
                  </div>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-signal hover:text-glow underline-offset-4 hover:underline"
              >
                view repository →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
