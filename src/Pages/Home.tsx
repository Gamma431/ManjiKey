import ProductCard from "../components/Home-Features";
import MinProductCard from "../components/HomeMiniProd";
import { getHomeFeatProducts } from "../Data/HomeFeatData";
import { getProducts } from "../Data/Products";

export default function Home() {
  const products = getHomeFeatProducts() 
  const product = getProducts()
  return (
    <div className="w-full h-auto p-[2%]">

      <div className="w-full h-[80vh] text-white flex flex-col p-[10%] justify-center bg-[url('/img/White(hero).jpg')] bg-center bg-cover rounded-[15px]">
        <h1 className="text-[70px] text-[#00021b] font-extrabold">
          The Shop that Gamers Love most
        </h1>
        <h3 className="text-[40px] text-white">
          Thx for visiting our site hope you'll find your dream keyboard
        </h3>
        <p className="text-[20px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sapiente.
        </p>
      </div>

      <div className="w-full h-[70vh] flex flex-col text-white items-center px-[30%] justify-center">
        <h1 className="text-[80px]">Our Products</h1>
        <p className="text-[20px] text-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptates consequuntur minima velit iusto rerum veritatis quaerat? Totam sapiente eum assumenda, voluptatem vitae dolorem fugit deleniti obcaecati sed nobis! Quidem.
        </p>
      </div>


      <div className="w-full h-auto bg-[url('/img/black-without-keys.jpg')] bg-center bg-cover rounded-[15px] my-10">
        <div className="w-full h-full backdrop-blur-[5px] rounded-[15px] p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
          
      <div className="w-[100%] h-[100vh] bg-gray-900 rounded-[15px] my-10">
        <div className="w-full h-full rounded-[15px] p-8">
          <h1 className="text-white text-[50px] text-center">Top Rated Keyboards</h1>
          <div className="h-full grid grid-cols-4 grid-rows-2 gap-6">
            {product.slice(4, 12).map((product) => (
              <MinProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[60vh] flex justify-center items-center">
        <div className="w-[40%] h-[90%]">
          <img src="https://images.unsplash.com/photo-1714116363269-e34e62803535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTk4fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww" className="w-[100%] h-full rounded-[55px] object-cover"/>
        </div>
        <div className="text-white w-[60%] h-full p-20 flex flex-col ">
          <h1 className=" text-[50px]">Logitech G Pro X</h1>
          <p className=" text-[40px]">$149.99</p>
          <p className="text-[30px]">High-end gaming mechanical keyboard.</p>
        </div>
      </div>

    </div>
  )
}