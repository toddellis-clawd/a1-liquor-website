import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Donuts from './components/Donuts'
import Location from './components/Location'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Donuts />
      <Location />
      <Footer />
    </div>
  )
}

export default App
