import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const latest = [
  { title: 'STEM Lab Opens', body: 'Our new STEM lab is ready for curious minds!', tag: 'Latest', color: 'bg-blue-100' },
  { title: 'Art Showcase', body: 'Students present their spring art pieces.', tag: 'Latest', color: 'bg-pink-100' },
]
const alerts = [
  { title: 'Weather Delay', body: 'School opens at 10am due to weather.', tag: 'Urgent', color: 'bg-yellow-100' },
]
const archived = [
  { title: 'Winter Concert', body: 'A beautiful performance by our choir.', tag: 'Archived', color: 'bg-purple-100' },
]

function Card({ item }) {
  return (
    <div className="rounded-2xl bg-white/80 border border-white/60 shadow-sm hover:shadow-md transition-shadow p-5">
      <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${item.color} text-slate-800 shadow-sm`}>{item.tag}</span>
      <h3 className="mt-3 font-semibold text-slate-800">{item.title}</h3>
      <p className="text-slate-600 text-sm mt-1">{item.body}</p>
    </div>
  )
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">News & Announcements</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <section>
            <h2 className="text-lg font-semibold text-slate-700 mb-3">Latest News</h2>
            <div className="grid gap-3">
              {latest.map((i, idx) => <Card key={idx} item={i} />)}
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-700 mb-3">Urgent Alerts</h2>
            <div className="grid gap-3">
              {alerts.map((i, idx) => <Card key={idx} item={i} />)}
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-700 mb-3">Archived</h2>
            <div className="grid gap-3">
              {archived.map((i, idx) => <Card key={idx} item={i} />)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
