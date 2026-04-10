import bgXando from '../assets/bg_xando.png'
import bgRetroball from '../assets/bg_retroball.png'
import bgSilhouettes from '../assets/bg_silhouettes.png'

function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: '#F5EFE0', minHeight: '90vh' }}
      className="flex flex-col items-center justify-center text-center px-8 relative overflow-hidden"
    >
      <img
        src={bgRetroball}
        alt=""
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          top: '-60px',
          right: '-60px',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

<img
  src={bgXando}
  alt=""
  className="absolute pointer-events-none hidden md:block"
  style={{
    width: '700px',
    bottom: '-40px',
    left: '-60px',
    opacity: 0.5,
    transform: 'rotate(-10deg)',
    zIndex: 1,
  }}
/>

<img
  src={bgSilhouettes}
  alt=""
  className="absolute pointer-events-none hidden md:block"
  style={{
    width: '95%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(30deg)',
    opacity: 0.35,
    zIndex: 2,
  }}
/>

      <div className="relative" style={{ zIndex: 10 }}>
        <link
  href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Boogaloo&family=DM+Sans:wght@400;700&display=swap"
  rel="stylesheet"
/>
<link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <p
          style={{
            color: '#EDE8D5',
            backgroundColor: '#2D6A5A',
            letterSpacing: '0.25em',
            fontFamily: 'Alfa Slab One, serif',
            fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
          }}
          className="uppercase px-6 py-3 rounded mb-6 inline-block"
        >
          Bay Area Basketball Training
        </p>

        <h1
  style={{
    color: '#2C1A0E',
    fontFamily: 'Boogaloo, cursive',
    lineHeight: '1.1',
    fontSize: 'clamp(2rem, 5vw, 4rem)',
  }}
  className="mb-2"
>
  TRAIN HARD.
</h1>
<h1
  style={{
    color: '#B94B35',
    fontFamily: 'Boogaloo, cursive',
    lineHeight: '1.1',
    fontSize: 'clamp(2rem, 5vw, 4rem)',
  }}
  className="mb-8"
>
  PLAY HARDER.
</h1>

        <p
          style={{ color: '#2C1A0E', fontFamily: 'DM Sans, sans-serif' }}
          className="text-xl max-w-xl mb-10 opacity-60 mx-auto"
        >
          Elite basketball training for grades 1-12 in the Bay Area.
          Built to develop skills, confidence, and compete at the next level.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor" target="_blank" rel="noreferrer">
  <button
    style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
    className="px-10 py-4 text-lg font-bold tracking-wide rounded hover:opacity-90 transition"
  >
    Book a Session
  </button>
</a>
          <button
            style={{ border: '2px solid #2C1A0E', color: '#2C1A0E', backgroundColor: 'transparent', fontFamily: 'DM Sans, sans-serif' }}
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