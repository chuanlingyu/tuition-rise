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
          color: '#F2E6B8',
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
            color: '#C0392B',
            marginBottom: 14,
          }}
        >
          The Cost that Block the Dream --
        </div>

        <h1
          style={{
            margin: '0 0 18px',
            fontSize: 'clamp(3rem, 1vw, 1rem)',
            lineHeight: 0.95,
            fontWeight: 900,
            color: '#2f2520',
            maxWidth: 1200,
          }}
        >
          The Rising Tuition and College Cost in America
        </h1>

        <p
          style={{
            maxWidth: 1100,
            fontSize: 20,
            lineHeight: 1.65,
            color: '#5b4635',
            marginBottom: 22,
          }}
        >
          For many students, such as Chase Brown, a junior at Rice University, they believed that education could be a great equalizer of wealth and opportunity, since thats the path of their parents and grandparents to achieve their dream (Khan). However, the path many believe in is gradually becoming more expensive nowadays…

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
          Scroll down...
        </div>
      </div>
    </section>
  )
}
