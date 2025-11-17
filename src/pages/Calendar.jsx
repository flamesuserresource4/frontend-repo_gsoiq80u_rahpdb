import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const pastelColors = {
  bg: 'bg-blue-50',
  tile: 'bg-white/80',
  accent: 'bg-pink-100',
}

const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

function buildMonth(year, month) {
  const first = new Date(year, month, 1)
  const start = new Date(first)
  start.setDate(first.getDate() - first.getDay())
  const weeks = []
  for (let w = 0; w < 6; w++) {
    const days = []
    for (let d = 0; d < 7; d++) {
      const date = new Date(start)
      date.setDate(start.getDate() + w * 7 + d)
      days.push(date)
    }
    weeks.push(days)
  }
  return weeks
}

const sampleEvents = [
  { date: '2025-08-25', title: 'First Day of School', color: 'bg-pink-200' },
  { date: '2025-09-05', title: 'Back-to-School Night', color: 'bg-blue-200' },
  { date: '2025-09-22', title: 'Fall Picnic', color: 'bg-green-200' },
]

function eventsFor(date) {
  const key = date.toISOString().slice(0,10)
  return sampleEvents.filter(e => e.date === key)
}

export default function CalendarPage() {
  const now = new Date()
  const [cursor, setCursor] = useState(new Date(now.getFullYear(), now.getMonth(), 1))
  const weeks = buildMonth(cursor.getFullYear(), cursor.getMonth())

  const prevMonth = () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth()-1, 1))
  const nextMonth = () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth()+1, 1))

  return (
    <div className={`${pastelColors.bg} min-h-screen`}>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="px-4 py-2 rounded-full bg-pink-100 hover:bg-pink-200 text-slate-800 shadow-sm">Prev</button>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            {cursor.toLocaleString('default', { month: 'long' })} {cursor.getFullYear()}
          </h1>
          <button onClick={nextMonth} className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 text-slate-800 shadow-sm">Next</button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-slate-600 font-medium">
          {days.map((d) => (
            <div key={d} className="py-2">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mt-2">
          {weeks.flat().map((date, idx) => {
            const isCurrentMonth = date.getMonth() === cursor.getMonth()
            const isToday = date.toDateString() === new Date().toDateString()
            const evts = eventsFor(date)
            return (
              <div key={idx} className={`h-28 p-2 rounded-2xl border border-white/60 ${pastelColors.tile} ${!isCurrentMonth ? 'opacity-50' : ''} shadow-sm hover:shadow-md transition-shadow relative`}
                title={evts.map(e=>e.title).join(', ')}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${isToday ? 'px-2 py-1 rounded-full bg-yellow-100 text-slate-800' : 'text-slate-600'}`}>{date.getDate()}</span>
                </div>
                <div className="mt-1 space-y-1">
                  {evts.map((e, i) => (
                    <div key={i} className={`text-[10px] px-2 py-1 rounded-full ${e.color} text-slate-800 truncate shadow-sm`}>
                      {e.title}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}
