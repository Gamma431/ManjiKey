import { getProducts } from "../Data/Products";
import MinProductCard from "../components/HomeMiniProd";

export default function Keyboard() {
  const product = getProducts()
  return (
    <div className='w-[100%] h-auto p-[2%]'>
      <div className='w-[100%] h-[100vh] flex gap-3'>
        <div className='w-[30%] h-[90vh] bg-gray-900 rounded-[15px] '>

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
