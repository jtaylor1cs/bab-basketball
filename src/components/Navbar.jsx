import logo from '../assets/BABLogo.png'

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{ backgroundColor: '#EDE8D5', borderBottom: '3px solid #2C1A0E' }}
      className="px-8 py-3 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="BAB Training Logo"
    style={{ height: '120px', width: 'auto' }}
  />
  {/* <h1 style={{ color: '#2C1A0E' }} className="text-2xl font-bold tracking-wide">
    BAB <span style={{ color: '#B94B35' }}>Training</span>
  </h1> */}
</div>

      <ul style={{ color: '#2C1A0E' }} className="flex items-center gap-8 list-none text-lg font-bold tracking-wide m-0 p-0">
        <li
          className="cursor-pointer hover:opacity-60 transition"
          onClick={() => scrollTo('hero')}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:opacity-60 transition"
          onClick={() => scrollTo('programs')}
        >
          Programs
        </li>
        <li
          className="cursor-pointer hover:opacity-60 transition"
          onClick={() => scrollTo('about')}
        >
          About
        </li>
        <li
          style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
          className="cursor-pointer px-5 py-2 rounded hover:opacity-90 transition"
          onClick={() => scrollTo('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar