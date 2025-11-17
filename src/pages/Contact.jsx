import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-3xl bg-white/80 border border-white/60 shadow-sm p-6">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-700">Name</label>
                <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-xl bg-pink-50/60 border border-white/60 p-3 outline-none focus:ring-2 focus:ring-pink-200" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-xl bg-blue-50/60 border border-white/60 p-3 outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Message</label>
                <textarea rows="5" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-xl bg-yellow-50/60 border border-white/60 p-3 outline-none focus:ring-2 focus:ring-yellow-200" placeholder="How can we help?" />
              </div>
              <button className="px-6 py-3 rounded-full bg-green-200 hover:bg-green-300 text-slate-800 font-semibold shadow-sm transition-colors">Send Message</button>
              {sent && <p className="text-sm text-green-700">Thanks! Well be in touch soon.</p>}
            </div>
          </form>

          <div className="rounded-3xl bg-white/80 border border-white/60 shadow-sm p-6">
            <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 border border-white/60" />
            <ul className="mt-4 text-slate-700 text-sm space-y-1">
              <li><span className="font-semibold">Address:</span> 123 Meadow Lane, Sunnyvale</li>
              <li><span className="font-semibold">Phone:</span> (555) 123-4567</li>
              <li><span className="font-semibold">Email:</span> hello@brightmeadow.edu</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
