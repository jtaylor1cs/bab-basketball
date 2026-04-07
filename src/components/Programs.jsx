import groupImage from '../assets/YouthBasketballGroup.jpg'
import oneOnOneImage from '../assets/YouthBasketball1-on-1.jpg'

const programs = [
  {
    id: 1,
    tag: 'Ages 6-10',
    title: 'Junior Ballers',
    grades: 'Grades 1-5',
    description: 'Building the foundation the right way. We focus on fundamentals, coordination, ball handling, footwork, and keeping the game fun with competitive drills and games.',
    options: [
      { type: 'Group Sessions', detail: '4-8 players', price: '$50 / player' },
      { type: '1-on-1 Training', detail: 'Private session', price: '$80 / session' },
    ],
    bundle: { label: '8-Session Package', savings: 'SAVE 15%', groupPrice: '$340', oneOnOnePrice: '$544' },
    accentColor: '#B94B35',
    image: groupImage,
    imageAlt: 'Youth basketball group training',
  },
  {
    id: 2,
    tag: 'Ages 11-18',
    title: 'Varsity Prep',
    grades: 'Grades 6-12',
    description: 'Training built for players who want to compete at the next level. Advanced ball handling, shooting mechanics, game IQ, and position-specific work at game speed.',
    options: [
      { type: 'Group Sessions', detail: '4-8 players', price: '$50 / player' },
      { type: '1-on-1 Training', detail: 'Private session', price: '$80 / session' },
    ],
    bundle: { label: '8-Session Package', savings: 'SAVE 15%', groupPrice: '$340', oneOnOnePrice: '$544' },
    accentColor: '#4A7FA5',
    image: oneOnOneImage,
    imageAlt: 'One on one basketball training',
  },
]

function Programs() {
  return (
    <section id="programs" style={{ backgroundColor: '#F5EFE0' }} className="py-32">

      <div className="text-center mb-6 px-8">
        <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
          What We Offer
        </p>
        <h2 style={{ color: '#2C1A0E' }} className="text-5xl font-bold mb-4">
          Training Programs
        </h2>
        <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50 max-w-xl mx-auto mb-4">
          Every session is led by an active college basketball player with 5+ years of coaching experience.
        </p>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#EDE8D5',
            border: '2px solid #2C1A0E',
            borderRadius: '999px',
            padding: '8px 20px',
            marginBottom: '12px',
          }}
        >
          {/* <span style={{ color: '#2C1A0E' }} className="text-sm font-bold">50 min sessions</span>
          <span style={{ color: '#2C1A0E', opacity: 0.3 }}>·</span>
          <span style={{ color: '#2C1A0E' }} className="text-sm font-bold">Evenings in Sunnyvale</span> */}
        </div>

        <p style={{ color: '#2C1A0E' }} className="text-xs opacity-40 max-w-lg mx-auto">
          Discounts cannot be combined. Early bird applies to first month only. Package pricing available anytime.
        </p>
      </div>

      <div className="flex flex-col gap-6 px-8 max-w-6xl mx-auto mt-12">
        {programs.map((program, index) => (
          <div
            key={program.id}
            style={{
              backgroundColor: '#EDE8D5',
              border: '2px solid #2C1A0E',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="flex-1 relative" style={{ minHeight: '420px' }}>
              <img
                src={program.image}
                alt={program.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
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
              >
                {program.tag}
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
                <h3 style={{ color: '#2C1A0E' }} className="text-4xl font-bold">
                  {program.title}
                </h3>
              </div>

              <p style={{ color: '#2C1A0E' }} className="opacity-70 leading-relaxed">
                {program.description}
              </p>

              <div className="flex flex-col gap-3">
                {program.options.map((option, i) => (
                  <div
                    key={i}
                    style={{ border: '2px solid #2C1A0E', borderRadius: '8px' }}
                    className="flex justify-between items-center px-5 py-3"
                  >
                    <div>
                      <p style={{ color: '#2C1A0E' }} className="font-bold">{option.type}</p>
                      <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50">{option.detail}</p>
                    </div>
                    <p style={{ color: program.accentColor }} className="text-lg font-bold">
                      {option.price}
                    </p>
                  </div>
                ))}

                <div
                  style={{
                    border: '2px dashed #C49A2D',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(196, 154, 45, 0.06)',
                  }}
                  className="px-5 py-3"
                >
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <p style={{ color: '#C49A2D' }} className="font-bold">{program.bundle.label}</p>
                      <span
                        style={{
                          backgroundColor: '#C49A2D',
                          color: '#EDE8D5',
                          fontSize: '10px',
                          fontWeight: 'bold',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {program.bundle.savings}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p style={{ color: '#2C1A0E' }} className="text-sm opacity-60">Group: {program.bundle.groupPrice} total</p>
                    <p style={{ color: '#2C1A0E' }} className="text-sm opacity-60">1-on-1: {program.bundle.oneOnOnePrice} total</p>
                  </div>
                </div>
              </div>

              <button
                style={{ backgroundColor: program.accentColor, color: '#EDE8D5' }}
                className="py-4 px-8 font-bold rounded tracking-wide hover:opacity-90 transition w-fit"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Reserve Your Spot
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs