import studentImg from '../assets/characters/Student-Away.png'

export default function LeftStudent({ onTogglePanel, activePanel, hasSeenPanel }) {
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
      <button
        type="button"
        onClick={() => onTogglePanel('leftStudent')}
        style={{
          position: 'absolute',
          bottom: 75,
          left: 20,
          width: 100,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
        aria-label="Open student note"
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
      </button>
    </div>
  )
}
