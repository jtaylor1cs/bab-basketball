import { useState } from 'react'
import { IconCamera, IconBasketball } from './icons'
import Reveal from './Reveal'

// Drop original photos into public/gallery/ named photo-1.jpg ... photo-6.jpg
// (any aspect ratio — they'll be cropped to fill the frame) and they'll swap
// in automatically here, no code changes needed.
const tiles = [
  { id: 1, src: '/gallery/photo-1.jpg', color: '#B94B35', rotate: '-2deg' },
  { id: 2, src: '/gallery/photo-2.jpg', color: '#4A7FA5', rotate: '1.5deg' },
  { id: 3, src: '/gallery/photo-3.jpg', color: '#2D6A5A', rotate: '-1deg' },
  { id: 4, src: '/gallery/photo-4.jpg', color: '#C49A2D', rotate: '2deg' },
  { id: 5, src: '/gallery/photo-5.jpg', color: '#4A7FA5', rotate: '-1.5deg' },
  { id: 6, src: '/gallery/photo-6.jpg', color: '#B94B35', rotate: '1deg' },
]

function PhotoTile({ tile, index }) {
  const [failed, setFailed] = useState(false)

  return (
    <Reveal delay={(index % 3) * 100}>
      <div
        className="hard-shadow-sm rounded-lg overflow-hidden relative"
        style={{
          backgroundColor: '#2C1A0E',
          aspectRatio: '4 / 5',
          transform: `rotate(${tile.rotate})`,
          border: '3px solid #2C1A0E',
        }}
      >
        {!failed ? (
          <img
            src={tile.src}
            alt="BAB Training session"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 halftone"
            style={{ backgroundColor: tile.color, color: '#EDE8D5' }}
          >
            <IconCamera size={36} style={{ opacity: 0.9 }} />
            <p className="text-xs font-bold uppercase tracking-widest opacity-90 text-center px-4">
              Photo Coming Soon
            </p>
          </div>
        )}
        <div
          className="absolute top-2 right-2 rounded-full flex items-center justify-center"
          style={{ width: '28px', height: '28px', backgroundColor: '#EDE8D5', color: tile.color }}
        >
          <IconBasketball size={16} />
        </div>
      </div>
    </Reveal>
  )
}

function Gallery() {
  return (
    <section id="gallery" style={{ backgroundColor: '#F5EFE0' }} className="py-28 px-6 md:px-8">
      <Reveal>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
            On The Court
          </p>
          <h2 className="font-display uppercase text-5xl md:text-6xl mb-4" style={{ color: '#2C1A0E' }}>
            Gallery
          </h2>
          <p style={{ color: '#2C1A0E' }} className="text-lg opacity-50">
            Moments from training sessions, camps, and games — more photos added regularly.
          </p>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {tiles.map((tile, i) => (
          <PhotoTile key={tile.id} tile={tile} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
