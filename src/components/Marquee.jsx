import { IconBasketball, IconSwish, IconStar, IconHoop, IconSneaker } from './icons'

const items = [
  { text: 'TUESDAYS & THURSDAYS', icon: IconBasketball },
  { text: 'SMALL GROUP $70', icon: IconSwish },
  { text: '1-ON-1 $90', icon: IconHoop },
  { text: '20+ KIDS TRAINED', icon: IconStar },
  { text: "KING'S ACADEMY · SUNNYVALE", icon: IconSneaker },
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
              {item.text}
            </span>
            <item.icon size={20} style={{ color: '#B94B35' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
