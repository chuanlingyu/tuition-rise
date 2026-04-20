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
        background: '#eaeaea',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 24,
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
        Click on the figures for more info
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
        hasSeenPanel={Boolean(seenPanels.rootWords)}
      />
      <SharedInfoWindow panelKey={activePanel} onClose={() => setActivePanel(null)} />
    </div>
  )
}
