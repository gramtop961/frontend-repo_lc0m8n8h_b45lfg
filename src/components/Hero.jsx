import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/40 text-gray-700 text-xs mb-4">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-amber-400 animate-ping" />
          Live AI agents that plan, code and ship in minutes
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
          Build apps and websites in minutes with AI agents
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Chat with an AI architect, generate a project plan, and let autonomous agents craft your UI, backend and data models.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#chat" className="px-5 py-3 rounded-xl bg-gray-900 text-white shadow hover:shadow-lg transition">Launch Chatbot</a>
          <a href="#features" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-white/60 text-gray-900 hover:bg-white">Explore Features</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
    </section>
  )
}
