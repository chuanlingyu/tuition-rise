import { useState } from 'react'
import dollar from '../assets/icons/dollar.png'
import dream from '../assets/text/dream.png'

export default function Labels({ onTogglePanel, hasSeenDollarPanel }) {
  const [isDollarHovered, setIsDollarHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '85%',
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        zIndex: 3,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '45%',
          top: -150,
          width: '20%',
          pointerEvents: 'none',
          opacity: 0.92,
          zIndex: 1,
        }}
      >
        <img
          src={dream}
          alt="Dream label above the dollar symbol"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: '48%',
          top: 10,
          width: 200,
          transform: isDollarHovered ? 'scale(1.06)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter: isDollarHovered
            ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
            : 'none',
          pointerEvents: 'none',
          opacity: 0.85,
          zIndex: 1,
        }}
      >
        <img
          src={dollar}
          alt="Dollar symbol representing money and rising college cost"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        {!hasSeenDollarPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: "10%",
              right: "25%",
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
        onMouseEnter={() => setIsDollarHovered(true)}
        onMouseLeave={() => setIsDollarHovered(false)}
        onFocus={() => setIsDollarHovered(true)}
        onBlur={() => setIsDollarHovered(false)}
        onClick={() => onTogglePanel('dollar')}
        style={{
          // Temporary dollar hitbox: adjust these values without moving the image.
          position: 'absolute',
          left: '52%',
          top: 25,
          width: 100,
          height: 90,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 2,
        }}
        aria-label="Open dollar label note"
      />
    </div>
  )
}
