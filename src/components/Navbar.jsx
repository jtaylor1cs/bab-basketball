import { useEffect, useState } from 'react'
import logo from '../assets/BABLogo.png'
import { IconBasketball } from './icons'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'about', label: 'Coach' },
  { id: 'gallery', label: 'Gallery' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        backgroundColor: '#EDE8D5',
        borderBottom: '3px solid #2C1A0E',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: scrolled ? '0 6px 0 rgba(44,26,14,0.08)' : 'none',
        transition: 'box-shadow 0.25s ease',
      }}
      className="px-6 md:px-8 py-2"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <img src={logo} alt="BAB Training Logo" style={{ height: '76px', width: 'auto' }} />
        </div>

        <ul style={{ color: '#2C1A0E' }} className="hidden md:flex items-center gap-8 list-none text-lg font-bold tracking-wide m-0 p-0">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer relative group"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
              <span
                style={{ backgroundColor: '#B94B35' }}
                className="absolute -bottom-1 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-200"
              />
            </li>
          ))}
          <li
            style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
            className="cursor-pointer px-5 py-2 rounded hover:opacity-90 transition flex items-center gap-2 hard-shadow-sm"
            onClick={() => scrollTo('contact')}
          >
            <IconBasketball size={16} />
            Sign Up
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', padding: '4px' }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              backgroundColor: '#2C1A0E',
              display: 'block',
              height: '3px',
              width: '28px',
              borderRadius: '2px',
              transform: menuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          />
          <span
            style={{
              backgroundColor: '#2C1A0E',
              display: 'block',
              height: '3px',
              width: '28px',
              borderRadius: '2px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s ease',
            }}
          />
          <span
            style={{
              backgroundColor: '#2C1A0E',
              display: 'block',
              height: '3px',
              width: '28px',
              borderRadius: '2px',
              transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          style={{ backgroundColor: '#EDE8D5', borderTop: '2px solid #2C1A0E' }}
          className="md:hidden flex flex-col gap-0 mt-3"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
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
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              backgroundColor: '#B94B35',
              color: '#EDE8D5',
              border: 'none',
              padding: '14px 0',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textAlign: 'center',
              cursor: 'pointer',
              marginTop: '8px',
              borderRadius: '6px',
            }}
            className="flex items-center justify-center gap-2"
          >
            <IconBasketball size={18} />
            Sign Up
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
