export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/60 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-slate-800">Bright Meadow School</h4>
          <p className="text-sm text-slate-600 mt-2">A welcoming, student-first community where curiosity and kindness lead the way.</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-slate-700">Contact</h5>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>123 Meadow Lane, Sunnyvale</li>
            <li>(555) 123-4567</li>
            <li>hello@brightmeadow.edu</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-slate-700">Helpful Links</h5>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li><a className="hover:underline" href="/calendar">Calendar</a></li>
            <li><a className="hover:underline" href="/news">News</a></li>
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} Bright Meadow School. All rights reserved.</div>
    </footer>
  )
}
