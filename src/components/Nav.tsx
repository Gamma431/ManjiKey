import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="w-full bg-gray-950 h-16 sm:h-20 flex justify-between p-[3%] sm:p-[1%] items-center">

      <div className="w-[60%] sm:w-[50%] h-full flex items-center text-xl object-cover">
        <div className="w-[40%] sm:w-[25%] h-full bg-[url('/img/Logo/no-bg-logo.png')] bg-cover bg-no-repeat bg-center"></div>
      </div>

      <div className="w-[40%] sm:w-[25%] flex text-white gap-[5%] sm:gap-[10%] justify-end sm:justify-center text-[12px] sm:text-[14px] md:text-base">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/keyboards">Keyboards</Link>
        <Link to="/products">Products</Link>
      </div>

    </div>
  )
}