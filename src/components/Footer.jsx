import logo from '../assets/BABLogo.png'
import { IconBasketball } from './icons'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'about', label: 'Coach' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{ backgroundColor: '#2C1A0E', borderTop: '4px solid #C49A2D' }}
      className="px-6 md:px-8 py-10 relative overflow-hidden"
    >
      <IconBasketball
        size={140}
        className="absolute pointer-events-none hidden md:block"
        style={{ color: '#EDE8D5', opacity: 0.04, top: '-30px', right: '-20px' }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="BAB Training Logo"
            style={{ height: '70px', width: 'auto' }}
          />
          <div>
            <h3 className="font-display uppercase text-xl mb-1" style={{ color: '#C49A2D' }}>
              BAB Training
            </h3>
            <p style={{ color: '#EDE8D5' }} className="text-sm opacity-50">
              Bay Area Basketball — Sunnyvale, CA
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {links.map((link) => (
            <span
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{ color: '#EDE8D5' }}
              className="text-sm font-bold tracking-wide opacity-60 hover:opacity-100 transition cursor-pointer"
            >
              {link.label}
            </span>
          ))}
        </div>

        <p style={{ color: '#EDE8D5' }} className="text-sm opacity-40">
          &copy; {new Date().getFullYear()} BAB Training. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
