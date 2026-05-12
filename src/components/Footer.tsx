import { motion } from "motion/react"

export default function Footer() {
  return (
    <motion.div whileInView={{transform:"translateX(0)",opacity:1}} initial={{transform:"translateX(-200px)",opacity:0}}  transition={{duration:1, ease:"easeInOut"}} className="w-[96%] h-[65vh] mx-[2%] text-white bg-gray-800 rounded-[25px] flex p-[1%]">
      <div className="w-[50%] h-full ">
        <div className="w-full h-[40%] bg-[url('/img/Logo/no-bg-logo.png')] bg-cover bg-center"></div>
        <div className="w-full h-[60%] p-[1%] text-[30px] flex gap-[1%]">
          <div className="w-[50%] h-[50%] p-[10%] text-[30px]">
          <h1 className="text-[40px] def-font">Contact Us</h1>
          <p className="text-[20px]">Email: example@gmail.com</p>
          <p className="text-[20px]">Phone: +1234567890</p>
          <p className="text-[20px]">Address: 123 Main Street, City, Country</p>
        </div>
        <div className="w-[50%] h-[50%] p-[10%] text-[30px] flex flex-col  items-center gap-[1%]">
          <h1 className="text-[40px] def-font">Follow Us</h1>
          <p className="text-[20px]">Facebook: @example</p>
          <p className="text-[20px]">Twitter: @example</p>
          <p className="text-[20px]">Instagram: @example</p>
        </div>
        </div>
      </div>
      <hr className=" mx-[2%] h-full border border-gray-400 rounded-[5px]"/>
      <div className="w-[50%] h-full ">
        
        <div className="w-full h-full p-[1%] text-[30px] flex justify-center items-center gap-[1%]">
          <div className="w-[50%] h-[50%] p-[10%] text-[30px]">
          <h1 className="text-[40px] def-font">Customer Service</h1>
          <p className="text-[20px]">FAQ: Frequently Asked Questions</p>
          <p className="text-[20px]">Returns: Return Policy and Process</p>
          <p className="text-[20px]">Shipping: Shipping Information and Tracking</p>
        </div>
        <div className="w-[50%] h-[50%] p-[10%] text-[30px] flex flex-col gap-[1%]">
          <h1 className="text-[40px] def-font">Legal</h1>
          <p className="text-[20px]">Privacy Policy: How We Handle Your Data</p>  
          <p className="text-[20px]">Terms of Service: User Agreement and Guidelines</p>
          <p className="text-[20px]">Copyright: Intellectual Property Rights</p>
        </div>
        </div>
        
      </div>
    </motion.div>
  )
}
