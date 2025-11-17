import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Chatbot() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! Tell me what you want to build 🚀' }])
  const [loading, setLoading] = useState(false)

  const send = async () => {
    const text = input.trim()
    if (!text) return
    const history = messages.slice(-6)
    setMessages(prev => [...prev, { role: 'user', content: text }])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Oops, something went wrong.' }])
    } finally {
      setLoading(false)
    }
  }

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <section id="chat" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
          <h2 className="text-2xl font-semibold text-gray-900">AI Chatbot</h2>
        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow-sm">
          <div className="h-72 overflow-y-auto space-y-3 pr-2">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900'}>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 mr-2">{m.role}</span>
                <span>{m.content}</span>
              </div>
            ))}
            {loading && <p className="text-gray-500">Thinking…</p>}
          </div>

          <div className="mt-4 flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              rows={2}
              className="flex-1 resize-none rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Describe your idea…"
            />
            <button onClick={send} className="h-12 px-4 rounded-xl bg-gray-900 text-white inline-flex items-center gap-2 disabled:opacity-50" disabled={loading}>
              <Send size={16} />
              Send
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
            <Sparkles size={14} /> Tip: Try “A SaaS dashboard for fitness coaches with subscriptions.”
          </div>
        </div>
      </div>
    </section>
  )
}
