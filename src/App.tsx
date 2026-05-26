import { HashRouter, Route, Routes, useLocation} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Keyboard from "./Pages/Keyboard"
import Footer from "./components/Footer"
import MiniSideMenu from "./components/MiniSideMenu.tsx";
import Products from "./Pages/Products.tsx"
import Cart from "./Pages/Cart.tsx"
import { useEffect, useState, type ComponentType, type Dispatch, type SetStateAction } from "react"


function App() {
  // ensure Nav is typed to accept the sidebar setter prop
  const NavComponent = Nav as ComponentType<{ setIsSidebarOpen: Dispatch<SetStateAction<boolean>> }>
  function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="w-full h-auto bg-black pb-5">
        <NavComponent setIsSidebarOpen={setIsSidebarOpen}/>
        
        <Cart
              isOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
          />

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
