import { IconWhistle, IconClipboard, IconStar, IconHoop } from './icons'
import FrameCorners from './FrameCorners'
import Reveal from './Reveal'

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor"

function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#F5EFE0' }} className="py-28 relative overflow-hidden">
      <IconWhistle
        size={80}
        className="absolute pointer-events-none hidden md:block float-anim"
        style={{ color: '#2D6A5A', opacity: 0.15, top: '6%', right: '6%' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-16 relative">

        <Reveal className="flex-1">
          <div className="flex flex-col gap-6">
            <div>
              <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
                Get In Touch
              </p>
              <h2 className="font-display uppercase text-4xl md:text-5xl mb-2" style={{ color: '#2C1A0E' }}>
                Ready to Level Up?
              </h2>
              <p style={{ color: '#2C1A0E' }} className="text-lg opacity-60">
                Sign up below to reserve your spot. We will confirm your schedule and send next steps within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              <a href="mailto:jonbabtraining@gmail.com" className="flex items-center gap-4 hover:opacity-70 transition">
                <div
                  style={{ backgroundColor: '#B94B35', minWidth: '48px', height: '48px' }}
                  className="rounded-full flex items-center justify-center text-white font-bold text-sm hard-shadow-sm"
                >
                  EM
                </div>
                <div>
                  <p style={{ color: '#2C1A0E' }} className="font-bold">Email</p>
                  <p style={{ color: '#2C1A0E' }} className="opacity-60 text-sm">jonbabtraining@gmail.com</p>
                </div>
              </a>

              <a href="tel:6504059522" className="flex items-center gap-4 hover:opacity-70 transition">
                <div
                  style={{ backgroundColor: '#2D6A5A', minWidth: '48px', height: '48px' }}
                  className="rounded-full flex items-center justify-center text-white font-bold text-sm hard-shadow-sm"
                >
                  PH
                </div>
                <div>
                  <p style={{ color: '#2C1A0E' }} className="font-bold">Phone / Text</p>
                  <p style={{ color: '#2C1A0E' }} className="opacity-60 text-sm">(650) 405-9522</p>
                </div>
              </a>

              <a href="https://instagram.com/bab.training" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:opacity-70 transition">
                <div
                  style={{ backgroundColor: '#C49A2D', minWidth: '48px', height: '48px' }}
                  className="rounded-full flex items-center justify-center text-white font-bold text-sm hard-shadow-sm"
                >
                  IG
                </div>
                <div>
                  <p style={{ color: '#2C1A0E' }} className="font-bold">Instagram</p>
                  <p style={{ color: '#2C1A0E' }} className="opacity-60 text-sm">@bab.training</p>
                </div>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex-1 flex flex-col justify-center">
          <div className="relative">
            <div
              className="absolute"
              style={{ inset: '10px -10px -10px 10px', backgroundColor: '#4A7FA5', borderRadius: '14px', transform: 'rotate(2deg)' }}
            />
            <div
              style={{
                backgroundColor: '#EDE8D5',
                border: '3px solid #2C1A0E',
                borderRadius: '12px',
                padding: '40px',
              }}
              className="relative flex flex-col gap-6"
            >
              <FrameCorners color="#2C1A0E" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconStar size={22} style={{ color: '#C49A2D' }} />
                  <h3 className="font-display uppercase text-2xl" style={{ color: '#2C1A0E' }}>
                    Sign Up Form
                  </h3>
                </div>
                <p style={{ color: '#2C1A0E' }} className="opacity-60 leading-relaxed">
                  Our sign-up form covers player info, program selection, and liability waiver in one step.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  { icon: IconClipboard, label: 'Player info and grade level' },
                  { icon: IconHoop, label: 'Program selection' },
                  { icon: IconStar, label: 'Liability waiver' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <item.icon size={20} style={{ color: '#B94B35' }} />
                    <p style={{ color: '#2C1A0E' }} className="font-bold">{item.label}</p>
                  </li>
                ))}
              </ul>

              <a href={FORM_URL} target="_blank" rel="noreferrer">
                <button
                  style={{ backgroundColor: '#B94B35', color: '#EDE8D5', width: '100%' }}
                  className="py-5 text-xl font-bold rounded tracking-wide hover:opacity-90 transition hard-shadow-sm"
                >
                  Sign Up Now
                </button>
              </a>

              <p style={{ color: '#2C1A0E' }} className="text-sm opacity-40 text-center">
                Takes about 2 minutes to complete
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Contact
