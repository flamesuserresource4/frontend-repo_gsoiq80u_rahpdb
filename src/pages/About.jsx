import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const values = [
  { title: 'Kindness', text: 'We treat everyone with respect and empathy.', color: 'bg-pink-100' },
  { title: 'Curiosity', text: 'We ask questions and explore bravely.', color: 'bg-blue-100' },
  { title: 'Creativity', text: 'We express ourselves and build new things.', color: 'bg-yellow-100' },
  { title: 'Teamwork', text: 'We collaborate and lift each other up.', color: 'bg-green-100' },
]

const staff = [
  { name: 'Ava Johnson', role: 'Principal' },
  { name: 'Liam Chen', role: 'STEM Coordinator' },
  { name: 'Mia Patel', role: 'Art Director' },
  { name: 'Noah Smith', role: 'Counselor' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-800">About Us</h1>
        <p className="text-slate-600 mt-2 max-w-3xl">Bright Meadow School began with a simple idea: learning should be joyful, inclusive, and empowering. Today, we continue that mission by creating safe spaces where students can explore, create, and thrive.</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-800">Mission</h2>
          <p className="text-slate-600 mt-1">To inspire every student to be curious, kind, and confident.</p>
          <h2 className="text-xl font-semibold text-slate-800 mt-6">Vision</h2>
          <p className="text-slate-600 mt-1">A community where learning is meaningful, collaborative, and future-ready.</p>
          <h2 className="text-xl font-semibold text-slate-800 mt-6">Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mt-2">
            {values.map(v => (
              <div key={v.title} className={`rounded-2xl p-4 border border-white/60 shadow-sm ${v.color}`}>
                <h3 className="font-semibold text-slate-800">{v.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-800">Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {staff.map(s => (
              <div key={s.name} className="text-center">
                <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 border border-white/60 shadow-sm" />
                <h3 className="mt-3 font-semibold text-slate-800">{s.name}</h3>
                <p className="text-sm text-slate-600">{s.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
