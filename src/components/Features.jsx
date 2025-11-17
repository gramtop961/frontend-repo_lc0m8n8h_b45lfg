import { Bot, Rocket, Wand2, Gauge, Database, Shield } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Bot, title: 'Conversational Builder', desc: 'Describe your idea in plain language and watch it become a working app.' },
    { icon: Wand2, title: 'Autonomous Agents', desc: 'Agents plan tasks, generate code and wire UI + backend automatically.' },
    { icon: Rocket, title: 'Minutes to Launch', desc: 'Spin up a prototype in minutes, iterate instantly with changes.' },
    { icon: Gauge, title: 'High Performance', desc: 'Vite + React frontend and FastAPI backend, optimized for speed.' },
    { icon: Database, title: 'Built-in Database', desc: 'MongoDB persistence by default for anything that needs data.' },
    { icon: Shield, title: 'Enterprise Ready', desc: 'CORS, validation and clean APIs out of the box.' },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center">What you get</h2>
        <p className="mt-3 text-gray-600 text-center">A modern stack, smart automation, and a beautiful canvas to ship fast.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
