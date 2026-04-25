import { useState } from 'react'
import Labels from './components/Labels.jsx'
import LeftClimb from './components/LeftClimb.jsx'
import RightDebt from './components/RightDebt.jsx'
import Tree from './components/Tree.jsx'
import ParentsAssist from './components/ParentsAssist.jsx'
import LeftStudent from './components/LeftStudent.jsx'
import TreeWords from './components/TreeWords.jsx'
import RootWords from './components/RootWords.jsx'
import SharedInfoWindow from './components/SharedInfoWindow.jsx'
import arrowImg from './assets/icons/arrow.png'


export default function Scene() {
  const [activePanel, setActivePanel] = useState(null)
  const [seenPanels, setSeenPanels] = useState({})

  function togglePanel(panelKey) {
    setSeenPanels((current) => ({ ...current, [panelKey]: true }))
    setActivePanel((current) => (current === panelKey ? null : panelKey))
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100svh',
        overflow: 'hidden',
        background: '#F6F1E8',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '7%',
          padding: '10px 18px',
          border: '2px solid #b91c1c',
          borderRadius: 12,
          background: 'rgba(255, 245, 245, 0.94)',
          color: '#b91c1c',
          fontSize: 28,
          fontWeight: 900,
          lineHeight: 1,
          zIndex: 125,
          pointerEvents: 'none',
        }}
      >
        Before College
      </div>

      <div
        style={{
          position: 'absolute',
          top: '27%',
          right: '7%',
          padding: '10px 18px',
          border: '2px solid #b91c1c',
          borderRadius: 12,
          background: 'rgba(255, 245, 245, 0.94)',
          color: '#b91c1c',
          fontSize: 28,
          fontWeight: 900,
          lineHeight: 1,
          zIndex: 125,
          pointerEvents: 'none',
        }}
      >
        After College
      </div>

      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: 24,
          padding: '12px 16px',
          border: '2px solid #2f2520',
          borderRadius: 14,
          background: 'rgba(255, 248, 238, 0.94)',
          color: '#2f2520',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: 1.3,
          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.14)',
          zIndex: 120,
          pointerEvents: 'none',
        }}
      >
        Click on the figures for more realities
        <br />
        and stories behind the them
      </div>

      <LeftClimb
        onTogglePanel={togglePanel}
        hasSeenClimbPanel={Boolean(seenPanels.leftClimb)}
        hasSeenLadderPanel={Boolean(seenPanels.ladder)}
      />
      <RightDebt
        onTogglePanel={togglePanel}
        hasSeenPanel={Boolean(seenPanels.rightDebt)}
      />
      <Labels
        onTogglePanel={togglePanel}
        hasSeenDollarPanel={Boolean(seenPanels.dollar)}
      />
      <ParentsAssist
        onTogglePanel={togglePanel}
        hasSeenPanel={Boolean(seenPanels.parentAssist)}
      />
      <LeftStudent
        onTogglePanel={togglePanel}
        activePanel={activePanel}
        hasSeenPanel={Boolean(seenPanels.leftStudent)}
      />
      <Labels
        onTogglePanel={togglePanel}
        hasSeenDollarPanel={Boolean(seenPanels.dollar)}
      />
      <TreeWords
        onTogglePanel={togglePanel}
        hasSeenPanel={Boolean(seenPanels.treeWords)}
      />
      <Tree />
      <RootWords
        onTogglePanel={togglePanel}
        hasSeenRankPanel={Boolean(seenPanels.rank)}
        hasSeenCompetitionPanel={Boolean(seenPanels.competition)}
      />
      <img
        src={arrowImg}
        alt="Arrow"
        style={{
          // New scene arrow: adjust these values to move or resize it.
          position: 'absolute',
          right: '17%',
          top: '40%',
          width: 90,
          transform: 'scaleX(-0.65) scaleY(-1.25)',
          opacity: 0.85,
          zIndex: 12,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 24,
          bottom: 18,
          maxWidth: 360,
          padding: '8px 12px',
          border: '1px solid rgba(47, 37, 32, 0.35)',
          borderRadius: 10,
          background: 'rgba(255, 248, 238, 0.88)',
          color: '#2f2520',
          fontSize: 12,
          fontWeight: 650,
          lineHeight: 1.35,
          boxShadow: '0 8px 18px rgba(0, 0, 0, 0.1)',
          zIndex: 120,
          pointerEvents: 'none',
        }}
      >
        This project use ChatGPT and Codex for image generation and portion of the coding
      </div>
      <SharedInfoWindow panelKey={activePanel} onClose={() => setActivePanel(null)} />
    </div>
  )
}
