export default function Donuts() {
  return (
    <section id="donuts" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="fade-in bg-gradient-to-br from-dark-light to-dark-lighter border border-orange/10 rounded-2xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange text-sm uppercase tracking-[0.2em] font-medium">Next Door</span>
              <h2 className="font-heading text-4xl md:text-5xl mt-3 mb-6">
                A+ DONUTS
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                Same address. Same owner. Different kind of craving.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                A+ Donuts is right next door at Suite B — fresh donuts, kolaches, and coffee every morning. Swing by for breakfast, then come back for happy hour. Your one-stop shop on Sam Houston Ave.
              </p>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Open early mornings — stop in before class or work
              </div>
            </div>

            {/* Donut visual - CSS art */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center shadow-2xl shadow-orange/20">
                  <div className="w-20 h-20 rounded-full bg-dark" />
                </div>
                {/* Sprinkles */}
                <div className="absolute top-4 left-1/2 w-1 h-3 bg-white rounded-full rotate-45" />
                <div className="absolute top-8 right-8 w-1 h-3 bg-white/80 rounded-full -rotate-12" />
                <div className="absolute top-6 left-10 w-1 h-3 bg-white/60 rounded-full rotate-90" />
                <div className="absolute bottom-12 right-12 w-1 h-3 bg-white/70 rounded-full rotate-45" />
                <div className="absolute bottom-16 left-8 w-1 h-3 bg-white/50 rounded-full -rotate-30" />
                <div className="absolute top-14 right-4 w-1 h-3 bg-white/60 rounded-full rotate-12" />

                {/* Plus sign */}
                <div className="absolute -top-4 -right-4 bg-dark border-2 border-orange rounded-full w-14 h-14 flex items-center justify-center font-heading text-orange text-xl">
                  A+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
