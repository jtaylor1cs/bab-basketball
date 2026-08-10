import { useState } from 'react'
import posterImage from '../assets/YouthBasketballGroup.jpg'
import { IconPlay, IconSwish } from './icons'
import Reveal from './Reveal'

// Drop your training highlight reel at public/media/training-highlights.mp4
// (mp4, muted-friendly, ~15-45s loop). It will start playing automatically —
// no code changes needed. Until then this section shows the poster photo below.
const VIDEO_SRC = '/media/training-highlights.mp4'

function VideoShowcase() {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section
      style={{ backgroundColor: '#2C1A0E', backgroundAttachment: 'fixed' }}
      className="relative py-28 md:py-36 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${posterImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'fixed',
        }}
      />

      <video
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: videoReady ? 1 : 0 }}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(44,26,14,0.75) 0%, rgba(44,26,14,0.55) 50%, rgba(44,26,14,0.85) 100%)' }} />
      <div className="halftone absolute inset-0 pointer-events-none" style={{ color: '#EDE8D5', opacity: 0.08 }} />

      <IconSwish
        size={140}
        className="absolute pointer-events-none hidden md:block"
        style={{ color: '#C49A2D', opacity: 0.25, top: '10%', right: '8%', transform: 'rotate(-8deg)' }}
      />

      <div className="relative max-w-3xl mx-auto text-center" style={{ zIndex: 5 }}>
        <Reveal>
          <div
            className="mx-auto mb-7 rounded-full flex items-center justify-center hard-shadow"
            style={{ width: '84px', height: '84px', backgroundColor: '#B94B35', color: '#EDE8D5' }}
          >
            <IconPlay size={46} />
          </div>
          <p style={{ color: '#C49A2D' }} className="text-sm font-bold tracking-widest uppercase mb-3">
            See The Work
          </p>
          <h2 className="font-display uppercase text-4xl md:text-6xl mb-5" style={{ color: '#EDE8D5' }}>
            Training In Motion
          </h2>
          <p style={{ color: '#EDE8D5' }} className="text-lg opacity-70 max-w-xl mx-auto">
            A highlight reel from the gym floor — drills, game reps, and the grind that
            gets players ready. Full video dropping soon.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default VideoShowcase
