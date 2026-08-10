import { IconBasketball, IconChevronRow, IconStar, IconSwish } from './icons'
import PhotoTile from './PhotoTile'
import Reveal from './Reveal'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor'

const chips = [
  { label: 'Tue & Thu Sessions', color: '#2D6A5A' },
  { label: '$70 Group · $90 1-on-1', color: '#B94B35' },
  { label: '20+ Kids Trained', color: '#C49A2D' },
]

// Drop action shots into public/gallery/ named hero-1.jpg ... hero-4.jpg
// and they'll swap in here automatically — no code changes needed.
const heroPhotos = [
  { src: '/gallery/hero-1.jpg', color: '#B94B35', rotate: '-3deg', style: { position: 'absolute', width: '58%', height: '64%', top: '0%', left: '2%', zIndex: 2 } },
  { src: '/gallery/hero-2.jpg', color: '#4A7FA5', rotate: '4deg', style: { position: 'absolute', width: '46%', height: '48%', top: '2%', right: '0%', zIndex: 1 } },
  { src: '/gallery/hero-3.jpg', color: '#2D6A5A', rotate: '3deg', style: { position: 'absolute', width: '50%', height: '50%', bottom: '0%', left: '0%', zIndex: 3 } },
  { src: '/gallery/hero-4.jpg', color: '#C49A2D', rotate: '-2deg', style: { position: 'absolute', width: '44%', height: '44%', bottom: '3%', right: '2%', zIndex: 4 } },
]

function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: '#F5EFE0', minHeight: '92vh' }}
      className="flex flex-col items-center justify-center text-center px-6 md:px-8 relative overflow-hidden pt-10 pb-16"
    >
      <div className="halftone absolute inset-0 pointer-events-none" style={{ color: '#2C1A0E', opacity: 0.06, zIndex: 0 }} />

      <IconBasketball
        size={90}
        className="absolute pointer-events-none hidden md:block float-anim"
        style={{ color: '#B94B35', opacity: 0.18, top: '8%', left: '4%', '--float-rot': '-8deg' }}
      />
      <IconStar
        size={60}
        className="absolute pointer-events-none hidden md:block float-anim"
        style={{ color: '#4A7FA5', opacity: 0.25, bottom: '18%', left: '10%', animationDelay: '1s' }}
      />
      <IconSwish
        size={110}
        className="absolute pointer-events-none hidden lg:block float-anim"
        style={{ color: '#C49A2D', opacity: 0.3, top: '14%', right: '30%', animationDelay: '2s' }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center" style={{ zIndex: 10 }}>
        <div className="text-left flex flex-col items-start">
          <p
            style={{
              color: '#EDE8D5',
              backgroundColor: '#2D6A5A',
              letterSpacing: '0.2em',
              fontFamily: 'Anton, sans-serif',
            }}
            className="uppercase px-5 py-2.5 rounded mb-6 inline-block text-sm md:text-base hard-shadow-sm"
          >
            Bay Area Basketball Training
          </p>

          <h1
            className="font-display uppercase mb-1"
            style={{ color: '#2C1A0E', lineHeight: '0.95', fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}
          >
            Train Hard.
          </h1>
          <h1
            className="font-display uppercase mb-8"
            style={{ lineHeight: '0.95', fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}
          >
            <span className="ink-highlight" style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}>
              Play Harder.
            </span>
          </h1>

          <p
            style={{ color: '#2C1A0E', fontFamily: 'DM Sans, sans-serif' }}
            className="text-lg md:text-xl max-w-lg mb-8 opacity-70"
          >
            Elite basketball training for boys and girls grades 1-12 in the Bay Area,
            led by Coach Jon Taylor. Built to develop skills, confidence, and compete
            at the next level.
          </p>

          <div className="flex flex-wrap gap-3 mb-9">
            {chips.map((chip) => (
              <span
                key={chip.label}
                style={{ border: `2.5px solid ${chip.color}`, color: '#2C1A0E' }}
                className="px-4 py-1.5 rounded-full text-sm font-bold bg-white/40"
              >
                {chip.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={FORM_URL} target="_blank" rel="noreferrer">
              <button
                style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
                className="px-10 py-4 text-lg font-bold tracking-wide rounded hover:opacity-90 hover:-translate-y-0.5 transition hard-shadow-sm"
              >
                Book a Session
              </button>
            </a>
            <button
              style={{ border: '3px solid #2C1A0E', color: '#2C1A0E', backgroundColor: 'transparent', fontFamily: 'DM Sans, sans-serif' }}
              className="px-10 py-4 text-lg font-bold tracking-wide rounded hover:bg-[#2C1A0E] hover:text-[#EDE8D5] transition"
              onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
            >
              See Programs
            </button>
          </div>
        </div>

        <Reveal
          delay={150}
          className="relative w-full md:ml-auto"
          style={{ height: 'clamp(440px, 54vw, 620px)', maxWidth: '600px' }}
        >
          {heroPhotos.map((photo) => (
            <PhotoTile
              key={photo.src}
              src={photo.src}
              color={photo.color}
              rotate={photo.rotate}
              alt="Kid training in action with BAB Training"
              style={photo.style}
            />
          ))}
          <IconBasketball
            size={44}
            className="absolute float-anim pointer-events-none"
            style={{ color: '#B94B35', top: '38%', left: '-6%', zIndex: 5, '--float-rot': '10deg' }}
          />
        </Reveal>
      </div>

      <IconChevronRow
        className="absolute left-0 right-0 pointer-events-none"
        style={{ bottom: 0, color: '#2C1A0E', opacity: 0.08 }}
        count={30}
      />
    </section>
  )
}

export default Hero
