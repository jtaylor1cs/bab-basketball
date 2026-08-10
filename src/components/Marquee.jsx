import { IconBasketball } from './icons'

const items = [
  'TUESDAYS & THURSDAYS',
  'SMALL GROUP $70',
  '1-ON-1 $90',
  '20+ KIDS TRAINED',
  "KING'S ACADEMY · SUNNYVALE",
]

function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      style={{ backgroundColor: '#2C1A0E', borderTop: '3px solid #C49A2D', borderBottom: '3px solid #C49A2D' }}
      className="marquee-viewport overflow-hidden py-3"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6 shrink-0">
            <span
              style={{ color: '#EDE8D5', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}
              className="text-xl md:text-2xl whitespace-nowrap"
            >
              {item}
            </span>
            <IconBasketball size={20} style={{ color: '#B94B35' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
