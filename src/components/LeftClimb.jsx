import studentImg from '../assets/characters/Student-Carry-Final.png'
import moneyPileImg from '../assets/icons/money-pile.png'
import ladderImg from '../assets/icons/ladder.png'

export default function LeftClimb() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 250,
        top: '28%',
        width: 300,
        height: 380,

        userSelect: 'none',
        zIndex: 2,
      }}
    >
      <img
        src={studentImg}
        style={{
          position: 'absolute',
          bottom: 100,
          left: 70,
          transform: 'translateX(-50%)',
          width: 270,
          top: 215,
        }}
      />

      <img
        src={moneyPileImg}
        style={{
          position: 'absolute',
          left: 210,
          bottom: -17,
          width: 110,
          zIndex: 1,
        }}
      />

      <img
        src={moneyPileImg}
        style={{
          position: 'absolute',
          left: 210,
          bottom: 0,
          width: 110,
          zIndex: 1,
        }}
      />

      <img
        src={moneyPileImg}
        style={{
          position: 'absolute',
          left: 210,
          bottom: 20,
          width: 110,
          zIndex: 1,
        }}
      />

      <img
        src={moneyPileImg}
        style={{
          position: 'absolute',
          left: 210,
          bottom: 30,
          width: 110,
          zIndex: 1,
        }}
      />

      <img
        src={ladderImg}
        style={{
          position: 'absolute',
          right: -30,
          bottom: 220,
          width: 120,
          transform: 'scaleX(-1)',
          zIndex: 0,
        }}
      />
    </div>
  )
}