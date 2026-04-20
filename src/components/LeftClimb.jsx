import studentImg from '../assets/characters/Student-Carry-Final.png'
import moneyPileImg from '../assets/icons/money-pile.png'
import ladderImg from '../assets/icons/ladder.png'

export default function LeftClimb({
  onTogglePanel,
  hasSeenClimbPanel,
  hasSeenLadderPanel,
}) {
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
      <button
        type="button"
        onClick={() => onTogglePanel('leftClimb')}
        style={{
          position: 'absolute',
          bottom: 100,
          left: 70,
          width: 270,
          top: 215,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
        aria-label="Open climbing student note"
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
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('leftClimb')}
        style={{
          position: 'absolute',
          left: 200,
          bottom: -17,
          width: 130,
          height: 160,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          zIndex: 2,
        }}
        aria-label="Open tuition cost note"
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
      </button>

      <button
        type="button"
        onClick={() => onTogglePanel('ladder')}
        style={{
          position: 'absolute',
          right: -30,
          bottom: 220,
          width: 120,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          transform: 'scaleX(-1)',
          zIndex: 0,
        }}
        aria-label="Open ladder note"
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
      </button>
    </div>
  )
}
