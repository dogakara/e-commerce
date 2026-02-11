import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, toggleCartItem } from "../store/actions/cartActions";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart || { cart: [] });

  const selectedItems = cart.filter(item => item.checked);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.count * item.product.price, 0);
  const shipping = 0; // Kargo bedava varsayımı
  const discount = 0; // İndirim şimdilik 0
  const grandTotal = totalPrice + shipping - discount;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Sepetim ({cart.length} Ürün)</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-md p-10">
            <p className="text-2xl text-gray-700 mb-6">Sepetiniz boş görünüyor.</p>
            <Link 
              to="/shop" 
              className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Alışverişe Devam Et
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center p-6 border-b last:border-b-0">
                  
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => dispatch(toggleCartItem(item.product.id))}
                    className="h-5 w-5 text-black focus:ring-black border-gray-300 rounded"
                  />

                  
                  <img
                    src={item.product.images?.[0]?.url || "https://via.placeholder.com/100"}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg ml-6"
                  />

                  
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">₺{item.product.price.toFixed(2)} x {item.count}</p>
                  </div>

                  <div className="flex items-center space-x-4 mx-6">
                    <button
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                      disabled={item.count <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.count}</span>
                    <button
                      onClick={() => dispatch(addToCart(item.product))}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

         
                  <div className="flex items-center space-x-6">
                    <p className="text-lg font-bold min-w-[120px] text-right">
                      ₺{(item.count * item.product.price).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="text-red-600 hover:text-red-800"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="bg-white rounded-xl shadow-md p-6 h-fit lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold mb-6">Sipariş Özeti</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Ürünler Toplamı</span>
                  <span>₺{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Kargo</span>
                  <span className="text-green-600">Ücretsiz</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>İndirim</span>
                  <span className="text-red-600">-₺{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl pt-4 border-t">
                  <span>Genel Toplam</span>
                  <span>₺{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="mt-8 w-full bg-orange-500 text-white py-4 rounded-lg font-medium hover:bg-orange-600 transition text-lg">
                Sepeti Onayla
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}