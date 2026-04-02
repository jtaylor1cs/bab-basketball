import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div
        style={{ backgroundColor: '#2D6A5A', color: '#EDE8D5' }}
        className="text-center py-3 px-4 text-sm font-bold tracking-wide"
      >
        Sign up before May 1st and get 10% off your first month.{' '}
        <span
          style={{ color: '#C49A2D', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Book now
        </span>
      </div>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App