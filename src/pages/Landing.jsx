import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-blue-50 to-purple-50 min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Joyful Learning', text: 'Hands-on, curiosity-driven activities in every classroom.', color: 'bg-pink-50' },
              { title: 'Safe & Inclusive', text: 'We celebrate differences and nurture kindness.', color: 'bg-blue-50' },
              { title: 'Future-Ready', text: 'Creativity, collaboration, and problem-solving every day.', color: 'bg-green-50' },
            ].map((c) => (
              <div key={c.title} className={`rounded-2xl ${c.color} p-6 border border-white/60 shadow-sm`}>
                <h3 className="font-semibold text-slate-800">{c.title}</h3>
                <p className="text-slate-600 mt-2 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
        <QuickLinks />
      </main>
      <Footer />
    </div>
  )
}
