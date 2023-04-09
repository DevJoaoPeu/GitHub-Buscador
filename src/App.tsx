import { Outlet } from "react-router-dom"
import { Home } from "./routes/Home"

function App() {

  return (
    <div className="App">
      <h1>GitHub Buscador</h1>
      <Home />
    </div>
  )
}

export default App
