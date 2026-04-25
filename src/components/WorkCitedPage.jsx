const placeholderEntries = [
  'Hanson, Melanie. “Student Loan Debt by Income Level [2026]: Data Analysis.” Education Data Initiative, 2026, educationdata.org/student-loan-debt-by-income-level.',
  'Miller, Lois, and Minseon Park. “Making College Affordable? The Impacts of Tuition Freezes and Caps.” Economics of Education Review, vol. 89, Aug. 2022, p. N.PAG. EBSCOhost, https://doi-org.proxy2.library.illinois.edu/10.1016/j.econedurev.2022.102265.',
  'Khan, Jon Marcus, Fazil. “Why Are Wealthier Students Getting Lower Prices than Their Low-Income Peers?” The Hechinger Report, 27 Mar. 2023, hechingerreport.org/colleges-are-raising-prices-faster-on-their-lower-income-than-their-higher-income-students/',
  'The Bankers. “Interview Part I: Advisor on the Rising Cost of College.” Bankers Anonymous, 10 Mar. 2014, www.bankers-anonymous.com/audio/interview-counselor-on-the-rising-cost-of-college/.',
  'Brancaccio, David. “Inside One Family’s Journey to Find an Affordable College.” Marketplace.org, 2021, www.marketplace.org/story/2021/01/27/finding- affordable-college-merit-scholarship-need-based-aid-fafsa-full-tuition-ron-lieber.',
  'Nadworny, Elissa. “College Costs Have Risen Dramatically in the Last 20 Years. Here’s Why.” NPR, 20 Nov. 2025, www.npr.org/2025/11/20/nx-s1-5600854/college-costs-have-risen-dramatically-in-the-last-20-years-heres-why.',
  'Quigley, Alex. “University of Illinois System News.” Uillinois.edu, 2025, news.uillinois.edu/view/7815/136553460.',
  'Pavlov, O. V., & Katsamakas, E. (2023). Tuition too high? Blame competition. Journal of Economic Behavior & Organization, 213, 409–431. https://doi-org.proxy2.library.illinois.edu/10.1016/j.jebo.2023.07.030',
]

function renderEntryWithFinalLink(text) {
  const lastCommaIndex = text.lastIndexOf(',')

  if (lastCommaIndex === -1) {
    return text
  }

  const plainText = text.slice(0, lastCommaIndex + 1)
  const linkText = text.slice(lastCommaIndex + 1)
  const linkMatch = linkText.match(/(?:https?:\/\/|www\.|[a-z0-9-]+\.[a-z]{2,})\S*/i)

  if (!linkMatch) {
    return text
  }

  const cleanLink = linkMatch[0].replace(/[.),]+$/, '')
  const href = cleanLink.startsWith('http') ? cleanLink : `https://${cleanLink}`

  return (
    <>
      {plainText}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          color: '#7a4b2a',
          fontWeight: 700,
          textDecoration: 'underline',
          overflowWrap: 'anywhere',
        }}
      >
        {linkText}
      </a>
    </>
  )
}

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
            Work Cited
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: '2rem',
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#2f2520',
            }}
          >
            If you want to learn more on this topic, check out these sources:
          </h1>
        </div>

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
              {renderEntryWithFinalLink(entry)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
