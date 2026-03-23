export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <span className="text-orange text-sm uppercase tracking-[0.2em] font-medium">Come See Us</span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3">
            FIND <span className="text-orange">A-1</span>
          </h2>
        </div>

        <div className="fade-in grid md:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-white/10 h-80 md:h-full min-h-[320px]">
            <iframe
              title="A-1 Liquor Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.5!2d-95.548!3d30.723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86470b2b8a4f0001%3A0x1234567890abcdef!2s2602+Sam+Houston+Ave%2C+Huntsville%2C+TX+77340!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl mb-4 text-orange">Address</h3>
              <p className="text-white/70 text-lg">
                2602 Sam Houston Ave<br />
                Huntsville, TX 77340
              </p>
              <a
                href="https://www.google.com/maps/dir//2602+Sam+Houston+Ave,+Huntsville,+TX+77340"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-orange hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <h3 className="font-heading text-xl mb-4 text-orange">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-white/70 max-w-xs">
                  <span>Monday – Saturday</span>
                  <span className="font-medium text-white">10 AM – 9 PM</span>
                </div>
                <div className="flex justify-between text-white/40 max-w-xs">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <p className="text-white/30 text-xs mt-2 italic">Closed Sundays per Texas liquor law</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl mb-4 text-orange">Call Us</h3>
              <a href="tel:9362913534" className="text-2xl font-bold text-white hover:text-orange transition-colors">
                (936) 291-3534
              </a>
            </div>

            {/* Bearkat pride */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/30 text-sm flex items-center gap-2">
                <span className="text-orange">🐾</span>
                Proudly serving the Sam Houston State community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
