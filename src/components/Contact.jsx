function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#F5EFE0' }}>
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-16 py-32">

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 style={{ color: '#2C1A0E' }} className="text-4xl font-bold mb-2">
              Ready to Level Up?
            </h2>
            <p style={{ color: '#2C1A0E' }} className="text-lg opacity-60">
              Reach out to ask about availability, programs, or anything else.
              Sessions are filling up for summer!
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            
            <a  href="mailto:jonbabtraining@gmail.com"
              className="flex items-center gap-4 hover:opacity-70 transition"
            >
              <div
                style={{ backgroundColor: '#B94B35', minWidth: '44px', height: '44px' }}
                className="rounded-full flex items-center justify-center text-white font-bold text-sm"
              >
                EM
              </div>
              <div>
                <p style={{ color: '#2C1A0E' }} className="font-bold">Email</p>
                <p style={{ color: '#2C1A0E' }} className="opacity-60 text-sm">jonbabtraining@gmail.com</p>
              </div>
            </a>

            
              <a href="tel:6504059522"
              className="flex items-center gap-4 hover:opacity-70 transition"
            >
              <div
                style={{ backgroundColor: '#2D6A5A', minWidth: '44px', height: '44px' }}
                className="rounded-full flex items-center justify-center text-white font-bold text-sm"
              >
                PH
              </div>
              <div>
                <p style={{ color: '#2C1A0E' }} className="font-bold">Phone / Text</p>
                <p style={{ color: '#2C1A0E' }} className="opacity-60 text-sm">(650) 405-9522</p>
              </div>
            </a>

            
            <a  href="https://instagram.com/babtraining"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:opacity-70 transition"
            >
              <div
                style={{ backgroundColor: '#C49A2D', minWidth: '44px', height: '44px' }}
                className="rounded-full flex items-center justify-center text-white font-bold text-sm"
              >
                IG
              </div>
              <div>
                <p style={{ color: '#2C1A0E' }} className="font-bold">Instagram</p>
                <p style={{ color: '#2C1A0E' }} className="opacity-60 text-sm">@babtraining</p>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-1">
          <form
            action="https://formspree.io/f/xnjodrwy"
            method="POST"
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label style={{ color: '#2C1A0E' }} className="text-sm font-bold tracking-wide">
                Parent / Guardian Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Smith"
                style={{
                  backgroundColor: '#EDE8D5',
                  border: '2px solid #2C1A0E',
                  color: '#2C1A0E',
                  borderRadius: '6px',
                  padding: '12px 16px',
                  outline: 'none',
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label style={{ color: '#2C1A0E' }} className="text-sm font-bold tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                style={{
                  backgroundColor: '#EDE8D5',
                  border: '2px solid #2C1A0E',
                  color: '#2C1A0E',
                  borderRadius: '6px',
                  padding: '12px 16px',
                  outline: 'none',
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label style={{ color: '#2C1A0E' }} className="text-sm font-bold tracking-wide">
                Program Interest
              </label>
              <select
                name="program"
                required
                style={{
                  backgroundColor: '#EDE8D5',
                  border: '2px solid #2C1A0E',
                  color: '#2C1A0E',
                  borderRadius: '6px',
                  padding: '12px 16px',
                  outline: 'none',
                }}
              >
                <option value="">Select a program</option>
                <option value="group">Group Sessions</option>
                <option value="1on1">1-on-1 Training</option>
                <option value="both">Not Sure Yet</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label style={{ color: '#2C1A0E' }} className="text-sm font-bold tracking-wide">
                Tell Me About Your Athlete
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Age, grade, experience level, goals..."
                style={{
                  backgroundColor: '#EDE8D5',
                  border: '2px solid #2C1A0E',
                  color: '#2C1A0E',
                  borderRadius: '6px',
                  padding: '12px 16px',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
              className="py-4 font-bold text-lg rounded tracking-wide hover:opacity-90 transition mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact