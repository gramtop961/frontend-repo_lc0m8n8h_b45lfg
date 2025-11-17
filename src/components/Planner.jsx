import { useState } from 'react'
import { ListChecks } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Planner() {
  const [idea, setIdea] = useState('Landing page for an AI design studio with booking and portfolio')
  const [features, setFeatures] = useState('3D hero, project gallery, contact form')
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(false)

  const generatePlan = async () => {
    setLoading(true)
    setPlan(null)
    try {
      const res = await fetch(`${API_BASE}/api/plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, features: features.split(',').map(f => f.trim()).filter(Boolean) })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setPlan(data.plan)
    } catch (e) {
      setPlan({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="plan" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
          <h2 className="text-2xl font-semibold text-gray-900">AI Planner</h2>
        </div>

        <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Your idea</label>
              <input value={idea} onChange={(e) => setIdea(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 p-3" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Key features (comma separated)</label>
              <input value={features} onChange={(e) => setFeatures(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 p-3" />
            </div>
          </div>
          <button onClick={generatePlan} className="mt-4 inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg" disabled={loading}>
            <ListChecks size={16} /> Generate Plan
          </button>

          {plan && (
            <div className="mt-6">
              {plan.error ? (
                <p className="text-red-600">{plan.error}</p>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{plan.summary}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card title="Frontend" data={plan.frontend} />
                    <Card title="Backend" data={plan.backend} />
                  </div>
                  {plan.features?.length > 0 && (
                    <div>
                      <h4 className="font-medium">Requested features</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium">Next steps</h4>
                    <ul className="list-disc pl-6 text-sm text-gray-700">
                      {plan.next_steps.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Card({ title, data }) {
  return (
    <div className="rounded-xl border border-gray-100 p-4">
      <h4 className="font-medium mb-2">{title}</h4>
      <pre className="text-xs text-gray-700 whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
