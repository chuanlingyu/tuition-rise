import { useState } from 'react'
import studentImg from '../assets/characters/Student-Away.png'

export default function LeftStudent({ onTogglePanel, activePanel, hasSeenPanel }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        left: 40,
        bottom: 75,
        width: 220,
        height: 220,
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 75,
          left: 20,
          width: 100,
          transform: isHovered ? 'scale(1.06)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter: isHovered
            ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
            : 'none',
          pointerEvents: 'none',
        }}
      >
        <img
          src={studentImg}
          alt="Student leaving because of high cost"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        {!hasSeenPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 4,
              right: -8,
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#d63b2f',
              border: '2px solid #fff6ef',
              boxShadow: '0 0 0 2px rgba(83, 28, 21, 0.28)',
              pointerEvents: 'none',
            }}
          />
        ) : null}
      </div>

      <button
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={() => onTogglePanel('leftStudent')}
        style={{
          // Temporary left student hitbox: adjust these values without moving the image.
          position: 'absolute',
          bottom: 75,
          left: 20,
          width: 100,
          height: 150,
          padding: 0,
          border: '2px dotted #000',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        aria-label="Open student note"
      />
    </div>
  )
}
