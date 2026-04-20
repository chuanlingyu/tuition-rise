import parentImg from '../assets/characters/Parents.png'

export default function ParentsAssist({ onTogglePanel, hasSeenPanel }) {
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
      <button
        type="button"
        onClick={() => onTogglePanel('parentAssist')}
        style={{
          position: 'absolute',
          bottom: -10,
          left: -40,
          width: 250,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
        aria-label="Open parent note"
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
      </button>
    </div>
  )
}
