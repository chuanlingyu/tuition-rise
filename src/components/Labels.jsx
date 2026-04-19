import dollar from '../assets/icons/dollar.png'

export default function Labels() {
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
    <img
      src={dollar}
      alt=""
      style={{
        position: 'absolute',
        left: "48%",
        top: 10,   // adjust this
        width: 200,
        opacity: 0.85,
        zIndex: 1,
      }}
    />
    </div>
  )
}