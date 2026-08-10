import { useState } from 'react'
import { IconCamera, IconBasketball } from './icons'

function PhotoTile({ src, alt = 'BAB Training session', color = '#B94B35', rotate = '0deg', className = '', style = {} }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`hard-shadow-sm rounded-lg overflow-hidden ${className}`}
      style={{
        position: 'relative',
        backgroundColor: '#2C1A0E',
        border: '3px solid #2C1A0E',
        transform: `rotate(${rotate})`,
        ...style,
      }}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 halftone"
          style={{ backgroundColor: color, color: '#EDE8D5' }}
        >
          <IconCamera size={30} style={{ opacity: 0.9 }} />
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-90 text-center px-3">
            Photo Coming Soon
          </p>
        </div>
      )}
      <div
        className="absolute top-2 right-2 rounded-full flex items-center justify-center"
        style={{ width: '24px', height: '24px', backgroundColor: '#EDE8D5', color }}
      >
        <IconBasketball size={14} />
      </div>
    </div>
  )
}

export default PhotoTile
