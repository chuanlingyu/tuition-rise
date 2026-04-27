import { useEffect, useState } from 'react'
import inflationChart from '../assets/chart/inflation.png'
import adsChart from "../assets/chart/UIUC-aids-ad.png"
import aidChart from "../assets/chart/UIUC-financial-aid.png"
import loanChart from "../assets/chart/loan-chart.png"
import midChart from "../assets/chart/middle-class-chart.png"
import notAttendChart from "../assets/chart/not-attending.png"
import federalChart from "../assets/chart/federal-private-loan.png"
import loanIncreaseChart from "../assets/chart/loan-increase.png"
import recordChart from "../assets/chart/record-enroll.png"
import closureChart from "../assets/chart/closure.png"
import qsChart from "../assets/chart/QSRank.png"
import usChart from "../assets/chart/USNews.png"
import expendRiseChart from '../assets/chart/expenditure-rise.png'
import expendPerChart from '../assets/chart/spending-percentage.png'

const PANEL_CONTENT = {
  leftStudent: {
    image: notAttendChart,
    imageAlt: 'Top reasons for students not attending their first choice college',
    sourceText: 'According to the data and research conducted by cooperative institutional research program at the higher education research institute at UCLA: https://www.heri.ucla.edu/monographs/TheAmericanFreshman2013.pdf',
    title: 'Students leaving - Unaffordable colleges barred students away',
    heading: 'Students Reconsidering Attending Dream Colleges because of the High Cost',
    summary:
      "Many students reconsidered and decided not to enrolled in their dream colleges because of high cost that they don't want to afford.",
    quote:
      '"I believe my husband and I had already done their job as parents for our children". -- Mrs. Perrault (Brancaccio)',
    bullets: [
      'When Mrs. Perrault\'s eldest daughter was accepted into Duke University, Mrs. Perrault turned her daughter down because her family could not afford the cost since it would cover around 40% of their take-home pay.',
      'Her daughter was initially mad and slammed the door but later accepted the reality and chose another college where she won an intense competition for a scholarship (Brancaccio)',
      'Miguel Agyei wanted to go to a school away from his home state of Illinois, but as the son of parents who work at a hospital and for UPS, that was too expensive. He instead picked close-by Bradley University and worked during the summer to pay the costs his financial aid didn’t cover. (Khan)',
    ],
    visualText:
      "Top reasons why students not choosing their first choice after being accepted",
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
    sourceText: "Data from Education Data Initiative: https://sherwood.news/world/cost-of-education-keeps-going-up/",
    title: 'Piling money - Students from lower income families works extensively to pay for the college tuition',
    heading: 'Overworking for the students from lower-income families',
    summary:
      '	According to the Education Data Initiative, because their incomes are lower, the loan debt for students with incomes of $31k-54k still equal to 53.8% of their annual income, a rate even higher than that of middle-class families (Hanson). Consequently, students with lower incomes who still decide to attend those colleges often need to work long hours in jobs and programs outside of classes to help pay off debt.',
    quote: '“It was very, very stressful. I would go to practice, go to class, work five or six hours, do my homework, go to bed and get up and do it again.” -- Miguel Agyei, Student at Bradley University (Khan)',
    bullets: [
      'For instance, Miguel Agyei, who borrowed $25,000, runs as a college athlete with scholarships, takes five-day jobs, and balances his academic studies in order to pay for the debt. (Khan)',
      'The overwork between school and workplaces not only hinders them from focusing on their academic courses, but also consistent stress that could lead to over-exhaustion and potential mental problems.',
    ],
    visualText:
      '% of college loan compared to the household income for different income levels.',
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
      [      'Many colleges, such as UIUC, advertise substantial financial aid that appears sufficient to cover costs. Yet, despite the large numbers, the current funding system is limited in scope and does not apply to most applicants, making it insufficient to ease the overall financial burden.'],
    quote: 'According to data by Big Future, only 43.33% of students received financial aid, and most of it was centralized for in-state lower-income students.',
    bullets: [
      'Especially, when facing policies such that tuition cap, colleges often reduce their institutional aid, which is not regulated by state law, by 19.5% compared to the projected level. As a result, colleges are “almost completely compensating” for the loss (Miller 2). It is devastating for lower-income students who rely on financial aid for their funding (Miller 16). ',
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
    title: 'College Build on a Dollar Tree - Rising Tuition cost over the years',
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
    image: [
      expendRiseChart,
      expendPerChart
    ],
    imageAlt: [
      'Rise in college expenditure across different areas over the years',
      'Percentage of expenditure of colleges in different areas'
    ],
    sourceText: [
      'Data from the Federal Reverse Bank of Cleveland: https://www.clevelandfed.org/publications/economic-commentary/2016/ec-201610-trends-in-expenditures-by-us-colleges-and-universities',
      'Data from the National Center of Education Statistics: https://nces.ed.gov/fastfacts/display.asp?id=75'
    ],
    title: 'Words on the Tree - Components to College Expenditures',
    heading: 'Excessive Spending in all Areas leads to Higher Expenditures',
    summary:
      'Under an intense competition that revolves around a multidimensional ranking system, to boost their overall reputation among students, colleges need to excel in many dimensions rather than focusing on their strengths that are not valued in the ranking system.',
    quote:
      '"Universities go into significant debt in order to invest in new buildings as a strategy to boost enrollments" --Economic professor Oleg Pavlov (Pavlov 413)',
    bullets: [
      'As shown, the ranking system incentivizes beneficiary colleges to continue increasing spending to win more, while other colleges, to survive, would also increase spending to climb higher in the ranks.',
      'For students, only a portion of the tuition they pay is invested in areas they actually need, while the rest is allocated to areas others care about.',
    ],
    visualText:
      'Percentage of increase in college expenditure across different areas over the years',
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
  rank: {
    image: [
      qsChart,
      usChart
    ],
    imageAlt: [
      'Icon of QS Ranking',
      'Icon of US News College Ranking'
    ],
    sourceText: [
      'QS Ranking Icon: https://mma.prnewswire.com/media/1503777/QS_World_University_Rankings_Logo.jpg?p=facebook',
      'US News Ranking Icon: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61wHEm1HV_Ahuv7lwMFlE4GJrjXeL6IYDeQ&s'
    ],
    title: 'Ranking System - Catalyst of Rising Tuition',
    heading: 'Ranking Systems Push Colleges to Spend More to Compete',
    summary: 'In America, there are no standardized ways to measure colleges. Thus, the ranking systems become the only scale that appear to be scientifically unbiased. However, the ranks hide colleges\' specific strengths and replace them with a broader ranking system.',
    quote:
      '"The public values very heterogeneous dimensions of the college, including price, distance, consumption, amenities, academics, and more" -- Economic and public policy professor Jacob (Jacob 37).',
    bullets: [
      'Combining with the broad ranking system, students are swayed to choose colleges with higher overall rankings rather than those that target their specific interests, which further reinforces the situation',
      'It shifts the goal of public education from balancing educational quality and affordability to solely focusing on what the ranking system cares about.'
    ],
    visualText:
      'Use this section for ranking charts, prestige indicators, or evidence showing how ranking systems influence college pricing.',
    cards: [
      'Add a ranking stat here.',
      'Add a ranking quote here.',
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
  competition: {
    image: [
      recordChart,
      closureChart
    ],
    imageAlt: [
      'New record in freshment enrollment in UIUC at 2025',
      'Chart on the amount of college closure over the last 15 years.'
    ],
    sourceText: [
      'Data released by the U of I system: https://news.uillinois.edu/view/7815/136553460',
      'Chart created by The Hechinger Report: https://hechingerreport.org/tracking-college-closures/',
    ],
    title: 'Intense Competition -- The Root Cause of the issue',
    heading: 'Colleges are within a Competition for Survival',
    summary:
      'The education sector is a “winner takes all” system, a positive feedback loop where universities with better reputations would continue to have access to better students, stronger faculty and more external funding, while the ones with lower reputation face the threat of collapse.',
    quote:
      '“This is a business. It’s not for profit, but we have to keep the lights on. We have to build a model that’s sustainable.” -- Steve Thorsett, president of Willamette University (Marcus)',
    bullets: [
      'The University of Illinois System, a large and higher-ranking institution, reached record-high freshman enrollment in 2025 with a “9% increase over 2024” (Quigley).',
      'At the same time, overall enrollment across American colleges has declined, and some institutions shut down each year under competitive pressure (Pavlov 413).',
    ],
    visualText:
      'Record freshment enrollment of U of I and the chart of college closure over the last 15 years.',
    cards: [
      'Add a competition stat here.',
      'Add an enrollment quote here.',
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
    image: [
      loanIncreaseChart,
      federalChart,
    ],
    imageAlt: [
      'Chart showing the rising trend of the national student loan per year',
      'Chart showing the amount of increase and decrease in federal vs private loans per year'
    ],
    sourceText: [
      'Chart from the Education Data Initiative: https://educationdata.org/student-loan-debt-statistics',
      'Chart from the Education Data Initiative: https://educationdata.org/student-loan-debt-statistics'
    ],
    title: 'Debt for students straight out of college',
    heading: 'Financial Burden Keeps on after College',
    summary:
      '',
    quote:
      'As reported by NPR, student debt owed by Americans has more than tripled to roughly $1.6 trillion since 2007 (Nadworny).',
    bullets: [
      'As shown in other pages, colleges costs nowadays are taking a large portion of the family incomes. Without sufficient financial aid, students would often need to take loans from either the federal or private institutions. However, it would be a major financial burden right out of college.',
      'Some colleges may "help arrange for the kid to borrow 15,000 or 20,000 dollars or even more", but Julie believes this would be an unbearable financial burden for students right out of college (The Banker).',
    ],
    visualText:
      'Rising student loans over the years',
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

function renderTextWithLinks(text) {
  return text.split(/(https?:\/\/\S+)/g).map((part, index) => {
    const isLink = part.startsWith('http://') || part.startsWith('https://')

    if (!isLink) {
      return part
    }

    return (
      <a
        key={`${part}-${index}`}
        href={part}
        target="_blank"
        rel="noreferrer"
        style={{
          color: '#9C3528',
          fontWeight: 700,
          textDecoration: 'underline',
        }}
      >
        {part}
      </a>
    )
  })
}

const SHARED_WINDOW_COLORS = {
  background: '#EFE7DA',
  topbar: '#B89B72',
  title: '#241B18',
  body: '#4A3B32',
  accentRed: '#9C3528',
  border: 'rgba(90,70,45,0.15)',
}

export default function SharedInfoWindow({ panelKey, onClose }) {
  const [zoomedImage, setZoomedImage] = useState(null)
  const [displayedPanelKey, setDisplayedPanelKey] = useState(panelKey)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (panelKey) {
      setDisplayedPanelKey(panelKey)
      setIsClosing(false)
      return undefined
    }

    if (!displayedPanelKey) {
      return undefined
    }

    setIsClosing(true)
    const closeTimer = window.setTimeout(() => {
      setDisplayedPanelKey(null)
      setIsClosing(false)
    }, 220)

    return () => window.clearTimeout(closeTimer)
  }, [panelKey, displayedPanelKey])

  useEffect(() => {
    if (!zoomedImage) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setZoomedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [zoomedImage])

  if (!displayedPanelKey) {
    return null
  }

  const panel = PANEL_CONTENT[displayedPanelKey]

  if (!panel) {
    return null
  }

  const openZoomedImage = (src, alt) => {
    setZoomedImage({ src, alt, panelKey: displayedPanelKey })
  }

  return (
    <>
      <div
      className={`shared-info-window ${isClosing ? 'is-closing' : 'is-opening'}`}
      style={{
        position: 'absolute',
        left: '20vw',
        top: '10vh',
        width: '68vw',
        height: '66vh',
        display: 'flex',
        flexDirection: 'column',
        border: `3px solid ${SHARED_WINDOW_COLORS.border}`,
        borderRadius: 20,
        background: SHARED_WINDOW_COLORS.background,
        boxShadow: '0 28px 60px rgba(0, 0, 0, 0.28)',
        color: SHARED_WINDOW_COLORS.body,
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
          background: SHARED_WINDOW_COLORS.topbar,
          color: SHARED_WINDOW_COLORS.title,
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
              background: SHARED_WINDOW_COLORS.accentRed,
            }}
          />
          <span
            style={{
              color: SHARED_WINDOW_COLORS.title,
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
            border: `1px solid ${SHARED_WINDOW_COLORS.border}`,
            borderRadius: 999,
            background: 'transparent',
            color: SHARED_WINDOW_COLORS.title,
            fontSize: 16,
            lineHeight: 1,
            cursor: 'pointer',
            outline: 'none',
          }}
          aria-label="Close info window"
        >
          ×
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
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
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1.15,
              color: SHARED_WINDOW_COLORS.title,
            }}
          >
            {panel.heading}
          </div>

          <div
            style={{
              color: SHARED_WINDOW_COLORS.body,
            }}
          >
            {panel.summary}
          </div>

          <div
            style={{
              padding: '12px 14px',
              borderRadius: 12,
              background: 'rgba(184, 155, 114, 0.18)',
              fontStyle: 'italic',
              color: SHARED_WINDOW_COLORS.accentRed,
            }}
          >
            {panel.quote}
          </div>

          <div
            style={{
              display: 'grid',
              gap: 8,
              color: SHARED_WINDOW_COLORS.body,
            }}
          >
            {panel.bullets.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div
          style={{
            minWidth: 0,
          }}
        >
          <div
            style={{
              minHeight: 260,
              border: `2px dashed ${SHARED_WINDOW_COLORS.border}`,
              borderRadius: 16,
              background:
                'linear-gradient(180deg, rgba(239, 231, 218, 0.86) 0%, rgba(184, 155, 114, 0.18) 100%)',
              padding: 18,
            }}
            >
              <div
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                fontWeight: 800,
                color: SHARED_WINDOW_COLORS.title,
              }}
            >
              Chart
            </div>
            <div
              style={{
                marginBottom: 14,
                color: SHARED_WINDOW_COLORS.body,
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
                    minWidth: 0,
                  }}
                >
                  {panel.image.map((imageSrc, index) => (
                    <div
                      key={`${panel.title}-${index}`}
                      style={{
                        minWidth: 0,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          openZoomedImage(
                            imageSrc,
                            Array.isArray(panel.imageAlt)
                              ? panel.imageAlt[index] || `${panel.title} chart ${index + 1}`
                              : `${panel.title} chart ${index + 1}`,
                          )
                        }
                        style={{
                          width: '100%',
                          padding: 0,
                          border: 0,
                          borderColor: 'transparent',
                          background: 'transparent',
                          cursor: 'zoom-in',
                          display: 'block',
                          outline: 'none',
                          outlineOffset: 0,
                          boxShadow: 'none',
                          appearance: 'none',
                          WebkitAppearance: 'none',
                        }}
                        aria-label={`View larger ${
                          Array.isArray(panel.imageAlt)
                            ? panel.imageAlt[index] || `${panel.title} chart ${index + 1}`
                            : `${panel.title} chart ${index + 1}`
                        }`}
                        title="Click to enlarge"
                      >
                        <img
                          src={imageSrc}
                          alt={
                            Array.isArray(panel.imageAlt)
                              ? panel.imageAlt[index] || `${panel.title} chart ${index + 1}`
                              : `${panel.title} chart ${index + 1}`
                          }
                          style={{
                            width: '100%',
                            maxHeight: displayedPanelKey === 'rank' ? 96 : 320,
                            objectFit: 'contain',
                            display: 'block',
                            borderRadius: 12,
                            background: 'rgba(239, 231, 218, 0.7)',
                          }}
                        />
                      </button>
                      <div
                        style={{
                          marginTop: 10,
                          minHeight: 28,
                          padding: displayedPanelKey === 'rank' ? '5px 8px' : '6px 10px',
                          borderRadius: 8,
                          background: 'rgba(239, 231, 218, 0.7)',
                          color: SHARED_WINDOW_COLORS.body,
                          fontSize: displayedPanelKey === 'rank' ? 10 : 12,
                          lineHeight: displayedPanelKey === 'rank' ? 1.2 : 1.35,
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                        }}
                      >
                        {renderTextWithLinks(
                          Array.isArray(panel.sourceText)
                            ? panel.sourceText[index] || 'Source link:'
                            : 'Source link:',
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : panel.image ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      openZoomedImage(panel.image, panel.imageAlt || `${panel.title} chart`)
                    }
                    style={{
                      width: '100%',
                      padding: 0,
                      border: 0,
                      borderColor: 'transparent',
                      background: 'transparent',
                      cursor: 'zoom-in',
                      display: 'block',
                      outline: 'none',
                      outlineOffset: 0,
                      boxShadow: 'none',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                    }}
                    aria-label={`View larger ${panel.imageAlt || `${panel.title} chart`}`}
                    title="Click to enlarge"
                  >
                    <img
                      src={panel.image}
                      alt={panel.imageAlt || `${panel.title} chart`}
                      style={{
                        width: '100%',
                        maxHeight: 320,
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: 12,
                        background: 'rgba(239, 231, 218, 0.7)',
                      }}
                    />
                  </button>
                  <div
                    style={{
                      marginTop: 10,
                      minHeight: 28,
                      padding: '6px 10px',
                      borderRadius: 8,
                      background: 'rgba(239, 231, 218, 0.7)',
                      color: SHARED_WINDOW_COLORS.body,
                      fontSize: 12,
                      lineHeight: 1.35,
                      overflowWrap: 'anywhere',
                      wordBreak: 'break-word',
                    }}
                  >
                    {renderTextWithLinks(panel.sourceText || 'Source link:')}
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
                      background: 'rgba(184, 155, 114, 0.12)',
                    }}
                  />
                  <div
                    style={{
                      minHeight: 140,
                      borderRadius: 12,
                      background: 'rgba(184, 155, 114, 0.2)',
                    }}
                  />
                </div>
              )}
          </div>
        </div>
      </div>
      </div>

      {zoomedImage?.panelKey === displayedPanelKey && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged chart image"
          onClick={() => setZoomedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            padding: 28,
            background: 'rgba(23, 18, 15, 0.78)',
            zIndex: 500,
            cursor: 'zoom-out',
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '94vw',
              maxHeight: '90vh',
              padding: 14,
              borderRadius: 18,
              background: '#fffaf0',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.42)',
              cursor: 'default',
            }}
          >
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              style={{
                position: 'absolute',
                right: 12,
                top: 12,
                width: 34,
                height: 34,
                padding: 0,
                border: '1px solid rgba(47, 37, 32, 0.35)',
                borderRadius: 999,
                background: 'rgba(255, 250, 240, 0.92)',
                color: '#2f2520',
                fontSize: 20,
                lineHeight: 1,
                cursor: 'pointer',
                outline: 'none',
              }}
              aria-label="Close enlarged image"
            >
              ×
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              style={{
                display: 'block',
                maxWidth: '90vw',
                maxHeight: '84vh',
                objectFit: 'contain',
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
