import type { Product } from "../Data/HomeFeatData";
import { motion } from "motion/react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div   className=" text-white rounded-xl p-4 shadow hover:shadow-lg transition">
      <motion.img 
        whileHover={{scale:1.2,borderRadius:"40px"}}
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-gray-600">
        ${product.price}
      </p>
    </div>
  );
}