import logo from '../assets/BABLogo.png'

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{ backgroundColor: '#2C1A0E', borderTop: '3px solid #C49A2D' }}
      className="px-8 py-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="BAB Training Logo"
            style={{ height: '70px', width: 'auto' }}
          />
          <div>
            <h3 style={{ color: '#C49A2D' }} className="text-xl font-bold tracking-wide mb-1">
              BAB Training
            </h3>
            <p style={{ color: '#EDE8D5' }} className="text-sm opacity-50">
              Bay Area Basketball — Sunnyvale, CA
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <span onClick={() => scrollTo('hero')} style={{ color: '#EDE8D5' }} className="text-sm font-bold tracking-wide opacity-60 hover:opacity-100 transition cursor-pointer">Home</span>
          <span onClick={() => scrollTo('programs')} style={{ color: '#EDE8D5' }} className="text-sm font-bold tracking-wide opacity-60 hover:opacity-100 transition cursor-pointer">Programs</span>
          <span onClick={() => scrollTo('about')} style={{ color: '#EDE8D5' }} className="text-sm font-bold tracking-wide opacity-60 hover:opacity-100 transition cursor-pointer">About</span>
          <span onClick={() => scrollTo('contact')} style={{ color: '#EDE8D5' }} className="text-sm font-bold tracking-wide opacity-60 hover:opacity-100 transition cursor-pointer">Contact</span>
        </div>

        <p style={{ color: '#EDE8D5' }} className="text-sm opacity-40">
          2025 BAB Training. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer