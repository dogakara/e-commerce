import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square bg-gray-50">
          <img
            src={product.images?.[0]?.url || "https://via.placeholder.com/300"}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {product.category?.name || "Kategori"}
        </p>
        <p className="text-lg font-bold text-black mt-2">
          ₺{product.price?.toFixed(2)}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-3 w-full bg-black text-white py-2 text-sm rounded-lg hover:bg-gray-800 transition"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}