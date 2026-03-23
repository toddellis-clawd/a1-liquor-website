const categories = [
  {
    name: 'Spirits',
    desc: 'Bourbon, whiskey, vodka, tequila, rum, gin — from everyday favorites to top-shelf selections. We carry what Huntsville drinks.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="12" y="16" width="16" height="20" rx="2" />
        <path d="M16 16V10h8v6" />
        <path d="M18 8h4v2h-4z" fill="currentColor" />
        <line x1="12" y1="22" x2="28" y2="22" />
      </svg>
    ),
  },
  {
    name: 'Beer',
    desc: 'Domestic, import, and craft. Ice-cold singles, six-packs, cases, and kegs. From Bud Light to local Texas brews.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="12" width="14" height="22" rx="2" />
        <path d="M24 16h4a2 2 0 012 2v6a2 2 0 01-2 2h-4" />
        <path d="M14 12V8" />
        <path d="M20 12V9" />
        <line x1="10" y1="18" x2="24" y2="18" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: 'Wine',
    desc: 'Reds, whites, rosés, and sparkling. Whether it\'s date night or a dinner party, we\'ve got the bottle.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 18c0-4 2-8 2-12h6c0 4 2 8 2 12a5 5 0 01-10 0z" />
        <line x1="20" y1="23" x2="20" y2="32" />
        <line x1="14" y1="34" x2="26" y2="34" />
        <line x1="16" y1="32" x2="24" y2="32" />
      </svg>
    ),
  },
  {
    name: 'Mixers & More',
    desc: 'Sodas, juices, bitters, garnishes, and everything you need to make the drink right. Plus snacks, ice, and cups.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8h16l-3 26H15L12 8z" />
        <path d="M12 8l-2-2" />
        <circle cx="20" cy="22" r="3" />
        <line x1="10" y1="14" x2="30" y2="14" />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 bg-dark-light relative">
      <div className="absolute inset-0 diagonal-lines" />
      <div className="relative max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <span className="text-orange text-sm uppercase tracking-[0.2em] font-medium">What We Carry</span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3">
            EVERYTHING YOU <span className="text-orange">NEED</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
            If it's legal to sell in Texas, chances are we've got it on the shelf.
          </p>
        </div>

        <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="group bg-dark-lighter/50 border border-white/5 rounded-xl p-8 hover:border-orange/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange/5">
              <div className="text-orange mb-5 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="font-heading text-xl mb-3">{cat.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
