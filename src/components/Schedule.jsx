function Schedule() {
  return (
    <section id="schedule" style={{ backgroundColor: '#EDE8D5' }} className="py-32">
      <div className="max-w-3xl mx-auto px-8">

        <div className="text-center mb-12">
          <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
            When We Train
          </p>
          <h2 style={{ color: '#2C1A0E' }} className="text-5xl font-bold mb-4">
            Summer Schedule
          </h2>
          <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50">
            Summer sessions begin May 19th. No sessions the week of June 2nd.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#F5EFE0',
            border: '2px solid #2C1A0E',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{ backgroundColor: '#B94B35', borderBottom: '2px solid #2C1A0E' }}
            className="px-8 py-5 flex justify-between items-center"
          >
            <div>
              <p style={{ color: '#EDE8D5' }} className="text-xs font-bold tracking-widest uppercase mb-1">
                Group Training
              </p>
              <h3 style={{ color: '#EDE8D5' }} className="text-2xl font-bold">
                Tuesdays — Evenings
              </h3>
            </div>
          </div>

          <div className="px-8 py-5 flex flex-col gap-3" style={{ borderBottom: '2px solid #2C1A0E' }}>
            {[
              { title: 'Junior Ballers', grades: 'Grades 1-5' },
              { title: 'Varsity Prep', grades: 'Grades 6-12' },
            ].map((item) => (
              <div
                key={item.title}
                style={{ border: '2px solid #2C1A0E', borderRadius: '8px' }}
                className="flex justify-between items-center px-5 py-3"
              >
                <p style={{ color: '#2C1A0E' }} className="font-bold">{item.title}</p>
                <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50">{item.grades}</p>
              </div>
            ))}
          </div>

          <div
            style={{ backgroundColor: '#4A7FA5', borderBottom: '2px solid #2C1A0E' }}
            className="px-8 py-5"
          >
            <p style={{ color: '#EDE8D5' }} className="text-xs font-bold tracking-widest uppercase mb-1">
              Private Training
            </p>
            <h3 style={{ color: '#EDE8D5' }} className="text-2xl font-bold">
              Thursdays — Evenings
            </h3>
          </div>

          <div className="px-8 py-5" style={{ borderBottom: '2px solid #2C1A0E' }}>
            <div
              style={{ border: '2px solid #2C1A0E', borderRadius: '8px' }}
              className="flex justify-between items-center px-5 py-3"
            >
              <p style={{ color: '#2C1A0E' }} className="font-bold">1-on-1 Sessions</p>
              <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50">Grades 1-12 · 3 slots per evening</p>
            </div>
          </div>

          <div className="px-8 py-5">
  {[
    { label: 'Location', value: "King's Academy, Sunnyvale" },
    { label: 'Session Length', value: '50 minutes' },
    { label: 'Season', value: 'May 19 - Mid August' },
    { label: 'Break Week', value: 'Week of June 2nd' },
    { label: 'Group Size', value: '4-8 players max' },
  ].map((item, i, arr) => (
    <div
      key={item.label}
      style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(44,26,14,0.15)' : 'none' }}
      className="flex justify-between items-center py-3"
    >
      <p style={{ color: '#2C1A0E' }} className="text-sm opacity-50 font-bold tracking-wide uppercase">{item.label}</p>
      <p style={{ color: '#2C1A0E' }} className="font-bold">{item.value}</p>
    </div>
  ))}
  <p style={{ color: '#2C1A0E' }} className="text-s opacity-40 mt-3">
    * Other days may be available on inquiry
  </p>
</div>
        </div>

        <div className="text-center mt-10">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor" target="_blank" rel="noreferrer">
  <button
    style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
    className="px-10 py-4 text-lg font-bold rounded tracking-wide hover:opacity-90 transition"
  >
    Reserve Your Spot
  </button>
</a>
        </div>

      </div>
    </section>
  )
}

export default Schedule