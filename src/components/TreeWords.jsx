import amenityImg from '../assets/text/amenity.png'
import facultyImg from '../assets/text/faculty.png'
import researchImg from '../assets/text/research.png'
import athleticImg from '../assets/text/athletic.png'

export default function TreeWords({ onTogglePanel, hasSeenPanel }) {
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
      <button
        type="button"
        onClick={() => onTogglePanel('treeWords')}
        style={{
          position: 'absolute',
          left: 650,
          top: 320,
          width: 190,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
        aria-label="Open tree values note"
      >
        <img
          src={amenityImg}
          alt="Amenity"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('treeWords')}
        style={{
          position: 'absolute',
          left: 650,
          top: 265,
          width: 190,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
        aria-label="Open tree values note"
      >
        <img
          src={facultyImg}
          alt="Faculty"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('treeWords')}
        style={{
          position: 'absolute',
          left: 660,
          top: 220,
          width: 170,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
        aria-label="Open tree values note"
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
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('treeWords')}
        style={{
          position: 'absolute',
          left: 659,
          top: 170,
          width: 170,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
        aria-label="Open tree values note"
      >
        <img
          src={athleticImg}
          alt="Athletic"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </button>
    </div>
  )
}
