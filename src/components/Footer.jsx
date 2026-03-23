export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="font-heading text-2xl">
              <span className="text-orange">A-1</span> LIQUOR
            </span>
            <p className="text-white/40 mt-3 text-sm leading-relaxed">
              Huntsville's original liquor store. Independently owned since the 1980s.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-wider text-orange mb-3">HOURS</h4>
            <p className="text-white/50 text-sm">Mon – Sat: 10 AM – 9 PM</p>
            <p className="text-white/30 text-sm">Sunday: Closed</p>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-wider text-orange mb-3">CONTACT</h4>
            <p className="text-white/50 text-sm">2602 Sam Houston Ave</p>
            <p className="text-white/50 text-sm">Huntsville, TX 77340</p>
            <a href="tel:9362913534" className="text-white/50 text-sm hover:text-orange transition-colors">(936) 291-3534</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {year} A-1 Liquor. All rights reserved.
          </p>
          <p className="text-white/15 text-xs flex items-center gap-1">
            Eat 'em up, Kats <span className="text-orange/30">🐾</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
