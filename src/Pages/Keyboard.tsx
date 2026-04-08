import { getProducts } from "../Data/Products";
import MinProductCard from "../components/HomeMiniProd";

export default function Keyboard() {
  const product = getProducts()
  return (
    <div className='w-[100%] h-auto p-[2%]'>
      <div className='w-[100%] h-[100vh] flex gap-3'>
        <div className='w-[25%] h-[90vh] bg-gray-900 rounded-[15px] p-[1%] '>
          <div className="h-[10%] w-[100%] flex text-white justify-center items-center">
            <img src="src/img/Icons/icons8-slider-96.png" className="w-[10%] h-[50%]"/>
            <h2 className="text-[30px]">Fitlers</h2>
          </div>
          <div className="w-[100%] h-[20%] text-white p-[3%]">
            <h2 className="text-[23px] mx-[2%]">Price Range</h2>
            <input type="range" className="w-[100%]"/>
            <p className="text-[20px] text-center">$0 - $600</p>
          </div>
          <div className="w-[100%] h-[37%] flex flex-col text-white p-[2%]">
            <h2 className="text-[23px] m-[2%]">Brands</h2>
            <div className="w-full flex justify-between text-[20px]"><p>Akko</p> <p className="text-gray-500">8</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>AttackShark</p> <p className="text-gray-500">6</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Logitech</p> <p className="text-gray-500">4</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Redragon</p> <p className="text-gray-500">9</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Corsair</p> <p className="text-gray-500">2</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Ducky</p> <p className="text-gray-500">1</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Razer</p> <p className="text-gray-500">10</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>EppoMaker</p> <p className="text-gray-500">3</p></div>
          </div>
          <div className="w-[100%] h-[30%] flex flex-col text-white p-[2%]">
            <h2 className="text-[23px] m-[2%]">Key Style</h2>
            <div className="w-full flex justify-between text-[20px]"><p>Mechanical 40%</p> <p className="text-gray-500">3</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Mechanical 60%</p> <p className="text-gray-500">22</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Mechanical 80%</p> <p className="text-gray-500">9</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Mechanical 100%</p> <p className="text-gray-500">2</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Dashed React</p> <p className="text-gray-500">1</p></div>
            <div className="w-full flex justify-between text-[20px]"><p>Wierless</p> <p className="text-gray-500">5</p></div>

          </div>
        </div>
        <div className="w[-70%] h-[90vh] bg-[url('src/img/bluryBg.jpg')] bg-center bg-cover rounded-[15px] grid grid-cols-3 grid-rows-auto overflow-x-scroll p-2">
            {product.map((product) => (
              <MinProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}
