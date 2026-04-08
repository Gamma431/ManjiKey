import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Keyboard from "./Pages/Keyboard"

function App() {
  return (
    <BrowserRouter>
      <div className="w-[100%] h-[auto] bg-black">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/keyboards" element={<Keyboard />}/>
        </Routes>
        

      </div>
    </BrowserRouter>
  )
}

export default App
