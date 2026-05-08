import { motion } from "motion/react"
import {Link} from "react-router-dom";
export default function MiniSideMenu() {
    return (
        <motion.div  whileHover={{width:"5vw",height:"22vh", left:"94vw",fontSize:"16px"}} className="left-[98vw] text-[0px] bg-gray-800 w-[1%] h-[10vh] z-1000  fixed bottom-0 top-[40vh] flex flex-col items-center justify-center py-1 rounded-3xl text-white shadow-2xl shadow-black cursor-pointer">
           <div className=" flex p-2  w-[90%] h-full flex-col items-center justify-center gap-1">
               <motion.div whileHover={{scale:"1.1", }} className="bg-gray-700 w-full h-[33%] rounded-xl flex flex-col items-center justify-center">
                  <Link to="/" >Home</Link>
               </motion.div>
               <motion.div whileHover={{scale:"1.1",}} className="bg-gray-700 w-full h-[33%] rounded-xl flex flex-col items-center justify-center">
                   <Link to="/about" >About</Link>
               </motion.div>
               <motion.div whileHover={{scale:"1.1",}} className="bg-gray-700 w-full  h-[33%] rounded-xl flex flex-col items-center justify-center">
                   <Link to="/keyboards" >Keybs</Link>
               </motion.div>
           </div>
        </motion.div>
    );
}
