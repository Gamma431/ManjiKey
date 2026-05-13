import type { Product } from "../Data/HomeFeatData";
import { motion } from "motion/react";  

interface Props {
  product: Product;
}

export default function MinProductCard({ product }: Props) {
  return (
    <div className="text-white rounded-xl p-2 sm:p-3 shadow hover:shadow-lg transition">

      <motion.img
        whileHover={{scale:1.2,borderRadius:"40px"}}
        src={product.img}
        alt={product.name}
        className="w-full h-40 sm:h-44 md:h-52 object-cover object-center rounded-lg"
      />

      <h3 className="mt-3 text-[16px] sm:text-[18px] lg:text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-gray-600 text-[14px] sm:text-[16px]">
        ${product.price}
      </p>

      <button className="mt-3 w-full bg-black text-white py-2 text-[14px] sm:text-[16px] rounded-lg hover:bg-gray-800">
        Add to Cart
      </button>

    </div>
  );
}