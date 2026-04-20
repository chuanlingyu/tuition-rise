import fallenStudentImg from '../assets/characters/fallen.png'
import gradStudentImg from '../assets/characters/grad-debt.png'

export default function RightDebt({ onTogglePanel, hasSeenPanel }) {
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
      <button
        type="button"
        onClick={() => onTogglePanel('rightDebt')}
        style={{
          position: 'absolute',
          bottom: 110,
          left: 70,
          width: 175,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
        aria-label="Open debt outcome note"
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
      </button>


      <button
        type="button"
        onClick={() => onTogglePanel('rightDebt')}
        style={{
          position: 'absolute',
          bottom: -90,
          right: 42,
          width: 220,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
        aria-label="Open debt outcome note"
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
      </button>
    </div>
  )
}
