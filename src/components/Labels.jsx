import dollar from '../assets/icons/dollar.png'

export default function Labels({ onTogglePanel, hasSeenDollarPanel }) {
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
      <button
        type="button"
        onClick={() => onTogglePanel('dollar')}
        style={{
          position: 'absolute',
          left: '48%',
          top: 10,
          width: 200,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
          opacity: 0.85,
          zIndex: 1,
        }}
        aria-label="Open dollar label note"
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
      </button>
    </div>
  )
}
