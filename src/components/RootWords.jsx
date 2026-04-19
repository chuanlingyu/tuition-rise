import competition from '../assets/text/competition.png'
import rank from '../assets/text/rank.png'
import arrow from '../assets/icons/arrow.png'

export default function RootWords() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2, // slightly below TreeWords if needed
      }}
    >
      {/* Rank (just below ground) */}
      <img
        src={rank}
        alt="Rank"
        style={{
          position: 'absolute',
          left: '38%',
          top: '59%',
          width: 500,
          opacity: 0.9,
          zIndex: 4
        }}
      />

      {/* Competition (deeper root) */}
      <img
        src={competition}
        alt="Competition"
        style={{
          position: 'absolute',
          left: '37%',
          top: '71%',
          width: 550,
          opacity: 0.9,
          zIndex: 4
        }}
      />

       {/* Arrow pointing upward toward tree */}
      <img
        src={arrow}
        alt=""
        style={{
          position: 'absolute',
          left: "52%",
          top: '83%',   // adjust this
          width: 90,
          opacity: 0.85,
          transform: "scaleX(0.5), scaleY(0.6)",
          zIndex: 1
        }}
      />

      {/* Arrow pointing upwards from rank*/}
    <img
        src={arrow}
        alt=""
        style={{
          position: 'absolute',
          left: "52%",
          top: '63%',   // adjust this
          width: 85,
          opacity: 0.85,
          transform: "scaleX(2), scaleY(0.6)",
          zIndex: 1,
        }}
      />
    </div>
  )
}