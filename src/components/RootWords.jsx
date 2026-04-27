import { useState } from 'react'
import competition from '../assets/text/competition.png'
import rank from '../assets/text/rank.png'
import arrow from '../assets/icons/arrow.png'

export default function RootWords({ onTogglePanel, hasSeenRankPanel, hasSeenCompetitionPanel }) {
  const [hoveredWord, setHoveredWord] = useState(null)

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10, // slightly below TreeWords if needed
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '38%',
          top: '59%',
          width: 500,
          transform: hoveredWord === 'rank' ? 'scale(1.06)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter:
            hoveredWord === 'rank'
              ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
              : 'none',
          pointerEvents: 'none',
          opacity: 0.9,
          zIndex: 5,
        }}
      >
        <img
          src={rank}
          alt="Rank"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        {!hasSeenRankPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: "37%",
              right: "27%",
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
        onMouseEnter={() => setHoveredWord('rank')}
        onMouseLeave={() => setHoveredWord(null)}
        onFocus={() => setHoveredWord('rank')}
        onBlur={() => setHoveredWord(null)}
        onClick={() => onTogglePanel('rank')}
        style={{
          // Temporary rank hitbox: adjust these values without moving the image.
          position: 'absolute',
          left: '49%',
          top: '75%',
          width: 200,
          height: 70,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 6,
        }}
        aria-label="Open rank note"
      />

      <div
        style={{
          position: 'absolute',
          left: '37%',
          top: '71%',
          width: 550,
          transform: hoveredWord === 'competition' ? 'scale(1.06)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 160ms ease, filter 160ms ease',
          filter:
            hoveredWord === 'competition'
              ? 'drop-shadow(0 8px 10px rgba(47, 37, 32, 0.22))'
              : 'none',
          pointerEvents: 'none',
          opacity: 0.9,
          zIndex: 4,
        }}
      >
        <img
          src={competition}
          alt="Competition"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        {!hasSeenCompetitionPanel ? (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '37%',
              right: '21%',
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
        onMouseEnter={() => setHoveredWord('competition')}
        onMouseLeave={() => setHoveredWord(null)}
        onFocus={() => setHoveredWord('competition')}
        onBlur={() => setHoveredWord(null)}
        onClick={() => onTogglePanel('competition')}
        style={{
          // Temporary competition hitbox: adjust these values without moving the image.
          position: 'absolute',
          left: '45%',
          top: '90%',
          width: 300,
          height: 70,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 7,
        }}
        aria-label="Open root values note"
      />

      <div
        className="clickable-figure"
        style={{
          position: 'absolute',
          left: '52.5%',
          bottom: '3%',
          width: 80,
          pointerEvents: 'auto',
          opacity: 0.85,
          '--clickable-base-transform': 'scaleX(0.5) scaleY(0.6)',
          zIndex: 1,
        }}
      >
        <img
          src={arrow}
          alt="Arrow pointing upward from the roots"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        <button
          type="button"
          className="clickable-hitbox"
          onClick={() => onTogglePanel('competition')}
          aria-label="Open root values note"
        />
      </div>

      <div
        className="clickable-figure"
        style={{
          position: 'absolute',
          left: '53.5%',
          top: '63%',
          width: 50,
          pointerEvents: 'auto',
          opacity: 0.85,
          zIndex: 1,
        }}
      >
        <img
          src={arrow}
          alt="Arrow pointing upward from rank"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        <button
          type="button"
          className="clickable-hitbox"
          onClick={() => onTogglePanel('rank')}
          aria-label="Open root values note"
        />
      </div>
    </div>
  )
}
