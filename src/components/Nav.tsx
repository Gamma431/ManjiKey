import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="w-[100%] bg-gray-950 h-20 flex justify-between p-[1%] items-center">
      <div className="w-[50%] h-full flex items-center text-xl object-cover">
        <div className="w-[25%] h-full bg-[url('/img/Logo/no-bg-logo.png')] bg-cover bg-no-repeat bg-center"></div>
         <img src='public/img/Logo/no-bg-logo.png'/>
      </div>
      <div className="w-[25%] flex text-white gap-[10%] justify-center">
          <Link to="/">Home</Link> 
          <Link to="/about">About</Link> 
          <Link to="/keyboards">Keyboards</Link>
      </div>
    </div>
  )
}
