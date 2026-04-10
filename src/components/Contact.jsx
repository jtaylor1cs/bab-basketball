const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor"

function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#F5EFE0' }} className="py-32">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-16">

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 style={{ color: '#2C1A0E' }} className="text-4xl font-bold mb-2">
              Ready to Level Up?
            </h2>
            <p style={{ color: '#2C1A0E' }} className="text-lg opacity-60">
              Sign up below to reserve your spot. We'll confirm your schedule and send next steps within 24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            
              href="mailto:jonbabtraining@gmail.com"
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

            
              href="tel:6504059522"
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

            
              href="https://instagram.com/babtraining"
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

        <div className="flex-1 flex flex-col justify-center">
          <div
            style={{
              backgroundColor: '#EDE8D5',
              border: '2px solid #2C1A0E',
              borderRadius: '12px',
              padding: '40px',
            }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 style={{ color: '#2C1A0E' }} className="text-2xl font-bold mb-2">
                Sign Up Form
              </h3>
              <p style={{ color: '#2C1A0E' }} className="opacity-60 leading-relaxed">
                Our sign-up form covers player info, program selection, and liability waiver — all in one step.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                'Player info and grade level',
                'Program selection',
                'Liability waiver',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span style={{ color: '#B94B35', fontSize: '18px' }}>✓</span>
                  <p style={{ color: '#2C1A0E' }} className="font-bold">{item}</p>
                </li>
              ))}
            </ul>

            <a href={FORM_URL} target="_blank" rel="noreferrer">
              <button
                style={{ backgroundColor: '#B94B35', color: '#EDE8D5', width: '100%' }}
                className="py-5 text-xl font-bold rounded tracking-wide hover:opacity-90 transition"
              >
                Sign Up Now
              </button>
            </a>

            <p style={{ color: '#2C1A0E' }} className="text-sm opacity-40 text-center">
              Takes about 2 minutes to complete
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact