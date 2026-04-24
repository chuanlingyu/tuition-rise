import { useState } from 'react'
import fallenStudentImg from '../assets/characters/fallen.png'
import gradStudentImg from '../assets/characters/grad-debt.png'

export default function RightDebt({ onTogglePanel, hasSeenPanel }) {
  const [hoveredFigure, setHoveredFigure] = useState(null)

  return (
    <div
      style={{
        position: 'absolute',
        right: 40,
        top: '21%',
        width: 500,
        height: 420,
    
        userSelect: 'none',
        overflow: 'hidden',
        zIndex: 5,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 110,
          left: 70,
          width: 175,
          transform: hoveredFigure === 'fallen' ? 'scale(1.06)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter:
            hoveredFigure === 'fallen'
              ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
              : 'none',
          pointerEvents: 'none',
        }}
      >
        <img
          src={fallenStudentImg}
          alt="Student who fell due to high cost"
          style={{
            display: 'block',
            width: '100%',
            transform: 'rotate(-18deg)',
            transformOrigin: 'bottom center',
          }}
        />
        {!hasSeenPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: "10%",
              right: "20%",
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
        onMouseEnter={() => setHoveredFigure('fallen')}
        onMouseLeave={() => setHoveredFigure(null)}
        onFocus={() => setHoveredFigure('fallen')}
        onBlur={() => setHoveredFigure(null)}
        onClick={() => onTogglePanel('rightDebt')}
        style={{
          // Temporary fallen student hitbox: adjust these values without moving the image.
          position: 'absolute',
          bottom: '32%',
          left: '10%',
          width: 170,
          height: 170,
          padding: 0,
          border: '2px dotted #000',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        aria-label="Open debt outcome note"
      />


      <div
        style={{
          position: 'absolute',
          bottom: -90,
          right: 42,
          width: 220,
          transform: hoveredFigure === 'graduate' ? 'scale(1.06)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter:
            hoveredFigure === 'graduate'
              ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
              : 'none',
          pointerEvents: 'none',
        }}
      >
        <img
          src={gradStudentImg}
          alt="Graduated student with debt"
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
              top: "20%",
              right: "00%",
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
        onMouseEnter={() => setHoveredFigure('graduate')}
        onMouseLeave={() => setHoveredFigure(null)}
        onFocus={() => setHoveredFigure('graduate')}
        onBlur={() => setHoveredFigure(null)}
        onClick={() => onTogglePanel('rightDebt')}
        style={{
          // Temporary graduate debt hitbox: adjust these values without moving the image.
          position: 'absolute',
          bottom: -90,
          right: 42,
          width: 220,
          height: 260,
          padding: 0,
          border: '2px dotted #000',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        aria-label="Open debt outcome note"
      />
    </div>
  )
}
