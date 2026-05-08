import {motion} from "motion/react";

export default function About() {
  return (
    <motion.div className="p-[2%] w-full h-auto">
        <div className="w-full px-[1%] h-[180vh] flex flex-col items-center justify-start bg-gray-900 rounded-2xl">
            <h1 className="text-white text-[300px]  def-font"> Lets Key  </h1>
            <p className=" text-white text-[60px] def-font">For the last Time</p>
            <div className="w-full h-[70vh] bg-gray-950 rounded-2xl p-[2%] flex justify-center gap-[2%]">
              <motion.div whileHover={{scale:"1.08", boxShadow:"10px 10px 50px black"}}  className="duration-300 w-[40%] rounded-[140px] bg-[url('/img/lets-key.png')] bg-cover bg-center"></motion.div>
              <p className="w-[50%] text-[30px] p-[5%] text-white ">We're making best way to give you a cahnce have a nice keyboard and type on it as its your best one you ever had, lately We're about to start selling Keycaps and mechaninc & magnetic swithves too, Soo its going to be sooner and sooner keep following and get more items to have our <i className="underline decoration-1 text-[35px]">limited</i> Edition <strong>Keycaps</strong>  </p>
            </div>
            
        </div>

    </motion.div>
  )
}
