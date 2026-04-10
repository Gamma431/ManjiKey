import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="w-[100%] bg-gray-950 h-20 flex justify-between p-[1%] items-center">
      <div className="w-[50%] h-[100%] flex items-center text-xl object-cover gap-[2%]">
        <img src="public/img/keyboard.jpg" className="w-[15%] "/>
        <h2 className="text-white ">ManjiKey</h2>
      </div>
      <div className="w-[25%] flex text-white gap-[10%] justify-center">
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/keyboards">Keyboards</Link>
      </div>
    </div>
  )
}
