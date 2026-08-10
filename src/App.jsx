import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Programs from './components/Programs'
import VideoShowcase from './components/VideoShowcase'
import Schedule from './components/Schedule'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTopButton from './components/ScrollTopButton'
import { IconBasketball } from './components/icons'

function App() {
  return (
    <div>
      <div
        style={{ backgroundColor: '#2D6A5A', color: '#EDE8D5' }}
        className="text-center py-3 px-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2"
      >
        <IconBasketball size={16} />
        Spots are limited — Tuesday &amp; Thursday sessions fill up fast.{' '}
        <span
          style={{ color: '#C49A2D', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Book now
        </span>
      </div>
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Programs />
      <VideoShowcase />
      <Schedule />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </div>
  )
}

export default App
