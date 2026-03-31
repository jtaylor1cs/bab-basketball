
function Hero() {
    return (
      <section id="hero" style={{ backgroundColor: '#F5EFE0', minHeight: '90vh' }}

        className="flex flex-col items-center justify-center text-center px-8 relative overflow-hidden"
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            backgroundColor: '#C49A2D',
            borderRadius: '50%',
            opacity: 0.15,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '300px',
            height: '300px',
            backgroundColor: '#B94B35',
            borderRadius: '50%',
            opacity: 0.12,
          }}
        />
  
        <p
          style={{
            color: '#EDE8D5',
            backgroundColor: '#2D6A5A',
            letterSpacing: '0.2em',
          }}
          className="text-xs font-bold uppercase px-4 py-2 rounded mb-6"
        >
          Bay Area Basketball
        </p>
  
        <h1 style={{ color: '#2C1A0E' }} className="text-7xl font-bold leading-tight mb-6">
          Train Hard. <br />
          <span style={{ color: '#B94B35' }}>Play Harder.</span>
        </h1>
  
        <p style={{ color: '#2C1A0E' }} className="text-xl max-w-xl mb-10 opacity-60">
          Elite basketball training for grades K–12 in the Bay Area.
          Built to develop skills, confidence, and compete at the next level.
        </p>
  
        <div className="flex gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
  <button
    style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
    className="px-10 py-4 text-lg font-bold tracking-wide rounded hover:opacity-90 transition"
    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
  >
    Book a Session
  </button>
  <button
    style={{ border: '2px solid #2C1A0E', color: '#2C1A0E', backgroundColor: 'transparent' }}
    className="px-10 py-4 text-lg font-bold tracking-wide rounded hover:opacity-90 transition"
    onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
  >
    Learn More
  </button>
</div>
        </div>
      </section>
    )
  }
  
  export default Hero