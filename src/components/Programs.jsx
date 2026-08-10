import groupImage from '../assets/YouthBasketballGroup.jpg'
import oneOnOneImage from '../assets/YouthBasketball1-on-1.jpg'
import { IconUsers, IconStopwatch, IconHome, IconCalendar } from './icons'
import FrameCorners from './FrameCorners'
import Reveal from './Reveal'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor'

const programs = [
  {
    id: 1,
    tag: '2-6 Players',
    icon: IconUsers,
    title: 'Small Group Sessions',
    schedule: 'Tuesdays & Thursdays · King’s Academy',
    description: 'Train alongside other players at your speed. Competitive drills, live reps, and coaching built for small groups so everyone still gets real attention.',
    price: '$70',
    unit: '/ player',
    accentColor: '#B94B35',
    image: groupImage,
    imageAlt: 'Youth basketball small group training',
  },
  {
    id: 2,
    tag: 'Private Coaching',
    icon: IconStopwatch,
    title: '1-on-1 Sessions',
    schedule: 'Tuesdays & Thursdays · King’s Academy',
    description: 'Fully personalized training — every drill, correction, and rep built around you. The fastest way to sharpen your game and fix what’s holding it back.',
    price: '$90',
    unit: '/ session',
    accentColor: '#4A7FA5',
    image: oneOnOneImage,
    imageAlt: 'One on one basketball training',
  },
]

function Programs() {
  return (
    <section id="programs" style={{ backgroundColor: '#F5EFE0' }} className="py-28">
      <Reveal>
        <div className="text-center mb-6 px-8">
          <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display uppercase text-5xl md:text-6xl mb-4" style={{ color: '#2C1A0E' }}>
            Training Options
          </h2>
          <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50 max-w-xl mx-auto mb-2">
            Every session is led by an active college basketball player with 5+ years of coaching experience.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-8 px-6 md:px-8 max-w-6xl mx-auto mt-14">
        {programs.map((program, index) => (
          <Reveal key={program.id} delay={index * 120}>
            <div
              style={{
                backgroundColor: '#EDE8D5',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
              className={`hard-shadow flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 relative" style={{ minHeight: '380px' }}>
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(44,26,14,0) 60%, rgba(44,26,14,0.55) 100%)' }} />
                <FrameCorners color="#EDE8D5" />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: program.accentColor,
                    color: '#EDE8D5',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                  className="hard-shadow-sm"
                >
                  {program.tag}
                </div>
                <div
                  className="absolute rounded-full flex items-center justify-center hard-shadow-sm"
                  style={{ bottom: '16px', right: '16px', width: '54px', height: '54px', backgroundColor: '#EDE8D5', color: program.accentColor }}
                >
                  <program.icon size={30} />
                </div>
              </div>

              <div
                style={{ backgroundColor: '#EDE8D5' }}
                className="flex-1 flex flex-col justify-center gap-5 px-6 py-8 md:px-10 md:py-10"
              >
                <div>
                  <p style={{ color: program.accentColor }} className="text-sm font-bold tracking-widest uppercase mb-1">
                    {program.schedule}
                  </p>
                  <h3 className="font-display uppercase text-3xl md:text-4xl" style={{ color: '#2C1A0E' }}>
                    {program.title}
                  </h3>
                </div>

                <p style={{ color: '#2C1A0E' }} className="opacity-70 leading-relaxed">
                  {program.description}
                </p>

                <div
                  style={{ border: '2.5px solid #2C1A0E', borderRadius: '8px' }}
                  className="flex justify-between items-center px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <program.icon size={26} style={{ color: program.accentColor }} />
                    <p style={{ color: '#2C1A0E' }} className="font-bold">{program.title}</p>
                  </div>
                  <p style={{ color: program.accentColor }} className="text-2xl font-stat">
                    {program.price}<span className="text-sm opacity-60">{program.unit}</span>
                  </p>
                </div>

                <a href={FORM_URL} target="_blank" rel="noreferrer">
                  <button
                    style={{ backgroundColor: program.accentColor, color: '#EDE8D5' }}
                    className="py-4 px-8 font-bold rounded tracking-wide hover:opacity-90 transition w-fit hard-shadow-sm"
                  >
                    Reserve Your Spot
                  </button>
                </a>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={240}>
          <div
            style={{ backgroundColor: '#2C1A0E', borderRadius: '14px' }}
            className="hard-shadow relative overflow-hidden flex flex-col md:flex-row items-center gap-8 px-6 md:px-10 py-10"
          >
            <div className="halftone absolute inset-0 pointer-events-none" style={{ color: '#EDE8D5', opacity: 0.05 }} />
            <div
              className="rounded-full flex items-center justify-center shrink-0 hard-shadow-sm relative"
              style={{ width: '84px', height: '84px', backgroundColor: '#C49A2D', color: '#2C1A0E' }}
            >
              <IconHome size={44} />
            </div>
            <div className="flex-1 relative text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <p style={{ color: '#C49A2D' }} className="text-sm font-bold tracking-widest uppercase">
                  We Come To You
                </p>
              </div>
              <h3 className="font-display uppercase text-3xl md:text-4xl mb-2" style={{ color: '#EDE8D5' }}>
                At-Home Sessions
              </h3>
              <p style={{ color: '#EDE8D5' }} className="opacity-70 leading-relaxed max-w-xl">
                Can&apos;t make it to King&apos;s Academy? I&apos;ll travel to you for a private session — any day of
                the week, wherever you&apos;ve got a hoop. Message to check availability and rates for your location.
              </p>
              <div className="flex items-center gap-2 justify-center md:justify-start mt-3">
                <IconCalendar size={18} style={{ color: '#C49A2D' }} />
                <p style={{ color: '#C49A2D' }} className="text-sm font-bold uppercase tracking-widest">
                  Any Day of the Week
                </p>
              </div>
            </div>
            <a href={FORM_URL} target="_blank" rel="noreferrer" className="relative shrink-0">
              <button
                style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
                className="py-4 px-8 font-bold rounded tracking-wide hover:opacity-90 transition hard-shadow-sm whitespace-nowrap"
              >
                Ask About At-Home
              </button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Programs
