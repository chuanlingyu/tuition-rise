import studentImg from '../assets/characters/Student-Away.png'

export default function LeftStudent() {
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
      <img
        src={studentImg}
        alt="Student leaving because of high cost"
        style={{
          position: 'absolute',
          bottom: 75,
          left: 20,
          width: 100,
        }}
      />
    </div>
  )
}