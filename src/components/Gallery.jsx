import PhotoTile from './PhotoTile'
import Reveal from './Reveal'
import { IconBasketball, IconHoop, IconStar, IconSwish, IconSneaker, IconJersey } from './icons'

// Drop original photos into public/gallery/ named photo-1.jpg ... photo-6.jpg
// (any aspect ratio — they'll be cropped to fill the frame) and they'll swap
// in automatically here, no code changes needed.
const tiles = [
  { id: 1, src: '/gallery/photo-1.jpg', color: '#B94B35', rotate: '-2deg', icon: IconBasketball },
  { id: 2, src: '/gallery/photo-2.jpg', color: '#4A7FA5', rotate: '1.5deg', icon: IconSwish },
  { id: 3, src: '/gallery/photo-3.jpg', color: '#2D6A5A', rotate: '-1deg', icon: IconHoop },
  { id: 4, src: '/gallery/photo-4.jpg', color: '#C49A2D', rotate: '2deg', icon: IconStar },
  { id: 5, src: '/gallery/photo-5.jpg', color: '#4A7FA5', rotate: '-1.5deg', icon: IconSneaker },
  { id: 6, src: '/gallery/photo-6.jpg', color: '#B94B35', rotate: '1deg', icon: IconJersey },
]

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
          <Reveal key={tile.id} delay={(i % 3) * 100}>
            <PhotoTile src={tile.src} color={tile.color} rotate={tile.rotate} icon={tile.icon} style={{ aspectRatio: '4 / 5' }} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Gallery
