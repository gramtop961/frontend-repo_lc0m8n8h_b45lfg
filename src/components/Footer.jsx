export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} AstraBuild AI. All rights reserved.</p>
        <div className="text-sm text-gray-600">Made with Vite, React, FastAPI and a sprinkle of AI ✨</div>
      </div>
    </footer>
  )
}
