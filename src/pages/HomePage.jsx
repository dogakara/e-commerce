import Slider from "../components/Slider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const dispatch = useDispatch();
  const { productList, fetchState } = useSelector(state => state.product || { productList: [], fetchState: 'NOT_FETCHED' });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Slider />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Öne Çıkan Ürünler</h2>

        {fetchState === 'FETCHING' ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : fetchState === 'FAILED' ? (
          <p className="text-center text-red-600 text-xl">Ürünler yüklenemedi (API kontrol et)</p>
        ) : productList.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">Ürün bulunamadı</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {productList.map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}