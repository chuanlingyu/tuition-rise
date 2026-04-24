import { useState } from 'react'
import parentImg from '../assets/characters/Parents.png'

export default function ParentsAssist({ onTogglePanel, hasSeenPanel }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        left: 570,
        bottom: 130,
        width: 200,
        height: 150,
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: -10,
          left: -40,
          width: 250,
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
          src={parentImg}
          alt="Parents helping a student reach higher education"
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
              top: 20,
              right: 60,
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
        onClick={() => onTogglePanel('parentAssist')}
        style={{
          // Temporary parent hitbox: adjust these values without moving the image.
          position: 'absolute',
          bottom: 50,
          left: 40,
          width: 100,
          height: 300,
          padding: 0,
          border: '2px dotted #000',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        aria-label="Open parent note"
      />
    </div>
  )
}
