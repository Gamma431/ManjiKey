import { getProducts } from "../Data/Products";
import MinProductCard from "../components/HomeMiniProd";
import { motion } from "motion/react";

export default function Keyboard() {
  const product = getProducts()

  return (
    <motion.div
      initial={{ opacity: 0, transform:"translateY(200px)"}}
      animate={{ opacity: 1, transform:"translateY(0)" }}
      transition={{duration:1, ease:"easeInOut"}}
      className='w-full h-auto p-[2%]'
    >

      <div className='w-full h-full flex flex-col lg:flex-row gap-3'>

        <motion.div
          initial={{ opacity: 0, transform:"translateX(-200px)"}}
          animate={{ opacity: 1, transform:"translateX(0)" }}
          transition={{duration:1, ease:"easeInOut",delay:0.5}}
          className='w-full lg:w-[25%] h-auto lg:h-[90vh] bg-gray-900 rounded-[15px] p-[3%] lg:p-[1%]'
        >

          <div className="h-auto lg:h-[10%] w-full flex text-white justify-center items-center gap-2 mb-6">
            <div className="w-7.5 h-7.5 lg:w-[10%] lg:h-[50%] bg-[url('/img/Icons/filter-icon.jpg')] bg-contain bg-no-repeat bg-center"></div>

            <h2 className="text-[24px] sm:text-[30px]">
              Fitlers
            </h2>
          </div>

          <div className="w-full h-auto lg:h-[20%] text-white p-[3%]">
            <h2 className="text-[20px] sm:text-[23px] mx-[2%]">
              Price Range
            </h2>

            <input type="range" className="w-full"/>

            <p className="text-[18px] sm:text-[20px] text-center">
              $0 - $600
            </p>
          </div>

          <div className="w-full h-auto lg:h-[37%] flex flex-col text-white p-[2%] mt-4">
            <h2 className="text-[20px] sm:text-[23px] m-[2%]">
              Brands
            </h2>

            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Akko</p> <p className="text-gray-500">8</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>AttackShark</p> <p className="text-gray-500">6</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Logitech</p> <p className="text-gray-500">4</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Redragon</p> <p className="text-gray-500">9</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Corsair</p> <p className="text-gray-500">2</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Ducky</p> <p className="text-gray-500">1</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Razer</p> <p className="text-gray-500">10</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>EppoMaker</p> <p className="text-gray-500">3</p></div>
          </div>

          <div className="w-full h-auto lg:h-[30%] flex flex-col text-white p-[2%] mt-4">
            <h2 className="text-[20px] sm:text-[23px] m-[2%]">
              Key Style
            </h2>

            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Mechanical 40%</p> <p className="text-gray-500">3</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Mechanical 60%</p> <p className="text-gray-500">22</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Mechanical 80%</p> <p className="text-gray-500">9</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Mechanical 100%</p> <p className="text-gray-500">2</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Dashed React</p> <p className="text-gray-500">1</p></div>
            <div className="w-full flex justify-between text-[16px] sm:text-[20px]"><p>Wierless</p> <p className="text-gray-500">5</p></div>
          </div>

        </motion.div>

        <div className="w-full lg:w-[70%] h-auto lg:h-[90vh] bg-[url('/img/blurry-bg.jpg')] bg-center bg-cover rounded-[15px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-auto overflow-x-scroll p-2 gap-4">
          {product.map((product) => (
            <MinProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

    </motion.div>
  )
}