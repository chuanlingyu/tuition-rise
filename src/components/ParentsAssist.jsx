import parentImg from '../assets/characters/Parents.png'

export default function ParentsAssist() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 570,        // adjust based on your layout
        bottom: 130,
        width: 200,
        height: 150,
        zIndex: 1,
        pointerEvents: 'none', // so it doesn't block clicks if needed
      }}
    >
      <img
        src={parentImg}
        style={{
            position: 'absolute',
            bottom: -10,
            left: -40,
            width: 250,
        }}
        />
    </div>
  )
}