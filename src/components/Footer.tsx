import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = ["Home", "Products", "Keyboards", "About"];
  const socialLinks = [
    { name: "Instagram", color: "hover:text-pink-400" },
    { name: "Twitter", color: "hover:text-cyan-400" },
    { name: "Discord", color: "hover:text-indigo-400" },
    { name: "YouTube", color: "hover:text-red-400" },
  ];

  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: "10vh" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      // Matches your Nav: bg-black/70, backdrop-blur, and subtle border
      className="relative w-[96%] mx-[2%] mt-[10vh] mb-[2vh] rounded-[25px] overflow-hidden bg-black/70 backdrop-blur-md border border-white/10 text-white shadow-2xl"
    >
      {/* 
        Subtle Background Glows: 
        Kept these but lowered opacity so they don't overpower the Nav-style glass 
      */}
      <div className="absolute w-[40vw] h-[40vw] bg-indigo-500/10 blur-[120px] rounded-full top-[-10%] left-[-5%]"></div>
      <div className="absolute w-[50vw] h-[50vw] bg-cyan-500/5 blur-[140px] rounded-full bottom-[-20%] right-[-10%]"></div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row p-[5%] lg:p-[7%] gap-[8%]">
        
        {/* LEFT SIDE: Branding & CTA */}
        <div className="w-full lg:w-[40%] flex flex-col gap-[5vh]">
          <motion.div
            whileHover={{ scale: 1.03, rotate: "-1deg" }}
            transition={{ duration: 0.4 }}
            className="w-full h-[12vh] sm:h-[18vh] flex justify-start"
          >
            <img 
              src="img/Logo/no-bg-logo.png" 
              alt="Logo" 
              className="h-full w-auto object-contain object-left drop-shadow-[0_0_35px_rgba(99,102,241,0.3)]"
            />
          </motion.div>

          <div className="flex flex-col gap-[3vh]">
            <p className="text-gray-400 text-[100%] sm:text-[115%] leading-[180%] max-w-[90%]">
              Built for gamers, creators and keyboard enthusiasts who want
              something beyond ordinary typing. Premium mechanical keyboards,
              custom aesthetics and futuristic concepts made with passion.
            </p>

            <div className="flex flex-wrap gap-[3%] mt-[2%]">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(99,102,241,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-[5%] py-[2%] rounded-[15px] bg-indigo-600/80 hover:bg-indigo-600 font-semibold text-[90%] transition-all"
              >
                Explore Products
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#818cf8" }}
                whileTap={{ scale: 0.95 }}
                className="px-[5%] py-[2%] rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-md text-[90%]"
              >
                Join Community
              </motion.button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Grid Sections */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4vw]">
          
          {/* CONTACT */}
          <motion.div whileHover={{ y: "-1vh" }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[25px] p-[10%] flex flex-col gap-[3vh]">
            <h2 className="text-[150%] font-semibold text-white">Contact</h2>
            <div className="flex flex-col gap-[2vh] text-gray-400">
              <p className="hover:text-indigo-300 duration-300 cursor-pointer text-[90%]">example@gmail.com</p>
              <p className="hover:text-indigo-300 duration-300 cursor-pointer text-[90%]">+123 456 7890</p>
              <p className="hover:text-indigo-300 duration-300 cursor-pointer text-[90%]">Yerevan, Armenia</p>
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div whileHover={{ y: "-1vh" }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[25px] p-[10%] flex flex-col gap-[3vh]">
            <h2 className="text-[150%] font-semibold text-white">Navigation</h2>
            <div className="flex flex-col gap-[2vh] text-gray-400">
              {navLinks.map((link) => (
                <Link key={link} to={`/${link.toLowerCase()}`} className="hover:text-white hover:translate-x-[5%] duration-300 cursor-pointer text-[90%]">
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* SOCIALS */}
          <motion.div whileHover={{ y: "-1vh" }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[25px] p-[10%] flex flex-col gap-[3vh]">
            <h2 className="text-[150%] font-semibold text-white">Socials</h2>
            <div className="flex flex-col gap-[2vh] text-gray-400">
              {socialLinks.map((social) => (
                <p key={social.name} className={`${social.color} hover:translate-x-[5%] duration-300 cursor-pointer text-[90%]`}>
                  {social.name}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR: Matches the translucent strip style */}
      <div className="relative z-10 w-full border-t border-white/10 px-[5%] py-[3%] flex flex-col sm:flex-row justify-between items-center gap-[2vh] text-gray-500 text-[85%] bg-black/40">
        <motion.p whileHover={{ scale: 1.02 }}>
          © {new Date().getFullYear()} Manji Key. All rights reserved.
        </motion.p>
        <div className="flex gap-[10%] whitespace-nowrap">
          <p className="hover:text-white duration-300 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white duration-300 cursor-pointer">Terms</p>
        </div>
      </div>
    </motion.footer>
  );
}