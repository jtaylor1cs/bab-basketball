function Schedule() {
    return (
      <section id="schedule" style={{ backgroundColor: '#EDE8D5' }} className="py-32">
        <div className="max-w-6xl mx-auto px-8">
  
          <div className="text-center mb-16">
            <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
              When We Train
            </p>
            <h2 style={{ color: '#2C1A0E' }} className="text-5xl font-bold mb-4">
              Summer Schedule
            </h2>
            <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50 max-w-xl mx-auto">
              Sessions begin the week of May 17th. No sessions the week of June 2nd.
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row gap-6">
  
            <div
              style={{
                flex: 1,
                backgroundColor: '#F5EFE0',
                border: '2px solid #2C1A0E',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{ backgroundColor: '#B94B35' }}
                className="px-8 py-5"
              >
                <p style={{ color: '#EDE8D5' }} className="text-xs font-bold tracking-widest uppercase mb-1">
                  Group Training
                </p>
                <h3 style={{ color: '#EDE8D5' }} className="text-2xl font-bold">
                  Tuesday Evenings
                </h3>
              </div>
  
              <div className="px-8 py-6 flex flex-col gap-4">
                <div
                  style={{ borderBottom: '1px solid #2C1A0E', paddingBottom: '16px' }}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p style={{ color: '#2C1A0E' }} className="font-bold text-lg">Junior Ballers</p>
                    <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50">Grades 1-5</p>
                  </div>
                  <div style={{ backgroundColor: '#EDE8D5', border: '2px solid #2C1A0E', borderRadius: '8px' }} className="px-4 py-2 text-right">
                    <p style={{ color: '#2C1A0E' }} className="font-bold">5:00 - 5:50 PM</p>
                  </div>
                </div>
  
                <div className="flex justify-between items-center">
                  <div>
                    <p style={{ color: '#2C1A0E' }} className="font-bold text-lg">Varsity Prep</p>
                    <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50">Grades 6-12</p>
                  </div>
                  <div style={{ backgroundColor: '#EDE8D5', border: '2px solid #2C1A0E', borderRadius: '8px' }} className="px-4 py-2 text-right">
                    <p style={{ color: '#2C1A0E' }} className="font-bold">6:00 - 6:50 PM</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div
              style={{
                flex: 1,
                backgroundColor: '#F5EFE0',
                border: '2px solid #2C1A0E',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{ backgroundColor: '#4A7FA5' }}
                className="px-8 py-5"
              >
                <p style={{ color: '#EDE8D5' }} className="text-xs font-bold tracking-widest uppercase mb-1">
                  Private Training
                </p>
                <h3 style={{ color: '#EDE8D5' }} className="text-2xl font-bold">
                  Thursday Evenings
                </h3>
              </div>
  
              <div className="px-8 py-6 flex flex-col gap-4">
                <p style={{ color: '#2C1A0E' }} className="font-bold text-lg">1-on-1 Training</p>
                <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50 -mt-3">Grades 1-12 - Available slots:</p>
  
                {['5:00 PM', '6:00 PM', '7:00 PM'].map((time) => (
                  <div
                    key={time}
                    style={{ border: '2px solid #2C1A0E', borderRadius: '8px' }}
                    className="flex justify-between items-center px-5 py-3"
                  >
                    <p style={{ color: '#2C1A0E' }} className="font-bold">{time}</p>
                    <span
                      style={{
                        backgroundColor: '#2D6A5A',
                        color: '#EDE8D5',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        letterSpacing: '0.1em',
                      }}
                    >
                      AVAILABLE
                    </span>
                  </div>
                ))}
              </div>
            </div>
  
            <div
              style={{
                flex: 1,
                backgroundColor: '#F5EFE0',
                border: '2px solid #2C1A0E',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{ backgroundColor: '#C49A2D' }}
                className="px-8 py-5"
              >
                <p style={{ color: '#EDE8D5' }} className="text-xs font-bold tracking-widest uppercase mb-1">
                  Good to Know
                </p>
                <h3 style={{ color: '#EDE8D5' }} className="text-2xl font-bold">
                  Key Details
                </h3>
              </div>
  
              <div className="px-8 py-6 flex flex-col gap-5">
                {[
                  { label: 'Location', value: 'Sunnyvale, CA' },
                  { label: 'Session Length', value: '50 minutes' },
                  { label: 'Season Start', value: 'Week of May 17th' },
                  { label: 'Break Week', value: 'Week of June 2nd' },
                  { label: 'Group Size', value: '4-8 players max' },
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: '1px solid rgba(44,26,14,0.15)' }} className="flex justify-between items-center pb-4">
                    <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50 font-bold tracking-wide uppercase">{item.label}</p>
                    <p style={{ color: '#2C1A0E' }} className="font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
  
          <div className="text-center mt-12">
            <button
              style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
              className="px-10 py-4 text-lg font-bold rounded tracking-wide hover:opacity-90 transition"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Reserve Your Spot
            </button>
          </div>
  
        </div>
      </section>
    )
  }
  
  export default Schedule