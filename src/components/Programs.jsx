import groupImage from '../assets/YouthBasketballGroup.jpg'
import oneOnOneImage from '../assets/YouthBasketball1-on-1.jpg'

const programs = [
  {
    id: 1,
    title: 'Group Sessions',
    description:
      'Small group training capped at 10 players. High energy, competitive reps, and skill development in a team environment. Perfect for players who want to level up alongside their peers.',
    details: ['Max 10 players per session', 'Grades 1–12', 'Skill-based drills & competition'],
    accentColor: '#B94B35',
    image: groupImage,
    imageAlt: 'Youth basketball group training session',
  },
  {
    id: 2,
    title: '1-on-1 Training',
    description:
      'Private sessions built around you. Every rep, every drill, every minute is focused on your individual game. Ideal for players serious about reaching the next level.',
    details: ['Fully personalized program', 'Grades 1–12', 'Position-specific development'],
    accentColor: '#4A7FA5',
    image: oneOnOneImage,
    imageAlt: 'One on one basketball training session',
  },
]

function Programs() {
  return (
    <section id="programs" style={{ backgroundColor: '#F5EFE0'}} >

      <div className="text-center mb-20 px-8">
        <p
          style={{ color: '#2D6A5A' }}
          className="text-sm font-bold tracking-widest uppercase mb-3"
        >
          What We Offer
        </p>
        <h2 style={{ color: '#2C1A0E' }} className="text-5xl font-bold mb-4">
          Training Programs
        </h2>
        <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50 max-w-xl mx-auto">
          Sessions are priced competitively for private and group training —
          reach out to discuss availability and rates.
        </p>
      </div>

      <div className="flex flex-col gap-2 px-8 max-w-6xl mx-auto">
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
            <div className="flex-1 relative" style={{ minHeight: '480px' }}>
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
                {program.title}
              </div>
            </div>

            <div
              style={{ backgroundColor: '#EDE8D5' }}
              className="flex-1 flex flex-col justify-center gap-6 px-12 py-12"
            >
              <div
                style={{
                  width: '40px',
                  height: '8px',
                  backgroundColor: program.accentColor,
                  borderRadius: '2px',
                }}
              />
              <h3 style={{ color: '#2C1A0E' }} className="text-4xl font-bold">
                {program.title}
              </h3>
              <p style={{ color: '#2C1A0E' }} className="opacity-70 leading-relaxed text-lg">
                {program.description}
              </p>
              <ul className="flex flex-col gap-3">
                {program.details.map((detail, i) => (
                  <li
                    key={i}
                    style={{ color: '#2C1A0E' }}
                    className="flex items-center gap-3 text-sm font-bold tracking-wide"
                  >
                    <span style={{ color: program.accentColor }} className="text-lg">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <button
  style={{ backgroundColor: program.accentColor, color: '#EDE8D5' }}
  className="py-4 px-8 font-bold rounded tracking-wide hover:opacity-90 transition w-fit"
  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
>
  Request Info
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs