import { useState } from 'react'
import logo from '../assets/BABLogo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{ backgroundColor: '#EDE8D5', borderBottom: '3px solid #2C1A0E', position: 'sticky', top: 0, zIndex: 100 }}
      className="px-8 py-3"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="BAB Training Logo" style={{ height: '60px', width: 'auto' }} />
          <h1 style={{ color: '#2C1A0E' }} className="text-2xl font-bold tracking-wide">
            BAB <span style={{ color: '#B94B35' }}>Training</span>
          </h1>
        </div>

        <ul style={{ color: '#2C1A0E' }} className="hidden md:flex items-center gap-8 list-none text-lg font-bold tracking-wide m-0 p-0">
          <li className="cursor-pointer hover:opacity-60 transition" onClick={() => scrollTo('hero')}>Home</li>
          <li className="cursor-pointer hover:opacity-60 transition" onClick={() => scrollTo('programs')}>Programs</li>
          <li className="cursor-pointer hover:opacity-60 transition" onClick={() => scrollTo('about')}>About</li>
          <li
            style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
            className="cursor-pointer px-5 py-2 rounded hover:opacity-90 transition"
            onClick={() => scrollTo('contact')}
          >
            Contact
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', padding: '4px' }}
        >
          <span style={{ backgroundColor: '#2C1A0E', display: 'block', height: '3px', width: '28px', borderRadius: '2px' }} />
          <span style={{ backgroundColor: '#2C1A0E', display: 'block', height: '3px', width: '28px', borderRadius: '2px' }} />
          <span style={{ backgroundColor: '#2C1A0E', display: 'block', height: '3px', width: '28px', borderRadius: '2px' }} />
        </button>
      </div>

      {menuOpen && (
        <div
          style={{ backgroundColor: '#EDE8D5', borderTop: '2px solid #2C1A0E' }}
          className="md:hidden flex flex-col gap-0 mt-3"
        >
          {['hero', 'programs', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #2C1A0E',
                color: '#2C1A0E',
                padding: '14px 0',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textAlign: 'left',
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {item === 'hero' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar