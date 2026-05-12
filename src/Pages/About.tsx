import {motion} from "motion/react";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, transform:"translateY(200px)"}} animate={{ opacity: 1, transform:"translateY(0)" }} transition={{duration:1, ease:"easeInOut"}} className="p-[2%] w-full h-auto">
        <motion.div  initial={{ scale: 0.9 }} animate={{ scale: 1 }}  transition={{duration:1, ease:"easeInOut",delay:0.5}} className="w-full px-[1%] h-auto gap-[2%] flex flex-col items-center justify-start bg-gray-900 rounded-2xl">
            <motion.h1 whileHover={{scale:1.3,color:"#62a0ea",opacity:1 }}  className="text-white text-[300px]  def-font"> Lets Key  </motion.h1>
            <p className=" text-white text-[60px] def-font">For the last Time</p>
            <div className="w-full h-[70vh] bg-gray-950 rounded-2xl p-[2%] flex justify-center gap-[2%]">
              <motion.div whileHover={{scale:"1.08", boxShadow:"10px 10px 50px black"}}  className="duration-300 w-[40%] rounded-[140px] bg-[url('/img/lets-key.png')] bg-cover bg-center"></motion.div>
              <p className="w-[50%] text-[30px] p-[5%] text-white ">We're making best way to give you a cahnce have a nice keyboard and type on it as its your best one you ever had, lately We're about to start selling Keycaps and mechaninc & magnetic swithves too, Soo its going to be sooner and sooner keep following and get more items to have our <i className="underline decoration-1 text-[35px]">limited</i> Edition <strong>Keycaps</strong>  </p>
            </div>
            <div className="w-full h-[50vh] bg-indigo-900 rounded-2xl p-[2%] flex flex-col justfiy-between items-center mb-6 shadow-2xl shadow-black">
              <h2 className="text-white text-[40px]">Our products</h2>
              <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
              <div className="w-full h-[80%] flex items-center justify-center gap-[2%]">
                <img src="https://images.unsplash.com/photo-1728047505377-5e6c504fb7e3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[30%] h-[80%] object-cover rounded-2xl shadow-2xl shadow-black"/>
                <p className="text-white text-[20px]">Trusted and test verified products with 1005 warranty and capability ready to sell</p>
              </div>
            </div>
              <div className="w-full h-[50vh] bg-gray-950 rounded-2xl p-[2%] flex flex-col justfiy-between items-center mb-6 shadow-2xl shadow-black">
              <h2 className="text-white text-[40px]">Our Story</h2>
              <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
              <div className="w-full h-[80%] flex items-center justify-center gap-[2%]">
                <img src="https://plus.unsplash.com/premium_photo-1664194583917-e2ca85efc15e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9hcmRzJTIwc3Rvcnl8ZW58MHx8MHx8fDA%3D" alt="" className="w-[30%] h-[80%] object-cover rounded-2xl shadow-2xl shadow-black"/>
                <p className="text-white text-[20px]">Started by small idea to a big  carry for others to have their real dream as ours</p>
              </div>
              </div>
              
              <div className="w-full h-[50vh] bg-indigo-900 rounded-2xl p-[2%] flex flex-col justfiy-between items-center mb-6 shadow-2xl shadow-black">
              <h2 className="text-white text-[40px]">Our Team</h2>
              <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
              <div className="w-full h-[80%] flex items-center justify-center gap-[2%]">
                <img src="https://images.unsplash.com/photo-1604330497682-743e8ce2e343?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[30%] h-[80%] object-cover rounded-2xl shadow-2xl shadow-black"/>
                <p className="text-white text-[20px]">Within our team, we are dedicated to creating the best keyboard experience for our users.</p>
              </div>
              </div>
              <div className="w-full h-[50vh] bg-gray-950 rounded-2xl p-[2%] flex flex-col justfiy-between items-center mb-6 shadow-2xl shadow-black">
              <h2 className="text-white text-[40px]">Our Customers</h2>
              <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
              <div className="w-full h-[80%] flex items-center justify-center gap-[2%]">
                <img src="https://plus.unsplash.com/premium_photo-1683865775631-3283bfaf6508?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[30%] h-[80%] object-cover rounded-2xl shadow-2xl shadow-black"/>
                <p className="text-white text-[20px]">Satisfied customers who trust our products and services.</p>
              </div>
              </div>
              <div className="w-full h-[50vh] bg-indigo-900 rounded-2xl p-[2%] flex flex-col justfiy-between items-center mb-6 shadow-2xl shadow-black">
              <h2 className="text-white text-[40px]">Our Values</h2>
              <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
              <div className="w-full h-[80%] flex items-center justify-center gap-[2%]">
                <img src="https://images.unsplash.com/photo-1746292183273-3816f78c0ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmQlMjBzdG9yZSUyMHdvcmtlcnN8ZW58MHx8MHx8fDA%3D"/>
                <p className="text-white text-[20px]">We value innovation, quality, and customer satisfaction above all else.</p>
              </div>
              </div>
              
              
              <div className="w-full h-[50vh] bg-gray-950 rounded-2xl p-[2%] flex flex-col justfiy-between items-center mb-6 shadow-2xl shadow-black">
              <h2 className="text-white text-[40px]">Our Support</h2>
              <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>   
              <div className="w-full h-[80%] flex items-center justify-center gap-[2%]">
                <img src="https://plus.unsplash.com/premium_photo-1682310522369-80e6cd96849a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHdlYiUyMHN1cHBvcnR8ZW58MHx8MHx8fDA%3D" alt="" className="w-[30%] h-[80%] object-cover rounded-2xl shadow-2xl shadow-black"/>
                <p className="text-white text-[20px]">Dedicated support team available to assist you with any questions or concerns.</p>
              </div>
            </div>
        </motion.div>

    </motion.div>
  )
}
