import inflationChart from '../assets/chart/inflation.png'
import adsChart from "../assets/chart/UIUC-aids-ad.png"
import aidChart from "../assets/chart/UIUC-financial-aid.png"
import loanChart from "../assets/chart/loan-chart.png"
import midChart from "../assets/chart/middle-class-chart.png"

const PANEL_CONTENT = {
  leftStudent: {
    // Add a chart image later like: image: '/charts/left-student-chart.png',
    // and optionally: imageAlt: 'Debt growth chart for students',
    title: 'Student Story',
    heading: 'Leaving with more pressure than promise',
    summary:
      "This larger window gives the departing student enough space for a fuller story, visuals, and supporting evidence about debt, stress, and the cost of chasing opportunity.",
    quote:
      '"I wanted the tree to mean opportunity, but the path kept getting more expensive."',
    bullets: [
      'Debt grows faster than confidence.',
      'Family support does not erase rising costs.',
      'This side can hold your claim, quote, or citations.',
    ],
    visualText:
      "Use this section for a debt graph, a short timeline, or any visual proof that supports the student's experience.",
    cards: [
      'Add a debt stat here.',
      'Add a student quote here.',
      'Add a takeaway here.',
    ],
    theme: {
      background: 'linear-gradient(180deg, #fffdf6 0%, #f5ead8 100%)',
      header: '#7a4b2a',
      accent: 'rgba(122, 75, 42, 0.08)',
      dashed: 'rgba(122, 75, 42, 0.35)',
      tileA: 'rgba(122, 75, 42, 0.09)',
      tileB: 'rgba(122, 75, 42, 0.14)',
      cardA: 'rgba(122, 75, 42, 0.07)',
      cardB: 'rgba(122, 75, 42, 0.11)',
      cardC: 'rgba(122, 75, 42, 0.15)',
    },
  },
  parentAssist: {
    image: midChart,
    imageAlt: 'Chart on the tuition increase for middle class families',
    sourceText: 'The shift in tuition price comparing to other costs for middle class families from 1999 to 2019 according to data from the college board: https://allaccess.collegeboard.org/affordability-and-todays-middle-income-families',
    title: 'Parents struggling to push their children to reach the tree top -- struggling to pay for the college cost',
    heading: 'Enormous Financial Burden on Middle-class families',
    summary: [      
      'Most middle class families, who are also in need of financial assistant for paying the tuition, are neglected from the aid system. ',
    ], 
    quote: '"Many students whose families are of higher income have reported not being afforded enough help with financial aid." -- Report from The Daily Illini (Mei)',
    bullets: [
      'The merit-based scholarship systems fund only the top applicants, leaving out the majority of students and families, and have only a slight impact on the overall financial need.',
      'In an interview with the Perrault family by the Marketplace Podcast, their daughter doesn\'t qualify for "most need-based financial aid", as with "most middle-class families", because they earn more than the bar. Nevertheless, they also “don\'t make enough money to pay full tuition" (Brancaccio).',
      'They seek merit-based scholarships, but these are “even more competitive than applying to Ivy League” with “3,000 applicants but only 15 spots” (Brancaccio).'
    ],
    visualText: 'Shift in cost for middle-class families with college tuition leading',
    cards: [
      'Add a support stat here.',
      'Add a family quote here.',
      'Add a takeaway here.',
    ],
    theme: {
      background: '#fdf7ec',
      header: '#6d553f',
      accent: 'rgba(109, 85, 63, 0.08)',
      dashed: 'rgba(109, 85, 63, 0.35)',
      tileA: 'rgba(109, 85, 63, 0.09)',
      tileB: 'rgba(109, 85, 63, 0.14)',
      cardA: 'rgba(109, 85, 63, 0.07)',
      cardB: 'rgba(109, 85, 63, 0.11)',
      cardC: 'rgba(109, 85, 63, 0.15)',
    },
  },
  leftClimb: {
    image: loanChart,
    imageAlt: 'Percentage of Loan in income',
    sourceText: "% of college loan compared to the family income. Data from Education Data Initiative: https://sherwood.news/world/cost-of-education-keeps-going-up/",
    title: 'Climb Window',
    heading: 'Climbing means carrying the cost upward',
    summary:
      'Clicking either the student or the money pile opens this same larger window, so you can add a fuller explanation, charts, and evidence without fighting the tiny panel space.',
    quote: '"The climb is not just effort. It is effort plus cost."',
    bullets: [
      'Student labor and money pressure stay tied together.',
      'This side can hold your summary, quote, or citations.',
      'It now has enough room to support denser information.',
    ],
    visualText:
      'Use this larger section for charts, timelines, screenshots, or any other visual evidence you want to place in the window.',
    cards: [
      'Add a tuition trend here.',
      'Add a debt comparison here.',
      'Add a short takeaway here.',
    ],
    theme: {
      background: '#fff8ee',
      header: '#7a4b2a',
      accent: 'rgba(122, 75, 42, 0.08)',
      dashed: 'rgba(122, 75, 42, 0.35)',
      tileA: 'rgba(122, 75, 42, 0.09)',
      tileB: 'rgba(122, 75, 42, 0.14)',
      cardA: 'rgba(122, 75, 42, 0.07)',
      cardB: 'rgba(122, 75, 42, 0.11)',
      cardC: 'rgba(122, 75, 42, 0.15)',
    },
  },
  ladder: {
     image: [
      adsChart,
      aidChart
    ],
    imageAlt: [
      'U of I system\'s advertisement on its financial aid',
      'Real percentage of students receiving financial aid in UIUC'
    ],
    sourceText: [
      'The amount of financial aid given out according to the U of I system: https://www.uillinois.edu/about/affordability',
      'Real percentage of students receiving financial aid in UIUC. \nData from BigFuture: \nhttps://bigfuture.collegeboard.org/colleges/university-of-illinois-at-urbana-champaign/tuition-and-costs',
    ],
    title: 'Financial Aid - An existed yet short ladder to reach college',
    heading: 'Limited Financial Aid to Students',
    summary:
      'This larger ladder window gives you room to explain access, support structures, and the uneven pathways that help some students move upward toward the tree.',
    quote: '',
    bullets: [
      'This box stays separate from the student and money pile.',
      'This side can hold your claim, quote, or citations.',
      'You can replace everything here with your own explanation.',
    ],
    visualText:
      'An example from UIUC, the ads verses the real percentage of student covered by the financial aid',
    cards: [
      'Add an access stat here.',
      'Add a pathway quote here.',
      'Add a takeaway here.',
    ],
    theme: {
      background: '#f7f3ea',
      header: '#5e4f3b',
      accent: 'rgba(94, 79, 59, 0.08)',
      dashed: 'rgba(94, 79, 59, 0.35)',
      tileA: 'rgba(94, 79, 59, 0.09)',
      tileB: 'rgba(94, 79, 59, 0.14)',
      cardA: 'rgba(94, 79, 59, 0.07)',
      cardB: 'rgba(94, 79, 59, 0.11)',
      cardC: 'rgba(94, 79, 59, 0.15)',
    },
  },
  dollar: {
    image: inflationChart,
    imageAlt: 'College cost trend chart',
    sourceText: 'Chart created using the data from the US Bureau of Labor Statistics: https://sherwood.news/world/cost-of-education-keeps-going-up/',
    title: 'College Build on a Dollar Tree -- Rising Tuition cost over the years',
    heading: 'College is not cheap anymore',
    summary:
      'Over the last twenty years, rising tuition has made colleges less affordable and exerted tremendous economic pressure on less wealthy families, forcing many students to reconsider their choice.',
    quote: '"It’s very hard to save that money, even if you start the day the child was born. That’s a very hard thing to prepare for." -- Julie, a College Advisor (The Banker)',
    bullets: [
      'With continuously rising tuition costs, attending specific colleges now requires reconsideration for many students and their families, as it may be harmful and not the most financially favorable option.',
      'According to data published by the US Bureau of Labor Statistics, overall inflation in the US from 1980 to 2022 was around 285%, while the inflation rate of college tuition and fees was around 1,246% (Crowther)'
    ],
    visualText:
      'Chart on inflation vs tuition rise.',
    cards: [
      '',
    ],
    theme: {
      background: '#fbf6e8',
      header: '#FAC678',
      accent: 'rgba(107, 90, 31, 0.08)',
      dashed: 'rgb(20, 159, 50)',
      tileA: 'rgba(107, 90, 31, 0.09)',
      tileB: 'rgba(107, 90, 31, 0.14)',
      cardA: 'rgba(107, 90, 31, 0.07)',
      cardB: 'rgba(107, 90, 31, 0.11)',
      cardC: 'rgba(107, 90, 31, 0.15)',
    },
  },
  treeWords: {
    // image: '/charts/tree-values-chart.png',
    // imageAlt: 'Amenities and institutional spending chart',
    title: 'Tree Values Window',
    heading: 'The tree grows around prestige and attraction',
    summary:
      'This shared window is for the images in TreeWords, so you can explain how amenities, faculty, research, and athletics shape what colleges promote around the idea of higher education.',
    quote:
      '"What surrounds the tree can make college look more desirable, but it can also raise the cost of reaching it."',
    bullets: [
      'These labels all point to the same broader set of institutional priorities.',
      'This side can hold your summary, quote, or citations.',
      'You can use this panel for how prestige features affect price and appeal.',
    ],
    visualText:
      'Use this section for spending comparisons, campus investment charts, or any visual evidence that connects these features to tuition and competition.',
    cards: [
      'Add an amenities stat here.',
      'Add a research or faculty stat here.',
      'Add a takeaway here.',
    ],
    theme: {
      background: '#eef4e7',
      header: '#516b3a',
      accent: 'rgba(81, 107, 58, 0.08)',
      dashed: 'rgba(81, 107, 58, 0.35)',
      tileA: 'rgba(81, 107, 58, 0.09)',
      tileB: 'rgba(81, 107, 58, 0.14)',
      cardA: 'rgba(81, 107, 58, 0.07)',
      cardB: 'rgba(81, 107, 58, 0.11)',
      cardC: 'rgba(81, 107, 58, 0.15)',
    },
  },
  rootWords: {
    // image: '/charts/root-words-chart.png',
    // imageAlt: 'Ranking and competition chart',
    title: 'Root Words Window',
    heading: 'The roots are driven by rank and competition',
    summary:
      'This shared window is for the images in RootWords, so you can explain how rank, competition, and the pressures underneath the tree feed into the visible system above ground.',
    quote:
      '"The roots are hidden, but they shape how the whole tree grows."',
    bullets: [
      'These root labels all point to the deeper forces under higher education.',
      'This side can hold your summary, quote, or citations.',
      'You can use this panel for rankings, competition, and institutional pressure.',
    ],
    visualText:
      'Use this section for ranking charts, admissions competition, or any visual evidence that explains what is happening below the surface.',
    cards: [
      'Add a ranking stat here.',
      'Add a competition stat here.',
      'Add a takeaway here.',
    ],
    theme: {
      background: '#efe7dc',
      header: '#6a4f39',
      accent: 'rgba(106, 79, 57, 0.08)',
      dashed: 'rgba(106, 79, 57, 0.35)',
      tileA: 'rgba(106, 79, 57, 0.09)',
      tileB: 'rgba(106, 79, 57, 0.14)',
      cardA: 'rgba(106, 79, 57, 0.07)',
      cardB: 'rgba(106, 79, 57, 0.11)',
      cardC: 'rgba(106, 79, 57, 0.15)',
    },
  },
  rightDebt: {
    // image: '/charts/right-debt-chart.png',
    // imageAlt: 'Debt outcomes after college chart',
    title: 'Debt Outcome Window',
    heading: 'Different endings still lead back to debt',
    summary:
      'This shared window is for the two images in RightDebt, so you can explain how students can leave the system in different ways but still carry the consequences of cost.',
    quote:
      '"Whether students fall short or graduate, debt can still follow them out."',
    bullets: [
      'These two figures share the same broader outcome around financial burden.',
      'This side can hold your summary, quote, or citations.',
      'You can use this panel for consequences after the climb.',
    ],
    visualText:
      'Use this section for debt-at-graduation data, dropout cost data, or any visual evidence that shows how expensive outcomes follow students beyond college.',
    cards: [
      'Add a graduation debt stat here.',
      'Add a non-completion stat here.',
      'Add a takeaway here.',
    ],
    theme: {
      background: '#f7ebe7',
      header: '#7b4c3a',
      accent: 'rgba(123, 76, 58, 0.08)',
      dashed: 'rgba(123, 76, 58, 0.35)',
      tileA: 'rgba(123, 76, 58, 0.09)',
      tileB: 'rgba(123, 76, 58, 0.14)',
      cardA: 'rgba(123, 76, 58, 0.07)',
      cardB: 'rgba(123, 76, 58, 0.11)',
      cardC: 'rgba(123, 76, 58, 0.15)',
    },
  },
}

export default function SharedInfoWindow({ panelKey, onClose }) {
  if (!panelKey) {
    return null
  }

  const panel = PANEL_CONTENT[panelKey]

  if (!panel) {
    return null
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: '20vw',
        top: '10vh',
        width: '68vw',
        height: '66vh',
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid #2f2520',
        borderRadius: 20,
        background: panel.theme.background,
        boxShadow: '0 28px 60px rgba(0, 0, 0, 0.28)',
        color: '#2f2520',
        overflow: 'hidden',
        zIndex: 200,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: panel.theme.header,
          color: '#fff8ec',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: '#f6d28b',
            }}
          />
          <span
            style={{
              color: panelKey === 'dollar' ? '#AE2448' : '#fff8ec',
            }}
          >
            {panel.title}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          style={{
            width: 28,
            height: 28,
            padding: 0,
            border: '1px solid rgba(255, 248, 236, 0.55)',
            borderRadius: 999,
            background: 'transparent',
            color: '#fff8ec',
            fontSize: 16,
            lineHeight: 1,
            cursor: 'pointer',
          }}
          aria-label="Close info window"
        >
          ×
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 18,
          flex: 1,
          minHeight: 0,
          padding: '18px 20px 20px',
          fontSize: 14,
          lineHeight: 1.45,
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            {panel.heading}
          </div>

          <div
            style={{
              color: '#5b4635',
            }}
          >
            {panel.summary}
          </div>

          <div
            style={{
              padding: '12px 14px',
              borderRadius: 12,
              background: panel.theme.accent,
              fontStyle: 'italic',
            }}
          >
            {panel.quote}
          </div>

          <div
            style={{
              display: 'grid',
              gap: 8,
            }}
          >
            {panel.bullets.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              minHeight: 260,
              border: `2px dashed ${panel.theme.dashed}`,
              borderRadius: 16,
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(244, 232, 212, 0.9) 100%)',
              padding: 18,
            }}
            >
              <div
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                fontWeight: 800,
              }}
            >
              Charts
            </div>
            <div
              style={{
                marginBottom: 14,
                color: '#5b4635',
              }}
              >
                {panel.visualText}
              </div>
              {Array.isArray(panel.image) ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 16,
                  }}
                >
                  {panel.image.map((imageSrc, index) => (
                    <div key={`${panel.title}-${index}`}>
                      <img
                        src={imageSrc}
                        alt={
                          Array.isArray(panel.imageAlt)
                            ? panel.imageAlt[index] || `${panel.title} chart ${index + 1}`
                            : `${panel.title} chart ${index + 1}`
                        }
                        style={{
                          width: '100%',
                          maxHeight: 320,
                          objectFit: 'contain',
                          display: 'block',
                          borderRadius: 12,
                          background: 'rgba(255, 255, 255, 0.65)',
                        }}
                      />
                      <div
                        style={{
                          marginTop: 10,
                          minHeight: 28,
                          padding: '6px 10px',
                          borderRadius: 8,
                          background: 'rgba(255, 255, 255, 0.6)',
                          color: '#5b4635',
                          fontSize: 12,
                          lineHeight: 1.35,
                        }}
                      >
                        {Array.isArray(panel.sourceText)
                          ? panel.sourceText[index] || 'Source link:'
                          : 'Source link:'}
                      </div>
                    </div>
                  ))}
                </div>
              ) : panel.image ? (
                <>
                  <img
                    src={panel.image}
                    alt={panel.imageAlt || `${panel.title} chart`}
                    style={{
                      width: '100%',
                      maxHeight: 320,
                      objectFit: 'contain',
                      display: 'block',
                      borderRadius: 12,
                      background: 'rgba(255, 255, 255, 0.65)',
                    }}
                  />
                  <div
                    style={{
                      marginTop: 10,
                      minHeight: 28,
                      padding: '6px 10px',
                      borderRadius: 8,
                      background: 'rgba(255, 255, 255, 0.6)',
                      color: '#5b4635',
                      fontSize: 12,
                      lineHeight: 1.35,
                    }}
                  >
                    {panel.sourceText || 'Source link:'}
                  </div>
                </>
              ) : (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      minHeight: 140,
                      borderRadius: 12,
                      background: panel.theme.tileA,
                    }}
                  />
                  <div
                    style={{
                      minHeight: 140,
                      borderRadius: 12,
                      background: panel.theme.tileB,
                    }}
                  />
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
