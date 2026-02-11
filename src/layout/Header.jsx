import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header() {
  const { cart } = useSelector(state => state.cart || { cart: [] });
  const { user } = useSelector(state => state.client || { user: null });

  const cartCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-black tracking-tight">
            E-Commerce
          </Link>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Ürün, marka ara..."
                className="w-full pl-5 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {user ? (
              <Link to="/orders" className="flex items-center space-x-2 text-gray-700 hover:text-black">
                <User size={18} />
                <span className="hidden md:inline text-sm font-medium">{user.name.split(" ")[0]}</span>
              </Link>
            ) : (
              <Link to="/signup" className="text-gray-700 hover:text-black text-sm font-medium">
                Hesabım
              </Link>
            )}

            <Link to="/favorites" className="text-gray-700 hover:text-black">
              <Heart size={18} />
            </Link>

            <Link to="/cart" className="relative text-gray-700 hover:text-black">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center h-10 space-x-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-black">Anasayfa</Link>
            <div className="relative group">
              <button className="flex items-center hover:text-black">
                Kategoriler
                <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48">
                <div className="py-1">
                  <Link to="/shop/kadin" className="block px-4 py-2 text-sm hover:bg-gray-100">Kadın</Link>
                  <Link to="/shop/erkek" className="block px-4 py-2 text-sm hover:bg-gray-100">Erkek</Link>
                  <Link to="/shop/cocuk" className="block px-4 py-2 text-sm hover:bg-gray-100">Çocuk</Link>
                </div>
              </div>
            </div>
            <Link to="/shop" className="hover:text-black">Mağaza</Link>
            <Link to="/about" className="hover:text-black">Hakkımızda</Link>
            <Link to="/contact" className="hover:text-black">İletişim</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}