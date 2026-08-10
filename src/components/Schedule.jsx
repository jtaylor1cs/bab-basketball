import { IconCalendar, IconUsers, IconStopwatch, IconClipboard } from './icons'
import Reveal from './Reveal'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor'

const days = [
  { day: 'Tuesday', color: '#B94B35' },
  { day: 'Thursday', color: '#4A7FA5' },
]

const details = [
  { icon: IconClipboard, label: 'Location', value: "King's Academy, Sunnyvale" },
  { icon: IconStopwatch, label: 'Session Length', value: '50 minutes' },
  { icon: IconUsers, label: 'Group Size', value: '2-6 players max' },
  { icon: IconCalendar, label: 'Session Time', value: 'Evenings' },
]

function Schedule() {
  return (
    <section id="schedule" style={{ backgroundColor: '#EDE8D5' }} className="py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
              When We Train
            </p>
            <h2 className="font-display uppercase text-5xl md:text-6xl mb-4" style={{ color: '#2C1A0E' }}>
              Weekly Schedule
            </h2>
            <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50">
              Training runs twice a week — small group and 1-on-1 sessions both available.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {days.map((item, i) => (
            <Reveal key={item.day} delay={i * 120}>
              <div
                className="hard-shadow rounded-xl overflow-hidden h-full"
                style={{ backgroundColor: '#F5EFE0' }}
              >
                <div style={{ backgroundColor: item.color, borderBottom: '3px solid #2C1A0E' }} className="px-6 py-5">
                  <p style={{ color: '#EDE8D5' }} className="text-xs font-bold tracking-widest uppercase mb-1 opacity-80">
                    Evening Sessions
                  </p>
                  <h3 className="font-display uppercase text-3xl" style={{ color: '#EDE8D5' }}>
                    {item.day}
                  </h3>
                </div>
                <div className="px-6 py-5 flex flex-col gap-3">
                  <div style={{ border: '2px solid #2C1A0E', borderRadius: '8px' }} className="flex justify-between items-center px-4 py-3">
                    <p style={{ color: '#2C1A0E' }} className="font-bold text-sm">Small Group</p>
                    <p className="font-stat text-xl" style={{ color: item.color }}>$70</p>
                  </div>
                  <div style={{ border: '2px solid #2C1A0E', borderRadius: '8px' }} className="flex justify-between items-center px-4 py-3">
                    <p style={{ color: '#2C1A0E' }} className="font-bold text-sm">1-on-1</p>
                    <p className="font-stat text-xl" style={{ color: item.color }}>$90</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div
            style={{ backgroundColor: '#F5EFE0', border: '2.5px solid #2C1A0E', borderRadius: '12px' }}
            className="px-6 md:px-8 py-6 grid sm:grid-cols-2 gap-4"
          >
            {details.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div
                  className="rounded-full flex items-center justify-center shrink-0"
                  style={{ width: '44px', height: '44px', backgroundColor: '#EDE8D5', border: '2px solid #2C1A0E', color: '#B94B35' }}
                >
                  <item.icon size={22} />
                </div>
                <div>
                  <p style={{ color: '#2C1A0E' }} className="text-xs opacity-50 font-bold tracking-wide uppercase">{item.label}</p>
                  <p style={{ color: '#2C1A0E' }} className="font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="text-center mt-10">
          <a href={FORM_URL} target="_blank" rel="noreferrer">
            <button
              style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
              className="px-10 py-4 text-lg font-bold rounded tracking-wide hover:opacity-90 transition hard-shadow-sm"
            >
              Reserve Your Spot
            </button>
          </a>
          <p style={{ color: '#2C1A0E' }} className="text-sm opacity-40 mt-4">
            Other days may be available on inquiry — reach out to ask.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Schedule
