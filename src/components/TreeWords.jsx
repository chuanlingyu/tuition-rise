import amenityImg from '../assets/text/amenity.png'
import facultyImg from '../assets/text/faculty.png'
import researchImg from '../assets/text/research.png'
import athleticImg from '../assets/text/athletic.png'

export default function TreeWords() {
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
      }}
    >
      {/* words on tree */}
      <img
        src={amenityImg}
        alt="Amenity"
        style={{
          position: 'absolute',
          left: 650,
          top: 320,
          width: 190,
        }}
      />

      <img
        src={facultyImg}
        alt="Faculty"
        style={{
          position: 'absolute',
          left: 650,
          top: 265,
          width: 190,
        }}
      />

      <img
        src={researchImg}
        alt="Research"
        style={{
          position: 'absolute',
          left: 660,
          top: 220,
          width: 170,
        }}
      />

      <img
        src={athleticImg}
        alt="Athletic"
        style={{
          position: 'absolute',
          left: 659,
          top: 170,
          width: 170,
        }}
      />
    </div>
  )
}