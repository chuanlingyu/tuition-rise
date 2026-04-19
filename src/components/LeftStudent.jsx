import { useState } from 'react'
import studentImg from '../assets/characters/Student-Away.png'

export default function LeftStudent() {
  const [showInfoBox, setShowInfoBox] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        left: 40,
        bottom: 75,
        width: 220,
        height: 220,
        zIndex: 2,
        boxSizing: 'border-box',
      }}
    >
      <button
        type="button"
        onClick={() => setShowInfoBox((current) => !current)}
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
        aria-expanded={showInfoBox}
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
      </button>

      {showInfoBox ? (
        <div
          style={{
            position: 'absolute',
            left: 112,
            bottom: 118,
            width: 240,
            minHeight: 220,
            padding: 0,
            border: '3px solid #2f2520',
            borderRadius: 18,
            background: 'linear-gradient(180deg, #fffdf6 0%, #f5ead8 100%)',
            boxShadow: '0 18px 36px rgba(0, 0, 0, 0.22)',
            color: '#2f2520',
            overflow: 'hidden',
            zIndex: 4,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              background: '#7a4b2a',
              color: '#fff8ec',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <span>Student Story</span>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  padding: '3px 8px',
                  borderRadius: 999,
                  background: 'rgba(255, 248, 236, 0.18)',
                }}
              >
                Click to edit later
              </span>
              <button
                type="button"
                onClick={() => setShowInfoBox(false)}
                style={{
                  width: 22,
                  height: 22,
                  padding: 0,
                  border: '1px solid rgba(255, 248, 236, 0.55)',
                  borderRadius: 999,
                  background: 'transparent',
                  color: '#fff8ec',
                  fontSize: 14,
                  lineHeight: 1,
                  cursor: 'pointer',
                }}
                aria-label="Close student note"
              >
                ×
              </button>
            </div>
          </div>

          <div
            style={{
              padding: '14px 16px 16px',
              fontSize: 14,
              lineHeight: 1.45,
            }}
          >
            <div
              style={{
                marginBottom: 10,
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              Leaving with more pressure than promise
            </div>

            <div
              style={{
                marginBottom: 12,
                color: '#5b4635',
              }}
            >
              This pop-up can hold a short student perspective about tuition,
              family stress, or the cost of chasing opportunity.
            </div>

            <div
              style={{
                padding: '10px 12px',
                marginBottom: 10,
                borderRadius: 12,
                background: 'rgba(122, 75, 42, 0.08)',
              }}
            >
              "I wanted the tree to mean opportunity, but the path kept getting
              more expensive."
            </div>

            <div
              style={{
                display: 'grid',
                gap: 8,
              }}
            >
              <div>Debt grows faster than confidence.</div>
              <div>Family support does not erase rising costs.</div>
              <div>This panel is ready for your own evidence or quote.</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
