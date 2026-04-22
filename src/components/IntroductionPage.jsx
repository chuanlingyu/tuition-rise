export default function IntroductionPage() {
  return (
    <section
      style={{
        minHeight: '100svh',
        padding: '72px 8vw',
        boxSizing: 'border-box',
        background:
          'linear-gradient(180deg, #f7efe1 0%, #ead7b8 52%, #dec497 100%)',
        borderBottom: '4px solid #2f2520',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: '0 auto',
          padding: '44px',
          border: '2px solid rgba(47, 37, 32, 0.28)',
          borderRadius: 28,
          background: 'rgba(255, 248, 238, 0.9)',
          color: '#2f2520',
          textAlign: 'left',
          boxShadow: '0 24px 50px rgba(47, 37, 32, 0.12)',
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#7a4b2a',
            marginBottom: 14,
          }}
        >
          Introduction
        </div>

        <h1
          style={{
            margin: '0 0 18px',
            fontSize: 'clamp(2.8rem, 5vw, 5rem)',
            lineHeight: 0.95,
            fontWeight: 900,
            color: '#2f2520',
          }}
        >
          The Cost of Reaching Higher Education
        </h1>

        <p
          style={{
            maxWidth: 760,
            fontSize: 20,
            lineHeight: 1.65,
            color: '#5b4635',
            marginBottom: 22,
          }}
        >
          This introduction page gives you space for your thesis, opening
          context, and a short explanation before the viewer scrolls into the
          infographic scene below.
        </p>

        <div
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            borderRadius: 999,
            border: '1px solid rgba(47, 37, 32, 0.2)',
            background: 'rgba(122, 75, 42, 0.08)',
            color: '#7a4b2a',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.03em',
          }}
        >
          Scroll down to enter the infographic
        </div>
      </div>
    </section>
  )
}
