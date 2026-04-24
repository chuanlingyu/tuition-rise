import solutionChart from '../assets/chart/solution.png'

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
          Possible Solutions?
        </div>

        <h2
          style={{
            margin: '0 0 14px',
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            color: '#2f2520',
            textAlign: 'center',
          }}
        >
          Diversify the current ranking system
        </h2>

        <p
          style={{
            maxWidth: 1200,
            fontSize: 18,
            lineHeight: 1.6,
            color: '#5b4635',
            textAlign: 'center',
          }}
        >
          As a bottomless pit, increasing income for colleges could only temporarily halt rising tuition; however, a ranking system in some form is likely to persist because there is no other uniform, quick, and seemingly unbiased way to measure colleges. 

        </p>

        <p
          style={{
            maxWidth: 1200,
            fontSize: 18,
            lineHeight: 1.6,
            color: '#5b4635',
            textAlign: 'center',
          }}
        >
          One possible solution, is to reform the ranks and awarding colleges based on specific strengths rather than overspending on all dimensions. 

        </p>

        <img
          src={solutionChart}
          alt="Solution chart"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: 600,
            margin: '28px auto 0',
            borderRadius: 16,
          }}
        />

        <p
          style={{
            maxWidth: 1200,
            fontSize: 18,
            lineHeight: 1.6,
            color: '#5b4635',
            textAlign: 'center',
          }}
        >
          The new system needs to uncover the hidden differences among colleges and highlight colleges’ unique strengths. It would incentivize students to understand their specific needs rather than choosing higher-ranking schools that may not be the best fit for them. Once students make choices based on the new system, colleges will be encouraged to follow the new standard and focus on their uniqueness rather than overinvesting in all dimensions. 

        </p>

      </div>
    </section>
  )
}
