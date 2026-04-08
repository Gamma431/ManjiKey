import type { Product } from "../Data/HomeFeatData";

interface Props {
  product: Product;
}

export default function MinProductCard({ product }: Props) {
  return (
    <div className="text-white rounded-xl p-2 shadow hover:shadow-lg transition">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-44 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-gray-600">
        ${product.price}
      </p>

      <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
}