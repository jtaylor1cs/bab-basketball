import { useEffect, useRef, useState } from 'react'
import { IconUsers, IconTrophy, IconCalendar, IconStopwatch } from './icons'

const stats = [
  { icon: IconUsers, value: 15, suffix: '+', label: 'Kids Trained', color: '#B94B35' },
  { icon: IconTrophy, value: 5, suffix: '+', label: 'Years Coaching', color: '#4A7FA5' },
  { icon: IconCalendar, value: 2, suffix: '', label: 'Training Days / Week', color: '#2D6A5A' },
  { icon: IconStopwatch, value: 50, suffix: ' min', label: 'Focused Sessions', color: '#C49A2D' },
]

function CountUp({ target, suffix, active }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1200
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return (
    <span className="stat-number">
      {value}
      {suffix}
    </span>
  )
}

function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ backgroundColor: '#F5EFE0' }} className="py-14 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center gap-2">
            <stat.icon size={38} style={{ color: stat.color }} />
            <p className="font-stat text-5xl" style={{ color: '#2C1A0E' }}>
              <CountUp target={stat.value} suffix={stat.suffix} active={active} />
            </p>
            <p style={{ color: '#2C1A0E' }} className="text-xs font-bold uppercase tracking-widest opacity-60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
