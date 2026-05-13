import { motion } from "motion/react"
import { Link } from "react-router-dom";

export default function MiniSideMenu() {
  return (
    <motion.div
      initial={{ width: "1vw", fontSize: "0px", }}
      whileHover={{
        width: "6vw",
        height: "28vh",
        left: "93vw",
        fontSize: "14px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      
      className="
        hidden sm:flex
        fixed left-[98vw] top-[40vh]
        w-[2vw] h-[10vh]
        z-50 bg-gray-800
        flex-col items-center justify-center
        py-2 rounded-3xl
        text-white shadow-2xl shadow-black
        cursor-pointer overflow-hidden
      "
    >
      
      <div className="flex p-2 w-full h-full flex-col items-center justify-center gap-2">

        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/keyboards", label: "Keybs" },
          { to: "/products", label: "Prdcts" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-700 w-full h-full rounded-xl flex items-center justify-center"
          >
            <Link to={item.to}>
              {item.label}
            </Link>
          </motion.div>
        ))}

      </div>

    </motion.div>
  );
}