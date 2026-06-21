import React, { useEffect, useState } from 'react'
import DemoOne from './components/demo'
import StatusBar from './components/StatusBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import FadeIn from './components/FadeIn.jsx'

export default function App() {
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen pb-10">
      <DemoOne />
      <StatusBar uptime={uptime} />
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <FadeIn><Hero /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
    </div>
  )
}
