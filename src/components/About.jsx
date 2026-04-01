import esfaceWorkout from '../assets/Esfaceworkout.jpg'
import ucMerced from '../assets/UCMercedFreeThrow.jpg'
import kingsDribbling from "../assets/King'sDribbling.PNG"
import sectionChamp from '../assets/SectionChampionship.PNG'

function About() {
  return (
    <section id="about" style={{ backgroundColor: '#EDE8D5' }} >
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-12 items-start py-32">

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
              The Coach
            </p>
            <h2 style={{ color: '#2C1A0E' }} className="text-4xl font-bold mb-6">
              Meet Coach Jon
            </h2>
          </div>

          <p style={{ color: '#2C1A0E' }} className="leading-relaxed text-lg opacity-80">
          I'm Coach Jon — 5 years of coaching experience, a commissioner-level camp coach at Team Esface, and a current captain at UC Merced. I've trained hundreds of young players and I know how to meet kids where they are and push them to the next level.

          </p>

          <p style={{ color: '#2C1A0E' }} className="leading-relaxed text-lg opacity-80">
          As a player, I grew up right here in the Bay Area. At King's Academy I led the program to its first section championship and finished as the all-time leader in points and triple doubles. Now I start at point guard for UC Merced, leading the team in assists.

          </p>

          <p style={{ color: '#2C1A0E' }} className="leading-relaxed text-lg opacity-80">
            I started BAB Training because I genuinely love this game and
            want to pass that on. Great coaches changed my path and I want
            to be able to make an impact for the next generation of hoopers.
          </p>

          <button
  style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
  className="py-3 px-8 font-bold rounded tracking-wide hover:opacity-90 transition w-fit"
  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
>
  Start Training
</button>
        </div>

        <div className="flex-1 relative hidden md:block" style={{ height: '520px' }}>
  <img
    src={esfaceWorkout}
    alt="Coach Jon training"
    className="absolute object-cover object-top rounded-md"
    style={{
      width: '58%',
      height: '340px',
      top: '0px',
      left: '0px',
      transform: 'rotate(-2deg)',
      zIndex: 2,
      boxShadow: '4px 4px 16px rgba(0,0,0,0.18)',
    }}
  />
  <img
    src={kingsDribbling}
    alt="Kings Academy"
    className="absolute object-cover object-top rounded-md"
    style={{
      width: '50%',
      height: '300px',
      top: '20px',
      right: '0px',
      transform: 'rotate(2.5deg)',
      zIndex: 1,
      boxShadow: '4px 4px 16px rgba(0,0,0,0.18)',
    }}
  />
  <img
    src={ucMerced}
    alt="UC Merced"
    className="absolute object-cover rounded-md"
    style={{
      width: '48%',
      height: '240px',
      bottom: '0px',
      left: '10px',
      transform: 'rotate(1.5deg)',
      zIndex: 3,
      boxShadow: '4px 4px 16px rgba(0,0,0,0.18)',
    }}
  />
  <img
    src={sectionChamp}
    alt="Section Championship"
    className="absolute object-cover object-top rounded-md"
    style={{
      width: '50%',
      height: '220px',
      bottom: '10px',
      right: '0px',
      transform: 'rotate(-1.5deg)',
      zIndex: 4,
      boxShadow: '4px 4px 16px rgba(0,0,0,0.18)',
    }}
  />
</div>

<div className="flex-1 grid grid-cols-2 gap-3 md:hidden">
  <img src={esfaceWorkout} alt="Coach Jon training" className="w-full object-cover object-top rounded-md" style={{ height: '180px' }} />
  <img src={kingsDribbling} alt="Kings Academy" className="w-full object-cover object-top rounded-md" style={{ height: '180px' }} />
  <img src={ucMerced} alt="UC Merced" className="w-full object-cover rounded-md" style={{ height: '180px' }} />
  <img src={sectionChamp} alt="Section Championship" className="w-full object-cover object-top rounded-md" style={{ height: '180px' }} />
</div>
      </div>
    </section>
  )
}

export default About