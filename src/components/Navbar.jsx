import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#about', label: 'Our Story' },
    { href: '#products', label: 'Products' },
    { href: '#donuts', label: 'A+ Donuts' },
    { href: '#location', label: 'Visit Us' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl tracking-tight">
          <span className="text-orange">A-1</span> LIQUOR
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 hover:text-orange transition-colors uppercase tracking-wider">
              {l.label}
            </a>
          ))}
          <a href="tel:9362913534" className="bg-orange hover:bg-orange-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors">
            (936) 291-3534
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-light border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-white/70 hover:text-orange transition-colors uppercase tracking-wider text-sm font-medium py-2">
              {l.label}
            </a>
          ))}
          <a href="tel:9362913534" className="block bg-orange text-white text-center text-sm font-semibold px-5 py-2.5 rounded mt-2">
            (936) 291-3534
          </a>
        </div>
      )}
    </nav>
  )
}
