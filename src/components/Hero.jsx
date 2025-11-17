import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center"
          alt="Soft gradient cover"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium mb-4 shadow-sm">
            Welcome to our community
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800">
            Bright Meadow School
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl">
            A friendly, modern place to learn, grow, and shine. Safe, inclusive, and joyful learning for every student.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quick-links" className="px-6 py-3 rounded-full bg-blue-200 hover:bg-blue-300 text-slate-800 font-semibold shadow-sm transition-colors">Explore</a>
            <a href="/contact" className="px-6 py-3 rounded-full bg-pink-200 hover:bg-pink-300 text-slate-800 font-semibold shadow-sm transition-colors">Enroll Inquiries</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />
    </section>
  )
}
