import { HashRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Keyboard from "./Pages/Keyboard"
import Footer from "./components/Footer"
import MiniSideMenu from "./components/MiniSideMenu.tsx";
import Products from "./Pages/Products.tsx"

function App() {
  return (
    <HashRouter>
      <div className="w-[100%] h-[auto] bg-black pb-5">
        <Nav />
        <MiniSideMenu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/keyboards" element={<Keyboard />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
        
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
