import fallenStudentImg from '../assets/characters/fallen.png'
import gradStudentImg from '../assets/characters/grad-debt.png'

export default function RightDebt() {
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

      {/* fallen student on the left */}
      <img
        src={fallenStudentImg}
        alt="Student who fell due to high cost"
        style={{
          position: 'absolute',
          bottom: 110,
          left: 70,
          width: 175,
          transform: 'rotate(-18deg)',
          transformOrigin: 'bottom center',
        }}
      />


      {/* graduated student on the right */}
      <img
        src={gradStudentImg}
        alt="Graduated student with debt"
        style={{
          position: 'absolute',
          bottom: -90,
          right: 42,
          width: 220,
        }}
      />
    </div>
  )
}