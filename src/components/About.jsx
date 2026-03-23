export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Timeline visual */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange/0 via-orange/40 to-orange/0" />
            
            <div className="space-y-12">
              <div className="pl-12 relative">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-orange shadow-lg shadow-orange/50" />
                <span className="text-orange font-heading text-sm tracking-wider">THE 1980s</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Where It All Started</h3>
                <p className="text-white/60 leading-relaxed">
                  A-1 Liquor opens its doors at 2602 Sam Houston Ave, quickly becoming a Huntsville staple. Cold beer, fair prices, and a handshake you could count on.
                </p>
              </div>

              <div className="pl-12 relative">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-orange shadow-lg shadow-orange/50" />
                <span className="text-orange font-heading text-sm tracking-wider">THROUGH THE YEARS</span>
                <h3 className="text-xl font-bold mt-1 mb-2">A Huntsville Tradition</h3>
                <p className="text-white/60 leading-relaxed">
                  Through homecomings, championships, and everyday celebrations — A-1 has been there. New owners came in and kept the tradition alive at the same address Huntsville has always known.
                </p>
              </div>

              <div className="pl-12 relative">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-orange shadow-lg shadow-orange/50" />
                <span className="text-orange font-heading text-sm tracking-wider">TODAY</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Four Decades Strong</h3>
                <p className="text-white/60 leading-relaxed">
                  Still independently owned. Still at 2602 Sam Houston Ave — the same spot it's always been. Now with A+ Donuts next door. Generations of Huntsville have walked through these doors.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="text-orange text-sm uppercase tracking-[0.2em] font-medium">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-3 mb-6">
              FOUR DECADES<br />ON THE AVE
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              A-1 Liquor isn't a franchise. It isn't a chain. It's a Huntsville institution — rooted at 2602 Sam Houston Ave for over 40 years.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Since the 1980s, we've been the place Huntsville comes for celebrations, game days, weeknight wind-downs, and everything in between. SHSU students discover us freshman year and keep coming back as alumni. TDCJ families stop in after long shifts. Neighbors grab a six-pack on the way to a cookout.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Owner Pisey Vorng has kept this store running the way it was always meant to be — personal, local, and part of the community. No algorithms. No corporate playbook. Just good service and cold drinks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
