export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Diamond pattern overlay */}
      <div className="absolute inset-0 diagonal-lines" />
      
      {/* Orange accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-orange to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-orange to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-block mb-6">
          <span className="text-orange/80 text-sm md:text-base uppercase tracking-[0.3em] font-medium border border-orange/30 px-4 py-2 rounded-full">
            Est. 1980s &bull; Huntsville, Texas
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
          HUNTSVILLE'S<br />
          <span className="text-orange">ORIGINAL</span><br />
          LIQUOR STORE
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Four decades on Sam Houston Ave. Serving Bearkats, locals, and everyone in between since the Reagan era.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#about" className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded text-lg transition-all hover:shadow-lg hover:shadow-orange/20">
            Our Story
          </a>
          <a href="#location" className="border border-white/20 hover:border-orange/50 text-white font-semibold px-8 py-4 rounded text-lg transition-all hover:bg-white/5">
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-orange/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
