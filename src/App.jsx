import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Chatbot from './components/Chatbot'
import Planner from './components/Planner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Chatbot />
        <Planner />
      </main>
      <Footer />
    </div>
  )
}

export default App
