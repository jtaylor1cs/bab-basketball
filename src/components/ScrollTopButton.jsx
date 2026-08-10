import { useEffect, useState } from 'react'
import { IconBasketball } from './icons'

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        backgroundColor: '#B94B35',
        color: '#EDE8D5',
        border: '3px solid #2C1A0E',
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '54px',
        height: '54px',
        borderRadius: '50%',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        cursor: 'pointer',
      }}
      className="hard-shadow-sm hover:opacity-90 hover:animate-spin"
    >
      <IconBasketball size={26} />
    </button>
  )
}

export default ScrollTopButton
