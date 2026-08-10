import { IconBasketball, IconChevronRow, IconStar, IconSwish, IconUsers } from './icons'
import FrameCorners from './FrameCorners'
import PhotoTile from './PhotoTile'
import Reveal from './Reveal'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor'

const chips = [
  { label: 'Tue & Thu Sessions', color: '#2D6A5A' },
  { label: '$70 Group · $90 1-on-1', color: '#B94B35' },
  { label: '20+ Kids Trained', color: '#C49A2D' },
]

// Drop action shots into public/gallery/ named hero-1.jpg, hero-2.jpg, hero-3.jpg
// and they'll swap in here automatically — no code changes needed.
const heroPhotos = [
  { src: '/gallery/hero-1.jpg', color: '#B94B35' },
  { src: '/gallery/hero-2.jpg', color: '#4A7FA5' },
  { src: '/gallery/hero-3.jpg', color: '#2D6A5A' },
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

        <Reveal delay={150}>
          <div className="relative mx-auto" style={{ maxWidth: '420px' }}>
            <div
              className="absolute"
              style={{
                inset: '18px -18px -18px 18px',
                backgroundColor: '#C49A2D',
                borderRadius: '10px',
                transform: 'rotate(3deg)',
                zIndex: 0,
              }}
            />
            <div
              className="relative hard-border"
              style={{
                backgroundColor: '#2C1A0E',
                borderRadius: '10px',
                padding: '14px',
                transform: 'rotate(-2deg)',
                zIndex: 1,
              }}
            >
              <div className="relative">
                <div
                  className="grid gap-2.5"
                  style={{ gridTemplateColumns: '1.15fr 1fr', gridTemplateRows: '1fr 1fr', height: 'clamp(280px, 40vw, 380px)' }}
                >
                  <PhotoTile
                    src={heroPhotos[0].src}
                    color={heroPhotos[0].color}
                    alt="Kid training with BAB Training"
                    style={{ gridRow: '1 / span 2' }}
                  />
                  <PhotoTile src={heroPhotos[1].src} color={heroPhotos[1].color} alt="Kid training with BAB Training" />
                  <PhotoTile src={heroPhotos[2].src} color={heroPhotos[2].color} alt="Kid training with BAB Training" />
                </div>
                <FrameCorners color="#EDE8D5" />
              </div>

              <div className="flex items-center gap-3 mt-3.5 px-1">
                <IconBasketball size={26} style={{ color: '#C49A2D' }} />
                <div className="text-left">
                  <p className="font-display uppercase" style={{ color: '#EDE8D5', fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', lineHeight: 1 }}>
                    Kids In Training
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: '#C49A2D' }}>
                    Real Sessions · Real Reps
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute hard-shadow-sm flex items-center gap-2 px-4 py-2 rounded"
              style={{ backgroundColor: '#4A7FA5', color: '#EDE8D5', top: '-16px', right: '-4px', transform: 'rotate(-4deg)', zIndex: 2 }}
            >
              <IconUsers size={18} />
              <span className="font-stat text-lg">20+ KIDS TRAINED</span>
            </div>
          </div>
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
