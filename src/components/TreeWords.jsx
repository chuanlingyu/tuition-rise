import { useState } from 'react'
import amenityImg from '../assets/text/amenity.png'
import facultyImg from '../assets/text/faculty.png'
import researchImg from '../assets/text/research.png'
import athleticImg from '../assets/text/athletic.png'

export default function TreeWords({ onTogglePanel, hasSeenPanel }) {
  const [isHovered, setIsHovered] = useState(false)
  const hoverStyle = {
    transform: isHovered ? 'scale(1.06)' : 'none',
    transformOrigin: 'center',
    transition: 'transform 160ms ease, filter 160ms ease',
    filter: isHovered
      ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
      : 'none',
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 40,
        bottom: 450,
        width: 220,
        height: 220,
        zIndex: 2,
        boxSizing: 'border-box',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 650,
          top: 320,
          width: 190,
          ...hoverStyle,
          pointerEvents: 'none',
        }}
      >
        <img
          src={amenityImg}
          alt="Amenity"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 650,
          top: 265,
          width: 190,
          ...hoverStyle,
          pointerEvents: 'none',
        }}
      >
        <img
          src={facultyImg}
          alt="Faculty"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 660,
          top: 220,
          width: 170,
          ...hoverStyle,
          pointerEvents: 'none',
        }}
      >
        <img
          src={researchImg}
          alt="Research"
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
              top: "10%",
              right: "10%",
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

      <div
        style={{
          position: 'absolute',
          left: 659,
          top: 170,
          width: 170,
          ...hoverStyle,
          pointerEvents: 'none',
        }}
      >
        <img
          src={athleticImg}
          alt="Athletic"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </div>

      <button
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={() => onTogglePanel('treeWords')}
        style={{
          // Temporary tree words hitbox: adjust these values without moving the images.
          position: 'absolute',
          left: 690,
          top: 170,
          width: 100,
          height: 220,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        aria-label="Open tree values note"
      />
    </div>
  )
}
