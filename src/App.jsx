import "./style/Canvas.css"
import './style/index.css'
import "./style/menu.css"
import "./style/tileSet.css"

import GenerateBar from "./components/GenerateBar/GenerateBar"
import Canvas from "./components/p5draw/canvas"


function App() {
  return (<>
    <section className="canvas">
      <Canvas />
    </section >
    <GenerateBar />
    < footer ></footer >
  </>
  )
}

export default App
