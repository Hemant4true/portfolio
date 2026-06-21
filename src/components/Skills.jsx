import React from 'react'

const SKILLS = [
  { group: 'languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'C'] },
  { group: 'frontend', items: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { group: 'backend & apis', items: ['Node.js', 'Express.js', 'Flask', 'REST APIs'] },
  { group: 'databases & orms', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Prisma'] },
  { group: 'ai / ml', items: ['XGBoost', 'Scikit-learn', 'Isolation Forest', 'NumPy', 'Pandas'] },
  { group: 'security & infra', items: ['Scapy', 'JWT / bcrypt', 'pgbouncer', 'Electron', 'Vercel', 'Render'] },
]

export default function Skills() {
  return (
    <section className="py-16 md:py-20 border-b border-line">
      <div className="font-mono text-xs text-muted mb-6">// stack</div>
      <h2 className="text-2xl md:text-3xl font-mono font-bold mb-10">Capabilities</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line/30 border border-line/50 rounded-md overflow-hidden">
        {SKILLS.map((s) => (
          <div key={s.group} className="bg-panel/60 backdrop-blur-md p-5">
            <div className="font-mono text-[11px] text-signal uppercase tracking-wide mb-3">{s.group}</div>
            <div className="flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <span key={item} className="font-mono text-xs text-ink/80 px-2 py-1 bg-base rounded border border-line hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(0,255,156,0.3)] hover:border-signal hover:text-signal transition-all duration-300 cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
