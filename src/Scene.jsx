import Labels from './components/Labels.jsx'
import LeftClimb from './components/LeftClimb.jsx'
import RightDebt from './components/RightDebt.jsx'
import Tree from './components/Tree.jsx'
import ParentsAssist from './components/ParentsAssist.jsx'
import LeftStudent from './components/LeftStudent.jsx'
import TreeWords from './components/TreeWords.jsx'
import RootWords from './components/RootWords.jsx'


export default function Scene() {
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
      <LeftClimb />
      <RightDebt />
      <Labels />
      <ParentsAssist/>
      <LeftStudent />
      <Labels />
      <TreeWords />
      <Tree />
      <RootWords />
    </div>
  )
}
