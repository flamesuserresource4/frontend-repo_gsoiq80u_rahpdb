import { Calendar, Newspaper, Info, Phone } from 'lucide-react'

const links = [
  { href: '/calendar', title: 'School Calendar', desc: 'Important dates and events', color: 'from-blue-100 to-cyan-100', icon: Calendar },
  { href: '/news', title: 'News & Alerts', desc: 'Latest updates and notices', color: 'from-pink-100 to-rose-100', icon: Newspaper },
  { href: '/about', title: 'About Us', desc: 'Our story and values', color: 'from-yellow-100 to-amber-100', icon: Info },
  { href: '/contact', title: 'Contact', desc: 'Get in touch with us', color: 'from-green-100 to-emerald-100', icon: Phone },
]

export default function QuickLinks() {
  return (
    <section id="quick-links" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Quick Links</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map(({ href, title, desc, color, icon: Icon }) => (
            <a key={href} href={href} className={`group rounded-2xl p-5 bg-gradient-to-br ${color} shadow-sm border border-white/60 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/60 shadow-sm">
                  <Icon size={20} className="text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
