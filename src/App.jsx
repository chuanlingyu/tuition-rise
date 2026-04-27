import { useEffect, useMemo, useRef, useState } from 'react'
import CommentsPage from './components/CommentsPage.jsx'
import IntroductionPage from './components/IntroductionPage.jsx'
import Scene from './Scene.jsx'
import LowerContentPage from './components/LowerContentPage.jsx'
import WorkCitedPage from './components/WorkCitedPage.jsx'

const TAKEOVER_DELAY_SCREEN = 0.28

function AppleStyleScroll({ pages }) {
  const scrollerRef = useRef(null)
  const contentRefs = useRef([])
  const [metrics, setMetrics] = useState({
    contentHeights: [],
    viewportHeight: 1,
    totalScrollDistance: 1,
  })
  const metricsRef = useRef(metrics)
  const [scrollState, setScrollState] = useState({
    activeIndex: 0,
    nextIndex: 1,
    progress: 0,
    contentOffset: 0,
  })

  useEffect(() => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return undefined
    }

    let frameId = null

    function measurePages() {
      const viewportHeight = window.innerHeight || 1
      const contentHeights = pages.map((_, index) => {
        const contentElement = contentRefs.current[index]

        return Math.max(contentElement?.scrollHeight || viewportHeight, viewportHeight)
      })
      const totalScrollDistance = contentHeights.reduce((total, contentHeight, index) => {
        const internalScrollDistance = Math.max(contentHeight - viewportHeight, 0)

        if (index === pages.length - 1) {
          return total + internalScrollDistance
        }

        return total + internalScrollDistance + viewportHeight
      }, 0)

      const nextMetrics = {
        contentHeights,
        viewportHeight,
        totalScrollDistance,
      }

      metricsRef.current = nextMetrics
      setMetrics(nextMetrics)
    }

    function updateScrollState() {
      const currentMetrics = metricsRef.current
      const rect = scroller.getBoundingClientRect()
      const scrollY = Math.min(Math.max(-rect.top, 0), currentMetrics.totalScrollDistance)
      let segmentStart = 0

      for (let index = 0; index < pages.length; index += 1) {
        const contentHeight = currentMetrics.contentHeights[index] || currentMetrics.viewportHeight
        const internalScrollDistance = Math.max(contentHeight - currentMetrics.viewportHeight, 0)
        const segmentDistance =
          index === pages.length - 1
            ? internalScrollDistance
            : internalScrollDistance + currentMetrics.viewportHeight
        const isActiveSegment =
          index === pages.length - 1 || scrollY <= segmentStart + segmentDistance

        if (isActiveSegment) {
          const localScroll = Math.max(scrollY - segmentStart, 0)
          const transitionScroll = Math.max(localScroll - internalScrollDistance, 0)
          const delayDistance = currentMetrics.viewportHeight * TAKEOVER_DELAY_SCREEN
          const takeoverDistance = Math.max(currentMetrics.viewportHeight - delayDistance, 1)
          const progress =
            index === pages.length - 1
              ? 0
              : Math.min(Math.max((transitionScroll - delayDistance) / takeoverDistance, 0), 1)

          setScrollState({
            activeIndex: index,
            nextIndex: Math.min(index + 1, pages.length - 1),
            progress,
            contentOffset: Math.min(localScroll, internalScrollDistance),
          })
          return
        }

        segmentStart += segmentDistance
      }
    }

    function handleScroll() {
      if (frameId !== null) {
        return
      }

      frameId = requestAnimationFrame(() => {
        frameId = null
        updateScrollState()
      })
    }

    measurePages()
    updateScrollState()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', measurePages)
    window.addEventListener('load', measurePages)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', measurePages)
      window.removeEventListener('load', measurePages)

      if (frameId !== null) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [pages])

  return (
    <div
      ref={scrollerRef}
      className="apple-scroll"
      style={{
        height: `${metrics.totalScrollDistance + metrics.viewportHeight}px`,
      }}
    >
      <div className="apple-scroll-stage">
        {pages.map((page, index) => {
          const isActive = index === scrollState.activeIndex
          const isNext =
            scrollState.activeIndex < pages.length - 1 && index === scrollState.nextIndex
          const isPast = index < scrollState.activeIndex
          const takeoverProgress = isNext ? scrollState.progress : 0
          const panelContentHeight = metrics.contentHeights[index] || metrics.viewportHeight
          const panelInternalScroll = Math.max(panelContentHeight - metrics.viewportHeight, 0)
          const contentOffset = isActive
            ? scrollState.contentOffset
            : isPast
              ? panelInternalScroll
              : 0

          return (
            <div
              key={page.key}
              className="apple-scroll-panel"
              style={{
                opacity: isNext ? Math.min(takeoverProgress * 1.35, 1) : isActive || isPast ? 1 : 0,
                transform: isNext
                  ? `translateY(${(1 - takeoverProgress) * 100}%)`
                  : 'translateY(0%)',
                zIndex: isNext ? 20 : isActive ? 10 : isPast ? 1 : 0,
              }}
            >
              <div
                ref={(element) => {
                  contentRefs.current[index] = element
                }}
                className="apple-scroll-panel-content"
                style={{
                  transform: `translateY(${-contentOffset}px)`,
                }}
              >
                {page.content}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function App() {
  const pages = useMemo(
    () => [
      { key: 'intro', content: <IntroductionPage /> },
      { key: 'scene', content: <Scene /> },
      { key: 'lower-content', content: <LowerContentPage /> },
      { key: 'comments', content: <CommentsPage /> },
      { key: 'work-cited', content: <WorkCitedPage /> },
    ],
    [],
  )

  return (
    <AppleStyleScroll pages={pages} />
  )
}

export default App
