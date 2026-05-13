import ProductCard from "../components/Home-Features";
import MinProductCard from "../components/HomeMiniProd";
import { getHomeFeatProducts } from "../Data/HomeFeatData";
import { getProducts } from "../Data/Products";
import { motion } from "motion/react";

export default function Home() {
  const products = getHomeFeatProducts()
  const product = getProducts()

  return (
    <motion.div
      initial={{ opacity: 0, transform:"translateY(200px)"}}
      animate={{ opacity: 1, transform:"translateY(0)" }}
      transition={{duration:1, ease:"easeInOut"}}
      className="w-full h-auto p-[2%] overflow-hidden"
    >

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{duration:1, ease:"easeInOut",delay:0.5}}
        className="w-full h-auto md:h-[80vh] text-white flex flex-col p-[6%] md:p-[10%] justify-center bg-[url('/img/white-hero.jpg')] bg-center bg-cover rounded-[15px]"
      >
        <h1 className="text-[35px] sm:text-[45px] md:text-[60px] lg:text-[70px] text-[#00021b] font-extrabold hover:text-white hover:scale-[1.1] transition duration-300">
          The Shop that Gamers Love most
        </h1>

        <h3 className="text-[20px] sm:text-[28px] md:text-[35px] lg:text-[40px] text-white mt-4">
          Thx for visiting our site hope you'll find your dream keyboard
        </h3>

        <p className="text-[14px] sm:text-[16px] md:text-[20px] text-white mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sapiente.
        </p>
      </motion.div>

      <div className="w-full h-auto md:h-[70vh] flex flex-col text-white items-center px-[5%] sm:px-[10%] md:px-[20%] lg:px-[30%] justify-center py-16 text-center">
        <h1 className="text-[40px] sm:text-[55px] md:text-[70px] lg:text-[80px]">
          Our Products
        </h1>

        <p className="text-[15px] sm:text-[17px] md:text-[20px] text-blue-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptates consequuntur minima velit iusto rerum veritatis quaerat? Totam sapiente eum assumenda, voluptatem vitae dolorem fugit deleniti obcaecati sed nobis! Quidem.
        </p>
      </div>

      <motion.div
        whileInView={{transform:"translateY(0)",opacity:1}}
        initial={{transform:"translateY(200px)",opacity:0}}
        transition={{duration:1, ease:"easeInOut"}}
        className="w-full h-auto bg-[url('/img/black-without-keys.jpg')] bg-center bg-cover rounded-[15px] my-10"
      >
        <div className="w-full h-full backdrop-blur-[5px] rounded-[15px] p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{transform:"translateY(0)",opacity:1}}
        initial={{transform:"translateY(200px)",opacity:0}}
        transition={{duration:1, ease:"easeInOut"}}
        className="w-full h-auto lg:h-screen bg-gray-900 rounded-[15px] my-10"
      >
        <div className="w-full h-full rounded-[15px] p-[4%] lg:p-[2%] pb-[10%]">
          <h1 className="text-white text-[30px] sm:text-[40px] md:text-[50px] text-center mb-10">
            Top Rated Keyboards
          </h1>

          <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
            {product.slice(4, 12).map((product) => (
              <MinProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{transform:"translateX(0)",opacity:1}}
        initial={{transform:"translateX(200px)",opacity:0}}
        transition={{duration:2, ease:"easeInOut"}}
        className="w-full h-auto lg:h-[60vh] flex flex-col lg:flex-row justify-center items-center gap-10 py-10"
      >

        <div className="w-full lg:w-[40%] h-75 sm:h-100 lg:h-[90%]">
          <img
            src="https://images.unsplash.com/photo-1714116363269-e34e62803535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTk4fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww"
            className="w-full h-full rounded-[25px] sm:rounded-[40px] lg:rounded-[55px] object-cover"
          />
        </div>

        <div className="text-white w-full lg:w-[60%] h-full p-4 sm:p-10 lg:p-20 flex flex-col justify-center">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px]">
            Logitech G Pro X
          </h1>

          <p className="text-[25px] sm:text-[30px] lg:text-[40px]">
            $149.99
          </p>

          <p className="text-[18px] sm:text-[24px] lg:text-[30px]">
            High-end gaming mechanical keyboard.
          </p>
        </div>

      </motion.div>

    </motion.div>
  )
}