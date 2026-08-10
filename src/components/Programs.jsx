import groupImage from '../assets/YouthBasketballGroup.jpg'
import oneOnOneImage from '../assets/YouthBasketball1-on-1.jpg'
import { IconBasketball, IconHoop, IconUsers, IconStopwatch } from './icons'
import FrameCorners from './FrameCorners'
import Reveal from './Reveal'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor'

const programs = [
  {
    id: 1,
    tag: 'Ages 6-10',
    icon: IconBasketball,
    title: 'Junior Ballers',
    grades: 'Grades 1-5',
    description: 'Building the foundation the right way. We focus on fundamentals, coordination, ball handling, footwork, and keeping the game fun with competitive drills and games.',
    accentColor: '#B94B35',
    image: groupImage,
    imageAlt: 'Youth basketball small group training',
  },
  {
    id: 2,
    tag: 'Ages 11-18',
    icon: IconHoop,
    title: 'Varsity Prep',
    grades: 'Grades 6-12',
    description: 'Training built for players who want to compete at the next level. Advanced ball handling, shooting mechanics, game IQ, and position-specific work at game speed.',
    accentColor: '#4A7FA5',
    image: oneOnOneImage,
    imageAlt: 'One on one basketball training',
  },
]

const sharedOptions = [
  { icon: IconUsers, type: 'Small Group Session', detail: '2-6 players', price: '$70', unit: '/ player' },
  { icon: IconStopwatch, type: '1-on-1 Session', detail: 'Private training', price: '$90', unit: '/ session' },
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
            Training Programs
          </h2>
          <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50 max-w-xl mx-auto mb-2">
            Every session is led by an active college basketball player with 5+ years of coaching experience.
          </p>
          <p style={{ color: '#2C1A0E' }} className="text-xs opacity-40 max-w-lg mx-auto">
            Sessions run Tuesdays &amp; Thursdays at King&apos;s Academy in Sunnyvale.
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
                    {program.grades}
                  </p>
                  <h3 className="font-display uppercase text-3xl md:text-4xl" style={{ color: '#2C1A0E' }}>
                    {program.title}
                  </h3>
                </div>

                <p style={{ color: '#2C1A0E' }} className="opacity-70 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex flex-col gap-3">
                  {sharedOptions.map((option) => (
                    <div
                      key={option.type}
                      style={{ border: '2.5px solid #2C1A0E', borderRadius: '8px' }}
                      className="flex justify-between items-center px-5 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <option.icon size={26} style={{ color: program.accentColor }} />
                        <div>
                          <p style={{ color: '#2C1A0E' }} className="font-bold">{option.type}</p>
                          <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50">{option.detail}</p>
                        </div>
                      </div>
                      <p style={{ color: program.accentColor }} className="text-2xl font-stat">
                        {option.price}<span className="text-sm opacity-60">{option.unit}</span>
                      </p>
                    </div>
                  ))}
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
      </div>
    </section>
  )
}

export default Programs
