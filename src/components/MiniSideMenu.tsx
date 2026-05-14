import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function MiniSideMenu() {
  return (
    <motion.div
      initial={{ width: "1vw", fontSize: "0px" }}
      whileHover={{
        width: "6vw",
        height: "28vh",
        left: "93vw",
        fontSize: "12px", // Adjusted slightly for cleaner fit
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="
        hidden sm:flex
        fixed left-[98vw] top-[40vh]
        w-[2vw] h-[10vh]
        z-50 
        bg-black/70 backdrop-blur-md
        border border-white/40
        flex-col items-center justify-center
        py-2 rounded-[25px]
        text-white shadow-2xl shadow-black
        cursor-pointer overflow-hidden
      "
    >
      <div className="flex p-[10%] w-full h-full flex-col items-center justify-center gap-[1vh]">
        
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/keyboards", label: "Keybs" },
          { to: "/products", label: "Prdcts" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255, 255, 255, 0.1)" 
            }}
            className="w-full h-full rounded-xl flex items-center justify-center transition-colors"
          >
            <Link 
              className="w-full h-full flex items-center justify-center uppercase tracking-tighter font-medium text-gray-300 hover:text-white" 
              to={item.to}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}