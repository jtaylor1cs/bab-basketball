import heroImage from '../assets/Esfaceworkout.jpg'

function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: '#F5EFE0', minHeight: '90vh' }}
      className="flex flex-col md:flex-row items-stretch"
    >
      <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-20 md:py-0">
        <p
          style={{
            fontFamily: "'Bebas Neue', cursive",
            color: '#EDE8D5',
            backgroundColor: '#2D6A5A',
            letterSpacing: '0.25em',
            fontSize: '1.3rem',
            display: 'inline-block',
          }}
          className="px-5 py-2 rounded mb-6 w-fit text-2xl"
        >
          Bay Area Basketball
        </p>

        <h1
          style={{ color: '#2C1A0E', lineHeight: '1.1' }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          Train Hard. <br />
          <span style={{ color: '#B94B35' }}>Play Harder.</span>
        </h1>

        <p style={{ color: '#2C1A0E' }} className="text-xl max-w-lg mb-10 opacity-60">
          Elite basketball training for grades K-12 in the Bay Area.
          Built to develop skills, confidence, and compete at the next level.
        </p>

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

      <div
        className="flex-1 relative hidden md:block"
        style={{ minHeight: '500px' }}
      >
        <img
          src={heroImage}
          alt="Coach Jon Taylor training"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #F5EFE0 0%, transparent 20%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '32px',
            backgroundColor: '#C49A2D',
            color: '#2C1A0E',
            padding: '10px 18px',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          UC Merced Starting PG
        </div>
      </div>

      <div
        className="md:hidden w-full relative"
        style={{ height: '280px' }}
      >
        <img
          src={heroImage}
          alt="Coach Jon Taylor training"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, #F5EFE0 0%, transparent 30%)',
          }}
        />
      </div>
    </section>
  )
}

export default Hero