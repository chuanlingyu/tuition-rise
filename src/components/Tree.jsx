import treeImg from '../assets/scene/New-Background-Final.png'

export default function Tree() {
  return (
    <img
      src={treeImg}
      alt="Tree"
      style={{
        position: 'absolute',
        left: '49%',
        top: '50%',   // adjust this
        transform: 'translate(-50%, -50%)',

        height: '110vh',   // 👈 control size here
        width: 'auto',    // keep aspect ratio

        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}