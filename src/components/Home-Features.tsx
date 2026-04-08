import type { Product } from "../Data/HomeFeatData";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="text-white rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
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