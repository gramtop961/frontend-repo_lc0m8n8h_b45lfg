import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 animate-pulse" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">AstraBuild AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#chat" className="hover:text-gray-900">Chat</a>
          <a href="#plan" className="hover:text-gray-900">Planner</a>
          <a href="/test" className="hover:text-gray-900">System</a>
        </nav>
        <button className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-gray-200">
          <Menu size={18} />
        </button>
        <a href="#chat" className="hidden md:inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition">
          <Sparkles size={16} />
          <span>Start Building</span>
        </a>
      </div>
    </header>
  )
}
