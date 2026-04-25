import { useState } from 'react'
import studentImg from '../assets/characters/Student-Carry-Final.png'
import moneyPileImg from '../assets/icons/money-pile.png'
import ladderImg from '../assets/icons/ladder.png'

export default function LeftClimb({
  onTogglePanel,
  hasSeenClimbPanel,
  hasSeenLadderPanel,
}) {
  const [hoveredFigure, setHoveredFigure] = useState(null)

  return (
    <div
      style={{
        position: 'absolute',
        left: 250,
        top: '28%',
        width: 300,
        height: 380,
        userSelect: 'none',
        zIndex: 20,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          left: 70,
          width: 270,
          top: 215,
          transform:
            hoveredFigure === 'student'
              ? 'translateX(-50%) scale(1.06)'
              : 'translateX(-50%)',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter:
            hoveredFigure === 'student'
              ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
              : 'none',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <img
          src={studentImg}
          alt="Student climbing toward higher education while carrying financial pressure"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        {!hasSeenClimbPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 16,
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
        onMouseEnter={() => setHoveredFigure('student')}
        onMouseLeave={() => setHoveredFigure(null)}
        onFocus={() => setHoveredFigure('student')}
        onBlur={() => setHoveredFigure(null)}
        onClick={() => onTogglePanel('leftClimb')}
        style={{
          // Temporary climbing student hitbox: adjust these values without moving the image.
          position: 'absolute',
          bottom: 100,
          left: 70,
          top: 215,
          width: 175,
          height: 160,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
        aria-label="Open climbing student note"
      />

      <div
        style={{
          position: 'absolute',
          left: 200,
          bottom: -17,
          width: 130,
          height: 160,
          transform: hoveredFigure === 'money' ? 'scale(1.06)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter:
            hoveredFigure === 'money'
              ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
              : 'none',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <img
          src={moneyPileImg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 10,
            bottom: 0,
            width: 110,
            zIndex: 1,
          }}
        />
        <img
          src={moneyPileImg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 10,
            bottom: 17,
            width: 110,
            zIndex: 1,
          }}
        />
        <img
          src={moneyPileImg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 10,
            bottom: 37,
            width: 110,
            zIndex: 1,
          }}
        />
        <img
          src={moneyPileImg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 10,
            bottom: 47,
            width: 110,
            zIndex: 1,
          }}
        />
        {!hasSeenClimbPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 40,
              right: 20,
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
        onMouseEnter={() => setHoveredFigure('money')}
        onMouseLeave={() => setHoveredFigure(null)}
        onFocus={() => setHoveredFigure('money')}
        onBlur={() => setHoveredFigure(null)}
        onClick={() => onTogglePanel('leftClimb')}
        style={{
          // Temporary money pile hitbox: adjust these values without moving the image.
          position: 'absolute',
          left: 230,
          bottom: 0,
          width: 70,
          height: 90,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        aria-label="Open tuition cost note"
      />

      <div
        style={{
          position: 'absolute',
          right: -30,
          bottom: 220,
          width: 120,
          transform:
            hoveredFigure === 'ladder'
              ? 'scaleX(-1) scale(1.06)'
              : 'scaleX(-1)',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter:
            hoveredFigure === 'ladder'
              ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
              : 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <img
          src={ladderImg}
          alt="Ladder representing the path upward toward higher education"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        {!hasSeenLadderPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 4,
              right: 80,
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
        onMouseEnter={() => setHoveredFigure('ladder')}
        onMouseLeave={() => setHoveredFigure(null)}
        onFocus={() => setHoveredFigure('ladder')}
        onBlur={() => setHoveredFigure(null)}
        onClick={() => onTogglePanel('ladder')}
        style={{
          // Temporary ladder hitbox: adjust these values without moving the image.
          position: 'absolute',
          right: -15,
          bottom: 245,
          width: 80,
          height: 150,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        aria-label="Open ladder note"
      />
    </div>
  )
}
