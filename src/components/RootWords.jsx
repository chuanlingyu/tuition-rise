import competition from '../assets/text/competition.png'
import rank from '../assets/text/rank.png'
import arrow from '../assets/icons/arrow.png'

export default function RootWords({ onTogglePanel, hasSeenPanel }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10, // slightly below TreeWords if needed
      }}
    >
      <button
        type="button"
        onClick={() => onTogglePanel('rootWords')}
        style={{
          position: 'absolute',
          left: '38%',
          top: '59%',
          width: 500,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          opacity: 0.9,
          zIndex: 4,
        }}
        aria-label="Open root values note"
      >
        <img
          src={rank}
          alt="Rank"
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
              right: "35%",
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
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('rootWords')}
        style={{
          position: 'absolute',
          left: '37%',
          top: '71%',
          width: 550,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          opacity: 0.9,
          zIndex: 4,
        }}
        aria-label="Open root values note"
      >
        <img
          src={competition}
          alt="Competition"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('rootWords')}
        style={{
          position: 'absolute',
          left: '52%',
          top: '83%',
          width: 90,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          opacity: 0.85,
          transform: 'scaleX(0.5) scaleY(0.6)',
          zIndex: 1,
        }}
        aria-label="Open root values note"
      >
        <img
          src={arrow}
          alt="Arrow pointing upward from the roots"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('rootWords')}
        style={{
          position: 'absolute',
          left: '52%',
          top: '63%',
          width: 85,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          opacity: 0.85,
          zIndex: 1,
        }}
        aria-label="Open root values note"
      >
        <img
          src={arrow}
          alt="Arrow pointing upward from rank"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </button>
    </div>
  )
}
