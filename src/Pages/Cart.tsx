import { motion } from "motion/react"
import type { Dispatch, SetStateAction } from "react"

interface SideBarProps {
  isOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function Cart({ isOpen, setIsSidebarOpen }: SideBarProps) {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: isOpen ? 0 : 700 }}
      transition={{ duration: 0.4,ease:"easeInOut" }}
      className="
        fixed
        right-0
        top-0
        w-[25vw]
        h-screen
        backdrop-blur-3xl
        p-9
        z-50
        flex
        flex-col
      "
    >
      <button onClick={() => setIsSidebarOpen(false)} className="w-[15%] ml-[75%]">
        <img src="public/img/Icons/close.png" alt="" className="opacity-70"/>
      </button>

      
    </motion.div>
  )
}