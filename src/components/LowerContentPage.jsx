export default function LowerContentPage() {
  return (
    <section
      style={{
        minHeight: '100svh',
        padding: '72px 8vw',
        boxSizing: 'border-box',
        background:
          'linear-gradient(180deg, #efe4d1 0%, #f7f1e6 18%, #fbf8f1 100%)',
        borderTop: '4px solid #2f2520',
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '36px',
          border: '2px dashed rgba(47, 37, 32, 0.35)',
          borderRadius: 24,
          background: 'rgba(255, 250, 242, 0.88)',
          color: '#2f2520',
          textAlign: 'left',
          boxShadow: '0 20px 40px rgba(47, 37, 32, 0.08)',
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#7a4b2a',
            marginBottom: 12,
          }}
        >
          Lower Page
        </div>

        <h2
          style={{
            margin: '0 0 14px',
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            color: '#2f2520',
          }}
        >
          Scroll down here to add more content
        </h2>

        <p
          style={{
            maxWidth: 720,
            fontSize: 18,
            lineHeight: 1.6,
            color: '#5b4635',
          }}
        >
          This section is separate from the infographic scene above, so you can
          place longer text, sources, or additional content here without
          changing the current absolute-positioned layout.
        </p>
      </div>
    </section>
  )
}
