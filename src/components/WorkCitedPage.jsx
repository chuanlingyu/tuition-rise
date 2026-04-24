const placeholderEntries = [
  'Author Last Name, First Name. "Title of Article." Website or Publisher, Date, URL.',
  'Author Last Name, First Name. "Title of Interview or Report." Publication, Date, URL.',
  'Organization Name. "Title of Data or Chart." Website, Date, URL.',
]

export default function WorkCitedPage() {
  return (
    <section
      style={{
        width: '100%',
        padding: '48px 24px 64px',
        background: 'linear-gradient(180deg, #f7f0e4 0%, #efe3d0 100%)',
        color: '#2f2520',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 'min(920px, 100%)',
          margin: '0 auto',
          padding: '32px',
          border: '3px solid #2f2520',
          borderRadius: 24,
          background: 'rgba(255, 250, 241, 0.94)',
          boxShadow: '0 20px 50px rgba(47, 37, 32, 0.16)',
          textAlign: 'left',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            marginBottom: 24,
            paddingBottom: 18,
            borderBottom: '2px solid rgba(47, 37, 32, 0.14)',
          }}
        >
          <div
            style={{
              marginBottom: 8,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#7a4b2a',
            }}
          >
            Reference Section
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              lineHeight: 1.05,
              color: '#2f2520',
            }}
          >
            Works Cited
          </h1>
        </div>

        <p
          style={{
            marginBottom: 24,
            fontSize: 17,
            lineHeight: 1.7,
            color: '#5b4635',
          }}
        >
          This page is ready for your citation list. You can replace the placeholder
          entries below with MLA-style sources for the infographic.
        </p>

        <div
          style={{
            display: 'grid',
            gap: 16,
          }}
        >
          {placeholderEntries.map((entry) => (
            <div
              key={entry}
              style={{
                padding: '16px 18px',
                borderRadius: 16,
                border: '1px solid rgba(47, 37, 32, 0.14)',
                background: 'rgba(255, 255, 255, 0.74)',
                fontSize: 16,
                lineHeight: 1.75,
              }}
            >
              {entry}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
